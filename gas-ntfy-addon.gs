// ぺいとり！ / でいとり！ ntfy通知アドオン
//
// スクリプトプロパティ:
//   NTFY_TOPIC     必須。推測されにくい専用トピック名
//   NTFY_SERVER    任意。未設定なら https://ntfy.sh
//   NTFY_TOKEN     任意。認証を使う場合のアクセストークン
//   NTFY_CLICK_URL 任意。通知タップ時に開くアプリURL
//
// 既存doGet(e)のSECRET確認後に次を追加:
//   if (p.action === 'ntfyTest') return ntfyTest_(callback);
//
// 初回のみApps Scriptエディタから installNtfyTrigger() を実行してください。

const NTFY_LINES_ = {
  mentor: {
    name: 'エスト',
    morning: [
      'おはようございます。今日の分を、ひとつずつ整えていきましょう。',
      'まずは一覧を眺めるだけでも十分です。始められるところからどうぞ。'
    ],
    day: [
      '一度、肩の力を抜きましょう。次のひとつが見えれば大丈夫です。',
      'ここまで進めた分は残っています。焦らず、続きを整えましょう。'
    ],
    evening: [
      '今日進めた分を確認して、残りは無理なく区切りましょう。',
      'そろそろ締め方を考える時間ですね。ひとつずつ片づけましょう。'
    ]
  },
  spark: {
    name: 'ナディア',
    morning: [
      'おはよう！ 今日も最初のひとつ、さくっと決めちゃおう！',
      '朝の一手、いってみよう！ 小さく始めればちゃんと動くよ！'
    ],
    day: [
      'ここで一回整理しよ！ 次にやること、ひとつだけ選べばOK！',
      'よし、午後もひとつずつ！ 進んだ分はちゃんと力になってるよ！'
    ],
    evening: [
      '今日もよく動いたね！ あとは気持ちよく締めにいこう！',
      '残りを見て、今日のゴールを決めよう！ 無理しすぎは禁止！'
    ]
  },
  butler: {
    name: 'ジーン',
    morning: [
      'おはようございます。本日も、焦らず順に整えていきましょう。',
      '今日の一覧もぼくが見守っています。まずはひとつ選びましょう。'
    ],
    day: [
      '少し立ち止まって、次のひとつを選びましょう。ぼくもお手伝いしますね。',
      'ここまでの進み具合を見ておきましょう。順番を整えれば大丈夫です。'
    ],
    evening: [
      '今日の分をそろそろまとめましょう。残りは明日へ渡しても大丈夫ですよ。',
      '一日の締めどきですね。終えた分を確認して、ゆっくり休みましょう。'
    ]
  },
  yushka: {
    name: 'ユシュカ',
    morning: [
      '朝だな。まず一つ決めろ。動き出せば、あとはどうにでもなる。',
      '一覧を開いて最初の一手を選べ。面倒なところほど先に押さえろ。'
    ],
    day: [
      '手順を半分に。思考を止めるな、少しずつ積み上げるんだ。',
      'なんでだよ…ってなる前に一度整理しろ。次の一つだけ見ればいい。'
    ],
    evening: [
      '片づけた分はちゃんと積み上がってる。胸を張れ。',
      '今日はどこまでやるか決めろ。終わりを作るのも仕事のうちだろう。'
    ]
  },
  adjutant: {
    name: 'ナジーン',
    morning: [
      'おはよう。今日を乗り切るには君の助力が不可欠だ。まず一手、頼みたい。',
      '朝のうちに全体を見ておこう。君なら、進む順番を決められる。'
    ],
    day: [
      '一度盤面を見直そう。君が次の一手を選べば、状況はまた動き出す。',
      '抱えすぎてはいないか。君の力を使う場所を、ひとつに絞ろう。'
    ],
    evening: [
      '今日の戦果を確認しよう。君が進めた分は、確かに残っている。',
      'そろそろ区切りを作ろう。残りを明日へ渡す判断も、君の役目だ。'
    ]
  }
};

// GASエディタから手動テストするための公開ラッパー。
function runNtfyTest() {
  return ntfyTest_('');
}

function ntfyTest_(callback) {
  try {
    const data = ntfyStoredData_();
    const character = ntfyPickCharacter_(data.coachCast || {});
    const band = ntfyTimeBand_(new Date());
    const message = ntfyPick_(character[band] || character.day);
    ntfyPublish_(character.name + 'からの一言', message);
    return ntfyJsonp_(callback, { ok: true, sent: true, character: character.name });
  } catch (err) {
    return ntfyJsonp_(callback, { ok: false, error: String(err && err.message || err) });
  }
}

