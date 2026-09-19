# Codexタスク: 検査チェックの周期予約・検査チェック一覧(9時提示)・患者カード圧縮・RPGモードの吹き出し視認性

AGENTS.md / DEVELOPMENT.md の規約に従うこと。対象は `prototype_unified_triage.app.js` と `index.html` の `<style>`、Android通知は `patient-triage-android/native/native-bridge.js`。
`service-worker.js` のバンプ、コミット・pushは**しない**。
変更後は必ず `node --check prototype_unified_triage.app.js` を通し、Android へ反映して Pixel 10 Pro Fold の**外側画面(CSS幅約443px)**で確認する(手順は末尾)。

作成日: 2026-09-11。ユーザー確認済みの仕様。優先順位は **A → B → C → D**。
主な利用端末は APK(Android)。Web でも壊れないこと。

## 前提(壊さないこと)

- `patient.doneLog`(済みログ)、患者カードの状態バッジ3種、ヘッダーのピル整理、`focusMode`(低燃費)と `patientEnergyMode`(簡易)の分離は実装済み。
- 新しい永続状態を患者オブジェクト以外に増やす場合は、保存effect / `buildPayload` / `buildExportJSON` / `applyPayload` の4か所すべてに追記する(AGENTS.md)。患者オブジェクト内のキー追加なら不要。
- 検査タスクの型は既存の `TASK_TYPES` の **`test`(ラベル「検査」)**。`PATIENT_EXAM_QUICK_ITEMS`(L/D・US・CT・MRI・他)と `PATIENT_EXAM_QUICK_ACTIONS`(オーダー/チェック)を再利用する。

---

## A. 検査チェックの周期予約(🔁)

### 目的

「L/Dチェック」のような定期の検査確認を、**カード → 🔁 → プリセット の3タップ**で登録できるようにする。
現状は 予約 → タスク追加 → 検査種別 → 分類 → 日付 → 追加 と手数が多い。

### データ

患者オブジェクトに `examCycles` 配列を追加する(患者内キーなので保存・復元の追記は不要。GAS の `compactPatientForGas` は `...patient` を通すので自動で載る)。

```js
// patient.examCycles[]
{
  id: uid(),
  examId: 'ld',            // PATIENT_EXAM_QUICK_ITEMS の id。'other' のときは examTitle を使う
  examTitle: 'L/D',        // 表示・タスクタイトルの元
  action: 'check',         // 'check' 固定でよい(将来 'order' も使えるよう残す)
  weekdays: [1, 3, 5],     // 0=日 … 6=土
  createdAt: Date.now(),
  lastGeneratedDate: ''    // 最後に生成した作業日(YYYY-MM-DD)
}
```

生成されるタスクは既存の検査タスクと同じ形で、`type: 'test'`、`estimate: '5'`、タイトルは `${examTitle}チェック`。周期由来であることを `cycleId` で持たせる(重複防止と削除に使う)。

### プリセット(この順で並べる)

| ラベル | weekdays |
|---|---|
| 月水金 | [1,3,5] |
| 月木 | [1,4] |
| 火金 | [2,5] |
| 週1 | 曜日を1つ選ぶ(月〜日の7ボタンを2段目に出す) |
| 1回だけ: 3日後 | 周期ではなく `addReservedTask` で `reservedDate = 今日+3` の予約を1件作る |
| 1回だけ: 1週間後 | 同上 `今日+7` |

### タスクの見え方(重要)

毎朝生成だけだと「次はいつか」が見えないので、**常に今日から7日先までの該当日にタスクが存在する状態**を保つ。

- 周期を登録した時点、および毎回の起動時(`loaded` 後)と作業日が変わったときに、`examCycles` ごとに **今日〜今日+7日** の該当曜日を走査し、
  - その日が今日なら通常タスク(`reservedDate` なし)として、
  - 未来日なら **予約タスク**(`reservedDate` = その日)として、
  - まだ存在しなければ追加する。存在判定は `cycleId` と(`reservedDate` または 今日)の組で行う。
- こうすると患者カードの「📅 予約 (N)」に次回・次々回が並び、既存の予約表示だけで次の検査日が視認できる。
- 完了・削除されたタスクは再生成しない(その日の分は `patient.doneLog` か削除で消えている。判定には「その `cycleId` + 日付 が過去に生成済みか」を `cycle.generatedDates`(直近14件を保持)で持つ)。
- 周期を解除したら、**未来日の未完了予約タスク**(その `cycleId` のもの)を削除する。今日分と完了済みは残す。

### UI

