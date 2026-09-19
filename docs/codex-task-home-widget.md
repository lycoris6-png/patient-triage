# 実装指示書: ぺいとり！ ホーム画面ウィジェット（Android）

作成日: 2026-09-16
対象リポジトリ: `patient-triage`（Web正本）と `patient-triage-android`（Androidラッパー）の両方
モックアップ: https://claude.ai/artifact/V4qSophJD31b6zjUL73dAF （見た目・サイズ・透過の挙動はこれを正とする）

両リポジトリの `AGENTS.md` に従うこと。**コミット・pushはしない**。`service-worker.js` の `CACHE_NAME` は触らない。
Web側を変えたら `node --check prototype_unified_triage.app.js`、Android側は `npm run check` と `gradlew.bat :app:assembleDebug` を通すこと。

---

## 0. ゴール（1段落）

ぺいとり！APK に、Android ホーム画面ウィジェットを1種類追加する。マス数（2×2〜4×4）に応じて中身が変わり、背景の透過度を設定画面で 0〜100% に調整でき、選んだキャラクターの立ち絵が状態に応じたポーズで表示される。4×3 以上では「予定タスク直近1件 ＋ 患者タスク1〜2件 ＋ すきまタスク1件」を出す。ウィジェット上のチップをタップすると **ぺいとり ⇄ でいとり** の表示が切り替わり、本体をタップするとその表示中のモードでアプリが開く。

## 1. やらないこと（スコープ外）

- わーとり（work モード）の表示・切替
- ウィジェット上での完了操作（将来案。今回はタップで開くだけ）
- Jetpack Glance / Compose の導入（RemoteViews + XML で作る）
- アニメーション、独自フォント（システムフォント固定）
- Wear 連携の既存 payload（`buildWatchStatePayload`, `schemaVersion 1`）の変更。ウィジェットは**別の payload** を持つ

## 2. 全体の仕組み

```
[Web] prototype_unified_triage.app.js
   タスク/予定/モード変更のたびに
   window.dispatchEvent('patient-triage-widget-state', {detail: buildWidgetStatePayload(...)})
        │
[Web/native] native/native-bridge.js（数十行追加）
   上のイベントを受け、時報のキャラ設定とセリフ在庫を添えて
   WidgetSync.sendState({ state })
        │
[Kotlin] WidgetSyncPlugin  ── SharedPreferences("peitori_widget") に JSON 保存
        │                     └ AppWidgetManager.notifyAppWidgetViewDataChanged / updateAppWidget
[Kotlin] PeitoriWidgetProvider ── 保存済み state + ウィジェット設定 → RemoteViews
[Kotlin] PeitoriWidgetConfigActivity ── 追加時と長押し「再設定」で開く設定画面

タップ:
  本体 → MainActivity を起動（Intent extras: widget=true, mode, destination）
        → MainActivity が WidgetSyncPlugin に渡す → JS が
          'patient-triage-native-navigation' {source:'widget', mode, destination:'today_tasks'} を発火
        → Web 本体が setAppMode(mode) して今日のタスクへ
  モードチップ → Provider 宛 Broadcast（ACTION_TOGGLE_MODE, appWidgetId）
        → そのウィジェットの表示モードだけ切替（アプリは起動しない）
```

既存の参照実装:

- Watch 向け送信の書き方: `patient-triage-android/native/watch-bridge.js`, `WearSyncPlugin.kt`
- 縮小 state の作り方: `prototype_unified_triage.app.js` の `buildWatchTasksPayload` / `buildWatchStatePayload`（6580行付近）と、それを発火する `useEffect`（13225行付近）
- 通知タップからの画面遷移: `native-bridge.js` の `navigateFromNotification`、Web 側 `onNavigation`（11920行付近）
- 状態→表示の並び順の考え方: `android/wear/.../data/WatchState.kt` の `sortedForNextTask`

---

## 3. Web 側の変更（`patient-triage/prototype_unified_triage.app.js`）

### 3.1 payload ビルダーを追加（Watch 用とは別物）

`buildWatchStatePayload` の直後に追加する。`WIDGET_STATE_SCHEMA_VERSION = 1`。

