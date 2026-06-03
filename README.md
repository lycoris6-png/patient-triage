# Patient Triage

Patient/task triage app for ward and ER work.

## Public Entry Points

- `index.html`: GitHub Pages entry point. Same app as the mobile version.
- `patient-triage_v3.html`: mobile/narrow layout.
- `patient-triage_v3_desktop.html`: desktop layout.

## Runtime Files

These files are required for the app to run:

- `patient-triage_v3.app.js`
- `patient-triage_v3_desktop.app.js`
- `patient_triage_vendor/`
- `chibi_split_pngs/`

Do not delete or rename these unless the matching HTML references are updated.

## Main Features

- Patient priority/classification: `ER`, high, normal, low.
- ER patients sort above ward patients.
- Patient `終了` removes a patient from the active list and triggers a toast/chibi reaction.
- Daily completion stats use a workday boundary of 08:00. Counts from midnight to 07:59 belong to the previous workday.
- Chibi milestone reactions fire once per workday at 5, 10, 15, 20, 25, and 30 completed tasks.
- Chibi coach popups include Yushka and existing characters.
- Data is stored in browser `localStorage` under `patient-triage-v1`.
- Optional GAS sync settings are also stored locally.

## Editing Notes for Future Agents

When changing UI or behavior, edit the appropriate `.app.js` file and keep the matching HTML script reference intact.

- Mobile app logic: `patient-triage_v3.app.js`
- Desktop app logic: `patient-triage_v3_desktop.app.js`
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

## GAS AI Coach Line

The unified prototype can ask the existing GAS endpoint for a generated chibi coach line on app startup and when `今日はおしまい！` runs. The browser sends only coarse context: trigger, app mode, season, time band, fixed location label, rounded end-time label / whether the end time is after 20:00, and Open-Meteo weather summary. It does not send patient names, wards, task titles, or clinical details.

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
  const lateEndNote = ctx.isLateEnd
    ? '20時を過ぎた遅いおしまいです。具体的な時刻は言わず、「夜遅く」「20時過ぎ」程度に丸めて、帰りが遅くなったことを労い、早く休む方向に短く寄り添ってください。'
    : '';
  const prompt = [
    'あなたはタスク整理アプリの小さなキャラクターです。',
    '医療判断、診療助言、患者情報への言及は禁止。',
    'ユーザーを軽く励ます日本語の一言だけを返してください。80字以内。',
    '不自然な比喩や硬い言い回しは避け、普通に人へ声をかける口調にしてください。',
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
    payload: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
  });
  const data = JSON.parse(res.getContentText() || '{}');
  const text = (data.candidates?.[0]?.content?.parts?.[0]?.text || '').replace(/[\r\n]+/g, ' ').trim().slice(0, 120);
  return jsonp_(callback, { ok: !!text, text });
}
```
