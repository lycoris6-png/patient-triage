# Codexタスク: 低燃費モードの確実な復活・簡易モードの視認性改善・予定通知タップ時の挙動修正

AGENTS.md / DEVELOPMENT.md の規約に従うこと。対象は `prototype_unified_triage.app.js`(必要なら `index.html` の `<style>`)。
`service-worker.js` のバンプ、コミット・pushは**しない**。
変更後は必ず `node --check prototype_unified_triage.app.js` を通し、Android へ反映して Pixel 10 Pro Fold の**外側画面**で確認する(手順は末尾)。

作成日: 2026-09-09。優先順位は **A → C → B**(Aは「今いちばん使う機能」、Cは小さい修正、Bは設計を伴う)。

## 前提: 現在のツリー状態(2026-09-09 22:01 時点)

- 2026-09-08 に Claude 側で以下を実装済み。**壊さないこと**。
  - ヘッダーのピルを「受け持ち・未完了・今日の済 + 🔋簡易ボタン」に整理(`.filter(s => s.label !== 'すきま')`)。
  - 患者ごとの済みログ `patient.doneLog`(`archivePatientDoneTasks` / `prunePatientDoneLog`、カードの「📋 済みログ」ボタン)。
  - 患者カードの状態バッジ3種(完了=緑 / 未N=琥珀 / タスクなし=点線)。
- 2026-09-09 22:01 時点で app.js には既に **`focusMode`(低燃費)と `patientEnergyMode`(簡易)の分離**が入っている:
  - `toggleLowEnergyMode` / `togglePatientEnergyMode` が相互排他で存在。
  - コマンドドックに「🔋 低燃費 / 低燃費中」ボタンが復活(`className: \`btn-ghost${focusMode ? ' btn-ghost-active' : ''}\``)。
  - ヘッダーの「🔋 簡易」は `togglePatientEnergyMode` を呼び、ぺいとりモードのみ表示。
  - 永続化キー `patient-triage-focus-mode`(低燃費)と `patient-triage-patient-energy-mode`(簡易)。
- 同時刻に `npm run cap:sync` → APK ビルド → 実機インストール済み(lastUpdateTime 22:02)。
  **ユーザーが「低燃費が消えた」と報告したのはそれ以前のビルド**の可能性が高い。A はまず現状を実機で検証し、足りない点だけ直す。

---

## A. 低燃費モードを確実に復活させる(最優先)

### 求める仕様(コミット済み HEAD 版の挙動を正とする)

- ドックの「🔋 低燃費」ボタンは **ぺいとり・でいとり両方**で表示され、押すと `focusMode = true` → `suggestNext(true)` で「次にやること」を1件だけ提案する。
- 低燃費中は一覧・予定セクション・ドックのツール群が隠れ、`focus-card`(「🔋 低燃費中 / 今日N件 / 一覧へ」)と `SuggestionCard` だけが出る。
- 提案の完了・別のを → `lowEnergyNeedsNext` 経由で次を自動提案(`useEffect` の条件に `isDailyMode` を**含めない**)。
- 「簡易」(`patientEnergyMode`)とは**別の状態**。片方をONにしたらもう片方はOFF。
- 簡易モードは従来どおりヘッダーとちびキャラを隠すが、低燃費モードはヘッダーを隠さない(HEAD 版の見た目)。

### 確認・修正項目

1. 上記が現在のツリーで**すべて満たされているか**を、ぺいとり・でいとり両方で実機確認する。1つでも欠けていれば直す。
2. 予定通知タップのハンドラ(`patient-triage-native-navigation` を受ける `useEffect`、`onNavigation`)は現在 `setFocusMode(false)` しかしていない。**`setPatientEnergyMode(false)` も追加**する(簡易モード中に通知を踏むとヘッダーの無い画面に着地するため)。
3. 低燃費の永続化(`FOCUS_MODE_STORAGE_KEY`)は「保存時と同じアプリモードのときだけ復元」の現仕様を維持。復元時は `setLowEnergyNeedsNext(true)` でデータロード後に提案が出ることを実機で確認(強制終了→再起動)。
4. 簡易モードの永続化(`PATIENT_ENERGY_MODE_STORAGE_KEY`)はぺいとり起動時のみ復元。でいとりで起動した場合は復元しない現仕様でよい。
5. README に「低燃費」「簡易」の違いが1行ずつ書かれていなければ、機能一覧の該当箇所に追記する(ユーザーが混同しないように)。