```js
{
  schemaVersion: 1,
  generatedAt: Date.now(),
  workday: todayStr(),
  appMode: 'patient' | 'daily' | 'work',      // 本体の現在モード（表示は Kotlin 側の選択が優先）
  mentorArt: 'classic' | 'variant',           // coachCast.mentorArt（エストの色違い）
  scheduled: [                                // 予定（モード共通）。status !== 'done' のみ、日付+時刻昇順、最大5件
    { id, title, scheduledDate: 'YYYY-MM-DD', scheduledTime: 'HH:MM' }
  ],
  modes: {
    patient: { stats: { doneToday, remaining }, patientTasks: [...], generalTasks: [...], roundCheck: { total, done } },
    daily:   { stats: { doneToday, remaining }, patientTasks: [...], generalTasks: [...], roundCheck: { total: 0, done: 0 } }
  }
}
```

- `patientTasks` / `generalTasks` の各要素は **`buildWatchTasksPayload` と同じ形**（`id, patientId, source, patientLabel, ward, priority, title, type, estimateMinutes, targetCount, status, scheduledAt`）に、**`wardLabel: wardLabel(getWard(p))`** を1項目足したもの。`buildWatchTasksPayload` を呼んで `source` で振り分ければよい。general 側は `wardLabel: ''`。
- `patient` モードは `patients`（`role !== 'sub'` を除外、Watch と同じ）と `generalTasks`、`daily` モードは `dailyPatients` と `dailyGeneralTasks` を使う。**アクティブでない側も毎回計算して両方入れる**（ウィジェットが本体を起動せずに切り替えるため）。
- `stats.remaining` = そのモードの `isActionableTask` な患者タスク数 ＋ 未完了 general 数。`stats.doneToday` = そのモードの `status === 'done'` 数（patient 側は `closedPatientTasks.length` も加算。既存 `donePatientTaskCount` の計算に合わせる）。
- `roundCheck` は既存 `buildWatchRoundCheckPayload(patients)` の `total` / `done` のみ（患者名リストは入れない）。
- 患者メモ・プロブレム・薬剤・過去ログ・secret 類は入れない（Watch と同方針）。

### 3.2 発火する `useEffect` を追加

Watch 用の `useEffect`（13225行付近）の直後に、同じ依存の考え方で追加する。

- 条件: `loaded && nativeNotificationsAvailable`
- 依存: `appMode, patients, dailyPatients, generalTasks, dailyGeneralTasks, scheduledEvents, closedPatientTasks, coachCast`
- `patient-triage-native-ready` を受けたときも再送する（Watch 用と同じパターン）
- 連続変更で連打しないよう `setTimeout` 400ms でデバウンスし、クリーンアップで `clearTimeout`

### 3.3 ウィジェットからの起動を受ける

既存 `onNavigation`（`if (!['scheduled_event_notification','exam_check_notification'].includes(...)) return;`）に `'widget'` を追加し、`source === 'widget'` のときは:

```js
if (detail.mode === 'daily' || detail.mode === 'patient') setAppMode(detail.mode);
setFocusMode(false);
setScheduledOpen(false);
```

を行う。`exam_check` 用の `setWorkModeEnabled(false)` などは呼ばない。既存の `switchToPatientMode`（DOM クリックによる切替）は**使わない**。

### 3.4 チェック

- `node --check prototype_unified_triage.app.js`
- でいとりモードで開いても patient 側の件数が payload に入ること、その逆も入ることを `console.log` で一度確認してから消す

---

## 4. Android 側の変更（`patient-triage-android`）

### 4.1 `native/native-bridge.js`（既存ファイルに追記）

`WidgetSync` プラグインを `capacitor.Plugins?.WidgetSync || capacitor.registerPlugin?.('WidgetSync')` で取得し、以下を追加する。プラグインが無ければ何もしない（`watch-bridge.js` と同じ流儀）。

1. `window.addEventListener('patient-triage-widget-state', e => ...)`: `e.detail` に次を足して `WidgetSync.sendState({ state })`。
   - `character`: `{ id, name }`。時報設定 `loadConfig().characterId` を使う。`'random'` のときは `characterForSlot('random', <今日の00:00の Date>, 0)`（1日固定）。
   - `lines`: 選ばれたキャラの在庫 `parseLineStore().lines.filter(l => l.characterId === id && l.isValid !== false).map(l => l.text).slice(0, 10)`。0件なら `parseCharacter(id).examples.slice(0, 5)`。
