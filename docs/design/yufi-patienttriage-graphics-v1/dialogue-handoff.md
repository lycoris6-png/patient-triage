# ユーフィ 仮セリフ実装・差し替えメモ

ユーフィはコーチライブラリへ登録済み。画像9種・キャラ選択・通常演出・時報通知・予定通知・ウィジェットが同じキャラID `yufi` を使う。
仮文は通常30本（3モード×10場面×各1本）、通知5本。
一人称・呼称・細かな口調は、本稿の作成時に決める。

## 別AIへ渡すもの

- `yufi-character-package.placeholder.json`（現在のユーフィだけを収めた、コーチ工房で読み込めるキャラパック）
- キャラ参考画像と、ユーザーが指定する正式な性格・口調設定
- 必要に応じて `../patienttriage-character-package-generation-guide-v1.md` のセリフ部分

## 差し替える場所

JSONの `dialogue.patient / dialogue.daily / dialogue.work` と `notifications` の配列を本稿へ差し替える。
`id`、`images`、`scale` は維持する。
正式な口調が決まったら `character.rules` の未確定事項を更新し、`dialogueStatus` を `final` にする。
画像に添えたニズッチは本性を示す表現で、独立した会話相手としての台詞は仮置きしていない。

通常の場面キーは次の10個。
`start / suggest / add / done / tally / allclear / endday / stuck / idle / daydream`

各場面は空でない文字列の配列。各行120文字以内（スマホでは短文推奨）。
通知キーは `hourly / scheduled / lunch / snack / idle`。
通知側も各行120文字以内の配列。

本稿の目安はぺいとり160本、でいとり30本、わーとり10本。今回は本稿作成前なので、その分量は仮文へ適用していない。

## 取り込み

完成JSONをコーチ工房で読み込み、同じIDのユーフィだけを置き換えて正本へ保存する。
コードで反映する場合は、正本 `C:/dev/patient-triage/coach-library.js` のユーフィの `dialogue` と `notifications` を差し替える。
既存の他キャラや `dialogue.js` 全体を上書きしない。
Web版の `index.html` の `coach-library.js?v=...` を更新し、Android版は正本 `C:/dev/patient-triage-android` で `npm run cap:sync` 後にAPKを再ビルドする。


## 本稿の実装（2026-10-29）

本稿を `coach-library.js` へ実装済み。`dialogueStatus` は `final`。
完成版のキャラパックは同フォルダの `yufi-character-package.json`（`placeholder` 版は差し替え前の記録として残す）。

- 一人称「わたし」、ユーザーは「あなた」。丁寧語で控えめ、ときどき「……」「あの」とためらう
- 勇者らしさは「冒険の書（再開地点）」「宿屋（休憩）」「旅の一歩」「地図」程度の比喩に留める
- ニズッチは話者にせず、daydream でごく稀にほのめかすだけ
- 本数: patient 16本×10場面、daily 3本×10場面、work 1本×10場面、通知 hourly 5 / scheduled 4 / lunch 3 / snack 3 / idle 3
- 二人会話は未作成（相手キャラの指定がないため）
