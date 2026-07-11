# タスク: マイルストーン拡張 + 完了マイクロ演出

まず リポジトリ直下の `AGENTS.md` を読んで規約に従うこと。
このタスクは A / B / C の3つの独立した変更からなる。対象は `prototype_unified_triage.app.js` と `index.html` の2ファイルのみ。

---

## A. マイルストーン拡張(prototype_unified_triage.app.js)

### A-1. 30件打ち止めの解除

アンカー(現在1008行付近):

```js
const milestoneForDone = count => count <= 30 && count % 5 === 0 ? count : null;
```

これを「30件までは5刻み、30件超は10刻み(40, 50, 60, …上限なし)」に変更する。

### A-2. 汎用マイルストーン文フォールバック

`MILESTONE_LINES`(1000行付近、5〜30件の文言テーブル)は30件までしかない。直後にヘルパーを追加:

```js
const milestoneLineFor = count => {
  const line = MILESTONE_LINES[count];
  if (line) return line;
  const generic = (typeof window !== 'undefined' && window.APP_DIALOGUE && window.APP_DIALOGUE.milestones && window.APP_DIALOGUE.milestones.generic) || '今日{count}件終了。ここまで来ると立派な記録です。';
  return String(generic).replace(/\{count\}/g, String(count));
};
```

既存の `showToast(MILESTONE_LINES[milestone])` 呼び出し(**2箇所**: 患者モード完了処理 10763行付近、わーとりモード完了処理 11277行付近)を `showToast(milestoneLineFor(milestone))` に置換。

### A-3. 累計完了カウンタと累計節目

`milestoneForDone` の直後にモジュールレベル定数を追加:

```js
const LIFETIME_MILESTONES = [50, 100, 250, 500, 1000, 2000, 5000, 10000];
const lifetimeMilestoneFor = total => LIFETIME_MILESTONES.includes(total) ? total : null;
const lifetimeLineFor = total => {
  const tpl = (typeof window !== 'undefined' && window.APP_DIALOGUE && window.APP_DIALOGUE.milestones && window.APP_DIALOGUE.milestones.lifetime) || '🎉 これで累計{total}件目の完了。積み重ねがちゃんと形になっています。';
  return String(tpl).replace(/\{total\}/g, String(total));
};
```

完了処理の `setStats(prev => { ... })` は**2箇所**ある(患者モード 10756行付近・わーとりモード 11270行付近)。どちらも同じ構造:

```js
    setStats(prev => {
      const workDate = todayStr();
      const baseCount = prev.date === workDate ? prev.doneToday : 0;
      const nextCount = baseCount + 1;
      const milestone = milestoneForDone(nextCount);
      if (milestone && prev.lastMilestone !== milestone) {
        setTimeout(() => { ...showToast + chibi-coach... }, 260);
      }
      return {
        ...prev,
        doneToday: nextCount,
        date: workDate,
        lastMilestone: milestone || prev.lastMilestone || 0
      };
    });
```

**両方**に以下を組み込む:

1. `const nextLifetime = (prev.lifetimeDone || 0) + 1;`
2. `const lifetimeMilestone = lifetimeMilestoneFor(nextLifetime);`
3. 到達時の演出(日次マイルストーンの260msと重ならないよう900msに遅延):

```js
      if (lifetimeMilestone && prev.lastLifetimeMilestone !== lifetimeMilestone) {
        setTimeout(() => {
          showToast(lifetimeLineFor(lifetimeMilestone));
          window.dispatchEvent(new CustomEvent('chibi-coach', {
            detail: {
              kind: 'allclear',
              text: lifetimeLineFor(lifetimeMilestone)
            }
          }));
        }, 900);
      }
```

4. return オブジェクトに追加: `lifetimeDone: nextLifetime, lastLifetimeMilestone: lifetimeMilestone || prev.lastLifetimeMilestone || 0`

### A-4. 日付をまたいだ累計値の引き継ぎ(重要)

`stats` はロード時に当日分しか復元されない。app.js 内で

```js
if (parsed.stats?.date === todayStr()) setStats(parsed.stats);
```