2. 起動時（`patient-triage-native-ready` を発火する直前）に `WidgetSync.consumeLaunchAction()` を呼び、戻り値に `source === 'widget'` があれば `patient-triage-native-navigation` を `detail` そのまま（`{source:'widget', mode, destination:'today_tasks'}`）で発火し、`destination === 'today_tasks'` なら通知タップと同じスクロール処理を行う。
3. `WidgetSync.addListener('widgetOpen', detail => ...)`: アプリ起動中に onNewIntent で届いた場合も同じ処理。

`tests/native-bridge-smoke.mjs` の疑似 Capacitor に `WidgetSync` を足し、`sendState` が呼ばれる・`consumeLaunchAction` が起動時に1回呼ばれることを assert に追加する。

### 4.2 Kotlin 新規ファイル（`android/app/src/main/java/io/github/lycoris6png/patienttriage/widget/`）

| ファイル | 役割 |
|---|---|
| `WidgetSyncPlugin.kt` | `@CapacitorPlugin(name = "WidgetSync")`。`sendState(call)`: `state` を JSON 文字列で `WidgetStateStore` に保存し、全ウィジェット更新。`consumeLaunchAction(call)`: `LaunchActionHolder` に溜まった extras を返して消す。`notifyLaunch(extras)`: `notifyListeners("widgetOpen", ...)` |
| `WidgetStateStore.kt` | `SharedPreferences("peitori_widget")`。`state_json`、ウィジェットIDごとの設定 `cfg_<id>_*`、ウィジェットIDごとの表示モード `mode_<id>` |
| `WidgetState.kt` | `WidgetState.fromJson(json)`。3.1 の形。壊れていたら `empty()` |
| `WidgetContentPicker.kt` | 5章の選択ルール（純粋関数。単体テスト対象） |
| `MascotAssets.kt` | キャラID＋ポーズ → assets パス → Bitmap。6章 |
| `PeitoriWidgetProvider.kt` | `AppWidgetProvider`。`onUpdate` / `onAppWidgetOptionsChanged` / `onReceive(ACTION_TOGGLE_MODE)` / `onDeleted`（設定削除） |
| `WidgetRenderer.kt` | state + 設定 + サイズ → `RemoteViews`。7章 |
| `PeitoriWidgetConfigActivity.kt` | 設定画面。8章 |
| `LaunchActionHolder.kt` | `object`。MainActivity から受けた extras を保持 |

`MainActivity.java`:

- `registerPlugin(WidgetSyncPlugin.class)` を追加
- `onCreate` で `getIntent()`、`onNewIntent(intent)` で `setIntent(intent)` した上で、`intent.getBooleanExtra("peitori_widget", false)` なら `LaunchActionHolder.put(extras)` し、プラグインが load 済みなら `notifyLaunch` も呼ぶ

### 4.3 `AndroidManifest.xml`

```xml
<receiver android:name=".widget.PeitoriWidgetProvider" android:exported="true"
          android:label="@string/widget_label">
  <intent-filter>
    <action android:name="android.appwidget.action.APPWIDGET_UPDATE"/>
    <action android:name="io.github.lycoris6png.patienttriage.widget.TOGGLE_MODE"/>
  </intent-filter>
  <meta-data android:name="android.appwidget.provider" android:resource="@xml/peitori_widget_info"/>
</receiver>
<activity android:name=".widget.PeitoriWidgetConfigActivity" android:exported="true"
          android:theme="@style/AppTheme">
  <intent-filter><action android:name="android.appwidget.action.APPWIDGET_CONFIGURE"/></intent-filter>
</activity>
```

`ACTION_TOGGLE_MODE` の PendingIntent は `getBroadcast(..., FLAG_IMMUTABLE | FLAG_UPDATE_CURRENT)`、requestCode に appWidgetId を使う。

### 4.4 `res/xml/peitori_widget_info.xml`

```xml
<appwidget-provider
  android:minWidth="110dp" android:minHeight="110dp"
  android:minResizeWidth="110dp" android:minResizeHeight="110dp"
  android:maxResizeWidth="320dp" android:maxResizeHeight="400dp"
  android:targetCellWidth="4" android:targetCellHeight="2"
  android:resizeMode="horizontal|vertical"
  android:updatePeriodMillis="1800000"
  android:initialLayout="@layout/widget_oneliner"
  android:previewLayout="@layout/widget_oneliner"
  android:configure="io.github.lycoris6png.patienttriage.widget.PeitoriWidgetConfigActivity"
  android:widgetFeatures="reconfigurable|configuration_optional"
  android:widgetCategory="home_screen"
  android:description="@string/widget_description"/>
```

