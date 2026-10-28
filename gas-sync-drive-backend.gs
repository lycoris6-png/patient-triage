// ぺいとり！ 同期本体（Googleドライブ保存版） gas-sync-drive-backend.gs
//
// 旧同期本体（スクリプトプロパティ保存・分割保存）を置き換える doGet / doPost です。
// - 同期データはドライブの「ぺいとり同期」フォルダの JSON ファイルに保存する（容量の上限がほぼない）
// - 保存のたびに版番号(revision)を上げる。アプリが知っている版と違えば上書きせず「競合」を返す
// - 1時間ごとに控えを「ぺいとり同期/控え」に残し、30日を過ぎた控えは消す
// - 「この端末で上書き」で他端末の内容を上書きするときは、上書き前の内容も控えに残す
// - 症例メモを Markdown ファイルとして「症例メモ」フォルダに書き出す
//
// ▼ 導入手順（詳しくは docs/gas-sync-drive-migration.md）
//   1. Apps Script プロジェクトにこのファイルを追加する
//   2. 旧同期本体の doGet / doPost を削除する（同名関数が2つあると、どちらが動くか分からなくなる）
//      gas-chunked-storage.gs は残してよい（旧データの引き継ぎに使う）
//   3. プロジェクトの設定 > スクリプト プロパティに SYNC_SECRET（アプリのシークレットと同じ文字列）を追加する
//      旧本体の const SECRET を残している場合は省略できる
//   4. エディタで syncSetupDrive を一度実行し、ドライブへのアクセスを許可する
//   5. デプロイ > デプロイを管理 > 編集 > バージョン「新バージョン」で同じURLのまま公開し直す
//
// ▼ 任意のスクリプト プロパティ
//   SYNC_FOLDER_ID       同期データを置くフォルダのID（未設定なら「ぺいとり同期」を自動作成）
//   CASE_MEMO_FOLDER_ID  症例メモの書き出し先フォルダのID（未設定なら「ぺいとり同期/症例メモ」）
//                        Obsidian の vault をドライブに移したら、vault 内のフォルダIDを入れる

const SYNC_FOLDER_NAME_ = 'ぺいとり同期';
const SYNC_DATA_FILE_NAME_ = 'patient-triage-data.json';
const SYNC_SNAPSHOT_FOLDER_NAME_ = '控え';
const SYNC_SNAPSHOT_KEEP_DAYS_ = 30;
const SYNC_CASE_MEMO_FOLDER_NAME_ = '症例メモ';
const SYNC_META_PROP_ = 'patient_triage_sync_meta';
const SYNC_LEGACY_PROP_KEY_ = 'patient_triage_data';
const SYNC_TIME_ZONE_ = 'Asia/Tokyo';

// ---------------------------------------------------------------- 入口

function doGet(e) {
  const p = (e && e.parameter) || {};
  const callback = syncCallbackName_(p.callback);
  try {
    if (!syncSecretOk_(p.secret)) return syncOutput_(callback, { ok: false, error: 'シークレットが一致しません' });
    // 旧本体にあったアドオンの入口（アドオンのファイルがある場合だけ）
    if (p.action === 'ntfyTest' && typeof ntfyTest_ === 'function') return ntfyTest_(callback);
    if (p.action === 'coachLine' && typeof openAiCoachLine_ === 'function') return openAiCoachLine_(callback, p.payload || '{}');
    const meta = syncEnsureMigrated_();
    const head = { ok: true, storage: 'drive', revision: meta.revision, updatedAt: meta.updatedAt, updatedBy: meta.updatedBy };
    if (p.action === 'meta') return syncOutput_(callback, head);
    head.data = syncReadData_(meta);
    return syncOutput_(callback, head);
  } catch (err) {
    return syncOutput_(callback, { ok: false, error: syncErrorText_(err) });
  }
}

function doPost(e) {
  let body;
  try {
    body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
  } catch (err) {
    return syncOutput_('', { ok: false, error: '送信内容を読めません' });
  }
  try {
    if (!syncSecretOk_(body.secret)) return syncOutput_('', { ok: false, error: 'シークレットが一致しません' });
    if (body.action === 'exportCaseMemos') return syncOutput_('', syncExportCaseMemos_(body.memos));
    return syncOutput_('', syncSave_(body));
  } catch (err) {
    return syncOutput_('', { ok: false, error: syncErrorText_(err) });
  }
}

// エディタから一度実行して、ドライブの権限を許可し、フォルダと旧データの引き継ぎを済ませる
function syncSetupDrive() {
  const meta = syncEnsureMigrated_();
  const folder = syncFolder_();
  Logger.log('同期フォルダ: ' + folder.getUrl());
  Logger.log('現在の版: ' + meta.revision + ' / 症例メモ: ' + syncCaseMemoFolder_().getUrl());
}

