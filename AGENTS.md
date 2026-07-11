# AGENTS.md — ぺいとり! (patient-triage) 作業規約

AIコーディングエージェント(Codex CLI / Claude Code など)向けのリポジトリ規約。

## プロジェクト概要

ADHD自助のタスク管理PWA。ビルドなし・依存なしの静的サイト(GitHub Pages配信)。
本体は `index.html`(CSS+ちびコーチ演出エンジン)+ `prototype_unified_triage.app.js`(全ロジック、約14000行)。

## コーディング規約

- **JSXは使えない**。`React.createElement` 手書き形式(ビルド工程がない)。既存コードの形式に完全に合わせること
- スタイルは**インラインstyle**(app.js内)または `index.html` の `<style>`。CSSファイルは存在しない
- インデント2スペース、文字列はシングルクォート、UI文言は日本語
- 色は原則CSS変数(`var(--accent)` 等)。テーマ切替・RPGモード(`body.rpg-mode`)・わーとりテーマ(`body.work-mode`)があるため、生の色コード直書きは最小限に

## 変更してよいもの / いけないもの

- 触ってよい: `prototype_unified_triage.app.js`, `index.html`(タスク指示があるとき)
- **触ってはいけない**(明示指示がない限り): `backup/`(退役ファイル)、`dialogue.js`・`dialogue-packs.js`・`dialogue-editor.html`(ユーザーが手でカスタムする領域)、`gas-*.gs`(GAS側)、`manifest-*.webmanifest`
- `service-worker.js` の `CACHE_NAME` バンプは**やらない**(最終検証者が行う)
- **コミット・pushはしない**。作業ツリーに変更を残した状態で終了する

## 必須チェック

- `prototype_unified_triage.app.js` を変更したら必ず `node --check prototype_unified_triage.app.js` を通すこと
- `index.html` のインラインscriptを変更したら、括弧の対応に特に注意(過去に閉じ忘れ事故あり)

## アプリ固有の注意

- 新しい永続状態を追加する場合、保存・復元の両系統への追記が必要:
  保存effect / `buildPayload` / `buildExportJSON` / `applyPayload`(app.js内を `applyPayload` でgrep)。
  ただし既存オブジェクト(例: `stats`)へのキー追加なら追記不要
- `stats` はロード時に `parsed.stats?.date === todayStr()` のときしか復元されない(=日付が変わると初期化される)。日をまたいで保持したい値をstatsに足すときは、この条件分岐の else 側で明示的に引き継ぐこと
- ちびコーチ演出は `window.dispatchEvent(new CustomEvent('chibi-coach', { detail: { kind, text? } }))` で発火。エンジンは `index.html` 内のIIFE。セリフ本体は `dialogue.js`(`window.APP_DIALOGUE`)から読むが、エンジン側に必ずフォールバック文を持たせる(dialogue.jsが古くても壊れない設計)
- スマホ(375px)が主要ターゲット。長い文字列でのはみ出しに注意(`overflowWrap: 'anywhere'` / `minmax(0, 1fr)` パターンを踏襲)
- `prefers-reduced-motion: reduce` では新規アニメーション演出を出さない