function ntfyScheduledTick() {
  const data = ntfyStoredData_();
  const settings = ntfyNormalizeSettings_(data.ntfySettings);
  if (!settings.enabled) return;

  const now = new Date();
  const timezone = Session.getScriptTimeZone() || 'Asia/Tokyo';
  const weekday = Number(Utilities.formatDate(now, timezone, 'u'));
  if (settings.weekdaysOnly && weekday >= 6) return;

  const currentMinutes = Number(Utilities.formatDate(now, timezone, 'H')) * 60
    + Number(Utilities.formatDate(now, timezone, 'm'));
  const dateKey = Utilities.formatDate(now, timezone, 'yyyy-MM-dd');
  const properties = PropertiesService.getScriptProperties();

  settings.slots.filter(function(slot) { return slot.enabled; }).forEach(function(slot) {
    const parts = slot.time.split(':').map(Number);
    const slotMinutes = parts[0] * 60 + parts[1];
    if (Math.abs(currentMinutes - slotMinutes) > 6) return;

    const sendKey = dateKey + '|' + slot.id + '|' + slot.time;
    if (properties.getProperty('NTFY_LAST_SENT_SLOT') === sendKey) return;

    const character = ntfyPickCharacter_(data.coachCast || {});
    const band = slot.id === 'morning' ? 'morning' : slot.id === 'evening' ? 'evening' : 'day';
    ntfyPublish_(character.name + 'からの一言', ntfyPick_(character[band] || character.day));
    properties.setProperty('NTFY_LAST_SENT_SLOT', sendKey);
  });
}

function installNtfyTrigger() {
  ScriptApp.getProjectTriggers().forEach(function(trigger) {
    if (trigger.getHandlerFunction() === 'ntfyScheduledTick') ScriptApp.deleteTrigger(trigger);
  });
  ScriptApp.newTrigger('ntfyScheduledTick').timeBased().everyMinutes(5).create();
}

function ntfyPublish_(title, message) {
  const properties = PropertiesService.getScriptProperties();
  const server = (properties.getProperty('NTFY_SERVER') || 'https://ntfy.sh').replace(/\/+$/, '');
  const topic = String(properties.getProperty('NTFY_TOPIC') || '').trim();
  const token = String(properties.getProperty('NTFY_TOKEN') || '').trim();
  const clickUrl = String(properties.getProperty('NTFY_CLICK_URL') || '').trim();
  if (!topic) throw new Error('スクリプトプロパティ NTFY_TOPIC が未設定です');

  const payload = {
    topic: topic,
    title: title,
    message: message,
    priority: 3,
    tags: ['bell']
  };
  if (clickUrl) payload.click = clickUrl;

  const options = {
    method: 'post',
    contentType: 'application/json; charset=utf-8',
    payload: JSON.stringify(payload),
    muteHttpExceptions: true,
    headers: token ? { Authorization: 'Bearer ' + token } : {}
  };
  const response = UrlFetchApp.fetch(server, options);
  const status = response.getResponseCode();
  if (status < 200 || status >= 300) {
    throw new Error('ntfy HTTP ' + status + ': ' + response.getContentText().slice(0, 160));
  }
}

function ntfyStoredData_() {
  const raw = PropertiesService.getUserProperties().getProperty(PROP_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw) || {};
  } catch (err) {
    throw new Error('同期データを読み込めません: ' + err.message);
  }
}

function ntfyNormalizeSettings_(value) {
  const defaults = [
    { id: 'morning', enabled: true, time: '09:00' },
    { id: 'day', enabled: true, time: '13:00' },
    { id: 'evening', enabled: true, time: '18:00' }
  ];
  const source = value && typeof value === 'object' ? value : {};
  const incoming = Array.isArray(source.slots) ? source.slots : [];
  return {
    enabled: source.enabled === true,
    weekdaysOnly: source.weekdaysOnly !== false,
    slots: defaults.map(function(def) {
      const item = incoming.find(function(slot) { return slot && slot.id === def.id; }) || {};
      const time = /^([01]\d|2[0-3]):[0-5]\d$/.test(String(item.time || '')) ? String(item.time) : def.time;
      return { id: def.id, enabled: item.enabled !== false, time: time };
    })
  };
}

function ntfyPickCharacter_(coachCast) {
  const enabled = Object.keys(NTFY_LINES_).filter(function(id) { return coachCast[id] !== false; });
  const pool = enabled.length ? enabled : Object.keys(NTFY_LINES_);
  return NTFY_LINES_[pool[Math.floor(Math.random() * pool.length)]];
}

function ntfyTimeBand_(date) {
  const timezone = Session.getScriptTimeZone() || 'Asia/Tokyo';
  const hour = Number(Utilities.formatDate(date, timezone, 'H'));
  return hour < 11 ? 'morning' : hour < 17 ? 'day' : 'evening';
}

function ntfyPick_(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function ntfyJsonp_(callback, obj) {
  const safeCallback = /^[A-Za-z_$][\w$]*$/.test(String(callback || '')) ? callback : 'callback';
  return ContentService
    .createTextOutput(safeCallback + '(' + JSON.stringify(obj) + ')')
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}
