## Goal
Bring the editable PPTX (`Connected-Consumer-Intelligence-Editable_5.pptx`) materially closer to the live web deck. Ground-truth source = `src/components/consumer-journey/*` and `_copy.ts`. Biggest visible miss: the Ava hub slide is missing a persona and the multi-ring structure shown on screen. Every other slide also gets a focused fidelity pass.

## What's wrong today (confirmed by re-rendering the uploaded file)

**Slide 6 — One Lens / Ava Hub (the one you flagged)**
- Only **5 persona cards**; the live `CJOneLensHub` shows **6 stages** (adds **David — Head of Procurement / "One Vendor, Lower Cost"**).
- The web hub has **two concentric rings** (5 *solution* cards inner ring, 5 *persona* avatars outer ring) plus a **consumer silhouette center** wrapped by a dashed **AVA AI ring**. Export currently has just a single ring of cards around an "AVA" disc. No consumer center, no AVA ring, no two-tier structure.
- The card content collapses persona + solution into one tile; the live UI separates them and adds the solution sub-line (e.g. "110 countries · 1,000+ segments").

**Slide 1 — Title**
- Missing the "GlobalData" wordmark/glow header treatment shown on screen; we render only the Q-mark via the master.
- `bg-gradient` in the headline ("for Consumer Brands") should render as a brighter accent blue, not the same navy ink.

**Slide 2 — Pressure**
- Cards lack the title eyebrow ("THE PRESSURE") that the spec defines but the build skips.
- No glyph color differentiation per card (live uses navy / blue / amber / red accents — currently all use the brand primary).

**Slide 4 — Seven Sources**
- Vendor cards are missing the small **red "unread" dot** styling consistency with the inbox slide and the **column dividers** that the live grid uses for visual rhythm.
- The 3-stat callout pill should sit on a **soft red wash**, not a plain card.

**Slide 5 — The Cost**
- Headers "YOUR BUSINESS" / "YOU, PERSONALLY" render but the live design uses the **brand red** for the business header and **brand navy** for the personal header — currently both render in the same accent.
- Accumulator footer pill misses the **"£63M" red** treatment used on screen.

**Slide 7 — The Connected Decision**
- Persona top borders are correct, but the **GO verdict bar** loses the green left-rule and the "WITHOUT / WITH" contrast cards collapse to identical pink/blue tints rather than the live red/green pairing.

**Slide 8 — Teams Transformed**
- Bottom 3 metric cards (`7.5×`, `Same-day`, `2×`) **clip below the slide footer** (visible in the render — last line touches the page-number bar). Needs a vertical rebalance.

**Slide 9 — Maturity Journey**
- Curve renders, but the **stage 1 marker label "Fragmented"** sits below the baseline and overlaps the cards row. The live curve places labels above each marker.
- Bullet markers in each card are tiny black squares — should be the stage accent dot used on screen.

**Slide 10 — Proof**
- Pillar glyphs render as Unicode (⏱ ⚡ ◎) and **fail to display** in PowerPoint default font on some machines (visible as monochrome filled squares in our render). Needs the same SVG-style icon treatment used on cards in slide 2.
- Logo grid uses 4×2 — live deck stacks the **8 logos as 4×2 with cream background** matching the rest of the page; current render is fine but should drop the inner border for a flatter look matching the React source.

**Slide 11 — DIY vs Connected**
- Final closing italic line ("Integration connects pipes…") **clips against the footer**. Needs to move into a card or be reduced one font step.

**Slide 12 — CTA**
- The geometric cream/navy "diagonal split" shape on screen is missing entirely — the export has a flat cream background. The shape is the slide's main visual signature.
- Button rows ("Book a call →" etc.) render as solid pills; the diagonal arrow glyph is fine, but the **CTA buttons sit too close to the bottom edge**.

## Changes

### A. Rewrite `05-one-lens.ts` to match `CJOneLensHub.tsx`
- Add a 6th spoke to `ONE_LENS_SLIDE.spokes` in `_copy.ts`: `David / Procurement / "One Vendor, Lower Cost" / "D"`.
- Lay out **6 solution cards on an inner orbit** (radius ≈ 2.0", angles every 60°) and **6 persona discs on an outer orbit** (radius ≈ 3.2") connected to the matching solution card by a thin colored spoke.
- Center stack: filled navy disc → consumer silhouette (two simple ellipses for head + shoulders) → "THE CONSUMER / One Lens · One Truth" labels.
- Wrap the center with a dashed accent-blue **AVA ring** (ellipse outline only) and an "AVA — AI INTELLIGENCE LAYER" caption above it.
- Keep dotted journey arcs between adjacent inner cards (already present, just regenerate for 6 nodes).

### B. Per-slide polish passes
For each spec file below, make the small targeted edits listed above:
- `00-title.ts` — add a left-aligned "GlobalData" wordmark text block (since the navy hero hides the master Q-mark) and switch the lower headline line to `C.accent` blue.
- `01-pressure.ts` — add eyebrow text and per-card glyph tint pulled from `card.accent`.
- `03-seven-sources.ts` — promote stat strip to a soft red (`FFF1EE`) fill and add a 1px column divider between vendor cards.
- `04-the-cost.ts` — color the two column headers with `C.danger` and `C.primary`; tint the `£63M` value in the accumulator with `C.danger`.
- `06-connected-decision.ts` — restore the green left-rule on the GO bar; recolor WITHOUT/WITH cards to red/green pairing.
- `07-teams-transformed.ts` — shift the metric-card row up by ~0.4" and reduce card height by 0.2" so it clears the footer.
- `08-maturity-journey.ts` — move stage labels above the markers; switch bullet glyphs from "▪" to a colored disc using `addGlyphTile`.
- `09-proof.ts` — replace Unicode glyphs with `addGlyphTile` (filled rounded square + first-letter or simple shape); flatten the logo cards to borderless cream tiles.
- `10-why-not-diy.ts` — wrap the closing italic line in a slim caption card 0.3" above the footer to prevent clipping.
- `11-cta.ts` — add a navy diagonal `triangle` shape behind the cream background to mirror the live diagonal-split visual; lift the CTA card row by ~0.25".

### C. Helper additions in `pptxBrand.ts`
- `addDashedRing(slide, cx, cy, r, color, segs)` — used by the Ava ring on slide 5.
- `addPersonSilhouette(slide, cx, cy, size, color)` — used by the consumer center on slide 5.

## Files to edit
- `src/exporters/pptx/specs/consumerJourney/_copy.ts` — add 6th persona spoke (David).
- `src/exporters/pptx/specs/consumerJourney/05-one-lens.ts` — full rewrite per section A.
- `src/exporters/pptx/specs/consumerJourney/00-title.ts`, `01-pressure.ts`, `03-seven-sources.ts`, `04-the-cost.ts`, `06-connected-decision.ts`, `07-teams-transformed.ts`, `08-maturity-journey.ts`, `09-proof.ts`, `10-why-not-diy.ts`, `11-cta.ts` — targeted edits per section B.
- `src/lib/pptxBrand.ts` — add 2 small helpers per section C.

## Out of scope
- No further changes to the GD master merge pipeline (`gdMasterMerge.ts`).
- No re-architecture of the spec system; this is a fidelity sweep, not a rewrite.
- The web deck's framer-motion animations and hover tooltips remain web-only; PPTX captures the static end-state.

## QA
After changes, regenerate the editable deck from the in-app export button, then compare every slide against the live route at `/`. Record a one-line note per slide confirming the listed fix landed (or list any remaining drift).
