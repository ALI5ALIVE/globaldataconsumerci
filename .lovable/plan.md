
## Goal

Replace the current Comply365-blue editable PPTX with a fully **GlobalData-branded**, native (editable) deck. Every slide is rebuilt from primitives using the GlobalData master visual system as the design source, while preserving the Consumer Journey content & layouts the React deck shows.

This continues with **Strategy B (per-element redraw)** — no captured images, all editable text/shapes/colors.

## What we're using from the GlobalData master

Pulled directly from the .potx you uploaded:

**Primary palette**
- White `#FFFFFF` (text & backgrounds)
- GD Black `#242528` (text & strokes)
- Navy Blue `#1F2432` (backgrounds, infographics, smart-art)
- Cream `#FBF5E9` (backgrounds, infographics)
- Mid Blue `#09216B` (additional infographic accent)
- Light Grey `#F2F2F2` (neutral surfaces)

**Secondary palette (for differentiation in infographics)**
- Mid Grey `#676B75`, Dark Grey `#505259`, Navy-1 `#444C62`
- Cream+1 `#E7D7C1`, Hyper Blue-1 `#6789FB`, Hyper Blue-2 `#CAD6FF`
- Mid Blue-1 `#0029AA`, Mid Blue-2 `#3D5BBA`

**Data-viz palette (charts in fixed order)**
`#2541D8 · #E6DCC3 · #4A7C6B · #001F5C · #EBD369 · #E08E45 · #BBAEA0 · #DCE4FF · #8BC09B · #B84438` (then row 2 for series 11–20)

**Typography**
- Headings: **Poppins Regular**, ≤ 32 pt, line-height 1.0
- Body: **Poppins Light**, ≥ 8 pt, line-height 1.0–1.1
- PowerPoint substitutes Calibri locally if Poppins isn't installed — we'll specify Poppins so installed users get the brand font.

**Brand chrome**
- Cover slide: navy background, large Poppins Regular title (≤ 32 pt), Q-mark in top-left
- Content slides: cream or white background, GD Black headline, Q-mark watermark in bottom-right corner only (per your memory rule "no GD logo in headers"), footer reads `globaldata.com  ·  N` aligned right
- 8×8 grid alignment (master uses Guides at 8×8) — we'll snap our spec coordinates to that grid

## Architecture changes

We keep the existing `SlideSpec` pattern. We swap out:

1. `src/lib/pptxBrand.ts` → rebrand all tokens & primitives to GlobalData
2. `src/exporters/pptx/buildConsumerJourneyEditable.ts` → use GlobalData chrome, embed the Q-mark, remove the Comply365 logo
3. The 12 spec files under `src/exporters/pptx/specs/consumerJourney/` → repaint with GD palette + Poppins, redraw decorative elements with the GD vocabulary (cream/navy panels, hyper-blue accents, Q-mark watermark) — content & layout intent stays identical

## Brand token redesign (`pptxBrand.ts`)

Replace the existing `PPTX_BRAND` with:

```ts
export const PPTX_BRAND = {
  size: { w: 13.333, h: 7.5 },
  color: {
    white: "FFFFFF",
    black: "242528",      // GD Black
    navy: "1F2432",       // primary dark surface
    cream: "FBF5E9",      // primary light surface
    midBlue: "09216B",    // primary accent
    lightGrey: "F2F2F2",  // neutral
    // Secondary
    midGrey: "676B75",
    darkGrey: "505259",
    navy1: "444C62",
    cream1: "E7D7C1",
    hyperBlue1: "6789FB",
    hyperBlue2: "CAD6FF",
    midBlue1: "0029AA",
    midBlue2: "3D5BBA",
    // Data-viz (sequence in fixed order)
    dv: ["2541D8","E6DCC3","4A7C6B","001F5C","EBD369",
         "E08E45","BBAEA0","DCE4FF","8BC09B","B84438"],
    // Status
    success: "4A7C6B",   // borrows green from dv
    danger: "B84438",    // dv red
    warning: "E08E45",   // dv amber
  },
  font: { heading: "Poppins", body: "Poppins" },
} as const;
```

All existing primitives (`addCard`, `addLabeledCard`, `addPill`, `addStatTile`, `addBrandStatBlock`, `addEyebrow`, `addSectionTitle`, `addBulletList`, `addCheckRow`, `addImageFallback`) keep their signatures — only their default colors and fonts change.

## New chrome (`addBrandMaster`)

Two variants:

**`light` (content slides)** — cream background `#FBF5E9` with optional white inner panel; `#242528` ink; bottom-left footer = deck label in dark grey `#676B75`; bottom-right footer = `globaldata.com  ·  NN` in dark grey; small Q-mark watermark bottom-right corner at 0.45" tall.

**`dark` (cover slide)** — navy `#1F2432` full-bleed; white text; large white Q-mark in top-left at 0.55" tall; eyebrow in cream `#FBF5E9`; footer slide counter in mid-grey.

Per your memory the GD wordmark is **removed from in-slide headers** — we only use the Q-glyph mark and the `globaldata.com` text-mark in the footer. Title slide still gets the prominent Q-mark.

