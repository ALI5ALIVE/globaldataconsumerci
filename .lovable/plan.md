
## What the reference repo does (and why their output is better)

Their **Editable PPTX** is not generated from narration text. Each slide is a **hand-coded `SlideSpec`** that draws the *visual layout* of the corresponding React slide using native PowerPoint primitives — rounded cards, icon badges, pills, stat tiles, before/after columns, time-allocation bars, DTOP step pills, and a branded chrome (logo, footer, slide counter, faint dotted grid).

Key architectural pieces:

1. **`src/lib/pptxBrand.ts`** — a ~600-line shared toolkit of brand primitives:
   - `PPTX_BRAND` tokens (colors, fonts, slide size)
   - `paintBackground`, `addBrandMaster` (chrome: bg + hairline + logo + footer + slide counter)
   - Building blocks: `addCard`, `addLabeledCard`, `addPill`, `addPillRow`, `addIconBadge`, `addStatTile`, `addEyebrow`, `addSectionTitle`, `addBulletList`, `addCheckRow`, `addDivider`, `addStepArrow`, `addImageFallback`
2. **`SlideSpec` pattern** — every slide is `{ label, build(slide, ctx) }`. The deck builder loops, calls `pptx.addSlide()` then `spec.build(...)`. Each spec composes brand primitives to mirror its React counterpart (e.g. `transformationSpec` rebuilds the before/after + time-allocation layout from `Slide4Transformation.tsx`).
3. **Image fallback** — `addImageFallback` lets a spec embed a captured PNG only for genuinely uncomposable visuals (complex SVG hubs, framer-motion compositions). Rest of the slide stays editable.
4. **Lazy-loaded builders** — `index.ts` lazy-imports each deck so `pptxgenjs` isn't pulled into the main bundle.
5. **No template merge, no JSZip, no XML hacking** — `pptxgenjs` writes a clean, valid PPTX in one call.

The "better output" comes from per-slide visual design work, not from any clever framework.

## Plan: replicate this in our project

### Step 1 — Create `src/lib/pptxBrand.ts`

Port the shared toolkit, adapted to Comply365 Consumer-Journey colors already in our memory (Comply365 blue `#0066FF`, sky blue accent, navy `#0A1628`). Same exported API as the reference: `PPTX_BRAND`, `paintBackground`, `addBrandMaster`, `addCard`, `addLabeledCard`, `addPill`, `addPillRow`, `addIconBadge`, `addStatTile`, `addEyebrow`, `addSectionTitle`, `addBulletList`, `addCheckRow`, `addDivider`, `addStepArrow`, `addImageFallback`, `loadImageAsBase64`, `addBrandLogo`.

### Step 2 — Define `SlideSpec` and rewrite the editable builder

Replace the current naive `buildConsumerJourneyEditable.ts` with a spec-based builder.

```ts
// src/exporters/pptx/slideSpec.ts
export interface SlideContext {
  logo: string; logoLight: string;
  index: number; total: number;
  deckLabel: string;
}
export interface SlideSpec {
  label: string;
  build: (slide: pptxgen.Slide, ctx: SlideContext) => Promise<void> | void;
}
```

Then in `src/exporters/pptx/specs/consumerJourney/`, one file per slide:

| File | Mirrors React component |
|---|---|
| `00-title.ts` | `CJSlide0Title.tsx` — hero chrome + eyebrow + 44pt title + stats strip |
| `01-pressure.ts` | `CJSlide1Pressure.tsx` — three pressure cards |
| `02-monday-morning.ts` | `CPSlide1MondayMorning.tsx` — inbox: 7 rows of email cards w/ unread pill |
| `03-seven-sources.ts` | `CPSlide2SevenSources.tsx` — 7 vendor logos in a grid (image-embedded vendor marks) |
| `04-the-cost.ts` | `CPSlide3TheCost.tsx` — Business vs You split, £63M accumulator stat |
| `05-one-lens.ts` | `CPSlide4ImagineOneLens.tsx` — central Ava hub + 5 personas (image fallback for the SVG hub) |
| `06-connected-decision.ts` | `CJSlideConnectedDecision.tsx` — boardroom GO verdict + persona dashboards |
| `07-teams-transformed.ts` | `CPSlide7TeamsTransformed.tsx` — three transformation metric tiles |
| `08-maturity-journey.ts` | `CJSlideMaturityJourney.tsx` — 5-stage curve (image fallback) + 4 summary boxes |
| `09-proof.ts` | `CJSlideProof.tsx` — proof points + ROI chart |
| `10-why-not-diy.ts` | `CJSlideWhyNotDIY.tsx` — three-pillar comparison cards |
| `11-cta.ts` | `CJSlide12CTA.tsx` — CTA + Top 5 FMCG VP testimonial |