// ---------------------------------------------------------------- 保存

function syncSave_(body) {
  if (!body.data || typeof body.data !== 'object') return { ok: false, error: '保存するデータがありません' };
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const meta = syncEnsureMigrated_();
    const hasBase = typeof body.baseRevision === 'number';
    const stale = hasBase && body.baseRevision !== meta.revision;
    if (stale && body.force !== true) {
      return {
        ok: false,
        conflict: true,
        storage: 'drive',
        revision: meta.revision,
        updatedAt: meta.updatedAt,
        updatedBy: meta.updatedBy,
        error: '別の端末で先に更新されています'
      };
    }
    // 他端末の内容を上書きする前に、その内容を控えとして残す
    if (stale && meta.fileId) {
      syncWriteSnapshot_(syncReadText_(meta), 'overwritten-r' + meta.revision);
    }
    const text = JSON.stringify(body.data);
    const fileId = syncWriteData_(meta, text);
    const now = Date.now();
    const next = {
      revision: (meta.revision || 0) + 1,
      updatedAt: now,
      updatedBy: String(body.deviceLabel || '').slice(0, 40) || '不明な端末',
      deviceId: String(body.deviceId || '').slice(0, 64),
      fileId: fileId,
      lastPrunedDay: meta.lastPrunedDay || ''
    };
    syncWriteSnapshot_(text, Utilities.formatDate(new Date(now), SYNC_TIME_ZONE_, 'yyyy-MM-dd_HH'));
    const today = Utilities.formatDate(new Date(now), SYNC_TIME_ZONE_, 'yyyy-MM-dd');
    if (next.lastPrunedDay !== today) {
      syncPruneSnapshots_(now);
      next.lastPrunedDay = today;
    }
    syncWriteMeta_(next);
    return { ok: true, storage: 'drive', revision: next.revision, updatedAt: next.updatedAt, updatedBy: next.updatedBy };
  } finally {
    lock.releaseLock();
  }
}

// ---------------------------------------------------------------- 症例メモ

// memos: [{ id, fileName, markdown }] を「症例メモ」フォルダへ書く。同じ名前のファイルは上書きする
function syncExportCaseMemos_(memos) {
  if (!Array.isArray(memos) || !memos.length) return { ok: false, error: '書き出す症例メモがありません' };
  if (memos.length > 50) return { ok: false, error: '一度に書き出せるのは50件までです' };
  const folder = syncCaseMemoFolder_();
  const written = [];
  const failed = [];
  memos.forEach(memo => {
    const id = String((memo && memo.id) || '');
    try {
      const name = syncSafeFileName_(memo && memo.fileName);
      const markdown = String((memo && memo.markdown) || '');
      if (!id || !markdown.trim()) throw new Error('内容が空です');
      const existing = folder.getFilesByName(name);
      if (existing.hasNext()) existing.next().setContent(markdown);
      else folder.createFile(name, markdown, MimeType.PLAIN_TEXT);
      written.push(id);
    } catch (err) {
      failed.push({ id: id, error: syncErrorText_(err) });
    }
  });
  return { ok: failed.length === 0, written: written, failed: failed, folderUrl: folder.getUrl(), error: failed.length ? failed.length + '件を書き出せませんでした' : undefined };
}