---

## C. 予定通知をタップして開いたとき、予定入力欄を開かない

### 現状

- `app.js` の `onNavigation`(`event.detail.source === 'scheduled_event_notification'`)が `setScheduledOpen(true)` を呼び、予定セクションを**入力欄ごと**開いている。
- `patient-triage-android/native/native-bridge.js` の `navigateFromNotification` が `.scheduled-event-section` へ `scrollIntoView` している。

### 変更

1. `onNavigation` から **`setScheduledOpen(true)` を削除**する。`setAppMode('patient')`・`setFocusMode(false)`・`setWorkModeEnabled(false)` は残し、上記 A-2 の `setPatientEnergyMode(false)` を加える。
2. native-bridge.js のスクロールは、予定セクションが閉じた状態でも `.scheduled-event-section` 要素が存在するなら現状維持でよい。存在しない(閉じているとクラスが付かない)場合は `document.getElementById('root')` へのフォールバックが効くので、そのままで動作確認だけする。
3. 実機確認: 予定を1件、2〜3分後に登録 → 通知をタップ → ぺいとりの一覧が開き、**予定入力欄は閉じたまま**であること。簡易モード中・低燃費中・でいとり表示中の3状態から試す。

---

## B. 簡易モード(`PatientEnergyPanel`)の視認性を上げる

対象は `function PatientEnergyPanel(...)`(app.js 10874行付近)。データ導出ロジック(`attentionFor` など)は変えず、**表示だけ**を作り直す。

### 現状の問題(Fold 外側画面 = CSS幅約443px で確認)

- 全文が同じ 13px・同じ太さで、見出し・本文・補足の階層がない。
- 要確認一覧が「患者名：高 / 欠食あり / 中断薬メモあり / 保留 1件」と**スラッシュ連結の長文ボタン**で、読み取りに時間がかかる。
- サマリー「患者タスク 4件・すきま 1件・未回診 4人・未カルテ 7人」が1行の文章で、数字が目に入らない。
- セクションが `surface-2` の平坦な箱で境界が薄い。文字色に `text-2/text-3` を多用しコントラストが低い。
- 右上の「通常一覧へ」ボタンがタイマードック(右上の浮遊ボタン群)と重なる。
- 完了ボタンがゴーストで小さく、どれが主操作か分からない。

### 仕様

**共通**
- パネル内の基本文字サイズは **15px**、行間 1.5。主要テキストは `var(--text)`。`text-3` は補足(件数の単位など)のみ。
- タップ対象は最小 **48px** 高。ボタンの文字は 14px 太字。
- 長い文字列は既存の `overflowWrap: 'anywhere'` / `minmax(0, 1fr)` パターンを踏襲し、443px 幅ではみ出さない。
- `prefers-reduced-motion: reduce` で新規アニメーションを出さない。色は原則 CSS 変数(緑=`var(--done)`、強調=`var(--accent)`)。RPGモード(`body.rpg-mode`)でも破綻しないこと。

**1. 上部バー(固定)**
- 「🔋 簡易モード」のタイトルと「通常一覧へ」ボタンを、パネル最上部ではなく**画面下部に固定したフルワイドのバー**(高さ 56px)へ移す。これでタイマードックとの重なりを解消する。
- 併せて簡易モード中は `body.patient-energy-mode` で**タイマードックを非表示**にしてよい(簡易モードの主旨は「演出・付随UIを減らす」)。
- 下部バーには「前の患者」「次の患者」「通常一覧へ」の3つを並べる。「取り消す」は患者ヘッダー側へ。