Each spec uses primitives only (no captures). Where a visual is genuinely uncomposable (Ava hub SVG, maturity curve SVG), use `addImageFallback` — the rest of that slide still stays editable.

### Step 3 — Wire the deck builder

```ts
// src/exporters/pptx/buildConsumerJourneyEditable.ts
const composed: SlideSpec[] = [
  titleSpec, pressureSpec, mondayMorningSpec, sevenSourcesSpec,
  theCostSpec, oneLensSpec, connectedDecisionSpec, teamsTransformedSpec,
  maturityJourneySpec, proofSpec, whyNotDiySpec, ctaSpec,
];
const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_WIDE";
const logo = await loadImageAsBase64(comply365LogoUrl);
for (let i = 0; i < composed.length; i++) {
  opts.onProgress?.(i, composed.length, composed[i].label);
  const slide = pptx.addSlide();
  await composed[i].build(slide, { logo, logoLight, index: i, total: composed.length, deckLabel: "Connected Consumer Intelligence" });
}
return await pptx.write({ outputType: "blob" }) as Blob;
```

Also populate **Speaker Notes** on every slide from `consumerJourneyNarrations[i].script` so presenters keep the script.

### Step 4 — Keep the dual-button UX

`DeckPPTXExportButton` already supports `mode="pixel-perfect" | "editable"`. No UI changes needed — the `editable` builder simply produces a much richer output.

### Step 5 — Optional later: image fallback for hub & curve

If we want Slide 5 (Ava hub) and Slide 8 (maturity curve) to be visually identical to the web, the spec for those two slides can call `captureSlide("cp-slide-4")` / `captureSlide("cj-slide-maturity")` and place the captured PNG inside an otherwise editable layout (eyebrow, title, side annotations all native text). This is the "Hybrid: image + editable chrome" pattern.

## Files to create / change

**New**
- `src/lib/pptxBrand.ts` (~500 lines, ported & rebranded toolkit)
- `src/exporters/pptx/slideSpec.ts` (the `SlideSpec` interface)
- `src/exporters/pptx/specs/consumerJourney/00-title.ts` … `11-cta.ts` (12 spec files)

**Rewritten**
- `src/exporters/pptx/buildConsumerJourneyEditable.ts` (compose specs, no more bullet generator)

**Unchanged**
- `src/exporters/pptx/index.ts` (registry already correct)
- `src/exporters/pptx/buildConsumerJourneyDeck.ts` (pixel-perfect path stays)
- `src/components/DeckPPTXExportButton.tsx` (already supports `mode`)
- `src/pages/ConsumerJourneyDeck.tsx` (already renders both buttons)

## Trade-offs & honest expectations

- **Effort**: porting `pptxBrand.ts` is mechanical (~30 min); each of the 12 specs is the real work — roughly 30-60 min per slide of careful layout coding to mirror the React design.
- **Fidelity**: native shapes/text — NOT pixel-identical to the web (PowerPoint has no SVG, no framer-motion, no React-rendered components). Expect ~80% visual likeness for layout-driven slides (1, 2, 3, 4, 7, 10, 11), ~60% for the SVG-heavy slides (5, 8) unless we use the hybrid image fallback for those.
- **Editability**: every text frame, color, position is editable in PowerPoint. Same as the reference repo's "Medium" output.
- **Bundle size**: `pptxgenjs` is already installed and lazy-loaded; no new heavy deps.

## Suggested execution order (so progress is visible quickly)

1. Port `pptxBrand.ts` and define `SlideSpec` (foundational).
2. Build `00-title.ts` and `11-cta.ts` first (simplest, validates the pipeline end-to-end).
3. Build the 4 layout-heavy slides next: `01-pressure`, `04-the-cost`, `07-teams-transformed`, `10-why-not-diy`.
4. Build the data-rich slides: `02-monday-morning`, `03-seven-sources`, `06-connected-decision`, `09-proof`.
5. Finish with the SVG-fallback slides: `05-one-lens`, `08-maturity-journey`.

We can ship after Step 2 with a working pipeline, then add specs incrementally.
