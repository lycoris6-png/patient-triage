# PatientTriage 開発場所

2026-09-05に分散した実装を統合。このPCでは C:\dev\patient-triage と C:\dev\patient-triage-android が正本です。

## 統合したもの
- Web: C:\dev 側のキャラ・会話・表示修正と未コミットのPixel Watch連携。
- Web / Android: 2026-09-05の外部AI通知撤去。GASデータ同期と端末通知は維持。
- Android: .codex-tmp に残っていたWatchブリッジ・WearSyncプラグイン・wearモジュール。
- キャッシュ用のWeb資産ハッシュ更新とWatchスクリプトの読み込みを両方維持。
- 旧版にしかない設計資料も保存。旧フォルダは参照用で、開発元ではありません。

## ノートPCで再開
1. 引き継ぎZIPをOneDrive外（例 C:\dev）へ展開。2フォルダを並べたまま保つ。
2. Codexでは patient-triage をプロジェクトとして開く。この DEVELOPMENT.md と AGENTS.md を読ませる。
3. Node.js 22以上とAndroid Studio / SDKを用意。Android側で npm ci。
4. 古いPATIENT_TRIAGE_WEB_ROOT環境変数があれば解除。npm run check、npm run cap:sync。
5. Android Studioで patient-triage-android/android を開く。SDKパスとJDKをノートPCに合わせる。
6. 電話用APKは android で gradlew.bat :app:assembleDebug、Watch用は普段使いなら :wear:assembleRelease（下の「Pixel Watch」参照）。

## 巻き戻り防止
- 同時に両PCで同じファイルを編集しない。出発側の変更を保存してから引き渡す。
- 引き継ぎはWeb・Androidの2フォルダを一組で行う。Git未コミット変更も含める。
- www/ やAPKからソースを戻さない。日時だけを根拠に別コピーで上書きしない。
- マーカー .patient-triage-workspace.json は両方で対にする。
- キャッシュ名は統合作業では変更していない。コミット・pushもしていない。

## Pixel Watch（2026-09-12 実機で同期・完了操作まで確認済み）

ソースの場所:
- 時計アプリ: patient-triage-android/android/wear（Kotlin + Compose for Wear。画面は wear/.../ui/PatientTriageWearApp.kt、同期は .../sync、計測は .../run、Tileは .../tile）
- 電話側の橋渡し: patient-triage-android/android/app/.../WearSyncPlugin.kt と native/watch-bridge.js
- Web側の送信データ生成: patient-triage/prototype_unified_triage.app.js の buildWatchStatePayload 付近（patient-triage-watch-state / patient-triage-watch-command イベント）

絶対に守ること:
- 時計アプリの applicationId は電話と同じ io.github.lycoris6png.patienttriage にする（wear/build.gradle）。Wear OSのData Layerは同じIDと同じ署名でないと同期しない。Kotlinのnamespaceだけ .wear。
- 時計は release（wear/build.gradle で minify・-dontobfuscate・debug鍵署名）を入れる。debug版はComposeが目に見えて重い。
- ビルドは必ず C:\dev で行う。OneDrive配下だとGradleが assets を読めず失敗する。

更新手順（「時計を更新して」と頼まれたらこれ）:
1. `set JAVA_HOME=C:\Program Files\Android\Android Studio\jbr`、`set ANDROID_HOME=C:\Users\Lycor\AppData\Local\Android\Sdk`（local.properties は無い）
2. Web側を変えたときは patient-triage-android で `npm run cap:sync` → `android\gradlew.bat :app:assembleDebug` → 電話へ `adb install -r android\app\build\outputs\apk\debug\app-debug.apk`
3. 時計は `android\gradlew.bat :wear:assembleRelease` → `adb -s <時計> install -r android\wear\build\outputs\apk\release\wear-release.apk`
4. 時計の起動確認: `adb -s <時計> shell am start -n io.github.lycoris6png.patienttriage/io.github.lycoris6png.patienttriage.wear.MainActivity`

時計へのadb接続（無線、USB端子なし）:
- 時計の 設定 → 開発者向けオプション → ワイヤレスデバッグ → 「新しいデバイスとペア設定」の IP:ポート と6桁コードで `adb pair IP:ポート コード`
- 接続用ポートはペア用と別。`adb mdns services` の `_adb-tls-connect._tcp` 行に出る IP:ポート で `adb connect`。以後 `-s IP:ポート` で指定
- adb は C:\Users\Lycor\AppData\Local\Android\Sdk\platform-tools\adb.exe（PATH未登録）。PowerShellで引用符付きパスを呼ぶときは先頭に `&`

仕様メモ:
- 時計は表示・操作端末で、正本はWeb（PWA）。時計からは「完了」「回診チェック切替」を operationId 付きコマンドで送り、PWAが適用してからackする。時計単独で全データは書き換えない。
- タイマー・件数カウンターは時計内で完結（PWAの計測状態とは同期しない）。完了だけコマンドで飛ぶ。
- Tileには残件数と進捗だけ出し、患者名・タスク名は出さない。

## 未完了
- E2B TPU版4.0 GBの端末内AIは未実装。Pixel 10 Pro Fold / Edge Galleryで日本語生成OKとの報告あり。
- GAS側で稼働中の定期通知トリガーは未停止。
- Watch: 時計での「詰まり」マーク、予定通知からの起動、Bluetooth切断中の長時間運用テストは未実施。
- APKの更新インストールには前のAPKと同じ署名が必要。時計もデバッグ鍵（~/.android/debug.keystore）で署名しているので、PCを替えるときはこの鍵を持っていく。引き継ぎZIPには秘密鍵を含めていません。
