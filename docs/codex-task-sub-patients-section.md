# Codexタスク: サブ担当患者の欄(普段は畳んでおく第2の患者リスト)

AGENTS.md / DEVELOPMENT.md の規約に従うこと。対象は `prototype_unified_triage.app.js`(必要なら `index.html` の `<style>`)。
`service-worker.js` のバンプ、コミット・pushは**しない**。
変更後は必ず `node --check prototype_unified_triage.app.js` を通し、Android へ反映して Pixel 10 Pro Fold の**外側画面(CSS幅約443px)**で確認する(手順は末尾)。

作成日: 2026-09-12。主な利用端末は APK(Android)。Web でも壊れないこと。

## 目的

自分の受け持ちとは別に、「毎日回診するほどではないが、入院中はサブで関わっていて忘れてはいけない患者」を置く欄を作る。
**通常の患者パネルとまったく同じ体裁・情報量**(優先度・病棟・入院日・注意・プロブレム・中断薬・メモ・タスク・予約・済みログ・🔁検査周期)で扱えるが、**普段は畳んでおける**。

## 設計方針(重要)

- **別配列は作らない。** 既存の `patients` 配列に入れたまま、患者オブジェクトに `role: 'sub'` を持たせて区別する(未設定 = 受け持ち)。
  - 理由: `PatientCard`、タスク操作、`doneLog`、🔁検査周期、取り消し、保存/復元、エクスポート、GAS同期、`今日はおしまい`、前日分のログ送りが**すべて無変更で効く**。患者オブジェクト内のキー追加なので保存・復元の追記も不要(AGENTS.md)。
- 受け持ちとサブの行き来は `role` の書き換えだけで済む。
- でいとりモード(`dailyPatients`)には関係させない(`role` は無視し、UIも出さない)。

## 仕様

### 1. 表示

- ぺいとりの患者一覧は **`role !== 'sub'` のみ**を今までどおり表示する(`visiblePatients` / `displayPatients` の元になる `sortedPatients` で除外)。
- 受け持ち一覧の直下(スマホでは「すきまタスク」セクションの上、デスクトップでは主カラム内)に **「サブ担当」セクション**を追加する。見た目は「前回いつやった?」「予定患者」と同じ折りたたみカード(`className: "card"`、左帯の色は `#64748B` 系のグレー)。
- **既定は畳んだ状態**。開閉状態は `localStorage` キー `patient-triage-sub-patients-open` に保存(テーマ等と同じ `loadLocal`/`saveLocal`)。
- 畳んだヘッダー行には忘れ防止の要約を出す:
  - 「サブ担当 3人」
  - 未完了タスクがあれば「未 2件」を**琥珀**(既存バッジと同じ `#B45309` / `rgba(245,158,11,.14)`)で
  - 時刻超過・予定時刻のタスクがあれば「時刻要確認 1件」を赤系で
  - 0人のときも見出しは出す(「サブ担当 0人」)。中を開くと「＋ サブ担当を追加」ボタンだけがある。
- 展開すると、**受け持ちと同じ `PatientCard`** を同じ props で並べる(展開状態は既存の `expandedPatients` をそのまま共用してよい)。並び順は受け持ちと同じ `patientSortMode` に従う。ER/病棟の絞り込み(`erOnly`/`wardOnly`)もサブ一覧に同様に効かせる。
- 回診・カルテのチェックモード(`checkMode`)中はサブ一覧を表示しない(対象外のため。下記 3 参照)。

### 2. 追加・移動・終了

- **追加**: 既存の「受け持ち追加」ダイアログに、優先度の上に 2 択トグル「受け持ち / サブ担当」を追加(既定: 受け持ち)。サブ担当セクション内の「＋ サブ担当を追加」から開いたときは既定をサブにする。`addPatient` で `role` を付ける。
- **移動**: 患者カード展開時のメタ欄(退院前手続きボタンの並び)に小ボタンを追加:
  - 受け持ちの患者には「→ サブへ」
  - サブの患者には「→ 受け持ちへ」
  - 押したら `rememberUndo('サブ担当へ移動')` / `rememberUndo('受け持ちへ移動')` を通して `role` を書き換え、トースト「○○ をサブ担当へ移しました」。カードの展開状態は維持。
- **終了**: 既存の「終了」ボタンをそのまま使う(`removePatient` は無変更。完了タスクは `closedPatientTasks` に入る)。

