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