- 患者カード展開時の検査行(L/D・US・CT・MRI・他 の右の「+オーダー」「+チェック」)の隣に **「🔁」ボタン**を追加。押すと小さなポップオーバー(既存の予約ダイアログと同じ `dialog-bg` / `dialog` パターンでよい)にプリセットを縦に並べる。選んだ検査種別(`examQuickSelected`)がそのまま対象になる。「他」のときは既存どおり `appPrompt` で検査名を聞く。
- 登録済みの周期は、検査行の下に **チップ**で表示: `🔁 L/D 月水金 ✕`。チップ本体タップで曜日変更(同じポップオーバー)、✕で解除(確認ダイアログ→ `rememberUndo('検査周期解除')`)。
- 予約ダイアログ(📅 予約)の「タスクを追加」フォームにも、日付入力の横に **「明日 / 3日後 / 1週間後 / 2週間後」** のクイック日付ボタンを追加する(周期とは別の、単発予約の手数削減)。
- 取り消し: 周期登録・解除・自動生成は `rememberUndo` を通す(自動生成はまとめて1エントリ「検査周期の自動追加」)。
- トースト: 登録時「L/Dチェックを月水金で登録(次回 9/12 金)」のように次回日を出す。

### 完了条件(A)

1. L/D を「月水金」で登録すると、今日が該当日なら今日のタスク、以降7日以内の該当日が予約に並ぶ。
2. 翌日以降に起動すると、7日先まで自動で補充される。同じ日に二重には作られない。
3. 解除で未来の予約だけ消え、今日分・済みは残る。
4. 「1回だけ: 3日後」は既存の予約タスクとして1件だけ入る。

---

## B. 検査チェック一覧(手動表示 + 1日2回の提示 + Android通知)

### 目的

朝イチで全患者の検査結果チェックをまとめて確認する。既存の **残タスク一覧**(`RemainingTaskDialog`、ドックの📋)と同じ見た目・操作感で作る。

### 対象タスク(当面この範囲。後で調整あり)

全受け持ち患者(`activePatients`)のタスクのうち、今日実行可能(`isActionableTask`)で、次のいずれか:
- `type === 'test'`(検査)または `type === 'result'`(結果)
- タイトルに「チェック」を含む

周期(A)由来の今日分も当然含まれる。並びは **病棟順 → 患者名 → 予定時刻**。患者ごとに見出し(病棟・氏名・優先度)、各行に既存の残タスク一覧と同じ完了ボタン。

### 手動表示

- ドックに **「🧪」アイコンボタン**を追加(📋 残タスク一覧の隣)。押すと `ExamCheckDialog` を開く。
- ダイアログ上部に「今日の検査チェック N件・M人」。0件なら「今日の検査チェックはありません」。

### 自動提示(アプリ内)

- 設定値 `examCheckPrompt`: `{ enabled: true, times: ['09:00', '11:00'], weekdaysOnly: true }`。
  永続化は新規トップレベル状態なので **保存effect / buildPayload / buildExportJSON / applyPayload の4か所**に追記。
- 各時刻について「その時刻を過ぎてからの最初の起動(またはフォアグラウンド復帰)」で、対象が **1件以上**なら一覧を自動で開く。1時刻につき1日1回(`localStorage` キー `patient-triage-exam-check-prompt-date` に `${todayStr()}|${time}` を保存。昼のすきま提案 `LUNCH_NUDGE_STORAGE_KEY` と同じ流儀)。
- ぺいとりモード表示中のみ。でいとりで開いた場合は消費しない。

### Android 通知

- `examCheckPrompt.times` の各時刻に毎日(平日のみ設定なら月〜金)ローカル通知を予約する。件数が **0 のときは出さない**: 通知は前日のうちに予約するのではなく、既存の予定通知(`patient-triage-scheduled-events-sync`)と同様に **app.js 側で対象件数を計算し、1件以上のときだけ** `patient-triage-exam-check-sync` イベントで native-bridge に予約させる。件数が変わるたびに再予約(既存のデバウンス実装を踏襲)。
- 通知本文: 「検査チェック N件(M人)」。`extra.source = 'exam_check_notification'`。
- タップ時: native-bridge の `navigateFromNotification` に分岐を追加し、ぺいとりモードへ切り替えたうえで `patient-triage-native-navigation` を発火。app.js 側はそれを受けて **`setExamCheckDialogOpen(true)`** する(予定入力欄は開かない。`patientEnergyMode` / `focusMode` は false に戻す)。

### 設定UI

- データパネル(既存の「🔔 時報通知（Android）…」の近く)に「🧪 検査チェック提示」サブセクション: ON/OFF、時刻1・時刻2(`type="time"`、空なら無効)、平日のみ。
- 時刻を変えたら通知を再予約。

### 完了条件(B)

1. 🧪 ボタンで一覧が開き、完了操作が残タスク一覧と同じように動く。
2. 09:00・11:00 を過ぎた最初の起動で、対象があれば自動で開く(各1回/日)。0件なら開かない。
3. Android で対象が1件以上のとき、設定時刻に通知が来て、タップで一覧が開く。0件なら通知なし。
4. 設定変更・エクスポート/インポート・GAS同期で設定が保たれる。

