# Claude向けソフト情報: ぺいとり！ + Pixel Watch連携

最終更新: 2026-08-26

この文書は、Claudeが「ぺいとり！」本体と、連携するPixel Watch向けソフトの設計・開発に参加するための初期コンテキストである。確認済みの現状、推奨案、未決事項を分けて記載する。

## 1. 目標

開発対象は次の2つ。

1. 既存のADHD自助タスク管理アプリ「ぺいとり！」を継続開発する。
2. Pixel Watch上で、ぺいとりの重要情報を短時間で確認し、最低限の操作を行えるWear OSアプリを開発する。

時計版の目的は、スマートフォン版を丸ごと移植することではない。腕を上げて数秒で「次にやることを確認」「完了にする」まで終えられる補助端末にする。

## 2. ぺいとり！の製品概要（確認済み）

ぺいとり！は、主に病棟・救急業務のタスクと私生活のタスクを扱う、日本語UIの個人用PWAである。医療判断や診断を行うアプリではなく、ユーザーが入力した優先度とタスクを整理・実行するための道具である。

主なモード:

- `patient` / ぺいとり: 患者単位のタスク、すきまタスク、回診・カルテチェック、予定、完了数
- `daily` / でいとり: 家事・生活タスク、前回実施日、ルーチン
- `work` / わーとり: 大きな仕事をステップへ分解して進めるモード

主な機能:

- 患者優先度: `er`, `high`, `normal`, `low`, `planned`
- 患者タスクと一般タスクの追加、編集、完了、保留、詰まり状態
- 時刻付きタスク、日付と時刻を持つ予定
- 回診チェック、カルテチェック（業務日境界の06:00に日付が切り替わる）
- 今日・累計の完了数、節目演出、ちびコーチ
- ローカル保存、JSON入出力、日次バックアップ、任意のGAS同期
- Pushover通知、GAS経由のOpenAIによる短いコーチ台詞
- PWAに加え、別リポジトリにCapacitorベースのAndroid APKラッパーが存在する

## 3. 現在のリポジトリ構成（確認済み）

このリポジトリはビルド工程とパッケージ依存を持たない静的サイトで、GitHub Pagesから配信される。

| ファイル | 役割 |
|---|---|
| `index.html` | 本番エントリ、CSS、ちびコーチ演出エンジン |
| `prototype_unified_triage.app.js` | React UIと全アプリロジック。約14,000行の単一ファイル |
| `prototype_unified_triage.html` | 古いURL・PWA向けのリダイレクト |
| `dialogue.js` | `window.APP_DIALOGUE`。キャラクター設定と台詞 |
| `service-worker.js` | PWAキャッシュ |
| `manifest-unified.webmanifest` | PWAマニフェスト |
| `gas-*.gs` | GASの補助実装。同期本体の完全な`doGet` / `doPost`はこのリポジトリにない |
| `patient_triage_vendor/` | Reactなどのランタイムとフォント・画像 |
| `chibi_split_pngs/` | キャラクター画像 |
| `AGENTS.md` | AIエージェント向け作業規約の正本 |

公開URL:

`https://lycoris6-png.github.io/patient-triage/`

### 実装上の絶対条件

- JSXやビルドツールは使えない。既存どおり`React.createElement`を手書きする。
- JSは2スペース、文字列はシングルクォート、UI文言は日本語。
- スタイルは`app.js`のインラインstyleか`index.html`内の`<style>`。
- 主要ターゲットは幅375pxのスマートフォン。
- テーマ、RPGモード、わーとりテーマがあるためCSS変数を優先する。
- `prefers-reduced-motion: reduce`では新規アニメーションを出さない。
- `prototype_unified_triage.app.js`を変更したら、必ず`node --check prototype_unified_triage.app.js`を通す。
- `backup/`、台詞編集領域、GASファイルなどの編集可否は必ず`AGENTS.md`に従う。
- `service-worker.js`の`CACHE_NAME`は変更しない。README内の古い一般説明より`AGENTS.md`を優先する。
- コミットとpushは行わない。