`targetCellWidth/Height`, `previewLayout`, `widgetFeatures`, `description` は API 31 以降の属性。minSdk 26 なのでビルドは通るが、`tools:targetApi="s"` を付けて lint を黙らせる。`configuration_optional` にするので、設定を開かずに追加された場合は 8章の既定値で動くこと。

### 4.5 `build.gradle`

追加依存なし（`androidx.core`, `appcompat` は既にある）。`kotlinx-coroutines-android` も既存。

---

## 5. 表示内容の選択ルール（`WidgetContentPicker`）

入力: `WidgetState`, 表示モード `mode`（`patient` / `daily`）, 行数 `rows`（4×3 → 3、4×4 → 4）, 現在時刻。
出力: `List<Row>`（`kind: SCHEDULED | PATIENT | GENERAL`, `label`, `title`, `time?`, `priority`）と `remaining`, `doneToday`, `pose`。

### 5.1 枠の割り当て

| 行数 | 予定 | 患者 | すきま |
|---|---|---|---|
| 3（4×3） | 1 | 1 | 1 |
| 4（4×4） | 1 | 2 | 1 |

枠が埋まらないとき（例: 予定が0件）は **患者タスク → すきまタスクの順で残りから補充**し、行数まで埋める。全体で0件なら行を出さず「ぜんぶ完了」表示にする（7.4）。

### 5.2 予定（モード共通、`state.scheduled` から）

1. `scheduledDate + scheduledTime` を `LocalDateTime` にして昇順
2. 現在時刻以降で最も早い1件を選ぶ
3. なければ **今日の日付で既に過ぎたものの最後の1件**（ラベル「経過」）
4. それもなければ枠は空

表示: `label = "予定"`（経過なら `"予定・経過"`）、`title`、`time = "HH:MM"`（今日以外は `"M/D HH:MM"`）。

### 5.3 患者タスク（`modes[mode].patientTasks`）

`status` が `done` / `hold` を除外し、次で並べて先頭から取る（`WatchState.kt` の `sortedForNextTask` と同じ）:
priority（`er > high > normal > low > planned`）→ status（`doing > stuck > todo`）→ `scheduledAt` 昇順（null は最後）→ `id`。

表示ラベル:

- patient モード: 「患者名を伏せる」ON → `wardLabel`（空なら `"患者"`）。OFF → `"${wardLabel} ${patientLabel}"`
- daily モード: `patientLabel`（でいとりでは患者欄がカテゴリ名なので、伏せる設定に関係なくそのまま出す）

### 5.4 すきまタスク（`modes[mode].generalTasks`）

`done` / `hold` を除外、status（`doing > stuck > todo`）→ `scheduledAt` → `id` の順で先頭1件。ラベルは patient モード `"すきま"`、daily モード `"生活"`。

### 5.5 ポーズと件数

`remaining = modes[mode].stats.remaining`, `doneToday = modes[mode].stats.doneToday`。

| 条件（上から評価） | pose | 使う画像の接尾辞 |
|---|---|---|
| 現在時刻が 22:00〜翌 06:59 | `sleep` | `_08_sleeping` |
| `remaining == 0 && doneToday > 0` | `done` | `_07_completed`（gray / sangrail / yushka は `_07_paper`） |
| `remaining in 1..2` | `few` | `_02_thumbsup` |
| それ以外（state が空のときも） | `neutral` | `_01_neutral` |

---

## 6. マスコット（`MascotAssets`）

キャラID → 画像セット（`assets/public/chibi_split_pngs/` 内、`www/index.html` 1420行付近の `cast` と同じ対応）:

| id | name | セット |
|---|---|---|
| mentor | エスト | `mentorArt == 'variant'` なら `est_variant`、それ以外 `blue_white_girl` |
| spark | ナディア | `red_antler_girl` |
| butler | ジーン | `bat_wing_girl` |
| yushka | ユシュカ | `yushka` |
| adjutant | ナジーン | `purple_adjutant` |
| gray | グレイ | `gray` |
| sangrail | サングレイル | `sangrail` |