---

## C. 患者カード展開時の圧縮(行の統合のみ)

視認性は下げない。折りたたみは**しない**。文字サイズ・タップ領域は現状維持。

現状(6段): 優先度行 / 病棟行 / 入院行(右に「退院前手続き」) / 注意アイコン行 / プロブレム行(+中断薬) / メモ。

変更:
1. **病棟と入院を1行に統合**: `病棟 [3E ▾]  入院 [2026/07/09]`。グリッド `'42px minmax(96px, 116px) 42px minmax(0, 1fr)'`。443px幅で1行に収まることを確認。`showPatientMeta` が false のときは病棟のみ。
2. **「退院前手続き」ボタンを注意アイコン行の右端**へ移動(`marginLeft: 'auto'`)。文言は「退院前手続き」/「✓ 済」のまま、`btn-sm` 相当の高さに。
3. **プロブレムボタンと中断薬表示を注意アイコン行に寄せる**(アイコン群 → プロブレム → 中断薬 → 退院前手続き、`flexWrap: 'wrap'`)。折り返しが起きる場合は退院前手続きだけ次行に落ちてよい。
4. 優先度ボタンの縦パディングを 2px 詰める(高さ 30px 程度まで)。文字は変えない。

期待: 6段 → 4段、1カードあたり縦 70〜90px 減。

### 完了条件(C)

- 443px幅で横スクロールなし、各入力の操作性が変わらない。RPGモード(`body.rpg-mode`)でも崩れない。

---

## D. RPGモードのセリフ吹き出しの視認性

対象: `index.html` の `.chibi-coach-bubble` と `body.rpg-mode .chibi-coach-bubble`、および `.chibi-coach.banter .chibi-coach-bubble`。

方針(ユーザー決定): **本文は通常フォント、名前と枠はドット**。

1. `body.rpg-mode .chibi-coach-bubble` に以下を追加:
   - `font-family: 'Noto Sans JP', 'Yu Gothic', 'Hiragino Sans', sans-serif`(通常フォント。既存の非RPG時の `--font-sans` の実体に合わせてよい)
   - `font-size: 15px; line-height: 1.7; letter-spacing: .02em; font-weight: 700;`
   - `padding: 12px 14px; max-width: 78vw;`
   - `background: #050B1F !important;`(不透明)、枠は現状の `3px double #f8fafc` を維持、`box-shadow` に `0 0 0 2px #020617` を足して市松背景から浮かせる。
2. 話者名(エンジンが名前を出している場合)や枠の装飾はドット(`--font-sans` の BestTenDOT)のまま。名前要素が無ければ追加しなくてよい。
3. **掛け合い(banter)時も RPG モードでは枠付き**にする: `body.rpg-mode .chibi-coach.banter .chibi-coach-bubble` で透明化を打ち消す(背景・枠・影を 1 と同じに)。
4. `.toast` も同じ文字設定にそろえる。
5. `prefers-reduced-motion` では新しいアニメーションを足さない。ライト/ダーク各テーマ・わーとりテーマで非RPG時の表示が変わらないこと(RPGセレクタ配下のみ変更)。

### 完了条件(D)

- RPGモードで通常セリフ・掛け合いセリフの両方が、Fold外側画面で読める(15px通常フォント・不透明背景)。非RPGモードは変化なし。

---

## Android への反映と実機確認(共通)

```powershell
cd C:\dev\patient-triage-android
npm run cap:sync
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"   # system の JDK11 では gradle が動かない
cd android
.\gradlew.bat :app:assembleDebug
$adb = "C:\Users\Lycor\AppData\Local\Android\Sdk\platform-tools\adb.exe"
& $adb install -r app\build\outputs\apk\debug\app-debug.apk
& $adb shell am force-stop io.github.lycoris6png.patienttriage
& $adb shell monkey -p io.github.lycoris6png.patienttriage -c android.intent.category.LAUNCHER 1
& $adb shell screencap -d 4619827677550801153 -p /sdcard/pt.png   # Fold は2画面。このIDが外側画面
& $adb pull /sdcard/pt.png .\pt.png
```

- Git Bash から adb を使う場合は `MSYS_NO_PATHCONV=1` を付ける。
- 実機の患者データは本番データ。UI検証は `python -m http.server 8731` でWeb正本を配信し、ブラウザの `localStorage['patient-triage-v1']` にテスト患者を入れて行う。通知の検証だけ実機で行う(時刻を数分後に設定して確認)。

## 完了条件(全体)

1. `node --check prototype_unified_triage.app.js` と `patient-triage-android` の `npm run check` が通る。
2. A〜D の各完了条件を満たす。
3. README の機能一覧に「検査チェックの周期予約(🔁)」「検査チェック一覧(🧪)と提示時刻設定」を1〜2行ずつ追記。
4. コミット・pushはしない。作業ツリーに変更を残して終了する。
