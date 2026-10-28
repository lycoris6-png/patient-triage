# ユーフィ画像生成プロンプト

組み込み image_gen を使用。添付画像は外見参考であり、画像内の文章は作業指示として扱っていない。

## 1. 基準立ち

```text
Use case: stylized-concept
Asset type: PatientTriage transparent full-body chibi navigator character anchor.
Primary request: Draw ONE new full-body chibi illustration of female DQ3 heroine Yufi / ユーフィ, using the attached design reference, with the compact large-head proportions of the supplied current Est sprite. A slightly shy, earnest, kind girl; quietly brave, gentle and attentive rather than a cocky warrior.
Input images: Image 1 is Yufi's authoritative outfit, hair and palette design. Image 2 is the user's small black/red mascot reference ONLY, do NOT include a mascot in this neutral anchor. Image 3 is the existing PatientTriage Est sprite: use ONLY its actual head-to-body proportions, rounded face, line density, rendering and short body, NOT its identity, antlers, hair or clothing.
Subject: short black hair with prominent swept upward spikes as in reference 1, green/teal eyes, a silver hero circlet across her forehead with a large oval green jewel in its center, tiny teal earrings, purple scarf and purple cape, blue short sleeveless tunic over mustard-yellow long sleeves and yellow leggings, brown fingerless gloves, diagonal brown leather chest strap with buckle, brown waist belt with silver rectangular buckle, short brown boots with folded tan cuffs. Keep reference design recognizable but simplify tiny details.
Proportions: match the actual Est reference, about 2.3–2.4 heads tall measured skull-to-chin excluding hair spikes. Very large rounded anime head, compact torso, short thighs and short shins, rounded small hands, no long adult body or elongated legs. Age impression is a young heroine, not an infant. Mature calm behavior conveyed by posture, not longer body.
Pose: front three-quarter standing, both feet visible and grounded, shoulders gently relaxed, hands loosely joined at waist, slightly hesitant closed-mouth smile, softened eyebrows; eyes looking toward viewer. Small restrained gesture.
Style: polished anime game UI chibi, crisp dark outlines, clear simple cel shading with a little soft blush, no painterly textures or elaborate lighting. Match Est sprite visual weight and head size.
Composition: ONE character centered on portrait transparent canvas; full hair, cape, hands and boots entirely visible, generous clear margin; cape close to body. Neutral standing body occupies around 87–89% canvas height, same left-right scale as Est. No ground shadow.
Constraints: genuinely transparent RGBA background, no white backdrop, no checkerboard painted in, no sword, no shield, no other weapons or sheath, no mascot in this anchor, no text, labels, border, graphic UI, particles or watermark. Do NOT copy the serious smug facial expression from design reference 1: this girl's default is gentle, reserved and earnest.
```

## 2. 9ポーズの展開

