# Codexタスク: APK向けUI修正3件（時報導線・ダイアログ位置ずれ・プリセット編集の圧縮）

AGENTS.md の規約に従うこと。対象ファイルは `prototype_unified_triage.app.js` と `index.html` のみ。
`service-worker.js` のバンプ、コミットは**しない**（レビュー担当が行う）。
変更後は必ず `node --check prototype_unified_triage.app.js` を通すこと。

---

## タスク1: データパネルに「時報通知設定」ボタンを追加（Android APKのみ表示）

### 背景
Android APK版では `native-bridge.js`（別リポジトリ、ここでは触らない）が画面隅に「🔔 時報」浮きボタンを常時表示している。頻繁に使う設定ではないので、浮きボタンを廃止し、データパネルから開く導線に変える。native-bridge.js 側の対応（浮きボタン削除とイベント受信）は別途行うので、**このリポジトリではイベントを発火するボタンを追加するだけでよい**。

### 実装
- 場所: `prototype_unified_triage.app.js` のデータパネル内、`SettingsSubSection`「🎭 キャラ・通知」の中（7859行付近）。「🎭 セリフ編集…」ボタン（`window.open('./dialogue-editor.html', ...)` している `btn-ghost`）の**直後**に兄弟要素として追加。
- ボタン仕様:
  - 表示条件: `window.Capacitor?.isNativePlatform?.()` が truthy のときだけレンダリングする（PWA/ブラウザでは非表示）。
  - className・style は隣の「🎭 セリフ編集…」ボタンと同じ（`btn-ghost`、fontSize 11、padding '7px 14px'）。
  - ラベル: `🔔 時報通知（Android）…`
  - onClick: `window.dispatchEvent(new CustomEvent('patient-triage-open-hourly-settings'))` を呼ぶだけ。

---

## タスク2: `.dialog-bg` の APK での左上ずれ修正

### 背景・原因（検証済み）
APK版は native-bridge.js が `document.documentElement.style.zoom = 0.91` を設定する。CSS `zoom` 配下では `100vw`/`100dvh` 指定の fixed 要素は実画面の91%しか覆わず、ダイアログ（自由タイマー・件数クリッカーの入力フォーム等）が**左上に寄って表示される**。`position:fixed; inset:0` だけなら zoom 配下でも全画面に広がることをブラウザで実証済み。

### 実装
`index.html` の `.dialog-bg`（654行付近）から以下の3宣言を削除する:

```css
width:100vw; min-height:100vh; height:100dvh;
```

`position:fixed; inset:0;` は残す。それ以外（flex中央寄せ、padding、背景、blur、overflow:hidden）は変更しない。`.dialog` 側の `max-height:calc(100dvh - 32px)` は問題ないのでそのまま。

---

## タスク3: プリセット編集のセット内項目行を圧縮

### 背景
直近コミット f1f95c3 でセット内項目のドラッグ並べ替え（⠿ハンドル）を追加した際、行レイアウトが変わり縦に間延びした:

- **ぺいとり側 `TemplatesSection`**（6050行付近）: 項目行が常に2段グリッド（1段目=タスク名、2段目=種類+見積）になり、画面幅が広くても2段のまま。
- **でいとり側 `DailyTaskSetManager`**（6573行付近）: 1行6カラムになり各セレクトが窮屈。

### 要件
- 機能は一切変えない: タスク名入力・種類/見積（ぺいとり）・種類/優先度等（でいとり）・削除✕・⠿ドラッグハンドル・キーボード↑↓並べ替えを全て残す。
- ドラッグ並べ替えの仕組みを壊さない: 行要素の `data-reorder-group` / `data-reorder-id` 属性は**行のルート要素に維持**する。
- 縦方向の占有を減らす: 画面（コンテナ）幅が十分あるとき（目安560px以上）は**1行に収める**。狭いときだけ2段に折り返してよい。
- 375px幅で横スクロールが発生しないこと。

### 実装方針（提案。同等以上ならCodexの裁量で可）
- インラインstyleのグリッド指定をやめ、`index.html` の `<style>` にクラス（例 `.tpl-item-row`）を追加してメディアクエリで切り替える:
  - 広い画面: `grid-template-columns: minmax(0,1.4fr) auto minmax(58px,.5fr) auto auto`（タスク名/種類/見積/✕/⠿を1行）
  - `@media (max-width:560px)`: 現状同様の2段構成（タスク名が1段目全幅、2段目に種類+見積、✕と⠿は右端で2行ぶち抜き）
- gapは4px程度に詰める。ドラッグ中のoutline/opacityのインラインstyle（`itemDragState`依存）は行要素に残す。
- でいとり側も同様にクラス化し、広い画面は現状1行を維持しつつセレクトのminmaxを詰めすぎない値へ戻す（並べ替え対応前は `minmax(0,1.4fr) minmax(74px,.65fr) minmax(64px,.5fr) minmax(64px,.5fr) auto` だった）。狭い画面は2段に折り返す。

---

## 完了条件

1. `node --check prototype_unified_triage.app.js` が通る。
2. ブラウザ（非native）でデータパネルに時報ボタンが**表示されない**こと（Capacitor未定義のため）。
3. `.dialog-bg` が inset:0 のみで全画面を覆うこと。
4. プリセット編集（ぺいとり・でいとり両方）で、560px超では項目が1行、375pxでは横スクロールなしで折り返すこと。ドラッグ並べ替え・↑↓キーが引き続き動くこと。