- パス: `public/chibi_split_pngs/${set}_${suffix}.png` を `context.assets.open` で読む。ファイルが無いときは同セットの `_01_neutral`、それも無ければマスコット非表示にしてクラッシュしない。
- 元画像は最大 320×448。`BitmapFactory.Options.inSampleSize` で **表示高さの2倍を超えない**ように縮小（4×3 の小さい立ち絵は 92dp なので大きく縮む）。RemoteViews の Bitmap 上限対策。
- `setImageViewBitmap` で渡す。1ウィジェットにつき Bitmap は1枚だけ。

---

## 7. 見た目（`WidgetRenderer`）。モックの通り

### 7.1 サイズ → レイアウト

| 幅マス | 高さマス | レイアウト |
|---|---|---|
| 2 | 2, 3 | `widget_mascot.xml` |
| 3〜 | 2 | `widget_oneliner.xml` |
| 3〜 | 3 | `widget_list.xml`（行 3） |
| 3〜 | 4〜 | `widget_list.xml`（行 4 ＋ 回診バー） |

- API 31+: `RemoteViews(mapOf(SizeF(110f,110f) to mascot, SizeF(180f,110f) to oneliner, SizeF(180f,180f) to list3, SizeF(180f,250f) to list4))` を返し、ランチャーに選ばせる。
- API 26〜30: `onAppWidgetOptionsChanged` の `OPTION_APPWIDGET_MIN_WIDTH` / `OPTION_APPWIDGET_MAX_HEIGHT`（dp）から `cells = (dp + 30) / 70` で算出して1つ返す。

### 7.2 背景と透過

- 各レイアウトの最背面に `ImageView @id/widget_bg`、`src = @drawable/widget_bg`（`shape` 角丸 `?android:attr/dialogCornerRadius` 相当。API 31+ は `@android:dimen/system_app_widget_background_radius`、それ未満は 24dp）、色は白。
- 色味: `setInt(R.id.widget_bg, "setColorFilter", toneColor)`。透過: `setInt(R.id.widget_bg, "setImageAlpha", (opacity / 100f * 255).roundToInt())`。
- 色味の定義（文字色・アクセントも一緒に切り替える）:

| tone | 背景 | 文字 | アクセント |
|---|---|---|---|
| light（既定） | `#FFFFFF` | `#1E1547` | `#6C3EF8` |
| dark | `#16122E` | `#F3EEFF` | `#C4B5FD` |
| purple | `#6C3EF8` | `#FFFFFF` | `#FFFFFF` |
| dynamic（API 31+ のみ選択可） | `@android:color/system_accent1_50`（dark テーマ時 `_800`） | `system_accent1_900`（dark 時 `_50`） | `system_accent1_600` |

- **文字は壁紙に直接載せない**。吹き出し・件数・タスク行は必ず自分の「ピル」背景（`ImageView` + 角丸 shape）の上に置く。ピルの見え方は透過度で切り替える:
  - `opacity >= 50`: ピル色 = アクセント、alpha 0.14（うっすら）
  - `opacity < 50`: ピル色 = 背景色、alpha 0.92（自分で背景を持つ）
  これで 0% にしても文字が読める。
- 完了バッジ（2×2 の「残り N」）は常に不透明（アクセント色、`remaining == 0` なら `#16A34A`）。

### 7.3 各レイアウトの中身

**widget_mascot（2×2 / 2×3）**: 立ち絵を下揃えで最大化、右上に `残り N` バッジ、左上に小さなモードチップ（「ぺいとり」/「でいとり」、タップで切替）。吹き出しは出さない。

**widget_oneliner（4×2）**: 左 118dp に立ち絵、右に上から「吹き出し（セリフ）」「`N 残り` `M 完了`」「進捗バー（done / (done+remaining)、完了時は緑）」。右上にモードチップ。

**widget_list（4×3 / 4×4）**: 上段: 左 74dp × 92dp の立ち絵、右に吹き出しと件数。上段右上にモードチップ。下段: 小見出し「つぎの N 件」、行は `[優先度バー 4dp][ラベル(10.5sp) / タイトル(12sp 太字・1行省略)][時刻 or ○]`。優先度バー: `er`/`high` は `#EF4444`、それ以外はアクセント、予定と general は薄色。4×4 のみ最下段に「回診チェック d/t」＋バー（patient モードのみ。daily では非表示）。

**モードチップ**: 文字は現在表示中のモード名。`ぺいとり` は紫系、`でいとり` はアプリ本体の daily 配色（`--accent: #2F6FED`）で塗り分ける。

### 7.4 特殊状態