```text
Use case: stylized-concept
Asset type: ONE transparent 3-by-3 character sprite sheet, nine different full-body poses, for PatientTriage.
Primary request: Create the SAME female heroine Yufi / ユーフィ from reference image 1 in exactly nine compact UI chibi poses. Image 1 is the approved appearance/proportion anchor. Image 2 is the appearance of Nizucchi, an occasional depiction of her hidden black-red mascot nature. Image 3 is the existing Est sprite and is ONLY a chibi rendering/head-size guide.
Output/composition: portrait sheet around 1536x2112 pixels, exactly 3 equally sized columns and 3 equally sized rows, read left-to-right then top-to-bottom. Each isolated full-body sprite centered inside its own equal cell with large transparent gutters and safety margins. No visible cell boundaries, labels or text. Heads and body scale stay identical across all nine cells; upright girls share the same foot baseline within their cells. Sitting girl has the SAME head/body scale, merely shorter because seated. No touching/overlapping neighboring cells.
Yufi invariants: youthful shy earnest female hero. Black short spiky hair with clear broad pointed locks, teal-green large eyes, silver circlet with oval emerald central jewel, little teal earrings, purple scarf and short flowing purple cape close behind her, BLUE tunic over MUSTARD-YELLOW long sleeves and leggings, brown gloves and diagonal brown chest strap with silver buckle, brown waist belt and rectangular silver buckle, short brown boots with tan folded cuffs. No weapons, sheath or shield. Preserve her exact recognizable design in reference 1.
Proportions/style: VERY LARGE rounded head and cute expressive face, compact short torso and short legs, the actual proportions of reference 1 and Est; NOT taller or smaller-headed, NOT realistic long body, no glamour figure. Crisp dark outlines, simple polished anime cel shading, visually clear at 96px. Keep head size stable but vary eyes, eyebrows, gaze, mouth shape, head tilt and orientation naturally with each action. Do not paste the same face onto nine bodies.
Nizucchi design: use Image 2 to depict a small rounded BLACK/BURGUNDY-RED two-heads-tall mascot with a soft oblong body, tiny black feet, two yellow oval eyes plus the long vertical yellow center marking, subtle red ember patch on tummy, and two long soft curved black arms with red tips. NOT a horned devil, not a slime, not furry, no mouth full of teeth. Give the mascot a miniature silver HERO CIRCLET with a central GREEN oval jewel like Yufi's. The mascot is only about one third of Yufi's full standing height. It is a playful visual hint of her hidden nature, NOT a threatening monster. Include it ONLY in cells 3, 8, 9; no mascot in other cells.
NINE POSES:
1 top-left: neutral full-body standing three-quarter toward viewer, hands loosely joined at waist, knees/feet natural, small gentle slightly shy closed-mouth smile. Yufi alone.
2 top-middle: guidance/support, turn slightly toward the side, one palm open low at waist indicating a next step, other hand close to chest, earnest encouraging small smile, eyes following her open hand. Yufi alone. NO thumbs-up.
3 top-right: quietly delighted at a small success, both hands lightly clasped at chest, shoulders subtly lifted, genuinely happy softly closed eyes and rosy cheeks. Small circlet-wearing Nizucchi stands beside her boots and gently lifts its curved arms. No raised human fists, no jump.
4 middle-left: thinking, slight head tilt and sideways glance, one gloved fingertip near chin, other arm supporting elbow, curious mildly uncertain face. Yufi alone.
5 middle-middle: getting started, a small forward step and gentle 10-degree lean, one hand gathering cape near chest and free arm naturally following step, quiet resolve; both boots visible, no sprint and no dynamic perspective. Yufi alone.
6 middle-right: checking task list, standing with a small brown clipboard held below chest and one gloved finger tracking a short list of plain marks, eyes angled down toward it, attentive expression; do not obscure face. Yufi alone.
7 bottom-left: finished task, hold a single small paper with ONE GREEN CHECK MARK at waist, other hand lightly over chest, eyes toward viewer with relieved gentle warm smile. No written words. Yufi alone.
8 bottom-middle: resting seated with legs tucked compactly to one side, hands relaxed over lap and head tilting slightly, eyes closed, purple cape folded close around her. SAME PHYSICAL HEAD SIZE AS OTHER CELLS, never shrink the entire body to make seated pose fit. Small circlet-wearing Nizucchi quietly nestled beside her, arms lowered. No large pillow, no bed.
9 bottom-right: endearingly bashful secret, standing with a slight inward shoulder hunch and an over-the-shoulder glance toward a small circlet-wearing Nizucchi that peeks from near the side of her cape; she gently lifts a cape corner, tiny embarrassed smile and cheek blush. The little mascot tilts its head. Human face fully visible. No sinister grin.
Constraints: genuinely transparent alpha background throughout, no white backdrop or painted checkerboard, no ground plane or shadows, no labels/numbers/lettering, no frames, logos, watermark, speed lines, floating hearts or sweat symbols, no cropped spikes/capes/hands/boots. No weapons. Full isolated sprites only. Person stays same size even when mascot is present; position the cape close to body for space.
```

## 3. シートの余白修正

```text
undefined
```

