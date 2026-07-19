# Codexタスク: お昼のすきまタスク提案

AGENTS.md の規約に従うこと。対象は `prototype_unified_triage.app.js` のみ。
`service-worker.js` のバンプ、コミットは**しない**（レビュー担当が行う）。
変更後は必ず `node --check prototype_unified_triage.app.js` を通すこと。

## 目的

昼休みに片手間で1件済ませられるよう、**12時台〜13時台の初起動時**に、すきまタスク（ぺいとり側 `generalTasks`）から**見積10分未満のものを1件**提案する。

## 仕様

### 発火条件（すべて満たすとき1回だけ）

- アプリのデータロード完了後（`loaded === true`）
- 現在時刻が **12:00〜13:59**
- **ぺいとりモード表示中**（`isDailyMode === false`。でいとりモードで開いた場合は何もしない＝フラグも消費しない。あとでぺいとりモードへ切り替えたタイミングで条件を満たせば発火してよい）
- その日まだ提案していない（localStorage キー `patient-triage-lunch-nudge-date` に `todayStr()` を保存して1日1回に制限。**提案を実際に表示した時点で保存**する）

実装は `useEffect`（依存: `loaded`, `isDailyMode` 程度）で行い、既存の起動時処理（`loaded` を見ている効果）の書き方に合わせる。

### 対象タスクの選び方

- `generalTasks`（ぺいとりのすきまタスク。`dailyGeneralTasks` ではない）のうち
  - `status === 'todo'`
  - `estimateMinutes(task)` が **1以上10以下**（既存ヘルパー `estimateMinutes` を使う。ESTIMATES の '2'・'5'・'10' が該当。当初は10分未満だったが2026-07-19に10分以下へ変更）
- 並び順: `dueDate` があるものを日付昇順で優先 → 同順位は `estimateMinutes` 昇順 → `createdAt` 昇順。先頭の1件。
- 該当が0件なら何もしない（フラグも消費しない）。

### 提示方法

既存の「次の一手」提案の仕組みを再利用する:

1. `setSuggestion({ task, fromGeneral: true })` を呼び、提案カードを表示する（`suggestion.fromGeneral` の既存表示「すきまタスク」がそのまま使われ、⏱開始ボタン等も既存のまま動く）。
2. あわせて `chibi-coach` イベントで吹き出しを出す:

```js
window.dispatchEvent(new CustomEvent('chibi-coach', {
  detail: {
    kind: 'suggest',
    text: `お昼休みに1件どうですか？「${task.title}」（${estimateMinutes(task)}分）`,
    pose: 'clipboard'
  }
}));
```

`kind`/`pose` は既存の chibi-coach イベントで使われている値に合わせて調整してよい（`suggest` が無ければ既存のsuggest系表示に使われている kind を使う）。actor指定は不要（既存のランダム/既定に任せる）。

### 注意

- `setSuggestion` の既存の形（`suggestion.task` / `suggestion.fromGeneral` / `fromStuck`）を app.js 内で確認し、既存の「次の一手」ボタンが作るオブジェクトと同じ形にすること。
- タイミングは初期ロード直後のコーチ演出（AI一言など）と重なる可能性がある。`setTimeout` で2〜3秒遅らせて出すこと（既存コードに同様の遅延パターンあり）。
- 時刻判定はテスト容易性のため `const isLunchWindow = now => now.getHours() === 12 || now.getHours() === 13;` のような小さなヘルパーに切り出すこと。

## 完了条件

1. `node --check prototype_unified_triage.app.js` が通る。
2. 12〜13時台にぺいとりモードで初起動すると、10分未満のすきまタスクが1件、提案カード+吹き出しで表示される（1日1回のみ）。
3. 対象タスクが無い場合・時間外・でいとりモード起動時は何も起きない。
