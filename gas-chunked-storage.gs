// ぺいとり！ 分割保存モジュール (gas-chunked-storage.gs)
//
// GASの「1プロパティ9KB」制限を回避するため、同期データを
// 複数プロパティ(チャンク)に分割して保存します。
//
// ▼ 導入手順
//   1. このファイルを同期バックエンドと同じApps Scriptプロジェクトに追加
//   2. 既存コードに loadStoredData_ / saveStoredData_ が既にある場合は
//      【古い方を削除】(同名関数が2つあるとエラーになります)
//      保存・読込をdoGet/doPost内に直書きしている場合は、その部分を
//      loadStoredData_() / saveStoredData_(incoming) の呼び出しに置き換え
//   3. デプロイ > 新バージョン で公開し直す
//   4. アプリから一度「GASに保存」すると自動で分割形式に移行されます
//      (旧形式の読み込みにも対応しているので、移行前のpullも壊れません)
//
// ▼ 保存形式
//   PROP_KEY           : {"__chunked": チャンク数, "updatedAt": ...} のマーカー
//   PROP_KEY + "__c0…" : JSON文字列を約2500文字ずつに割った断片
//   データが縮んだ時は余ったチャンクを自動削除します(残骸が溜まらない)

const SYNC_PROP_KEY_ = (typeof PROP_KEY !== 'undefined' && PROP_KEY) || 'patient_triage_data';
const SYNC_CHUNK_CHARS_ = 2500; // 日本語(3バイト/字)でも1チャンク約7.5KB < 9KB
const SYNC_MARKER_FIELD_ = '__chunked';

function syncStore_() {
  return PropertiesService.getUserProperties();
}

// 読み込み: 分割形式でも旧1プロパティ形式でも読める
function loadStoredData_() {
  const store = syncStore_();
  const raw = store.getProperty(SYNC_PROP_KEY_);
  if (!raw) return null;
  let head;
  try {
    head = JSON.parse(raw);
  } catch (err) {
    throw new Error('同期データが壊れています: ' + err.message);
  }
  if (head && typeof head === 'object' && head[SYNC_MARKER_FIELD_] > 0) {
    const count = head[SYNC_MARKER_FIELD_];
    let text = '';
    for (let i = 0; i < count; i++) {
      const part = store.getProperty(SYNC_PROP_KEY_ + '__c' + i);
      if (part === null) throw new Error('チャンク欠落: ' + i + '/' + count);
      text += part;
    }
    return JSON.parse(text);
  }
  return head; // 旧形式(丸ごと1プロパティ)
}

// 保存: 分割して書き込み、旧チャンクの残骸を掃除する
function saveStoredData_(data) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const store = syncStore_();
    const text = JSON.stringify(data || {});
    const props = {};
    let count = 0;
    for (let i = 0; i < text.length; i += SYNC_CHUNK_CHARS_) {
      props[SYNC_PROP_KEY_ + '__c' + count] = text.slice(i, i + SYNC_CHUNK_CHARS_);
      count++;
    }
    const marker = {};
    marker[SYNC_MARKER_FIELD_] = count;
    marker.updatedAt = (data && data.updatedAt) || Date.now();
    props[SYNC_PROP_KEY_] = JSON.stringify(marker);
    store.setProperties(props);
    // データが縮んだ時に余った古いチャンクを削除
    for (let i = count; ; i++) {
      const key = SYNC_PROP_KEY_ + '__c' + i;
      if (store.getProperty(key) === null) break;
      store.deleteProperty(key);
    }
  } finally {
    lock.releaseLock();
  }
}
