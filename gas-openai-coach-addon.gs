// ぺいとり！ OpenAI AI一言アドオン
//
// 同期バックエンドと同じApps Scriptプロジェクトに追加する。
// Script properties:
//   OPENAI_API_KEY       必須。OpenAI APIキー
//   OPENAI_COACH_MODEL   任意。既定は gpt-5-mini
//
// 既存 doGet(e) のSECRET検証後に以下を追加する。
//   if (p.action === 'coachLine') return openAiCoachLine_(callback, p.payload || '{}');
//
// APIキーはブラウザへ渡さず、このGASのScript propertiesにのみ保存する。

const OPENAI_COACH_DEFAULT_MODEL_ = 'gpt-5-mini';
const OPENAI_COACH_MAX_OUTPUT_TOKENS_ = 100;

function openAiCoachLine_(callback, payloadText) {
  const key = String(PropertiesService.getScriptProperties().getProperty('OPENAI_API_KEY') || '').trim();
  if (!key) return openAiCoachJsonp_(callback, { ok: false, error: 'missing OPENAI_API_KEY' });

  let ctx;
  try {
    ctx = JSON.parse(payloadText || '{}') || {};
  } catch (err) {
    return openAiCoachJsonp_(callback, { ok: false, error: 'invalid coach payload' });
  }

  const properties = PropertiesService.getScriptProperties();
  const model = String(properties.getProperty('OPENAI_COACH_MODEL') || OPENAI_COACH_DEFAULT_MODEL_).trim();
  const character = ctx.character || {};
  const weather = ctx.weather
    ? [ctx.weather.label, String(ctx.weather.temperature || '') + String(ctx.weather.temperatureUnit || ''), '降水' + String(ctx.weather.precipitation || '') + String(ctx.weather.precipitationUnit || '')].filter(Boolean).join('、')
    : '天気情報なし';
  const triggerLabel = ctx.trigger === 'endday' ? '今日はおしまい時' : '起動時';
  const modeLabel = ctx.mode === 'daily' ? 'でいとり' : ctx.mode === 'work' ? 'わーとり' : 'ぺいとり';
  const voiceGuide = [
    '話者: ' + String(character.name || 'アプリキャラクター'),
    character.persona ? '人物像: ' + String(character.persona) : '',
    Array.isArray(character.rules) && character.rules.length ? '口調ルール: ' + character.rules.join(' / ') : '',
    Array.isArray(character.avoid) && character.avoid.length ? '避ける表現: ' + character.avoid.join(' / ') : '',
    Array.isArray(character.examples) && character.examples.length ? '参考例: ' + character.examples.join(' | ') : ''
  ].filter(Boolean).join('\n');
  const lateEndNote = ctx.isLateEnd
    ? '20時を過ぎた遅いおしまいです。具体的な時刻は言わず、遅くまで残ったことを労い、早く休む方向に短く寄り添ってください。'
    : '';
  const instructions = [
    'あなたはタスク整理アプリの小さなキャラクターです。',
    '日本語で、ユーザーを軽く励ます短い一言だけを返してください。80字以内。',
    '医療判断、診療助言、患者名、病棟名、タスク名には触れないでください。',
    '話者本人の一人称・語尾・温度感を最優先し、参考例の丸写しは避けてください。',
    '不自然な比喩や硬い言い回しを避け、普通に人へ声をかける口調にしてください。'
  ].join('\n');
  const input = [
    voiceGuide,
    '場面: ' + triggerLabel,
    'モード: ' + modeLabel,
    '場所: ' + String(ctx.locationLabel || '職場'),
    '季節: ' + String(ctx.season || ''),
    '時間帯: ' + String(ctx.timeBand || ''),
    'おしまい時刻区分: ' + String(ctx.lateEndLabel || (ctx.isLateEnd ? '20時過ぎ' : '')),
    lateEndNote,
    '天気: ' + weather
  ].filter(Boolean).join('\n');

  const response = UrlFetchApp.fetch('https://api.openai.com/v1/responses', {
    method: 'post',
    contentType: 'application/json',
    headers: { Authorization: 'Bearer ' + key },
    muteHttpExceptions: true,
    payload: JSON.stringify({
      model: model,
      instructions: instructions,
      input: input,
      max_output_tokens: OPENAI_COACH_MAX_OUTPUT_TOKENS_,
      store: false
    })
  });
  const status = response.getResponseCode();
  let data;
  try {
    data = JSON.parse(response.getContentText() || '{}');
  } catch (err) {
    return openAiCoachJsonp_(callback, { ok: false, error: 'OpenAI response was not JSON' });
  }
  if (status < 200 || status >= 300) {
    const message = String(data.error && data.error.message || response.getContentText() || 'OpenAI request failed').slice(0, 200);
    return openAiCoachJsonp_(callback, { ok: false, error: 'OpenAI HTTP ' + status + ': ' + message });
  }
  const text = openAiCoachOutputText_(data).replace(/[\r\n]+/g, ' ').trim().slice(0, 120);
  return openAiCoachJsonp_(callback, text ? { ok: true, text: text } : { ok: false, error: 'OpenAI returned no text' });
}

function openAiCoachOutputText_(data) {
  if (data && data.output_text) return String(data.output_text);
  const output = Array.isArray(data && data.output) ? data.output : [];
  return output.map(function(item) {
    const content = Array.isArray(item && item.content) ? item.content : [];
    return content.filter(function(part) { return part && part.type === 'output_text'; }).map(function(part) { return part.text || ''; }).join(' ');
  }).join(' ');
}

function openAiCoachJsonp_(callback, obj) {
  const safeCallback = /^[A-Za-z_$][\w$]*$/.test(String(callback || '')) ? callback : 'callback';
  return ContentService
    .createTextOutput(safeCallback + '(' + JSON.stringify(obj) + ')')
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}