function syncSafeFileName_(value) {
  const base = String(value || '')
    .replace(/[\\/:*?"<>|#^\[\]\u0000-\u001f]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\.md$/i, '')
    .slice(0, 80)
    .trim();
  return (base || '症例メモ') + '.md';
}

// ---------------------------------------------------------------- ドライブ

function syncFolder_() {
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty('SYNC_FOLDER_ID');
  if (id) return DriveApp.getFolderById(id);
  const found = DriveApp.getRootFolder().getFoldersByName(SYNC_FOLDER_NAME_);
  const folder = found.hasNext() ? found.next() : DriveApp.getRootFolder().createFolder(SYNC_FOLDER_NAME_);
  props.setProperty('SYNC_FOLDER_ID', folder.getId());
  return folder;
}

function syncChildFolder_(parent, name) {
  const found = parent.getFoldersByName(name);
  return found.hasNext() ? found.next() : parent.createFolder(name);
}

function syncCaseMemoFolder_() {
  const id = PropertiesService.getScriptProperties().getProperty('CASE_MEMO_FOLDER_ID');
  return id ? DriveApp.getFolderById(id) : syncChildFolder_(syncFolder_(), SYNC_CASE_MEMO_FOLDER_NAME_);
}

function syncReadText_(meta) {
  if (!meta.fileId) return '';
  return DriveApp.getFileById(meta.fileId).getBlob().getDataAsString('UTF-8');
}

function syncReadData_(meta) {
  const text = syncReadText_(meta);
  return text ? JSON.parse(text) : null;
}

function syncWriteData_(meta, text) {
  if (meta.fileId) {
    DriveApp.getFileById(meta.fileId).setContent(text);
    return meta.fileId;
  }
  const folder = syncFolder_();
  const found = folder.getFilesByName(SYNC_DATA_FILE_NAME_);
  if (found.hasNext()) {
    const file = found.next();
    file.setContent(text);
    return file.getId();
  }
  return folder.createFile(SYNC_DATA_FILE_NAME_, text, MimeType.PLAIN_TEXT).getId();
}

function syncWriteSnapshot_(text, label) {
  if (!text) return;
  const folder = syncChildFolder_(syncFolder_(), SYNC_SNAPSHOT_FOLDER_NAME_);
  const name = 'patient-triage-' + label + '.json';
  const found = folder.getFilesByName(name);
  if (found.hasNext()) found.next().setContent(text);
  else folder.createFile(name, text, MimeType.PLAIN_TEXT);
}

function syncPruneSnapshots_(now) {
  const folder = syncChildFolder_(syncFolder_(), SYNC_SNAPSHOT_FOLDER_NAME_);
  const cutoff = now - SYNC_SNAPSHOT_KEEP_DAYS_ * 24 * 60 * 60 * 1000;
  const files = folder.getFiles();
  while (files.hasNext()) {
    const file = files.next();
    if (file.getLastUpdated().getTime() < cutoff) file.setTrashed(true);
  }
}

// ---------------------------------------------------------------- 版と旧データ

function syncReadMeta_() {
  const raw = PropertiesService.getScriptProperties().getProperty(SYNC_META_PROP_);
  if (!raw) return { revision: 0, updatedAt: 0, updatedBy: '', fileId: '' };
  try {
    const meta = JSON.parse(raw);
    return {
      revision: Number(meta.revision) || 0,
      updatedAt: Number(meta.updatedAt) || 0,
      updatedBy: String(meta.updatedBy || ''),
      deviceId: String(meta.deviceId || ''),
      fileId: String(meta.fileId || ''),
      lastPrunedDay: String(meta.lastPrunedDay || '')
    };
  } catch (err) {
    return { revision: 0, updatedAt: 0, updatedBy: '', fileId: '' };
  }
}

function syncWriteMeta_(meta) {
  PropertiesService.getScriptProperties().setProperty(SYNC_META_PROP_, JSON.stringify(meta));
}

// ドライブにまだ同期データが無いとき、旧方式(プロパティ保存)のデータを引き継いで版1にする
function syncEnsureMigrated_() {
  const meta = syncReadMeta_();
  if (meta.fileId) return meta;
  const legacy = syncReadLegacyData_();
  if (!legacy) return meta;
  const text = JSON.stringify(legacy);
  syncWriteSnapshot_(text, 'legacy-properties');
  const next = {
    revision: 1,
    updatedAt: Number(legacy.updatedAt) || Date.now(),
    updatedBy: '旧GAS保存から引き継ぎ',
    deviceId: '',
    fileId: syncWriteData_(meta, text),
    lastPrunedDay: ''
  };
  syncWriteMeta_(next);
  return next;
}

function syncReadLegacyData_() {
  if (typeof loadStoredData_ === 'function') {
    const data = loadStoredData_();
    if (data) return data;
  }
  const key = (typeof PROP_KEY !== 'undefined' && PROP_KEY) || SYNC_LEGACY_PROP_KEY_;
  const raw = PropertiesService.getUserProperties().getProperty(key) || PropertiesService.getScriptProperties().getProperty(key);
  if (!raw) return null;
  const parsed = JSON.parse(raw);
  return parsed && !parsed.__chunked ? parsed : null;
}

// ---------------------------------------------------------------- 共通

function syncSecretOk_(given) {
  const fromProps = PropertiesService.getScriptProperties().getProperty('SYNC_SECRET');
  const expected = fromProps || (typeof SECRET !== 'undefined' ? SECRET : '');
  if (!expected) throw new Error('GASにSYNC_SECRETが設定されていません');
  return String(given || '') === String(expected);
}

function syncCallbackName_(value) {
  const name = String(value || '');
  return /^[A-Za-z_$][A-Za-z0-9_$.]{0,80}$/.test(name) ? name : '';
}

function syncOutput_(callback, obj) {
  const json = JSON.stringify(obj);
  if (callback) {
    return ContentService.createTextOutput(callback + '(' + json + ')').setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}

function syncErrorText_(err) {
  return String((err && err.message) || err || 'エラー');
}