**2. サマリー → 4つの数字タイル**
- 「患者タスク / すきま / 未回診 / 未カルテ」を 2×2 のタイル(数字 22px 太字、ラベル 12px)にする。0 のタイルは薄く、未回診・未カルテが 1 以上なら数字を琥珀(`#B45309` 系。既存バッジと同じ色)にする。

**3. 要確認(全患者)**
- 患者を選択中は**折りたたみ**をデフォルトにし、見出しを「要確認 7人 ▸」の1行にする。
- 展開時は各患者を1行1カードにし、ラベルを**チップ**で表示する(スラッシュ連結をやめる):
  - ER / 高 → 赤系(`#B91C1C` 文字 + 薄赤背景)
  - 中断薬あり / 中断薬メモあり → 琥珀
  - 時刻要確認 → アクセント色
  - 保留 / 詰まり / 未解決 → グレー
- 患者名は 15px 太字、チップは 12px。カードをタップでその患者へ移動。

**4. 患者ヘッダー(sticky)**
- 患者名を **20px 太字**で最上段に。左に「N / 総数」を 13px。
- `<select>` は残すが名前の下に細く配置し、主役にしない。
- 注意・未解決・中断薬メモは 3 と同じチップ表示。メモ本文は 14px。

**5. 回診・カルテチェック**
- 2つの大きなトグル(各 48px 高、幅は半分ずつ)にする。済なら `var(--done)` の塗り + 白文字「回診 済 ✓」、未なら点線枠 + 「回診 未」。`aria-pressed` は維持。

**6. 今日のタスク**
- 1行 56px。左にタイトル 16px 太字、2行目に時刻/状態のチップ(「予定時刻」「時刻超過」は琥珀、「詰まり: …」は赤系)。右端に **`btn-dark` 相当の塗りボタン「完了」**(高さ 44px)。
- タスク 0 件の空文は 14px で 1 行に。

**7. 定型タスク追加 / 保留・予約 / 今日のすきまタスク**
- 定型タスクのボタンは 2 列グリッド(`repeat(2, minmax(0, 1fr))`)、44px 高。
- 「保留 N件・今後の予約 N件」「今日のすきまタスク N件」は `details` のままでよいが、`summary` を 15px 太字にし、左に ▸ を出す。

**8. セクションの箱**
- `background: var(--surface)`、`border: 1.5px solid var(--border-2)`、`boxShadow: var(--shadow)`。セクション間の余白 12px。見出しは 14px 太字 + 絵文字 1 つ(📝 今日のタスク、🩺 回診・カルテ、➕ 定型タスク)。

### 完了条件(B)
- 443px 幅で横スクロールが発生しない。
- 患者名・数字タイル・完了ボタンが「一目で」分かる(スクリーンショットを docs/ に置かなくてよいが、実機で確認する)。
- 既存の操作(完了・回診/カルテ・定型追加・保留を戻す・取り消す・通常一覧へ)がすべて従来どおり動く。

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

- Git Bash から adb を使う場合は `MSYS_NO_PATHCONV=1` を付ける(`/sdcard/...` がパス変換される)。
- 実機の患者データは本番データ。UI検証は `python -m http.server 8731` でWeb正本を配信し、ブラウザの `localStorage['patient-triage-v1']` にテスト患者を入れて行ってよい。

## 完了条件(全体)

1. `node --check prototype_unified_triage.app.js` が通る。`patient-triage-android` で `npm run check` が通る。
2. A: ぺいとり・でいとり両方で「🔋 低燃費」が動き、簡易モードと排他で切り替わる。再起動後も維持される。
3. C: 予定通知タップで予定入力欄が開かない。簡易/低燃費中からでも通常一覧に着地する。
4. B: 上記仕様のとおり簡易モードの表示が作り直され、443px 幅で確認済み。
5. コミット・pushはしない。作業ツリーに変更を残して終了する。
