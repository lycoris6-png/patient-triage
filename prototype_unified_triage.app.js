function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Icon = ({
  d,
  size = 16,
  color = 'currentColor',
  fill = 'none',
  strokeWidth = 2,
  viewBox = '0 0 24 24',
  extra
}) => React.createElement("svg", {
  width: size,
  height: size,
  viewBox: viewBox,
  fill: fill,
  stroke: color,
  strokeWidth: strokeWidth,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    display: 'inline-block',
    flexShrink: 0,
    ...extra
  }
}, Array.isArray(d) ? d.map((p, i) => React.createElement("path", {
  key: i,
  d: p
})) : React.createElement("path", {
  d: d
}));
const Plus = p => React.createElement(Icon, _extends({}, p, {
  d: "M12 5v14M5 12h14"
}));
const X = p => React.createElement(Icon, _extends({}, p, {
  d: "M18 6 6 18M6 6l12 12"
}));
const Check = p => React.createElement(Icon, _extends({}, p, {
  d: "M20 6 9 17l-5-5"
}));
const Zap = p => React.createElement(Icon, _extends({}, p, {
  d: "M13 2 3 14h9l-1 8 10-12h-9l1-8z"
}));
const Focus = p => React.createElement(Icon, _extends({}, p, {
  d: ["M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", "M3 7V5a2 2 0 0 1 2-2h2", "M17 3h2a2 2 0 0 1 2 2v2", "M21 17v2a2 2 0 0 1-2 2h-2", "M7 21H5a2 2 0 0 1-2-2v-2"]
}));
const Clock = p => React.createElement(Icon, _extends({}, p, {
  d: ["M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z", "M12 6v6l4 2"]
}));
const Trash2 = p => React.createElement(Icon, _extends({}, p, {
  d: ["M3 6h18", "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6", "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", "M10 11v6", "M14 11v6"]
}));
const BedDouble = p => React.createElement(Icon, _extends({}, p, {
  d: ["M2 4v16", "M2 14h20", "M22 10v10", "M6 10h4a2 2 0 0 1 2 2v2", "M12 14v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", "M6 20v-2", "M18 20v-2"]
}));
const ChevronDown = p => React.createElement(Icon, _extends({}, p, {
  d: "M6 9l6 6 6-6"
}));
const ChevronRight = p => React.createElement(Icon, _extends({}, p, {
  d: "M9 18l6-6-6-6"
}));
const AlertCircle = p => React.createElement(Icon, _extends({}, p, {
  d: ["M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z", "M12 8v4", "M12 16h.01"]
}));
const Play = p => React.createElement(Icon, _extends({}, p, {
  d: "M5 3l14 9-14 9V3z"
}));
const RotateCcw = p => React.createElement(Icon, _extends({}, p, {
  d: ["M1 4v6h6", "M3.51 15a9 9 0 1 0 .49-4.95"]
}));
const Target = p => React.createElement(Icon, _extends({}, p, {
  d: ["M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z", "M12 6a6 6 0 1 0 0 12A6 6 0 0 0 12 6z", "M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"]
}));
const Coffee = p => React.createElement(Icon, _extends({}, p, {
  d: ["M18 8h1a4 4 0 0 1 0 8h-1", "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z", "M6 1v3", "M10 1v3", "M14 1v3"]
}));
const AlertTriangle = p => React.createElement(Icon, _extends({}, p, {
  d: ["M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z", "M12 9v4", "M12 17h.01"]
}));
const Pencil = p => React.createElement(Icon, _extends({}, p, {
  d: ["M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"]
}));
const Sparkles = p => React.createElement(Icon, _extends({}, p, {
  d: ["M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z", "M5 16l.9 2.1L8 19l-2.1.9L5 22l-.9-2.1L2 19l2.1-.9L5 16z", "M19 1l.6 1.4L21 3l-1.4.6L19 5l-.6-1.4L17 3l1.4-.6L19 1z"]
}));
const TASK_TYPES = [{
  id: 'order',
  label: '指示',
  dot: '#3B82F6'
}, {
  id: 'exam',
  label: '診察',
  dot: '#10B981'
}, {
  id: 'test',
  label: '検査',
  dot: '#14B8A6'
}, {
  id: 'chart',
  label: 'カルテ',
  dot: '#F59E0B'
}, {
  id: 'result',
  label: '結果',
  dot: '#8B5CF6'
}, {
  id: 'family',
  label: 'IC/説明',
  dot: '#EC4899'
}, {
  id: 'consult',
  label: '相談',
  dot: '#F97316'
}, {
  id: 'discharge',
  label: '退院',
  dot: '#06B6D4'
}, {
  id: 'docs',
  label: '書類',
  dot: '#6366F1'
}, {
  id: 'other',
  label: 'その他',
  dot: '#94A3B8'
}];
const ESTIMATES = [{
  id: '2',
  label: '2分'
}, {
  id: '5',
  label: '5分'
}, {
  id: '10',
  label: '10分'
}, {
  id: '15',
  label: '15分'
}, {
  id: '30',
  label: '30分+'
}];
const GENERAL_TASK_TYPES = [{
  id: 'receipt',
  label: 'レセプト',
  dot: '#0EA5E9'
}, {
  id: 'letter',
  label: '紹介状',
  dot: '#6366F1'
}, {
  id: 'docs',
  label: '書類',
  dot: '#F59E0B'
}, {
  id: 'call',
  label: '連絡',
  dot: '#10B981'
}, {
  id: 'study',
  label: '自己研鑽',
  dot: '#EC4899'
}, {
  id: 'organize',
  label: '整理',
  dot: '#8B5CF6'
}, {
  id: 'medi',
  label: 'メディパピルス',
  dot: '#14B8A6'
}, {
  id: 'round',
  label: '回診',
  dot: '#22C55E'
}, {
  id: 'wardChart',
  label: '病棟カルテ',
  dot: '#A855F7'
}, {
  id: 'other',
  label: 'その他',
  dot: '#94A3B8'
}];
const DAILY_TASK_TYPES = [{
  id: 'home',
  label: '家',
  dot: '#22C55E'
}, {
  id: 'outside',
  label: '外',
  dot: '#F97316'
}, {
  id: 'contact',
  label: '連絡',
  dot: '#10B981'
}, {
  id: 'shopping',
  label: '買う',
  dot: '#F59E0B'
}, {
  id: 'health',
  label: '体調',
  dot: '#EC4899'
}, {
  id: 'docs',
  label: '書類',
  dot: '#6366F1'
}, {
  id: 'pc',
  label: 'PC',
  dot: '#0EA5E9'
}, {
  id: 'later',
  label: 'あとで',
  dot: '#94A3B8'
}];
const QUICK_GENERAL_TASKS = [{
  title: 'レセプト',
  type: 'receipt',
  estimate: '15'
}, {
  title: '紹介状',
  type: 'letter',
  estimate: '10'
}, {
  title: 'メディパピルス',
  type: 'medi',
  estimate: '5'
}, {
  title: '回診',
  type: 'round',
  estimate: '15'
}, {
  title: '病棟カルテ',
  type: 'wardChart',
  estimate: '15'
}];
const QUICK_PATIENT_TASKS = QUICK_GENERAL_TASKS;
const QUICK_DAILY_TASKS = [{
  title: '掃除',
  type: 'home',
  estimate: '10',
  dailyPriority: 'normal'
}, {
  title: '洗濯',
  type: 'home',
  estimate: '5',
  dailyPriority: 'today'
}, {
  title: '洗濯干し',
  type: 'home',
  estimate: '5',
  dailyPriority: 'today'
}, {
  title: '風呂',
  type: 'health',
  estimate: '30',
  dailyPriority: 'normal'
}, {
  title: '食器',
  type: 'home',
  estimate: '5',
  dailyPriority: 'normal'
}, {
  title: 'ゴミ整理',
  type: 'home',
  estimate: '5',
  dailyPriority: 'normal'
}, {
  title: '書類整理',
  type: 'docs',
  estimate: '10',
  dailyPriority: 'normal'
}, {
  title: '買い物メモ',
  type: 'shopping',
  estimate: '5',
  dailyPriority: 'normal'
}, {
  title: 'LINE返す',
  type: 'contact',
  estimate: '5',
  dailyPriority: 'today'
}, {
  title: '明日の準備',
  type: 'later',
  estimate: '10',
  dailyPriority: 'today'
}];
const DEFAULT_DAILY_TASK_SETS = [{
  id: 'daily-set-laundry',
  name: '洗濯セット',
  items: [{
    title: '洗濯機を回す',
    type: 'home',
    estimate: '5',
    dailyPriority: 'today'
  }, {
    title: '洗濯を干す',
    type: 'home',
    estimate: '10',
    dailyPriority: 'today'
  }, {
    title: '畳む場所を空ける',
    type: 'home',
    estimate: '2',
    dailyPriority: 'normal'
  }]
}, {
  id: 'daily-set-bath',
  name: '風呂洗いセット',
  items: [{
    title: '浴槽を洗う',
    type: 'health',
    estimate: '5',
    dailyPriority: 'today'
  }, {
    title: '排水口だけ見る',
    type: 'home',
    estimate: '2',
    dailyPriority: 'normal'
  }, {
    title: '湯はり準備',
    type: 'health',
    estimate: '2',
    dailyPriority: 'normal'
  }]
}, {
  id: 'daily-set-reset',
  name: '生活リセット',
  items: [{
    title: '食器を片づける',
    type: 'home',
    estimate: '5',
    dailyPriority: 'today'
  }, {
    title: '明日の準備',
    type: 'later',
    estimate: '10',
    dailyPriority: 'today'
  }, {
    title: 'ゴミをまとめる',
    type: 'home',
    estimate: '5',
    dailyPriority: 'normal'
  }]
}];
const DEFAULT_LAST_DONE_ITEMS = [{
  id: 'laundry',
  label: '洗濯'
}, {
  id: 'bath-clean',
  label: '風呂洗い'
}];
const DAILY_TASK_PRIORITIES = [{
  id: 'urgent',
  label: '急ぎ',
  color: '#EF4444',
  weight: 2.8
}, {
  id: 'today',
  label: '今日',
  color: '#F59E0B',
  weight: 2.0
}, {
  id: 'normal',
  label: '通常',
  color: '#3B82F6',
  weight: 1.0
}, {
  id: 'easy',
  label: '余裕',
  color: '#22C55E',
  weight: .62
}];
const WEEKDAY_OPTIONS = [{
  id: 1,
  label: '月'
}, {
  id: 2,
  label: '火'
}, {
  id: 3,
  label: '水'
}, {
  id: 4,
  label: '木'
}, {
  id: 5,
  label: '金'
}, {
  id: 6,
  label: '土'
}, {
  id: 0,
  label: '日'
}];
const DEFAULT_ROUTINE_PRESETS = [{
  id: 'weekday-review',
  kind: 'task',
  mode: 'patient',
  title: '書類確認',
  type: 'docs',
  estimate: '5',
  dailyPriority: 'normal',
  weekdays: [1, 2, 3, 4, 5]
}, {
  id: 'daily-reset',
  kind: 'task',
  mode: 'daily',
  title: '明日の準備',
  type: 'later',
  estimate: '10',
  dailyPriority: 'today',
  weekdays: [1, 2, 3, 4, 5]
}, {
  id: 'conference',
  kind: 'event',
  mode: 'both',
  title: 'カンファレンス',
  scheduledTime: '16:00',
  weekdays: [1, 2, 3, 4, 5]
}];
const PRIORITIES = [{
  id: 'er',
  label: 'ER',
  color: '#DC2626',
  bar: '#DC2626',
  cls: 'pri-er'
}, {
  id: 'high',
  label: '高',
  color: '#EF4444',
  bar: '#EF4444',
  cls: 'pri-high'
}, {
  id: 'normal',
  label: '中',
  color: '#D4930A',
  bar: '#D4930A',
  cls: 'pri-normal'
}, {
  id: 'low',
  label: '低',
  color: '#22C55E',
  bar: '#22C55E',
  cls: 'pri-low'
}];
const WARDS = [{
  id: '',
  label: '\uFF08\u306A\u3057\uFF09'
}, {
  id: '5E',
  label: '5E'
}, {
  id: '5S',
  label: '5S'
}, {
  id: '4E',
  label: '4E'
}, {
  id: '4S',
  label: '4S'
}, {
  id: '3E',
  label: '3E'
}];
const WARD_ORDER = WARDS.reduce((acc, ward, index) => {
  acc[ward.id] = index;
  return acc;
}, {});
const PATIENT_KINDS = [{
  id: 'referral',
  label: '紹介外来',
  color: '#0EA5E9'
}, {
  id: 'admission',
  label: '予定入院',
  color: '#8B5CF6'
}, {
  id: 'cath',
  label: '心カテ',
  color: '#EC4899'
}, {
  id: 'other',
  label: 'その他',
  color: '#64748B'
}];
const PENDING_PATIENT_ALERT_DAYS = 3;
const daysUntilDateStr = dateStr => {
  if (!dateStr) return null;
  const target = new Date(dateStr + 'T00:00:00').getTime();
  const today = new Date(todayStr() + 'T00:00:00').getTime();
  if (Number.isNaN(target)) return null;
  return Math.round((target - today) / (24 * 60 * 60 * 1000));
};
const DEFAULT_TEMPLATES = [{
  id: 'tpl-admission',
  name: '入院時セット',
  items: [{
    title: '入院部屋確保',
    type: 'other',
    estimate: '2'
  }, {
    title: '持参薬鑑別依頼',
    type: 'consult',
    estimate: '2'
  }, {
    title: '持参薬処方',
    type: 'order',
    estimate: '5'
  }, {
    title: '入院時カルテ記述',
    type: 'chart',
    estimate: '5'
  }, {
    title: '入院点滴入力',
    type: 'order',
    estimate: '2'
  }]
}, {
  id: 'tpl-discharge',
  name: '退院セット',
  items: [{
    title: '退院処方入力',
    type: 'order',
    estimate: '5'
  }, {
    title: '退院時サマリー記載',
    type: 'chart',
    estimate: '15'
  }, {
    title: '栄養指導オーダー',
    type: 'order',
    estimate: '2'
  }, {
    title: '次回外来予約',
    type: 'order',
    estimate: '2'
  }, {
    title: '退院時患者指導',
    type: 'family',
    estimate: '15'
  }]
}, {
  id: 'tpl-preop',
  name: 'オペ出し前セット',
  items: [{
    title: '術前同意書確認',
    type: 'chart',
    estimate: '2'
  }, {
    title: '術前検査オーダー',
    type: 'order',
    estimate: '5'
  }, {
    title: 'NPO指示入力',
    type: 'order',
    estimate: '2'
  }, {
    title: '術前点滴指示',
    type: 'order',
    estimate: '2'
  }, {
    title: '予防的抗菌薬オーダー',
    type: 'order',
    estimate: '2'
  }]
}, {
  id: 'tpl-emergency',
  name: '急変時セット',
  items: [{
    title: 'ABGオーダー',
    type: 'order',
    estimate: '2'
  }, {
    title: 'ポータブル胸写',
    type: 'order',
    estimate: '2'
  }, {
    title: '12誘導心電図',
    type: 'order',
    estimate: '2'
  }, {
    title: '家族への連絡',
    type: 'family',
    estimate: '5'
  }, {
    title: '上級医への報告',
    type: 'consult',
    estimate: '2'
  }]
}];
const TIME_STATES = {
  past: {
    bg: '#FEE2E2',
    fg: '#991B1B'
  },
  now: {
    bg: '#FEF3C7',
    fg: '#92400E'
  },
  soon: {
    bg: '#FEF9C3',
    fg: '#713F12'
  },
  upcoming: {
    bg: '#EDE9FE',
    fg: '#4C1D95'
  },
  future: {
    bg: '#F3F4F6',
    fg: '#6B7280'
  }
};
const STORAGE_KEY = 'patient-triage-v1';
const GAS_CONFIG_KEY = 'patient-triage-gas-config';
const ROUTINE_PROMPT_STORAGE_KEY = 'patient-triage-routine-prompt-date';
const THEMES = [{
  id: 'lavender',
  label: 'ラベンダー',
  swatch: '#A078F8',
  vars: {
    '--bg': '#EEE8FF',
    '--surface': '#FFFFFF',
    '--surface-2': '#F7F4FF',
    '--surface-3': '#EDE6FF',
    '--border': '#DDD6F5',
    '--border-2': '#C4B8EE',
    '--text': '#180F3E',
    '--text-2': '#4E4280',
    '--text-3': '#9B90BC',
    '--accent': '#6C3EF8',
    '--accent-h': '#5530D4',
    '--done': '#16A34A',
    '--stuck-fg': '#DC2626',
    '--shadow-xs': '0 1px 3px rgba(108,62,248,.10)',
    '--shadow-sm': '0 2px 10px rgba(108,62,248,.10), 0 1px 3px rgba(108,62,248,.06)',
    '--shadow': '0 4px 20px rgba(108,62,248,.14), 0 2px 6px rgba(108,62,248,.08)',
    '--shadow-lg': '0 8px 36px rgba(108,62,248,.20), 0 3px 10px rgba(108,62,248,.10)'
  },
  headerGrad: 'linear-gradient(135deg, #180F3E 0%, #3D2080 60%, #5E3AC4 100%)',
  dotColor: 'rgba(108,62,248,.07)'
}, {
  id: 'beige',
  label: 'ベージュ',
  swatch: '#C4A070',
  vars: {
    '--bg': '#F4EFE4',
    '--surface': '#FDFAF2',
    '--surface-2': '#F7F1E3',
    '--surface-3': '#EFE7D4',
    '--border': '#DDD3BC',
    '--border-2': '#CFC4AB',
    '--text': '#2A1D0E',
    '--text-2': '#6E5E48',
    '--text-3': '#9E8E78',
    '--accent': '#A0723A',
    '--accent-h': '#80522A',
    '--done': '#4E7A44',
    '--stuck-fg': '#8A4040',
    '--shadow-xs': '0 1px 3px rgba(42,29,14,.08)',
    '--shadow-sm': '0 2px 10px rgba(42,29,14,.08), 0 1px 3px rgba(42,29,14,.05)',
    '--shadow': '0 4px 20px rgba(42,29,14,.12), 0 2px 6px rgba(42,29,14,.07)',
    '--shadow-lg': '0 8px 36px rgba(42,29,14,.16), 0 3px 10px rgba(42,29,14,.09)'
  },
  headerGrad: 'linear-gradient(135deg, #2A1D0E 0%, #5A3A1A 60%, #8A6035 100%)',
  dotColor: 'rgba(42,29,14,.05)'
}, {
  id: 'mint',
  label: 'ミント',
  swatch: '#3DAA70',
  vars: {
    '--bg': '#EDFBF4',
    '--surface': '#FFFFFF',
    '--surface-2': '#F2FDF7',
    '--surface-3': '#DCF7E8',
    '--border': '#B8E8CC',
    '--border-2': '#90D4AE',
    '--text': '#0A2A18',
    '--text-2': '#2A6644',
    '--text-3': '#70A888',
    '--accent': '#1A9E5A',
    '--accent-h': '#14784A',
    '--done': '#16A34A',
    '--stuck-fg': '#DC2626',
    '--shadow-xs': '0 1px 3px rgba(26,158,90,.10)',
    '--shadow-sm': '0 2px 10px rgba(26,158,90,.10), 0 1px 3px rgba(26,158,90,.06)',
    '--shadow': '0 4px 20px rgba(26,158,90,.14), 0 2px 6px rgba(26,158,90,.08)',
    '--shadow-lg': '0 8px 36px rgba(26,158,90,.20), 0 3px 10px rgba(26,158,90,.10)'
  },
  headerGrad: 'linear-gradient(135deg, #0A2A18 0%, #1A5A34 60%, #2A8A52 100%)',
  dotColor: 'rgba(26,158,90,.07)'
}, {
  id: 'rose',
  label: 'ピンク',
  swatch: '#E060A0',
  vars: {
    '--bg': '#FDF0F6',
    '--surface': '#FFFFFF',
    '--surface-2': '#FDF5FA',
    '--surface-3': '#FAE0EE',
    '--border': '#F0C0DA',
    '--border-2': '#E0A0C4',
    '--text': '#280F1A',
    '--text-2': '#7A2A60',
    '--text-3': '#BC7AA0',
    '--accent': '#C82868',
    '--accent-h': '#A02050',
    '--done': '#16A34A',
    '--stuck-fg': '#DC2626',
    '--shadow-xs': '0 1px 3px rgba(200,40,104,.10)',
    '--shadow-sm': '0 2px 10px rgba(200,40,104,.10), 0 1px 3px rgba(200,40,104,.06)',
    '--shadow': '0 4px 20px rgba(200,40,104,.14), 0 2px 6px rgba(200,40,104,.08)',
    '--shadow-lg': '0 8px 36px rgba(200,40,104,.20), 0 3px 10px rgba(200,40,104,.10)'
  },
  headerGrad: 'linear-gradient(135deg, #280F1A 0%, #7A2050 60%, #C82868 100%)',
  dotColor: 'rgba(200,40,104,.07)'
}, {
  id: 'sky',
  label: 'スカイ',
  swatch: '#2080E0',
  vars: {
    '--bg': '#EEF6FF',
    '--surface': '#FFFFFF',
    '--surface-2': '#F4F9FF',
    '--surface-3': '#DDEEFF',
    '--border': '#C0D8F8',
    '--border-2': '#98C0F0',
    '--text': '#0C1E38',
    '--text-2': '#2A4E80',
    '--text-3': '#78A0C0',
    '--accent': '#1A6ED8',
    '--accent-h': '#1458B0',
    '--done': '#16A34A',
    '--stuck-fg': '#DC2626',
    '--shadow-xs': '0 1px 3px rgba(26,110,216,.10)',
    '--shadow-sm': '0 2px 10px rgba(26,110,216,.10), 0 1px 3px rgba(26,110,216,.06)',
    '--shadow': '0 4px 20px rgba(26,110,216,.14), 0 2px 6px rgba(26,110,216,.08)',
    '--shadow-lg': '0 8px 36px rgba(26,110,216,.20), 0 3px 10px rgba(26,110,216,.10)'
  },
  headerGrad: 'linear-gradient(135deg, #0C1E38 0%, #1A3A7A 60%, #1A6ED8 100%)',
  dotColor: 'rgba(26,110,216,.07)'
}];
const THEME_STORAGE_KEY = 'patient-triage-theme';
const RPG_MODE_STORAGE_KEY = 'patient-triage-rpg-mode';
const TIMED_ALERT_MODE_STORAGE_KEY = 'patient-triage-timed-alert-mode';
const HEADER_BACKDROP_STORAGE_KEY = 'patient-triage-header-backdrop';
const HEADER_BACKDROP_MODES = ['auto', 'morning', 'day', 'evening', 'night'];
const HEADER_BACKDROP_LABELS = {
  auto: '\u81EA\u52D5',
  morning: '\u671D',
  day: '\u663C',
  evening: '\u5915',
  night: '\u591C'
};
function getHeaderBackdrop(mode, nowMs) {
  if (mode && mode !== 'auto') return HEADER_BACKDROP_MODES.includes(mode) ? mode : 'day';
  const hour = new Date(nowMs).getHours();
  if (hour >= 8 && hour < 11) return 'morning';
  if (hour >= 11 && hour < 17) return 'day';
  if (hour >= 17 && hour < 22) return 'evening';
  return 'night';
}
function applyTheme(theme) {
  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([k, v]) => root.style.setProperty(k, v));
  document.body.style.backgroundImage = `radial-gradient(circle at 1px 1px, ${theme.dotColor} 1px, transparent 0)`;
  window.__headerGrad = theme.headerGrad;
}
const uid = () => Math.random().toString(36).slice(2, 10);
const formatHHMM = ms => {
  if (!ms) return '';
  const d = new Date(ms);
  if (Number.isNaN(d.getTime())) return '';
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
};
const WORKDAY_START_HOUR = 6;
const todayStr = () => {
  const d = new Date();
  if (d.getHours() < WORKDAY_START_HOUR) d.setDate(d.getDate() - 1);
  return d.toLocaleDateString('sv-SE');
};
const currentWorkday = () => new Date(todayStr() + 'T00:00:00');
const dateStrFromDate = date => date.toLocaleDateString('sv-SE');
const weekRangeForDate = dateStr => {
  const d = new Date(dateStr + 'T00:00:00');
  const offset = (d.getDay() + 6) % 7;
  const start = new Date(d);
  start.setDate(d.getDate() - offset);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  return { start: dateStrFromDate(start), end: dateStrFromDate(end) };
};
const currentWeekRange = () => weekRangeForDate(todayStr());
const pruneEndDayLogs = (logs, baseDate = todayStr()) => {
  const { start, end } = weekRangeForDate(baseDate);
  return (Array.isArray(logs) ? logs : []).filter(log => log && log.date >= start && log.date <= end).sort((a, b) => a.date.localeCompare(b.date));
};
const weekdayLabel = dateStr => ['日', '月', '火', '水', '木', '金', '土'][new Date(dateStr + 'T00:00:00').getDay()] || '';
const formatEndDayLogs = logs => {
  const weekly = pruneEndDayLogs(logs);
  const { start, end } = currentWeekRange();
  const lines = [`# おしまいログ ${start}(${weekdayLabel(start)}) - ${end}(${weekdayLabel(end)})`, ''];
  if (!weekly.length) {
    lines.push('今週のおしまいログはまだありません。');
    return lines.join('\n');
  }
  weekly.forEach(log => {
    lines.push(`## ${log.date}(${weekdayLabel(log.date)})`);
    lines.push(`完了 ${log.count || 0}件`);
    (log.patientTasks || []).forEach(item => lines.push(`- 患者: ${item.patientName || ''} / ${item.title || ''}`));
    (log.generalTasks || []).forEach(item => lines.push(`- ${item.mode === 'daily' ? 'でいとり' : 'すきま'}: ${item.title || ''}`));
    (log.events || []).forEach(item => lines.push(`- 予定: ${item.title || ''}${item.scheduledTime ? ' ' + item.scheduledTime : ''}`));
    lines.push('');
  });
  return lines.join('\n').trimEnd();
};
const MILESTONE_LINES = {
  5: '今日5件終了。いい流れです。',
  10: '今日10件終了。かなり片づいてきました。',
  15: '今日15件終了。ここまで積めたのは大きいです。',
  20: '今日20件終了。今日は相当動いています。',
  25: '今日25件終了。少し息を入れつつ、この調子です。',
  30: '今日30件終了。ここまで来たら十分すごいです。'
};
const milestoneForDone = count => count <= 30 && count % 5 === 0 ? count : null;
const PATIENT_ALERTS = [{ id: 'medHold', icon: '💊', label: '中断薬あり' }, { id: 'fasting', icon: '🍙', label: '欠食あり' }, { id: 'rehabMissing', icon: '🏃‍♀️', label: 'リハビリ未介入' }];
const getPatientAlerts = patient => PATIENT_ALERTS.filter(alert => patient?.alerts?.[alert.id]);
const getPri = p => p?.priority || 'normal';
const priMeta = id => PRIORITIES.find(p => p.id === id) || PRIORITIES.find(p => p.id === 'normal') || PRIORITIES[1];
const getWard = p => WARDS.some(w => w.id === (p?.ward || '')) ? p?.ward || '' : '';
const wardLabel = id => (WARDS.find(w => w.id === (id || '')) || WARDS[0]).label;
const estimateMinutes = task => Number.parseInt(task?.estimate, 10) || 0;
const formatDuration = minutes => {
  if (minutes <= 0) return '0\u5206';
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (!h) return `${m}\u5206`;
  return m ? `${h}\u6642\u9593${m}\u5206` : `${h}\u6642\u9593`;
};
const formatClock = date => `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
const minutesUntilNextMidnight = date => {
  const midnight = new Date(date);
  midnight.setHours(24, 0, 0, 0);
  return Math.max(0, Math.ceil((midnight.getTime() - date.getTime()) / 60000));
};
const CELEBRATION_RAYS = [-165, -138, -112, -82, -52, -24, 18, 45, 74, 105, 134, 162].map((angle, i) => ({
  angle,
  color: ['#facc15', '#fb7185', '#38bdf8', '#a78bfa', '#34d399'][i % 5],
  delay: `${i * 0.025}s`,
  distance: `${128 + i % 4 * 18}px`
}));
const CELEBRATION_CONFETTI = Array.from({
  length: 34
}, (_, i) => {
  const angle = -170 + i * 10.2;
  const distance = 110 + i % 7 * 22;
  const rad = angle * Math.PI / 180;
  return {
    dx: `${Math.cos(rad) * distance}px`,
    dy: `${Math.sin(rad) * distance - 34 - i % 5 * 12}px`,
    spin: `${(i % 2 ? -1 : 1) * (180 + i * 23)}deg`,
    color: ['#facc15', '#fb7185', '#38bdf8', '#a78bfa', '#34d399', '#f97316'][i % 6],
    delay: `${0.06 + i % 9 * 0.035}s`,
    shape: i % 5 === 0 ? 'round' : i % 4 === 0 ? 'ribbon' : ''
  };
});
const STUCK_STEP_GOALS = [2, 3, 5, 8];
const stuckStepGoal = task => {
  const n = Number.parseInt(task?.stuckStepGoal, 10);
  return STUCK_STEP_GOALS.includes(n) ? n : 3;
};
const stuckStepDone = task => Math.min(stuckStepGoal(task), Math.max(0, Number.parseInt(task?.stuckStepDone, 10) || 0));
function StuckProgress({
  task,
  compact = false
}) {
  const goal = stuckStepGoal(task);
  const done = stuckStepDone(task);
  const ready = done >= goal;
  const recent = Array.isArray(task?.stuckStepLog) ? task.stuckStepLog.slice(-3).reverse() : [];
  return React.createElement("div", null, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      flexWrap: 'wrap',
      marginTop: compact ? 4 : 8
    }
  }, React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: compact ? 2 : 3,
      alignItems: 'center'
    },
    "aria-label": `詰まり進捗 ${done}/${goal}`
  }, Array.from({
    length: goal
  }, (_, i) => React.createElement("span", {
    key: i,
    style: {
      width: compact ? 10 : 13,
      height: compact ? 7 : 9,
      borderRadius: 2,
      background: i < done ? 'var(--stuck-fg)' : 'rgba(220,38,38,.16)',
      border: i < done ? '1px solid var(--stuck-fg)' : '1px solid rgba(220,38,38,.26)'
    }
  }))), React.createElement("span", {
    style: {
      fontSize: compact ? 10 : 11,
      fontWeight: 800,
      color: ready ? 'var(--done)' : 'var(--stuck-fg)',
      lineHeight: 1
    }
  }, done, "/", goal, ready ? ' 解除候補' : '')), recent.length > 0 && React.createElement("div", {
    style: {
      marginTop: compact ? 4 : 7,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      color: '#9A3412',
      fontSize: compact ? 10 : 11,
      opacity: .82
    }
  }, recent.map((log, i) => React.createElement("div", {
    key: `${log.at || ''}-${i}`,
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: compact ? 'nowrap' : 'normal'
    }
  }, "✓ ", log.text || '2分進めた'))));
}
const loadLocal = key => {
  try {
    const r = localStorage.getItem(key);
    return r ? JSON.parse(r) : null;
  } catch {
    return null;
  }
};
const saveLocal = (key, val) => {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch {}
};
const loadGasConfig = () => loadLocal(GAS_CONFIG_KEY) || {
  url: '',
  secret: ''
};
const saveGasConfig = cfg => saveLocal(GAS_CONFIG_KEY, cfg);
function timeStatus(scheduledTime, nowMs) {
  if (!scheduledTime) return null;
  const [h, m] = scheduledTime.split(':').map(Number);
  if (isNaN(h) || isNaN(m)) return null;
  const sched = new Date(nowMs);
  sched.setHours(h, m, 0, 0);
  const d = (sched - nowMs) / 60000;
  if (d < -5) return 'past';
  if (d < 5) return 'now';
  if (d <= 30) return 'soon';
  if (d < 120) return 'upcoming';
  return 'future';
}
function dateTimeStatus(scheduledDate, scheduledTime, nowMs) {
  if (!scheduledTime) return null;
  const [h, m] = scheduledTime.split(':').map(Number);
  if (isNaN(h) || isNaN(m)) return null;
  const base = scheduledDate || todayStr();
  const sched = new Date(`${base}T00:00:00`);
  if (Number.isNaN(sched.getTime())) return timeStatus(scheduledTime, nowMs);
  sched.setHours(h, m, 0, 0);
  const d = (sched - nowMs) / 60000;
  if (d < -5) return 'past';
  if (d < 5) return 'now';
  if (d <= 30) return 'soon';
  if (d < 120) return 'upcoming';
  return 'future';
}
function dateLabel(dateStr) {
  if (!dateStr) return '';
  const today = todayStr();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().slice(0, 10);
  if (dateStr === today) return '今日';
  if (dateStr === tomorrowStr) return '明日';
  const [, month, day] = dateStr.split('-');
  return month && day ? `${Number(month)}/${Number(day)}` : dateStr;
}
async function gasFetch(cfg, payload) {
  await fetch(cfg.url, {
    method: 'POST',
    body: JSON.stringify({
      secret: cfg.secret,
      data: payload
    }),
    headers: {
      'Content-Type': 'text/plain'
    },
    mode: 'no-cors'
  });
  return {
    ok: true
  };
}
function gasGet(cfg) {
  return new Promise((resolve, reject) => {
    const cbName = 'gasJsonpCb_' + Date.now();
    const script = document.createElement('script');
    const cleanup = () => {
      try {
        document.head.removeChild(script);
      } catch {}
      delete window[cbName];
    };
    const timer = setTimeout(() => {
      cleanup();
      reject(new Error('タイムアウト(10秒)'));
    }, 10000);
    window[cbName] = data => {
      clearTimeout(timer);
      cleanup();
      resolve(data);
    };
    script.onerror = () => {
      clearTimeout(timer);
      cleanup();
      reject(new Error('スクリプト読み込み失敗'));
    };
    script.src = `${cfg.url}?secret=${encodeURIComponent(cfg.secret)}&callback=${cbName}`;
    document.head.appendChild(script);
  });
}
function TimeBadge({
  scheduledTime,
  now,
  onClear,
  editable
}) {
  if (!scheduledTime) return null;
  const ts = timeStatus(scheduledTime, now);
  const s = TIME_STATES[ts] || TIME_STATES.future;
  return React.createElement("span", {
    className: `time-tag${ts === 'past' ? ' past' : ''}`,
    style: {
      background: s.bg,
      color: s.fg
    }
  }, React.createElement(Clock, {
    size: 10,
    color: s.fg
  }), scheduledTime, editable && onClear && React.createElement("button", {
    onClick: onClear,
    style: {
      background: 'none',
      border: 'none',
      padding: '0 0 0 2px',
      cursor: 'pointer',
      lineHeight: 1,
      opacity: .7
    }
  }, React.createElement(X, {
    size: 10,
    color: s.fg
  })));
}
function SuggestionCard({
  suggestion,
  typeMeta,
  estMeta,
  now,
  onDone,
  onDoing,
  onStuck,
  onCompleteTask,
  onReroll,
  onDismiss,
  onStartTimer,
  onStartTally,
  running
}) {
  if (suggestion.empty) return React.createElement("div", {
    className: "suggestion-card",
    style: {
      background: 'var(--surface-2)',
      border: '1.5px solid var(--border)',
      padding: '24px',
      textAlign: 'center',
      marginBottom: 16
    }
  }, React.createElement(Sparkles, {
    size: 24,
    color: "var(--text-3)",
    extra: {
      marginBottom: 8,
      display: 'block',
      margin: '0 auto 8px'
    }
  }), React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--text-2)',
      margin: '0 0 12px',
      lineHeight: 1.7
    }
  }, "\u8A72\u5F53\u3059\u308B\u30BF\u30B9\u30AF\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u5C11\u3057\u4F11\u61A9\u3057\u307E\u3059\u304B?"), React.createElement("button", {
    className: "btn-sm",
    onClick: onDismiss,
    style: {
      fontSize: 12
    }
  }, "\u9589\u3058\u308B"));
  const t = suggestion.task;
  const type = suggestion.fromGeneral ? GENERAL_TASK_TYPES.find(gt => gt.id === t.type) || GENERAL_TASK_TYPES[2] : typeMeta(t.type);
  const est = estMeta(t.estimate);
  const pri = priMeta(t.patientPriority);
  const accentColor = suggestion.fromStuck ? '#EF4444' : suggestion.fromGeneral ? '#64748B' : 'var(--accent)';
  return React.createElement("div", {
    className: "suggestion-card",
    style: {
      background: 'var(--surface)',
      border: '1.5px solid var(--border)',
      borderTop: `4px solid ${accentColor}`,
      padding: '20px 22px',
      marginBottom: 16,
      borderRadius: 'var(--r)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 12,
      color: accentColor,
      fontWeight: 700,
      letterSpacing: '.04em'
    }
  }, React.createElement(Target, {
    size: 14,
    color: accentColor
  }), suggestion.fromStuck ? '詰まってたやつ — 小さな一歩だけ' : suggestion.fromGeneral ? 'すきまタスク' : '次にやること'), React.createElement("button", {
    onClick: onDismiss,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 4,
      opacity: .4,
      lineHeight: 1
    }
  }, React.createElement(X, {
    size: 14,
    color: "var(--text-2)"
  }))), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 10,
      flexWrap: 'wrap'
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'monospace',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--text)',
      letterSpacing: '.02em'
    }
  }, t.patientName), React.createElement("span", {
    className: "tag",
    style: {
      background: pri.color + '22',
      color: pri.color
    }
  }, "\u512A", pri.label), React.createElement("span", {
    className: "tag",
    style: {
      background: type.dot + '18',
      color: type.dot
    }
  }, type.label), React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-3)',
      fontWeight: 600
    }
  }, est.label), React.createElement(TimeBadge, {
    scheduledTime: t.scheduledTime,
    now: now
  })), React.createElement("p", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--text)',
      fontFamily: 'var(--font-serif)',
      margin: '0 0 16px',
      lineHeight: 1.55
    }
  }, t.title), suggestion.fromStuck && t.tinyStep && React.createElement("div", {
    style: {
      background: '#FFF7ED',
      borderRadius: 10,
      padding: '10px 14px',
      marginBottom: 16,
      fontSize: 13,
      color: '#9A3412',
      border: '1px solid #FED7AA'
    }
  }, React.createElement("span", {
    style: {
      fontSize: 11,
      opacity: .7,
      fontWeight: 700
    }
  }, "\u6B21\u306E\u4E00\u6B69: "), t.tinyStep), suggestion.fromStuck && React.createElement(StuckProgress, {
    task: t
  }), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, React.createElement("button", {
    className: "btn-green",
    onClick: onDone
  }, React.createElement(Check, {
    size: 14
  }), suggestion.fromStuck ? "\u4E00\u6B69\u5B8C\u4E86" : "\u5B8C\u4E86"), suggestion.fromStuck && React.createElement("button", {
    className: "btn-green",
    onClick: onCompleteTask
  }, React.createElement(Check, {
    size: 14
  }), "\u5B8C\u4E86"), React.createElement("button", {
    className: "btn-ghost",
    onClick: onDoing
  }, React.createElement(Play, {
    size: 13
  }), "\u3084\u3063\u3066\u308B"), React.createElement("button", {
    className: "btn-rose",
    onClick: onStuck
  }, React.createElement(AlertCircle, {
    size: 13
  }), suggestion.fromStuck ? '一歩編集' : suggestion.fromGeneral ? '保留' : '詰まった'), React.createElement("button", {
    className: "btn-sm",
    onClick: onReroll,
    style: {
      marginLeft: 'auto',
      opacity: .65,
      fontSize: 12
    }
  }, React.createElement(RotateCcw, {
    size: 12
  }), "\u5225\u306E\u3092")), (onStartTimer || onStartTally) && React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      marginTop: 10,
      paddingTop: 10,
      borderTop: '1px dashed var(--border)'
    }
  }, onStartTimer && estimateMinutes(t) > 0 && React.createElement("button", {
    className: "btn-ghost",
    onClick: () => onStartTimer({ ...t, general: suggestion.fromGeneral }),
    style: {
      fontSize: 12,
      padding: '6px 12px'
    },
    title: "\u898B\u7A4D\u3082\u308A\u6642\u9593\u3067\u30AB\u30A6\u30F3\u30C8\u30C0\u30A6\u30F3\u958B\u59CB"
  }, "\u23F1 " + estimateMinutes(t) + "\u5206\u3067\u958B\u59CB"), onStartTally && React.createElement("button", {
    className: "btn-ghost",
    onClick: () => onStartTally({ ...t, general: suggestion.fromGeneral }),
    style: {
      fontSize: 12,
      padding: '6px 12px'
    },
    title: "\u4EF6\u6570\u3067\u30AB\u30A6\u30F3\u30C8\u958B\u59CB"
  }, "\uD83D\uDD22 \u4EF6\u6570\u3067\u8A08\u6E2C" + (t.targetCount ? ` (\u524D\u56DE ${t.targetCount}\u4EF6)` : '')), running && running.taskId === t.id && React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--accent)',
      fontWeight: 700,
      alignSelf: 'center'
    }
  }, running.mode === 'tally' ? `\u8A08\u6E2C\u4E2D: ${running.currentCount || 0}/${running.targetCount}\u4EF6` : '\u8A08\u6E2C\u4E2D')));
}
function TaskRow({
  task,
  typeMeta,
  estMeta,
  now,
  onDone,
  onStuck,
  onDoing,
  onTodo,
  onUnstick,
  onRemove,
  onClearTime,
  onSetTime,
  onUpdate,
  muted
}) {
  const {
    useState
  } = React;
  const type = typeMeta(task.type);
  const est = estMeta(task.estimate);
  const isStuck = task.status === 'stuck';
  const isDoing = task.status === 'doing';
  const isDone = task.status === 'done';
  const [editingTime, setEditingTime] = useState(false);
  const [editingTitle, setEditingTitle] = useState(false);
  const [draftTitle, setDraftTitle] = useState(task.title);
  const [hovered, setHovered] = useState(false);
  React.useEffect(() => {
    setDraftTitle(task.title);
  }, [task.title]);
  const commitTitle = () => {
    const title = draftTitle.trim();
    if (title && title !== task.title && onUpdate) onUpdate({
      title
    });else setDraftTitle(task.title);
    setEditingTitle(false);
  };
  return React.createElement("li", {
    style: {
      padding: '10px 6px',
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      background: hovered && !isDone ? 'rgba(108,62,248,.03)' : 'transparent',
      transition: 'background .12s',
      borderRadius: 8,
      margin: '0 -6px'
    },
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, React.createElement("button", {
    onClick: isDone ? onTodo : onDone,
    className: `check-circle${isDone ? ' done' : isStuck ? ' stuck' : ''}`,
    style: {
      marginTop: 1
    },
    title: isDone ? 'クリックで未完に戻す' : '完了にする'
  }, isDone && React.createElement(Check, {
    size: 11,
    color: "#fff"
  }), isDoing && !isDone && React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--accent)',
      display: 'block'
    }
  })), React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, React.createElement("span", {
    className: "tag",
    style: {
      background: type.dot + '18',
      color: type.dot,
      fontSize: 10
    }
  }, type.label), editingTitle ? React.createElement("input", {
    autoFocus: true,
    value: draftTitle,
    onChange: e => setDraftTitle(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') commitTitle();
      if (e.key === 'Escape') {
        setDraftTitle(task.title);
        setEditingTitle(false);
      }
    },
    onBlur: commitTitle,
    className: "inp",
    style: {
      flex: '1 1 12rem',
      minWidth: '9rem',
      padding: '4px 8px',
      fontSize: 13,
      fontWeight: 600
    }
  }) : React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: isDone ? 400 : 600,
      textDecoration: isDone ? 'line-through' : 'none',
      color: muted ? 'var(--text-3)' : isStuck ? 'var(--stuck-fg)' : 'var(--text)',
      textDecorationColor: 'var(--text-3)',
      lineHeight: 1.4
    },
    onDoubleClick: () => setEditingTitle(true),
    title: '\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3067\u30BF\u30B9\u30AF\u540D\u7DE8\u96C6'
  }, task.title), onUpdate && !editingTitle && React.createElement("button", {
    className: "btn-sm",
    onClick: () => setEditingTitle(true),
    style: {
      padding: '2px 6px',
      opacity: .58,
      fontSize: 10
    }
  }, "\u7DE8\u96C6"), task.scheduledTime && !editingTime && React.createElement(TimeBadge, {
    scheduledTime: task.scheduledTime,
    now: now,
    editable: !isDone && !!onClearTime,
    onClear: onClearTime
  }), isDone && task.completedAt && React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'var(--done)',
      fontWeight: 700,
      background: 'rgba(22,163,74,.10)',
      borderRadius: 6,
      padding: '1px 6px',
      marginLeft: 'auto'
    },
    title: '\u5B8C\u4E86\u6642\u523B'
  }, "\u2713 ", formatHHMM(task.completedAt)), React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-3)',
      marginLeft: isDone && task.completedAt ? 0 : 'auto',
      flexShrink: 0,
      fontWeight: 600
    }
  }, est.label)), editingTime && onSetTime && React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, React.createElement("input", {
    type: "time",
    defaultValue: task.scheduledTime || '',
    autoFocus: true,
    onChange: e => {
      onSetTime(e.target.value);
      setEditingTime(false);
    },
    onBlur: () => setEditingTime(false),
    className: "inp",
    style: {
      width: 'auto',
      fontSize: 12,
      padding: '4px 8px'
    }
  })), isStuck && React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 11,
      color: '#9A3412',
      background: '#FFF7ED',
      borderRadius: 8,
      padding: '5px 10px',
      border: '1px solid #FED7AA'
    }
  }, task.stuckReason && React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, "\u8A70\u307E\u308A: ", task.stuckReason), task.tinyStep && React.createElement("div", {
    style: {
      marginTop: 2,
      opacity: .85
    }
  }, "\u2192 \u4E00\u6B69: ", task.tinyStep), React.createElement(StuckProgress, {
    task: task,
    compact: true
  })), !isDone && React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 5,
      flexWrap: 'wrap'
    }
  }, !isStuck && !isDoing && React.createElement("button", {
    className: "btn-sm",
    onClick: onDoing
  }, "\u7740\u624B"), isDoing && React.createElement("button", {
    className: "btn-sm",
    onClick: onTodo
  }, "\u4E2D\u65AD"), !isStuck ? React.createElement("button", {
    className: "btn-sm",
    onClick: onStuck
  }, "\u8A70\u307E\u3063\u305F") : React.createElement(React.Fragment, null, React.createElement("button", {
    className: "btn-sm",
    onClick: onStuck,
    style: {
      color: 'var(--stuck-fg)'
    }
  }, "\u4E00\u6B69\u7DE8\u96C6"), React.createElement("button", {
    className: "btn-sm",
    onClick: onUnstick,
    style: {
      color: 'var(--stuck-fg)'
    }
  }, "\u8A70\u307E\u308A\u89E3\u9664")), !task.scheduledTime && onSetTime && React.createElement("button", {
    className: "btn-sm",
    onClick: () => setEditingTime(true)
  }, "\u6642\u523B\u8A2D\u5B9A"), React.createElement("button", {
    className: "btn-sm",
    onClick: onRemove,
    style: {
      marginLeft: 'auto',
      opacity: .5
    }
  }, "\u524A\u9664"))));
}
function PatientCard({
  patient,
  expanded,
  onToggle,
  onRemove,
  onSetPriority,
  onSetWard,
  onToggleAlert,
  showAlerts = true,
  onRename,
  onMemoChange,
  templates,
  onApplyTemplate,
  quickTasks,
  onApplyQuickTask,
  adding,
  onStartAdd,
  onCancelAdd,
  addForm,
  setAddForm,
  onAddTask,
  onTaskDone,
  onTaskStuck,
  onTaskDoing,
  onTaskTodo,
  onTaskRemove,
  onUnstick,
  onUpdateTask,
  onClearDone,
  typeMeta,
  estMeta,
  now
}) {
  const {
    useState,
    useEffect
  } = React;
  const pri = priMeta(getPri(patient));
  const ward = getWard(patient);
  const open = patient.tasks.filter(t => t.status !== 'done');
  const done = patient.tasks.filter(t => t.status === 'done');
  const activeAlerts = showAlerts ? getPatientAlerts(patient) : [];
  const [editingName, setEditingName] = useState(false);
  const [draftName, setDraftName] = useState(patient.name);
  const [quickOpen, setQuickOpen] = useState(false);
  const [setOpen, setSetOpen] = useState(false);
  useEffect(() => {
    setDraftName(patient.name);
  }, [patient.name]);
  const startEdit = e => {
    e.stopPropagation();
    setDraftName(patient.name);
    setEditingName(true);
  };
  const commitName = () => {
    const n = draftName.trim();
    if (n && n !== patient.name) onRename(n);else setDraftName(patient.name);
    setEditingName(false);
  };
  const sortedOpen = [...open].sort((a, b) => {
    if (a.scheduledTime && !b.scheduledTime) return -1;
    if (!a.scheduledTime && b.scheduledTime) return 1;
    if (a.scheduledTime && b.scheduledTime) return a.scheduledTime.localeCompare(b.scheduledTime);
    return (a.createdAt || 0) - (b.createdAt || 0);
  });
  const allDone = open.length === 0 && patient.tasks.length > 0;
  return React.createElement("div", {
    className: `card ${pri.cls}`,
    style: {
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    onClick: onToggle,
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '13px 16px',
      cursor: 'pointer',
      userSelect: 'none',
      gap: 8,
      background: allDone ? 'rgba(22,163,74,.06)' : 'transparent',
      transition: 'background .15s'
    }
  }, React.createElement("span", {
    style: {
      color: 'var(--text-3)',
      lineHeight: 1,
      flexShrink: 0,
      transition: 'transform .15s',
      transform: expanded ? 'rotate(0deg)' : 'rotate(-90deg)'
    }
  }, React.createElement(ChevronDown, {
    size: 16
  })), editingName ? React.createElement("input", {
    autoFocus: true,
    value: draftName,
    onChange: e => setDraftName(e.target.value),
    onClick: e => e.stopPropagation(),
    onKeyDown: e => {
      if (e.key === 'Enter') commitName();
      if (e.key === 'Escape') {
        setDraftName(patient.name);
        setEditingName(false);
      }
    },
    onBlur: commitName,
    className: "inp",
    style: {
      width: 'auto',
      minWidth: '6rem',
      maxWidth: '12rem',
      padding: '4px 8px',
      fontSize: 14,
      fontWeight: 700,
      fontFamily: 'monospace'
    }
  }) : React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      flex: '1 1 auto',
      minWidth: 0
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'monospace',
      fontWeight: 800,
      fontSize: 15,
      color: 'var(--text)',
      letterSpacing: '.02em',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    onDoubleClick: startEdit,
    title: "\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3067\u540D\u524D\u5909\u66F4"
  }, patient.name), React.createElement("button", {
    onClick: startEdit,
    title: "\u7B26\u4E01\u3092\u5909\u66F4",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 3,
      opacity: .3,
      lineHeight: 1,
      transition: 'opacity .12s'
    },
    onMouseEnter: e => e.currentTarget.style.opacity = 1,
    onMouseLeave: e => e.currentTarget.style.opacity = .3
  }, React.createElement(Pencil, {
    size: 11,
    color: "var(--text-2)"
  }))), activeAlerts.length > 0 && React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      flex: '0 0 auto',
      maxWidth: 52,
      overflow: 'hidden'
    },
    title: activeAlerts.map(alert => alert.label).join(' / ')
  }, activeAlerts.map(alert => React.createElement("span", {
    key: alert.id,
    style: {
      fontSize: 12,
      lineHeight: 1,
      filter: 'drop-shadow(0 1px 1px rgba(0,0,0,.12))'
    }
  }, alert.icon))), React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: allDone ? 'var(--done)' : 'var(--text-3)',
      marginLeft: 4,
      background: allDone ? 'rgba(22,163,74,.12)' : 'transparent',
      padding: allDone ? '2px 8px' : '0',
      borderRadius: allDone ? '99px' : '0'
    }
  }, allDone ? '✓ 完了' : `未 ${open.length}`, done.length > 0 && open.length > 0 && ` / 済 ${done.length}`), React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    title: "\u7D42\u4E86",
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      background: 'rgba(6,182,212,.10)',
      border: '1.5px solid rgba(6,182,212,.28)',
      color: '#0E7490',
      borderRadius: 9,
      cursor: 'pointer',
      padding: '4px 7px',
      fontSize: 11,
      fontWeight: 800,
      lineHeight: 1,
      transition: 'all .12s',
      whiteSpace: 'nowrap'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'rgba(6,182,212,.18)';
      e.currentTarget.style.transform = 'translateY(-1px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'rgba(6,182,212,.10)';
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, React.createElement(BedDouble, {
    size: 13,
    color: "#0E7490"
  }), "\u7D42\u4E86")), expanded && React.createElement("div", {
    style: {
      padding: '0 16px 16px',
      borderTop: '1.5px solid var(--border)'
    }
  }, React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8,
      marginTop: 12,
      marginBottom: 10,
      padding: '10px 12px',
      borderRadius: 12,
      background: 'var(--surface-2)',
      border: '1.5px solid var(--border)'
    },
    onClick: e => e.stopPropagation()
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 6
    }
  }, React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-3)',
      fontWeight: 700,
      minWidth: 42
    }
  }, "\u512A\u5148\u5EA6"), PRIORITIES.map(p => React.createElement("button", {
    key: p.id,
    onClick: () => onSetPriority(p.id),
    title: `\u512A\u5148\u5EA6: ${p.label}`,
    className: "tag",
    style: {
      background: getPri(patient) === p.id ? p.color : 'var(--surface)',
      color: getPri(patient) === p.id ? '#fff' : p.color,
      border: `1.5px solid ${p.color}50`,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 800,
      padding: '4px 10px'
    }
  }, p.label))), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 6
    }
  }, React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-3)',
      fontWeight: 700,
      minWidth: 42
    }
  }, "\u75C5\u68DF"), React.createElement("select", {
    value: ward,
    onChange: e => onSetWard(e.target.value),
    title: "\u75C5\u68DF",
    className: "inp",
    style: {
      width: 'auto',
      minWidth: 104,
      padding: '5px 8px',
      fontSize: 12,
      fontWeight: 800,
      borderRadius: 9
    }
  }, WARDS.map(w => React.createElement("option", {
    key: w.id || 'none',
    value: w.id
  }, w.label))), showAlerts && React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      flexWrap: 'wrap'
    }
  }, PATIENT_ALERTS.map(alert => {
    const active = !!patient.alerts?.[alert.id];
    return React.createElement("button", {
      key: alert.id,
      type: "button",
      onClick: () => onToggleAlert && onToggleAlert(alert.id),
      title: alert.label,
      "aria-pressed": active,
      style: {
        width: 28,
        height: 26,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        border: active ? '1.5px solid rgba(220,38,38,.45)' : '1.5px solid var(--border)',
        background: active ? 'rgba(254,226,226,.95)' : 'var(--surface)',
        cursor: 'pointer',
        fontSize: 14,
        lineHeight: 1,
        opacity: active ? 1 : .42,
        boxShadow: active ? '0 2px 8px rgba(220,38,38,.12)' : 'none'
      }
    }, alert.icon);
  })))), React.createElement("textarea", {
    value: patient.memo || '',
    onChange: e => onMemoChange(e.target.value),
    onClick: e => e.stopPropagation(),
    placeholder: "\u5C0F\u3055\u304F\u30E1\u30E2 (\u4F8B: \u5BB6\u65CF\u9023\u7D61\u6E08\u307F / \u7D50\u679C\u5F85\u3061)",
    rows: 2,
    className: "inp",
    style: {
      marginBottom: 10,
      fontSize: 12,
      lineHeight: 1.45,
      resize: 'vertical',
      minHeight: 48
    }
  }), patient.tasks.length === 0 && !adding && React.createElement("p", {
    style: {
      textAlign: 'center',
      padding: '20px 0',
      fontSize: 12,
      color: 'var(--text-3)'
    }
  }, "\u30BF\u30B9\u30AF\u306A\u3057"), React.createElement("ul", {
    className: "task-list",
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, sortedOpen.map(t => React.createElement(TaskRow, {
    key: t.id,
    task: t,
    typeMeta: typeMeta,
    estMeta: estMeta,
    now: now,
    onDone: () => onTaskDone(t.id),
    onStuck: () => onTaskStuck(t.id),
    onDoing: () => onTaskDoing(t.id),
    onTodo: () => onTaskTodo(t.id),
    onUnstick: () => onUnstick(t.id),
    onRemove: () => onTaskRemove(t.id),
    onUpdate: updates => onUpdateTask(t.id, updates),
    onClearTime: () => onUpdateTask(t.id, {
      scheduledTime: null
    }),
    onSetTime: time => onUpdateTask(t.id, {
      scheduledTime: time || null
    })
  })), done.map(t => React.createElement(TaskRow, {
    key: t.id,
    task: t,
    typeMeta: typeMeta,
    estMeta: estMeta,
    now: now,
    onRemove: () => onTaskRemove(t.id),
    onTodo: () => onTaskTodo(t.id),
    onUpdate: updates => onUpdateTask(t.id, updates),
    muted: true
  }))), done.length > 0 && !adding && React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 4
    }
  }, React.createElement("button", {
    className: "btn-sm",
    onClick: onClearDone,
    style: {
      fontSize: 11,
      color: 'var(--text-3)',
      gap: 4,
      opacity: .7,
      border: '1px solid var(--border)',
      borderRadius: 99,
      padding: '3px 10px'
    }
  }, "\u2715 \u5B8C\u4E86\u6E08\u307F\u3092\u6D88\u53BB (", done.length, ")")), adding ? React.createElement("div", {
    style: {
      marginTop: 12,
      background: 'var(--surface-2)',
      borderRadius: 12,
      padding: 14,
      border: '1.5px solid var(--border)'
    }
  }, React.createElement("input", {
    autoFocus: true,
    value: addForm.title,
    onChange: e => setAddForm({
      ...addForm,
      title: e.target.value
    }),
    onKeyDown: e => {
      if (e.key === 'Enter') onAddTask();
      if (e.key === 'Escape') onCancelAdd();
    },
    placeholder: "\u30BF\u30B9\u30AF\u5185\u5BB9 (Enter\u3067\u8FFD\u52A0)",
    className: "inp",
    style: {
      marginBottom: 10
    }
  }), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 5,
      marginBottom: 10
    }
  }, TASK_TYPES.map(tt => React.createElement("button", {
    key: tt.id,
    onClick: () => setAddForm({
      ...addForm,
      type: tt.id
    }),
    className: "tag",
    style: {
      background: addForm.type === tt.id ? tt.dot : 'var(--surface)',
      color: addForm.type === tt.id ? '#fff' : tt.dot,
      border: `1.5px solid ${tt.dot}40`,
      cursor: 'pointer',
      fontSize: 11,
      padding: '4px 10px',
      transition: 'all .12s',
      boxShadow: addForm.type === tt.id ? `0 3px 10px ${tt.dot}40` : 'none'
    }
  }, tt.label))), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 5,
      alignItems: 'center'
    }
  }, ESTIMATES.map(e => React.createElement("button", {
    key: e.id,
    onClick: () => setAddForm({
      ...addForm,
      estimate: e.id
    }),
    className: "tag",
    style: {
      background: addForm.estimate === e.id ? 'var(--accent)' : 'var(--surface)',
      color: addForm.estimate === e.id ? '#fff' : 'var(--text-2)',
      border: '1.5px solid var(--border)',
      cursor: 'pointer',
      fontSize: 11,
      padding: '4px 10px',
      transition: 'all .12s',
      boxShadow: addForm.estimate === e.id ? '0 3px 10px rgba(108,62,248,.30)' : 'none'
    }
  }, e.label)), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      marginLeft: 4
    }
  }, React.createElement(Clock, {
    size: 12,
    color: "var(--text-3)"
  }), React.createElement("input", {
    type: "time",
    value: addForm.scheduledTime || '',
    onChange: e => setAddForm({
      ...addForm,
      scheduledTime: e.target.value
    }),
    className: "inp",
    style: {
      width: 'auto',
      padding: '3px 8px',
      fontSize: 12
    }
  }), addForm.scheduledTime && React.createElement("button", {
    onClick: () => setAddForm({
      ...addForm,
      scheduledTime: ''
    }),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 2,
      opacity: .6,
      lineHeight: 1
    }
  }, React.createElement(X, {
    size: 12,
    color: "var(--text-2)"
  }))), React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 6
    }
  }, React.createElement("button", {
    className: "btn-sm",
    onClick: onCancelAdd
  }, "\u30AD\u30E3\u30F3\u30BB\u30EB"), React.createElement("button", {
    className: "btn-dark",
    onClick: onAddTask,
    style: {
      padding: '7px 16px',
      fontSize: 12
    }
  }, "\u8FFD\u52A0")))) : React.createElement("button", {
    onClick: onStartAdd,
    style: {
      marginTop: 10,
      width: '100%',
      padding: '9px',
      fontSize: 12,
      background: 'transparent',
      border: '1.5px dashed var(--border-2)',
      borderRadius: 10,
      cursor: 'pointer',
      color: 'var(--text-3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
      transition: 'border-color .12s,color .12s,background .12s',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = 'var(--accent)';
      e.currentTarget.style.color = 'var(--accent)';
      e.currentTarget.style.background = 'rgba(108,62,248,.04)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'var(--border-2)';
      e.currentTarget.style.color = 'var(--text-3)';
      e.currentTarget.style.background = 'transparent';
    }
  }, React.createElement(Plus, {
    size: 13
  }), "\u30BF\u30B9\u30AF\u3092\u8FFD\u52A0"), !adding && React.createElement("div", {
    style: {
      display: 'grid',
      gap: 7,
      marginTop: 10
    }
  }, quickTasks && quickTasks.length > 0 && React.createElement("div", null, React.createElement("button", {
    className: "btn-sm",
    onClick: () => setQuickOpen(v => !v),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 11,
      color: 'var(--text-3)',
      fontWeight: 800,
      border: '1px solid var(--border)',
      borderRadius: 99,
      padding: '4px 10px'
    }
  }, quickOpen ? React.createElement(ChevronDown, {
    size: 12
  }) : React.createElement(ChevronRight, {
    size: 12
  }), "\u3088\u304F\u4F7F\u3046 (", quickTasks.length, ")"), quickOpen && React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      marginTop: 7
    }
  }, quickTasks.map(q => React.createElement("button", {
    key: q.id || q.title,
    className: "set-chip",
    onClick: () => onApplyQuickTask && onApplyQuickTask(q),
    title: "\u3088\u304F\u4F7F\u3046\u30BF\u30B9\u30AF\u3092\u8FFD\u52A0"
  }, "+ ", q.title, React.createElement("span", {
    style: {
      opacity: .55,
      fontSize: 10
    }
  }, q.estimate, "\u5206"))))), templates && templates.length > 0 && React.createElement("div", null, React.createElement("button", {
    className: "btn-sm",
    onClick: () => setSetOpen(v => !v),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 11,
      color: 'var(--text-3)',
      fontWeight: 800,
      border: '1px solid var(--border)',
      borderRadius: 99,
      padding: '4px 10px'
    }
  }, setOpen ? React.createElement(ChevronDown, {
    size: 12
  }) : React.createElement(ChevronRight, {
    size: 12
  }), "\u30BB\u30C3\u30C8 (", templates.length, ")"), setOpen && React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      marginTop: 7
    }
  }, templates.map(tpl => React.createElement("button", {
    key: tpl.id,
    className: "set-chip",
    onClick: () => onApplyTemplate(tpl),
    title: `${tpl.items.length}件のタスクを一括追加`
  }, "+ ", tpl.name, React.createElement("span", {
    style: {
      opacity: .5,
      fontSize: 10
    }
  }, "(", tpl.items.length, ")"))))))));
}
function FocusView({
  patients,
  typeMeta,
  estMeta,
  now,
  onComplete,
  onStuck,
  onDoing,
  onUnstick,
  onStartTimer,
  onStartTally,
  running
}) {
  const allOpen = patients.flatMap(p => p.tasks.filter(t => t.status !== 'done').map(t => ({
    ...t,
    patientId: p.id,
    patientName: p.name,
    patientPriority: getPri(p)
  })));
  const score = t => {
    if (t.status === 'doing') return 1000;
    const ts = timeStatus(t.scheduledTime, now);
    if (ts === 'past') return 900;
    if (ts === 'now') return 800;
    if (ts === 'soon') return 600;
    const pri = t.patientPriority === 'er' ? 140 : t.patientPriority === 'high' ? 100 : t.patientPriority === 'low' ? 10 : 50;
    if (ts === 'upcoming') return 300 + pri;
    return pri;
  };
  const current = [...allOpen].sort((a, b) => score(b) - score(a))[0];
  if (!current) return React.createElement("div", {
    className: "focus-card",
    style: {
      textAlign: 'center'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 40,
      marginBottom: 16
    }
  }, "\uD83C\uDF3F"), React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--text-2)',
      fontFamily: 'var(--font-serif)',
      fontWeight: 500
    }
  }, "\u3059\u3079\u3066\u5B8C\u4E86 \u2014 \u6DF1\u547C\u5438\u3057\u307E\u3057\u3087\u3046"));
  const type = typeMeta(current.type);
  const est = estMeta(current.estimate);
  const pri = priMeta(current.patientPriority);
  return React.createElement("div", {
    className: "focus-card"
  }, React.createElement("p", {
    style: {
      fontSize: 11,
      color: 'var(--accent)',
      marginBottom: 16,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase'
    }
  }, "\u4ECA\u3060\u3051\u3053\u308C"), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      marginBottom: 12,
      flexWrap: 'wrap'
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'monospace',
      fontWeight: 800,
      fontSize: 14,
      color: 'var(--text)'
    }
  }, current.patientName), React.createElement("span", {
    className: "tag",
    style: {
      background: pri.color + '22',
      color: pri.color
    }
  }, "\u512A", pri.label), React.createElement("span", {
    className: "tag",
    style: {
      background: type.dot + '18',
      color: type.dot
    }
  }, type.label), React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-3)',
      fontWeight: 600
    }
  }, est.label), React.createElement(TimeBadge, {
    scheduledTime: current.scheduledTime,
    now: now
  })), React.createElement("p", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      fontFamily: 'var(--font-serif)',
      color: current.status === 'stuck' ? 'var(--stuck-fg)' : 'var(--text)',
      lineHeight: 1.45,
      marginBottom: 20
    }
  }, current.title), current.status === 'stuck' && current.tinyStep && React.createElement("div", {
    style: {
      background: '#FFF7ED',
      borderRadius: 10,
      padding: '12px 16px',
      marginBottom: 20,
      color: '#9A3412',
      fontSize: 13,
      border: '1px solid #FED7AA'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      marginBottom: 4
    }
  }, "\u5C0F\u3055\u306A\u4E00\u6B69:"), current.tinyStep), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, React.createElement("button", {
    className: "btn-green",
    onClick: () => onComplete(current.patientId, current.id)
  }, React.createElement(Check, {
    size: 15
  }), "\u5B8C\u4E86"), current.status !== 'doing' && current.status !== 'stuck' && React.createElement("button", {
    className: "btn-ghost",
    onClick: () => onDoing(current.patientId, current.id)
  }, React.createElement(Play, {
    size: 14
  }), "\u7740\u624B"), current.status !== 'stuck' && React.createElement("button", {
    className: "btn-rose",
    onClick: () => onStuck(current.patientId, current.id)
  }, React.createElement(AlertCircle, {
    size: 14
  }), "\u8A70\u307E\u3063\u305F"), current.status === 'stuck' && React.createElement("button", {
    className: "btn-ghost",
    onClick: () => onUnstick(current.patientId, current.id)
  }, "\u8A70\u307E\u308A\u89E3\u9664")), (onStartTimer || onStartTally) && React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 12,
      paddingTop: 12,
      borderTop: '1px dashed var(--border)'
    }
  }, onStartTimer && estimateMinutes(current) > 0 && React.createElement("button", {
    className: "btn-ghost",
    onClick: () => onStartTimer({ ...current, general: false }),
    style: { fontSize: 12 }
  }, "\u23F1 " + estimateMinutes(current) + "\u5206\u3067\u958B\u59CB"), onStartTally && React.createElement("button", {
    className: "btn-ghost",
    onClick: () => onStartTally({ ...current, general: false }),
    style: { fontSize: 12 }
  }, "\uD83D\uDD22 \u4EF6\u6570\u3067\u8A08\u6E2C" + (current.targetCount ? ` (\u524D\u56DE ${current.targetCount})` : '')), running && running.taskId === current.id && React.createElement("span", {
    style: { fontSize: 11, color: 'var(--accent)', fontWeight: 700, alignSelf: 'center' }
  }, running.mode === 'tally' ? `\u8A08\u6E2C\u4E2D: ${running.currentCount || 0}/${running.targetCount}\u4EF6` : '\u8A08\u6E2C\u4E2D')));
}
function DailyFocusView({
  tasks,
  typeMeta,
  estMeta,
  now,
  onComplete,
  onDoing,
  onHold,
  onExit,
  onStartTimer,
  onStartTally,
  running
}) {
  const priorityMeta = id => DAILY_TASK_PRIORITIES.find(p => p.id === id) || DAILY_TASK_PRIORITIES[2];
  const dueMeta = due => {
    if (!due) return null;
    const today = todayStr();
    if (due < today) return {
      text: '\u671F\u9650 ' + due,
      bg: '#FEE2E2',
      fg: '#B91C1C',
      weight: 220
    };
    if (due === today) return {
      text: '\u4ECA\u65E5\u307E\u3067',
      bg: '#FEF3C7',
      fg: '#92400E',
      weight: 180
    };
    return {
      text: due,
      bg: '#E0F2FE',
      fg: '#0369A1',
      weight: 40
    };
  };
  const score = t => {
    const pri = priorityMeta(t.dailyPriority);
    const due = dueMeta(t.dueDate);
    const est = Number(t.estimate || 5);
    const quickBoost = est <= 5 ? 35 : est <= 10 ? 18 : 0;
    const ts = timeStatus(t.scheduledTime, now);
    const timeBoost = ts === 'past' ? 260 : ts === 'now' ? 230 : ts === 'soon' ? 160 : ts === 'upcoming' ? 60 : 0;
    const statusBoost = t.status === 'doing' ? 1000 : t.status === 'hold' ? -80 : 0;
    return statusBoost + pri.weight * 100 + (due?.weight || 0) + timeBoost + quickBoost - est;
  };
  const current = [...tasks.filter(t => t.status !== 'done')].sort((a, b) => score(b) - score(a))[0];
  if (!current) return React.createElement("div", {
    className: "focus-card",
    style: {
      textAlign: 'center'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 40,
      marginBottom: 16
    }
  }, "\u2728"), React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--text-2)',
      fontFamily: 'var(--font-serif)',
      fontWeight: 500
    }
  }, "\u3059\u3079\u3066\u5B8C\u4E86 \u2014 \u4ECA\u65E5\u306F\u3053\u3053\u307E\u3067\u6574\u3063\u3066\u3044\u307E\u3059"));
  const type = typeMeta(current.type);
  const est = estMeta(current.estimate);
  const pri = priorityMeta(current.dailyPriority);
  const due = dueMeta(current.dueDate);
  return React.createElement("div", {
    className: "focus-card"
  }, React.createElement("p", {
    style: {
      fontSize: 11,
      color: 'var(--accent)',
      marginBottom: 16,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase'
    }
  }, "\u4ECA\u3060\u3051\u3053\u308C"), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      marginBottom: 12,
      flexWrap: 'wrap'
    }
  }, React.createElement("span", {
    className: "tag",
    style: {
      background: pri.color + '22',
      color: pri.color
    }
  }, pri.label), React.createElement("span", {
    className: "tag",
    style: {
      background: type.dot + '18',
      color: type.dot
    }
  }, type.label), React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-3)',
      fontWeight: 600
    }
  }, est.label), due && React.createElement("span", {
    className: "tag",
    style: {
      background: due.bg,
      color: due.fg
    }
  }, due.text), React.createElement(TimeBadge, {
    scheduledTime: current.scheduledTime,
    now: now
  })), React.createElement("p", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      fontFamily: 'var(--font-serif)',
      color: current.status === 'hold' ? 'var(--stuck-fg)' : 'var(--text)',
      lineHeight: 1.45,
      marginBottom: 10
    }
  }, current.title), React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--text-3)',
      margin: '0 0 20px',
      fontWeight: 600
    }
  }, current.status === 'doing' ? '\u3053\u308C\u306F\u3082\u3046\u7740\u624B\u4E2D\u3067\u3059\u3002\u7D42\u308F\u3063\u305F\u3089\u5B8C\u4E86\u306B\u3057\u307E\u3057\u3087\u3046\u3002' : current.status === 'hold' ? '\u4E00\u65E6\u4FDD\u7559\u306B\u3057\u305F\u30BF\u30B9\u30AF\u3067\u3059\u3002\u52D5\u3051\u305D\u3046\u306A\u3089\u7740\u624B\u306B\u623B\u305B\u307E\u3059\u3002' : '\u4ECA\u306E\u4E00\u624B\u306F\u3053\u308C\u3002\u5C0F\u3055\u304F\u7247\u3065\u3051\u307E\u3057\u3087\u3046\u3002'), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, React.createElement("button", {
    className: "btn-green",
    onClick: () => onComplete(current.id)
  }, React.createElement(Check, {
    size: 15
  }), "\u5B8C\u4E86"), current.status !== 'doing' && React.createElement("button", {
    className: "btn-ghost",
    onClick: () => onDoing(current.id)
  }, React.createElement(Play, {
    size: 14
  }), "\u7740\u624B"), current.status !== 'hold' && React.createElement("button", {
    className: "btn-rose",
    onClick: () => onHold(current.id)
  }, React.createElement(AlertCircle, {
    size: 14
  }), "\u4FDD\u7559"), React.createElement("button", {
    className: "btn-ghost",
    onClick: onExit
  }, "\u4E00\u89A7\u3092\u898B\u308B")), (onStartTimer || onStartTally) && React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 12,
      paddingTop: 12,
      borderTop: '1px dashed var(--border)'
    }
  }, onStartTimer && estimateMinutes(current) > 0 && React.createElement("button", {
    className: "btn-ghost",
    onClick: () => onStartTimer({ ...current, general: true }),
    style: { fontSize: 12 }
  }, "\u23F1 " + estimateMinutes(current) + "\u5206\u3067\u958B\u59CB"), onStartTally && React.createElement("button", {
    className: "btn-ghost",
    onClick: () => onStartTally({ ...current, general: true }),
    style: { fontSize: 12 }
  }, "\uD83D\uDD22 \u4EF6\u6570\u3067\u8A08\u6E2C" + (current.targetCount ? ` (\u524D\u56DE ${current.targetCount})` : '')), running && running.taskId === current.id && React.createElement("span", {
    style: { fontSize: 11, color: 'var(--accent)', fontWeight: 700, alignSelf: 'center' }
  }, running.mode === 'tally' ? `\u8A08\u6E2C\u4E2D: ${running.currentCount || 0}/${running.targetCount}\u4EF6` : '\u8A08\u6E2C\u4E2D')));
}
function GeneralTaskSection({
  tasks,
  open,
  onToggleOpen,
  form,
  setForm,
  onAdd,
  onUpdate,
  onRemove,
  onClearDone,
  onQuickAdd,
  quickTasks,
  quickOpen,
  onToggleQuick,
  setOpen = false,
  onToggleSet,
  templateSets = [],
  onApplySet,
  typeMeta,
  estMeta,
  now,
  dailyMode = false
}) {
  const [editingTaskId, setEditingTaskId] = React.useState(null);
  const [draftTaskTitle, setDraftTaskTitle] = React.useState('');
  const dailyPriorityMeta = id => DAILY_TASK_PRIORITIES.find(p => p.id === id) || DAILY_TASK_PRIORITIES[2];
  const taskTypes = dailyMode ? DAILY_TASK_TYPES : GENERAL_TASK_TYPES;
  const formDefaultType = dailyMode ? 'home' : 'docs';
  const startTitleEdit = task => {
    setEditingTaskId(task.id);
    setDraftTaskTitle(task.title);
  };
  const commitTitleEdit = task => {
    const title = draftTaskTitle.trim();
    if (title && title !== task.title) onUpdate(task.id, {
      title
    });
    setEditingTaskId(null);
    setDraftTaskTitle('');
  };
  const presets = quickTasks || (dailyMode ? QUICK_DAILY_TASKS : QUICK_GENERAL_TASKS);
  const openTasks = tasks.filter(t => t.status !== 'done');
  const doneTasks = tasks.filter(t => t.status === 'done');
  const sortedOpen = [...openTasks].sort((a, b) => {
    if (a.dueDate && !b.dueDate) return -1;
    if (!a.dueDate && b.dueDate) return 1;
    if (a.dueDate && b.dueDate) return a.dueDate.localeCompare(b.dueDate);
    if (dailyMode) {
      const pa = dailyPriorityMeta(a.dailyPriority).weight;
      const pb = dailyPriorityMeta(b.dailyPriority).weight;
      if (pa !== pb) return pb - pa;
    }
    const stateA = a.status === 'doing' ? 0 : a.status === 'hold' ? 2 : 1;
    const stateB = b.status === 'doing' ? 0 : b.status === 'hold' ? 2 : 1;
    return stateA !== stateB ? stateA - stateB : (a.createdAt || 0) - (b.createdAt || 0);
  });
  const dueLabel = due => {
    if (!due) return null;
    const today = todayStr();
    if (due < today) return {
      text: '期限 ' + due,
      bg: '#FEE2E2',
      fg: '#991B1B'
    };
    if (due === today) return {
      text: '今日まで',
      bg: '#FEF3C7',
      fg: '#92400E'
    };
    return {
      text: due,
      bg: '#EDE9FE',
      fg: '#4C1D95'
    };
  };
  const row = task => {
    const type = typeMeta(task.type);
    const est = estMeta(task.estimate);
    const dailyPriority = dailyPriorityMeta(task.dailyPriority);
    const due = dueLabel(task.dueDate);
    const isDone = task.status === 'done';
    const isDoing = task.status === 'doing';
    const isHold = task.status === 'hold';
    return React.createElement("li", {
      key: task.id,
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start',
        padding: '10px 6px',
        borderRadius: 8,
        background: isHold ? 'rgba(148,163,184,.08)' : 'transparent',
        margin: '0 -6px'
      }
    }, React.createElement("button", {
      onClick: () => onUpdate(task.id, {
        status: isDone ? 'todo' : 'done',
        completedAt: isDone ? null : Date.now()
      }),
      className: 'check-circle' + (isDone ? ' done' : ''),
      style: {
        marginTop: 1
      },
      title: isDone ? '未完了に戻す' : '完了にする'
    }, isDone && React.createElement(Check, {
      size: 11,
      color: "#fff"
    }), isDoing && !isDone && React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--accent)',
        display: 'block'
      }
    })), React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        flexWrap: 'wrap'
      }
    }, React.createElement("span", {
      className: "tag",
      style: {
        background: type.dot + '18',
        color: type.dot,
        fontSize: 10
      }
    }, type.label), dailyMode && React.createElement("span", {
      className: "tag",
      style: {
        background: dailyPriority.color + '18',
        color: dailyPriority.color,
        fontSize: 10,
        border: '1px solid ' + dailyPriority.color + '35'
      }
    }, dailyPriority.label), editingTaskId === task.id ? React.createElement("input", {
      autoFocus: true,
      value: draftTaskTitle,
      onChange: e => setDraftTaskTitle(e.target.value),
      onKeyDown: e => {
        if (e.key === 'Enter') commitTitleEdit(task);
        if (e.key === 'Escape') {
          setEditingTaskId(null);
          setDraftTaskTitle('');
        }
      },
      className: "inp",
      style: {
        flex: '1 1 12rem',
        minWidth: '9rem',
        padding: '4px 8px',
        fontSize: 13,
        fontWeight: 600
      }
    }) : React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: isDone ? 400 : 650,
        lineHeight: 1.45,
        color: isDone || isHold ? 'var(--text-3)' : 'var(--text)',
        textDecoration: isDone ? 'line-through' : 'none',
        textDecorationColor: 'var(--text-3)'
      },
      onDoubleClick: () => startTitleEdit(task),
      title: '\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3067\u30BF\u30B9\u30AF\u540D\u7DE8\u96C6'
    }, task.title), editingTaskId !== task.id && React.createElement("button", {
      className: "btn-sm",
      onClick: () => startTitleEdit(task),
      style: {
        padding: '2px 6px',
        opacity: .58,
        fontSize: 10
      }
    }, "\u7DE8\u96C6"), due && React.createElement("span", {
      className: "time-tag",
      style: {
        background: due.bg,
        color: due.fg
      }
    }, due.text), isDone && task.completedAt && React.createElement("span", {
      style: {
        fontSize: 10,
        color: 'var(--done)',
        fontWeight: 700,
        background: 'rgba(22,163,74,.10)',
        borderRadius: 6,
        padding: '1px 6px',
        marginLeft: 'auto'
      },
      title: '\u5B8C\u4E86\u6642\u523B'
    }, "\u2713 ", formatHHMM(task.completedAt)), React.createElement("span", {
      style: {
        fontSize: 11,
      color: 'var(--text-3)',
      fontWeight: 600,
      marginLeft: isDone && task.completedAt ? 0 : 'auto'
    }
    }, est.label)), editingTaskId === task.id && React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginTop: 5,
        flexWrap: 'wrap'
      }
    }, React.createElement("select", {
      value: task.type || formDefaultType,
      onChange: e => onUpdate(task.id, {
        type: e.target.value
      }),
      className: "inp",
      style: {
        width: 'auto',
        padding: '3px 8px',
        fontSize: 11
      },
      title: "カテゴリを変更"
    }, taskTypes.map(tt => React.createElement("option", {
      key: tt.id,
      value: tt.id
    }, tt.label))), dailyMode && React.createElement("select", {
      value: task.dailyPriority || 'normal',
      onChange: e => onUpdate(task.id, {
        dailyPriority: e.target.value
      }),
      className: "inp",
      style: {
        width: 'auto',
        padding: '3px 8px',
        fontSize: 11
      },
      title: "緊急度を変更"
    }, DAILY_TASK_PRIORITIES.map(pri => React.createElement("option", {
      key: pri.id,
      value: pri.id
    }, pri.label))), React.createElement("select", {
      value: task.estimate || '5',
      onChange: e => onUpdate(task.id, {
        estimate: e.target.value
      }),
      className: "inp",
      style: {
        width: 'auto',
        padding: '3px 8px',
        fontSize: 11
      },
      title: "目安時間を変更"
    }, ESTIMATES.map(es => React.createElement("option", {
      key: es.id,
      value: es.id
    }, es.label))), React.createElement("input", {
      type: "date",
      value: task.dueDate || '',
      onChange: e => onUpdate(task.id, {
        dueDate: e.target.value || null
      }),
      className: "inp",
      style: {
        width: 'auto',
        padding: '3px 8px',
        fontSize: 11
      },
      title: "期限を変更"
    }), React.createElement("button", {
      className: "btn-sm",
      onClick: () => commitTitleEdit(task),
      style: {
        marginLeft: 'auto',
        color: 'var(--accent)'
      }
    }, "完了")), !isDone && React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginTop: 5,
        flexWrap: 'wrap'
      }
    }, task.status !== 'doing' && React.createElement("button", {
      className: "btn-sm",
      onClick: () => onUpdate(task.id, {
        status: 'doing'
      })
    }, "\u7740\u624B"), task.status === 'doing' && React.createElement("button", {
      className: "btn-sm",
      onClick: () => onUpdate(task.id, {
        status: 'todo'
      })
    }, "\u4E2D\u65AD"), task.status !== 'hold' ? React.createElement("button", {
      className: "btn-sm",
      onClick: () => onUpdate(task.id, {
        status: 'hold'
      })
    }, "\u4FDD\u7559") : React.createElement("button", {
      className: "btn-sm",
      onClick: () => onUpdate(task.id, {
        status: 'todo'
      })
    }, "\u623B\u3059"), React.createElement("button", {
      className: "btn-sm",
      onClick: () => onRemove(task.id),
      style: {
        marginLeft: 'auto',
        opacity: .55
      }
    }, "\u524A\u9664"))));
  };
  return React.createElement("div", {
    className: "card",
    style: {
      marginTop: dailyMode ? 0 : 22,
      overflow: 'hidden',
      borderLeft: dailyMode ? '5px solid #16A34A' : '5px solid #94A3B8'
    }
  }, React.createElement("div", {
    onClick: onToggleOpen,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '13px 16px',
      cursor: 'pointer',
      userSelect: 'none',
      background: 'rgba(148,163,184,.07)'
    }
  }, React.createElement("span", {
    style: {
      color: 'var(--text-3)',
      lineHeight: 1,
      flexShrink: 0,
      transition: 'transform .15s',
      transform: open ? 'rotate(0deg)' : 'rotate(-90deg)'
    }
  }, React.createElement(ChevronDown, {
    size: 16
  })), React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 15,
      color: 'var(--text)',
      fontFamily: 'var(--font-serif)'
    }
  }, dailyMode ? "\u65E5\u5E38\u30BF\u30B9\u30AF" : "\u3059\u304D\u307E\u30BF\u30B9\u30AF"), React.createElement("span", {
    className: "tag",
    style: {
      background: 'rgba(148,163,184,.16)',
      color: 'var(--text-2)'
    }
  }, dailyMode ? "\u3067\u3044\u3068\u308A" : "\u60A3\u8005\u5916")), React.createElement("p", {
    style: {
      fontSize: 11,
      color: 'var(--text-3)',
      margin: '3px 0 0',
      fontWeight: 600
    }
  }, dailyMode ? "\u751F\u6D3B\u306E\u7528\u4E8B\u3092\u3053\u3053\u306B\u5165\u308C\u3066\u3001\u4ECA\u3067\u304D\u308B\u4E00\u624B\u306B\u5206\u3051\u308B" : "\u60A3\u8005\u30BF\u30B9\u30AF\u304C\u843D\u3061\u7740\u3044\u305F\u6642\u306B\u62FE\u3046\u4F4E\u512A\u5148\u306E\u68DA")), React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: openTasks.length ? 'var(--text-2)' : 'var(--done)',
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 99,
      padding: '3px 9px'
    }
  }, "\u672A ", openTasks.length, doneTasks.length > 0 && ' / 済 ' + doneTasks.length)), open && React.createElement("div", {
    style: {
      padding: '0 16px 16px',
      borderTop: '1.5px solid var(--border)'
    }
  }, tasks.length === 0 && React.createElement("p", {
    style: {
      textAlign: 'center',
      padding: '18px 0',
      fontSize: 12,
      color: 'var(--text-3)'
    }
  }, dailyMode ? "\u3053\u3053\u304C\u3067\u3044\u3068\u308A\u306E\u672C\u4F53\u3002\u307E\u305A1\u3064\u66F8\u3044\u3066\u307F\u307E\u3057\u3087\u3046" : "\u30EC\u30BB\u30D7\u30C8\u3001\u7D39\u4ECB\u72B6\u3001\u81EA\u5DF1\u7814\u947D\u306A\u3069\u3092\u3053\u3053\u306B\u7F6E\u3051\u307E\u3059"), React.createElement("ul", {
    className: "task-list",
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, sortedOpen.map(row), doneTasks.map(row)), doneTasks.length > 0 && React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 4
    }
  }, React.createElement("button", {
    className: "btn-sm",
    onClick: onClearDone,
    style: {
      fontSize: 11,
      color: 'var(--text-3)',
      gap: 4,
      opacity: .7,
      border: '1px solid var(--border)',
      borderRadius: 99,
      padding: '3px 10px'
    }
  }, "\u5B8C\u4E86\u6E08\u307F\u3092\u6D88\u3059 (", doneTasks.length, ")")), React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, React.createElement("button", {
    className: "btn-sm",
    onClick: onToggleQuick,
    style: {
      fontSize: 11,
      color: 'var(--text-3)',
      fontWeight: 800,
      border: '1px solid var(--border)',
      borderRadius: 99,
      padding: '4px 10px'
    }
  }, quickOpen ? React.createElement(ChevronDown, {
    size: 12
  }) : React.createElement(ChevronRight, {
    size: 12
  }), "\u3088\u304F\u4F7F\u3046 (", presets.length, ")"), quickOpen && React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-3)',
      fontWeight: 700,
      marginRight: 2
    }
  }, "\u8FFD\u52A0:"), quickOpen && presets.map(q => {
    const type = typeMeta(q.type);
    return React.createElement("button", {
      key: q.id || q.title,
      className: "set-chip",
      onClick: () => onQuickAdd(q),
      title: q.title + 'を追加',
      style: {
        borderColor: type.dot + '55',
        color: type.dot,
        background: type.dot + '10'
      }
    }, "+ ", q.title, " ", React.createElement("span", {
      style: {
        opacity: .58,
        fontSize: 10
      }
    }, q.estimate, "\u5206"));
  })), templateSets.length > 0 && React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, React.createElement("button", {
    className: "btn-sm",
    onClick: onToggleSet,
    style: {
      fontSize: 11,
      color: 'var(--text-3)',
      fontWeight: 800,
      border: '1px solid var(--border)',
      borderRadius: 99,
      padding: '4px 10px'
    }
  }, setOpen ? React.createElement(ChevronDown, {
    size: 12
  }) : React.createElement(ChevronRight, {
    size: 12
  }), "セット (", templateSets.length, ")"), setOpen && React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-3)',
      fontWeight: 700,
      marginRight: 2
    }
  }, "展開:"), setOpen && templateSets.map(set => React.createElement("button", {
    key: set.id || set.name,
    className: "set-chip",
    onClick: () => onApplySet && onApplySet(set),
    title: set.name + 'を展開'
  }, "+ ", set.name, " ", React.createElement("span", {
    style: {
      opacity: .58,
      fontSize: 10
    }
  }, set.items?.length || 0, "件")))), React.createElement("div", {
    style: {
      marginTop: 10,
      background: 'var(--surface-2)',
      borderRadius: 12,
      padding: 14,
      border: '1.5px solid var(--border)'
    }
  }, React.createElement("input", {
    value: form.title || '',
    onChange: e => setForm({
      ...form,
      title: e.target.value
    }),
    onKeyDown: e => {
      if (e.key === 'Enter') onAdd();
    },
    placeholder: dailyMode ? "\u65E5\u5E38\u30BF\u30B9\u30AF\u3092\u8FFD\u52A0 (\u4F8B: \u6D17\u6FEF\u6A5F\u3092\u56DE\u3059\u3001LINE\u8FD4\u3059\u3001\u85AC\u98F2\u3080)" : "\u3059\u304D\u307E\u30BF\u30B9\u30AF\u3092\u8FFD\u52A0 (\u4F8B: \u8FD4\u623B\u78BA\u8A8D\u3001\u7D39\u4ECB\u72B6\u4E0B\u66F8\u304D)",
    className: "inp",
    style: {
      marginBottom: 10
    }
  }), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 5,
      marginBottom: 10
    }
  }, taskTypes.map(tt => React.createElement("button", {
    key: tt.id,
    onClick: () => setForm({
      ...form,
      type: tt.id
    }),
    className: "tag",
    style: {
      background: (form.type || formDefaultType) === tt.id ? tt.dot : 'var(--surface)',
      color: (form.type || formDefaultType) === tt.id ? '#fff' : tt.dot,
      border: '1.5px solid ' + tt.dot + '40',
      cursor: 'pointer',
      fontSize: 11,
      padding: '4px 10px',
      transition: 'all .12s',
      boxShadow: (form.type || formDefaultType) === tt.id ? '0 3px 10px ' + tt.dot + '40' : 'none'
    }
  }, tt.label))), dailyMode && React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 5,
      marginBottom: 10
    }
  }, DAILY_TASK_PRIORITIES.map(pri => React.createElement("button", {
    key: pri.id,
    onClick: () => setForm({
      ...form,
      dailyPriority: pri.id
    }),
    className: "tag",
    style: {
      background: (form.dailyPriority || 'normal') === pri.id ? pri.color : 'var(--surface)',
      color: (form.dailyPriority || 'normal') === pri.id ? '#fff' : pri.color,
      border: '1.5px solid ' + pri.color + '40',
      cursor: 'pointer',
      fontSize: 11,
      padding: '4px 10px',
      transition: 'all .12s',
      boxShadow: (form.dailyPriority || 'normal') === pri.id ? '0 3px 10px ' + pri.color + '40' : 'none'
    }
  }, pri.label))), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 5,
      alignItems: 'center'
    }
  }, ESTIMATES.map(e => React.createElement("button", {
    key: e.id,
    onClick: () => setForm({
      ...form,
      estimate: e.id
    }),
    className: "tag",
    style: {
      background: (form.estimate || '5') === e.id ? 'var(--accent)' : 'var(--surface)',
      color: (form.estimate || '5') === e.id ? '#fff' : 'var(--text-2)',
      border: '1.5px solid var(--border)',
      cursor: 'pointer',
      fontSize: 11,
      padding: '4px 10px',
      transition: 'all .12s',
      boxShadow: (form.estimate || '5') === e.id ? '0 3px 10px rgba(108,62,248,.30)' : 'none'
    }
  }, e.label)), React.createElement("input", {
    type: "date",
    value: form.dueDate || '',
    onChange: e => setForm({
      ...form,
      dueDate: e.target.value
    }),
    className: "inp",
    style: {
      width: 'auto',
      padding: '3px 8px',
      fontSize: 12,
      marginLeft: 4
    }
  }), form.dueDate && React.createElement("button", {
    onClick: () => setForm({
      ...form,
      dueDate: ''
    }),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 2,
      opacity: .6,
      lineHeight: 1
    }
  }, React.createElement(X, {
    size: 12,
    color: "var(--text-2)"
  })), React.createElement("button", {
    className: "btn-dark",
    onClick: onAdd,
    style: {
      marginLeft: 'auto',
      padding: '7px 16px',
      fontSize: 12
    }
  }, React.createElement(Plus, {
    size: 13
  }), "\u8FFD\u52A0")))));
}
function GasConfigDialog({
  config,
  onSave,
  onCancel
}) {
  const {
    useState
  } = React;
  const [url, setUrl] = useState(config.url || '');
  const [secret, setSecret] = useState(config.secret || '');
  return React.createElement("div", {
    className: "dialog-bg",
    onClick: onCancel
  }, React.createElement("div", {
    className: "dialog",
    onClick: e => e.stopPropagation()
  }, React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--text)',
      margin: '0 0 6px'
    }
  }, "Google Apps Script \u8A2D\u5B9A"), React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--text-3)',
      margin: '0 0 18px',
      lineHeight: 1.7
    }
  }, "GAS\u3092\u30C7\u30D7\u30ED\u30A4\u3057\u3066\u767A\u884C\u3055\u308C\u305FURL\u3068\u3001\u30B3\u30FC\u30C9\u5185\u306ESECRET\u3068\u540C\u3058\u5024\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u3053\u306E\u7AEF\u672B\u306ElocalStorage\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002"), React.createElement("label", {
    style: {
      fontSize: 12,
      color: 'var(--text-2)',
      fontWeight: 700,
      display: 'block',
      marginBottom: 5
    }
  }, "GAS\u30A6\u30A7\u30D6\u30A2\u30D7\u30EAURL"), React.createElement("input", {
    value: url,
    onChange: e => setUrl(e.target.value),
    placeholder: "https://script.google.com/macros/s/XXXXX/exec",
    className: "inp",
    style: {
      marginBottom: 14,
      fontFamily: 'monospace',
      fontSize: 12
    }
  }), React.createElement("label", {
    style: {
      fontSize: 12,
      color: 'var(--text-2)',
      fontWeight: 700,
      display: 'block',
      marginBottom: 5
    }
  }, "\u30B7\u30FC\u30AF\u30EC\u30C3\u30C8\u30AD\u30FC"), React.createElement("input", {
    value: secret,
    onChange: e => setSecret(e.target.value),
    type: "password",
    placeholder: "GAS\u30B3\u30FC\u30C9\u306ESECRET\u3068\u540C\u3058\u5024",
    className: "inp",
    style: {
      marginBottom: 14
    }
  }), React.createElement("div", {
    style: {
      background: 'var(--surface-2)',
      borderRadius: 10,
      padding: '10px 14px',
      marginBottom: 18,
      fontSize: 12,
      color: 'var(--text-2)',
      border: '1px solid var(--border)'
    }
  }, React.createElement("strong", null, "\u30C7\u30D7\u30ED\u30A4\u8A2D\u5B9A:"), " \u5B9F\u884C\u30E6\u30FC\u30B6\u30FC: \u81EA\u5206 / \u30A2\u30AF\u30BB\u30B9: ", React.createElement("strong", null, "\u5168\u54E1(\u533F\u540D)")), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end'
    }
  }, React.createElement("button", {
    className: "btn-sm",
    onClick: onCancel,
    style: {
      fontSize: 13
    }
  }, "\u30AD\u30E3\u30F3\u30BB\u30EB"), React.createElement("button", {
    className: "btn-dark",
    onClick: () => onSave({
      url: url.trim(),
      secret: secret.trim()
    }),
    disabled: !url.trim() || !secret.trim(),
    style: {
      opacity: !url.trim() || !secret.trim() ? .4 : 1
    }
  }, "\u4FDD\u5B58"))));
}
function StuckDialog({
  form,
  setForm,
  onSave,
  onCancel
}) {
  return React.createElement("div", {
    className: "dialog-bg",
    onClick: onCancel
  }, React.createElement("div", {
    className: "dialog",
    onClick: e => e.stopPropagation()
  }, React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--text)',
      margin: '0 0 6px'
    }
  }, "\u8A70\u307E\u308A\u3092\u5916\u5728\u5316\u3059\u308B"), React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--text-3)',
      margin: '0 0 18px',
      lineHeight: 1.7
    }
  }, "\u66F8\u304D\u51FA\u3059\u3060\u3051\u3067\u8133\u306E\u8CA0\u8377\u304C\u6E1B\u308A\u307E\u3059\u3002\u7A7A\u6B04\u3067\u3082OK\u3002"), React.createElement("label", {
    style: {
      fontSize: 12,
      color: 'var(--text-2)',
      fontWeight: 700,
      display: 'block',
      marginBottom: 5
    }
  }, "\u306A\u305C\u8A70\u307E\u3063\u3066\u308B?"), React.createElement("input", {
    value: form.reason,
    onChange: e => setForm({
      ...form,
      reason: e.target.value
    }),
    placeholder: "\u4F8B: \u5BB6\u65CF\u306E\u9023\u7D61\u5148\u308F\u304B\u3089\u3093 / \u4E0A\u7D1A\u533B\u306B\u805E\u304D\u305F\u3044",
    className: "inp",
    style: {
      marginBottom: 14
    }
  }), React.createElement("label", {
    style: {
      fontSize: 12,
      color: 'var(--text-2)',
      fontWeight: 700,
      display: 'block',
      marginBottom: 5
    }
  }, "2\u5206\u4EE5\u5185\u3067\u3067\u304D\u308B\u6B21\u306E\u4E00\u6B69\u306F?"), React.createElement("input", {
    value: form.tinyStep,
    onChange: e => setForm({
      ...form,
      tinyStep: e.target.value
    }),
    placeholder: "\u4F8B: \u30AB\u30EB\u30C6\u3067\u5BB6\u65CF\u9023\u7D61\u5148\u3092\u63A2\u3059\u3060\u3051",
    className: "inp",
    style: {
      marginBottom: 14
    }
  }), React.createElement("label", {
    style: {
      fontSize: 12,
      color: 'var(--text-2)',
      fontWeight: 700,
      display: 'block',
      marginBottom: 7
    }
  }, "\u898B\u901A\u3057"), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 18,
      flexWrap: 'wrap'
    }
  }, STUCK_STEP_GOALS.map(goal => React.createElement("button", {
    key: goal,
    type: "button",
    className: `btn-ghost${Number(form.stepGoal || 3) === goal ? ' btn-ghost-active' : ''}`,
    onClick: () => setForm({
      ...form,
      stepGoal: goal
    }),
    style: {
      padding: '6px 13px',
      fontSize: 12
    }
  }, goal))), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end'
    }
  }, React.createElement("button", {
    className: "btn-sm",
    onClick: onCancel,
    style: {
      fontSize: 13
    }
  }, "\u30AD\u30E3\u30F3\u30BB\u30EB"), React.createElement("button", {
    className: "btn-dark",
    onClick: onSave
  }, "\u4FDD\u5B58"))));
}
function ImportDialog({
  text,
  setText,
  onImportText,
  onImportFile,
  onCancel
}) {
  return React.createElement("div", {
    className: "dialog-bg",
    onClick: onCancel
  }, React.createElement("div", {
    className: "dialog",
    onClick: e => e.stopPropagation()
  }, React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--text)',
      margin: '0 0 6px'
    }
  }, "\u30C7\u30FC\u30BF\u30A4\u30F3\u30DD\u30FC\u30C8"), React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--text-3)',
      margin: '0 0 16px'
    }
  }, "JSON\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3059\u308B\u304B\u3001\u30C6\u30AD\u30B9\u30C8\u3092\u8CBC\u308A\u4ED8\u3051\u3066\u304F\u3060\u3055\u3044\u3002"), React.createElement("label", {
    style: {
      display: 'block',
      marginBottom: 14,
      padding: '14px',
      borderRadius: 12,
      border: '2px dashed var(--border-2)',
      cursor: 'pointer',
      textAlign: 'center',
      fontSize: 12,
      color: 'var(--text-3)',
      transition: 'border-color .12s,color .12s',
      fontWeight: 600
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = 'var(--accent)';
      e.currentTarget.style.color = 'var(--accent)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'var(--border-2)';
      e.currentTarget.style.color = 'var(--text-3)';
    }
  }, React.createElement("input", {
    type: "file",
    accept: ".json,application/json",
    style: {
      display: 'none'
    },
    onChange: e => {
      const f = e.target.files?.[0];
      if (f) onImportFile(f);
    }
  }), "\uD83D\uDCC1 \u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E"), React.createElement("label", {
    style: {
      fontSize: 12,
      color: 'var(--text-2)',
      fontWeight: 700,
      display: 'block',
      marginBottom: 5
    }
  }, "\u307E\u305F\u306F JSON\u30C6\u30AD\u30B9\u30C8\u3092\u8CBC\u308A\u4ED8\u3051:"), React.createElement("textarea", {
    value: text,
    onChange: e => setText(e.target.value),
    placeholder: "{\"patients\": [...], \"stats\": {...}}",
    rows: 5,
    className: "inp",
    style: {
      resize: 'none',
      fontFamily: 'monospace',
      fontSize: 11,
      marginBottom: 16
    }
  }), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end'
    }
  }, React.createElement("button", {
    className: "btn-sm",
    onClick: onCancel,
    style: {
      fontSize: 13
    }
  }, "\u30AD\u30E3\u30F3\u30BB\u30EB"), React.createElement("button", {
    className: "btn-dark",
    onClick: onImportText,
    disabled: !text.trim(),
    style: {
      opacity: !text.trim() ? .4 : 1
    }
  }, "\u8AAD\u307F\u8FBC\u3080"))));
}
function TemplatesSection({
  templates,
  onAddTemplate,
  onUpdateTemplate,
  onDeleteTemplate,
  onAddItem,
  onUpdateItem,
  onRemoveItem
}) {
  const inpStyle = {
    background: 'var(--surface)',
    border: '1.5px solid var(--border)',
    borderRadius: 8,
    padding: '5px 10px',
    fontSize: 12,
    color: 'var(--text)',
    fontFamily: 'var(--font-sans)',
    outline: 'none'
  };
  return React.createElement("div", {
    style: {
      marginTop: 10,
      background: 'var(--surface)',
      border: '1.5px solid var(--border)',
      borderRadius: 14,
      padding: 16,
      fontSize: 12
    }
  }, React.createElement("p", {
    style: {
      color: 'var(--text-3)',
      marginBottom: 12,
      lineHeight: 1.7
    }
  }, "\u3088\u304F\u4F7F\u3046\u30BF\u30B9\u30AF\u30BB\u30C3\u30C8\u3092\u5B9A\u7FA9\u3057\u3066\u304A\u304F\u3068\u3001\u60A3\u8005\u30AB\u30FC\u30C9\u306E\u300C\u30BB\u30C3\u30C8:\u300D\u304B\u3089\u4E00\u767A\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002"), templates.length === 0 && React.createElement("p", {
    style: {
      color: 'var(--text-3)',
      padding: '8px 0'
    }
  }, "\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306F\u3042\u308A\u307E\u305B\u3093"), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, templates.map(tpl => React.createElement("div", {
    key: tpl.id,
    style: {
      background: 'var(--surface-2)',
      borderRadius: 10,
      padding: 12,
      border: '1px solid var(--border)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      marginBottom: 10,
      alignItems: 'center'
    }
  }, React.createElement("input", {
    value: tpl.name,
    onChange: e => onUpdateTemplate(tpl.id, {
      name: e.target.value
    }),
    style: {
      ...inpStyle,
      flex: 1,
      fontSize: 13,
      fontWeight: 700
    }
  }), React.createElement("button", {
    onClick: () => onDeleteTemplate(tpl.id),
    className: "btn-sm",
    style: {
      color: 'var(--stuck-fg)'
    }
  }, "\u524A\u9664")), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, tpl.items.map((item, idx) => React.createElement("div", {
    key: idx,
    style: {
      display: 'flex',
      gap: 5,
      alignItems: 'center'
    }
  }, React.createElement("input", {
    value: item.title,
    onChange: e => onUpdateItem(tpl.id, idx, {
      title: e.target.value
    }),
    placeholder: "\u30BF\u30B9\u30AF\u540D",
    style: {
      ...inpStyle,
      flex: 1,
      minWidth: 0
    }
  }), React.createElement("select", {
    value: item.type || 'other',
    onChange: e => onUpdateItem(tpl.id, idx, {
      type: e.target.value
    }),
    style: {
      ...inpStyle,
      flexShrink: 0
    }
  }, TASK_TYPES.map(tt => React.createElement("option", {
    key: tt.id,
    value: tt.id
  }, tt.label))), React.createElement("select", {
    value: item.estimate || '5',
    onChange: e => onUpdateItem(tpl.id, idx, {
      estimate: e.target.value
    }),
    style: {
      ...inpStyle,
      flexShrink: 0
    }
  }, ESTIMATES.map(es => React.createElement("option", {
    key: es.id,
    value: es.id
  }, es.label))), React.createElement("button", {
    onClick: () => onRemoveItem(tpl.id, idx),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 3,
      opacity: .5,
      lineHeight: 1
    }
  }, React.createElement(X, {
    size: 13,
    color: "#EF4444"
  }))))), React.createElement("button", {
    className: "btn-sm",
    onClick: () => onAddItem(tpl.id),
    style: {
      marginTop: 7,
      color: 'var(--accent)'
    }
  }, "+ \u30A2\u30A4\u30C6\u30E0\u8FFD\u52A0")))), React.createElement("button", {
    className: "btn-ghost",
    onClick: onAddTemplate,
    style: {
      marginTop: 12,
      width: '100%',
      justifyContent: 'center',
      fontSize: 12,
      padding: '9px 14px'
    }
  }, React.createElement(Plus, {
    size: 13
  }), "\u65B0\u898F\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8"));
}
function ScheduledEventSection({
  events,
  open,
  onToggleOpen,
  form,
  setForm,
  onAdd,
  onUpdate,
  onRemove,
  onClearDone,
  now
}) {
  const activeEvents = events.filter(e => e.status !== 'done');
  const doneEvents = events.filter(e => e.status === 'done');
  const sorted = [...activeEvents].sort((a, b) => (a.scheduledDate || '').localeCompare(b.scheduledDate || '') || (a.scheduledTime || '').localeCompare(b.scheduledTime || '') || (a.createdAt || 0) - (b.createdAt || 0));
  if (!open) return null;
  const statusMeta = event => {
    const ts = dateTimeStatus(event.scheduledDate, event.scheduledTime, now);
    if (ts === 'past') return {
      label: '経過',
      bg: '#FEE2E2',
      fg: '#991B1B'
    };
    if (ts === 'now') return {
      label: 'まもなく',
      bg: '#FEF3C7',
      fg: '#92400E'
    };
    if (ts === 'soon') return {
      label: '30分以内',
      bg: '#DBEAFE',
      fg: '#1D4ED8'
    };
    return {
      label: '予定',
      bg: 'var(--surface-2)',
      fg: 'var(--text-3)'
    };
  };
  const row = event => {
    const meta = statusMeta(event);
    return React.createElement("li", {
      key: event.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 0',
        borderTop: '1px solid var(--border)'
      }
    }, React.createElement("span", {
      className: "time-tag",
      style: {
        minWidth: 52,
        justifyContent: 'center',
        background: meta.bg,
        color: meta.fg
      }
    }, React.createElement("span", null, event.scheduledTime), event.scheduledDate && React.createElement("span", {
      style: {
        marginLeft: 4,
        opacity: .72
      }
    }, dateLabel(event.scheduledDate))), React.createElement("input", {
      value: event.title,
      onChange: e => onUpdate(event.id, {
        title: e.target.value
      }),
      className: "inp",
      style: {
        flex: 1,
        minWidth: 0,
        padding: '6px 9px',
        fontSize: 13,
        fontWeight: 650
      },
      "aria-label": "予定名"
    }), React.createElement("span", {
      className: "tag",
      style: {
        background: meta.bg,
        color: meta.fg,
        fontSize: 10,
        flexShrink: 0
      }
    }, meta.label), React.createElement("button", {
      className: "btn-green",
      onClick: () => onUpdate(event.id, {
        status: 'done',
        completedAt: Date.now()
      }),
      style: {
        padding: '5px 10px',
        fontSize: 11,
        flexShrink: 0
      }
    }, "済"), React.createElement("button", {
      className: "btn-sm",
      onClick: () => onRemove(event.id),
      style: {
        flexShrink: 0
      }
    }, "削除"));
  };
  return React.createElement("section", {
    className: "card scheduled-event-section",
    style: {
      marginBottom: 16,
      padding: '14px 16px'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, React.createElement("button", {
    className: "btn-ghost",
    onClick: onToggleOpen,
    style: {
      padding: '6px 10px',
      fontSize: 13,
      fontWeight: 900
    }
  }, open ? React.createElement(ChevronDown, {
    size: 14
  }) : React.createElement(ChevronRight, {
    size: 14
  }), React.createElement(Clock, {
    size: 14
  }), "予定", activeEvents.length ? ` (${activeEvents.length})` : ''), doneEvents.length > 0 && React.createElement("button", {
    className: "btn-sm",
    onClick: onClearDone
  }, "済みを片づける")), React.createElement(React.Fragment, null, React.createElement("div", {
    className: "scheduled-event-form",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(128px, 150px) minmax(86px, 110px) minmax(0, 1fr) auto',
      gap: 8,
      marginTop: 12
    }
  }, React.createElement("input", {
    type: "date",
    value: form.scheduledDate,
    onChange: e => setForm(prev => ({
      ...prev,
      scheduledDate: e.target.value
    })),
    className: "inp scheduled-date-input",
    "aria-label": "予定日"
  }), React.createElement("input", {
    type: "time",
    value: form.scheduledTime,
    onChange: e => setForm(prev => ({
      ...prev,
      scheduledTime: e.target.value
    })),
    className: "inp scheduled-time-input",
    "aria-label": "予定時刻"
  }), React.createElement("input", {
    value: form.title,
    onChange: e => setForm(prev => ({
      ...prev,
      title: e.target.value
    })),
    onKeyDown: e => {
      if (e.key === 'Enter') onAdd();
    },
    className: "inp scheduled-title-input",
    placeholder: "ごみ捨て、IC、カンファレンスなど",
    "aria-label": "予定名"
  }), React.createElement("button", {
    className: "btn-dark",
    onClick: onAdd,
    disabled: !form.title.trim() || !form.scheduledTime,
    style: {
      opacity: !form.title.trim() || !form.scheduledTime ? .45 : 1
    }
  }, React.createElement(Plus, {
    size: 14
  }), "追加")), sorted.length === 0 ? React.createElement("p", {
    style: {
      margin: '12px 0 0',
      color: 'var(--text-3)',
      fontSize: 12
    }
  }, "患者にもすき間にも属さない、日付と時間で動く予定をここに置けます。30分前から時限タスク欄に出ます。") : React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '12px 0 0',
      padding: 0
    }
  }, sorted.map(row))));
}
function QuickPresetManager({
  patientPresets,
  generalPresets = [],
  dailyPresets,
  onUpdatePatient,
  onUpdateGeneral,
  onUpdateDaily,
  onAddPatient,
  onAddGeneral,
  onAddDaily,
  onRemovePatient,
  onRemoveGeneral,
  onRemoveDaily,
  showPatient = true,
  showGeneral = false,
  showDaily = true
}) {
  const renderList = (label, presets, kind, onUpdate, onAdd, onRemove) => {
    const dailyMode = kind === 'daily';
    const taskTypes = kind === 'daily' ? DAILY_TASK_TYPES : kind === 'patient' ? TASK_TYPES : GENERAL_TASK_TYPES;
    const defaultType = kind === 'daily' ? 'home' : kind === 'patient' ? 'chart' : 'docs';
    return React.createElement("div", {
      style: {
        background: 'var(--surface-2)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        padding: 12
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8
      }
    }, React.createElement("strong", {
      style: {
        fontSize: 13
      }
    }, label), React.createElement("button", {
      className: "btn-sm",
      onClick: onAdd
    }, "+ 追加")), presets.map((preset, idx) => React.createElement("div", {
      key: preset.id || `${preset.title}-${idx}`,
      style: {
        display: 'grid',
        gridTemplateColumns: dailyMode ? 'minmax(0,1.4fr) minmax(76px,.7fr) minmax(70px,.55fr) minmax(70px,.55fr) auto' : 'minmax(0,1.5fr) minmax(76px,.7fr) minmax(70px,.55fr) auto',
        gap: 6,
        alignItems: 'center',
        marginTop: 6
      }
    }, React.createElement("input", {
      value: preset.title || '',
      onChange: e => onUpdate(idx, {
        title: e.target.value
      }),
      className: "inp",
      style: {
        padding: '5px 8px',
        fontSize: 12
      }
    }), React.createElement("select", {
      value: preset.type || defaultType,
      onChange: e => onUpdate(idx, {
        type: e.target.value
      }),
      className: "inp",
      style: {
        padding: '5px 8px',
        fontSize: 12
      }
    }, taskTypes.map(t => React.createElement("option", {
      key: t.id,
      value: t.id
    }, t.label))), React.createElement("select", {
      value: preset.estimate || '5',
      onChange: e => onUpdate(idx, {
        estimate: e.target.value
      }),
      className: "inp",
      style: {
        padding: '5px 8px',
        fontSize: 12
      }
    }, ESTIMATES.map(e => React.createElement("option", {
      key: e.id,
      value: e.id
    }, e.label))), dailyMode && React.createElement("select", {
      value: preset.dailyPriority || 'normal',
      onChange: e => onUpdate(idx, {
        dailyPriority: e.target.value
      }),
      className: "inp",
      style: {
        padding: '5px 8px',
        fontSize: 12
      }
    }, DAILY_TASK_PRIORITIES.map(p => React.createElement("option", {
      key: p.id,
      value: p.id
    }, p.label))), React.createElement("button", {
      className: "btn-sm",
      onClick: () => onRemove(idx),
      style: {
        opacity: .65
      }
    }, "削除"))));
  };
  return React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'grid',
      gap: 10
    }
  }, showPatient && renderList("ぺいとり: 患者タスク", patientPresets, 'patient', onUpdatePatient, onAddPatient, onRemovePatient), showGeneral && renderList("ぺいとり: すきまタスク", generalPresets, 'general', onUpdateGeneral, onAddGeneral, onRemoveGeneral), showDaily && renderList("でいとり: よく使う", dailyPresets, 'daily', onUpdateDaily, onAddDaily, onRemoveDaily));
}
function DailyTaskSetManager({
  sets,
  onAddSet,
  onUpdateSet,
  onRemoveSet,
  onAddItem,
  onUpdateItem,
  onRemoveItem
}) {
  const inpStyle = {
    background: 'var(--surface)',
    border: '1.5px solid var(--border)',
    borderRadius: 8,
    padding: '5px 9px',
    fontSize: 12,
    color: 'var(--text)',
    fontFamily: 'var(--font-sans)',
    outline: 'none'
  };
  return React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'grid',
      gap: 10
    }
  }, React.createElement("button", {
    className: "btn-ghost",
    onClick: onAddSet,
    style: {
      justifyContent: 'center',
      fontSize: 12
    }
  }, "+ セット追加"), sets.map(set => React.createElement("div", {
    key: set.id,
    style: {
      background: 'var(--surface-2)',
      border: '1px solid var(--border)',
      borderRadius: 12,
      padding: 12
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      alignItems: 'center',
      marginBottom: 9
    }
  }, React.createElement("input", {
    value: set.name || '',
    onChange: e => onUpdateSet(set.id, { name: e.target.value }),
    style: { ...inpStyle, flex: 1, fontWeight: 800 },
    "aria-label": "セット名"
  }), React.createElement("button", {
    className: "btn-sm",
    onClick: () => onRemoveSet(set.id),
    style: { color: 'var(--stuck-fg)' }
  }, "削除")), React.createElement("div", {
    style: { display: 'grid', gap: 5 }
  }, (set.items || []).map((item, idx) => React.createElement("div", {
    key: idx,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.4fr) minmax(74px,.65fr) minmax(64px,.5fr) minmax(64px,.5fr) auto',
      gap: 5,
      alignItems: 'center'
    }
  }, React.createElement("input", {
    value: item.title || '',
    onChange: e => onUpdateItem(set.id, idx, { title: e.target.value }),
    placeholder: "タスク名",
    style: { ...inpStyle, minWidth: 0 }
  }), React.createElement("select", {
    value: item.type || 'home',
    onChange: e => onUpdateItem(set.id, idx, { type: e.target.value }),
    style: inpStyle
  }, DAILY_TASK_TYPES.map(t => React.createElement("option", { key: t.id, value: t.id }, t.label))), React.createElement("select", {
    value: item.estimate || '5',
    onChange: e => onUpdateItem(set.id, idx, { estimate: e.target.value }),
    style: inpStyle
  }, ESTIMATES.map(e => React.createElement("option", { key: e.id, value: e.id }, e.label))), React.createElement("select", {
    value: item.dailyPriority || 'normal',
    onChange: e => onUpdateItem(set.id, idx, { dailyPriority: e.target.value }),
    style: inpStyle
  }, DAILY_TASK_PRIORITIES.map(p => React.createElement("option", { key: p.id, value: p.id }, p.label))), React.createElement("button", {
    className: "btn-sm",
    onClick: () => onRemoveItem(set.id, idx),
    style: { opacity: .65 }
  }, "削除"))), React.createElement("button", {
    className: "btn-sm",
    onClick: () => onAddItem(set.id),
    style: { marginTop: 7, color: 'var(--accent)' }
  }, "+ 項目追加")))));
}
function DailyLinkSection({
  links,
  open,
  onToggleOpen,
  form,
  setForm,
  onAdd,
  onUpdate,
  onRemove
}) {
  const [editingId, setEditingId] = React.useState(null);
  const [draft, setDraft] = React.useState({ title: '', url: '' });
  const normalizeUrl = url => {
    const trimmed = (url || '').trim();
    if (!trimmed) return '';
    return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  };
  const startEdit = link => {
    setEditingId(link.id);
    setDraft({
      title: link.title || '',
      url: link.url || ''
    });
  };
  const saveEdit = id => {
    onUpdate(id, {
      title: draft.title,
      url: draft.url
    });
    setEditingId(null);
  };
  return React.createElement("div", {
    className: "card",
    style: {
      marginTop: 10,
      overflow: 'hidden',
      borderLeft: '5px solid #0EA5E9'
    }
  }, React.createElement("div", {
    onClick: onToggleOpen,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '12px 16px',
      cursor: 'pointer',
      background: 'rgba(14,165,233,.07)'
    }
  }, open ? React.createElement(ChevronDown, {
    size: 15
  }) : React.createElement(ChevronRight, {
    size: 15
  }), React.createElement("strong", {
    style: {
      fontSize: 14,
      color: 'var(--text)'
    }
  }, "リンク集"), React.createElement("span", {
    className: "tag",
    style: {
      background: 'rgba(14,165,233,.14)',
      color: '#0369A1'
    }
  }, links.length, "件")), open && React.createElement("div", {
    style: {
      padding: '0 16px 16px',
      borderTop: '1px solid var(--border)'
    }
  }, links.length === 0 ? React.createElement("p", {
    style: {
      margin: '12px 0',
      color: 'var(--text-3)',
      fontSize: 12
    }
  }, "ごみカレンダー、自治体ページ、買い物メモなどを置けます。") : React.createElement("div", {
    style: {
      display: 'grid',
      gap: 7,
      marginTop: 12
    }
  }, links.map(link => {
    const editing = editingId === link.id;
    return React.createElement("div", {
      key: link.id,
      style: editing ? {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,.75fr) minmax(0,1fr) auto',
        gap: 6,
        alignItems: 'center'
      } : {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) auto',
        gap: 8,
        alignItems: 'stretch'
      }
    }, editing ? React.createElement(React.Fragment, null, React.createElement("input", {
      value: draft.title,
      onChange: e => setDraft(prev => ({ ...prev, title: e.target.value })),
      className: "inp",
      style: {
        padding: '6px 9px',
        fontSize: 12
      },
      "aria-label": "リンク名"
    }), React.createElement("input", {
      value: draft.url,
      onChange: e => setDraft(prev => ({ ...prev, url: e.target.value })),
      onKeyDown: e => {
        if (e.key === 'Enter') saveEdit(link.id);
      },
      className: "inp",
      style: {
        padding: '6px 9px',
        fontSize: 12
      },
      "aria-label": "URL"
    }), React.createElement("div", {
      style: {
        display: 'flex',
        gap: 4,
        justifyContent: 'flex-end',
        flexWrap: 'wrap'
      }
    }, React.createElement("button", {
      className: "btn-sm",
      onClick: () => saveEdit(link.id),
      style: { color: 'var(--accent)' }
    }, "保存"), React.createElement("button", {
      className: "btn-sm",
      onClick: () => setEditingId(null)
    }, "戻す"), React.createElement("button", {
      className: "btn-sm",
      onClick: () => onRemove(link.id),
      style: { color: 'var(--stuck-fg)' }
    }, "削除"))) : React.createElement(React.Fragment, null, React.createElement("a", {
      href: normalizeUrl(link.url),
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        display: 'block',
        minHeight: 42,
        padding: '9px 12px',
        border: '1px solid var(--border)',
        borderRadius: 8,
        background: 'var(--surface-2)',
        color: 'var(--text)',
        textDecoration: 'none'
      }
    }, React.createElement("strong", {
      style: {
        display: 'block',
        fontSize: 13,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, link.title || '無題リンク'), React.createElement("span", {
      style: {
        display: 'block',
        marginTop: 2,
        fontSize: 10,
        color: 'var(--text-3)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, link.url || 'URL未設定')), React.createElement("button", {
      className: "btn-sm",
      onClick: () => startEdit(link),
      style: {
        alignSelf: 'center',
        padding: '3px 7px',
        fontSize: 10,
        color: 'var(--text-3)',
        border: '1px solid var(--border)',
        borderRadius: 99
      }
    }, "編集")));
  })), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,.8fr) minmax(0,1.2fr) auto',
      gap: 6,
      marginTop: 12
    }
  }, React.createElement("input", {
    value: form.title,
    onChange: e => setForm(prev => ({
      ...prev,
      title: e.target.value
    })),
    className: "inp",
    placeholder: "ごみカレンダー",
    "aria-label": "追加するリンク名"
  }), React.createElement("input", {
    value: form.url,
    onChange: e => setForm(prev => ({
      ...prev,
      url: e.target.value
    })),
    onKeyDown: e => {
      if (e.key === 'Enter') onAdd();
    },
    className: "inp",
    placeholder: "https://...",
    "aria-label": "追加するURL"
  }), React.createElement("button", {
    className: "btn-dark",
    onClick: onAdd,
    disabled: !form.title.trim() || !form.url.trim(),
    style: {
      opacity: !form.title.trim() || !form.url.trim() ? .45 : 1
    }
  }, "追加"))));
}function lastDoneLabel(date) {
  if (!date) return '未記録';
  const today = todayStr();
  if (date === today) return '今日';
  const base = new Date(today + 'T00:00:00');
  const past = new Date(date + 'T00:00:00');
  const days = Math.max(0, Math.round((base - past) / 86400000));
  if (days === 0) return '今日';
  if (days === 1) return '昨日';
  return `${days}日前`;
}
function LastDoneSection({
  items,
  open,
  onToggleOpen,
  form,
  setForm,
  onAdd,
  onUpdate,
  onRemove,
  onMarkToday,
  onClear
}) {
  const [editingId, setEditingId] = React.useState(null);
  const [draft, setDraft] = React.useState({ label: '', lastDone: '' });
  const startEdit = item => {
    setEditingId(item.id);
    setDraft({
      label: item.label || '',
      lastDone: item.lastDone || ''
    });
  };
  const saveEdit = id => {
    onUpdate(id, {
      label: draft.label,
      lastDone: draft.lastDone
    });
    setEditingId(null);
  };
  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 8,
    padding: '8px 10px',
    background: 'rgba(20,184,166,.04)',
    border: '1px solid var(--border)',
    borderRadius: 10
  };
  const labelStyle = {
    flex: '1 1 110px',
    minWidth: 0,
    color: 'var(--text)',
    fontSize: 14,
    fontWeight: 800,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  };
  const badgeStyleFor = item => ({
    flex: '0 0 auto',
    minWidth: 64,
    textAlign: 'center',
    padding: '4px 10px',
    borderRadius: 999,
    background: item.lastDone ? 'rgba(20,184,166,.14)' : 'var(--surface-2)',
    color: item.lastDone ? '#0F766E' : 'var(--text-3)',
    border: '1px solid var(--border)',
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: '.02em',
    whiteSpace: 'nowrap'
  });
  const doBtnStyle = {
    flex: '0 0 auto',
    padding: '6px 16px',
    fontSize: 12,
    fontWeight: 900,
    letterSpacing: '.06em',
    borderRadius: 999
  };
  const editBtnStyle = {
    flex: '0 0 auto',
    padding: '4px 10px',
    fontSize: 11,
    color: 'var(--text-3)',
    border: '1px solid var(--border)',
    borderRadius: 99,
    background: 'transparent'
  };
  const editInputStyle = {
    flex: '1 1 140px',
    minWidth: 0,
    padding: '6px 9px',
    fontSize: 12,
    fontWeight: 800
  };
  const editDateStyle = {
    flex: '0 0 auto',
    padding: '6px 9px',
    fontSize: 12
  };
  return React.createElement("div", {
    className: "card",
    style: {
      marginTop: 10,
      overflow: 'hidden',
      borderLeft: '5px solid #14B8A6'
    }
  }, React.createElement("div", {
    onClick: onToggleOpen,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '12px 16px',
      cursor: 'pointer',
      background: 'rgba(20,184,166,.07)'
    }
  }, open ? React.createElement(ChevronDown, {
    size: 15
  }) : React.createElement(ChevronRight, {
    size: 15
  }), React.createElement("strong", {
    style: {
      fontSize: 14,
      color: 'var(--text)'
    }
  }, "前回いつやった?"), React.createElement("span", {
    className: "tag",
    style: {
      background: 'rgba(20,184,166,.14)',
      color: '#0F766E'
    }
  }, items.length, "件")), open && React.createElement("div", {
    style: {
      padding: '10px 16px 16px',
      borderTop: '1px solid var(--border)',
      display: 'grid',
      gap: 8
    }
  }, items.map(item => {
    const editing = editingId === item.id;
    if (editing) {
      return React.createElement("div", {
        key: item.id,
        style: rowStyle
      }, React.createElement("input", {
        value: draft.label,
        onChange: e => setDraft(prev => ({ ...prev, label: e.target.value })),
        className: "inp",
        style: editInputStyle,
        "aria-label": "項目名"
      }), React.createElement("input", {
        type: "date",
        value: draft.lastDone || '',
        onChange: e => setDraft(prev => ({ ...prev, lastDone: e.target.value })),
        className: "inp",
        style: editDateStyle,
        "aria-label": "前回の日付"
      }), React.createElement("button", {
        className: "btn-sm",
        onClick: () => saveEdit(item.id),
        style: { color: 'var(--accent)' }
      }, "保存"), React.createElement("button", {
        className: "btn-sm",
        onClick: () => setEditingId(null)
      }, "戻す"), React.createElement("button", {
        className: "btn-sm",
        onClick: () => onRemove(item.id),
        style: { color: 'var(--stuck-fg)' }
      }, "削除"));
    }
    return React.createElement("div", {
      key: item.id,
      style: rowStyle,
      title: item.lastDone ? `前回: ${item.lastDone}` : '未記録'
    }, React.createElement("strong", {
      style: labelStyle
    }, item.label), React.createElement("span", {
      style: badgeStyleFor(item)
    }, lastDoneLabel(item.lastDone)), React.createElement("button", {
      className: "btn-green",
      onClick: () => onMarkToday(item.id),
      style: doBtnStyle,
      "aria-label": `${item.label} を今日やったとして記録`
    }, "Do"), React.createElement("button", {
      className: "btn-sm",
      onClick: () => startEdit(item),
      style: editBtnStyle
    }, "編集"));
  }), React.createElement("div", {
    style: {
      ...rowStyle,
      marginTop: 6,
      background: 'transparent',
      border: '1px dashed var(--border)'
    }
  }, React.createElement("input", {
    value: form.label,
    onChange: e => setForm(prev => ({ ...prev, label: e.target.value })),
    onKeyDown: e => {
      if (e.key === 'Enter') onAdd();
    },
    className: "inp",
    placeholder: "項目を追加 (例: シーツ交換)",
    "aria-label": "追加する項目名",
    style: { flex: '1 1 140px', minWidth: 0, padding: '6px 10px', fontSize: 12 }
  }), React.createElement("input", {
    type: "date",
    value: form.lastDone || '',
    onChange: e => setForm(prev => ({ ...prev, lastDone: e.target.value })),
    className: "inp",
    "aria-label": "追加する前回日",
    style: { flex: '0 0 auto', padding: '6px 9px', fontSize: 12 }
  }), React.createElement("button", {
    className: "btn-dark",
    onClick: onAdd,
    disabled: !form.label.trim(),
    style: {
      opacity: !form.label.trim() ? .45 : 1,
      padding: '6px 14px',
      fontSize: 12,
      flex: '0 0 auto'
    }
  }, "追加"))));
}
function EndDayLogSection({
  logs,
  open,
  onToggleOpen,
  onCopy
}) {
  const weekly = pruneEndDayLogs(logs);
  const { start, end } = currentWeekRange();
  const total = weekly.reduce((sum, log) => sum + (log.count || 0), 0);
  return React.createElement("div", {
    className: "card",
    style: {
      marginTop: 10,
      overflow: 'hidden',
      borderLeft: '5px solid #6366F1'
    }
  }, React.createElement("div", {
    onClick: onToggleOpen,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '12px 16px',
      cursor: 'pointer',
      background: 'rgba(99,102,241,.07)'
    }
  }, open ? React.createElement(ChevronDown, {
    size: 15
  }) : React.createElement(ChevronRight, {
    size: 15
  }), React.createElement("strong", {
    style: {
      fontSize: 14,
      color: 'var(--text)'
    }
  }, "今週のおしまいログ"), React.createElement("span", {
    className: "tag",
    style: {
      background: 'rgba(99,102,241,.14)',
      color: '#4338CA'
    }
  }, weekly.length, "日 / ", total, "件")), open && React.createElement("div", {
    style: {
      padding: '12px 16px 16px',
      borderTop: '1px solid var(--border)',
      display: 'grid',
      gap: 10
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }
  }, React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-3)',
      fontWeight: 800
    }
  }, start, "(", weekdayLabel(start), ") - ", end, "(", weekdayLabel(end), ")"), React.createElement("button", {
    className: "btn-dark",
    onClick: onCopy,
    disabled: weekly.length === 0,
    style: {
      padding: '6px 12px',
      fontSize: 12,
      opacity: weekly.length === 0 ? .45 : 1
    }
  }, "今週分をコピー")), weekly.length === 0 ? React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-3)',
      fontSize: 12
    }
  }, "今週のおしまいログはまだありません。") : weekly.map(log => React.createElement("div", {
    key: log.date,
    style: {
      background: 'var(--surface-2)',
      border: '1px solid var(--border)',
      borderRadius: 10,
      padding: '9px 11px'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8,
      marginBottom: 6,
      alignItems: 'center'
    }
  }, React.createElement("strong", {
    style: {
      fontSize: 13,
      color: 'var(--text)'
    }
  }, log.date, "(", weekdayLabel(log.date), ")"), React.createElement("span", {
    className: "tag",
    style: {
      background: 'rgba(22,163,74,.12)',
      color: 'var(--done)'
    }
  }, log.count || 0, "件")), React.createElement("pre", {
    style: {
      margin: 0,
      whiteSpace: 'pre-wrap',
      color: 'var(--text-2)',
      fontSize: 11,
      lineHeight: 1.55,
      fontFamily: 'var(--font-sans)'
    }
  }, formatEndDayLogs([log]).split('\n').slice(3).join('\n'))))));
}
function RewardSection({
  rewards,
  open,
  onToggleOpen,
  form,
  setForm,
  onAdd,
  onUpdate,
  onRemove
}) {
  const WHEN_PRESETS = ['今日', '今週末', '今月', 'いつでも'];
  return React.createElement("div", {
    className: "card",
    style: {
      marginTop: 10,
      overflow: 'hidden',
      borderLeft: '5px solid #F59E0B'
    }
  }, React.createElement("div", {
    onClick: onToggleOpen,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '12px 16px',
      cursor: 'pointer',
      background: 'rgba(245,158,11,.10)'
    }
  }, open ? React.createElement(ChevronDown, {
    size: 15
  }) : React.createElement(ChevronRight, {
    size: 15
  }), React.createElement("strong", {
    style: {
      fontSize: 14,
      color: 'var(--text)'
    }
  }, "ご褒美 🎁"), React.createElement("span", {
    className: "tag",
    style: {
      background: 'rgba(245,158,11,.18)',
      color: '#92400E'
    }
  }, rewards.length, "件"), React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 11,
      color: 'var(--text-3)',
      fontWeight: 600
    }
  }, "キャラをつつくと提示")), open && React.createElement("div", {
    style: {
      padding: '0 16px 16px',
      borderTop: '1px solid var(--border)'
    }
  }, rewards.length === 0 ? React.createElement("p", {
    style: {
      margin: '12px 0',
      color: 'var(--text-3)',
      fontSize: 12,
      lineHeight: 1.7
    }
  }, "週末に31アイス、お風呂で漫画、終わったら推しの動画…自分への馬車馬のにんじんを置いておけます。") : React.createElement("div", {
    style: {
      display: 'grid',
      gap: 7,
      marginTop: 12
    }
  }, rewards.map(reward => React.createElement("div", {
    key: reward.id,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, .7fr) auto',
      gap: 6,
      alignItems: 'center'
    }
  }, React.createElement("input", {
    value: reward.text || '',
    onChange: e => onUpdate(reward.id, {
      text: e.target.value
    }),
    className: "inp",
    style: {
      padding: '6px 9px',
      fontSize: 12
    },
    "aria-label": "ご褒美の内容"
  }), React.createElement("input", {
    value: reward.when || '',
    onChange: e => onUpdate(reward.id, {
      when: e.target.value
    }),
    className: "inp",
    style: {
      padding: '6px 9px',
      fontSize: 12
    },
    placeholder: "いつ",
    list: "reward-when-presets",
    "aria-label": "いつ"
  }), React.createElement("button", {
    className: "btn-sm",
    onClick: () => onRemove(reward.id),
    style: {
      opacity: .65
    }
  }, "削除")))), React.createElement("datalist", {
    id: "reward-when-presets"
  }, WHEN_PRESETS.map(w => React.createElement("option", {
    key: w,
    value: w
  }))), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,.7fr) auto',
      gap: 6,
      marginTop: 12
    }
  }, React.createElement("input", {
    value: form.text,
    onChange: e => setForm(prev => ({
      ...prev,
      text: e.target.value
    })),
    onKeyDown: e => {
      if (e.key === 'Enter') onAdd();
    },
    className: "inp",
    placeholder: "週末に31アイス",
    "aria-label": "追加するご褒美"
  }), React.createElement("input", {
    value: form.when,
    onChange: e => setForm(prev => ({
      ...prev,
      when: e.target.value
    })),
    onKeyDown: e => {
      if (e.key === 'Enter') onAdd();
    },
    className: "inp",
    placeholder: "今週末",
    list: "reward-when-presets",
    "aria-label": "いつ"
  }), React.createElement("button", {
    className: "btn-dark",
    onClick: onAdd,
    disabled: !form.text.trim(),
    style: {
      opacity: !form.text.trim() ? .45 : 1
    }
  }, "追加"))));
}
function RoutinePresetSection({
  presets,
  open,
  onToggleOpen,
  onUpdate,
  onAdd,
  onRemove,
  onApplyToday
}) {
  const toggleWeekday = (preset, day) => {
    const days = new Set(preset.weekdays || []);
    if (days.has(day)) days.delete(day);else days.add(day);
    onUpdate(preset.id, {
      weekdays: [...days].sort((a, b) => a - b)
    });
  };
  const rows = presets.map(preset => {
    const isEvent = preset.kind === 'event';
    const taskTypes = preset.mode === 'daily' ? DAILY_TASK_TYPES : GENERAL_TASK_TYPES;
    return React.createElement("div", {
      key: preset.id,
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1.3fr) 78px 92px 100px',
        gap: 6,
        alignItems: 'center',
        borderTop: '1px solid var(--border)',
        paddingTop: 8,
        marginTop: 8
      }
    }, React.createElement("input", {
      value: preset.title || '',
      onChange: e => onUpdate(preset.id, {
        title: e.target.value
      }),
      className: "inp",
      style: {
        padding: '5px 8px',
        fontSize: 12
      }
    }), React.createElement("select", {
      value: preset.kind || 'task',
      onChange: e => onUpdate(preset.id, {
        kind: e.target.value
      }),
      className: "inp",
      style: {
        padding: '5px 8px',
        fontSize: 12
      }
    }, React.createElement("option", {
      value: "task"
    }, "すきま"), React.createElement("option", {
      value: "event"
    }, "予定")), isEvent ? React.createElement("input", {
      type: "time",
      value: preset.scheduledTime || '',
      onChange: e => onUpdate(preset.id, {
        scheduledTime: e.target.value
      }),
      className: "inp",
      style: {
        padding: '5px 8px',
        fontSize: 12
      }
    }) : React.createElement("select", {
      value: preset.mode || 'daily',
      onChange: e => onUpdate(preset.id, {
        mode: e.target.value
      }),
      className: "inp",
      style: {
        padding: '5px 8px',
        fontSize: 12
      }
    }, React.createElement("option", {
      value: "patient"
    }, "ぺいとり"), React.createElement("option", {
      value: "daily"
    }, "でいとり")), React.createElement("button", {
      className: "btn-sm",
      onClick: () => onRemove(preset.id)
    }, "削除"), React.createElement("div", {
      style: {
        gridColumn: '1 / -1',
        display: 'flex',
        gap: 5,
        flexWrap: 'wrap'
      }
    }, WEEKDAY_OPTIONS.map(day => React.createElement("button", {
      key: day.id,
      className: "tag",
      onClick: () => toggleWeekday(preset, day.id),
      style: {
        background: (preset.weekdays || []).includes(day.id) ? 'var(--accent)' : 'var(--surface-2)',
        color: (preset.weekdays || []).includes(day.id) ? '#fff' : 'var(--text-3)',
      border: '1px solid var(--border)',
      cursor: 'pointer'
    }
    }, day.label))), !isEvent && React.createElement("div", {
      style: {
        gridColumn: '1 / -1',
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap'
      }
    }, React.createElement("select", {
      value: preset.type || (preset.mode === 'daily' ? 'home' : 'docs'),
      onChange: e => onUpdate(preset.id, {
        type: e.target.value
      }),
      className: "inp",
      style: {
        width: 'auto',
        padding: '5px 8px',
        fontSize: 12
      }
    }, taskTypes.map(t => React.createElement("option", {
      key: t.id,
      value: t.id
    }, t.label))), React.createElement("select", {
      value: preset.estimate || '5',
      onChange: e => onUpdate(preset.id, {
        estimate: e.target.value
      }),
      className: "inp",
      style: {
        width: 'auto',
        padding: '5px 8px',
        fontSize: 12
      }
    }, ESTIMATES.map(e => React.createElement("option", {
      key: e.id,
      value: e.id
    }, e.label))), preset.mode === 'daily' && React.createElement("select", {
      value: preset.dailyPriority || 'normal',
      onChange: e => onUpdate(preset.id, {
        dailyPriority: e.target.value
      }),
      className: "inp",
      style: {
        width: 'auto',
        padding: '5px 8px',
        fontSize: 12
      }
    }, DAILY_TASK_PRIORITIES.map(p => React.createElement("option", {
      key: p.id,
      value: p.id
    }, p.label)))));
  });
  return React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, React.createElement("button", {
    className: "btn-sm",
    onClick: onToggleOpen,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12,
      color: 'var(--text-3)',
      fontWeight: 600
    }
  }, open ? React.createElement(ChevronDown, {
    size: 12
  }) : React.createElement(ChevronRight, {
    size: 12
  }), "固定予定・固定すきま (", presets.length, ")"), open && React.createElement("div", {
    style: {
      marginTop: 10,
      background: 'var(--surface)',
      border: '1.5px solid var(--border)',
      borderRadius: 14,
      padding: 14
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 10
    }
  }, React.createElement("button", {
    className: "btn-dark",
    onClick: onApplyToday
  }, "今日分を一括登録"), React.createElement("button", {
    className: "btn-ghost",
    onClick: onAdd
  }, "+ 固定項目")), rows));
}
function pad2(n) {
  return String(Math.abs(n)).padStart(2, '0');
}
function formatMSS(totalSec) {
  const sec = Math.max(0, Math.floor(totalSec));
  return `${pad2(Math.floor(sec / 60))}:${pad2(sec % 60)}`;
}
function elapsedMsOf(running, now) {
  if (!running) return 0;
  const base = running.pausedAt ? running.pausedAt : now;
  return Math.max(0, base - running.startedAt - (running.accumulatedPaused || 0));
}
const TIMER_CHIBI = {
  timer: {
    neutral: 'blue_white_girl_06_clipboard.png',
    paused: 'blue_white_girl_04_thinking.png',
    warn: 'blue_white_girl_05_hurrying.png',
    over: 'red_antler_girl_05_hurrying.png',
    done: 'blue_white_girl_07_completed.png'
  },
  tally: {
    neutral: 'red_antler_girl_01_neutral.png',
    paused: 'red_antler_girl_04_thinking.png',
    warn: 'red_antler_girl_05_hurrying.png',
    over: 'red_antler_girl_03_cheer.png',
    done: 'red_antler_girl_08_sleeping.png'
  }
};
function FloatingTimerBar({
  running,
  now,
  onIncrement,
  onAddMinute,
  onPauseToggle,
  onReset,
  onStop,
  onComplete
}) {
  if (!running) return null;
  const isTally = running.mode === 'tally';
  const paused = !!running.pausedAt;
  const elapsedMs = elapsedMsOf(running, now);
  const elapsedSec = Math.floor(elapsedMs / 1000);
  let main, sub, accent, progressPct, chibiPose;
  if (isTally) {
    const count = running.currentCount || 0;
    const target = running.targetCount || 0;
    const remaining = Math.max(0, target - count);
    const pace = elapsedSec > 0 ? (count / (elapsedSec / 60)) : 0;
    const etaMin = pace > 0 && remaining > 0 ? Math.ceil(remaining / pace) : null;
    const done = target > 0 && count >= target;
    const showTarget = target <= 0 || done || remaining <= 3;
    accent = done ? '#16A34A' : '#0EA5E9';
    progressPct = target > 0 ? Math.min(100, (count / target) * 100) : 0;
    main = showTarget ? `${count}/${target}件` : `${count}件`;
    sub = `経過 ${formatMSS(elapsedSec)}・${pace > 0 ? pace.toFixed(1) : '0.0'}件/分${etaMin != null ? `・あと${etaMin}分` : (done ? '・🎉達成' : '')}`;
    chibiPose = paused ? 'paused' : (done ? 'done' : (progressPct >= 75 ? 'over' : (count > 0 ? 'warn' : 'neutral')));
  } else {
    const totalMs = running.durationMs || 0;
    const remainMs = totalMs - elapsedMs;
    const over = remainMs < 0;
    accent = over ? '#DC2626' : (remainMs < 60000 ? '#F59E0B' : '#6C3EF8');
    progressPct = totalMs > 0 ? Math.min(100, (elapsedMs / totalMs) * 100) : 0;
    main = `${over ? '+' : ''}${formatMSS(Math.abs(remainMs) / 1000)}`;
    sub = `見積${Math.round(totalMs / 60000)}分 ${over ? '（超過）' : '残り'}`;
    chibiPose = paused ? 'paused' : (over ? 'over' : (remainMs < 60000 ? 'warn' : 'neutral'));
  }
  const chibiImg = TIMER_CHIBI[isTally ? 'tally' : 'timer'][chibiPose] || TIMER_CHIBI[isTally ? 'tally' : 'timer'].neutral;
  return React.createElement("div", {
    style: {
      position: 'fixed',
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: 'max(96px, calc(env(safe-area-inset-bottom) + 96px))',
      zIndex: 9050,
      width: 'min(560px, calc(100vw - 24px))',
      background: 'var(--surface)',
      border: '2px solid ' + accent,
      borderRadius: 14,
      boxShadow: '0 10px 32px rgba(24,15,62,.28)',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      height: 4,
      background: 'rgba(0,0,0,.06)'
    }
  }, React.createElement("div", {
    style: {
      width: `${progressPct}%`,
      height: '100%',
      background: accent,
      transition: 'width .3s ease'
    }
  })), React.createElement("div", {
    style: {
      padding: '8px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, React.createElement("img", {
    src: 'chibi_split_pngs/' + chibiImg,
    alt: '',
    decoding: 'async',
    style: {
      width: 56,
      height: 56,
      objectFit: 'contain',
      flexShrink: 0,
      filter: 'drop-shadow(0 4px 8px rgba(52,38,99,.18))',
      transform: paused ? 'scale(0.96)' : 'none',
      opacity: paused ? 0.7 : 1,
      transition: 'transform .2s ease, opacity .2s ease'
    }
  }), React.createElement("div", {
    style: {
      flex: '1 1 160px',
      minWidth: 0
    }
  }, React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-3)',
      fontWeight: 700,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    title: running.title
  }, isTally ? '🔢 ' : '⏱ ', running.title), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'monospace',
      fontSize: 22,
      fontWeight: 900,
      color: accent,
      lineHeight: 1
    }
  }, main), React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'var(--text-3)',
      fontWeight: 600
    }
  }, paused ? '一時停止中' : sub))), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap'
    }
  }, isTally && React.createElement("button", {
    onClick: onIncrement,
    className: "btn-dark",
    style: {
      padding: '7px 14px',
      fontSize: 14,
      fontWeight: 900
    },
    "aria-label": "1件追加"
  }, "+1"), !isTally && React.createElement("button", {
    onClick: onAddMinute,
    className: "btn-sm",
    style: {
      fontSize: 11,
      padding: '5px 8px'
    },
    title: "1分延長"
  }, "+1分"), React.createElement("button", {
    onClick: onPauseToggle,
    className: "btn-sm",
    style: {
      fontSize: 11,
      padding: '5px 8px'
    }
  }, paused ? '▶' : '⏸'), React.createElement("button", {
    onClick: onReset,
    className: "btn-sm",
    style: {
      fontSize: 11,
      padding: '5px 8px',
      opacity: .8
    },
    title: "リセット"
  }, "↺"), React.createElement("button", {
    onClick: onComplete,
    className: "btn-green",
    style: {
      fontSize: 11,
      padding: '5px 10px'
    },
    title: "完了して閉じる"
  }, "完了"), React.createElement("button", {
    onClick: onStop,
    className: "btn-sm",
    style: {
      fontSize: 11,
      padding: '5px 8px',
      opacity: .65
    },
    title: "閉じる"
  }, "✕"))));
}
function kindMeta(id) {
  return PATIENT_KINDS.find(k => k.id === id) || PATIENT_KINDS[3];
}
function PendingPatientSection({
  pending,
  open,
  onToggleOpen,
  form,
  setForm,
  onAdd,
  onUpdate,
  onRemove,
  onPromote
}) {
  const sorted = [...pending].sort((a, b) => (a.scheduledDate || '9999').localeCompare(b.scheduledDate || '9999'));
  return React.createElement("div", {
    className: "card",
    style: {
      marginTop: 10,
      overflow: 'hidden',
      borderLeft: '5px solid #8B5CF6'
    }
  }, React.createElement("div", {
    onClick: onToggleOpen,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '12px 16px',
      cursor: 'pointer',
      background: 'rgba(139,92,246,.08)'
    }
  }, open ? React.createElement(ChevronDown, { size: 15 }) : React.createElement(ChevronRight, { size: 15 }), React.createElement("strong", {
    style: { fontSize: 14, color: 'var(--text)' }
  }, "予兆患者"), React.createElement("span", {
    className: "tag",
    style: { background: 'rgba(139,92,246,.18)', color: '#5B21B6' }
  }, pending.length, "件"), React.createElement("span", {
    style: { marginLeft: 'auto', fontSize: 11, color: 'var(--text-3)', fontWeight: 600 }
  }, "予定日が近づくと通知")), open && React.createElement("div", {
    style: { padding: '0 16px 16px', borderTop: '1px solid var(--border)' }
  }, sorted.length === 0 ? React.createElement("p", {
    style: { margin: '12px 0', color: 'var(--text-3)', fontSize: 12, lineHeight: 1.7 }
  }, "10日後の心カテ、5日後の紹介外来など、まだ受け持ちにしないけど忘れたくない患者を置いておけます。") : React.createElement("div", {
    style: { display: 'grid', gap: 7, marginTop: 12 }
  }, sorted.map(item => {
    const km = kindMeta(item.kind);
    const days = daysUntilDateStr(item.scheduledDate);
    const dayLabel = days == null ? '日付なし' : days < 0 ? `${-days}日経過` : days === 0 ? '今日' : `あと${days}日`;
    const dayColor = days == null ? 'var(--text-3)' : days < 0 ? '#DC2626' : days <= PENDING_PATIENT_ALERT_DAYS ? '#B45309' : 'var(--text-2)';
    return React.createElement("div", {
      key: item.id,
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) auto',
        gap: 6,
        padding: 8,
        background: 'var(--surface-2)',
        borderRadius: 10,
        border: '1px solid var(--border)'
      }
    }, React.createElement("div", {
      style: { display: 'grid', gap: 6 }
    }, React.createElement("div", {
      style: { display: 'flex', gap: 4, alignItems: 'center', flexWrap: 'wrap' }
    }, React.createElement("input", {
      value: item.name || '',
      onChange: e => onUpdate(item.id, { name: e.target.value }),
      className: "inp",
      placeholder: "患者名（符丁可）",
      style: { padding: '5px 8px', fontSize: 12, flex: '1 1 110px', minWidth: 0 }
    }), React.createElement("select", {
      value: item.kind || 'other',
      onChange: e => onUpdate(item.id, { kind: e.target.value }),
      className: "inp",
      style: { padding: '5px 6px', fontSize: 11, background: km.color + '18', color: km.color, fontWeight: 700 }
    }, PATIENT_KINDS.map(k => React.createElement("option", { key: k.id, value: k.id }, k.label))), React.createElement("input", {
      type: "date",
      value: item.scheduledDate || '',
      onChange: e => onUpdate(item.id, { scheduledDate: e.target.value }),
      className: "inp",
      style: { padding: '5px 6px', fontSize: 11 }
    }), React.createElement("span", {
      style: { fontSize: 11, color: dayColor, fontWeight: 700 }
    }, dayLabel)), React.createElement("div", {
      style: { display: 'flex', gap: 4, alignItems: 'center' }
    }, React.createElement("span", {
      style: { fontSize: 10, color: 'var(--text-3)', fontWeight: 700, minWidth: 30 }
    }, "病棟"), React.createElement("select", {
      value: item.ward || '',
      onChange: e => onUpdate(item.id, { ward: e.target.value }),
      className: "inp",
      style: { padding: '4px 6px', fontSize: 11, flex: '0 0 auto' }
    }, WARDS.map(w => React.createElement("option", { key: w.id, value: w.id }, w.label || '（なし）')))), React.createElement("textarea", {
      value: item.memo || '',
      onChange: e => onUpdate(item.id, { memo: e.target.value }),
      className: "inp",
      placeholder: "メモ（症状・経緯・連絡事項・主治医など）",
      rows: 2,
      style: { padding: '6px 8px', fontSize: 12, width: '100%', resize: 'vertical', lineHeight: 1.5, fontFamily: 'var(--font-sans)' }
    })), React.createElement("div", {
      style: { display: 'flex', flexDirection: 'column', gap: 4 }
    }, React.createElement("button", {
      className: "btn-dark",
      onClick: () => onPromote(item),
      style: { fontSize: 11, padding: '5px 8px' },
      title: "受け持ちに登録"
    }, "→受持"), React.createElement("button", {
      className: "btn-sm",
      onClick: () => onRemove(item.id),
      style: { fontSize: 11, padding: '4px 6px', opacity: .65 }
    }, "削除")));
  })), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) auto auto auto',
      gap: 6,
      marginTop: 12
    }
  }, React.createElement("input", {
    value: form.name,
    onChange: e => setForm(prev => ({ ...prev, name: e.target.value })),
    onKeyDown: e => { if (e.key === 'Enter') onAdd(); },
    className: "inp",
    placeholder: "患者名",
    "aria-label": "予兆患者名"
  }), React.createElement("select", {
    value: form.kind || 'cath',
    onChange: e => setForm(prev => ({ ...prev, kind: e.target.value })),
    className: "inp",
    style: { padding: '6px', fontSize: 12 }
  }, PATIENT_KINDS.map(k => React.createElement("option", { key: k.id, value: k.id }, k.label))), React.createElement("input", {
    type: "date",
    value: form.scheduledDate || '',
    onChange: e => setForm(prev => ({ ...prev, scheduledDate: e.target.value })),
    className: "inp",
    style: { padding: '6px', fontSize: 12 }
  }), React.createElement("button", {
    className: "btn-dark",
    onClick: onAdd,
    disabled: !form.name.trim(),
    style: { opacity: !form.name.trim() ? .45 : 1 }
  }, "追加"))));
}
function PromotePendingDialog({
  pending,
  templates,
  onClose,
  onConfirm
}) {
  const { useState, useMemo } = React;
  const [name, setName] = useState(pending.name || '');
  const [ward, setWard] = useState(pending.ward || '');
  const [priority, setPriority] = useState(pending.priority || 'normal');
  const [selectedTemplateIds, setSelectedTemplateIds] = useState([]);
  const km = kindMeta(pending.kind);
  const toggle = id => setSelectedTemplateIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const previewTasks = useMemo(() => {
    const out = [];
    selectedTemplateIds.forEach(tid => {
      const tpl = templates.find(t => t.id === tid);
      if (!tpl) return;
      (tpl.items || []).forEach(it => {
        if (it.title?.trim()) out.push(it);
      });
    });
    return out;
  }, [selectedTemplateIds, templates]);
  return React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 160,
      background: 'rgba(24,15,62,.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16
    },
    onClick: e => { if (e.target === e.currentTarget) onClose(); }
  }, React.createElement("div", {
    style: {
      background: 'var(--surface)',
      borderRadius: 14,
      maxWidth: 520,
      width: '100%',
      maxHeight: '90vh',
      overflow: 'auto',
      padding: 20,
      boxShadow: 'var(--shadow-lg)'
    }
  }, React.createElement("div", {
    style: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }
  }, React.createElement("span", {
    className: "tag",
    style: { background: km.color + '22', color: km.color }
  }, km.label), React.createElement("strong", {
    style: { fontSize: 16, fontFamily: 'var(--font-serif)' }
  }, "受け持ちに登録")), React.createElement("div", {
    style: { display: 'grid', gap: 10, marginBottom: 14 }
  }, React.createElement("label", {
    style: { display: 'grid', gap: 4, fontSize: 11, color: 'var(--text-2)', fontWeight: 700 }
  }, "名前", React.createElement("input", {
    value: name,
    onChange: e => setName(e.target.value),
    className: "inp",
    style: { padding: '6px 10px', fontSize: 13 },
    autoFocus: true
  })), React.createElement("div", {
    style: { display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 8 }
  }, React.createElement("label", {
    style: { display: 'grid', gap: 4, fontSize: 11, color: 'var(--text-2)', fontWeight: 700 }
  }, "病棟", React.createElement("select", {
    value: ward,
    onChange: e => setWard(e.target.value),
    className: "inp",
    style: { padding: '6px', fontSize: 12 }
  }, WARDS.map(w => React.createElement("option", { key: w.id, value: w.id }, w.label)))), React.createElement("label", {
    style: { display: 'grid', gap: 4, fontSize: 11, color: 'var(--text-2)', fontWeight: 700 }
  }, "優先度", React.createElement("select", {
    value: priority,
    onChange: e => setPriority(e.target.value),
    className: "inp",
    style: { padding: '6px', fontSize: 12 }
  }, [
    { id: 'er', label: 'ER' },
    { id: 'high', label: '注意' },
    { id: 'normal', label: '通常' },
    { id: 'low', label: '低' }
  ].map(p => React.createElement("option", { key: p.id, value: p.id }, p.label)))))), React.createElement("div", {
    style: { marginBottom: 10 }
  }, React.createElement("div", {
    style: { fontSize: 12, color: 'var(--text-2)', fontWeight: 700, marginBottom: 6 }
  }, "テンプレ適用（任意・複数可）"), templates.length === 0 ? React.createElement("p", {
    style: { fontSize: 12, color: 'var(--text-3)' }
  }, "テンプレートが未登録です。空のまま登録できます。") : React.createElement("div", {
    style: { display: 'grid', gap: 4 }
  }, templates.map(tpl => React.createElement("label", {
    key: tpl.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 8px',
      background: selectedTemplateIds.includes(tpl.id) ? 'var(--surface-3)' : 'var(--surface-2)',
      border: '1px solid var(--border)',
      borderRadius: 8,
      cursor: 'pointer',
      fontSize: 12
    }
  }, React.createElement("input", {
    type: "checkbox",
    checked: selectedTemplateIds.includes(tpl.id),
    onChange: () => toggle(tpl.id)
  }), React.createElement("span", { style: { fontWeight: 700 } }, tpl.name), React.createElement("span", {
    style: { marginLeft: 'auto', fontSize: 11, color: 'var(--text-3)' }
  }, (tpl.items || []).length, "項目"))))), previewTasks.length > 0 && React.createElement("div", {
    style: {
      marginBottom: 14,
      padding: 10,
      background: 'var(--surface-2)',
      borderRadius: 8,
      border: '1px solid var(--border)'
    }
  }, React.createElement("div", {
    style: { fontSize: 11, color: 'var(--text-2)', fontWeight: 700, marginBottom: 6 }
  }, "適用されるタスク (", previewTasks.length, "件)"), React.createElement("ul", {
    style: { margin: 0, padding: '0 0 0 16px', fontSize: 12, color: 'var(--text-2)', lineHeight: 1.6 }
  }, previewTasks.slice(0, 12).map((it, i) => React.createElement("li", { key: i }, it.title, " ", React.createElement("span", { style: { color: 'var(--text-3)', fontSize: 11 } }, it.estimate || '5', "分"))), previewTasks.length > 12 && React.createElement("li", { style: { color: 'var(--text-3)' } }, "…ほか ", previewTasks.length - 12, " 件"))), React.createElement("div", {
    style: { display: 'flex', justifyContent: 'flex-end', gap: 8 }
  }, React.createElement("button", {
    className: "btn-sm",
    onClick: onClose,
    style: { fontSize: 12 }
  }, "キャンセル"), React.createElement("button", {
    className: "btn-dark",
    onClick: () => onConfirm({
      name: name.trim(),
      ward,
      priority,
      templateIds: selectedTemplateIds
    }),
    disabled: !name.trim()
  }, "登録する"))));
}
function PatientTriage() {
  const {
    useState,
    useEffect,
    useMemo
  } = React;
  const [patients, setPatients] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [expandedPatients, setExpandedPatients] = useState({});
  const [newPatientName, setNewPatientName] = useState('');
  const [newPatientPri, setNewPatientPri] = useState('normal');
  const [newPatientWard, setNewPatientWard] = useState('');
  const [addPatientDialog, setAddPatientDialog] = useState(false);
  const [appMode, setAppMode] = useState('patient');
  const [dailyPatients, setDailyPatients] = useState([]);
  const [dailyGeneralTasks, setDailyGeneralTasks] = useState([]);
  const [dailyExpandedPatients, setDailyExpandedPatients] = useState({});
  const [patientSortMode, setPatientSortMode] = useState('ward');
  const [adding, setAdding] = useState({});
  const [addForm, setAddForm] = useState({});
  const [suggestion, setSuggestion] = useState(null);
  const [focusMode, setFocusMode] = useState(false);
  const [quickOnly, setQuickOnly] = useState(false);
  const [erOnly, setErOnly] = useState(false);
  const [stuckDialog, setStuckDialog] = useState(null);
  const [stuckForm, setStuckForm] = useState({
    reason: '',
    tinyStep: '',
    stepGoal: 3
  });
  const [stats, setStats] = useState({
    doneToday: 0,
    date: todayStr()
  });
  const [now, setNow] = useState(Date.now());
  const [importDialog, setImportDialog] = useState(false);
  const [importText, setImportText] = useState('');
  const [dataToolsOpen, setDataToolsOpen] = useState(false);
  const [endDayLogsOpen, setEndDayLogsOpen] = useState(false);
  const [templatesOpen, setTemplatesOpen] = useState(false);
  const [quickPresetsOpen, setQuickPresetsOpen] = useState(false);
  const [dailyQuickPresetsOpen, setDailyQuickPresetsOpen] = useState(false);
  const [routineOpen, setRoutineOpen] = useState(false);
  const [routinePromptOpen, setRoutinePromptOpen] = useState(false);
  const [templates, setTemplates] = useState([]);
  const [quickPatientPresets, setQuickPatientPresets] = useState(QUICK_PATIENT_TASKS);
  const [quickGeneralPresets, setQuickGeneralPresets] = useState(QUICK_GENERAL_TASKS);
  const [quickDailyPresets, setQuickDailyPresets] = useState(QUICK_DAILY_TASKS);
  const [dailyTaskSets, setDailyTaskSets] = useState(DEFAULT_DAILY_TASK_SETS);
  const [dailySetsOpen, setDailySetsOpen] = useState(false);
  const [dailySetTemplatesOpen, setDailySetTemplatesOpen] = useState(false);
  const [routinePresets, setRoutinePresets] = useState(DEFAULT_ROUTINE_PRESETS);
  const [dailyLinks, setDailyLinks] = useState([]);
  const [dailyLinksOpen, setDailyLinksOpen] = useState(false);
  const [patientLinks, setPatientLinks] = useState([]);
  const [patientLinksOpen, setPatientLinksOpen] = useState(false);
  const [lastDoneItems, setLastDoneItems] = useState(DEFAULT_LAST_DONE_ITEMS);
  const [lastDoneOpen, setLastDoneOpen] = useState(false);
  const [lastDoneForm, setLastDoneForm] = useState({ label: '', lastDone: todayStr() });
  const [endDayLogs, setEndDayLogs] = useState([]);
  const [rewards, setRewards] = useState([]);
  const [rewardsOpen, setRewardsOpen] = useState(false);
  const [pendingPatients, setPendingPatients] = useState([]);
  const [pendingPatientsOpen, setPendingPatientsOpen] = useState(false);
  const [pendingPatientForm, setPendingPatientForm] = useState({
    name: '',
    kind: 'cath',
    scheduledDate: ''
  });
  const [promoteTarget, setPromoteTarget] = useState(null);
  const [rewardForm, setRewardForm] = useState({
    text: '',
    when: ''
  });
  const [dailyLinkForm, setDailyLinkForm] = useState({
    title: '',
    url: ''
  });
  const [patientLinkForm, setPatientLinkForm] = useState({
    title: '',
    url: ''
  });
  const [generalTasks, setGeneralTasks] = useState([]);
  const [generalOpen, setGeneralOpen] = useState(true);
  const [quickGeneralOpen, setQuickGeneralOpen] = useState(false);
  const [quickDailyOpen, setQuickDailyOpen] = useState(false);
  const [generalForm, setGeneralForm] = useState({
    title: '',
    type: 'docs',
    estimate: '5',
    dueDate: '',
    dailyPriority: 'normal'
  });
  const [scheduledEvents, setScheduledEvents] = useState([]);
  const [scheduledOpen, setScheduledOpen] = useState(false);
  const [scheduledForm, setScheduledForm] = useState({
    title: '',
    scheduledDate: todayStr(),
    scheduledTime: ''
  });
  const [toast, setToast] = useState(null);
  const [endDayConfirm, setEndDayConfirm] = useState(false);
  const [endDayCelebrate, setEndDayCelebrate] = useState(null);
  const [gasConfig, setGasConfigState] = useState(() => loadGasConfig());
  const [gasStatus, setGasStatus] = useState('idle');
  const [gasDialog, setGasDialog] = useState(false);
  const [themeId, setThemeId] = useState(() => loadLocal(THEME_STORAGE_KEY) || 'lavender');
  const [rpgMode, setRpgMode] = useState(() => loadLocal(RPG_MODE_STORAGE_KEY) === true);
  const [timedAlertMode, setTimedAlertMode] = useState(() => loadLocal(TIMED_ALERT_MODE_STORAGE_KEY) === 'near' ? 'near' : 'all');
  const [headerBackdropMode, setHeaderBackdropMode] = useState(() => {
    const saved = loadLocal(HEADER_BACKDROP_STORAGE_KEY);
    return HEADER_BACKDROP_MODES.includes(saved) ? saved : 'auto';
  });
  const [tweaksOpen, setTweaksOpen] = useState(false);
  const [undoEntry, setUndoEntry] = useState(null);
  const [runningTask, setRunningTask] = useState(null);
  const [runningTick, setRunningTick] = useState(Date.now());
  useEffect(() => {
    if (!runningTask || runningTask.pausedAt) return;
    const id = setInterval(() => setRunningTick(Date.now()), 1000);
    return () => clearInterval(id);
  }, [runningTask]);
  const timerFiredRef = React.useRef(false);
  useEffect(() => {
    if (!runningTask || runningTask.mode !== 'timer' || runningTask.pausedAt) return;
    const elapsed = elapsedMsOf(runningTask, runningTick);
    if (!timerFiredRef.current && elapsed >= runningTask.durationMs) {
      timerFiredRef.current = true;
      try {
        if (navigator.vibrate) navigator.vibrate([180, 80, 180]);
      } catch {}
      window.dispatchEvent(new CustomEvent('chibi-coach', {
        detail: {
          kind: 'done',
          text: `⏰ ${runningTask.title} の見積もり時間です`
        }
      }));
    }
  }, [runningTask, runningTick]);
  const startTimer = task => {
    if (!task) return;
    const mins = estimateMinutes(task);
    if (!mins) {
      showToast('見積もり分が未設定です');
      return;
    }
    timerFiredRef.current = false;
    setRunningTask({
      mode: 'timer',
      taskId: task.id,
      patientId: task.patientId || null,
      isGeneral: !!task.general,
      title: task.title || '',
      startedAt: Date.now(),
      pausedAt: null,
      accumulatedPaused: 0,
      durationMs: mins * 60 * 1000
    });
    setRunningTick(Date.now());
  };
  const startTally = task => {
    if (!task) return;
    const existing = Number.parseInt(task.targetCount, 10);
    const defaultVal = Number.isFinite(existing) && existing > 0 ? existing : '';
    const input = window.prompt('何件で計測しますか？（半角数字）', String(defaultVal || ''));
    if (input === null) return;
    const target = Number.parseInt(input, 10);
    if (!Number.isFinite(target) || target <= 0) {
      showToast('1以上の整数で指定してください');
      return;
    }
    if (task.patientId && !task.general) {
      updateTask(task.patientId, task.id, {
        targetCount: target
      });
    } else if (task.general) {
      updateGeneralTask(task.id, {
        targetCount: target
      });
    }
    timerFiredRef.current = false;
    setRunningTask({
      mode: 'tally',
      taskId: task.id,
      patientId: task.patientId || null,
      isGeneral: !!task.general,
      title: task.title || '',
      startedAt: Date.now(),
      pausedAt: null,
      accumulatedPaused: 0,
      targetCount: target,
      currentCount: 0
    });
    setRunningTick(Date.now());
  };
  const stopRunning = () => {
    setRunningTask(null);
    timerFiredRef.current = false;
  };
  const pauseToggleRunning = () => {
    setRunningTask(prev => {
      if (!prev) return prev;
      if (prev.pausedAt) {
        return {
          ...prev,
          pausedAt: null,
          accumulatedPaused: (prev.accumulatedPaused || 0) + (Date.now() - prev.pausedAt)
        };
      }
      return {
        ...prev,
        pausedAt: Date.now()
      };
    });
  };
  const resetRunning = () => {
    timerFiredRef.current = false;
    setRunningTask(prev => prev ? {
      ...prev,
      startedAt: Date.now(),
      pausedAt: null,
      accumulatedPaused: 0,
      currentCount: prev.mode === 'tally' ? 0 : prev.currentCount
    } : prev);
    setRunningTick(Date.now());
  };
  const addMinuteRunning = () => {
    setRunningTask(prev => prev && prev.mode === 'timer' ? {
      ...prev,
      durationMs: (prev.durationMs || 0) + 60000
    } : prev);
    timerFiredRef.current = false;
  };
  const incrementRunning = () => {
    setRunningTask(prev => {
      if (!prev || prev.mode !== 'tally') return prev;
      const next = (prev.currentCount || 0) + 1;
      const justHit = prev.targetCount > 0 && next >= prev.targetCount && (prev.currentCount || 0) < prev.targetCount;
      if (justHit) {
        try {
          if (navigator.vibrate) navigator.vibrate([180, 80, 180]);
        } catch {}
        window.dispatchEvent(new CustomEvent('chibi-coach', {
          detail: {
            kind: 'done',
            text: `🎉 ${prev.title} ${prev.targetCount}件達成！`
          }
        }));
      }
      return {
        ...prev,
        currentCount: next
      };
    });
  };
  const completeRunning = () => {
    const r = runningTask;
    if (!r) return;
    if (r.isGeneral) {
      completeGeneralTask(r.taskId);
    } else if (r.patientId) {
      completeTask(r.patientId, r.taskId);
    }
    setRunningTask(null);
    timerFiredRef.current = false;
  };
  const effectiveHeaderBackdrop = useMemo(() => getHeaderBackdrop(headerBackdropMode, now), [headerBackdropMode, now]);
  const isDailyMode = appMode === 'daily';
  const activePatients = isDailyMode ? dailyPatients : patients;
  const setActivePatients = isDailyMode ? setDailyPatients : setPatients;
  const activeGeneralTasks = isDailyMode ? dailyGeneralTasks : generalTasks;
  const setActiveGeneralTasks = isDailyMode ? setDailyGeneralTasks : setGeneralTasks;
  const activeExpandedPatients = isDailyMode ? dailyExpandedPatients : expandedPatients;
  const setActiveExpandedPatients = isDailyMode ? setDailyExpandedPatients : setExpandedPatients;
  useEffect(() => {
    document.body.classList.toggle('daily-mode', isDailyMode);
    window.dispatchEvent(new CustomEvent('triage-mode-change', {
      detail: {
        mode: appMode
      }
    }));
    setSuggestion(null);
    setUndoEntry(null);
    setEndDayConfirm(false);
    setEndDayCelebrate(null);
    return () => document.body.classList.remove('daily-mode');
  }, [appMode]);
  const isInitialLoad = React.useRef(true);
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 60000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    const t = THEMES.find(t => t.id === themeId) || THEMES[0];
    applyTheme(t);
    saveLocal(THEME_STORAGE_KEY, themeId);
  }, [themeId]);
  useEffect(() => {
    document.body.classList.toggle('rpg-mode', rpgMode);
    saveLocal(RPG_MODE_STORAGE_KEY, rpgMode);
  }, [rpgMode]);
  useEffect(() => {
    saveLocal(TIMED_ALERT_MODE_STORAGE_KEY, timedAlertMode);
  }, [timedAlertMode]);
  useEffect(() => {
    HEADER_BACKDROP_MODES.filter(m => m !== 'auto').forEach(m => document.body.classList.remove(`header-bg-${m}`));
    document.body.classList.add(`header-bg-${effectiveHeaderBackdrop}`);
    saveLocal(HEADER_BACKDROP_STORAGE_KEY, headerBackdropMode);
  }, [headerBackdropMode, effectiveHeaderBackdrop]);
  useEffect(() => {
    const handler = e => {
      if (e.data?.type === '__activate_edit_mode') setTweaksOpen(true);
      if (e.data?.type === '__deactivate_edit_mode') setTweaksOpen(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);
  useEffect(() => {
    const parsed = loadLocal(STORAGE_KEY);
    if (parsed) {
      setPatients(parsed.patients || []);
      setDailyPatients(Array.isArray(parsed.dailyPatients) ? parsed.dailyPatients : []);
      if (parsed.stats?.date === todayStr()) setStats(parsed.stats);
      setTemplates(Array.isArray(parsed.templates) ? parsed.templates : DEFAULT_TEMPLATES);
      setQuickPatientPresets(Array.isArray(parsed.quickPatientPresets) ? parsed.quickPatientPresets : Array.isArray(parsed.quickGeneralPresets) ? parsed.quickGeneralPresets : QUICK_PATIENT_TASKS);
      setQuickGeneralPresets(Array.isArray(parsed.quickGeneralPresets) ? parsed.quickGeneralPresets : QUICK_GENERAL_TASKS);
      setQuickDailyPresets(Array.isArray(parsed.quickDailyPresets) ? parsed.quickDailyPresets : QUICK_DAILY_TASKS);
      setDailyTaskSets(Array.isArray(parsed.dailyTaskSets) ? parsed.dailyTaskSets : DEFAULT_DAILY_TASK_SETS);
      setRoutinePresets(Array.isArray(parsed.routinePresets) ? parsed.routinePresets : DEFAULT_ROUTINE_PRESETS);
      setDailyLinks(Array.isArray(parsed.dailyLinks) ? parsed.dailyLinks : []);
      setPatientLinks(Array.isArray(parsed.patientLinks) ? parsed.patientLinks : []);
      setLastDoneItems(Array.isArray(parsed.lastDoneItems) ? parsed.lastDoneItems : DEFAULT_LAST_DONE_ITEMS);
      setEndDayLogs(pruneEndDayLogs(parsed.endDayLogs));
      setRewards(Array.isArray(parsed.rewards) ? parsed.rewards : []);
      setPendingPatients(Array.isArray(parsed.pendingPatients) ? parsed.pendingPatients : []);
      setGeneralTasks(Array.isArray(parsed.generalTasks) ? parsed.generalTasks : []);
      setDailyGeneralTasks(Array.isArray(parsed.dailyGeneralTasks) ? parsed.dailyGeneralTasks : []);
      setScheduledEvents(Array.isArray(parsed.scheduledEvents) ? parsed.scheduledEvents : []);
    } else {
      setTemplates(DEFAULT_TEMPLATES);
    }
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (!loaded) return;
    saveLocal(STORAGE_KEY, {
      patients,
      stats,
      templates,
      quickPatientPresets,
      quickGeneralPresets,
      quickDailyPresets,
      dailyTaskSets,
      routinePresets,
      dailyLinks,
      patientLinks,
      lastDoneItems,
      endDayLogs: pruneEndDayLogs(endDayLogs),
      rewards,
      pendingPatients,
      generalTasks,
      dailyPatients,
      dailyGeneralTasks,
      scheduledEvents
    });
  }, [patients, stats, templates, quickPatientPresets, quickGeneralPresets, quickDailyPresets, dailyTaskSets, routinePresets, dailyLinks, patientLinks, lastDoneItems, endDayLogs, rewards, pendingPatients, generalTasks, dailyPatients, dailyGeneralTasks, scheduledEvents, loaded]);
  useEffect(() => {
    if (!loaded) return;
    const stamp = todayStr();
    if (loadLocal(ROUTINE_PROMPT_STORAGE_KEY) === stamp) return;
    const day = currentWorkday().getDay();
    const hasTodayRoutine = routinePresets.some(item => (item.weekdays || []).includes(day) && item.title?.trim());
    if (!hasTodayRoutine) {
      saveLocal(ROUTINE_PROMPT_STORAGE_KEY, stamp);
      return;
    }
    setRoutinePromptOpen(true);
  }, [loaded, routinePresets]);
  const sortedPatients = useMemo(() => {
    const order = {
      er: 0,
      high: 1,
      normal: 2,
      low: 3
    };
    return [...activePatients].sort((a, b) => {
      const pa = order[getPri(a)],
        pb = order[getPri(b)];
      if (patientSortMode === 'ward') {
        const wa = WARD_ORDER[getWard(a)] ?? 0;
        const wb = WARD_ORDER[getWard(b)] ?? 0;
        if (wa !== wb) return wa - wb;
        if (pa !== pb) return pa - pb;
        return (a.createdAt || 0) - (b.createdAt || 0);
      }
      return pa !== pb ? pa - pb : (a.createdAt || 0) - (b.createdAt || 0);
    });
  }, [activePatients, patientSortMode]);
  const flatTasks = useMemo(() => activePatients.flatMap(p => p.tasks.map(t => ({
    ...t,
    patientId: p.id,
    patientName: p.name,
    patientPriority: getPri(p)
  }))), [activePatients]);
  const stuckTasks = useMemo(() => flatTasks.filter(t => t.status === 'stuck'), [flatTasks]);
  const openTaskCount = useMemo(() => flatTasks.filter(t => t.status !== 'done').length, [flatTasks]);
  const remainingPatientTasks = useMemo(() => flatTasks.filter(t => t.status !== 'done'), [flatTasks]);
  const remainingGeneralTasks = useMemo(() => activeGeneralTasks.filter(t => t.status !== 'done'), [activeGeneralTasks]);
  const donePatientTaskCount = useMemo(() => flatTasks.filter(t => t.status === 'done').length, [flatTasks]);
  const openGeneralCount = useMemo(() => activeGeneralTasks.filter(t => t.status !== 'done').length, [activeGeneralTasks]);
  const doneGeneralTaskCount = useMemo(() => activeGeneralTasks.filter(t => t.status === 'done').length, [activeGeneralTasks]);
  const openScheduledCount = useMemo(() => scheduledEvents.filter(e => e.status !== 'done').length, [scheduledEvents]);
  const doneTaskCount = donePatientTaskCount + doneGeneralTaskCount;
  const timedAlerts = useMemo(() => {
    const patientAlerts = flatTasks.filter(t => t.status !== 'done' && t.scheduledTime).map(t => ({
      ...t,
      ts: timeStatus(t.scheduledTime, now)
    })).filter(t => t.ts && (timedAlertMode === 'all' || t.ts === 'past' || t.ts === 'now' || t.ts === 'soon'));
    const eventAlerts = scheduledEvents.filter(e => e.status !== 'done' && e.scheduledTime).map(e => ({
      ...e,
      patientName: '予定',
      scheduledEvent: true,
      ts: dateTimeStatus(e.scheduledDate, e.scheduledTime, now)
    })).filter(e => e.ts && (timedAlertMode === 'all' || e.ts === 'past' || e.ts === 'now' || e.ts === 'soon'));
    const pendingAlerts = pendingPatients.filter(p => p.scheduledDate).map(p => {
      const days = daysUntilDateStr(p.scheduledDate);
      return { ...p, days };
    }).filter(p => p.days != null && p.days <= PENDING_PATIENT_ALERT_DAYS).map(p => {
      const km = kindMeta(p.kind);
      return {
        id: 'pending-' + p.id,
        title: `${km.label}: ${p.name}${p.days < 0 ? `（${-p.days}日経過）` : p.days === 0 ? '（今日）' : `（あと${p.days}日）`}`,
        patientName: '予兆',
        pendingEntry: p,
        scheduledDate: p.scheduledDate,
        scheduledTime: '',
        ts: p.days < 0 ? 'past' : p.days === 0 ? 'now' : 'soon'
      };
    });
    return [...patientAlerts, ...eventAlerts, ...pendingAlerts].sort((a, b) => (a.scheduledDate || '').localeCompare(b.scheduledDate || '') || (a.scheduledTime || '').localeCompare(b.scheduledTime || ''));
  }, [flatTasks, scheduledEvents, now, timedAlertMode, pendingPatients]);
  const cloneForUndo = value => JSON.parse(JSON.stringify(value));
  const rememberUndo = label => setUndoEntry({
    label,
    patients: cloneForUndo(activePatients),
    stats: cloneForUndo(stats),
    templates: cloneForUndo(templates),
    quickPatientPresets: cloneForUndo(quickPatientPresets),
    quickGeneralPresets: cloneForUndo(quickGeneralPresets),
    quickDailyPresets: cloneForUndo(quickDailyPresets),
    dailyTaskSets: cloneForUndo(dailyTaskSets),
    routinePresets: cloneForUndo(routinePresets),
    dailyLinks: cloneForUndo(dailyLinks),
    patientLinks: cloneForUndo(patientLinks),
    lastDoneItems: cloneForUndo(lastDoneItems),
    endDayLogs: cloneForUndo(endDayLogs),
    rewards: cloneForUndo(rewards),
    pendingPatients: cloneForUndo(pendingPatients),
    generalTasks: cloneForUndo(activeGeneralTasks),
    scheduledEvents: cloneForUndo(scheduledEvents),
    expandedPatients: cloneForUndo(activeExpandedPatients),
    suggestion: cloneForUndo(suggestion),
    at: Date.now()
  });
  const undoLast = () => {
    if (!undoEntry) return;
    setActivePatients(undoEntry.patients || []);
    setStats(undoEntry.stats || {
      doneToday: 0,
      date: todayStr()
    });
    setTemplates(Array.isArray(undoEntry.templates) ? undoEntry.templates : DEFAULT_TEMPLATES);
    setQuickPatientPresets(Array.isArray(undoEntry.quickPatientPresets) ? undoEntry.quickPatientPresets : Array.isArray(undoEntry.quickGeneralPresets) ? undoEntry.quickGeneralPresets : QUICK_PATIENT_TASKS);
    setQuickGeneralPresets(Array.isArray(undoEntry.quickGeneralPresets) ? undoEntry.quickGeneralPresets : QUICK_GENERAL_TASKS);
    setQuickDailyPresets(Array.isArray(undoEntry.quickDailyPresets) ? undoEntry.quickDailyPresets : QUICK_DAILY_TASKS);
    setDailyTaskSets(Array.isArray(undoEntry.dailyTaskSets) ? undoEntry.dailyTaskSets : DEFAULT_DAILY_TASK_SETS);
    setRoutinePresets(Array.isArray(undoEntry.routinePresets) ? undoEntry.routinePresets : DEFAULT_ROUTINE_PRESETS);
    setDailyLinks(Array.isArray(undoEntry.dailyLinks) ? undoEntry.dailyLinks : []);
    setPatientLinks(Array.isArray(undoEntry.patientLinks) ? undoEntry.patientLinks : []);
    setLastDoneItems(Array.isArray(undoEntry.lastDoneItems) ? undoEntry.lastDoneItems : DEFAULT_LAST_DONE_ITEMS);
    setEndDayLogs(pruneEndDayLogs(undoEntry.endDayLogs));
    setRewards(Array.isArray(undoEntry.rewards) ? undoEntry.rewards : []);
    setPendingPatients(Array.isArray(undoEntry.pendingPatients) ? undoEntry.pendingPatients : []);
    setActiveGeneralTasks(Array.isArray(undoEntry.generalTasks) ? undoEntry.generalTasks : []);
    setScheduledEvents(Array.isArray(undoEntry.scheduledEvents) ? undoEntry.scheduledEvents : []);
    setActiveExpandedPatients(undoEntry.expandedPatients || {});
    setSuggestion(undoEntry.suggestion || null);
    setEndDayCelebrate(null);
    setEndDayConfirm(false);
    setUndoEntry(null);
    showToast(`${undoEntry.label || '直前の操作'}を元に戻しました`);
  };
  const addPatient = () => {
    const name = newPatientName.trim();
    if (!name) return;
    const p = {
      id: uid(),
      name,
      priority: newPatientPri,
      ward: newPatientWard,
      memo: '',
      alerts: {},
      tasks: [],
      createdAt: Date.now()
    };
    rememberUndo('患者追加');
    setActivePatients(prev => [...prev, p]);
    setActiveExpandedPatients(prev => ({
      ...prev,
      [p.id]: true
    }));
    setNewPatientName('');
    setNewPatientPri('normal');
    setNewPatientWard('');
    setAddPatientDialog(false);
  };
  const removePatient = id => {
    const patient = activePatients.find(p => p.id === id);
    if (patient) rememberUndo(`${patient.name}の終了`);
    setActivePatients(prev => prev.filter(p => p.id !== id));
    if (patient) {
      showToast(`${patient.name} 終了おつかれさまでした`);
      window.dispatchEvent(new CustomEvent('chibi-coach', {
        detail: {
          kind: 'done'
        }
      }));
    }
  };
  const setPatientPriority = (id, priority) => setActivePatients(prev => prev.map(p => p.id === id ? {
    ...p,
    priority
  } : p));
  const setPatientWard = (id, ward) => setActivePatients(prev => prev.map(p => p.id === id ? {
    ...p,
    ward
  } : p));
  const togglePatientAlert = (id, alertId) => {
    rememberUndo('患者アラート変更');
    setActivePatients(prev => prev.map(p => {
      if (p.id !== id) return p;
      const alerts = { ...(p.alerts || {}) };
      if (alerts[alertId]) delete alerts[alertId];else alerts[alertId] = true;
      return { ...p, alerts };
    }));
  };
  const renamePatient = (id, name) => {
    const t = name.trim();
    if (t) setActivePatients(prev => prev.map(p => p.id === id ? {
      ...p,
      name: t
    } : p));
  };
  const updatePatientMemo = (id, memo) => setActivePatients(prev => prev.map(p => p.id === id ? {
    ...p,
    memo
  } : p));
  const toggleExpand = id => setActiveExpandedPatients(prev => ({
    ...prev,
    [id]: !prev[id]
  }));
  const addTask = patientId => {
    const form = addForm[patientId] || {};
    const title = (form.title || '').trim();
    if (!title) return;
    const task = {
      id: uid(),
      title,
      type: form.type || 'other',
      estimate: form.estimate || '5',
      scheduledTime: form.scheduledTime || null,
      status: 'todo',
      stuckReason: '',
      tinyStep: '',
      createdAt: Date.now()
    };
    rememberUndo('タスク追加');
    setActivePatients(prev => prev.map(p => p.id === patientId ? {
      ...p,
      tasks: [...p.tasks, task]
    } : p));
    setAddForm(prev => ({
      ...prev,
      [patientId]: {
        ...form,
        title: '',
        scheduledTime: ''
      }
    }));
  };
  const addQuickPatientTask = (patientId, preset) => {
    if (!preset?.title?.trim()) return;
    const task = {
      id: uid(),
      title: preset.title.trim(),
      type: preset.type || 'docs',
      estimate: preset.estimate || '5',
      scheduledTime: null,
      status: 'todo',
      stuckReason: '',
      tinyStep: '',
      createdAt: Date.now()
    };
    rememberUndo('患者よく使うタスク追加');
    setActivePatients(prev => prev.map(p => p.id === patientId ? {
      ...p,
      tasks: [...p.tasks, task]
    } : p));
    showToast(`「${preset.title}」を追加`);
  };
  const updateTask = (patientId, taskId, updates) => {
    if (Object.prototype.hasOwnProperty.call(updates || {}, 'status')) rememberUndo('タスク状態変更');
    setActivePatients(prev => prev.map(p => p.id === patientId ? {
      ...p,
      tasks: p.tasks.map(t => t.id === taskId ? {
        ...t,
        ...updates
      } : t)
    } : p));
  };
  const completeTask = (patientId, taskId) => {
    rememberUndo('タスク完了');
    updateTask(patientId, taskId, {
      status: 'done',
      completedAt: Date.now()
    });
    setStats(prev => {
      const workDate = todayStr();
      const baseCount = prev.date === workDate ? prev.doneToday : 0;
      const nextCount = baseCount + 1;
      const milestone = milestoneForDone(nextCount);
      if (milestone && prev.lastMilestone !== milestone) {
        setTimeout(() => {
          showToast(MILESTONE_LINES[milestone]);
          window.dispatchEvent(new CustomEvent('chibi-coach', {
            detail: {
              kind: 'done'
            }
          }));
        }, 260);
      }
      return {
        ...prev,
        doneToday: nextCount,
        date: workDate,
        lastMilestone: milestone || prev.lastMilestone || 0
      };
    });
    if (suggestion?.task?.id === taskId) setSuggestion(null);
  };
  const removeTask = (patientId, taskId) => {
    rememberUndo('タスク削除');
    setActivePatients(prev => prev.map(p => p.id === patientId ? {
      ...p,
      tasks: p.tasks.filter(t => t.id !== taskId)
    } : p));
    if (suggestion?.task?.id === taskId) setSuggestion(null);
  };
  const markStuck = (patientId, taskId) => {
    const task = activePatients.find(p => p.id === patientId)?.tasks.find(t => t.id === taskId);
    setStuckForm({
      reason: task?.stuckReason || '',
      tinyStep: task?.tinyStep || '',
      stepGoal: stuckStepGoal(task)
    });
    setStuckDialog({
      patientId,
      taskId
    });
  };
  const saveStuck = () => {
    if (!stuckDialog) return;
    const currentStuckTask = activePatients.find(p => p.id === stuckDialog.patientId)?.tasks.find(t => t.id === stuckDialog.taskId);
    const stuckPatch = {
      status: 'stuck',
      stuckReason: stuckForm.reason,
      tinyStep: stuckForm.tinyStep,
      stuckStepGoal: Number(stuckForm.stepGoal) || 3,
      stuckStepDone: stuckStepDone(currentStuckTask)
    };
    updateTask(stuckDialog.patientId, stuckDialog.taskId, stuckPatch);
    setSuggestion(prev => prev?.task?.id === stuckDialog.taskId ? {
      ...prev,
      task: {
        ...prev.task,
        ...stuckPatch
      }
    } : prev);
    setStuckDialog(null);
    setStuckForm({
      reason: '',
      tinyStep: '',
      stepGoal: 3
    });
  };
  const unstick = (patientId, taskId) => updateTask(patientId, taskId, {
    status: 'todo'
  });
  const advanceStuckStep = (patientId, taskId) => {
    const task = activePatients.find(p => p.id === patientId)?.tasks.find(t => t.id === taskId);
    if (!task) return;
    const goal = stuckStepGoal(task);
    const next = Math.min(goal, stuckStepDone(task) + 1);
    const entry = {
      text: task.tinyStep || task.title || '2分進めた',
      at: Date.now()
    };
    const nextLog = [...(Array.isArray(task.stuckStepLog) ? task.stuckStepLog : []), entry].slice(-8);
    updateTask(patientId, taskId, {
      stuckStepDone: next,
      stuckStepLog: nextLog
    });
    setSuggestion(prev => prev?.task?.id === taskId ? {
      ...prev,
      task: {
        ...prev.task,
        stuckStepDone: next,
        stuckStepLog: nextLog
      }
    } : prev);
    showToast(next >= goal ? `2分の一歩 ${next}/${goal}。解除できそうです` : `2分の一歩 ${next}/${goal}`);
  };
  const clearDoneTasks = patientId => {
    rememberUndo('完了済みタスク消去');
    setActivePatients(prev => prev.map(p => p.id === patientId ? {
      ...p,
      tasks: p.tasks.filter(t => t.status !== 'done')
    } : p));
  };
  const showToast = msg => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };
  const requestEndDay = () => {
    if (!doneTaskCount) {
      endDay();
      return;
    }
    setEndDayConfirm(true);
  };
  const endDay = () => {
    const total = doneTaskCount;
    if (!total) {
      showToast('完了済みタスクはまだありません。ここまでの整理だけでも十分です。');
      window.dispatchEvent(new CustomEvent('chibi-coach', {
        detail: {
          kind: 'idle'
        }
      }));
      return;
    }
    rememberUndo('今日はおしまい');
    const stamp = todayStr();
    const patientTasks = activePatients.flatMap(p => (p.tasks || []).filter(t => t.status === 'done').map(t => ({
      patientName: p.name,
      title: t.title,
      type: t.type,
      estimate: t.estimate,
      completedAt: t.completedAt || null
    })));
    const generalTasksDone = activeGeneralTasks.filter(t => t.status === 'done').map(t => ({
      title: t.title,
      type: t.type,
      estimate: t.estimate,
      mode: isDailyMode ? 'daily' : 'patient',
      completedAt: t.completedAt || null
    }));
    const eventsDone = scheduledEvents.filter(e => e.status === 'done' && (!e.scheduledDate || e.scheduledDate === stamp)).map(e => ({
      title: e.title,
      scheduledTime: e.scheduledTime || '',
      completedAt: e.completedAt || null
    }));
    const entry = {
      id: stamp,
      date: stamp,
      weekStart: currentWeekRange().start,
      createdAt: Date.now(),
      mode: isDailyMode ? 'daily' : 'patient',
      count: patientTasks.length + generalTasksDone.length + eventsDone.length,
      patientTasks,
      generalTasks: generalTasksDone,
      events: eventsDone
    };
    setEndDayLogs(prev => {
      const existing = (prev || []).find(log => log.date === stamp);
      const merged = existing ? {
        ...entry,
        patientTasks: [...(existing.patientTasks || []), ...patientTasks],
        generalTasks: [...(existing.generalTasks || []), ...generalTasksDone],
        events: [...(existing.events || []), ...eventsDone]
      } : entry;
      merged.count = (merged.patientTasks || []).length + (merged.generalTasks || []).length + (merged.events || []).length;
      return pruneEndDayLogs([...(prev || []).filter(log => log.date !== stamp), merged], stamp);
    });
    setEndDayLogsOpen(true);
    setActivePatients(prev => prev.map(p => ({
      ...p,
      tasks: p.tasks.filter(t => t.status !== 'done')
    })));
    setActiveGeneralTasks(prev => prev.filter(t => t.status !== 'done'));
    if (suggestion?.task?.status === 'done') setSuggestion(null);
    showToast(`今日の完了タスク ${total}件を片づけました。おつかれさまでした!`);
    setEndDayCelebrate({
      count: total,
      id: Date.now()
    });
    window.dispatchEvent(new CustomEvent('chibi-coach', {
      detail: {
        kind: 'endday'
      }
    }));
    setTimeout(() => setEndDayCelebrate(null), 3800);
  };
  const addGeneralTask = () => {
    const title = (generalForm.title || '').trim();
    if (!title) return;
    const task = {
      id: uid(),
      title,
      type: generalForm.type || (isDailyMode ? 'home' : 'docs'),
      estimate: generalForm.estimate || '5',
      dueDate: generalForm.dueDate || null,
      dailyPriority: isDailyMode ? generalForm.dailyPriority || 'normal' : undefined,
      status: 'todo',
      createdAt: Date.now(),
      general: true
    };
    rememberUndo('すきまタスク追加');
    setActiveGeneralTasks(prev => [...prev, task]);
    setGeneralForm(prev => ({
      ...prev,
      title: '',
      dueDate: '',
      dailyPriority: isDailyMode ? prev.dailyPriority || 'normal' : prev.dailyPriority
    }));
    setGeneralOpen(true);
  };
  const addQuickGeneralTask = preset => {
    const task = {
      id: uid(),
      title: preset.title,
      type: preset.type,
      estimate: preset.estimate,
      dueDate: null,
      dailyPriority: isDailyMode ? preset.dailyPriority || 'normal' : undefined,
      status: 'todo',
      createdAt: Date.now(),
      general: true
    };
    rememberUndo('すきまタスク追加');
    setActiveGeneralTasks(prev => [...prev, task]);
    setGeneralOpen(true);
  };
  const updateGeneralTask = (taskId, updates) => {
    if (Object.prototype.hasOwnProperty.call(updates || {}, 'status')) rememberUndo('すきまタスク状態変更');
    setActiveGeneralTasks(prev => prev.map(t => t.id === taskId ? {
      ...t,
      ...updates
    } : t));
    if (suggestion?.task?.general && suggestion.task.id === taskId && updates.status === 'done') setSuggestion(null);
  };
  const removeGeneralTask = taskId => {
    rememberUndo('すきまタスク削除');
    setActiveGeneralTasks(prev => prev.filter(t => t.id !== taskId));
    if (suggestion?.task?.general && suggestion.task.id === taskId) setSuggestion(null);
  };
  const clearDoneGeneralTasks = () => {
    rememberUndo('すきま完了済み消去');
    setActiveGeneralTasks(prev => prev.filter(t => t.status !== 'done'));
  };
  const completeGeneralTask = taskId => {
    rememberUndo('すきまタスク完了');
    updateGeneralTask(taskId, {
      status: 'done',
      completedAt: Date.now()
    });
    setStats(prev => {
      const workDate = todayStr();
      const baseCount = prev.date === workDate ? prev.doneToday : 0;
      const nextCount = baseCount + 1;
      const milestone = milestoneForDone(nextCount);
      if (milestone && prev.lastMilestone !== milestone) {
        setTimeout(() => {
          showToast(MILESTONE_LINES[milestone]);
          window.dispatchEvent(new CustomEvent('chibi-coach', {
            detail: {
              kind: 'done'
            }
          }));
        }, 260);
      }
      return {
        ...prev,
        doneToday: nextCount,
        date: workDate,
        lastMilestone: milestone || prev.lastMilestone || 0
      };
    });
  };
  const addScheduledEvent = () => {
    const title = (scheduledForm.title || '').trim();
    const scheduledTime = scheduledForm.scheduledTime;
    const scheduledDate = scheduledForm.scheduledDate || todayStr();
    if (!title || !scheduledTime) return;
    rememberUndo('予定追加');
    setScheduledEvents(prev => [...prev, {
      id: uid(),
      title,
      scheduledDate,
      scheduledTime,
      status: 'todo',
      createdAt: Date.now(),
      scheduledEvent: true
    }]);
    setScheduledForm({
      title: '',
      scheduledDate,
      scheduledTime
    });
    setScheduledOpen(true);
  };
  const updateScheduledEvent = (eventId, updates) => {
    if (Object.prototype.hasOwnProperty.call(updates || {}, 'status')) rememberUndo('予定状態変更');
    setScheduledEvents(prev => prev.map(e => e.id === eventId ? {
      ...e,
      ...updates
    } : e));
  };
  const removeScheduledEvent = eventId => {
    rememberUndo('予定削除');
    setScheduledEvents(prev => prev.filter(e => e.id !== eventId));
  };
  const clearDoneScheduledEvents = () => {
    rememberUndo('完了済み予定消去');
    setScheduledEvents(prev => prev.filter(e => e.status !== 'done'));
  };
  const addDailyLink = () => {
    const title = (dailyLinkForm.title || '').trim();
    const url = (dailyLinkForm.url || '').trim();
    if (!title || !url) return;
    rememberUndo('リンク追加');
    setDailyLinks(prev => [...prev, {
      id: uid(),
      title,
      url,
      createdAt: Date.now()
    }]);
    setDailyLinkForm({
      title: '',
      url: ''
    });
    setDailyLinksOpen(true);
  };
  const updateDailyLink = (id, updates) => {
    setDailyLinks(prev => prev.map(link => link.id === id ? {
      ...link,
      ...updates
    } : link));
  };
  const removeDailyLink = id => {
    rememberUndo('リンク削除');
    setDailyLinks(prev => prev.filter(link => link.id !== id));
  };  const addPatientLink = () => {
    const title = (patientLinkForm.title || '').trim();
    const url = (patientLinkForm.url || '').trim();
    if (!title || !url) return;
    rememberUndo('ぺいとりリンク追加');
    setPatientLinks(prev => [...prev, {
      id: uid(),
      title,
      url,
      createdAt: Date.now()
    }]);
    setPatientLinkForm({
      title: '',
      url: ''
    });
    setPatientLinksOpen(true);
  };
  const updatePatientLink = (id, updates) => {
    setPatientLinks(prev => prev.map(link => link.id === id ? {
      ...link,
      ...updates
    } : link));
  };
  const removePatientLink = id => {
    rememberUndo('ぺいとりリンク削除');
    setPatientLinks(prev => prev.filter(link => link.id !== id));
  };
  const addLastDoneItem = () => {
    const label = (lastDoneForm.label || '').trim();
    if (!label) return;
    rememberUndo('前回記録項目追加');
    setLastDoneItems(prev => [...prev, {
      id: uid(),
      label,
      lastDone: lastDoneForm.lastDone || ''
    }]);
    setLastDoneForm({
      label: '',
      lastDone: todayStr()
    });
    setLastDoneOpen(true);
  };
  const updateLastDoneItem = (id, updates) => {
    setLastDoneItems(prev => prev.map(item => item.id === id ? {
      ...item,
      ...updates
    } : item));
  };
  const removeLastDoneItem = id => {
    rememberUndo('前回記録項目削除');
    setLastDoneItems(prev => prev.filter(item => item.id !== id));
  };
  const markLastDoneToday = id => {
    rememberUndo('前回記録更新');
    setLastDoneItems(prev => prev.map(item => item.id === id ? {
      ...item,
      lastDone: todayStr()
    } : item));
    setLastDoneOpen(true);
  };
  const clearLastDone = id => {
    rememberUndo('前回記録クリア');
    updateLastDoneItem(id, { lastDone: '' });
  };
  const addReward = () => {
    const text = (rewardForm.text || '').trim();
    if (!text) return;
    rememberUndo('ご褒美追加');
    setRewards(prev => [...prev, {
      id: uid(),
      text,
      when: (rewardForm.when || '').trim(),
      createdAt: Date.now()
    }]);
    setRewardForm({
      text: '',
      when: ''
    });
    setRewardsOpen(true);
  };
  const updateReward = (id, updates) => {
    setRewards(prev => prev.map(r => r.id === id ? {
      ...r,
      ...updates
    } : r));
  };
  const removeReward = id => {
    rememberUndo('ご褒美削除');
    setRewards(prev => prev.filter(r => r.id !== id));
  };
  const addPendingPatient = () => {
    const name = (pendingPatientForm.name || '').trim();
    if (!name) return;
    rememberUndo('予兆患者追加');
    setPendingPatients(prev => [...prev, {
      id: uid(),
      name,
      kind: pendingPatientForm.kind || 'cath',
      scheduledDate: pendingPatientForm.scheduledDate || '',
      ward: '',
      priority: 'normal',
      memo: '',
      createdAt: Date.now()
    }]);
    setPendingPatientForm({
      name: '',
      kind: pendingPatientForm.kind || 'cath',
      scheduledDate: ''
    });
    setPendingPatientsOpen(true);
  };
  const updatePendingPatient = (id, updates) => {
    setPendingPatients(prev => prev.map(item => item.id === id ? {
      ...item,
      ...updates
    } : item));
  };
  const removePendingPatient = id => {
    rememberUndo('予兆患者削除');
    setPendingPatients(prev => prev.filter(item => item.id !== id));
  };
  const confirmPromote = (pending, fields) => {
    if (!pending || !fields.name) return;
    const newPatient = {
      id: uid(),
      name: fields.name,
      priority: fields.priority || 'normal',
      ward: fields.ward || '',
      memo: pending.memo ? `(元: ${kindMeta(pending.kind).label}${pending.scheduledDate ? ' ' + pending.scheduledDate : ''}) ${pending.memo}` : '',
      tasks: [],
      createdAt: Date.now()
    };
    (fields.templateIds || []).forEach(tid => {
      const tpl = templates.find(t => t.id === tid);
      if (!tpl) return;
      (tpl.items || []).forEach(it => {
        if (!it.title?.trim()) return;
        newPatient.tasks.push({
          id: uid(),
          title: it.title.trim(),
          type: it.type || 'other',
          estimate: it.estimate || '5',
          scheduledTime: null,
          status: 'todo',
          stuckReason: '',
          tinyStep: '',
          createdAt: Date.now()
        });
      });
    });
    rememberUndo('予兆患者を受け持ちに登録');
    setPatients(prev => [...prev, newPatient]);
    setExpandedPatients(prev => ({
      ...prev,
      [newPatient.id]: true
    }));
    setPendingPatients(prev => prev.filter(item => item.id !== pending.id));
    setPromoteTarget(null);
    showToast(`${newPatient.name} を受け持ちに登録しました`);
  };
  const suggestNext = () => {
    let pool = flatTasks.filter(t => t.status === 'todo' || t.status === 'doing');
    if (erOnly) {
      pool = pool.filter(t => t.patientPriority === 'er');
    }
    if (quickOnly) {
      const quick = pool.filter(t => t.estimate === '2');
      pool = quick.length > 0 ? quick : pool;
    }
    if (!suggestion?.fromGeneral && suggestion?.task?.id && pool.length > 1) {
      const alternatePool = pool.filter(t => t.id !== suggestion.task.id);
      if (alternatePool.length) pool = alternatePool;
    }
    if (!pool.length) {
      let generalPool = erOnly ? [] : activeGeneralTasks.filter(t => t.status === 'todo' || t.status === 'doing');
      if (quickOnly) {
        const quick = generalPool.filter(t => t.estimate === '2');
        generalPool = quick.length > 0 ? quick : generalPool;
      }
      if (suggestion?.fromGeneral && suggestion?.task?.id && generalPool.length > 1) {
        const alternateGeneralPool = generalPool.filter(t => t.id !== suggestion.task.id);
        if (alternateGeneralPool.length) generalPool = alternateGeneralPool;
      }
      if (!generalPool.length) {
        setSuggestion({
          empty: true
        });
        return;
      }
      const generalWeights = generalPool.map(t => {
        const estW = {
          '2': 1.7,
          '5': 1.25,
          '10': 1.1,
          '15': 1.0,
          '30': 0.7
        }[t.estimate] || 1;
        const stateW = t.status === 'doing' ? 1.9 : 1.0;
        const priorityW = isDailyMode ? (DAILY_TASK_PRIORITIES.find(p => p.id === t.dailyPriority)?.weight || 1) : 1;
        const dueW = t.dueDate && t.dueDate <= todayStr() ? 1.8 : 1;
        return estW * stateW * priorityW * dueW;
      });
      const generalTotal = generalWeights.reduce((a, b) => a + b, 0);
      let generalRoll = Math.random() * generalTotal;
      let pick = generalPool[generalPool.length - 1];
      for (let i = 0; i < generalPool.length; i++) {
        generalRoll -= generalWeights[i];
        if (generalRoll <= 0) {
          pick = generalPool[i];
          break;
        }
      }
      setSuggestion({
        task: {
          ...pick,
          general: true,
          patientName: 'すきまタスク',
          patientPriority: 'low'
        },
        fromGeneral: true
      });
      return;
    }
    const weights = pool.map(t => {
      const estW = {
        '2': 1.6,
        '5': 1.2,
        '15': 1.0,
        '30': 0.7
      }[t.estimate] || 1;
      const stateW = t.status === 'doing' ? 1.8 : 1.0;
      const priW = t.patientPriority === 'er' ? 3.0 : t.patientPriority === 'high' ? 2.2 : t.patientPriority === 'low' ? 0.55 : 1.0;
      const ts = timeStatus(t.scheduledTime, now);
      const schedW = ts === 'past' ? 3.5 : ts === 'now' ? 3.0 : ts === 'soon' ? 2.2 : ts === 'upcoming' ? 1.4 : 1.0;
      return estW * stateW * priW * schedW;
    });
    const total = weights.reduce((a, b) => a + b, 0);
    let r = Math.random() * total,
      pick = pool[pool.length - 1];
    for (let i = 0; i < pool.length; i++) {
      r -= weights[i];
      if (r <= 0) {
        pick = pool[i];
        break;
      }
    }
    setSuggestion({
      task: pick
    });
  };
  const suggestFromStuck = () => {
    if (!stuckTasks.length) return;
    setSuggestion({
      task: stuckTasks[Math.floor(Math.random() * stuckTasks.length)],
      fromStuck: true
    });
  };
  const showFinishEstimate = () => {
    const remaining = [...remainingPatientTasks, ...remainingGeneralTasks];
    const count = remaining.length;
    if (isDailyMode) {
      const taskMinutes = remaining.reduce((sum, task) => sum + estimateMinutes(task), 0);
      const untilMidnight = minutesUntilNextMidnight(new Date());
      const freeMinutes = Math.max(0, untilMidnight - taskMinutes);
      window.dispatchEvent(new CustomEvent('chibi-coach', {
        detail: {
          kind: 'estimate',
          estimate: {
            mode: 'daily',
            count,
            duration: formatDuration(taskMinutes),
            freeDuration: formatDuration(freeMinutes),
            untilMidnight: formatDuration(untilMidnight)
          }
        }
      }));
      return;
    }
    if (!count) {
      window.dispatchEvent(new CustomEvent('chibi-coach', {
        detail: {
          kind: 'estimate',
          estimate: {
            count: 0,
            duration: '0\u5206',
            finishTime: ''
          }
        }
      }));
      return;
    }
    const totalMinutes = remaining.reduce((sum, task) => sum + estimateMinutes(task), 0);
    const finishAt = new Date(Date.now() + totalMinutes * 60000);
    window.dispatchEvent(new CustomEvent('chibi-coach', {
      detail: {
        kind: 'estimate',
        estimate: {
          count,
          duration: formatDuration(totalMinutes),
          finishTime: formatClock(finishAt)
        }
      }
    }));
  };
  const applyTemplate = (patientId, template) => {
    const newTasks = template.items.filter(i => i.title?.trim()).map(i => ({
      id: uid(),
      title: i.title.trim(),
      type: i.type || 'other',
      estimate: i.estimate || '5',
      scheduledTime: null,
      status: 'todo',
      stuckReason: '',
      tinyStep: '',
      createdAt: Date.now()
    }));
    if (!newTasks.length) {
      showToast('テンプレートが空です');
      return;
    }
    setActivePatients(prev => prev.map(p => p.id === patientId ? {
      ...p,
      tasks: [...p.tasks, ...newTasks]
    } : p));
    setActiveExpandedPatients(prev => ({
      ...prev,
      [patientId]: true
    }));
    showToast(`「${template.name}」${newTasks.length}件追加`);
  };
  const applyDailyTaskSet = set => {
    const newTasks = (set.items || []).filter(i => i.title?.trim()).map(i => ({
      id: uid(),
      title: i.title.trim(),
      type: i.type || 'home',
      estimate: i.estimate || '5',
      dailyPriority: i.dailyPriority || 'normal',
      dueDate: '',
      status: 'todo',
      createdAt: Date.now(),
      general: true
    }));
    if (!newTasks.length) {
      showToast('セットが空です');
      return;
    }
    rememberUndo('でいとりセット展開');
    setDailyGeneralTasks(prev => [...prev, ...newTasks]);
    setGeneralOpen(true);
    showToast(`「${set.name}」${newTasks.length}件追加`);
  };  const updateTemplate = (id, updates) => setTemplates(prev => prev.map(t => t.id === id ? {
    ...t,
    ...updates
  } : t));
  const deleteTemplate = id => {
    if (window.confirm('このテンプレートを削除しますか?')) setTemplates(prev => prev.filter(t => t.id !== id));
  };
  const addTemplate = () => {
    const name = window.prompt('新しいセットの名前:', '');
    if (name?.trim()) setTemplates(prev => [...prev, {
      id: uid(),
      name: name.trim(),
      items: []
    }]);
  };
  const addTemplateItem = tid => setTemplates(prev => prev.map(t => t.id === tid ? {
    ...t,
    items: [...t.items, {
      title: '',
      type: 'other',
      estimate: '5'
    }]
  } : t));
  const updateTemplateItem = (tid, idx, upd) => setTemplates(prev => prev.map(t => t.id === tid ? {
    ...t,
    items: t.items.map((it, i) => i === idx ? {
      ...it,
      ...upd
    } : it)
  } : t));
  const removeTemplateItem = (tid, idx) => setTemplates(prev => prev.map(t => t.id === tid ? {
    ...t,
    items: t.items.filter((_, i) => i !== idx)
  } : t));
  const addQuickPreset = mode => {
    rememberUndo('よく使う項目追加');
    const item = mode === 'daily' ? {
      id: uid(),
      title: '新しい項目',
      type: 'home',
      estimate: '5',
      dailyPriority: 'normal'
    } : mode === 'patient' ? {
      id: uid(),
      title: '新しい項目',
      type: 'chart',
      estimate: '5'
    } : {
      id: uid(),
      title: '新しい項目',
      type: 'docs',
      estimate: '5'
    };
    if (mode === 'daily') setQuickDailyPresets(prev => [...prev, item]);else if (mode === 'patient') setQuickPatientPresets(prev => [...prev, item]);else setQuickGeneralPresets(prev => [...prev, item]);
  };
  const updateQuickPreset = (mode, idx, updates) => {
    const setter = mode === 'daily' ? setQuickDailyPresets : mode === 'patient' ? setQuickPatientPresets : setQuickGeneralPresets;
    setter(prev => prev.map((item, i) => i === idx ? {
      ...item,
      ...updates
    } : item));
  };
  const removeQuickPreset = (mode, idx) => {
    rememberUndo('よく使う項目削除');
    const setter = mode === 'daily' ? setQuickDailyPresets : mode === 'patient' ? setQuickPatientPresets : setQuickGeneralPresets;
    setter(prev => prev.filter((_, i) => i !== idx));
  };  const addDailyTaskSet = () => {
    rememberUndo('でいとりセット追加');
    setDailyTaskSets(prev => [...prev, {
      id: uid(),
      name: '新しいセット',
      items: []
    }]);
  };
  const updateDailyTaskSet = (id, updates) => {
    setDailyTaskSets(prev => prev.map(set => set.id === id ? { ...set, ...updates } : set));
  };
  const removeDailyTaskSet = id => {
    rememberUndo('でいとりセット削除');
    setDailyTaskSets(prev => prev.filter(set => set.id !== id));
  };
  const addDailyTaskSetItem = id => {
    setDailyTaskSets(prev => prev.map(set => set.id === id ? {
      ...set,
      items: [...(set.items || []), {
        title: '',
        type: 'home',
        estimate: '5',
        dailyPriority: 'normal'
      }]
    } : set));
  };
  const updateDailyTaskSetItem = (id, idx, updates) => {
    setDailyTaskSets(prev => prev.map(set => set.id === id ? {
      ...set,
      items: (set.items || []).map((item, i) => i === idx ? { ...item, ...updates } : item)
    } : set));
  };
  const removeDailyTaskSetItem = (id, idx) => {
    setDailyTaskSets(prev => prev.map(set => set.id === id ? {
      ...set,
      items: (set.items || []).filter((_, i) => i !== idx)
    } : set));
  };
  const addRoutinePreset = () => {
    rememberUndo('固定項目追加');
    setRoutinePresets(prev => [...prev, {
      id: uid(),
      kind: 'task',
      mode: isDailyMode ? 'daily' : 'patient',
      title: '新しい固定項目',
      type: isDailyMode ? 'home' : 'docs',
      estimate: '5',
      dailyPriority: 'normal',
      scheduledTime: '09:00',
      weekdays: [1, 2, 3, 4, 5]
    }]);
  };
  const updateRoutinePreset = (id, updates) => {
    setRoutinePresets(prev => prev.map(item => item.id === id ? {
      ...item,
      ...updates
    } : item));
  };
  const removeRoutinePreset = id => {
    rememberUndo('固定項目削除');
    setRoutinePresets(prev => prev.filter(item => item.id !== id));
  };
  const applyTodayRoutines = () => {
    const day = currentWorkday().getDay();
    const matched = routinePresets.filter(item => (item.weekdays || []).includes(day) && item.title?.trim());
    if (!matched.length) {
      showToast('今日に該当する固定項目はありません');
      return;
    }
    rememberUndo('固定項目一括登録');
    const stamp = todayStr();
    const newPatientTasks = [];
    const newDailyTasks = [];
    const newEvents = [];
    matched.forEach(item => {
      if (item.kind === 'event') {
        newEvents.push({
          id: uid(),
          title: item.title.trim(),
          scheduledDate: stamp,
          scheduledTime: item.scheduledTime || '09:00',
          status: 'todo',
          createdAt: Date.now(),
          routineId: item.id,
          routineDate: stamp,
          scheduledEvent: true
        });
      } else {
        const task = {
          id: uid(),
          title: item.title.trim(),
          type: item.type || (item.mode === 'daily' ? 'home' : 'docs'),
          estimate: item.estimate || '5',
          dailyPriority: item.mode === 'daily' ? item.dailyPriority || 'normal' : undefined,
          dueDate: null,
          status: 'todo',
          createdAt: Date.now(),
          general: true,
          routineId: item.id,
          routineDate: stamp
        };
        if (item.mode === 'daily') newDailyTasks.push(task);else newPatientTasks.push(task);
      }
    });
    if (newPatientTasks.length) setGeneralTasks(prev => [...prev, ...newPatientTasks]);
    if (newDailyTasks.length) setDailyGeneralTasks(prev => [...prev, ...newDailyTasks]);
    if (newEvents.length) setScheduledEvents(prev => [...prev, ...newEvents]);
    showToast(`固定項目を${matched.length}件入れました`);
  };
  const setGasConfig = cfg => {
    setGasConfigState(cfg);
    saveGasConfig(cfg);
  };
  const buildPayload = () => ({
    patients,
    stats,
    templates,
    quickPatientPresets,
    quickGeneralPresets,
    quickDailyPresets,
    dailyTaskSets,
    routinePresets,
    dailyLinks,
    patientLinks,
    lastDoneItems,
    endDayLogs: pruneEndDayLogs(endDayLogs),
    rewards,
    pendingPatients,
    generalTasks,
    dailyPatients,
    dailyGeneralTasks,
    scheduledEvents,
    version: 10
  });
  const applyPayload = parsed => {
    if (!parsed || !Array.isArray(parsed.patients)) return false;
    setPatients(parsed.patients);
    if (parsed.stats?.date === todayStr()) setStats(parsed.stats);
    if (Array.isArray(parsed.templates)) setTemplates(parsed.templates);
    if (Array.isArray(parsed.quickPatientPresets)) setQuickPatientPresets(parsed.quickPatientPresets);else if (Array.isArray(parsed.quickGeneralPresets)) setQuickPatientPresets(parsed.quickGeneralPresets);
    if (Array.isArray(parsed.quickGeneralPresets)) setQuickGeneralPresets(parsed.quickGeneralPresets);
    if (Array.isArray(parsed.quickDailyPresets)) setQuickDailyPresets(parsed.quickDailyPresets);
    if (Array.isArray(parsed.dailyTaskSets)) setDailyTaskSets(parsed.dailyTaskSets);
    if (Array.isArray(parsed.routinePresets)) setRoutinePresets(parsed.routinePresets);
    if (Array.isArray(parsed.dailyLinks)) setDailyLinks(parsed.dailyLinks);
    if (Array.isArray(parsed.patientLinks)) setPatientLinks(parsed.patientLinks);
    if (Array.isArray(parsed.lastDoneItems)) setLastDoneItems(parsed.lastDoneItems);
    if (Array.isArray(parsed.endDayLogs)) setEndDayLogs(pruneEndDayLogs(parsed.endDayLogs));
    if (Array.isArray(parsed.rewards)) setRewards(parsed.rewards);
    if (Array.isArray(parsed.pendingPatients)) setPendingPatients(parsed.pendingPatients);
    if (Array.isArray(parsed.generalTasks)) setGeneralTasks(parsed.generalTasks);
    if (Array.isArray(parsed.dailyPatients)) setDailyPatients(parsed.dailyPatients);
    if (Array.isArray(parsed.dailyGeneralTasks)) setDailyGeneralTasks(parsed.dailyGeneralTasks);
    if (Array.isArray(parsed.scheduledEvents)) setScheduledEvents(parsed.scheduledEvents);
    return true;
  };
  const gasPush = async () => {
    if (!gasConfig.url || !gasConfig.secret) {
      showToast('GAS URLとシークレットを設定してください');
      return;
    }
    setGasStatus('syncing');
    try {
      const r = await gasFetch(gasConfig, buildPayload());
      if (r.ok) {
        setGasStatus('ok');
        showToast('GASに保存しました ✓');
      } else throw new Error(r.error || 'unknown');
    } catch (e) {
      setGasStatus('error');
      showToast('GAS保存失敗: ' + e.message);
    }
  };
  const gasPull = async () => {
    if (!gasConfig.url || !gasConfig.secret) {
      showToast('GAS URLとシークレットを設定してください');
      return;
    }
    setGasStatus('syncing');
    try {
      const r = await gasGet(gasConfig);
      if (!r.ok) throw new Error(r.error || 'unknown');
      if (!r.data) {
        setGasStatus('ok');
        showToast('GASにデータがまだありません');
        return;
      }
      const count = r.data.patients?.length ?? 0;
      const open = (r.data.patients || []).reduce((s, p) => s + (p.tasks || []).filter(t => t.status !== 'done').length, 0);
      if (!window.confirm(`GASから読み込む: 患者${count}人 / 未完タスク${open}件\n現在のデータは上書きされます。続行しますか?`)) {
        setGasStatus('idle');
        return;
      }
      rememberUndo('GAS読込');
      applyPayload(r.data);
      setGasStatus('ok');
      showToast('GASから読み込みました ✓');
    } catch (e) {
      setGasStatus('error');
      showToast('GAS読み込み失敗: ' + e.message);
    }
  };
  useEffect(() => {
    if (!loaded || !gasConfig.url || !gasConfig.secret) return;
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }
    const t = setTimeout(() => gasFetch(gasConfig, buildPayload()).catch(() => {}), 3000);
    return () => clearTimeout(t);
  }, [patients, stats, templates, quickPatientPresets, quickGeneralPresets, quickDailyPresets, dailyTaskSets, routinePresets, dailyLinks, patientLinks, lastDoneItems, endDayLogs, rewards, pendingPatients, generalTasks, dailyPatients, dailyGeneralTasks, scheduledEvents, loaded]);
  const buildExportJSON = () => JSON.stringify({
    patients,
    stats,
    templates,
    quickPatientPresets,
    quickGeneralPresets,
    quickDailyPresets,
    dailyTaskSets,
    routinePresets,
    dailyLinks,
    patientLinks,
    lastDoneItems,
    endDayLogs: pruneEndDayLogs(endDayLogs),
    rewards,
    pendingPatients,
    generalTasks,
    dailyPatients,
    dailyGeneralTasks,
    scheduledEvents,
    version: 10,
    exportedAt: new Date().toISOString()
  }, null, 2);
  const exportToFile = () => {
    const blob = new Blob([buildExportJSON()], {
      type: 'application/json'
    });
    const a = Object.assign(document.createElement('a'), {
      href: URL.createObjectURL(blob),
      download: `patient-triage-${new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)}.json`
    });
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
    showToast('ファイル保存しました');
  };
  const copyEndDayLogs = async () => {
    const text = formatEndDayLogs(endDayLogs);
    try {
      await navigator.clipboard.writeText(text);
      showToast('今週のおしまいログをコピーしました');
    } catch {
      setImportText(text);
      setImportDialog(true);
    }
  };
  const exportToClipboard = async () => {
    const json = buildExportJSON();
    try {
      await navigator.clipboard.writeText(json);
      showToast('クリップボードにコピー');
    } catch {
      setImportText(json);
      setImportDialog(true);
    }
  };
  const runImport = jsonString => {
    let parsed;
    try {
      parsed = JSON.parse(jsonString);
    } catch (e) {
      alert('JSONパースエラー: ' + e.message);
      return false;
    }
    if (!parsed.patients || !Array.isArray(parsed.patients)) {
      alert('無効なデータ形式');
      return false;
    }
    const count = parsed.patients.length;
    const open = parsed.patients.reduce((s, p) => s + (p.tasks || []).filter(t => t.status !== 'done').length, 0);
    if (!window.confirm(`読み込む: 患者${count}人 / 未完タスク${open}件\n現在のデータ(患者${patients.length}人)は上書きされます。続行しますか?`)) return false;
    setPatients(parsed.patients);
    if (parsed.stats?.date === todayStr()) setStats(parsed.stats);
    if (Array.isArray(parsed.templates)) setTemplates(parsed.templates);
    if (Array.isArray(parsed.quickPatientPresets)) setQuickPatientPresets(parsed.quickPatientPresets);else if (Array.isArray(parsed.quickGeneralPresets)) setQuickPatientPresets(parsed.quickGeneralPresets);
    if (Array.isArray(parsed.quickGeneralPresets)) setQuickGeneralPresets(parsed.quickGeneralPresets);
    if (Array.isArray(parsed.quickDailyPresets)) setQuickDailyPresets(parsed.quickDailyPresets);
    if (Array.isArray(parsed.dailyTaskSets)) setDailyTaskSets(parsed.dailyTaskSets);
    if (Array.isArray(parsed.routinePresets)) setRoutinePresets(parsed.routinePresets);
    if (Array.isArray(parsed.dailyLinks)) setDailyLinks(parsed.dailyLinks);
    if (Array.isArray(parsed.patientLinks)) setPatientLinks(parsed.patientLinks);
    if (Array.isArray(parsed.lastDoneItems)) setLastDoneItems(parsed.lastDoneItems);
    if (Array.isArray(parsed.endDayLogs)) setEndDayLogs(pruneEndDayLogs(parsed.endDayLogs));
    if (Array.isArray(parsed.rewards)) setRewards(parsed.rewards);
    if (Array.isArray(parsed.pendingPatients)) setPendingPatients(parsed.pendingPatients);
    if (Array.isArray(parsed.generalTasks)) setGeneralTasks(parsed.generalTasks);
    if (Array.isArray(parsed.dailyPatients)) setDailyPatients(parsed.dailyPatients);
    if (Array.isArray(parsed.dailyGeneralTasks)) setDailyGeneralTasks(parsed.dailyGeneralTasks);
    if (Array.isArray(parsed.scheduledEvents)) setScheduledEvents(parsed.scheduledEvents);
    return true;
  };
  const importFromFile = file => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      if (runImport(e.target.result)) {
        setImportDialog(false);
        setImportText('');
        showToast('インポート完了');
      }
    };
    reader.readAsText(file);
  };
  const importFromText = () => {
    if (runImport(importText)) {
      setImportDialog(false);
      setImportText('');
      showToast('インポート完了');
    }
  };
  const typeMeta = id => TASK_TYPES.find(t => t.id === id) || TASK_TYPES.find(t => t.id === 'docs') || TASK_TYPES[0];
  const generalTypeMeta = id => (isDailyMode ? DAILY_TASK_TYPES.find(t => t.id === id) || DAILY_TASK_TYPES[0] : GENERAL_TASK_TYPES.find(t => t.id === id) || GENERAL_TASK_TYPES[2]);
  const estMeta = id => ESTIMATES.find(e => e.id === id) || ESTIMATES[1];
  const gasStatusLabel = {
    ok: '✓',
    error: '✗',
    syncing: '…'
  };
  const gasStatusColor = {
    ok: {
      bg: 'rgba(22,163,74,.15)',
      fg: '#15803D'
    },
    error: {
      bg: 'rgba(239,68,68,.15)',
      fg: '#991B1B'
    },
    syncing: {
      bg: 'rgba(108,62,248,.15)',
      fg: '#5530D4'
    },
    idle: {
      bg: 'rgba(255,255,255,.12)',
      fg: 'rgba(255,255,255,.6)'
    }
  };
  const gasC = gasStatusColor[gasStatus] || gasStatusColor.idle;
  const filterButtonStyle = active => active ? {
    background: 'var(--accent)',
    borderColor: 'var(--accent)',
    color: '#fff',
    boxShadow: '0 8px 18px rgba(108,62,248,.28)'
  } : {};
  const filterBadgeStyle = active => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 26,
    padding: '2px 6px',
    borderRadius: 99,
    fontSize: 10,
    fontWeight: 900,
    lineHeight: 1,
    background: active ? '#fff' : 'var(--surface-2)',
    color: active ? 'var(--accent)' : 'var(--text-3)'
  });
  const appTitle = isDailyMode ? 'でいとり！' : 'ぺいとり！';
  const appSubtitle = isDailyMode ? '日常タスクを今日の動ける形に分けるモード' : '患者さんと処置タスクを整理するモード';
  const entityLabel = isDailyMode ? 'カテゴリ' : '受け持ち';
  const addEntityLabel = isDailyMode ? 'カテゴリ追加' : '受け持ち追加';
  if (!loaded) return React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement("p", {
    style: {
      color: 'var(--text-3)',
      fontSize: 14
    }
  }, "\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026"));
  return React.createElement("div", {
    style: {
      minHeight: '100vh',
      padding: '20px 16px 60px',
      maxWidth: 720,
      margin: '0 auto'
    }
  }, undoEntry && React.createElement("button", {
    className: "btn-ghost",
    onClick: undoLast,
    title: `${undoEntry.label || '直前の操作'}を元に戻す`,
    style: {
      position: 'fixed',
      right: 14,
      top: 14,
      zIndex: 120,
      padding: '8px 12px',
      fontSize: 12,
      fontWeight: 800,
      background: 'var(--surface)',
      boxShadow: 'var(--shadow)'
    }
  }, React.createElement(RotateCcw, {
    size: 13
  }), "\u5143\u306B\u623B\u3059"), React.createElement("header", {
    className: "app-header",
    style: {
      marginBottom: 20,
      background: isDailyMode ? 'linear-gradient(135deg, #0F3A2E 0%, #167A5A 58%, #52B788 100%)' : (THEMES.find(t => t.id === themeId) || THEMES[0]).headerGrad
    }
  }, React.createElement("button", {
    type: "button",
    "aria-label": "\u30AD\u30E3\u30E9\u3092\u3064\u3064\u3044\u3066\u3054\u8912\u7F8E\u3092\u898B\u308B",
    title: "\u3064\u3064\u304F\u3068\u3054\u8912\u7F8E\u3092\u304F\u308C\u308B",
    onClick: e => {
      e.stopPropagation();
      window.dispatchEvent(new CustomEvent('chibi-coach', {
        detail: {
          kind: 'reward'
        }
      }));
    },
    style: {
      position: 'absolute',
      right: 8,
      bottom: 4,
      width: 50,
      height: 100,
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      zIndex: 3
    }
  }), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 14
    }
  }, React.createElement("div", null, React.createElement("button", {
    className: "app-title-button",
    onClick: () => setAppMode(m => m === 'patient' ? 'daily' : 'patient'),
    title: isDailyMode ? 'ぺいとり！に切り替え' : 'でいとり！に切り替え',
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 28,
      fontWeight: 700,
      color: '#fff',
      margin: 0,
      padding: '0 4px 2px',
      border: '0',
      borderRadius: 8,
      background: 'transparent',
      cursor: 'pointer',
      letterSpacing: '.03em',
      textShadow: '0 2px 10px rgba(0,0,0,.25)',
      transform: isDailyMode ? 'rotateY(360deg)' : 'rotateY(0deg)',
      transition: 'transform .38s cubic-bezier(.2,.9,.2,1), color .2s ease'
    }
  }, appTitle), React.createElement("p", {
    style: {
      fontSize: 11,
      color: 'rgba(255,255,255,.50)',
      margin: '5px 0 0',
      letterSpacing: '.03em'
    }
  }, appSubtitle, " / タップで切替")), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, [{
    label: '受け持ち',
    val: isDailyMode ? activeGeneralTasks.length : activePatients.length,
    color: 'rgba(255,255,255,.9)'
  }, {
    label: '未完了',
    val: openTaskCount + openGeneralCount,
    color: 'rgba(255,255,255,.9)'
  }, {
    label: '今日の済',
    val: stats.doneToday,
    color: '#6EE7A0'
  }, ...(openGeneralCount ? [{
    label: 'すきま',
    val: openGeneralCount,
    color: '#CBD5E1'
  }] : []), ...(stuckTasks.length ? [{
    label: '詰まり',
    val: stuckTasks.length,
    color: '#FCA5A5'
  }] : [])].map(s => React.createElement("div", {
    key: s.label,
    className: "stat-pill"
  }, React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: s.color,
      fontFamily: 'var(--font-serif)',
      lineHeight: 1
    }
  }, s.val), React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'rgba(255,255,255,.50)',
      fontWeight: 600
    }
  }, s.label))), gasConfig.url && React.createElement("span", {
    className: "gas-badge",
    style: {
      background: gasC.bg,
      color: gasC.fg
    }
  }, "GAS ", gasStatusLabel[gasStatus] || '設定済'))), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 14,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'rgba(255,255,255,.45)',
      fontWeight: 600,
      letterSpacing: '.05em'
    }
  }, "\u30C6\u30FC\u30DE"), THEMES.map(t => React.createElement("button", {
    key: t.id,
    onClick: () => setThemeId(t.id),
    title: t.label,
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: t.swatch,
      outline: themeId === t.id ? '2.5px solid #fff' : '2.5px solid transparent',
      outlineOffset: '2px',
      transform: themeId === t.id ? 'scale(1.2)' : 'scale(1)',
      transition: 'transform .15s, outline .15s',
      boxShadow: themeId === t.id ? '0 2px 8px rgba(0,0,0,.35)' : '0 1px 3px rgba(0,0,0,.25)'
    }
  })), React.createElement("button", {
    onClick: () => setRpgMode(v => !v),
    title: "\u30EC\u30C8\u30ECRPG\u98A8UI",
    style: {
      border: rpgMode ? '2px solid #FDE68A' : '1.5px solid rgba(255,255,255,.35)',
      borderRadius: 6,
      background: rpgMode ? '#07142F' : 'rgba(255,255,255,.12)',
      color: '#fff',
      padding: '3px 8px',
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 800,
      fontFamily: 'var(--font-sans)',
      letterSpacing: 0,
      boxShadow: rpgMode ? '0 0 0 2px rgba(253,230,138,.25)' : 'none'
    }
  }, "RPG\u98A8"), React.createElement("div", {
    "aria-hidden": "true",
    style: {
      flexBasis: '100%',
      height: 0,
      margin: 0,
      padding: 0
    }
  }), React.createElement("button", {
    onClick: () => setHeaderBackdropMode(v => HEADER_BACKDROP_MODES[(HEADER_BACKDROP_MODES.indexOf(v) + 1) % HEADER_BACKDROP_MODES.length] || 'auto'),
    title: "\u30D8\u30C3\u30C0\u30FC\u80CC\u666F\u3092\u5207\u308A\u66FF\u3048",
    style: {
      border: headerBackdropMode === 'auto' ? '1.5px solid rgba(255,255,255,.35)' : '2px solid #BBF7D0',
      borderRadius: 6,
      background: headerBackdropMode === 'auto' ? 'rgba(255,255,255,.12)' : 'rgba(34,197,94,.24)',
      color: '#fff',
      padding: '3px 8px',
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 800,
      fontFamily: 'var(--font-sans)',
      letterSpacing: 0,
      whiteSpace: 'nowrap'
    }
  }, "\u80CC\u666F:", headerBackdropMode === 'auto' ? `\u81EA\u52D5(${HEADER_BACKDROP_LABELS[effectiveHeaderBackdrop]})` : HEADER_BACKDROP_LABELS[headerBackdropMode]), React.createElement("button", {
    onClick: () => setTimedAlertMode(v => v === 'all' ? 'near' : 'all'),
    title: timedAlertMode === 'all' ? "\u6642\u9650\u30BF\u30B9\u30AF\u3092\u5168\u3066\u8868\u793A" : "\u6642\u9650\u30BF\u30B9\u30AF\u3092\u76F4\u8FD1\u306E\u307F\u8868\u793A",
    style: {
      border: timedAlertMode === 'all' ? '2px solid #BFDBFE' : '1.5px solid rgba(255,255,255,.35)',
      borderRadius: 6,
      background: timedAlertMode === 'all' ? 'rgba(59,130,246,.26)' : 'rgba(255,255,255,.12)',
      color: '#fff',
      padding: '3px 8px',
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 800,
      fontFamily: 'var(--font-sans)',
      letterSpacing: 0,
      whiteSpace: 'nowrap'
    }
  }, timedAlertMode === 'all' ? "\u6642\u9650:\u5168\u90E8" : "\u6642\u9650:\u76F4\u8FD1"), React.createElement("button", {
    onClick: requestEndDay,
    title: "\u5B8C\u4E86\u6E08\u307F\u30BF\u30B9\u30AF\u3092\u5168\u3066\u7247\u3065\u3051\u308B",
    style: {
      border: '2px solid rgba(255,255,255,.72)',
      borderRadius: 8,
      background: doneTaskCount ? 'rgba(22,163,74,.32)' : 'rgba(255,255,255,.10)',
      color: '#fff',
      padding: '4px 10px',
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 900,
      fontFamily: 'var(--font-sans)',
      letterSpacing: 0,
      whiteSpace: 'nowrap',
      boxShadow: doneTaskCount ? '0 3px 10px rgba(22,163,74,.22)' : 'none'
    }
  }, "\u4ECA\u65E5\u306F\u304A\u3057\u307E\u3044!", doneTaskCount ? ` (${doneTaskCount})` : ''))), timedAlerts.length > 0 && React.createElement("div", {
    className: "alert-bar",
    style: {
      marginBottom: 16,
      padding: '14px 16px'
    }
  }, React.createElement("h3", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      color: '#9A1818',
      margin: '0 0 10px',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      letterSpacing: '.04em'
    }
  }, React.createElement(AlertTriangle, {
    size: 14,
    color: "#EF4444"
  }), "\u6642\u9650\u30BF\u30B9\u30AF (", timedAlerts.length, ")"), React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, timedAlerts.map(t => {
    const ts = TIME_STATES[t.ts];
    return React.createElement("li", {
      key: `${t.scheduledEvent ? 'event' : 'task'}-${t.id}`,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 12,
        color: '#7A2020'
      }
    }, React.createElement("span", {
      className: `time-tag${t.ts === 'past' ? ' past' : ''}`,
      style: {
        background: ts.bg,
        color: ts.fg
      }
    }, t.scheduledEvent && t.scheduledDate ? `${dateLabel(t.scheduledDate)} ${t.scheduledTime}` : t.scheduledTime), React.createElement("span", {
      style: {
        fontFamily: 'monospace',
        fontSize: 11,
        opacity: .6,
        flexShrink: 0
      }
    }, t.patientName), React.createElement("span", {
      style: {
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontWeight: 500
      }
    }, t.title), React.createElement("button", {
      className: "btn-green",
      onClick: () => t.scheduledEvent ? updateScheduledEvent(t.id, {
        status: 'done',
        completedAt: Date.now()
      }) : completeTask(t.patientId, t.id),
      style: {
        padding: '4px 12px',
        fontSize: 11,
        flexShrink: 0
      }
    }, "\u6E08"));
  }))), React.createElement("div", {
    className: "command-dock",
    "aria-label": "タスク操作"
  }, React.createElement("div", {
    className: "action-cluster action-cluster-primary"
  }, React.createElement("button", {
    className: "btn-dark",
    onClick: suggestNext
  }, React.createElement(Zap, {
    size: 14
  }), "\u6B21\u306E\u4E00\u624B"), React.createElement("button", {
    className: `btn-ghost dock-icon${quickOnly ? ' btn-ghost-active' : ''}`,
    onClick: () => setQuickOnly(q => !q),
    "aria-label": "2分だけ",
    "aria-pressed": quickOnly,
    title: quickOnly ? "\u6B21\u306E\u4E00\u624B\u30922\u5206\u30BF\u30B9\u30AF\u306B\u7D5E\u308A\u8FBC\u307F\u4E2D" : "\u6B21\u306E\u4E00\u624B\u30922\u5206\u30BF\u30B9\u30AF\u306B\u7D5E\u308A\u8FBC\u3080",
    style: filterButtonStyle(quickOnly)
  }, "☕️"), React.createElement("button", {
    className: `btn-ghost dock-icon${erOnly ? ' btn-ghost-active' : ''}`,
    onClick: () => setErOnly(v => !v),
    "aria-label": "ERのみ",
    "aria-pressed": erOnly,
    title: erOnly ? "\u6B21\u306E\u4E00\u624B\u3092ER\u60A3\u8005\u306B\u7D5E\u308A\u8FBC\u307F\u4E2D" : "\u6B21\u306E\u4E00\u624B\u3092ER\u60A3\u8005\u306B\u7D5E\u308A\u8FBC\u3080",
    style: filterButtonStyle(erOnly)
  }, "ER")), React.createElement("div", {
    className: "action-cluster"
  }, React.createElement("button", {
    className: `btn-ghost${focusMode ? ' btn-ghost-active' : ''}`,
    onClick: () => setFocusMode(f => !f),
    "aria-pressed": focusMode
  }, React.createElement(Focus, {
    size: 14
  }), "\u96C6\u4E2D\u30E2\u30FC\u30C9")), React.createElement("div", {
    className: "action-cluster action-cluster-tools"
  }, !isDailyMode && React.createElement("button", {
    className: "btn-dark",
    onClick: () => setAddPatientDialog(true)
  }, React.createElement(Plus, {
    size: 14
  }), addEntityLabel), React.createElement("button", {
    className: `btn-ghost${scheduledOpen ? ' btn-ghost-active' : ''}`,
    onClick: () => setScheduledOpen(o => !o),
    "aria-label": "予定追加",
    "aria-pressed": scheduledOpen,
    title: "ICやカンファレンスなど、患者にもすき間にも属さない予定"
  }, React.createElement(Plus, {
    size: 14
  }), "予定追加", openScheduledCount ? ` ${openScheduledCount}` : ''), !isDailyMode && React.createElement("button", {
    className: `btn-ghost${patientSortMode === 'ward' ? ' btn-ghost-active' : ''}`,
    onClick: () => setPatientSortMode(m => m === 'priority' ? 'ward' : 'priority'),
    "aria-label": "\u60A3\u8005\u306E\u4E26\u3079\u66FF\u3048",
    title: patientSortMode === 'ward' ? "\u75C5\u68DF\u9806\u3067\u8868\u793A\u4E2D" : "\u512A\u5148\u5EA6\u9806\u3067\u8868\u793A\u4E2D"
  }, patientSortMode === 'ward' ? "\u75C5\u68DF\u9806" : "\u512A\u5148\u5EA6\u9806"), React.createElement("button", {
    className: "btn-ghost dock-icon",
    onClick: showFinishEstimate,
    "aria-label": "\u6B8B\u30BF\u30B9\u30AF\u304B\u3089\u6682\u5B9A\u4E88\u5B9A\u7D42\u4E86\u6642\u523B\u3092\u805E\u304F",
    title: "\u6B8B\u30BF\u30B9\u30AF\u306E\u898B\u7A4D\u3082\u308A\u5408\u8A08\u3068\u6682\u5B9A\u7D42\u4E86\u6642\u523B"
  }, "⏰️")), stuckTasks.length > 0 && React.createElement("button", {
    className: "btn-rose dock-alert",
    onClick: suggestFromStuck
  }, React.createElement(AlertCircle, {
    size: 13
  }), "\u8A70\u307E\u308A\u304B\u30891\u3064")), React.createElement(ScheduledEventSection, {
    events: scheduledEvents,
    open: scheduledOpen,
    onToggleOpen: () => setScheduledOpen(o => !o),
    form: scheduledForm,
    setForm: setScheduledForm,
    onAdd: addScheduledEvent,
    onUpdate: updateScheduledEvent,
    onRemove: removeScheduledEvent,
    onClearDone: clearDoneScheduledEvents,
    now: now
  }), suggestion && React.createElement(SuggestionCard, {
    suggestion: suggestion,
    typeMeta: typeMeta,
    estMeta: estMeta,
    now: now,
    onDone: () => suggestion.task && (suggestion.fromStuck ? advanceStuckStep(suggestion.task.patientId, suggestion.task.id) : suggestion.fromGeneral ? completeGeneralTask(suggestion.task.id) : completeTask(suggestion.task.patientId, suggestion.task.id)),
    onDoing: () => suggestion.task && (suggestion.fromGeneral ? updateGeneralTask(suggestion.task.id, {
      status: 'doing'
    }) : updateTask(suggestion.task.patientId, suggestion.task.id, {
      status: 'doing'
    })),
    onStuck: () => suggestion.task && (suggestion.fromGeneral ? updateGeneralTask(suggestion.task.id, {
      status: 'hold'
    }) : markStuck(suggestion.task.patientId, suggestion.task.id)),
    onCompleteTask: () => suggestion.task && (suggestion.fromGeneral ? completeGeneralTask(suggestion.task.id) : completeTask(suggestion.task.patientId, suggestion.task.id)),
    onReroll: suggestNext,
    onDismiss: () => setSuggestion(null),
    onStartTimer: startTimer,
    onStartTally: startTally,
    running: runningTask
  }), focusMode && isDailyMode ? React.createElement(DailyFocusView, {
    tasks: activeGeneralTasks,
    typeMeta: generalTypeMeta,
    estMeta: estMeta,
    now: now,
    onComplete: completeGeneralTask,
    onDoing: taskId => updateGeneralTask(taskId, {
      status: 'doing'
    }),
    onHold: taskId => updateGeneralTask(taskId, {
      status: 'hold'
    }),
    onExit: () => setFocusMode(false),
    onStartTimer: startTimer,
    onStartTally: startTally,
    running: runningTask
  }) : focusMode ? React.createElement(FocusView, {
    patients: sortedPatients,
    typeMeta: typeMeta,
    estMeta: estMeta,
    now: now,
    onComplete: completeTask,
    onStuck: markStuck,
    onDoing: (pid, tid) => updateTask(pid, tid, {
      status: 'doing'
    }),
    onUnstick: unstick,
    onStartTimer: startTimer,
    onStartTally: startTally,
    running: runningTask
  }) : React.createElement("div", {
    className: `desktop-main-grid${isDailyMode ? ' desktop-main-grid-daily' : ''}`
  }, React.createElement("section", {
    className: "desktop-patient-column"
  }, isDailyMode ? React.createElement(React.Fragment, null, React.createElement(GeneralTaskSection, {
    tasks: activeGeneralTasks,
    open: generalOpen,
    onToggleOpen: () => setGeneralOpen(v => !v),
    form: generalForm,
    setForm: setGeneralForm,
    onAdd: addGeneralTask,
    onUpdate: updateGeneralTask,
    onRemove: removeGeneralTask,
    onClearDone: clearDoneGeneralTasks,
    onQuickAdd: addQuickGeneralTask,
    quickTasks: quickDailyPresets,
    quickOpen: quickDailyOpen,
    onToggleQuick: () => setQuickDailyOpen(v => !v),
    setOpen: dailySetsOpen,
    onToggleSet: () => setDailySetsOpen(v => !v),
    typeMeta: generalTypeMeta,
    estMeta: estMeta,
    now: now,
    dailyMode: true,
    templateSets: dailyTaskSets,
    onApplySet: applyDailyTaskSet
  }), React.createElement(LastDoneSection, {
    items: lastDoneItems,
    open: lastDoneOpen,
    onToggleOpen: () => setLastDoneOpen(v => !v),
    form: lastDoneForm,
    setForm: setLastDoneForm,
    onAdd: addLastDoneItem,
    onUpdate: updateLastDoneItem,
    onRemove: removeLastDoneItem,
    onMarkToday: markLastDoneToday,
    onClear: clearLastDone
  }), React.createElement(DailyLinkSection, {
    links: dailyLinks,
    open: dailyLinksOpen,
    onToggleOpen: () => setDailyLinksOpen(v => !v),
    form: dailyLinkForm,
    setForm: setDailyLinkForm,
    onAdd: addDailyLink,
    onUpdate: updateDailyLink,
    onRemove: removeDailyLink
  }), React.createElement(RewardSection, {
    rewards: rewards,
    open: rewardsOpen,
    onToggleOpen: () => setRewardsOpen(v => !v),
    form: rewardForm,
    setForm: setRewardForm,
    onAdd: addReward,
    onUpdate: updateReward,
    onRemove: removeReward
  }), React.createElement(EndDayLogSection, {
    logs: endDayLogs,
    open: endDayLogsOpen,
    onToggleOpen: () => setEndDayLogsOpen(v => !v),
    onCopy: copyEndDayLogs
  }), React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, React.createElement("button", {
    className: "btn-sm",
    onClick: () => setDailyQuickPresetsOpen(v => !v),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12,
      color: 'var(--text-3)',
      fontWeight: 600
    }
  }, dailyQuickPresetsOpen ? React.createElement(ChevronDown, {
    size: 12
  }) : React.createElement(ChevronRight, {
    size: 12
  }), "\u3067\u3044\u3068\u308A \u3088\u304F\u4F7F\u3046\u7DE8\u96C6 (", quickDailyPresets.length, ")"), dailyQuickPresetsOpen && React.createElement(QuickPresetManager, {
    patientPresets: quickPatientPresets,
    generalPresets: quickGeneralPresets,
    dailyPresets: quickDailyPresets,
    onUpdatePatient: (idx, updates) => updateQuickPreset('patient', idx, updates),
    onUpdateGeneral: (idx, updates) => updateQuickPreset('general', idx, updates),
    onUpdateDaily: (idx, updates) => updateQuickPreset('daily', idx, updates),
    onAddPatient: () => addQuickPreset('patient'),
    onAddGeneral: () => addQuickPreset('general'),
    onAddDaily: () => addQuickPreset('daily'),
    onRemovePatient: idx => removeQuickPreset('patient', idx),
    onRemoveGeneral: idx => removeQuickPreset('general', idx),
    onRemoveDaily: idx => removeQuickPreset('daily', idx),
    showPatient: false
  }), React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, React.createElement("button", {
    className: "btn-sm",
    onClick: () => setDailySetTemplatesOpen(v => !v),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12,
      color: 'var(--text-3)',
      fontWeight: 600
    }
  }, dailySetTemplatesOpen ? React.createElement(ChevronDown, {
    size: 12
  }) : React.createElement(ChevronRight, {
    size: 12
  }), "でいとり セット編集 (", dailyTaskSets.length, ")"), dailySetTemplatesOpen && React.createElement(DailyTaskSetManager, {
    sets: dailyTaskSets,
    onAddSet: addDailyTaskSet,
    onUpdateSet: updateDailyTaskSet,
    onRemoveSet: removeDailyTaskSet,
    onAddItem: addDailyTaskSetItem,
    onUpdateItem: updateDailyTaskSetItem,
    onRemoveItem: removeDailyTaskSetItem
  })))) : React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, activePatients.length === 0 && React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '56px 20px',
      borderRadius: 16,
      border: '2px dashed var(--border-2)',
      color: 'var(--text-3)',
      fontSize: 13,
      background: 'rgba(255,255,255,.5)',
      fontWeight: 500
    }
  }, "\u307E\u305A\u306F\u53D7\u3051\u6301\u3061\u30921\u4EBA\u8FFD\u52A0\u3057\u3066\u304F\u3060\u3055\u3044"), sortedPatients.map(p => React.createElement(PatientCard, {
    key: p.id,
    patient: p,
    expanded: activeExpandedPatients[p.id],
    onToggle: () => toggleExpand(p.id),
    onRemove: () => {
      if (confirm(`「${p.name}」を終了にしますか？`)) removePatient(p.id);
    },
    onSetPriority: pri => setPatientPriority(p.id, pri),
    onSetWard: ward => setPatientWard(p.id, ward),
    onToggleAlert: alertId => togglePatientAlert(p.id, alertId),
    showAlerts: !isDailyMode,
    onRename: name => renamePatient(p.id, name),
    onMemoChange: memo => updatePatientMemo(p.id, memo),
    templates: templates,
    onApplyTemplate: tpl => applyTemplate(p.id, tpl),
    quickTasks: quickPatientPresets,
    onApplyQuickTask: preset => addQuickPatientTask(p.id, preset),
    adding: adding[p.id],
    onStartAdd: () => setAdding(a => ({
      ...a,
      [p.id]: true
    })),
    onCancelAdd: () => setAdding(a => ({
      ...a,
      [p.id]: false
    })),
    addForm: addForm[p.id] || {
      title: '',
      type: 'other',
      estimate: '5',
      scheduledTime: ''
    },
    setAddForm: f => setAddForm(prev => ({
      ...prev,
      [p.id]: f
    })),
    onAddTask: () => addTask(p.id),
    onTaskDone: tid => completeTask(p.id, tid),
    onTaskStuck: tid => markStuck(p.id, tid),
    onTaskDoing: tid => updateTask(p.id, tid, {
      status: 'doing'
    }),
    onTaskTodo: tid => updateTask(p.id, tid, {
      status: 'todo'
    }),
    onTaskRemove: tid => removeTask(p.id, tid),
    onUnstick: tid => unstick(p.id, tid),
    onUpdateTask: (tid, upd) => updateTask(p.id, tid, upd),
    onClearDone: () => clearDoneTasks(p.id),
    typeMeta: typeMeta,
    estMeta: estMeta,
    now: now
  })))), !isDailyMode && React.createElement("aside", {
    className: "desktop-side-column"
  }, React.createElement(GeneralTaskSection, {
    tasks: activeGeneralTasks,
    open: generalOpen,
    onToggleOpen: () => setGeneralOpen(v => !v),
    form: generalForm,
    setForm: setGeneralForm,
    onAdd: addGeneralTask,
    onUpdate: updateGeneralTask,
    onRemove: removeGeneralTask,
    onClearDone: clearDoneGeneralTasks,
    onQuickAdd: addQuickGeneralTask,
    quickTasks: quickGeneralPresets,
    quickOpen: quickGeneralOpen,
    onToggleQuick: () => setQuickGeneralOpen(v => !v),
    typeMeta: generalTypeMeta,
    estMeta: estMeta,
    now: now
  }), React.createElement(DailyLinkSection, {
    links: patientLinks,
    open: patientLinksOpen,
    onToggleOpen: () => setPatientLinksOpen(v => !v),
    form: patientLinkForm,
    setForm: setPatientLinkForm,
    onAdd: addPatientLink,
    onUpdate: updatePatientLink,
    onRemove: removePatientLink
  }), React.createElement(PendingPatientSection, {
    pending: pendingPatients,
    open: pendingPatientsOpen,
    onToggleOpen: () => setPendingPatientsOpen(v => !v),
    form: pendingPatientForm,
    setForm: setPendingPatientForm,
    onAdd: addPendingPatient,
    onUpdate: updatePendingPatient,
    onRemove: removePendingPatient,
    onPromote: item => setPromoteTarget(item)
  }))), !focusMode && stuckTasks.length > 0 && React.createElement("div", {
    className: "stuck-bar",
    style: {
      marginTop: 22,
      padding: '14px 18px'
    }
  }, React.createElement("h3", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      color: 'var(--stuck-fg)',
      margin: '0 0 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      letterSpacing: '.04em'
    }
  }, React.createElement(AlertCircle, {
    size: 14,
    color: "var(--stuck-fg)"
  }), "\u8A70\u307E\u3063\u3066\u308B\u3084\u3064 (", stuckTasks.length, ")"), React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, stuckTasks.map(t => React.createElement("li", {
    key: t.id,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 8,
      fontSize: 12,
      color: '#7A1F1F'
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'monospace',
      fontSize: 11,
      opacity: .6,
      flexShrink: 0,
      marginTop: 1,
      fontWeight: 700
    }
  }, t.patientName), React.createElement("div", {
    style: {
      flex: 1
    }
  }, React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, t.title), t.tinyStep && React.createElement("div", {
    style: {
      opacity: .7,
      marginTop: 3,
      fontSize: 11
    }
  }, "\u2192 \u6B21\u306E\u4E00\u6B69: ", t.tinyStep), React.createElement(StuckProgress, {
    task: t,
    compact: true
  })), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexShrink: 0,
      flexWrap: 'wrap',
      justifyContent: 'flex-end'
    }
  }, React.createElement("button", {
    className: "btn-sm",
    onClick: () => markStuck(t.patientId, t.id),
    style: {
      color: 'var(--stuck-fg)'
    }
  }, "\u4E00\u6B69\u7DE8\u96C6"), React.createElement("button", {
    className: "btn-sm",
    onClick: () => unstick(t.patientId, t.id),
    style: {
      color: 'var(--text-2)'
    }
  }, "\u623B\u3059")))))), !isDailyMode && React.createElement(EndDayLogSection, {
    logs: endDayLogs,
    open: endDayLogsOpen,
    onToggleOpen: () => setEndDayLogsOpen(v => !v),
    onCopy: copyEndDayLogs
  }), React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, React.createElement("button", {
    className: "btn-sm",
    onClick: () => setDataToolsOpen(v => !v),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12,
      color: 'var(--text-3)',
      fontWeight: 600
    }
  }, dataToolsOpen ? React.createElement(ChevronDown, {
    size: 12
  }) : React.createElement(ChevronRight, {
    size: 12
  }), "\u30C7\u30FC\u30BF (\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7 / GAS\u540C\u671F)"), dataToolsOpen && React.createElement("div", {
    style: {
      marginTop: 10,
      background: 'var(--surface)',
      border: '1.5px solid var(--border)',
      borderRadius: 14,
      padding: 16,
      fontSize: 12
    }
  }, React.createElement("div", {
    style: {
      background: 'var(--surface-2)',
      borderRadius: 12,
      padding: '12px 14px',
      marginBottom: 14,
      borderLeft: '4px solid var(--accent)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10
    }
  }, React.createElement("span", {
    style: {
      fontWeight: 800,
      color: 'var(--text)',
      fontSize: 12,
      letterSpacing: '.02em'
    }
  }, "Google Apps Script \u540C\u671F"), React.createElement("button", {
    className: "btn-sm",
    onClick: () => setGasDialog(true),
    style: {
      color: 'var(--accent)',
      fontWeight: 700
    }
  }, gasConfig.url ? 'URL変更' : '設定する')), gasConfig.url ? React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, React.createElement("button", {
    className: "btn-ghost",
    onClick: gasPull,
    disabled: gasStatus === 'syncing',
    style: {
      fontSize: 12,
      padding: '7px 16px'
    }
  }, "\u2193 GAS\u304B\u3089\u8AAD\u307F\u8FBC\u3080"), React.createElement("button", {
    className: "btn-dark",
    onClick: gasPush,
    disabled: gasStatus === 'syncing',
    style: {
      fontSize: 12,
      padding: '7px 16px'
    }
  }, "\u2191 GAS\u306B\u4FDD\u5B58\u3059\u308B"), React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-3)',
      fontWeight: 500
    }
  }, "\u5909\u66F4\u66423\u79D2\u5F8C\u306B\u81EA\u52D5\u4FDD\u5B58")) : React.createElement("p", {
    style: {
      color: 'var(--text-3)',
      fontSize: 12,
      margin: 0
    }
  }, "\u8A2D\u5B9A\u3059\u308B\u3068Pixel\u2194Windows\u9593\u3067\u540C\u671F\u3067\u304D\u307E\u3059\u3002")), React.createElement("p", {
    style: {
      fontWeight: 700,
      color: 'var(--text-2)',
      marginBottom: 10,
      fontSize: 12
    }
  }, "\u624B\u52D5\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7"), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 7,
      marginBottom: 10
    }
  }, React.createElement("button", {
    className: "btn-ghost",
    onClick: exportToFile,
    style: {
      fontSize: 11,
      padding: '7px 14px'
    }
  }, "\u30D5\u30A1\u30A4\u30EB\u4FDD\u5B58(.json)"), React.createElement("button", {
    className: "btn-ghost",
    onClick: exportToClipboard,
    style: {
      fontSize: 11,
      padding: '7px 14px'
    }
  }, "\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC"), React.createElement("button", {
    className: "btn-ghost",
    onClick: () => setImportDialog(true),
    style: {
      fontSize: 11,
      padding: '7px 14px',
      marginLeft: 'auto'
    }
  }, "\u30A4\u30F3\u30DD\u30FC\u30C8\u2026")), React.createElement("p", {
    style: {
      color: 'var(--text-3)',
      fontSize: 11,
      margin: 0
    }
  }, "\u203B \u60A3\u8005\u7B26\u4E01\u4EE5\u5916\u306E\u500B\u4EBA\u60C5\u5831\u306F\u5165\u308C\u306A\u3044\u3053\u3068\u3002"))), React.createElement("div", {
    style: {
      marginTop: 10,
      marginBottom: 40
    }
  }, React.createElement("button", {
    className: "btn-sm",
    onClick: () => setTemplatesOpen(v => !v),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12,
      color: 'var(--text-3)',
      fontWeight: 600
    }
  }, templatesOpen ? React.createElement(ChevronDown, {
    size: 12
  }) : React.createElement(ChevronRight, {
    size: 12
  }), "\u307A\u3044\u3068\u308A \u30BB\u30C3\u30C8\u7DE8\u96C6 (", templates.length, ")"), templatesOpen && React.createElement(TemplatesSection, {
    templates: templates,
    onAddTemplate: addTemplate,
    onUpdateTemplate: updateTemplate,
    onDeleteTemplate: deleteTemplate,
    onAddItem: addTemplateItem,
    onUpdateItem: updateTemplateItem,
    onRemoveItem: removeTemplateItem
  }), React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, React.createElement("button", {
    className: "btn-sm",
    onClick: () => setQuickPresetsOpen(v => !v),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12,
      color: 'var(--text-3)',
      fontWeight: 600
    }
  }, quickPresetsOpen ? React.createElement(ChevronDown, {
    size: 12
  }) : React.createElement(ChevronRight, {
    size: 12
  }), "\u307A\u3044\u3068\u308A \u3088\u304F\u4F7F\u3046\u7DE8\u96C6 (", quickPatientPresets.length + quickGeneralPresets.length, ")"), quickPresetsOpen && React.createElement(QuickPresetManager, {
    patientPresets: quickPatientPresets,
    generalPresets: quickGeneralPresets,
    dailyPresets: quickDailyPresets,
    onUpdatePatient: (idx, updates) => updateQuickPreset('patient', idx, updates),
    onUpdateGeneral: (idx, updates) => updateQuickPreset('general', idx, updates),
    onUpdateDaily: (idx, updates) => updateQuickPreset('daily', idx, updates),
    onAddPatient: () => addQuickPreset('patient'),
    onAddGeneral: () => addQuickPreset('general'),
    onAddDaily: () => addQuickPreset('daily'),
    onRemovePatient: idx => removeQuickPreset('patient', idx),
    onRemoveGeneral: idx => removeQuickPreset('general', idx),
    onRemoveDaily: idx => removeQuickPreset('daily', idx),
    showGeneral: true,
    showDaily: false
  }), React.createElement(RoutinePresetSection, {
    presets: routinePresets,
    open: routineOpen,
    onToggleOpen: () => setRoutineOpen(v => !v),
    onUpdate: updateRoutinePreset,
    onAdd: addRoutinePreset,
    onRemove: removeRoutinePreset,
    onApplyToday: applyTodayRoutines
  }), routinePromptOpen && React.createElement("div", {
    className: "dialog-bg",
    onClick: () => {
      saveLocal(ROUTINE_PROMPT_STORAGE_KEY, todayStr());
      setRoutinePromptOpen(false);
    }
  }, React.createElement("div", {
    className: "dialog",
    onClick: e => e.stopPropagation(),
    style: {
      maxWidth: 400
    }
  }, React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      fontWeight: 800,
      color: 'var(--text)',
      margin: '0 0 8px'
    }
  }, "\u4ECA\u65E5\u306E\u56FA\u5B9A\u4E88\u5B9A\u3092\u5165\u308C\u307E\u3059\u304B?"), React.createElement("p", {
    style: {
      margin: '0 0 18px',
      color: 'var(--text-2)',
      fontSize: 13,
      lineHeight: 1.7,
      fontWeight: 600
    }
  }, "\u4F5C\u696D\u65E5\u304C\u5207\u308A\u66FF\u308F\u3063\u3066\u304B\u3089\u6700\u521D\u306E\u8D77\u52D5\u3067\u3059\u3002\u4ECA\u65E5\u306E\u66DC\u65E5\u306B\u5F53\u3066\u306F\u307E\u308B\u56FA\u5B9A\u4E88\u5B9A\u30FB\u56FA\u5B9A\u3059\u304D\u307E\u3092\u4E00\u62EC\u3067\u5165\u529B\u3067\u304D\u307E\u3059\u3002"), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, React.createElement("button", {
    className: "btn-sm",
    onClick: () => {
      saveLocal(ROUTINE_PROMPT_STORAGE_KEY, todayStr());
      setRoutinePromptOpen(false);
      setRoutineOpen(true);
    },
    style: {
      fontSize: 13,
      padding: '8px 16px'
    }
  }, "\u7DE8\u96C6\u3059\u308B"), React.createElement("button", {
    className: "btn-sm",
    onClick: () => {
      saveLocal(ROUTINE_PROMPT_STORAGE_KEY, todayStr());
      setRoutinePromptOpen(false);
    },
    style: {
      fontSize: 13,
      padding: '8px 16px'
    }
  }, "\u4ECA\u65E5\u306F\u8868\u793A\u3057\u306A\u3044"), React.createElement("button", {
    className: "btn-green",
    onClick: () => {
      saveLocal(ROUTINE_PROMPT_STORAGE_KEY, todayStr());
      setRoutinePromptOpen(false);
      applyTodayRoutines();
    },
    style: {
      fontSize: 13,
      padding: '8px 16px'
    }
  }, "\u5165\u529B\u3059\u308B"))))), gasDialog && React.createElement(GasConfigDialog, {
    config: gasConfig,
    onSave: cfg => {
      setGasConfig(cfg);
      setGasDialog(false);
      showToast('GAS設定を保存しました');
    },
    onCancel: () => setGasDialog(false)
  }), addPatientDialog && React.createElement("div", {
    className: "dialog-bg",
    onClick: () => setAddPatientDialog(false)
  }, React.createElement("div", {
    className: "dialog",
    onClick: e => e.stopPropagation(),
    style: {
      maxWidth: 440
    }
  }, React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      fontWeight: 800,
      color: 'var(--text)',
      margin: '0 0 14px'
    }
  }, addEntityLabel), React.createElement("input", {
    value: newPatientName,
    onChange: e => setNewPatientName(e.target.value),
    onKeyDown: e => e.key === 'Enter' && addPatient(),
    autoFocus: true,
    placeholder: isDailyMode ? "\u30AB\u30C6\u30B4\u30EA (\u4F8B: \u53F0\u6240\u3001\u5916\u51FA\u3001\u9023\u7D61)" : "\u7B26\u4E01 (\u4F8B: 305-3\u3001A-T\u3055\u3093\u3001#12)",
    className: "inp",
    style: {
      marginBottom: 14
    }
  }), React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-3)',
      fontWeight: 800,
      marginBottom: 6
    }
  }, "\u512A\u5148\u5EA6"), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginBottom: 14
    }
  }, PRIORITIES.map(pri => React.createElement("button", {
    key: pri.id,
    onClick: () => setNewPatientPri(pri.id),
    className: "tag",
    style: {
      background: newPatientPri === pri.id ? pri.color : 'var(--surface)',
      color: newPatientPri === pri.id ? '#fff' : pri.color,
      border: `1.5px solid ${pri.color}50`,
      cursor: 'pointer',
      fontSize: 12,
      padding: '5px 12px'
    }
  }, pri.label))), React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-3)',
      fontWeight: 800,
      marginBottom: 6
    }
  }, "\u75C5\u68DF"), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginBottom: 18
    }
  }, WARDS.map(ward => React.createElement("button", {
    key: ward.id || 'none',
    onClick: () => setNewPatientWard(ward.id),
    className: "tag",
    style: {
      background: newPatientWard === ward.id ? 'var(--accent)' : 'var(--surface)',
      color: newPatientWard === ward.id ? '#fff' : 'var(--text-2)',
      border: '1.5px solid var(--border)',
      cursor: 'pointer',
      fontSize: 12,
      padding: '5px 11px'
    }
  }, ward.label))), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8
    }
  }, React.createElement("button", {
    className: "btn-sm",
    onClick: () => setAddPatientDialog(false),
    style: {
      fontSize: 13,
      padding: '8px 16px'
    }
  }, "\u30AD\u30E3\u30F3\u30BB\u30EB"), React.createElement("button", {
    className: "btn-dark",
    onClick: addPatient,
    disabled: !newPatientName.trim(),
    style: {
      fontSize: 13,
      padding: '8px 16px',
      opacity: newPatientName.trim() ? 1 : .45
    }
  }, React.createElement(Plus, {
    size: 14
  }), "\u8FFD\u52A0")))), stuckDialog && React.createElement(StuckDialog, {
    form: stuckForm,
    setForm: setStuckForm,
    onSave: saveStuck,
    onCancel: () => setStuckDialog(null)
  }), promoteTarget && React.createElement(PromotePendingDialog, {
    pending: promoteTarget,
    templates: templates,
    onClose: () => setPromoteTarget(null),
    onConfirm: fields => confirmPromote(promoteTarget, fields)
  }), importDialog && React.createElement(ImportDialog, {
    text: importText,
    setText: setImportText,
    onImportText: importFromText,
    onImportFile: importFromFile,
    onCancel: () => {
      setImportDialog(false);
      setImportText('');
    }
  }), tweaksOpen && React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      right: 20,
      zIndex: 200,
      background: 'var(--surface)',
      border: '1.5px solid var(--border)',
      borderRadius: 16,
      padding: '16px 18px',
      boxShadow: 'var(--shadow-lg)',
      minWidth: 200,
      animation: 'fadeUp .2s cubic-bezier(.34,1.26,.64,1) both'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      color: 'var(--text)',
      marginBottom: 12,
      letterSpacing: '.04em'
    }
  }, "Tweaks"), React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-3)',
      fontWeight: 600,
      marginBottom: 8,
      letterSpacing: '.04em'
    }
  }, "\u30C6\u30FC\u30DE"), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, THEMES.map(t => React.createElement("button", {
    key: t.id,
    onClick: () => setThemeId(t.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: themeId === t.id ? 'var(--surface-3)' : 'transparent',
      border: `1.5px solid ${themeId === t.id ? 'var(--accent)' : 'var(--border)'}`,
      borderRadius: 99,
      padding: '6px 12px',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: themeId === t.id ? 'var(--accent)' : 'var(--text-2)',
      fontWeight: themeId === t.id ? 700 : 500,
      transition: 'all .15s'
    }
  }, React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: t.swatch,
      flexShrink: 0,
      boxShadow: '0 1px 4px rgba(0,0,0,.2)'
    }
  }), t.label, themeId === t.id && React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 10
    }
  }, "\u2713"))))), endDayConfirm && React.createElement("div", {
    className: "dialog-bg",
    onClick: () => setEndDayConfirm(false)
  }, React.createElement("div", {
    className: "dialog",
    onClick: e => e.stopPropagation(),
    style: {
      maxWidth: 380
    }
  }, React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      fontWeight: 800,
      color: 'var(--text)',
      margin: '0 0 8px'
    }
  }, "\u4ECA\u65E5\u306F\u304A\u3057\u307E\u3044\u306B\u3059\u308B?"), React.createElement("p", {
    style: {
      margin: '0 0 18px',
      color: 'var(--text-2)',
      fontSize: 13,
      lineHeight: 1.7,
      fontWeight: 600
    }
  }, "\u5B8C\u4E86\u6E08\u307F\u30BF\u30B9\u30AF ", doneTaskCount, " \u4EF6\u3092\u4E00\u62EC\u3067\u7247\u3065\u3051\u307E\u3059\u3002\u672A\u5B8C\u4E86\u30BF\u30B9\u30AF\u306F\u6B8B\u308A\u307E\u3059\u3002"), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8
    }
  }, React.createElement("button", {
    className: "btn-sm",
    onClick: () => setEndDayConfirm(false),
    style: {
      fontSize: 13,
      padding: '8px 16px'
    }
  }, "\u3044\u3044\u3048"), React.createElement("button", {
    className: "btn-green",
    onClick: () => {
      setEndDayConfirm(false);
      endDay();
    },
    style: {
      fontSize: 13,
      padding: '8px 16px'
    }
  }, "\u306F\u3044")))), endDayCelebrate && React.createElement("div", {
    key: endDayCelebrate.id,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 170,
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      background: 'radial-gradient(circle at center, rgba(108,62,248,.18), transparent 58%)',
      animation: 'fadeUp .18s ease both'
    }
  }, React.createElement("div", {
    className: "celebrate-rays",
    "aria-hidden": "true"
  }, CELEBRATION_RAYS.map((ray, index) => React.createElement("span", {
    key: index,
    className: "cracker-ray",
    style: {
      '--angle': `${ray.angle}deg`,
      '--distance': ray.distance,
      '--color': ray.color,
      '--delay': ray.delay
    }
  }))), React.createElement("div", {
    className: "celebrate-confetti",
    "aria-hidden": "true"
  }, CELEBRATION_CONFETTI.map((piece, index) => React.createElement("span", {
    key: index,
    className: `confetti-piece ${piece.shape}`.trim(),
    style: {
      '--dx': piece.dx,
      '--dy': piece.dy,
      '--spin': piece.spin,
      '--color': piece.color,
      '--delay': piece.delay
    }
  }))), React.createElement("div", {
    style: {
      width: 'min(420px, 92vw)',
      background: 'var(--surface)',
      border: '2px solid var(--accent)',
      borderRadius: rpgMode ? 4 : 18,
      boxShadow: 'var(--shadow-lg)',
      padding: '24px 26px',
      textAlign: 'center',
      color: 'var(--text)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: .16,
      background: 'repeating-linear-gradient(135deg, var(--accent) 0 8px, transparent 8px 18px)'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative',
      fontSize: 12,
      color: 'var(--accent)',
      fontWeight: 900,
      letterSpacing: '.08em',
      marginBottom: 8
    }
  }, "\u672C\u65E5\u7D42\u4E86"), React.createElement("div", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-serif)',
      fontSize: 28,
      fontWeight: 900,
      marginBottom: 8
    }
  }, "\u304A\u3064\u304B\u308C\u3055\u307E\u3067\u3057\u305F!"), React.createElement("div", {
    style: {
      position: 'relative',
      fontSize: 14,
      color: 'var(--text-2)',
      lineHeight: 1.7,
      fontWeight: 700
    }
  }, "\u5B8C\u4E86\u6E08\u307F\u30BF\u30B9\u30AF ", React.createElement("strong", {
    style: {
      color: 'var(--done)',
      fontSize: 22
    }
  }, endDayCelebrate.count), " \u4EF6\u3092\u7247\u3065\u3051\u307E\u3057\u305F"), React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 12,
      color: 'var(--text-3)',
      fontSize: 12,
      fontWeight: 700
    }
  }, "\u4ECA\u65E5\u306E\u4F5C\u696D\u306F\u3053\u3053\u307E\u3067\u3002\u3088\u304F\u3084\u308A\u307E\u3057\u305F\u3002"))), toast && React.createElement("div", {
    className: "toast"
  }, toast), React.createElement(FloatingTimerBar, {
    running: runningTask,
    now: runningTick,
    onIncrement: incrementRunning,
    onAddMinute: addMinuteRunning,
    onPauseToggle: pauseToggleRunning,
    onReset: resetRunning,
    onStop: stopRunning,
    onComplete: completeRunning
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(PatientTriage, null));