### 3. 件数・提案・チェック・一覧への影響

| 機能 | サブ担当の扱い |
|---|---|
| ヘッダー「受け持ち」人数 | **含めない**(受け持ちのみ) |
| ヘッダー「未完了」件数 | **含める**(忘れ防止が目的なので) |
| 「今日の済」 | 含める(`stats.doneToday` は無変更) |
| 回診・カルテのチェック対象(ドックの 6/6、`checkTargets`、カードのスタンプ) | **含めない**。`isRoundTarget` を `getPri(p) !== 'planned' && p.role !== 'sub'` に変更する |
| 次の一手 / 低燃費の提案(`suggestNext`) | **含める**。`flatTasks` に `patientSub: p.role === 'sub'` を足し、提案カードの患者名の横に小さな「サブ」チップを出す |
| 時刻アラート(`alerts`、予定時刻・時刻超過) | 含める(`flatTasks` 由来なので無変更で含まれる) |
| 残タスク一覧(📋)・検査チェック一覧(🧪) | **含める**。受け持ちの後ろにまとめ、患者見出しに「サブ」チップ |
| 簡易モード(`PatientEnergyPanel`) | 患者送り(前の患者/次の患者)には**含めない**。ただし上部の「要確認(全患者)」と「今日のすきまタスク」の扱いは無変更(要確認にはサブも含める) |
| 今日はおしまい / 前日分のログ送り / 済みログ / 🔁検査周期 | 無変更で効く(同じ配列) |
| Pixel Watch への状態送信(`buildWatchStatePayload`) | **含めない**(時計は受け持ちの回診用) |
| GAS同期 / エクスポート / インポート | 無変更(`role` キーが一緒に運ばれる)。古いデータに `role` が無くても受け持ち扱いになること |

### 4. 見た目の細部

- サブ担当セクションのカード左帯: `#64748B`。ヘッダー文字は「サブ担当」+ 人数ピル。右端に要約バッジ、さらに右に開閉シェブロン(既存セクションと同じ)。
- サブの `PatientCard` は受け持ちと同一。区別用に、カードヘッダーの入院日数ピルの左に薄いグレーの「サブ」チップ(11px)を 1 つ足す(`role === 'sub'` のときのみ)。
- 443px幅で横スクロールが出ないこと。RPGモード(`body.rpg-mode`)でも崩れないこと。

## 実装メモ(既存コードの当たり)

- `sortedPatients` / `visiblePatients` / `displayPatients`(app.js 11940〜12010行付近)。サブ用に `subPatients`(同じソート・同じ絞り込み)を派生させる。
- `checkTargets`(11986行付近)は `isRoundTarget` を変えれば追従する。
- 患者一覧の描画は `displayPatients.map(p => React.createElement(PatientCard, {...}))`(15000行付近)。props の組み立てが長いので、**関数 `renderPatientCard(p)` に切り出して受け持ち・サブの両方から呼ぶ**こと(コピーしない)。
- セクションの雛形は `PendingPatientSection`(予定患者)と `LastDoneSection`(前回いつやった?)。
- 「受け持ち追加」ダイアログは `addPatientDialog` / `newPatientPri`(15740行付近)。
- 追加した `role` は `compactPatientForGas` を通るので GAS でも保持される。

## 完了条件

1. `node --check prototype_unified_triage.app.js` と `patient-triage-android` の `npm run check` が通る。
2. サブ担当として追加した患者が受け持ち一覧に出ず、畳まれた「サブ担当」セクションに人数・未完了件数が出る。開くと受け持ちと同じカードで全操作ができる。
3. 受け持ち→サブ、サブ→受け持ちの移動が取り消し可能で、タスク・メモ・済みログが失われない。
4. ヘッダー「受け持ち」はサブを含まず、「未完了」は含む。回診/カルテの N/N はサブを含まない。次の一手・残タスク一覧・検査チェック一覧にはサブのタスクが「サブ」チップ付きで出る。
5. 開閉状態が再起動後も保たれる。既存データ(role なし)を読み込んでも表示が変わらない。
6. README の機能一覧に「サブ担当」欄を 1〜2 行追記。
7. コミット・pushはしない。作業ツリーに変更を残して終了する。

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
- 実機の患者データは本番データ。UI検証は `python -m http.server 8731` でWeb正本を配信し、ブラウザの `localStorage['patient-triage-v1']` にテスト患者(`role: 'sub'` 入り)を投入して行う。
