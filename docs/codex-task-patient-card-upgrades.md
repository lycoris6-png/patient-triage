# タスク: 予約ダイアログ整列 / 患者プロブレムリスト / 中断薬の内容表示

まずリポジトリ直下の `AGENTS.md` を読んで規約に従うこと。
対象は `prototype_unified_triage.app.js` のみ。A / B / C の3タスク。行番号は現HEAD時点の目安(アンカーのコード断片を優先して探すこと)。

---

## A. 予約ダイアログの展開部を通常タイルと同じ構成にする

患者カードの通常「タスクを追加」展開(3610行付近〜)と同じ **順序・囲いスタイル** を、予約ダイアログの展開部(`reservationAddOpen && React.createElement(React.Fragment, ...)`、2947行付近)に再現する。

### 目標の並び順(上から)

1. **手動追加フォーム**(囲みタイル)
2. **検査クイック**(囲みタイル)
3. **よく使う**(囲みなし、トグル+チップ)
4. **セット**(囲みなし、トグル+チップ)

現在の予約ダイアログは 検査→よく使う→セット→フォーム の順で、`borderTop` 区切りスタイル。これを並べ替え、以下の囲いに変える。

### スタイル指定(通常版から流用)

- **手動フォームの囲み**(通常版アンカー: `adding ? React.createElement("div", {` の直後、3611行付近):
  ```js
  { background: 'var(--surface-2)', borderRadius: 12, padding: 14, border: '1.5px solid var(--border)' }
  ```
  フォーム内の並びも通常版に合わせる: ①タスク名input(幅100%、marginBottom 10) ②分類チップ行(marginBottom 10) ③時間チップ行+右端に[日付input][追加ボタン]。既存の分類チップ・時間チップ・日付・追加ボタンのコード(onClick等)はそのまま流用してよい。3列grid(`gridTemplateColumns: 'minmax(8.5rem,auto) minmax(0,1fr) auto'`)は廃止。
- **検査クイックの囲み**(通常版アンカー: `onApplyExamTask && React.createElement("div", {`、3802行付近):
  ```js
  { display: 'grid', gap: 6, padding: '7px 8px', border: '1px solid var(--border)', borderRadius: 12, background: 'var(--surface-2)' }
  ```
  中身(検査チップ+「+ オーダー」「+ チェック」)は現状のまま。
- **よく使う / セット**: 現状のトグルボタン+チップのまま、`borderTop` を外して通常版(3862行付近の「よく使う」ブロック)と同じ「囲みなし・縦gap 7」の見た目に。展開部全体を `display: 'grid', gap: 7` のコンテナで包むと通常版(3797行付近 `display: 'grid', gap: 7, marginTop: 10`)と揃う。

### 注意

- セットの「予約日が必要」ロジック(日付未選択時disabled+案内文)は維持。ただしフォームが上に来るので案内文は「上の欄で予約日を選ぶと〜」に変更
- 「タスク追加をたたむ」トグルボタンと、ダイアログを開くたびに畳まれる挙動は現状のまま

---

## B. 患者プロブレムリスト(未解決問題の記録)

入院が中長期化したとき「どこまで問題を解決したか」を患者ごとに記録するチェックリスト。**タイルの高さは増やさない**(一覧はボタンとバッジのみ、本体はダイアログ)。

### B-1. データモデル

`patient.problems` 配列を新設。要素:

```js
{ id: uid(), label: '肺炎', resolved: false, createdAt: Date.now(), resolvedAt: null }
```

- 未定義の患者では `[]` 扱い(`patient.problems || []` で常にフォールバック。normalize関数の追加は不要)
- 患者オブジェクト内のフィールドなので保存・同期系の変更は不要

### B-2. 親ハンドラ(PatientTriage内)

`togglePatientAlert`(13319行付近で使用)と同じパターンで3つ追加し、PatientCardにpropsで渡す:

- `addPatientProblem(patientId, label)` — trim後空なら無視。`rememberUndo('プロブレム追加')`
- `togglePatientProblem(patientId, problemId)` — `resolved` を反転、`resolvedAt` を `Date.now()` / `null` に。`rememberUndo('プロブレム更新')`
- `removePatientProblem(patientId, problemId)` — `rememberUndo('プロブレム削除')`

### B-3. 開くボタン(優先度・病棟ボックス内)

優先度/病棟の囲みボックス(アンカー: `}, "優先度"), PRIORITIES.map(...`、3442行付近の親ボックス 3420-3517)を少し詰める:

- ボックスの `padding: '10px 12px'` → `'8px 10px'`、優先度行・病棟行の `gap: 6` → `5`
- 病棟行の末尾(アラートトグル3ボタンの後)に **「📋 プロブレム (n)」ボタン** を追加(nは未解決数。0件なら `(0)` でよい)。スタイルはアラートトグルと同系の小ささ(`btn-sm` + `border: '1px solid var(--border)', borderRadius: 99, padding: '4px 10px', fontSize: 11`)。未解決が1件以上あるときだけ `color: '#B45309', borderColor: 'rgba(245,158,11,.5)'` で軽く色づけ
- クリックで `problemsOpen`(PatientCard内の新規state)をtrueに

