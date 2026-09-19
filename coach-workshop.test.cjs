'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const read = name => fs.readFileSync(path.join(__dirname, name), 'utf8');
const load = (context, name) => vm.runInNewContext(read(name), context, { filename: name });
async function main() {
  const seed = { window: {}, console }; load(seed, 'dialogue.js'); load(seed, 'coach-catalog.js'); load(seed, 'coach-workshop.js');
  const W = seed.window.CoachWorkshop;
  const pack = { id: 'test-coach', character: { name: 'テストコーチ' }, scale: 1.25, images: {}, dialogue: {} };
  for (const mode of W.modes) pack.dialogue[mode] = Object.fromEntries(W.scenes.map(scene => [scene, ['テスト用の一言です。']]));
  for (const pose of W.poses) pack.images[pose] = 'test_01_neutral.png';
  W.validate(pack);
  for (const change of [{ id: '__proto__' }, { scale: 20 }, { images: { neutral: 'javascript:alert(1)' } }, { dialogue: {} }, { banter: { patient: ['wrong-format'] } }]) assert.throws(() => W.validate({ ...pack, ...change }));
  assert.throws(() => W.library({ version: 1, characters: [pack, pack], deleted: [] }));
  const dialogueBase = JSON.parse(JSON.stringify(seed.window.APP_DIALOGUE));
  const emptyLibrary = { version: 1, characters: [], deleted: [] };
  assert.equal(JSON.stringify(W.buildBanter(dialogueBase, emptyLibrary)), JSON.stringify(dialogueBase.banter));
  const originalRows = W.banterRows(dialogueBase, emptyLibrary);
  assert.equal(originalRows.length, 24);
  const first = originalRows[0], second = originalRows[1];
  const editedItem = JSON.parse(JSON.stringify(first.item));
  editedItem.lines[0] = 'グレイ「編集の保存テスト。」\nサングレイル「変更を確認したよ。」';
  const banterLibrary = { ...emptyLibrary, banterEdits: [{ key: first.key, mode: 'daily', item: editedItem }, { key: second.key, mode: second.mode, item: null }], banterAdded: [{ id: 'test-conversation', mode: 'work', item: editedItem }] };
  W.library(banterLibrary);
  const built = W.buildBanter(dialogueBase, banterLibrary);
  assert.equal(built.patient.length, dialogueBase.banter.patient.length - 2);
  assert.equal(built.daily.length, dialogueBase.banter.daily.length + 1);
  assert.equal(built.work.length, dialogueBase.banter.work.length + 1);
  assert.equal(built.daily[0].lines[0], editedItem.lines[0]);
  assert.equal(JSON.stringify(built.daily[0].poses), JSON.stringify(first.item.poses));
  assert.equal(dialogueBase.banter.patient[0].lines[0], first.item.lines[0]);
  const inserted = JSON.parse(JSON.stringify(dialogueBase));
  inserted.banter.patient.unshift({ actors: ['mentor', 'spark'], lines: ['エスト「新しい会話です。」\nナディア「そうだね！」'] });
  assert.ok(W.banterRows(inserted, banterLibrary).some(row => row.key === first.key && row.edited && row.mode === 'daily'));
  const reloaded = { window: { APP_DIALOGUE: JSON.parse(JSON.stringify(dialogueBase)), APP_COACH_LIBRARY: JSON.parse(JSON.stringify(banterLibrary)) }, console };
  load(reloaded, 'coach-workshop.js');
  assert.equal(JSON.stringify(reloaded.window.APP_DIALOGUE.banter), JSON.stringify(built));
  assert.throws(() => W.validateBanter({ actors: ['gray', 'gray'], lines: ['同じ人'] }));
  assert.throws(() => W.validateBanter({ ...editedItem, kinds: [] }));
  assert.throws(() => W.library({ ...emptyLibrary, banterEdits: [{ key: first.key, mode: 'wrong', item: null }] }));
  const imported = { ...pack, banter: { patient: [{ actors: [pack.id, 'mentor'], lines: ['テストコーチ「新しい会話です。」\nエスト「確認しましょう。」'] }] } };
  const importedLibrary = { ...emptyLibrary, characters: [imported] };
  const importedRows = W.banterRows(dialogueBase, importedLibrary);
  const importedRow = importedRows.find(row => row.origin === 'pack:' + pack.id);
  importedLibrary.banterEdits = [{ key: importedRow.key, mode: 'patient', item: null }];
  assert.equal(W.buildBanter(dialogueBase, importedLibrary).patient.length, dialogueBase.banter.patient.length);
  const context = { window: { APP_COACH_LIBRARY: { version: 1, characters: [pack], deleted: ['gray'] } }, console, localStorage: { getItem: () => null } };
  load(context, 'dialogue.js'); load(context, 'coach-workshop.js');
  const api = context.window.CoachWorkshop;
  assert.equal(api.scale(pack.id, 'sleep', 1), 1.25);
  assert.equal(api.options([{ id: 'gray', label: 'グレイ' }])[0].id, pack.id);
  assert.equal(context.window.APP_DIALOGUE.patient[pack.id].done[0], pack.dialogue.patient.done[0]);
  const html = read('index.html');
  for (const [, script] of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)) new vm.Script(script);
  const start = html.indexOf("  const CHIBI_BASE =");
  const stop = html.indexOf('  let headerCastStyle =', start);
  vm.runInNewContext(html.slice(start, stop) + '\nwindow.testResult = { cast, flows, rewardFlow, headerCastSets, DEFAULT_CAST_ENABLED };', context);
  const result = context.window.testResult;
  assert.ok(result.cast[pack.id]); assert.ok(!result.cast.gray);
  for (const entries of [...Object.values(result.flows), result.rewardFlow, ...result.headerCastSets]) {
    assert.ok(entries.some(([id]) => id === pack.id)); assert.ok(!entries.some(([id]) => id === 'gray'));
  }
  assert.ok(result.DEFAULT_CAST_ENABLED[pack.id]);
  // Exercise the actual editor handlers with file-system handles kept in memory.
  class Element {
    constructor() { this.children = []; this.value = ''; this.classList = { add() {}, remove() {}, toggle() {} }; this.style = {}; }
    append(...nodes) { this.children.push(...nodes); }
    replaceChildren() { this.children = []; }
    removeAttribute() {}
  }
  const nodes = new Map(); const get = id => { if (!nodes.has(id)) nodes.set(id, new Element()); return nodes.get(id); };
  get('mode').value = 'patient'; get('scene').value = 'start';
  const files = new Map([['index.html', '<script src="coach-workshop.js"></script>'], ['coach-library.js', 'original library']]);
  const directory = { async getFileHandle(name, options) {
    if (!files.has(name) && !options?.create) throw Error('missing');
    return { async getFile() { return { async text() { return files.get(name); } }; }, async createWritable() { return { async write(value) { files.set(name, value); }, async close() {} }; } };
  } };
  const editor = { window: { COACH_WORKSHOP_EDITOR: true, addEventListener() {}, async showDirectoryPicker() { return directory; } }, document: { getElementById: get, createElement: () => new Element() }, console, setTimeout, Blob, URL };
  load(editor, 'dialogue.js'); load(editor, 'coach-catalog.js'); load(editor, 'coach-workshop.js'); load(editor, 'coach-banter-editor.js'); load(editor, 'coach-editor.js');
  get('characters').children[0].onclick();
  get('lines').value = '保存テストです。'; get('lines').oninput();
  await get('apply').onclick();
  assert.match(get('status').textContent, /正本へ反映しました/);
  assert.ok([...files.entries()].some(([name, value]) => name.startsWith('coach-library.backup-') && value === 'original library'));
  const saved = { window: {} }; vm.runInNewContext(files.get('coach-library.js'), saved);
  assert.equal(saved.window.APP_COACH_LIBRARY.characters[0].dialogue.patient.start[0], '保存テストです。');
  // Use the real form handlers: filters, existing dialogue edits, save/reload, deletion and restore.
  get('banterActor').value = 'gray'; get('banterPartner').value = 'sangrail'; get('banterMode').value = 'patient'; get('banterMode').onchange();
  assert.equal(get('banterCount').textContent, '2組 / 5会話');
  const action = (card, text) => card.children.at(-1).children.find(child => child.textContent === text);
  action(get('banterList').children[0], '会話を編集').onclick();
  const firstInput = get('banterLines').children[0].children[0].children[0];
  firstInput.value = editedItem.lines[0]; firstInput.oninput();
  const beforeDraft = files.get('coach-library.js'); await get('apply').onclick();
  assert.equal(files.get('coach-library.js'), beforeDraft); assert.match(get('status').textContent, /二人会話を確定/);
  get('saveBanter').onclick();
  assert.match(get('banterMessage').textContent, /確定しました/);
  await get('apply').onclick();
  const withBanter = { window: {} }; vm.runInNewContext(files.get('coach-library.js'), withBanter);
  assert.equal(withBanter.window.APP_COACH_LIBRARY.banterEdits[0].item.lines[0], editedItem.lines[0]);
  const restoredApp = { window: { APP_DIALOGUE: JSON.parse(JSON.stringify(dialogueBase)), APP_COACH_LIBRARY: withBanter.window.APP_COACH_LIBRARY }, console };
  load(restoredApp, 'coach-workshop.js');
  assert.equal(restoredApp.window.APP_DIALOGUE.banter.patient[0].lines[0], editedItem.lines[0]);
  action(get('banterList').children[0], 'この会話を削除').onclick();
  assert.equal(get('banterCount').textContent, '1組 / 3会話');
  await get('apply').onclick();
  const deletedBanter = { window: {} }; vm.runInNewContext(files.get('coach-library.js'), deletedBanter);
  assert.equal(deletedBanter.window.APP_COACH_LIBRARY.banterEdits[0].item, null);
  get('banterDeleted').checked = true; get('banterDeleted').onchange();
  action(get('banterList').children[0], 'この会話を復元').onclick();
  assert.equal(get('banterCount').textContent, '2組 / 5会話');
  action(get('banterList').children[0], '会話を編集').onclick();
  assert.equal(get('banterLines').children[0].children[0].children[0].value, editedItem.lines[0]);
  get('cancelBanter').onclick();
  action(get('banterList').children[0], '編集前に戻す').onclick();
  get('addBanter').onclick();
  const newInput = get('banterLines').children[0].children[0].children[0];
  newInput.value = editedItem.lines[0]; newInput.oninput(); get('saveBanter').onclick();
  assert.equal(get('banterCount').textContent, '3組 / 6会話');
  await get('apply').onclick();
  const addedBanter = { window: {} }; vm.runInNewContext(files.get('coach-library.js'), addedBanter);
  assert.equal(addedBanter.window.APP_COACH_LIBRARY.banterAdded.length, 1);
  assert.equal(addedBanter.window.APP_COACH_LIBRARY.banterEdits.length, 0);
  const before = files.get('coach-library.js');
  get('lines').value = ''; get('lines').oninput(); await get('apply').onclick();
  assert.equal(files.get('coach-library.js'), before); assert.match(get('status').textContent, /1〜120文字/);
  get('remove').onclick(); assert.ok(get('deleted').children.length); get('deleted').children[0].onclick();
  assert.equal(get('deleted').children.length, 0);
  console.log('PASS: validation, runtime cast/flows/dialogue/scale, inline syntax, editor save/backup/rejected save/delete/restore; banter filters/edit/add/delete/restore/save/reload/group preservation');
}
main().catch(error => { console.error(error); process.exitCode = 1; });