のパターンを **grepですべて探し**(applyPayload 内の1箇所のはず)、次の形に変更する:

```js
    if (parsed.stats?.date === todayStr()) setStats(parsed.stats);else if (parsed.stats) setStats(prev => ({
      ...prev,
      lifetimeDone: parsed.stats.lifetimeDone || 0,
      lastLifetimeMilestone: parsed.stats.lastLifetimeMilestone || 0
    }));
```

これがないと**日付が変わるたびに累計がゼロに戻る**バグになる。

### A-5. stats 初期値

`useState` の stats 初期値(`doneToday: 0` を含むオブジェクト、9807行付近)に `lifetimeDone: 0, lastLifetimeMilestone: 0` を追加。

---

## B. 完了チェックのスパークル演出(index.html)

`.check-circle`(完了チェック丸ボタン、アプリ全体で使われている)を「未完了→完了」方向にクリックした瞬間、ボタン中心から小さなきらめき粒子4個がふわっと散って消える演出。

- **app.js には一切触れない**。index.html 末尾のスクリプト群に独立IIFEを1つ追加する(既存のちびコーチIIFE 1668行付近の `document.addEventListener('click', ...)` と同様のパターン)
- 完了方向の判定: クリック時点で対象がまだ `done` クラスを**持っていない**こと(React反映前なのでクラスは旧状態)。`event.target.closest('.check-circle')` で拾う
- `prefers-reduced-motion: reduce` なら何もしない
- 粒子: `position: fixed` の `<span class="check-sparkle">` を4個 body に追加し、CSS変数 `--dx` / `--dy` でランダム方向(半径18〜28px程度、やや上向きバイアス)へ飛ばす。`animationend` で必ず `remove()`
- 色は `var(--accent)` / `var(--done)` / `#F59E0B` あたりを混ぜる。サイズ6px・角丸50%・0.6秒で消える
- `<style>` に追加するCSS: `.check-sparkle { ... }`、`@keyframes sparklePop { ... }`(既存の `confettiPop` 324行付近が書き方の参考になる)、および `body.rpg-mode .check-sparkle { border-radius: 0; }`(RPGモードでは角ばったドット粒子)
- z-index は 9500 程度(ちびコーチ9000より上、ダイアログ類と干渉しない)

---

## C. ちびコーチの「ぴょこん」(index.html)

ちびコーチが完了系のセリフを出すとき、立ち絵が一度だけ小さく跳ねる。

- ちびコーチエンジンの `function show(kind, ...)`(1562行付近)内、表示処理のところで `effectiveKind` が `'done'` または `'allclear'` のとき、立ち絵 `img` に一時クラス `hop` を付与する。連続発火でも再生されるよう「remove → reflow強制(`void img.offsetWidth`)→ add」のパターンを使う。`animationend` で除去
- CSS: `@keyframes chibiHop`(0.45秒、-14px程度跳ねて戻る、少しだけscale 1.04)を追加
- **注意**: img には既存の `chibiFloat` 常時アニメがある(`index.html` 70行付近の `.chibi-coach img`)。これを壊さないこと。`.chibi-coach img.hop` で `animation: chibiFloat 1.9s ease-in-out infinite, chibiHop .45s cubic-bezier(.3,1.4,.5,1);` のように**両方指定**して合成するのが安全

---

## 受け入れ基準

1. `node --check prototype_unified_triage.app.js` が通る
2. 1日の完了が 35件では何も出ず、40件で汎用文トーストが出る(30件までは従来どおり5刻み)
3. 累計50件目の完了で一度だけ累計お祝い(ちびコーチ+トースト)が出て、51件目では出ない
4. 日付が変わっても(stats.dateが昨日でも)lifetimeDone が保持される
5. チェックを「完了にする」クリックでスパークルが出る。「完了を解除する」クリックでは出ない
6. RPGモードでスパークルが四角い粒子になる
7. ちびコーチの done/allclear セリフ時に立ち絵が一度跳ね、浮遊アニメは維持される
8. dialogue.js を変更していなくてもすべて動く(フォールバック文で)

## やらないこと

- service-worker.js の変更、コミット、dialogue.js の変更、上記以外のリファクタリング
