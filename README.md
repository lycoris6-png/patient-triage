# Patient Triage

Patient/task triage app for ward and ER work.

## Public Entry Points

- `index.html`: the app (unified version, responsive mobile+desktop, ぺいとり/でいとり/わーとり modes). GitHub Pages entry point.
- `prototype_unified_triage.html`: redirect stub to `index.html`, kept for old bookmarks and previously installed PWAs.

The old v3 mobile/desktop apps were retired to `backup/` in June 2026. All logic now lives in one place.

## Runtime Files

These files are required for the app to run:

- `prototype_unified_triage.app.js` (referenced by `index.html`)
- `manifest-unified.webmanifest`
- `service-worker.js`
- `patient_triage_vendor/`
- `chibi_split_pngs/`
- `pwa-icons/`

Do not delete or rename these unless the matching HTML references are updated.

## Main Features

- Patient priority/classification: `ER`, high, normal, low.
- Patient check modes (回診チェック / カルテチェック): the command dock (ぺいとり mode) shows two toggles, `🚶 回診 n/N` and `📝 カルテ n/N` (mutually exclusive, defined in `PATIENT_CHECK_MODES`). While a mode is active it opens a per-ward progress panel, sorts unchecked patients first, dims checked ones, and **replaces the 終了 button on each non-`予` patient card with the check stamp** (予 patients keep 終了). Stamps store `roundedDate`/`roundedAt` (round) or `chartedDate`/`chartedAt` (chart) on the patient; checks auto-reset at the 06:00 workday boundary. Checking the last patient fires a completion toast + chibi line.
- ER patients sort above ward patients.
- Patient `終了` removes a patient from the active list and triggers a toast/chibi reaction.
- Daily completion stats use a workday boundary: 08:00 in the v3 apps, 06:00 (`WORKDAY_START_HOUR`) in the unified prototype. Counts before the boundary belong to the previous workday.
- Chibi milestone reactions fire once per workday at 5, 10, 15, 20, 25, and 30 completed tasks.
- Chibi coach popups include Yushka and existing characters.
- Initial app mode is time-based: weekdays 08:00–19:59 start in ぺいとり, otherwise でいとり (mode is not persisted; the title button still cycles modes).
- でいとり: completing a task whose title contains a 最後にやった日 item's label auto-updates that item's date (e.g. finishing 「洗濯を干す」 stamps 「洗濯」). The task form also has 📋まとめて追加 (one line = one task, using the currently selected type/priority/estimate).
- わーとり: the JSON import panel has a 「分解依頼プロンプトをコピー」 button (`WORK_IMPORT_PROMPT`) that copies an AI prompt producing `WORK_TRIAGE_IMPORT_V1` JSON. Toasts are rendered separately for work mode (the shared toast element lives inside a `!isWorkMode` block).
- Data is stored in browser `localStorage` under `patient-triage-v1`.
- The unified prototype keeps automatic daily backups under `patient-triage-backup-YYYY-MM-DD` (last 3 days, written once per day on the first save). They can be restored from the データ (バックアップ / GAS同期) panel.
- Optional GAS sync settings are also stored locally.

## Editing Notes for Future Agents

When changing UI or behavior, edit `prototype_unified_triage.app.js` (the only app logic file) and bump `CACHE_NAME` in `service-worker.js`.

- App logic: `prototype_unified_triage.app.js`
- App HTML/CSS: `index.html`
- Shared visual/runtime libraries: `patient_triage_vendor/`
- Character images: `chibi_split_pngs/`

Avoid editing or restoring files in `backup/`; they are historical snapshots only.

## Files to Ignore

The repository may contain local backup or experimental files. They are not production files:

- `*.before-*.html`
- `patient-triage_v2.html`
- `patient-triage-v2.html`
- `patient-triage_v3_desktop_tiles.html`
- `backup/`

## GitHub Pages

If GitHub Pages is enabled from the repository root on `master`, the public URL should be:

https://lycoris6-png.github.io/patient-triage/

## Dialogue (セリフ) Editing

All character dialogue lives in **`dialogue.js`** (`window.APP_DIALOGUE`) — characters' personas/voice rules, lines per mode (ぺいとり/でいとり/わーとり) and scene (start/suggest/add/done/tally/allclear/endday/stuck/idle/daydream), estimate announcements (with `{count}`/`{duration}`/`{finishTime}`/`{freeDuration}` placeholders), reward popups, and milestone toasts.

Two ways to edit:

1. Edit `dialogue.js` directly (or ask an AI tool to — the file is self-documenting).
2. Open **`dialogue-editor.html`** in a browser (also reachable from the app: データ panel → 🎭 セリフ編集…). Edit in forms, preview lines, then download the regenerated `dialogue.js` and replace the file.

The engine in `index.html` and `prototype_unified_triage.app.js` only reads `window.APP_DIALOGUE`; adding/removing lines per scene is safe (a random line is picked each time; an empty scene falls back to idle lines). After replacing `dialogue.js`, bump `CACHE_NAME` in `service-worker.js` if you want installed PWAs to pick it up immediately.

## GAS Sync Notes

The unified prototype now includes `updatedAt` (epoch ms) at the top of every push payload, and reads the JSON response of the POST when CORS allows it. To protect against a stale device silently overwriting newer data (last-write-wins problem), extend the GAS `doPost(e)` to reject pushes older than what is stored:

The browser sends a compact GAS-sync payload: active task data is preserved, while growing UI logs are trimmed for sync (`endDayLogs` to the current week, work logs to recent entries, and stuck-step logs to recent entries). The full local JSON export still keeps the richer local data.

Capacity note: 12 patients with 30 tasks each is usually tens to hundreds of KB as JSON. Apps Script `PropertiesService` has a small per-property value limit (9KB), so storing the whole payload in one property is not safe. Add `gas-chunked-storage.gs` to the Apps Script project to store the payload as chunked properties (it provides `loadStoredData_` / `saveStoredData_`, reads legacy single-property data, and cleans up surplus chunks). `gas-quota-inspector.gs` can be pasted alongside to audit what is using the property stores.

```js
function doPost(e) {
  const body = JSON.parse(e.postData.contents || '{}');
  if (body.secret !== SECRET) return json_({ ok: false, error: 'bad secret' });
  const incoming = body.data || {};
  const stored = loadStoredData_(); // 既存の読み出し処理
  if (stored && stored.updatedAt && incoming.updatedAt && incoming.updatedAt < stored.updatedAt) {
    return json_({ ok: false, error: 'stale push rejected (server has newer data)' });
  }
  saveStoredData_(incoming); // 既存の保存処理
  return json_({ ok: true });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
```

If the GAS deployment does not return readable CORS responses, the client falls back to the old fire-and-forget push and reports "応答は確認できませんでした".

## Character Notifications (Pushover)

> 2026-07: 通知バックエンドは ntfy から **Pushover** に移行済み。デプロイ中のGASプロジェクトは Pushover 送信版になっている。互換のため、内部のデータキー・アクション名 (`ntfySettings`, `action=ntfyTest`, 関数名の `ntfy` プレフィックス) は変更していない。リポジトリの `gas-ntfy-addon.gs` は旧ntfy版の参考実装として残している。

The unified app can sync a lightweight notification schedule to GAS. Each notification slot can have its own time, enabled state, optional title, and optional custom message. If the message is blank, GAS falls back to a character name and a generic fixed line. Patient names, wards, task titles, and clinical details are never sent to Pushover.

1. The notification addon lives in the same Apps Script project as the sync backend.
2. In Apps Script **Script properties**, set:
   - `PUSHOVER_TOKEN` (required): the Pushover application token.
   - `PUSHOVER_USER` (required): the Pushover user key.
   - (Legacy `NTFY_*` properties are no longer used and can be deleted.)
3. `doGet(e)` handles `action=ntfyTest` (kept under the legacy name) after validating `SECRET`.
4. The Apps Script project timezone is **Asia/Tokyo**.
5. A five-minute time trigger (`ntfyScheduledTick`) reads the synced schedule and sends via Pushover.
6. In the app, open **データ → 同期(GAS) → GAS設定**, enable notifications, add or edit slots, save, and press **通知テスト**.
7. Install the Pushover app on the phone and log in with the same user key.

The schedule and enabled cast are read from the latest GAS-synced app data. A same-day sent-key list prevents duplicate notifications when the time trigger runs more than once near the configured time, while still allowing multiple different slots in the same five-minute trigger window. Night-band lines (21:00–04:59, or a slot id of `night`) deliver wind-down messages.

## GAS AI Coach Line

The unified prototype can ask the existing GAS endpoint for a generated chibi coach line on app startup and when `今日はおしまい！` runs. The browser sends only coarse context: trigger, app mode, selected character voice guide, season, time band, fixed location label, rounded end-time label / whether the end time is after 20:00, and Open-Meteo weather summary. It does not send patient names, wards, task titles, or clinical details.

The AI coach uses the OpenAI Responses API through GAS. Add [`gas-openai-coach-addon.gs`](gas-openai-coach-addon.gs) to the same Apps Script project as the sync backend, then set these **Script properties**:

- `OPENAI_API_KEY` (required): OpenAI API key. Never put this key in the browser or repository.
- `OPENAI_COACH_MODEL` (optional): defaults to `gpt-5-mini`. Set this to another model your API project can use if desired.

In the existing `doGet(e)`, after `SECRET` has been validated and `p` / `callback` have been created, add this before the normal sync response:

```js
if (p.action === 'coachLine') return openAiCoachLine_(callback, p.payload || '{}');
```

Deploy a new web-app version and use the existing **データ → GAS設定 → AI一言 テスト** button to verify it. The add-on sends `store: false` to the Responses API and returns `{ ok, text }`, which the current app already understands.

The Android hourly-notification wrapper reuses this same `action=coachLine` route. When the payload has `trigger: hourly`, the current add-on returns `{ ok, lines }` with multiple character-specific candidates in one API request. No extra `doGet` route is required: update `gas-openai-coach-addon.gs` in the existing Apps Script project and deploy a new web-app version. `OPENAI_HOURLY_MODEL` can optionally override the hourly model; otherwise `OPENAI_COACH_MODEL` is reused. The hourly request contains character metadata, selected reference lines from `dialogue.js`, the time band, and recent generated lines only. It does not contain patient data, task text, or task counts.

OpenAI API billing is separate from ChatGPT subscriptions. Complimentary API tokens, when your account/project qualifies for them, are tied to the relevant OpenAI API program and may still require a positive API balance. Check the project usage/billing dashboard before enabling automatic daily lines. The API sends the same deliberately limited context as before; no patient name, ward, task title, or clinical data is included.