### B-4. プロブレムダイアログ

予約ダイアログ(2801行付近)と同じ構成: `dialog-bg`/`dialog` + **`ReactDOM.createPortal(node, document.body)`**(カード内fixed崩れ対策。2800行のコメント参照)。

- 見出し: `📋 {patient.name} のプロブレム`
- **未解決リスト**(上): 1行 = `[チェック円] [ラベル] [削除]`
  - チェック円は既存 `.check-circle` クラス(22px)。クリックで `togglePatientProblem` → 解決済みへ
  - ラベルは fontSize 13 / fontWeight 700、`overflowWrap: 'anywhere'`
  - 削除は `btn-sm`(色 #DC2626)
- **解決済みリスト**(下、あれば): 同じ行構成で `opacity: .55` + ラベルに取り消し線。チェック円は `.check-circle done`(✓付き)で、クリックすると未解決に戻せる
- **追加欄**(最下部): input(placeholder「未解決の問題 (例: 肺炎、退院調整)」、Enterで追加)+「追加」ボタン
- 閉じるボタン(予約ダイアログと同じ右下 btn-sm)

### B-5. 折りたたみヘッダの小バッジ

タイルを畳んだ状態でも「問題が残っている」ことが分かるよう、ヘッダのアラートアイコン群(アンカー: `activeAlerts.length > 0 &&`、3326行付近)の並びに、未解決プロブレムが1件以上あるときだけ `📋n`(nは未解決数)の小さなインラインバッジを追加。activeAlertsのアイコンと同じ大きさ・行内表示で、**タイルの高さを変えないこと**。`title` 属性に未解決ラベルを「 / 」連結で入れる。

---

## C. 中断薬アラートの強化(何の薬かを表示)

現在の💊トグル(boolean)に「何の薬が抜けているか」のメモを追加する。**スマホ運用なのでホバー表示は使わない**。

### C-1. データモデル

`patient.medHoldNote`(string、自由記述。例: `"DOAC、メトホルミン"`)を新設。`alerts.medHold`(boolean)は既存のまま。💊をOFFにしても `medHoldNote` は**消さない**(誤タップからの復帰用。ONに戻せばまた表示される)。

### C-2. 入力欄

優先度/病棟ボックス内、アラートトグル行の直後に、`patient.alerts?.medHold` がtrueのときだけ表示する1行input:

- placeholder: `中断中の薬 (例: DOAC、メトホルミン)`
- `className: "inp"`、fontSize 12、幅100%
- onChange → 親の `setPatientMedHoldNote(patientId, value)`(新設。`updatePatientMemo` 系の既存パターンに合わせる。undoは不要 — memo入力と同じ扱い)
- `onClick: e => e.stopPropagation()`(カード折りたたみ誤発火防止。既存memoテキストエリア 3520行付近と同様)

### C-3. 表示(ここが本命)

1. **折りたたみヘッダ**: activeAlertsアイコン群の中の💊アイコンの**直後**に、`medHoldNote` が非空なら薬剤名を極小テキストで常時表示:
   ```js
   { fontSize: 10, fontWeight: 800, color: '#B91C1C', maxWidth: '9em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }
   ```
   タイルの高さ・1行性を壊さないこと(はみ出す長文はellipsis)。
2. **展開時**: C-2の入力欄で全文が見える(これが詳細表示を兼ねる)
3. activeAlertsの `title` 連結(3335行付近)で、medHoldの項は `中断薬あり: {medHoldNote}` に差し替え(note空なら従来どおり)

---

## 受け入れ基準

1. `node --check prototype_unified_triage.app.js` が通る
2. 予約ダイアログの「タスクを追加」展開が フォーム(囲み)→検査(囲み)→よく使う→セット の順で、通常タイルの展開と見た目が揃う。既存機能(チップ・検査セット・セット一括追加・日付必須ガード)は全て動く
3. プロブレム: 追加→未解決リストに表示→チェックで解決済みへ移動(戻すも可)→削除できる。ボタンのカウントとヘッダの📋バッジが未解決数に追従し、0件でヘッダバッジが消える
4. プロブレムが未定義の既存患者データでもエラーにならない
5. 💊ON+薬剤名入力で、タイルを畳んでもヘッダに薬剤名(ellipsis)が見える。💊OFF→ONで薬剤名が復元される
6. スマホ幅(375px)でヘッダ・ダイアログとも横はみ出しなし
7. ダイアログはすべてポータル(body直下)でカードのoverflowに切られない

## やらないこと

- dialogue.js / service-worker.js への変更、上記以外のリファクタリング
