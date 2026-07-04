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
      'まずは一覧を眺めるだけでも十分です。始められるところからどうぞ。',
      '起きられただけで一歩目は済んでいます。次の一歩を一覧から選びましょう。',
      '今日の予定を一度だけ眺めておきましょう。それだけで午後が楽になります。'
    ],
    day: [
      '一度、肩の力を抜きましょう。次のひとつが見えれば大丈夫です。',
      'ここまで進めた分は残っています。焦らず、続きを整えましょう。',
      '午後の波に乗る前に、ひとつだけ整えておきましょう。',
      '進みが遅く感じても大丈夫です。順番が崩れていなければ十分です。'
    ],
    evening: [
      '今日進めた分を確認して、残りは無理なく区切りましょう。',
      'そろそろ締め方を考える時間ですね。ひとつずつ片づけましょう。',
      '夕方は切り替えの時間です。残りは「今日やる分」だけに絞りましょう。',
      '暗くなってきましたね。無理のない範囲で、あと少しだけ整えましょう。'
    ],
    night: [
      'そろそろ今日を閉じましょう。残った分は、明日の一覧が覚えていてくれます。',
      '明日の準備は小さくで十分です。あとは灯りを落として休みましょう。',
      '今日もよくやりました。眠る前の時間は、自分を休ませることに使ってください。',
      '睡眠も大事な段取りのうちです。安心して横になりましょう。'
    ]
  },
  spark: {
    name: 'ナディア',
    morning: [
      'おはよう！ 今日も最初のひとつ、さくっと決めちゃおう！',
      '朝の一手、いってみよう！ 小さく始めればちゃんと動くよ！',
      'おはよ！ 朝の元気なうちに一個だけ済ませちゃお！',
      '今日のスタートダッシュ、軽いやつからいこ！'
    ],
    day: [
      'ここで一回整理しよ！ 次にやること、ひとつだけ選べばOK！',
      'よし、午後もひとつずつ！ 進んだ分はちゃんと力になってるよ！',
      '午後もぼちぼちいこー！ 一個進めば上出来！',
      'ちょっと休憩したら、次の一個いってみよ！'
    ],
    evening: [
      '今日もよく動いたね！ あとは気持ちよく締めにいこう！',
      '残りを見て、今日のゴールを決めよう！ 無理しすぎは禁止！',
      '夕方だ！ 今日のラストスパート、軽くいこ！',
      'あと少しだけ進めて、夜はゆっくりしよ！'
    ],
    night: [
      'もう夜遅いよ！ 明日の準備だけして、おふとん直行！',
      '夜更かしはほどほどにね。明日も一緒にがんばろ！',
      '今日はここまで！ ちゃんと寝るのも大事なミッションだよ！',
      'おつかれさま！ 目を閉じたら明日はすぐ来るよ。おやすみ！'
    ]
  },
  butler: {
    name: 'ジーン',
    morning: [
      'おはようございます。本日も、焦らず順に整えていきましょう。',
      '今日の一覧もぼくが見守っています。まずはひとつ選びましょう。',
      'おはようございます。今日の一覧、ぼくが先に見ておきました。最初のひとつからどうぞ。',
      '朝は準備だけでも十分です。ぼくと一緒に順番を決めましょう。'
    ],
    day: [
      '少し立ち止まって、次のひとつを選びましょう。ぼくもお手伝いしますね。',
      'ここまでの進み具合を見ておきましょう。順番を整えれば大丈夫です。',
      '午後の分は、ぼくが順番を覚えておきますね。目の前のひとつだけ見てください。',
      '少し詰まってきたら、一度深呼吸を。ぼくはここにいますから。'
    ],
    evening: [
      '今日の分をそろそろまとめましょう。残りは明日へ渡しても大丈夫ですよ。',
      '一日の締めどきですね。終えた分を確認して、ゆっくり休みましょう。',
      '日が暮れてきましたね。今日の締めくくり、一緒に見ましょう。',
      '夕方からは無理をしない時間です。残りは選んで進めましょう。'
    ],
    night: [
      'そろそろ休む時間です。明日の準備はぼくも一緒に確認しますから、安心してください。',
      '夜も更けてきました。今日はもう店じまいにして、ゆっくり休んでください。',
      '明日に備えて、灯りを少し落としましょう。今日もおつかれさまでした。',
      '眠る準備も大切な用事のひとつです。ぼくが見ていますから、どうぞおやすみなさい。'
    ]
  },
  yushka: {
    name: 'ユシュカ',
    morning: [
      '朝だな。まず一つ決めろ。動き出せば、あとはどうにでもなる。',
      '一覧を開いて最初の一手を選べ。面倒なところほど先に押さえろ。',
      '朝のうちに面倒な一件を潰せ。あとが全部軽くなる。',
      '目が覚めたなら上等だ。一覧を開け、話はそれからだ。'
    ],
    day: [
      '手順を半分に。思考を止めるな、少しずつ積み上げるんだ。',
      'なんでだよ…ってなる前に一度整理しろ。次の一つだけ見ればいい。',
      '昼を過ぎたら欲張るな。確実に終わる一件だけ選べ。',
      '進んでないように見えても、止まってなければ前進だ。'
    ],
    evening: [
      '片づけた分はちゃんと積み上がってる。胸を張れ。',
      '今日はどこまでやるか決めろ。終わりを作るのも仕事のうちだろう。',
      '夕方だ。今日中に終わらせる分だけ残して、あとは切り捨てろ。',
      '暗くなる前に一件片づけろ。夜の自分は当てにするな。'
    ],
    night: [
      'もう夜遅い。今日は店じまいだ。続きは明日の自分に任せろ。',
      '夜更かしは明日への借金だ。利子は高いぞ。寝ろ。',
      '明日の準備は枕元に置く程度でいい。あとは横になれ。',
      'よく動いた日ほど、よく眠るのが締めの仕事だ。おやすみ。'
    ]
  },
  adjutant: {
    name: 'ナジーン',
    morning: [
      'おはよう。今日を乗り切るには君の助力が不可欠だ。まず一手、頼みたい。',
      '朝のうちに全体を見ておこう。君なら、進む順番を決められる。',
      'おはよう。今日の全体図は私が把握しておく。君は最初の一手に集中してくれ。',
      '朝の静かな時間は貴重だ。君の一番重い仕事に充てるといい。'
    ],
    day: [
      '一度盤面を見直そう。君が次の一手を選べば、状況はまた動き出す。',
      '抱えすぎてはいないか。君の力を使う場所を、ひとつに絞ろう。',
      '午後は消耗が出る時間だ。完璧を求めず、確実な一件を積んでくれ。',
      '進捗は私が見ている。君は目の前のことだけでいい。'
    ],
    evening: [
      '今日の戦果を確認しよう。君が進めた分は、確かに残っている。',
      'そろそろ区切りを作ろう。残りを明日へ渡す判断も、君の役目だ。',
      '日が沈む頃だ。今日の残りは、君が無理なく持てる分だけにしよう。',
      '夕方の疲れは判断を鈍らせる。大きな決断は明日に回すといい。'
    ],
    night: [
      'もう夜も遅い。明日の君のために、今夜は早めに休んでくれ。',
      '寝る前の支度は簡単でいい。明日の分が少し整えば、それで十分動ける。',
      '今日の分は十分積み上がった。あとは眠るのが君の最善手だ。',
      '夜更かしをユシュカ様は止めないだろうが、私は止める。おやすみ、また明日。'
    ]
  }
};