- state 未受信（アプリ未起動）: 立ち絵 neutral ＋ 吹き出し「アプリを一度開くと同期します」。件数は「–」。
- そのモードの残りが 0: 一覧の代わりに「ぜんぶ完了。おつかれさま」1行、pose = done。
- セリフ非表示設定: 吹き出しを `GONE`、件数を上に詰める。
- マスコット非表示設定: 立ち絵を `GONE`、テキスト列を左いっぱいに。

### 7.5 セリフの選び方

- pose `neutral`: `state.lines`（時報在庫）から `index = (dayOfYear * 24 + hour) % lines.size`。空なら下の固定文の `neutral`。
- pose `few` / `done` / `sleep`: Kotlin 内の固定文（`res/values/strings.xml` に `widget_line_<id>_<pose>` で置く）。初期文面は次を使う（後でユーザーが編集する前提）:

| id | few | done | sleep |
|---|---|---|---|
| mentor | あと少しですね。順番どおりで大丈夫です。 | 今日の分は全部片づきました。おつかれさまでした。 | 今日はもう休みましょう。続きは明日で十分です。 |
| spark | あとちょっと！　ここまで来たら勝ちだよ。 | ぜんぶ終わった！　今日はきみの勝ち！ | もう夜だよ。今日はここまでにしよ？ |
| butler | 残りは少しだね。ぼくも一緒に見ているよ。 | 今日の分はぜんぶ終わったね。おつかれさま。 | 夜だね。ぼくと一緒に、今日はもう休もう。 |
| yushka | あと少しだ。最後まで気を抜くなよ。 | 全部片づけたか。今日はもう上がっていいぞ。 | 夜だ。まだ起きてるつもりか、さっさと寝ろ。 |
| adjutant | 残りはわずかだ。順に片づければ十分間に合う。 | 今日の予定は全て済んだ。よくやったな、君。 | もう遅い。今日はここで区切りにしよう。 |
| gray | あと少しだ！　ゴールはもう見えてるぜ。 | 全部クリアだ！　今日の冒険はここまで、おつかれ！ | 夜だな。勇者だって休む時は休むもんだぜ。 |
| sangrail | 残りは少しだね。僕も隣で見ているよ。 | 今日の分は全部終わったね。ゆっくり休んで。 | もう夜だよ。今日はここまでにしようか。 |

`neutral` の固定文は `native-bridge.js` の `CHARACTER_PROFILES[id].examples[0]` と同じ文を使う。

### 7.6 タップ

- 本体（`widget_bg` を含むルート）: `MainActivity` を `getActivity` の PendingIntent で起動。extras: `peitori_widget=true`, `source="widget"`, `mode=<表示中モード>`, `destination="today_tasks"`。requestCode は appWidgetId。`FLAG_IMMUTABLE | FLAG_UPDATE_CURRENT`。
- モードチップ: 4.3 の Broadcast。Provider 側で `mode_<id>` を反転して保存し、そのウィジェットだけ再描画。**アプリ本体のモードは変えない**（次に本体をタップして開いたときに揃う）。
- タスク行: 本体タップと同じ Intent（行ごとの遷移は今回はしない）。

---

## 8. 設定画面（`PeitoriWidgetConfigActivity`）

`APPWIDGET_CONFIGURE` と長押し「再設定」の両方から開く。`EXTRA_APPWIDGET_ID` が無ければ `finish()`。既存の値があれば読み込んで表示する。Web の配色（`#6C3EF8` アクセント、白背景）に合わせた素朴な縦並びで良い。

| 項目 | UI | 既定値 | 保存キー |
|---|---|---|---|
| キャラクター | 「時報と同じ」＋ 7名のチップ | 時報と同じ | `cfg_<id>_character` (`follow` or id) |
| 背景の透過度 | SeekBar 0〜100、右に `NN%` | 70 | `cfg_<id>_opacity` |
| 背景の色味 | 白 / 濃紺 / アプリ紫 / 壁紙に合わせる（API 31 未満は非表示） | 白 | `cfg_<id>_tone` |
| 最初に出すモード | ぺいとり / でいとり / アプリに合わせる | アプリに合わせる | `cfg_<id>_initial_mode` |
| マスコット | Switch | ON | `cfg_<id>_mascot` |
| セリフの吹き出し | Switch | ON | `cfg_<id>_line` |
| 患者名を伏せる | Switch | ON | `cfg_<id>_hide_patient_name` |

