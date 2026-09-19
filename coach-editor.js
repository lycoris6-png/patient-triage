'use strict';
(() => {
  const W = window.CoachWorkshop;
  const $ = id => document.getElementById(id);
  const clone = value => JSON.parse(JSON.stringify(value));
  let library = clone(W.data), selected = '', pose = 'neutral', lineIndex = 0, dirty = false;
  const base = window.APP_COACH_CATALOG;
  let editVersion = 0;
  const labels = ['通常', '励まし', '喜び', '考える', '行動', '一覧確認', '完了', '休憩', '個性'];
  const sceneLabels = ['起動', '次の一手', '追加', '完了', 'カウント', '全部完了', '今日はおしまい', '詰まった', '待機', '独り言'];
  const status = message => { $('status').textContent = message; };
  const changed = () => { editVersion++; dirty = true; status('未反映の変更があります。調整が終わったら「アプリに反映」を押してください。'); };
  const active = () => library.characters.find(pack => pack.id === selected);
  const ids = () => [...new Set([...Object.keys(base), ...library.characters.map(pack => pack.id)])];
  const banterEditor = window.createCoachBanterEditor({
    getLibrary: () => library,
    getCharacters: () => ids().map(id => ({ id, name: library.characters.find(pack => pack.id === id)?.character.name || window.APP_DIALOGUE.characters[id]?.name || id })),
    changed, status
  });
  function baseline(id) {
    const D = window.APP_DIALOGUE;
    const pack = { id, character: clone(D.characters[id]), dialogue: {}, images: {}, poseScales: {} };
    for (const mode of W.modes) {
      pack.dialogue[mode] = clone(D[mode]?.[id] || {});
      for (const scene of W.scenes) if (!pack.dialogue[mode][scene]?.length) pack.dialogue[mode][scene] = ['ひとつずつ、進めていきましょう。'];
    }
    return pack;
  }
  function button(text, callback) { const node = document.createElement('button'); node.textContent = text; node.onclick = callback; return node; }
  function renderList() {
    banterEditor.refresh();
    $('characters').replaceChildren(); $('deleted').replaceChildren();
    for (const id of ids()) {
      const pack = library.characters.find(item => item.id === id);
      const name = pack?.character.name || window.APP_DIALOGUE.characters[id]?.name || id;
      if (library.deleted.includes(id)) {
        $('deleted').append(button(name + ' を復元', () => { library.deleted = library.deleted.filter(value => value !== id); changed(); select(id); }));
      } else {
        const item = button(name, () => select(id)); item.classList.toggle('active', id === selected); $('characters').append(item);
      }
    }
  }
  function select(id) {
    selected = id;
    if (!active()) library.characters.push(baseline(id));
    const pack = active();
    $('editor').classList.remove('hidden'); $('name').value = pack.character.name; $('id').value = id; $('persona').value = pack.character.persona || '';
    $('title').textContent = pack.character.name; $('scale').value = pack.scale ?? 1;
    renderList(); renderLines(); renderPreview(); banterEditor.selectActor(id);
  }
  function renderLines() {
    const pack = active(); if (!pack) return;
    $('lines').value = (pack.dialogue[$('mode').value]?.[$('scene').value] || []).join('\n');
    lineIndex = 0; renderPreview();
  }
  function imageFile(pack) { return pack.images?.[pose] || base[pack.id]?.img[pose] || pack.images?.neutral || base[pack.id]?.img.neutral; }
  function renderPreview() {
    const pack = active(); if (!pack) return;
    const file = imageFile(pack);
    $('preview').hidden = !file;
    if (file) $('preview').src = W.src(file); else $('preview').removeAttribute('src');
    const grayScale = { neutral: 1.05, thumb: 1.05, cheer: 1.05, thinking: 1.12, hurry: 1.08, clipboard: 1.14, done: 1.07, sleep: 1.12, smug: 1.05 };
    const originalScale = pack.id === 'gray' ? (grayScale[pose] || 1.05) * 1.12 : pack.id === 'sangrail' ? 1.12 : 1;
    const scale = pack.poseScales?.[pose] ?? pack.scale ?? originalScale;
    $('preview').style.transform = 'scale(' + scale + ')'; $('scaleValue').textContent = Number(pack.scale ?? 1).toFixed(2) + '×';
    $('poseScale').value = scale; $('poseValue').textContent = Number(scale).toFixed(2) + '×';
    $('imageInfo').textContent = file ? (pack.images?.[pose] ? '登録済み画像' : '既存画像（未変更）') : 'このポーズの画像が未登録です。';
    const lines = $('lines').value.split('\n').filter(line => line.trim());
    $('sample').textContent = lines[lineIndex % Math.max(1, lines.length)] || 'セリフを入力するとここに表示されます。';
    $('count').textContent = lines.length + '本 / 最長' + Math.max(0, ...lines.map(line => line.length)) + '字';
    [...$('poses').children].forEach((node, index) => node.classList.toggle('active', W.poses[index] === pose));
  }
  W.poses.forEach((key, index) => $('poses').append(button((index + 1) + ' ' + labels[index], () => { pose = key; renderPreview(); })));
  W.scenes.forEach((key, index) => { const option = document.createElement('option'); option.value = key; option.textContent = sceneLabels[index]; $('scene').append(option); });
  $('mode').onchange = renderLines; $('scene').onchange = renderLines;
  $('name').oninput = () => { active().character.name = $('name').value; $('title').textContent = $('name').value; changed(); renderList(); };
  $('persona').oninput = () => { active().character.persona = $('persona').value; changed(); };
  $('lines').oninput = () => { active().dialogue[$('mode').value][$('scene').value] = $('lines').value.split('\n').map(line => line.trim()).filter(Boolean); changed(); renderPreview(); };
  $('scale').oninput = () => { active().scale = Number($('scale').value); changed(); renderPreview(); };
  $('poseScale').oninput = () => { (active().poseScales ||= {})[pose] = Number($('poseScale').value); changed(); renderPreview(); };
  $('resetScale').onclick = () => { delete (active().poseScales ||= {})[pose]; changed(); renderPreview(); };
  $('nextLine').onclick = () => { lineIndex++; renderPreview(); };
  $('new').onclick = () => {
    const id = prompt('新しいキャラの英字ID（例: luna）'); if (!id) return;
    if (ids().includes(id)) return status('同じIDがすでにあります。既存キャラを選んでください。');
    const pack = { id, character: { name: '新しいコーチ', persona: '', rules: [], avoid: [] }, dialogue: {}, images: {}, scale: 1 };
    for (const mode of W.modes) pack.dialogue[mode] = Object.fromEntries(W.scenes.map(scene => [scene, ['ひとつずつ、進めていきましょう。']]));
    try { W.validate(pack); library.characters.push(pack); changed(); select(id); } catch (error) { status(error.message); }
  };
  $('remove').onclick = () => {
    if (ids().filter(id => !library.deleted.includes(id)).length <= 1) return status('少なくとも1人のキャラを残してください。');
    library.deleted.push(selected); selected = ''; $('editor').classList.add('hidden'); changed(); renderList();
  };
  $('import').onchange = async event => {
    try {
      const file = event.target.files[0]; if (!file) return;
      banterEditor.assertSaved();
      const data = JSON.parse(await file.text());
      if (Array.isArray(data.characters)) {
        W.library(data);
        if (dirty && !confirm('現在の未保存の編集を、読み込んだライブラリに置き換えますか？')) return;
        library = clone(data); banterEditor.reset(); selected = ''; $('editor').classList.add('hidden');
      } else {
        W.validate(data);
        if (ids().includes(data.id) && !confirm('同じIDのキャラを読み込んだ内容で置き換えますか？')) return;
        banterEditor.reset();
        library.characters = library.characters.filter(pack => pack.id !== data.id); library.characters.push(data); library.deleted = library.deleted.filter(id => id !== data.id); select(data.id);
      }
      changed(); renderList(); status('JSONを読み込みました。新キャラはPNG9枚を取り込んでください。');
    } catch (error) { status('読み込めませんでした: ' + error.message); }
    finally { event.target.value = ''; }
  };
  $('images').onchange = async event => {
    const pack = active();
    try {
      const files = [...event.target.files]; const updates = {}; const used = new Set();
      for (const file of files) {
        if (file.size > 2 * 1024 * 1024) throw Error('PNGは1枚2MB以内にしてください。');
        const number = /_(0[1-9])_/.exec(file.name)?.[1];
        if (!number && files.length > 1) throw Error('複数選択では _01_ 〜 _09_ を含むファイル名が必要です。');
        const key = number ? W.poses[Number(number) - 1] : pose;
        if (used.has(key)) throw Error('同じポーズの画像が重複しています。'); used.add(key);
        const bytes = new Uint8Array(await file.arrayBuffer());
        if (![137,80,78,71,13,10,26,10].every((value, index) => bytes[index] === value)) throw Error('PNG形式ではありません: ' + file.name);
        const data = await new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = reject; reader.readAsDataURL(new Blob([bytes], { type: 'image/png' })); });
        const image = new Image(); image.src = data; await image.decode();
        if (image.naturalWidth > 4096 || image.naturalHeight > 4096) throw Error('画像が大きすぎます。320×448pxを推奨します。');
        updates[key] = data;
      }
      pack.images = { ...pack.images, ...updates }; changed(); renderPreview(); status(files.length + '枚取り込みました。プレビューでサイズと余白を確認してください。');
    } catch (error) { status(error.message); }
    finally { event.target.value = ''; }
  };
  function ready() {
    W.library(library);
    const remaining = ids().filter(id => !library.deleted.includes(id));
    if (!remaining.length) throw Error('少なくとも1人のキャラを残してください。');
    for (const pack of library.characters.filter(item => remaining.includes(item.id))) {
      if (!base[pack.id]) for (const key of W.poses) if (!pack.images?.[key]) throw Error(pack.character.name + ': ' + key + ' のPNGがありません。');
    }
    banterEditor.assertSaved();
    return 'window.APP_COACH_LIBRARY = ' + JSON.stringify(library, null, 2).replace(/</g, '\\u003c') + ';\n';
  }
  function download(name, text, type) { const link = document.createElement('a'); const url = URL.createObjectURL(new Blob([text], { type })); link.href = url; link.download = name; link.click(); setTimeout(() => URL.revokeObjectURL(url), 10000); }
  $('backup').onclick = () => { try { banterEditor.assertSaved(); } catch (error) { return status(error.message); } download('coach-workshop-backup.json', JSON.stringify(library, null, 2), 'application/json'); status('編集用JSONを保存しました。アプリへの反映はまだです。'); };
  $('download').onclick = () => { try { download('coach-library.js', ready(), 'text/javascript'); status('coach-library.js を正本フォルダへ上書きして、アプリを再読み込みしてください。'); } catch (error) { status(error.message); } };
  $('apply').onclick = async () => {
    try {
      const source = ready();
      const savedVersion = editVersion;
      $('apply').disabled = true;
      if (!window.showDirectoryPicker) return status('このブラウザでは直接保存できません。「反映ファイルをダウンロード」を使ってcoach-library.jsを正本へ上書きしてください。');
      const directory = await window.showDirectoryPicker({ mode: 'readwrite' });
      const index = await (await directory.getFileHandle('index.html')).getFile();
      if (!(await index.text()).includes('coach-workshop.js')) throw Error('コーチ工房を導入済みの正本フォルダを選んでください。');
      const target = await directory.getFileHandle('coach-library.js');
      const old = await (await target.getFile()).text();
      const backup = await directory.getFileHandle('coach-library.backup-' + Date.now() + '.js', { create: true });
      const backupWriter = await backup.createWritable(); await backupWriter.write(old); await backupWriter.close();
      const writer = await target.createWritable(); await writer.write(source); await writer.close();
      dirty = savedVersion !== editVersion;
      if (dirty) return status('保存開始時の内容を反映しました。その後の編集があるため、もう一度反映してください。');
      status('正本へ反映しました。変更前のバックアップも保存しました。アプリを再読み込みしてください。公開版・Android版は配信更新後に反映されます。');
    } catch (error) { status(error.name === 'AbortError' ? '保存をキャンセルしました。編集内容は残っています。' : '反映できませんでした: ' + error.message); }
    finally { $('apply').disabled = false; }
  };
  window.addEventListener('beforeunload', event => { if (dirty) { event.preventDefault(); event.returnValue = ''; } });
  renderList();
})();
