// ぺいとり！ OpenAI AI一言アドオン
//
// 同期バックエンドと同じApps Scriptプロジェクトに追加する。
// Script properties:
//   OPENAI_API_KEY       必須。OpenAI APIキー
//   OPENAI_COACH_MODEL   任意。既定は gpt-5-mini
//
// 既存 doGet(e) のSECRET検証後に以下を追加する。
//   if (p.action === 'coachLine') return openAiCoachLine_(callback, p.payload || '{}');
// Android時報も同じactionを使う。payload.trigger === 'hourly' のときは
// 複数候補を一度に生成して { ok, lines } を返す。
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

  if (ctx.trigger === 'hourly') return openAiHourlyLines_(callback, ctx, key);

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

function openAiHourlyLines_(callback, ctx, key) {
  const properties = PropertiesService.getScriptProperties();
  const model = String(properties.getProperty('OPENAI_HOURLY_MODEL') || properties.getProperty('OPENAI_COACH_MODEL') || OPENAI_COACH_DEFAULT_MODEL_).trim();
  const candidateCount = Math.max(1, Math.min(10, Number(ctx.candidateCount) || 3));
  const character = ctx.character && typeof ctx.character === 'object' ? ctx.character : {};
  const rules = Array.isArray(character.rules) ? character.rules.map(String).slice(0, 12) : [];
  const avoid = Array.isArray(character.avoid) ? character.avoid.map(String).slice(0, 20) : [];
  const examples = Array.isArray(character.examples) ? character.examples.map(String).slice(0, 18) : [];
  const recentLines = Array.isArray(ctx.recentLines) ? ctx.recentLines.map(String).slice(-12) : [];
  const minLength = Math.max(10, Math.min(40, Number(ctx.output && ctx.output.minLength) || 15));
  const maxLength = Math.max(30, Math.min(80, Number(ctx.output && ctx.output.maxLength) || 55));
  const instructions = [
    'あなたは日本語キャラクター台詞の監修者です。時報通知用の短い台詞を作成してください。',
    '人物像の説明よりも、参考台詞に現れている語彙、語尾、テンポ、相手との距離感を最優先してください。',
    '参考台詞にない性別表現、役職口調、過剰な敬語、女性語尾、外国語を勝手に足さないでください。',
    '一般的なAIアシスタントの丁寧語へ均さず、話者本人の口調を保ってください。',
    '患者情報、医療情報、タスク名、タスク件数を推測したり出力したりしないでください。',
    '医学的助言、説教、診断、治療の提案は禁止です。',
    '指定されたJSONスキーマに従い、説明、番号、Markdown、コードフェンスは付けないでください。'
  ].join('\n');
  const input = [
    '話者: ' + String(character.name || 'アプリキャラクター'),
    '一人称: ' + String(character.firstPerson || ''),
    'ユーザーの呼び方: ' + String(character.userCallName || ''),
    '人物像: ' + String(character.persona || ''),
    '口調ルール:\n' + (rules.length ? rules.map(function(rule) { return '・' + rule; }).join('\n') : 'なし'),
    '避ける表現:\n' + (avoid.length ? avoid.map(function(rule) { return '・' + rule; }).join('\n') : 'なし'),
    '参考台詞:\n' + (examples.length ? examples.map(function(line) { return '・' + line; }).join('\n') : 'なし'),
    '最近生成した台詞（重複回避用）:\n' + (recentLines.length ? recentLines.map(function(line) { return '・' + line; }).join('\n') : 'なし'),
    '時間帯: ' + String(ctx.timeBand || ''),
    '現在の時刻帯: ' + String(Number(ctx.hour) || 0) + '時台',
    '目的: ' + String(ctx.purpose || '時報として区切りを知らせる'),
    '条件: 日本語のみ、各' + minLength + '～' + maxLength + '文字、互いに異なる' + candidateCount + '件。具体的な時刻を無理に読み上げる必要はありません。'
  ].join('\n\n');

  const response = UrlFetchApp.fetch('https://api.openai.com/v1/responses', {
    method: 'post',
    contentType: 'application/json',
    headers: { Authorization: 'Bearer ' + key },
    muteHttpExceptions: true,
    payload: JSON.stringify({
      model: model,
      instructions: instructions,
      input: input,
      reasoning: { effort: 'minimal' },
      text: {
        format: {
          type: 'json_schema',
          name: 'hourly_notification_lines',
          strict: true,
          schema: {
            type: 'object',
            properties: {
              lines: {
                type: 'array',
                items: { type: 'string' },
                minItems: candidateCount,
                maxItems: candidateCount
              }
            },
            required: ['lines'],
            additionalProperties: false
          }
        }
      },
      max_output_tokens: Math.max(900, candidateCount * 220),
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
  const outputText = openAiCoachOutputText_(data);
  const lines = openAiHourlyParseLines_(outputText).filter(function(line, index, all) {
    return openAiHourlyLineIsSafe_(line, minLength, maxLength) && all.indexOf(line) === index && recentLines.indexOf(line) < 0;
  }).slice(0, candidateCount);
  return openAiCoachJsonp_(callback, lines.length ? { ok: true, lines: lines } : { ok: false, error: 'OpenAI returned no valid hourly lines' });
}

function openAiHourlyParseLines_(text) {
  const cleaned = String(text || '').trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');
  if (!cleaned) return [];
  try {
    const parsed = JSON.parse(cleaned);
    const values = Array.isArray(parsed) ? parsed : Array.isArray(parsed && parsed.lines) ? parsed.lines : [];
    if (values.length) return values.map(openAiHourlyNormalizeLine_).filter(Boolean);
  } catch (err) {}
  return cleaned.split(/[\r\n]+/).map(function(line) {
    return openAiHourlyNormalizeLine_(line.replace(/^\s*(?:[-*]|\d+[.)、])\s*/, ''));
  }).filter(Boolean);
}

function openAiHourlyNormalizeLine_(value) {
  return String(value || '').trim().replace(/^[「『“”"']+|[」』“”"']+$/g, '').trim();
}

function openAiHourlyLineIsSafe_(line, minLength, maxLength) {
  const text = String(line || '');
  const length = Array.from(text).length;
  if (length < minLength || length > maxLength) return false;
  if (/[A-Za-z\u0400-\u04FF]/.test(text)) return false;
  if (/https?:\/\/|www\.|```|患者|病名|病室|病棟|カルテ|処方|検査値|患者ID|診断|服薬|投薬/.test(text)) return false;
  return true;
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