- 「保存してホーム画面へ」で保存 → `updateAppWidget` → `RESULT_OK` を `EXTRA_APPWIDGET_ID` 付きでセットして `finish()`。
- 「アプリに合わせる」は、`mode_<id>` が未設定のときだけ `state.appMode`（work なら patient）を初期値にする。一度チップで切り替えたら以後は `mode_<id>` が優先。
- `onDeleted` で `cfg_<id>_*` と `mode_<id>` を消す。

---

## 9. 更新タイミング

1. アプリ内で変更があるたび（3.2 のデバウンス後）→ `sendState` → 全ウィジェット即時更新
2. `updatePeriodMillis = 30分` の `onUpdate` → 保存済み state で再描画（ポーズ・セリフ・「経過」判定が進む）
3. 端末再起動後はシステムが `onUpdate` を呼ぶので特別対応なし
4. `sendState` は `generatedAt` が保存済みより古ければ無視する

---

## 10. プライバシー

- 既定で患者名を出さない（病棟ラベル＋タスク名のみ）。OFF にした場合でも患者名は `patientLabel` までで、メモ・プロブレム・薬剤は payload に含めないため出せない。
- Intent extras に患者情報を含めない。
- ランチャーのウィジェットプレビュー（`previewLayout`）はサンプル文言固定で、保存済み state を使わない。

---

## 11. 受け入れ条件（すべて満たすこと）

- [ ] 2×2, 2×3, 4×2, 4×3, 4×4 の各サイズで、7章の対応表どおりのレイアウトになる（Pixel 系ランチャーで伸縮して確認）
- [ ] 設定の透過度 0% で背景が完全に消え、立ち絵と吹き出し・件数だけが壁紙上で読める。100% で不透明
- [ ] 7キャラそれぞれで立ち絵が出る。エストは本体の色違い設定に追従する
- [ ] 22:00〜06:59 は sleep、残り 0 かつ完了 > 0 で done、残り 1〜2 で few、それ以外 neutral
- [ ] 4×3 で「予定1 ＋ 患者1 ＋ すきま1」、4×4 で「予定1 ＋ 患者2 ＋ すきま1」。予定が無いときは患者で補充される
- [ ] モードチップのタップでそのウィジェットだけ ぺいとり ⇄ でいとり が切り替わり、アプリは起動しない。件数・一覧・ラベル（すきま⇄生活）が切り替わる
- [ ] 本体タップで、表示中のモードでアプリが開き、今日のタスク位置にスクロールする。アプリが既に別モードで起動中でも切り替わる（onNewIntent 経路）
- [ ] 「患者名を伏せる」ON で病棟だけ、OFF で病棟＋患者名
- [ ] アプリ未起動（state 無し）でもクラッシュせず 7.4 の表示になる
- [ ] 長押し「再設定」で設定画面が開き、変更が即反映される。ウィジェット削除で設定が消える
- [ ] `patient-triage`: `node --check prototype_unified_triage.app.js` 成功
- [ ] `patient-triage-android`: `npm run check` 成功、`gradlew.bat :app:assembleDebug` 成功、`:wear:assembleDebug` が壊れていない
- [ ] `WidgetContentPicker` の JVM 単体テスト（予定の「直近／経過／なし」、補充ルール、pose の4分岐）を `app/src/test` に追加

## 12. 進め方（この順で、各段階で APK が動く状態にする）

1. Kotlin 側の土台（Provider / Store / Plugin / Manifest / info.xml）＋ `widget_mascot` ＋ 設定画面（キャラ・透過度のみ）。Web の payload 3.1〜3.2 もここで入れる
2. `widget_oneliner`、セリフ在庫の受け渡し（4.1）、ポーズ切替、色味、モードチップ
3. `widget_list`（3行/4行、補充ルール、回診バー）、本体タップの起動経路（3.3, 4.1 の 2〜3, MainActivity）、患者名を伏せる、単体テスト

## 13. 迷ったら

- 見た目はモックアップに寄せる。モックと本文が食い違う場合は本文（この文書）を優先し、差分を作業メモに残す
- 既存コードの流儀（`WearSyncPlugin.kt`, `watch-bridge.js`, `WatchState.kt`）に合わせる。新しいライブラリは足さない
- 判断が必要な点はコードに `// TODO(widget):` を残し、作業終了報告に列挙する