## 4. 現在の状態保存と同期（確認済み）

### ブラウザ保存

- 主ストレージ: `localStorage['patient-triage-v1']`
- GAS設定: `localStorage['patient-triage-gas-config']`
- 日次バックアップ: `patient-triage-backup-YYYY-MM-DD`、直近3日分
- 現在のエクスポート／GAS payload version: `12`
- 業務日の境界: 06:00。06:00より前は前日扱い

主payloadのトップレベル項目:

```text
patients, stats, templates,
quickPatientPresets, quickGeneralPresets, quickDailyPresets,
dailyTaskSets, routinePresets,
dailyLinks, patientLinks,
closedPatientTasks, lastDoneItems, endDayLogs, rewards,
pendingPatients, generalTasks,
dailyPatients, dailyGeneralTasks, scheduledEvents,
workModeEnabled, workItems,
ntfySettings, coachCast, version
```

新しいトップレベル永続状態を追加する場合は、`AGENTS.md`記載の保存・復元経路すべてへ追記が必要。既存の`stats`にキーを追加する場合も、日付変更時に残す値かどうかを検討する。

### 代表的な患者データ

```json
{
  "id": "一意ID",
  "name": "患者符丁",
  "priority": "er | high | normal | low | planned",
  "ward": "病棟ID",
  "admissionDate": "YYYY-MM-DD",
  "preDischargeDone": false,
  "memo": "",
  "alerts": {},
  "medHoldNote": "",
  "problems": [],
  "tasks": [],
  "createdAt": 0
}
```

### 代表的なタスクデータ

```json
{
  "id": "一意ID",
  "title": "タスク名",
  "type": "タスク種別ID",
  "estimate": "2 | 5 | 10 | 15 | 30",
  "scheduledTime": "HH:MM または null",
  "reservedDate": "YYYY-MM-DD または null",
  "status": "todo | doing | stuck | hold | done",
  "stuckReason": "",
  "tinyStep": "",
  "createdAt": 0,
  "completedAt": 0
}
```

一般タスクには`general: true`、`dueDate`、でいとりでは`dailyPriority`が加わる。予定は`id`, `title`, `scheduledDate`, `scheduledTime`, `reminderMinutes`, `status`, `createdAt`, `scheduledEvent`を持つ。

### GAS同期

- ブラウザは`POST text/plain`で`{ secret, data }`を送る。
- GETはJSONP。`secret`と`callback`をquery parameterに含める。
- payloadには`updatedAt`を付け、GAS側で古いpushを拒否する想定。
- 同期は変更後3秒で自動pushされる。
- GAS向けpayloadはログを一部削減するが、患者名とタスク本文を含む完全な作業データである。
- Apps Script `PropertiesService`の制約に対応するため、分割保存を前提として約450KBを安全上限にしている。
- GAS設定のURLとsecretは端末のlocalStorageに保存される。リポジトリには秘密情報を置かない。

重要: 現在の同期は「payload全体のスナップショット + `updatedAt`」であり、細粒度の双方向マージAPIではない。Pixel Watchから直接このpayloadを書き戻すと、競合や古い状態による上書きが起こりやすい。

## 5. 既存Android APK連携（確認済み）

Android APKラッパーの`native-bridge.js`は別リポジトリにあり、このリポジトリには含まれない。現状のPWAには次の橋渡しがある。

Webからnativeへ:

- `patient-triage-open-hourly-settings`: Android時報設定画面を開く
- `patient-triage-scheduled-events-sync`: `{ events, requestPermission }`を渡す
- `triage-running-change`: `{ active, mode, paused }`を渡す
- `triage-mode-change`: モード変更通知
- `triage-coach-cast-change`: 有効キャラクター変更通知

nativeからWebへ:

- `patient-triage-native-ready`: native bridgeの準備完了
- `patient-triage-native-navigation`: 予定通知から開いたことを通知。既存sourceは`scheduled_event_notification`
- `patient-triage-scheduled-events-status`: 通知予約結果を通知

