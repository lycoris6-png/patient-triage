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

## ntfy Character Notifications

The unified app can sync a lightweight notification schedule to GAS. GAS sends only a character name and a generic fixed line to ntfy; patient names, wards, task titles, and clinical details are never sent to ntfy.

1. Add `gas-ntfy-addon.gs` to the same Apps Script project as the sync backend.
2. In Apps Script **Script properties**, add:
   - `NTFY_TOPIC` (required): a long, hard-to-guess private topic name.
   - `NTFY_SERVER` (optional): defaults to `https://ntfy.sh`.
   - `NTFY_TOKEN` (optional): ntfy access token when authentication is enabled.
   - `NTFY_CLICK_URL` (optional): the installed app / GitHub Pages URL opened when the notification is tapped.
3. In the existing `doGet(e)`, after validating `SECRET` and defining `p` / `callback`, add this before the normal sync response:

```js
if (p.action === 'ntfyTest') return ntfyTest_(callback);
```

4. Set the Apps Script project timezone to **Asia/Tokyo**.
5. Run `installNtfyTrigger()` once from the Apps Script editor and approve the requested permissions. It installs one five-minute trigger and removes older duplicates first. For a direct send test, select the public `runNtfyTest` function (private helper names ending in `_` are not shown in the GAS function picker).
6. Deploy a new web-app version. In the app, open **データ → GAS設定**, enable ntfy, choose the times, save, and press **通知テスト**.
7. Install the ntfy Android app and subscribe to the same `NTFY_TOPIC`.

The schedule and enabled cast are read from the latest GAS-synced app data. A per-slot send key prevents duplicate notifications when the time trigger runs more than once near the configured time.

## GAS AI Coach Line

The unified prototype can ask the existing GAS endpoint for a generated chibi coach line on app startup and when `今日はおしまい！` runs. The browser sends only coarse context: trigger, app mode, selected character voice guide, season, time band, fixed location label, rounded end-time label / whether the end time is after 20:00, and Open-Meteo weather summary. It does not send patient names, wards, task titles, or clinical details.

Store the Gemini API key in Apps Script **Script properties** as `GEMINI_API_KEY`; do not commit it to this repo. Extend the GAS `doGet(e)` handler so `action=coachLine` returns JSONP:

```js
const GEMINI_MODEL = 'gemini-2.5-flash';

function jsonp_(callback, obj) {
  const body = `${callback}(${JSON.stringify(obj)})`;
  return ContentService.createTextOutput(body).setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function doGet(e) {
  const p = e.parameter || {};
  const callback = p.callback || 'callback';
  if (p.secret !== SECRET) return jsonp_(callback, { ok: false, error: 'bad secret' });
  if (p.action === 'coachLine') return coachLine_(callback, p.payload || '{}');

  // Existing data-sync JSONP response goes here.
}

function coachLine_(callback, payloadText) {
  const key = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
  if (!key) return jsonp_(callback, { ok: false, error: 'missing GEMINI_API_KEY' });

  const ctx = JSON.parse(payloadText || '{}');
  const weather = ctx.weather
    ? `${ctx.weather.label}、${ctx.weather.temperature}${ctx.weather.temperatureUnit}、降水${ctx.weather.precipitation}${ctx.weather.precipitationUnit}`
    : '天気情報なし';
  const triggerLabel = ctx.trigger === 'endday' ? '今日はおしまい時' : '起動時';
  const modeLabel = ctx.mode === 'daily' ? 'でいとり' : 'ぺいとり';
  const character = ctx.character || {};
  const voiceGuide = [
    `話者: ${character.name || 'アプリキャラクター'}`,
    `人物像: ${character.persona || ''}`,
    `口調ルール: ${(character.rules || []).join(' / ')}`,
    `避ける表現: ${(character.avoid || []).join(' / ')}`,
    `参考例: ${(character.examples || []).join(' | ')}`
  ].filter(line => !/:\s*$/.test(line)).join('\n');
  const lateEndNote = ctx.isLateEnd
    ? '20時を過ぎた遅いおしまいです。具体的な時刻は言わず、「夜遅く」「20時過ぎ」程度に丸めて、帰りが遅くなったことを労い、早く休む方向に短く寄り添ってください。'
    : '';
  const prompt = [
    'あなたはタスク整理アプリの小さなキャラクターです。',
    '医療判断、診療助言、患者情報への言及は禁止。',
    'ユーザーを軽く励ます日本語の一言だけを返してください。80字以内。',
    '話者本人の口調を最優先してください。一人称、語尾、温度感、粗さ/丁寧さを守ります。',
    '参考例の丸写しは避け、同じ人物が今言いそうな新しい短文にしてください。',
    '不自然な比喩や硬い言い回しは避け、普通に人へ声をかける口調にしてください。',
    voiceGuide,
    `場面: ${triggerLabel}`,
    `モード: ${modeLabel}`,
    `場所: ${ctx.locationLabel || '職場'}`,
    `季節: ${ctx.season || ''}`,
    `時間帯: ${ctx.timeBand || ''}`,
    `おしまい時刻区分: ${ctx.lateEndLabel || (ctx.isLateEnd ? '20時過ぎ' : '')}`,
    lateEndNote,
    `天気: ${weather}`
  ].filter(Boolean).join('\n');

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${encodeURIComponent(key)}`;
  const res = UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    muteHttpExceptions: true,
    payload: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { maxOutputTokens: 80, temperature: 0.85 }
    })
  });
  const data = JSON.parse(res.getContentText() || '{}');
  const text = (data.candidates?.[0]?.content?.parts?.[0]?.text || '').replace(/[\r\n]+/g, ' ').trim().slice(0, 120);
  return jsonp_(callback, { ok: !!text, text });
}
```
