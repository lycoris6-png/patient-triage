'use strict';
window.createCoachBanterEditor = function({ getLibrary, getCharacters, changed, status }) {
  const W = window.CoachWorkshop;
  const $ = id => document.getElementById(id);
  const copy = value => JSON.parse(JSON.stringify(value));
  const modeNames = { patient: 'ぺいとり', daily: 'でいとり', work: 'わーとり' };
  const sceneNames = { start: '起動', suggest: '次の一手', add: '追加', done: '完了', tally: 'カウント', allclear: '全部完了', endday: '今日はおしまい', stuck: '詰まった', idle: '待機', daydream: '独り言' };
  let draft = null, draftDirty = false;
  const name = id => getCharacters().find(item => item.id === id)?.name || id;
  const message = text => { $('banterMessage').textContent = text; };
  const rows = () => W.banterRows(window.APP_DIALOGUE, getLibrary());
  function node(tag, text, className) {
    const element = document.createElement(tag);
    if (text != null) element.textContent = text;
    if (className) element.className = className;
    return element;
  }
  function button(text, action) { const element = node('button', text); element.onclick = action; return element; }
  function options(id, allLabel) {
    const select = $(id), previous = select.value;
    select.replaceChildren();
    if (allLabel) { const item = node('option', allLabel); item.value = ''; select.append(item); }
    for (const character of getCharacters()) {
      const item = node('option', character.name + (getLibrary().deleted.includes(character.id) ? '（登場停止）' : ''));
      item.value = character.id; select.append(item);
    }
    if (!previous || getCharacters().some(item => item.id === previous)) select.value = previous;
  }
  function updateEdit(row, item, mode = row.mode) {
    const library = getLibrary();
    if (row.origin === 'added') {
      const addition = library.banterAdded.find(entry => 'added:' + entry.id === row.key);
      if (item === null) addition.deleted = true;
      else { addition.item = copy(item); addition.mode = mode; addition.deleted = false; }
    } else {
      library.banterEdits = (library.banterEdits || []).filter(entry => entry.key !== row.key);
      library.banterEdits.push({ key: row.key, mode, item: copy(item), ...(item === null ? { previous: copy(row.item), wasEdited: row.edited } : {}) });
    }
  }
  function restore(row) {
    if (draftDirty && draft?.key === row.key) return message('編集中の会話を確定するか、編集を取り消してください。');
    if (row.origin === 'added') getLibrary().banterAdded.find(entry => 'added:' + entry.id === row.key).deleted = false;
    else {
      const edit = (getLibrary().banterEdits || []).find(entry => entry.key === row.key);
      if (row.deleted && edit?.previous && edit.wasEdited) {
        edit.item = edit.previous; delete edit.previous; delete edit.wasEdited;
      } else getLibrary().banterEdits = (getLibrary().banterEdits || []).filter(entry => entry.key !== row.key);
    }
    changed(); render(); message('会話を元に戻しました。「アプリに反映」で保存できます。');
  }
  function remove(row) {
    if (draftDirty && draft?.key === row.key) return message('編集中の会話を確定するか、編集を取り消してください。');
    updateEdit(row, null); changed(); render(); message('会話を削除しました。「削除した会話も表示」から復元できます。');
  }
  function render() {
    const actor = $('banterActor').value, partner = $('banterPartner').value, mode = $('banterMode').value;
    const visible = rows().filter(row => (!mode || row.mode === mode) && (!actor || row.item.actors.includes(actor)) && (!partner || row.item.actors.includes(partner)) && ($('banterDeleted').checked || !row.deleted));
    $('banterCount').textContent = visible.length + '組 / ' + visible.reduce((sum, row) => sum + row.item.lines.length, 0) + '会話';
    $('banterList').replaceChildren();
    if (!visible.length) $('banterList').append(node('p', 'この条件の会話はありません。相手やモードを変えるか、会話を追加してください。', 'muted'));
    for (const row of visible) {
      const card = node('article', null, 'banter-card' + (row.deleted ? ' banter-deleted' : ''));
      card.append(node('h3', row.item.actors.map(name).join(' × ')));
      card.append(node('p', modeNames[row.mode] + ' / ' + (row.item.kinds || W.scenes).map(kind => sceneNames[kind] || kind).join('・') + ' / ' + (row.deleted ? '削除済み' : row.edited ? '編集済み' : row.origin === 'base' ? '既存' : '追加'), 'small muted'));
      if (row.item.actors.some(id => getLibrary().deleted.includes(id))) card.append(node('p', '登場停止中のキャラを含むため、現在アプリでは表示されません。', 'small muted'));
      row.item.lines.forEach(line => card.append(node('p', line, 'banter-turn')));
      const actions = node('div', null, 'row');
      if (row.deleted) actions.append(button('この会話を復元', () => restore(row)));
      else {
        actions.append(button('会話を編集', () => start(row)), button('この会話を削除', () => remove(row)));
        if (row.edited) actions.append(button('編集前に戻す', () => restore(row)));
      }
      card.append(actions); $('banterList').append(card);
    }
  }
  function markDraft() { draftDirty = true; changed(); message('会話を編集中です。「会話の編集を確定」を押してください。'); }
  function renderDraftLines() {
    $('banterLines').replaceChildren();
    draft.item.lines.forEach((line, index) => {
      const block = node('div');
      const label = node('label', '会話パターン ' + (index + 1));
      const input = node('textarea'); input.value = line; input.maxLength = 240;
      input.oninput = () => { draft.item.lines[index] = input.value; markDraft(); };
      label.append(input); block.append(label);
      const removeLine = button('パターン ' + (index + 1) + ' を削除', () => { draft.item.lines.splice(index, 1); markDraft(); renderDraftLines(); });
      removeLine.disabled = draft.item.lines.length <= 1; block.append(removeLine); $('banterLines').append(block);
    });
  }
  function start(row) {
    if (draftDirty) return message('先に編集中の会話を確定するか、編集を取り消してください。');
    const characters = getCharacters();
    if (characters.length < 2) return message('二人会話には2人のキャラクターが必要です。');
    const first = $('banterActor').value || characters[0].id;
    const second = $('banterPartner').value && $('banterPartner').value !== first ? $('banterPartner').value : characters.find(item => item.id !== first).id;
    draft = row ? copy(row) : { key: '', mode: $('banterMode').value || 'patient', item: { actors: [first, second], kinds: ['idle', 'daydream'], lines: [name(first) + '「」\n' + name(second) + '「」'] } };
    $('banterFormTitle').textContent = row ? '二人会話を編集' : '二人会話を追加';
    options('banterFirst'); options('banterSecond');
    $('banterFirst').value = draft.item.actors[0]; $('banterSecond').value = draft.item.actors[1]; $('banterEditMode').value = draft.mode;
    $('banterKinds').replaceChildren();
    for (const kind of W.scenes) {
      const label = node('label'); const input = node('input'); input.type = 'checkbox'; input.value = kind;
      input.checked = !draft.item.kinds || draft.item.kinds.includes(kind);
      input.onchange = () => {
        const kinds = new Set(draft.item.kinds || W.scenes);
        if (input.checked) kinds.add(kind); else kinds.delete(kind);
        draft.item.kinds = [...kinds]; markDraft();
      };
      label.append(input, node('span', sceneNames[kind])); $('banterKinds').append(label);
    }
    renderDraftLines(); $('banterForm').classList.remove('hidden');
    $('banterForm').scrollIntoView?.({ block: 'start' });
    if (!row) markDraft(); else message('会話文を編集できます。');
  }
  function actorChanged() {
    if (!draft) return;
    const actors = [$('banterFirst').value, $('banterSecond').value];
    const oldActors = draft.item.actors;
    draft.item.lines = draft.item.lines.map(line => line.split('\n').map(turn => {
      const match = /^([^「」]+)「/.exec(turn);
      const index = match ? oldActors.findIndex(id => name(id) === match[1]) : -1;
      return index >= 0 ? name(actors[index]) + turn.slice(match[1].length) : turn;
    }).join('\n'));
    if (!actors.includes(draft.item.actor)) draft.item.actor = actors[0];
    // Keep matching pose metadata; a newly selected actor uses the normal pose.
    if (draft.item.poses) draft.item.poses = Object.fromEntries(actors.map(id => [id, draft.item.poses[id] || 'neutral']));
    draft.item.actors = actors; markDraft(); renderDraftLines();
  }
  $('banterFirst').onchange = actorChanged; $('banterSecond').onchange = actorChanged;
  $('banterEditMode').onchange = () => { draft.mode = $('banterEditMode').value; markDraft(); };
  $('addBanterLine').onclick = () => { if (!draft) return; draft.item.lines.push(draft.item.actors.map(id => name(id) + '「」').join('\n')); markDraft(); renderDraftLines(); };
  $('saveBanter').onclick = () => {
    if (!draft) return;
    try {
      W.validateBanter(draft.item);
      for (const line of draft.item.lines) {
        const turns = line.split('\n').map(turn => turn.trim()).filter(Boolean);
        const speakers = turns.map(turn => /^([^「」]+)「(.+)」$/.exec(turn));
        const expected = draft.item.actors.map(name);
        if (turns.length !== 2 || speakers.some(match => !match) || !expected.every(speaker => speakers.some(match => match[1] === speaker))) throw Error('各会話は、選択した2人の名前「セリフ」を1人1行で入力してください。空のセリフは保存できません。');
      }
      if (draft.key) updateEdit(draft, draft.item, draft.mode);
      else (getLibrary().banterAdded ||= []).push({ id: 'conversation-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10), mode: draft.mode, item: copy(draft.item) });
      draft = null; draftDirty = false; $('banterForm').classList.add('hidden'); changed(); render();
      message('会話を確定しました。「アプリに反映」で保存できます。');
    } catch (error) { message(error.message); }
  };
  $('cancelBanter').onclick = () => { draft = null; draftDirty = false; $('banterForm').classList.add('hidden'); message('会話の編集を取り消しました。'); };
  $('addBanter').onclick = () => start(null);
  for (const id of ['banterActor', 'banterPartner', 'banterMode', 'banterDeleted']) $(id).onchange = render;
  return {
    refresh() { options('banterActor', 'すべてのキャラ'); options('banterPartner', 'すべての相手'); render(); },
    selectActor(id) { $('banterActor').value = id; $('banterPartner').value = ''; render(); },
    reset() { draft = null; draftDirty = false; $('banterForm').classList.add('hidden'); message(''); },
    assertSaved() { if (draftDirty) { message('編集中の二人会話を確定するか、編集を取り消してください。'); throw Error('編集中の二人会話を確定するか、編集を取り消してください。'); } }
  };
};