予定通知へ渡す既存データ形:

```json
{
  "id": "string",
  "title": "string",
  "scheduledDate": "YYYY-MM-DD",
  "scheduledTime": "HH:MM",
  "reminderMinutes": 10,
  "status": "todo | done"
}
```

Pixel Watch連携を実装するときは、このWeb↔nativeイベント方式を拡張すると既存構造に馴染む。

## 6. Pixel Watch連携の推奨アーキテクチャ（提案）

### 結論

推奨は次の3層構成。

```text
ぺいとりPWA（正本）
        ⇅ CustomEvent / Capacitor bridge
Android APKラッパー（同期ハブ）
        ⇅ Wearable Data Layer API
Pixel Watch Wear OSアプリ（ローカルキャッシュ + 操作キュー）
```

理由:

- PWAのlocalStorageをWear OSアプリから直接読めない。
- 既存Androidラッパーにすでにnative bridgeがある。
- 時計へGAS secretを持たせずに済む。
- 全payloadを時計から上書きせず、タスク操作をコマンドとして正本へ適用できる。
- 時計とスマートフォンが一時的に切断されても、後から同期できる。

Wear OS公式も、時計UIにはCompose for Wear OS、端末間同期にはData Layer API、時計側のローカル保存を組み合わせる構成を推奨している。Data Layerの`DataItem`は通常100KBまでで、切断中の書き込みも再接続後に同期されるため、時計用に縮小した状態には適する。一方、`MessageClient`は永続化も再試行もないため、完了操作の唯一の配送手段にはしない。

公式資料:

- [Create and run your first Wear OS app](https://developer.android.com/training/wearables/get-started/creating)
- [Overview of Data Layer API](https://developer.android.com/training/wearables/data/overview)
- [Choose a client type](https://developer.android.com/training/wearables/data/client-types)
- [Sync data items with the Data Layer API](https://developer.android.com/training/wearables/data/data-items)

### 正本とキャッシュ

- 正本: ぺいとりPWAの状態
- Android APK: WebとWear OS間の変換・配送・ack管理
- Watch: 表示用の縮小スナップショットと未送信操作を端末内保存
- Watchからの操作は「更新済みスナップショット」ではなく「操作コマンド」として送る
- PWAでコマンド適用後、新しい状態スナップショットをWatchへ返す

### 推奨Data Layer path

```text
/patient-triage/state/v1
/patient-triage/commands/v1/{operationId}
/patient-triage/acks/v1/{operationId}
```

状態は`DataItem`、完了など失いたくない操作も永続化される`DataItem`を使う。即時反映が必要なユーザー操作は`setUrgent()`を検討する。時計側にもRoomまたはDataStoreでローカルコピーを持ち、Data Layer自体をデータベース代わりにしない。

### 時計へ送る縮小状態案

患者メモ、プロブレム詳細、薬剤中断内容、過去ログ、テンプレート、GAS secretなどは送らない。

```json
{
  "schemaVersion": 1,
  "revision": 0,
  "generatedAt": 0,
  "workday": "YYYY-MM-DD",
  "mode": "patient | daily",
  "privacyMode": "redacted | coded",
  "stats": {
    "doneToday": 0,
    "remaining": 0
  },
  "tasks": [
    {
      "id": "taskId",
      "patientId": "patientId または null",
      "source": "patient | general | scheduled",
      "patientLabel": "符丁または伏字",
      "ward": "病棟IDまたは空",
      "priority": "er | high | normal | low | planned",
      "title": "タスク名",
      "type": "種別ID",
      "estimateMinutes": 5,
      "status": "todo | doing | stuck | hold | done",
      "scheduledAt": "ISO-8601またはnull"
    }
  ]
}
```

これは既存の全payload version 12とは別の契約として`schemaVersion`を持たせる。時計アプリをPWA内部構造の変更から守るため、Android bridgeまたはPWA側に明示的なprojection関数を置く。

### Watchから送る操作コマンド案

MVPでは完了操作だけに絞る。

```json
{
  "schemaVersion": 1,
  "operationId": "UUID",
  "type": "complete_task",
  "taskId": "taskId",
  "patientId": "patientId または null",
  "source": "patient | general | scheduled",
  "createdAt": 0,
  "baseRevision": 0
}
```

必要条件:

- `operationId`で重複適用を防止する。
- 対象がすでに`done`なら成功扱いにするが、完了数を再加算しない。
- 対象が削除済みなら`not_found`をackし、時計へ最新状態を返す。
- スマートフォン側でPWAが起動していなくても、Android側で操作を保持する。
- Webへ渡すときは新規`patient-triage-watch-command`イベントを追加し、React内の既存完了ロジックを経由させる。
- 適用結果は`applied | already_applied | not_found | rejected`などでackする。

## 7. Pixel WatchアプリのMVP範囲（提案）

### 必須

- Kotlin + Compose for Wear OSの専用アプリ
- オフラインで最後に同期した一覧を表示
- 「次の1件」画面
- 残件数、今日の完了数
- 実行可能タスク一覧
- タスク詳細と大きな「完了」ボタン
- 同期状態（同期済み、送信待ち、スマートフォン未接続）
- 完了操作のキュー、再送、重複排除、ack
- 丸形画面と小さい画面での実機確認
- TalkBack、十分なタップ領域、短い日本語文言

### MVP後

- Tile: 残件数と次の1件。患者名・タスク全文は出しすぎない
- Complication: 数字のみ、または汎用アイコン + 残件数
- `doing` / `stuck`の変更
- タイマー・件数カウンターの時計操作
- 予定通知から該当タスクを開く
- 音声による簡易追加（プライバシーと誤認識対策が必要）

### 初期段階では行わない

- 患者の追加・削除
- 患者メモ、プロブレム、薬剤情報の閲覧・編集
- GASへの全payload直接push
- 医療上の優先度を時計側で自動判定
- AIが患者情報を使って臨床判断する機能
- Watch単独での完全なぺいとり編集

## 8. プライバシー・安全性

時計は他人の目に入りやすく、通知や文字盤は特に露出しやすい。医療現場で使う前提なら、表示内容を最小化する。

- 患者名には実名を入れず、既存方針どおり符丁を使う。
- Watchの初期値は`redacted`とし、一覧では患者名を「患者A」等へ伏せられるようにする。
- 通知、Tile、Complication、Always-on表示には患者名・病棟・タスク本文を原則出さない。
- Watchへ送らない情報: 患者メモ、プロブレム詳細、薬剤中断メモ、過去ログ、GAS URL/secret、OpenAI API key。
- 通信ログ、クラッシュログ、分析ログにタスク本文や患者符丁を残さない。
- 端末ロックを前提とし、Watch側キャッシュはアプリ専用領域へ保存する。
- 完了操作は医療行為の実施記録や電子カルテ記録の代替ではない。
- このアプリは診断・治療判断を行う医療機器ではない。優先度はユーザー入力を表示するだけにする。

## 9. ぺいとり側で想定される変更点（提案）

実装時には一度に大改造せず、契約を小さく追加する。

1. Watch用projectionを生成する純粋関数を追加する。
2. 関連状態変更時に`patient-triage-watch-state`をdispatchする。
3. `patient-triage-native-ready`受信時にも最新stateを再送する。
4. `patient-triage-watch-command`をlistenし、既存の`completeTask`、`completeGeneralTask`、予定更新ロジックへ振り分ける。
5. 完了前に現在statusを確認し、二重完了・二重カウントを防ぐ。
6. native側へ`patient-triage-watch-command-result`で結果を返す。
7. Watch未接続・非Capacitor環境では現在のPWA動作を一切変えない。

Watch連携の状態を新しいトップレベル永続データとしてPWAへ追加する場合は、保存・`buildPayload`・`buildExportJSON`・`applyPayload`をすべて更新する。単なるnative連携キューなら、Androidアプリ専用ストレージへ置き、患者データの全payloadへ混ぜない方がよい。

## 10. 実装順序（提案）

### Phase 0: 契約確定

- 対象Pixel Watch機種、スマートフォン、Android/Wear OSバージョン
- Android APKラッパーのリポジトリ場所とpackage/application ID
- PWAとAPKのどちらを日常の主利用経路にするか
- Watchで表示してよい情報の範囲
- オフライン時に許可する操作
- 配布方法（自分用sideload、internal test、Play Store）

### Phase 1: 読み取り専用縦切り

- PWAが縮小stateを生成
- Android bridgeがData Layerへ転送
- Watchが受信、ローカル保存、一覧表示
- 端末切断・再接続を検証

### Phase 2: 完了操作

- Watchで完了 → command保存・送信
- Android bridge → Webイベント
- PWAでidempotentに適用
- ack → Watchの送信待ち解除
- PWAとWatch双方で完了・残件数一致を確認

### Phase 3: 腕向け機能

- Tile、Complication、通知導線
- `doing` / `stuck`、タイマー等は必要性が確認できたものだけ追加

## 11. テスト観点

ぺいとり本体:

- `node --check prototype_unified_triage.app.js`
- ブラウザPWAでCapacitor未定義でも例外が出ない
- 375pxで横スクロールや文字切れがない
- Watchイベントがない既存環境で挙動が変わらない
- Watchから同じ完了commandを2回送っても`stats.doneToday`と`lifetimeDone`が1回しか増えない
- 06:00境界前後で完了日が正しい
- 患者タスク、一般タスク、予定の全sourceで正しい対象だけ更新される

Android / Wear OS:

- Bluetooth接続中、切断中、再接続後
- スマートフォンアプリforeground / background / 未起動
- Watchプロセスkill後も未ack commandが残る
- 古いstate受信時に新しいstateを巻き戻さない
- WatchとPWAで同じタスクをほぼ同時に完了
- 対象タスクがPWAで削除・終了済み
- 通知・Tile・Complicationに機微情報が出ない
- バッテリー消費と不要なurgent syncの抑制
- 実機の丸形画面、フォント拡大、TalkBack

## 12. 現時点の未決事項

Claudeは以下を推測で固定せず、コードまたはユーザー回答で確認すること。

- Android APKラッパーのリポジトリURL／ローカルパス
- APKのpackage ID、署名、minSdk、targetSdk、Capacitorバージョン
- 対象Pixel Watchの世代とWear OSバージョン
- Watchアプリの新規リポジトリ名と配置先
- GAS同期本体の実運用コードとデプロイ方法
- Watchに患者符丁とタスク名を表示してよいか
- Watch操作を「完了」のみにするか、`doing`や`stuck`も含めるか
- 単独通信（Watchからクラウドへ直接）を将来要件にするか
- Google Play配布か個人用sideloadか

## 13. Claudeへの最初の依頼文（そのまま渡せる）

```text
このリポジトリのCLAUDE.md、AGENTS.md、docs/claude-handoff-patient-triage-pixel-watch.mdを最初に全文読んでください。

目的は、既存の「ぺいとり！」PWAを継続開発しながら、既存Android APKラッパーをハブにしたPixel Watch向けWear OSアプリを段階的に作ることです。PWAを正本、Watchをオフライン対応の表示・操作端末とし、まずは読み取り専用同期、その後にidempotentなタスク完了操作を実装する想定です。

まだ実装は始めず、最初に次を行ってください。
1. 文書と現行コードの整合性を確認する。
2. 不明なAndroid APKリポジトリ、対象端末、表示可能情報、配布方法を質問として整理する。
3. PWA・Android bridge・Wear OSの3領域に分けた最小実装計画を提示する。
4. データ契約、競合処理、プライバシー上の懸念を先に指摘する。

患者情報を含むため、便利さより情報最小化を優先し、Watchやログへ不要な情報を送らないでください。コミット・push・service-workerのCACHE_NAME変更は行わないでください。
```