// GASエディタから手動テストするための公開ラッパー。
// エラーを捕捉しないので、失敗理由が実行ログへそのまま表示される。
function runNtfyTest() {
  const responseText = ntfyPublish_('ぺいとり！通知テスト', 'GASからntfyへのテスト通知です。');
  console.log('ntfy response: ' + responseText);
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
    if (ntfyWasSent_(properties, dateKey, sendKey)) return;

    const customMessage = String(slot.message || '').trim();
    if (customMessage) {
      ntfyPublish_(String(slot.title || '').trim() || 'ぺいとり！通知', customMessage);
    } else {
      const character = ntfyPickCharacter_(data.coachCast || {});
      const band = ntfyTimeBandFromSlot_(slot);
      ntfyPublish_(character.name + 'からの一言', ntfyPick_(character[band] || character.day));
    }
    ntfyMarkSent_(properties, dateKey, sendKey);
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
  const server = String(properties.getProperty('NTFY_SERVER') || 'https://ntfy.sh').trim().replace(/\/+$/, '');
  const topic = String(properties.getProperty('NTFY_TOPIC') || '').trim();
  const token = String(properties.getProperty('NTFY_TOKEN') || '').trim();
  const clickUrl = String(properties.getProperty('NTFY_CLICK_URL') || '').trim();
  if (!topic) throw new Error('スクリプトプロパティ NTFY_TOPIC が未設定です');

  const headers = {
    Title: '=?UTF-8?B?' + Utilities.base64Encode(title, Utilities.Charset.UTF_8) + '?=',
    Priority: '3',
    Tags: 'bell'
  };
  if (token) headers.Authorization = 'Basic ' + Utilities.base64Encode(':' + token);
  if (clickUrl) headers.Click = clickUrl;

  const endpoint = server + '/' + encodeURIComponent(topic);
  const response = UrlFetchApp.fetch(endpoint, {
    method: 'post',
    contentType: 'text/plain; charset=utf-8',
    payload: String(message || ''),
    muteHttpExceptions: true,
    headers: headers
  });
  const status = response.getResponseCode();
  if (status < 200 || status >= 300) {
    throw new Error('ntfy HTTP ' + status + ': ' + response.getContentText().slice(0, 160));
  }
  return response.getContentText();
}
function ntfyStoredData_() {
  // 分割保存モジュール(gas-chunked-storage.gs)があればそちら経由で読む
  if (typeof loadStoredData_ === 'function') {
    try {
      return loadStoredData_() || {};
    } catch (err) {
      throw new Error('同期データを読み込めません: ' + err.message);
    }
  }
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
  const incoming = Array.isArray(source.slots) && source.slots.length ? source.slots : defaults;
  const seen = {};
  const slots = incoming.map(function(item, index) {
    const sourceSlot = item && typeof item === 'object' ? item : {};
    const id = String(sourceSlot.id || '').trim() || ('slot_' + index);
    if (seen[id]) return null;
    seen[id] = true;
    const time = /^([01]\d|2[0-3]):[0-5]\d$/.test(String(sourceSlot.time || '')) ? String(sourceSlot.time) : '09:00';
    return {
      id: id,
      enabled: sourceSlot.enabled !== false,
      time: time,
      message: String(sourceSlot.message || '').slice(0, 1024),
      title: String(sourceSlot.title || '').slice(0, 250)
    };
  }).filter(Boolean);
  return {
    enabled: source.enabled === true,
    weekdaysOnly: source.weekdaysOnly !== false,
    slots: slots
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
  return hour < 5 ? 'night' : hour < 11 ? 'morning' : hour < 17 ? 'day' : hour < 21 ? 'evening' : 'night';
}

function ntfyTimeBandFromSlot_(slot) {
  if (slot.id === 'morning') return 'morning';
  if (slot.id === 'evening') return 'evening';
  if (slot.id === 'night') return 'night';
  const hour = Number(String(slot.time || '09:00').split(':')[0]);
  return hour < 5 ? 'night' : hour < 11 ? 'morning' : hour < 17 ? 'day' : hour < 21 ? 'evening' : 'night';
}

function ntfyReadSentKeys_(properties, dateKey) {
  const raw = properties.getProperty('NTFY_SENT_SLOT_KEYS') || '[]';
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(function(key) {
      return String(key).indexOf(dateKey + '|') === 0;
    }) : [];
  } catch (_) {
    const legacy = properties.getProperty('NTFY_LAST_SENT_SLOT');
    return legacy && String(legacy).indexOf(dateKey + '|') === 0 ? [legacy] : [];
  }
}

function ntfyWasSent_(properties, dateKey, sendKey) {
  return ntfyReadSentKeys_(properties, dateKey).indexOf(sendKey) >= 0;
}

function ntfyMarkSent_(properties, dateKey, sendKey) {
  const keys = ntfyReadSentKeys_(properties, dateKey);
  if (keys.indexOf(sendKey) < 0) keys.push(sendKey);
  properties.setProperty('NTFY_SENT_SLOT_KEYS', JSON.stringify(keys.slice(-80)));
  properties.setProperty('NTFY_LAST_SENT_SLOT', sendKey);
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
