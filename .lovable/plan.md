## Where we are vs. the ceiling

We've already done the high-leverage work in the **native redraw** approach:
- Correct GD palette (Navy, Cream, Mid Blue, Hyper Blue, GD Black, full 10-color data-viz sequence)
- Poppins typography, `globaldata.com` footer, Q-mark watermarks
- Shared `_copy.ts` so PPTX text matches the React deck verbatim
- Reusable primitives (cards, glyph tiles, segmented bars, inbox rows, pills)
- All 12 slides redrawn against the live components

**What still doesn't match the real GD master:**
1. Master slide chrome (header bar, footer wordmark style, page numbering, rule lines) is *re-implemented*, not *inherited* — so spacing, font weights and corner treatments are "close" but not identical.
2. We're not using GD's actual section dividers, icon set, or photographic cover treatments — those live as layouts inside `gd_master.pptx`.
3. Title slide uses a flat navy + Q-mark rather than the master's hero composition.
4. No "section header" slides between narrative beats (the master has them).
5. Charts/diagrams are drawn with `addShape` instead of using the master's chart placeholder styles.

We can close most of that gap by **building on top of the real master file** (which already exists at `src/assets/pptx/gd_master.pptx`) instead of synthesising chrome ourselves.

## The plan — three layers, biggest fidelity wins first

### Layer 1 — Adopt the real master as the deck template (biggest single win)

Switch `buildConsumerJourneyEditable` from `new PptxGenJS()` to a template-merge flow that opens `gd_master.pptx`, reads its `slideMasters` and `slideLayouts`, and emits our slides referencing those layouts. We already have a `templateMerge.ts` scaffold in `src/exporters/pptx/` — extend it.

Concretely:
- Parse `gd_master.pptx` once at build time, extract `ppt/slideMasters/*.xml` and `ppt/slideLayouts/*.xml` and the related theme + media (logos, Q-marks, colours).
- Inject those into the pptxgenjs output's `[Content_Types].xml` and `_rels`, and set each generated slide's `<p:sldLayoutId>` to point at the right master layout (Title, Section, Content, Two-Column, Quote, Closing).
- Remove our hand-drawn footer/page counter/Q-mark — they come from the master automatically and will match GD's typography exactly.

Outcome: every slide opens in PowerPoint with the real GD master attached. Edit → Slide Master shows GlobalData's master, not ours.

### Layer 2 — Map each slide to the right master layout

Once layouts are available, change the slide specs from "draw everything" to "fill placeholders + add content shapes":

| Slide | GD master layout |
|-------|------------------|
| 00 Title | "Title slide — Navy hero" |
| 01 Pressure | "Section divider" |
| 02 Monday Morning | "Content — Single panel" |
| 03 Seven Sources | "Content — Two column" |
| 04 The Cost | "Content — Two column with stat strip" |
| 05 One Lens (Ava hub) | "Content — Diagram" |
| 06 Connected Decision | "Content — 5-up cards" |
| 07 Teams Transformed | "Content — Comparison" |
| 08 Maturity Journey | "Content — Diagram (wide)" |
| 09 Proof | "Stat callout / Quote" |
| 10 Why Not DIY | "Two column comparison" |
| 11 CTA | "Closing slide — Navy" |

Each spec then reduces to ~30 lines: set the layout, fill the title/eyebrow/body placeholders, drop in the bespoke diagram. Title font/size/colour is inherited.

### Layer 3 — Replace synthesised glyphs with master assets

The master file ships with GD's icon set and photographic surfaces. Extract them from `gd_master.pptx/ppt/media/` and:
- Swap our Unicode glyphs (✉ ⚡ ▲) for the master's PNG icons in slides 1, 4, 7, 10, 11.
- Use the master's hero photography on the title and CTA slides instead of flat navy.
- Use the master's section divider artwork on slide 1.

This is the cosmetic last-mile that takes the export from "GD-coloured" to "indistinguishable from a GD-authored deck."

## Realistic fidelity ceiling

| Approach | Visual fidelity to GD master | Editability |
|----------|------------------------------|-------------|
| Current (native redraw) | ~70% | Full |
| + Layer 1 (real master attached) | ~85% | Full |
| + Layer 2 (placeholder mapping) | ~92% | Full |
| + Layer 3 (master assets) | ~97% | Full |
| Pixel-perfect (image-per-slide) | 100% | None |

Layers 1 + 2 are where the curve bends — Layer 3 is polish.

## Technical notes

- `pptxgenjs` does not natively support importing external `slideMasters`. We'll do the merge by post-processing the `.pptx` zip: pptxgenjs writes its file → we open with `JSZip`, splice in the master/layout/theme parts from `gd_master.pptx`, rewrite `[Content_Types].xml` and the slide `_rels` to reference the new layouts, then re-zip. The scaffold in `src/exporters/pptx/templateMerge.ts` already exists for this.
- We'll add a small `gdMasterLayouts.ts` enum so each spec declares `layout: "TitleHero" | "SectionDivider" | "ContentTwoCol" | …` and the merger maps that to the actual `slideLayoutN.xml` inside the master.
- `addBrandMaster` becomes a no-op for slides that inherit from the real master; kept only as a fallback if template merge fails.

## Files to change

- `src/exporters/pptx/templateMerge.ts` — implement master/layout splice (currently a stub)
- `src/exporters/pptx/buildConsumerJourneyEditable.ts` — run output through the merger; pass per-slide `layout` hint
- `src/exporters/pptx/slideSpec.ts` — add optional `layout?: GdLayoutKey`
- `src/exporters/pptx/specs/consumerJourney/00-title.ts` … `11-cta.ts` — declare layout key, drop hand-drawn chrome
- `src/lib/pptxBrand.ts` — slim down `addBrandMaster` to fallback only
- `src/assets/pptx/gd_master.pptx` — source of truth (already present, no change)

## Suggested execution order

1. **Layer 1 first** (template merge + chrome inheritance) — ship and inspect. This alone is the single biggest jump and is worth verifying in PowerPoint before going further.
2. **Layer 2** once Layer 1 is confirmed working — map slides to layouts one at a time, re-export and visually QA each.
3. **Layer 3** as a final polish pass.

Each layer is independently shippable, so we can stop at any point if the fidelity is "good enough."
