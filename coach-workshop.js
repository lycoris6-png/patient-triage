'use strict';
(function(root) {
  const modes = ['patient', 'daily', 'work'];
  const scenes = ['start', 'suggest', 'add', 'done', 'tally', 'allclear', 'endday', 'stuck', 'idle', 'daydream'];
  const poses = ['neutral', 'thumb', 'cheer', 'thinking', 'hurry', 'clipboard', 'done', 'sleep', 'smug'];
  const safeId = id => typeof id === 'string' && /^[a-z][a-z0-9_-]{0,39}$/.test(id) && !['constructor', 'prototype', '__proto__', 'mentorArt'].includes(id);
  function validateBanter(item) {
    if (!item || !Array.isArray(item.actors) || item.actors.length !== 2 || !item.actors.every(safeId) || item.actors[0] === item.actors[1] || !Array.isArray(item.lines) || !item.lines.length || item.lines.some(line => typeof line !== 'string' || !line.trim() || line.length > 240)) throw Error('二人会話は異なる2人と、1〜240文字の会話を1つ以上登録してください。');
    if (item.kinds != null && (!Array.isArray(item.kinds) || !item.kinds.length || item.kinds.some(kind => !scenes.includes(kind)))) throw Error('二人会話の場面を1つ以上選択してください。');
    return item;
  }
  // Keys depend on source content, not list position, so unrelated insertions do not move edits.
  function banterRows(dialogue, value) {
    const rows = [];
    const edits = new Map((value.banterEdits || []).map(edit => [edit.key, edit]));
    function append(origin, groups) {
      const occurrences = new Map();
      for (const mode of modes) for (const item of groups?.[mode] || []) {
        const signature = JSON.stringify([origin, mode, item]);
        const ordinal = occurrences.get(signature) || 0;
        occurrences.set(signature, ordinal + 1);
        const key = signature + ':' + ordinal;
        const edit = edits.get(key);
        rows.push({ key, mode: edit?.mode || mode, item: edit?.item || edit?.previous || item, original: item, deleted: edit?.item === null, edited: !!edit, origin });
      }
    }
    append('base', dialogue.banter);
    value.characters.forEach(pack => append('pack:' + pack.id, pack.banter));
    for (const addition of value.banterAdded || []) rows.push({ key: 'added:' + addition.id, mode: addition.mode, item: addition.item, deleted: addition.deleted === true, edited: false, origin: 'added' });
    return rows;
  }
  function buildBanter(dialogue, value) {
    const result = Object.fromEntries(modes.map(mode => [mode, []]));
    for (const row of banterRows(dialogue, value)) if (!row.deleted) result[row.mode].push(row.item);
    return result;
  }
  function validate(pack) {
    if (!pack || !safeId(pack.id)) throw Error('IDは英小文字から始まる40文字以内の英数字・ハイフン・アンダーバーにしてください。');
    if (!pack.character || typeof pack.character.name !== 'string' || !pack.character.name.trim()) throw Error('表示名が必要です。');
    for (const mode of modes) for (const scene of scenes) {
      const lines = pack.dialogue?.[mode]?.[scene];
      if (!Array.isArray(lines) || !lines.length || lines.some(line => typeof line !== 'string' || !line.trim() || line.length > 120)) throw Error(mode + ' / ' + scene + ' は1〜120文字のセリフを1本以上登録してください。');
    }
    if (pack.scale != null && (!Number.isFinite(pack.scale) || pack.scale < 0.5 || pack.scale > 1.8)) throw Error('倍率は0.5〜1.8にしてください。');
    for (const [pose, value] of Object.entries(pack.poseScales || {})) {
      if (!poses.includes(pose) || !Number.isFinite(value) || value < 0.5 || value > 1.8) throw Error('ポーズ倍率が不正です。');
    }
    for (const value of Object.values(pack.images || {})) {
      if (typeof value !== 'string' || !(/^data:image\/png;base64,[A-Za-z0-9+/=]+$/.test(value) || /^[a-zA-Z0-9_-]+\.png(?:\?v=[a-zA-Z0-9_-]+)?$/.test(value))) throw Error('画像はPNGまたは既存画像ファイル名を指定してください。');
    }
    for (const mode of modes) {
      if (pack.banter?.[mode] != null && !Array.isArray(pack.banter[mode])) throw Error('二人会話はモードごとの配列で指定してください。');
      for (const item of pack.banter?.[mode] || []) {
        validateBanter(item);
        if (!item.actors.includes(pack.id)) throw Error('キャラパックの二人会話には本人のIDを含めてください。');
      }
    }
    return pack;
  }
  function library(value) {
    if (!value || value.version !== 1 || !Array.isArray(value.characters) || !Array.isArray(value.deleted)) throw Error('コーチ工房のライブラリ形式ではありません。');
    const ids = new Set();
    value.characters.forEach(pack => { validate(pack); if (ids.has(pack.id)) throw Error('IDが重複しています。'); ids.add(pack.id); });
    if (!value.deleted.every(safeId)) throw Error('削除IDが不正です。');
    for (const field of ['banterEdits', 'banterAdded']) {
      if (value[field] != null && !Array.isArray(value[field])) throw Error('二人会話の保存形式が不正です。');
      const keys = new Set();
      for (const record of value[field] || []) {
        const key = field === 'banterEdits' ? record?.key : record?.id;
        if (!record || typeof key !== 'string' || !key || keys.has(key) || !modes.includes(record.mode) || (field === 'banterAdded' && !safeId(key))) throw Error('二人会話の保存IDまたはモードが不正です。');
        keys.add(key);
        if (field === 'banterAdded' || record.item !== null) validateBanter(record.item);
        if (record.previous != null) validateBanter(record.previous);
      }
    }
    return value;
  }
  const src = file => file?.startsWith('data:image/png;base64,') ? file : 'chibi_split_pngs/' + file;
  const api = root.CoachWorkshop = { modes, scenes, poses, validate, validateBanter, banterRows, buildBanter, library, src };
  let data;
  try { data = library(root.APP_COACH_LIBRARY || { version: 1, characters: [], deleted: [] }); }
  catch (error) { console.error('コーチライブラリを読み込めませんでした', error); data = { version: 1, characters: [], deleted: [] }; }
  api.data = data;
  api.pack = id => data.characters.find(pack => pack.id === id);
  api.options = options => options.filter(item => !data.deleted.includes(item.id)).map(item => ({ ...item, label: api.pack(item.id)?.character.name || item.label })).concat(data.characters.filter(pack => !data.deleted.includes(pack.id) && !options.some(item => item.id === pack.id)).map(pack => ({ id: pack.id, label: pack.character.name })));
  api.cast = cast => {
    for (const pack of data.characters) {
      const previous = cast[pack.id];
      cast[pack.id] = { ...previous, alt: pack.character.name, img: { ...previous?.img, ...pack.images } };
      if (previous?.artVariants) cast[pack.id].artVariants = Object.fromEntries(Object.entries(previous.artVariants).map(([key, actor]) => [key, { ...actor, img: { ...actor.img, ...pack.images } }]));
    }
    for (const id of data.deleted) delete cast[id];
  };
  api.entries = (entries, pose) => entries.filter(([id]) => !data.deleted.includes(id)).concat(data.characters.filter(pack => !data.deleted.includes(pack.id) && !entries.some(([id]) => id === pack.id)).map(pack => [pack.id, pose]));
  api.scale = (id, pose, fallback) => { const pack = api.pack(id); return pack ? (pack.poseScales?.[pose] ?? pack.scale ?? fallback) : fallback; };
  if (root.APP_DIALOGUE && !root.COACH_WORKSHOP_EDITOR) {
    const dialogue = root.APP_DIALOGUE;
    const banter = buildBanter(dialogue, data);
    for (const pack of data.characters) {
      dialogue.characters[pack.id] = pack.character;
      for (const mode of modes) {
        dialogue[mode] = dialogue[mode] || {};
        dialogue[mode][pack.id] = pack.dialogue[mode];
      }
    }
    dialogue.banter = banter;
  }
})(window);
