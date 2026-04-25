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
function applyTheme(theme) {
  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([k, v]) => root.style.setProperty(k, v));
  document.body.style.backgroundImage = `radial-gradient(circle at 1px 1px, ${theme.dotColor} 1px, transparent 0)`;
  window.__headerGrad = theme.headerGrad;
}
const uid = () => Math.random().toString(36).slice(2, 10);
const todayStr = () => {
  const d = new Date();
  if (d.getHours() < 8) d.setDate(d.getDate() - 1);
  return d.toLocaleDateString('sv-SE');
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
const getPri = p => p?.priority || 'normal';
const priMeta = id => PRIORITIES.find(p => p.id === id) || PRIORITIES.find(p => p.id === 'normal') || PRIORITIES[1];
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
  if (d < 30) return 'soon';
  if (d < 120) return 'upcoming';
  return 'future';
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
  onReroll,
  onDismiss
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
  }, "\u6B21\u306E\u4E00\u6B69: "), t.tinyStep), React.createElement("div", {
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
  }), suggestion.fromGeneral ? '保留' : '詰まった'), React.createElement("button", {
    className: "btn-sm",
    onClick: onReroll,
    style: {
      marginLeft: 'auto',
      opacity: .65,
      fontSize: 12
    }
  }, React.createElement(RotateCcw, {
    size: 12
  }), "\u5225\u306E\u3092")));
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
  const [hovered, setHovered] = useState(false);
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
  }, type.label), React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: isDone ? 400 : 600,
      textDecoration: isDone ? 'line-through' : 'none',
      color: muted ? 'var(--text-3)' : isStuck ? 'var(--stuck-fg)' : 'var(--text)',
      textDecorationColor: 'var(--text-3)',
      lineHeight: 1.4
    }
  }, task.title), task.scheduledTime && !editingTime && React.createElement(TimeBadge, {
    scheduledTime: task.scheduledTime,
    now: now,
    editable: !isDone && !!onClearTime,
    onClear: onClearTime
  }), React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-3)',
      marginLeft: 'auto',
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
  }, "\u2192 \u4E00\u6B69: ", task.tinyStep)), !isDone && React.createElement("div", {
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
  }, "\u8A70\u307E\u3063\u305F") : React.createElement("button", {
    className: "btn-sm",
    onClick: onUnstick,
    style: {
      color: 'var(--stuck-fg)'
    }
  }, "\u8A70\u307E\u308A\u89E3\u9664"), !task.scheduledTime && onSetTime && React.createElement("button", {
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
  onRename,
  onMemoChange,
  templates,
  onApplyTemplate,
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
  const open = patient.tasks.filter(t => t.status !== 'done');
  const done = patient.tasks.filter(t => t.status === 'done');
  const [editingName, setEditingName] = useState(false);
  const [draftName, setDraftName] = useState(patient.name);
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
      gap: 5
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'monospace',
      fontWeight: 800,
      fontSize: 15,
      color: 'var(--text)',
      letterSpacing: '.02em'
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
  }))), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3
    },
    onClick: e => e.stopPropagation()
  }, PRIORITIES.map(p => React.createElement("button", {
    key: p.id,
    onClick: () => onSetPriority(p.id),
    title: `優先度: ${p.label}`,
    style: {
      width: 22,
      height: 22,
      borderRadius: 8,
      border: 'none',
      cursor: 'pointer',
      fontSize: 10,
      fontWeight: 800,
      background: getPri(patient) === p.id ? p.color : 'var(--surface-2)',
      color: getPri(patient) === p.id ? '#fff' : p.color,
      transition: 'all .15s',
      boxShadow: getPri(patient) === p.id ? `0 3px 8px ${p.color}55` : 'none',
      transform: getPri(patient) === p.id ? 'scale(1.1)' : 'scale(1)'
    }
  }, p.label))), React.createElement("span", {
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
  }, React.createElement("textarea", {
    value: patient.memo || '',
    onChange: e => onMemoChange(e.target.value),
    onClick: e => e.stopPropagation(),
    placeholder: "\u5C0F\u3055\u304F\u30E1\u30E2 (\u4F8B: \u5BB6\u65CF\u9023\u7D61\u6E08\u307F / \u7D50\u679C\u5F85\u3061)",
    rows: 2,
    className: "inp",
    style: {
      marginTop: 12,
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
  }), "\u30BF\u30B9\u30AF\u3092\u8FFD\u52A0"), templates && templates.length > 0 && !adding && React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      marginTop: 10,
      flexWrap: 'wrap'
    }
  }, React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-3)',
      fontWeight: 600
    }
  }, "\u30BB\u30C3\u30C8:"), templates.map(tpl => React.createElement("button", {
    key: tpl.id,
    className: "set-chip",
    onClick: () => onApplyTemplate(tpl),
    title: `${tpl.items.length}件のタスクを一括追加`
  }, "+ ", tpl.name, React.createElement("span", {
    style: {
      opacity: .5,
      fontSize: 10
    }
  }, "(", tpl.items.length, ")"))))));
}
function FocusView({
  patients,
  typeMeta,
  estMeta,
  now,
  onComplete,
  onStuck,
  onDoing,
  onUnstick
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
  }, "\u8A70\u307E\u308A\u89E3\u9664")));
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
  typeMeta,
  estMeta,
  now
}) {
  const openTasks = tasks.filter(t => t.status !== 'done');
  const doneTasks = tasks.filter(t => t.status === 'done');
  const sortedOpen = [...openTasks].sort((a, b) => {
    if (a.dueDate && !b.dueDate) return -1;
    if (!a.dueDate && b.dueDate) return 1;
    if (a.dueDate && b.dueDate) return a.dueDate.localeCompare(b.dueDate);
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
    }, type.label), React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: isDone ? 400 : 650,
        lineHeight: 1.45,
        color: isDone || isHold ? 'var(--text-3)' : 'var(--text)',
        textDecoration: isDone ? 'line-through' : 'none',
        textDecorationColor: 'var(--text-3)'
      }
    }, task.title), due && React.createElement("span", {
      className: "time-tag",
      style: {
        background: due.bg,
        color: due.fg
      }
    }, due.text), React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'var(--text-3)',
        fontWeight: 600,
        marginLeft: 'auto'
      }
    }, est.label)), !isDone && React.createElement("div", {
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
      marginTop: 22,
      overflow: 'hidden',
      borderLeft: '5px solid #94A3B8'
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
  }, "\u3059\u304D\u307E\u30BF\u30B9\u30AF"), React.createElement("span", {
    className: "tag",
    style: {
      background: 'rgba(148,163,184,.16)',
      color: 'var(--text-2)'
    }
  }, "\u60A3\u8005\u5916")), React.createElement("p", {
    style: {
      fontSize: 11,
      color: 'var(--text-3)',
      margin: '3px 0 0',
      fontWeight: 600
    }
  }, "\u60A3\u8005\u30BF\u30B9\u30AF\u304C\u843D\u3061\u7740\u3044\u305F\u6642\u306B\u62FE\u3046\u4F4E\u512A\u5148\u306E\u68DA")), React.createElement("span", {
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
  }, "\u30EC\u30BB\u30D7\u30C8\u3001\u7D39\u4ECB\u72B6\u3001\u81EA\u5DF1\u7814\u947D\u306A\u3069\u3092\u3053\u3053\u306B\u7F6E\u3051\u307E\u3059"), React.createElement("ul", {
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
  }, React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-3)',
      fontWeight: 700,
      marginRight: 2
    }
  }, "\u3088\u304F\u4F7F\u3046:"), QUICK_GENERAL_TASKS.map(q => {
    const type = typeMeta(q.type);
    return React.createElement("button", {
      key: q.title,
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
  })), React.createElement("div", {
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
    placeholder: "\u3059\u304D\u307E\u30BF\u30B9\u30AF\u3092\u8FFD\u52A0 (\u4F8B: \u8FD4\u623B\u78BA\u8A8D\u3001\u7D39\u4ECB\u72B6\u4E0B\u66F8\u304D)",
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
  }, GENERAL_TASK_TYPES.map(tt => React.createElement("button", {
    key: tt.id,
    onClick: () => setForm({
      ...form,
      type: tt.id
    }),
    className: "tag",
    style: {
      background: (form.type || 'docs') === tt.id ? tt.dot : 'var(--surface)',
      color: (form.type || 'docs') === tt.id ? '#fff' : tt.dot,
      border: '1.5px solid ' + tt.dot + '40',
      cursor: 'pointer',
      fontSize: 11,
      padding: '4px 10px',
      transition: 'all .12s',
      boxShadow: (form.type || 'docs') === tt.id ? '0 3px 10px ' + tt.dot + '40' : 'none'
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
      marginBottom: 18
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
  const [adding, setAdding] = useState({});
  const [addForm, setAddForm] = useState({});
  const [suggestion, setSuggestion] = useState(null);
  const [focusMode, setFocusMode] = useState(false);
  const [quickOnly, setQuickOnly] = useState(false);
  const [erOnly, setErOnly] = useState(false);
  const [stuckDialog, setStuckDialog] = useState(null);
  const [stuckForm, setStuckForm] = useState({
    reason: '',
    tinyStep: ''
  });
  const [stats, setStats] = useState({
    doneToday: 0,
    date: todayStr()
  });
  const [now, setNow] = useState(Date.now());
  const [importDialog, setImportDialog] = useState(false);
  const [importText, setImportText] = useState('');
  const [dataToolsOpen, setDataToolsOpen] = useState(false);
  const [templatesOpen, setTemplatesOpen] = useState(false);
  const [templates, setTemplates] = useState([]);
  const [generalTasks, setGeneralTasks] = useState([]);
  const [generalOpen, setGeneralOpen] = useState(true);
  const [generalForm, setGeneralForm] = useState({
    title: '',
    type: 'docs',
    estimate: '5',
    dueDate: ''
  });
  const [toast, setToast] = useState(null);
  const [gasConfig, setGasConfigState] = useState(() => loadGasConfig());
  const [gasStatus, setGasStatus] = useState('idle');
  const [gasDialog, setGasDialog] = useState(false);
  const [themeId, setThemeId] = useState(() => loadLocal(THEME_STORAGE_KEY) || 'lavender');
  const [rpgMode, setRpgMode] = useState(() => loadLocal(RPG_MODE_STORAGE_KEY) === true);
  const [tweaksOpen, setTweaksOpen] = useState(false);
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
      if (parsed.stats?.date === todayStr()) setStats(parsed.stats);
      setTemplates(Array.isArray(parsed.templates) ? parsed.templates : DEFAULT_TEMPLATES);
      setGeneralTasks(Array.isArray(parsed.generalTasks) ? parsed.generalTasks : []);
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
      generalTasks
    });
  }, [patients, stats, templates, generalTasks, loaded]);
  const sortedPatients = useMemo(() => {
    const order = {
      er: 0,
      high: 1,
      normal: 2,
      low: 3
    };
    return [...patients].sort((a, b) => {
      const pa = order[getPri(a)],
        pb = order[getPri(b)];
      return pa !== pb ? pa - pb : (a.createdAt || 0) - (b.createdAt || 0);
    });
  }, [patients]);
  const flatTasks = useMemo(() => patients.flatMap(p => p.tasks.map(t => ({
    ...t,
    patientId: p.id,
    patientName: p.name,
    patientPriority: getPri(p)
  }))), [patients]);
  const stuckTasks = useMemo(() => flatTasks.filter(t => t.status === 'stuck'), [flatTasks]);
  const openTaskCount = useMemo(() => flatTasks.filter(t => t.status !== 'done').length, [flatTasks]);
  const openGeneralCount = useMemo(() => generalTasks.filter(t => t.status !== 'done').length, [generalTasks]);
  const timedAlerts = useMemo(() => {
    return flatTasks.filter(t => t.status !== 'done' && t.scheduledTime).map(t => ({
      ...t,
      ts: timeStatus(t.scheduledTime, now)
    })).filter(t => t.ts === 'past' || t.ts === 'now' || t.ts === 'soon').sort((a, b) => (a.scheduledTime || '').localeCompare(b.scheduledTime || ''));
  }, [flatTasks, now]);
  const addPatient = () => {
    const name = newPatientName.trim();
    if (!name) return;
    const p = {
      id: uid(),
      name,
      priority: newPatientPri,
      memo: '',
      tasks: [],
      createdAt: Date.now()
    };
    setPatients(prev => [...prev, p]);
    setExpandedPatients(prev => ({
      ...prev,
      [p.id]: true
    }));
    setNewPatientName('');
    setNewPatientPri('normal');
  };
  const removePatient = id => {
    const patient = patients.find(p => p.id === id);
    setPatients(prev => prev.filter(p => p.id !== id));
    if (patient) {
      showToast(`${patient.name} 終了おつかれさまでした`);
      window.dispatchEvent(new CustomEvent('chibi-coach', {
        detail: {
          kind: 'done'
        }
      }));
    }
  };
  const setPatientPriority = (id, priority) => setPatients(prev => prev.map(p => p.id === id ? {
    ...p,
    priority
  } : p));
  const renamePatient = (id, name) => {
    const t = name.trim();
    if (t) setPatients(prev => prev.map(p => p.id === id ? {
      ...p,
      name: t
    } : p));
  };
  const updatePatientMemo = (id, memo) => setPatients(prev => prev.map(p => p.id === id ? {
    ...p,
    memo
  } : p));
  const toggleExpand = id => setExpandedPatients(prev => ({
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
    setPatients(prev => prev.map(p => p.id === patientId ? {
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
  const updateTask = (patientId, taskId, updates) => setPatients(prev => prev.map(p => p.id === patientId ? {
    ...p,
    tasks: p.tasks.map(t => t.id === taskId ? {
      ...t,
      ...updates
    } : t)
  } : p));
  const completeTask = (patientId, taskId) => {
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
    setPatients(prev => prev.map(p => p.id === patientId ? {
      ...p,
      tasks: p.tasks.filter(t => t.id !== taskId)
    } : p));
    if (suggestion?.task?.id === taskId) setSuggestion(null);
  };
  const markStuck = (patientId, taskId) => {
    const task = patients.find(p => p.id === patientId)?.tasks.find(t => t.id === taskId);
    setStuckForm({
      reason: task?.stuckReason || '',
      tinyStep: task?.tinyStep || ''
    });
    setStuckDialog({
      patientId,
      taskId
    });
  };
  const saveStuck = () => {
    if (!stuckDialog) return;
    updateTask(stuckDialog.patientId, stuckDialog.taskId, {
      status: 'stuck',
      stuckReason: stuckForm.reason,
      tinyStep: stuckForm.tinyStep
    });
    setStuckDialog(null);
    setStuckForm({
      reason: '',
      tinyStep: ''
    });
  };
  const unstick = (patientId, taskId) => updateTask(patientId, taskId, {
    status: 'todo'
  });
  const clearDoneTasks = patientId => {
    setPatients(prev => prev.map(p => p.id === patientId ? {
      ...p,
      tasks: p.tasks.filter(t => t.status !== 'done')
    } : p));
  };
  const showToast = msg => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };
  const addGeneralTask = () => {
    const title = (generalForm.title || '').trim();
    if (!title) return;
    const task = {
      id: uid(),
      title,
      type: generalForm.type || 'docs',
      estimate: generalForm.estimate || '5',
      dueDate: generalForm.dueDate || null,
      status: 'todo',
      createdAt: Date.now(),
      general: true
    };
    setGeneralTasks(prev => [...prev, task]);
    setGeneralForm(prev => ({
      ...prev,
      title: '',
      dueDate: ''
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
      status: 'todo',
      createdAt: Date.now(),
      general: true
    };
    setGeneralTasks(prev => [...prev, task]);
    setGeneralOpen(true);
  };
  const updateGeneralTask = (taskId, updates) => {
    setGeneralTasks(prev => prev.map(t => t.id === taskId ? {
      ...t,
      ...updates
    } : t));
    if (suggestion?.task?.general && suggestion.task.id === taskId && updates.status === 'done') setSuggestion(null);
  };
  const removeGeneralTask = taskId => {
    setGeneralTasks(prev => prev.filter(t => t.id !== taskId));
    if (suggestion?.task?.general && suggestion.task.id === taskId) setSuggestion(null);
  };
  const clearDoneGeneralTasks = () => setGeneralTasks(prev => prev.filter(t => t.status !== 'done'));
  const completeGeneralTask = taskId => {
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
  const suggestNext = () => {
    let pool = flatTasks.filter(t => t.status === 'todo' || t.status === 'doing');
    if (erOnly) {
      pool = pool.filter(t => t.patientPriority === 'er');
    }
    if (quickOnly) {
      const quick = pool.filter(t => t.estimate === '2');
      pool = quick.length > 0 ? quick : pool;
    }
    if (!pool.length) {
      let generalPool = erOnly ? [] : generalTasks.filter(t => t.status === 'todo' || t.status === 'doing');
      if (quickOnly) {
        const quick = generalPool.filter(t => t.estimate === '2');
        generalPool = quick.length > 0 ? quick : generalPool;
      }
      if (!generalPool.length) {
        setSuggestion({
          empty: true
        });
        return;
      }
      const pick = generalPool[Math.floor(Math.random() * generalPool.length)];
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
    setPatients(prev => prev.map(p => p.id === patientId ? {
      ...p,
      tasks: [...p.tasks, ...newTasks]
    } : p));
    setExpandedPatients(prev => ({
      ...prev,
      [patientId]: true
    }));
    showToast(`「${template.name}」${newTasks.length}件追加`);
  };
  const updateTemplate = (id, updates) => setTemplates(prev => prev.map(t => t.id === id ? {
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
  const setGasConfig = cfg => {
    setGasConfigState(cfg);
    saveGasConfig(cfg);
  };
  const buildPayload = () => ({
    patients,
    stats,
    templates,
    generalTasks,
    version: 2
  });
  const applyPayload = parsed => {
    if (!parsed || !Array.isArray(parsed.patients)) return false;
    setPatients(parsed.patients);
    if (parsed.stats?.date === todayStr()) setStats(parsed.stats);
    if (Array.isArray(parsed.templates)) setTemplates(parsed.templates);
    if (Array.isArray(parsed.generalTasks)) setGeneralTasks(parsed.generalTasks);
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
  }, [patients, stats, templates, generalTasks, loaded]);
  const buildExportJSON = () => JSON.stringify({
    patients,
    stats,
    templates,
    generalTasks,
    version: 2,
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
    if (Array.isArray(parsed.generalTasks)) setGeneralTasks(parsed.generalTasks);
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
  const typeMeta = id => TASK_TYPES.find(t => t.id === id) || TASK_TYPES[7];
  const generalTypeMeta = id => GENERAL_TASK_TYPES.find(t => t.id === id) || GENERAL_TASK_TYPES[2];
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
      padding: '28px 28px 72px',
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, React.createElement("header", {
    className: "app-header",
    style: {
      marginBottom: 20,
      background: (THEMES.find(t => t.id === themeId) || THEMES[0]).headerGrad
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 14
    }
  }, React.createElement("div", null, React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 28,
      fontWeight: 700,
      color: '#fff',
      margin: 0,
      letterSpacing: '.03em',
      textShadow: '0 2px 10px rgba(0,0,0,.25)'
    }
  }, "\u60A3\u8005\u3055\u3070\u304D"), React.createElement("p", {
    style: {
      fontSize: 11,
      color: 'rgba(255,255,255,.50)',
      margin: '5px 0 0',
      letterSpacing: '.03em'
    }
  }, "\u203B \u60A3\u8005\u8B58\u5225\u306F\u533F\u540D\u306E\u7B26\u4E01\u3067 (\u4F8B: 305-3\u3001A-T\u3055\u3093\u3001#12)")), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, [{
    label: '受け持ち',
    val: patients.length,
    color: 'rgba(255,255,255,.9)'
  }, {
    label: '未完了',
    val: openTaskCount,
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
      alignItems: 'center'
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
  }, "RPG\u98A8"))), timedAlerts.length > 0 && React.createElement("div", {
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
      key: t.id,
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
    }, t.scheduledTime), React.createElement("span", {
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
      onClick: () => completeTask(t.patientId, t.id),
      style: {
        padding: '4px 12px',
        fontSize: 11,
        flexShrink: 0
      }
    }, "\u6E08"));
  }))), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 18
    }
  }, React.createElement("button", {
    className: "btn-dark",
    onClick: suggestNext
  }, React.createElement(Zap, {
    size: 15
  }), "\u6B21\u306E\u4E00\u624B\u3092\u6C7A\u3081\u3066"), React.createElement("button", {
    className: `btn-ghost${quickOnly ? ' btn-ghost-active' : ''}`,
    onClick: () => setQuickOnly(q => !q)
  }, React.createElement(Coffee, {
    size: 14
  }), "2\u5206\u3060\u3051"), React.createElement("button", {
    className: `btn-ghost${erOnly ? ' btn-ghost-active' : ''}`,
    onClick: () => setErOnly(v => !v)
  }, React.createElement(AlertTriangle, {
    size: 14
  }), "ER\u306E\u307F"), React.createElement("button", {
    className: `btn-ghost${focusMode ? ' btn-ghost-active' : ''}`,
    onClick: () => setFocusMode(f => !f)
  }, React.createElement(Focus, {
    size: 14
  }), "\u96C6\u4E2D\u30E2\u30FC\u30C9"), stuckTasks.length > 0 && React.createElement("button", {
    className: "btn-rose",
    onClick: suggestFromStuck,
    style: {
      marginLeft: 'auto'
    }
  }, React.createElement(AlertCircle, {
    size: 13
  }), "\u8A70\u307E\u308A\u304B\u30891\u3064")), suggestion && React.createElement(SuggestionCard, {
    suggestion: suggestion,
    typeMeta: typeMeta,
    estMeta: estMeta,
    now: now,
    onDone: () => suggestion.task && (suggestion.fromGeneral ? completeGeneralTask(suggestion.task.id) : completeTask(suggestion.task.patientId, suggestion.task.id)),
    onDoing: () => suggestion.task && (suggestion.fromGeneral ? updateGeneralTask(suggestion.task.id, {
      status: 'doing'
    }) : updateTask(suggestion.task.patientId, suggestion.task.id, {
      status: 'doing'
    })),
    onStuck: () => suggestion.task && (suggestion.fromGeneral ? updateGeneralTask(suggestion.task.id, {
      status: 'hold'
    }) : markStuck(suggestion.task.patientId, suggestion.task.id)),
    onReroll: suggestNext,
    onDismiss: () => setSuggestion(null)
  }), focusMode ? React.createElement(FocusView, {
    patients: sortedPatients,
    typeMeta: typeMeta,
    estMeta: estMeta,
    now: now,
    onComplete: completeTask,
    onStuck: markStuck,
    onDoing: (pid, tid) => updateTask(pid, tid, {
      status: 'doing'
    }),
    onUnstick: unstick
  }) : React.createElement("div", {
    className: "desktop-main-grid"
  }, React.createElement("section", {
    className: "desktop-patient-column"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, patients.length === 0 && React.createElement("div", {
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
    expanded: expandedPatients[p.id],
    onToggle: () => toggleExpand(p.id),
    onRemove: () => {
      if (confirm(`「${p.name}」を終了にしますか？`)) removePatient(p.id);
    },
    onSetPriority: pri => setPatientPriority(p.id, pri),
    onRename: name => renamePatient(p.id, name),
    onMemoChange: memo => updatePatientMemo(p.id, memo),
    templates: templates,
    onApplyTemplate: tpl => applyTemplate(p.id, tpl),
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
  }))), React.createElement("div", {
    className: "desktop-add-patient",
    style: {
      marginTop: 14
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 10
    }
  }, React.createElement("input", {
    value: newPatientName,
    onChange: e => setNewPatientName(e.target.value),
    onKeyDown: e => e.key === 'Enter' && addPatient(),
    placeholder: "\u7B26\u4E01\u3092\u5165\u529B\u3057\u3066 Enter (\u4F8B: 305-3)",
    className: "inp"
  }), React.createElement("button", {
    className: "btn-dark",
    onClick: addPatient,
    style: {
      flexShrink: 0
    }
  }, React.createElement(Plus, {
    size: 15
  }), "\u8FFD\u52A0")), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-3)',
      fontWeight: 600
    }
  }, "\u512A\u5148\u5EA6:"), PRIORITIES.map(pri => React.createElement("button", {
    key: pri.id,
    onClick: () => setNewPatientPri(pri.id),
    className: "tag",
    style: {
      background: newPatientPri === pri.id ? pri.color : 'var(--surface)',
      color: newPatientPri === pri.id ? '#fff' : pri.color,
      border: `1.5px solid ${pri.color}50`,
      cursor: 'pointer',
      fontSize: 11,
      padding: '4px 12px',
      transition: 'all .15s',
      boxShadow: newPatientPri === pri.id ? `0 3px 10px ${pri.color}40` : 'none'
    }
  }, pri.label))))), React.createElement("aside", {
    className: "desktop-side-column"
  }, React.createElement(GeneralTaskSection, {
    tasks: generalTasks,
    open: generalOpen,
    onToggleOpen: () => setGeneralOpen(v => !v),
    form: generalForm,
    setForm: setGeneralForm,
    onAdd: addGeneralTask,
    onUpdate: updateGeneralTask,
    onRemove: removeGeneralTask,
    onClearDone: clearDoneGeneralTasks,
    onQuickAdd: addQuickGeneralTask,
    typeMeta: generalTypeMeta,
    estMeta: estMeta,
    now: now
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
  }, "\u2192 \u6B21\u306E\u4E00\u6B69: ", t.tinyStep)), React.createElement("button", {
    className: "btn-sm",
    onClick: () => unstick(t.patientId, t.id),
    style: {
      flexShrink: 0,
      color: 'var(--text-2)'
    }
  }, "\u623B\u3059"))))), React.createElement("div", {
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
  }), "\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u7BA1\u7406 (", templates.length, ")"), templatesOpen && React.createElement(TemplatesSection, {
    templates: templates,
    onAddTemplate: addTemplate,
    onUpdateTemplate: updateTemplate,
    onDeleteTemplate: deleteTemplate,
    onAddItem: addTemplateItem,
    onUpdateItem: updateTemplateItem,
    onRemoveItem: removeTemplateItem
  })), gasDialog && React.createElement(GasConfigDialog, {
    config: gasConfig,
    onSave: cfg => {
      setGasConfig(cfg);
      setGasDialog(false);
      showToast('GAS設定を保存しました');
    },
    onCancel: () => setGasDialog(false)
  }), stuckDialog && React.createElement(StuckDialog, {
    form: stuckForm,
    setForm: setStuckForm,
    onSave: saveStuck,
    onCancel: () => setStuckDialog(null)
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
  }, "\u2713"))))), toast && React.createElement("div", {
    className: "toast"
  }, toast));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(PatientTriage, null));