## Asset additions

Copy the Q-mark from the parsed `.potx` images into `src/assets/`:
- `src/assets/gd-qmark-white.png` (white Q for navy backgrounds — page 13 of the master)
- `src/assets/gd-qmark-dark.png` (dark Q for cream/white backgrounds — page 5 of the master)

Both are loaded once via `loadImageAsBase64` in the editable builder.

## Per-slide redraw notes

Same content, repainted in GD vocabulary:

| Slide | GD design moves |
|---|---|
| 0 · Title | Navy bg `#1F2432`, large white Q in top-left, eyebrow `A NEW WAY OF WORKING` in cream, headline white Poppins Regular 32 pt, subhead Poppins Light cream-ish, stats strip becomes 4 white outline cards on navy with hyper-blue numbers `#6789FB`. Footer `globaldata.com` in mid-grey. |
| 1 · Pressure | Cream bg, three white cards with thin navy stroke; left accent bars in mid-blue `#09216B`, hyper-blue `#6789FB`, cream-1 `#E7D7C1`. Section title GD black. |
| 2 · Monday Morning | Cream bg, 7 white email rows with navy unread dot, "UNREAD" pill in hyper-blue-2 `#CAD6FF` background + mid-blue text. |
| 3 · Seven Sources | Cream bg, 7 vendor cards in white with mid-blue left accent. Three stat tiles below using data-viz colors: red `#B84438` (60%), amber `#E08E45` (10%), mid-blue `#09216B` (12 wks). |
| 4 · The Cost | Cream bg, two columns: left "BUSINESS COST" header band in dv red `#B84438` with `£63M` in red; right "PERSONAL COST" header band in mid-blue `#09216B` with `60%` in mid-blue. Bullets in GD black. |
| 5 · One Lens (Ava hub) | Cream bg, central Ava disc in navy `#1F2432` with white "AVA" text; 5 solution cards orbit, each with a hyper-blue-2 background `#CAD6FF` and a left accent in one of the data-viz colors. Connector dots in mid-grey. |
| 6 · Connected Decision | Cream bg, top GO band in mid-blue `#09216B` with white text; 5 persona cards below — top accent bar from data-viz palette, big stat in matching color. |
| 7 · Teams Transformed | Cream bg, three large stat tiles (mid-blue, hyper-blue, dv-green); talent retention card below in white with mid-blue left bar. |
| 8 · Maturity Journey | Cream bg, 5-stage curve repainted with **the data-viz sequence in order** (`#2541D8 #E6DCC3 #4A7C6B #001F5C #EBD369`) so it matches the master's prescribed series order. Connector trail in light grey `#F2F2F2`. 4 summary cards below in white. |
| 9 · The Proof | Cream bg, 4 stat tiles in dv colors 1–4 (mid-blue, cream, green, navy). VP testimonial card in navy `#1F2432` with white italic quote and cream byline. |
| 10 · Why Not DIY | Cream bg, two columns: DIY header band dv red `#B84438`; CI header band mid-blue `#09216B`. 5 comparison rows with red ✕ / dv-green ✓. |
| 11 · CTA | Cream bg. Discovery Session card in navy `#1F2432` (white text, hyper-blue-2 eyebrow). Intelligence Audit card in white with mid-blue left bar. VP testimonial band in light grey `#F2F2F2`. |

Speaker notes from `consumerJourneyNarrations[i].script` continue to populate every slide.

## Files changed

**New assets**
- `src/assets/gd-qmark-white.png` (copied from parsed master)
- `src/assets/gd-qmark-dark.png` (copied from parsed master)

**Rewritten**
- `src/lib/pptxBrand.ts` — palette, fonts, chrome
- `src/exporters/pptx/buildConsumerJourneyEditable.ts` — load Q-marks, GD chrome, label `"globaldata.com"`
- `src/exporters/pptx/specs/consumerJourney/00-title.ts` … `11-cta.ts` — repaint each per the table above

**Untouched**
- `src/components/DeckPPTXExportButton.tsx` — already mode-aware
- `src/exporters/pptx/buildConsumerJourneyDeck.ts` — pixel-perfect path stays
- `src/exporters/pptx/index.ts` — registry stays

## What "exactly replicate" looks like after this

You'll get 12 slides that are unmistakably the GlobalData master deck — same palette, same Poppins typography, same Q-mark + `globaldata.com` footer pattern, same cream/navy surface choices, same data-viz color order — populated with your Consumer Journey narrative. Every text frame, color and shape stays editable in PowerPoint Desktop.

It is **not** byte-identical to the React rendering on screen (PPTX still has no SVG/framer-motion), but it **is** an exact match to the GlobalData brand system the .potx defines — which is the realistic upper bound for an editable deck.

## Suggested order of execution

1. Copy the two Q-mark assets, rewrite `pptxBrand.ts` with GD tokens & chrome.
2. Repaint the title spec (validates the navy hero).
3. Repaint the layout-driven slides in batch (1, 4, 7, 10, 11).
4. Repaint the data-rich slides (2, 3, 6, 9).
5. Repaint the visually-rich slides (5, 8) — these benefit most from the data-viz palette.
