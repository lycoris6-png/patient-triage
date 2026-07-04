// ぺいとり！ GAS容量診断ツール (gas-quota-inspector.gs)
//
// 使い方:
//   1. このファイルを同期バックエンドと同じApps Scriptプロジェクトに追加
//   2. エディタ上部の関数選択で inspectQuota を選んで実行
//   3. 実行ログ(表示 > ログ / Ctrl+Enter)に容量の内訳が出ます
//
// 削除したいプロパティが見つかったら:
//   CLEANUP_PREFIX にキーの先頭文字列を入れて cleanupByPrefix を実行
//   (CLEANUP_DRY_RUN = true のうちは一覧表示のみ。false にすると本当に消えます)

const CLEANUP_PREFIX = '';        // 例: 'backup-' や 'PT_DATA_chunk_'
const CLEANUP_DRY_RUN = true;     // false にすると実際に削除
const CLEANUP_STORE = 'user';     // 'script' / 'user' / 'document'

function inspectQuota() {
  const stores = [
    ['ScriptProperties', PropertiesService.getScriptProperties()],
    ['UserProperties', PropertiesService.getUserProperties()],
    ['DocumentProperties', (function () {
      try { return PropertiesService.getDocumentProperties(); } catch (_) { return null; }
    })()]
  ];
  const LIMIT_TOTAL = 500 * 1024; // ストア全体 500KB
  const LIMIT_VALUE = 9 * 1024;   // 1プロパティ 9KB

  stores.forEach(function (entry) {
    const name = entry[0];
    const store = entry[1];
    if (!store) { console.log('== ' + name + ': このプロジェクトでは使えません =='); return; }
    const all = store.getProperties();
    const keys = Object.keys(all);
    if (!keys.length) { console.log('== ' + name + ': 空 =='); return; }

    const rows = keys.map(function (key) {
      const bytes = byteLen_(key) + byteLen_(all[key]);
      return { key: key, bytes: bytes, valueBytes: byteLen_(all[key]) };
    }).sort(function (a, b) { return b.bytes - a.bytes; });

    const total = rows.reduce(function (sum, row) { return sum + row.bytes; }, 0);
    console.log('== ' + name + ': ' + keys.length + '件 / 合計 ' + fmt_(total)
      + ' (全体上限500KBの' + Math.round(total / LIMIT_TOTAL * 100) + '%) ==');

    rows.forEach(function (row) {
      const flags = [];
      if (row.valueBytes > LIMIT_VALUE) flags.push('★9KB超過(このキーは再保存不可)');
      if (/\d{4}-\d{2}-\d{2}/.test(row.key)) flags.push('日付入りキー(バックアップ系?)');
      console.log('  ' + fmt_(row.bytes).padStart(9) + '  ' + row.key + (flags.length ? '  <- ' + flags.join(' / ') : ''));
    });

    // 接頭辞ごとの小計(番号・日付を丸めてグループ化)
    const groups = {};
    rows.forEach(function (row) {
      const groupKey = row.key.replace(/\d{4}-\d{2}-\d{2}/g, '<日付>').replace(/\d+$/, '<n>');
      groups[groupKey] = groups[groupKey] || { bytes: 0, count: 0 };
      groups[groupKey].bytes += row.bytes;
      groups[groupKey].count += 1;
    });
    const grouped = Object.keys(groups).filter(function (k) { return groups[k].count > 1; });
    if (grouped.length) {
      console.log('  -- 系列小計 --');
      grouped.sort(function (a, b) { return groups[b].bytes - groups[a].bytes; }).forEach(function (k) {
        console.log('  ' + fmt_(groups[k].bytes).padStart(9) + '  ' + k + ' ×' + groups[k].count + '件');
      });
    }
  });
}

function cleanupByPrefix() {
  if (!CLEANUP_PREFIX) { console.log('CLEANUP_PREFIX が空です。ファイル冒頭で設定してください。'); return; }
  const store = CLEANUP_STORE === 'script' ? PropertiesService.getScriptProperties()
    : CLEANUP_STORE === 'document' ? PropertiesService.getDocumentProperties()
    : PropertiesService.getUserProperties();
  const all = store.getProperties();
  const targets = Object.keys(all).filter(function (key) { return key.indexOf(CLEANUP_PREFIX) === 0; });
  if (!targets.length) { console.log('接頭辞 "' + CLEANUP_PREFIX + '" に一致するキーはありません(' + CLEANUP_STORE + ')'); return; }
  const total = targets.reduce(function (sum, key) { return sum + byteLen_(key) + byteLen_(all[key]); }, 0);
  console.log((CLEANUP_DRY_RUN ? '[DRY RUN] 削除対象: ' : '削除実行: ') + targets.length + '件 / ' + fmt_(total));
  targets.forEach(function (key) {
    console.log('  ' + key);
    if (!CLEANUP_DRY_RUN) store.deleteProperty(key);
  });
  if (CLEANUP_DRY_RUN) console.log('問題なければ CLEANUP_DRY_RUN = false にして再実行してください。');
}

function byteLen_(value) {
  return Utilities.newBlob(String(value == null ? '' : value)).getBytes().length;
}

function fmt_(bytes) {
  return bytes >= 1024 ? (bytes / 1024).toFixed(1) + 'KB' : bytes + 'B';
}
