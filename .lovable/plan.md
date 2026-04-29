# Implement native PptxGenJS builders for slides 0–4, 7, 9–11

## Goal

Replace the iframe-screenshot PPTX export with **native PptxGenJS authoring** for 9 of the 12 Consumer Journey slides. Output is a real `.pptx` with editable text, native shapes, native tables, and a real chart — opens cleanly in PowerPoint, Keynote, and Google Slides.

Slides 5 (One Lens Hub), 6 (Connected Decision), and 8 (Maturity Curve) are too SVG/connector-heavy to faithfully rebuild as shapes; they fall back to `html2canvas` rasterisation of the live React DOM (no iframe, no cross-origin — captures the slide that is already laid out on the page).

## Slide-by-slide build map

| # | Slide | Source | Strategy |
|---|---|---|---|
| 0 | Title — Connected Intelligence + 3 stats + quote | CJSlide0Title | **Native** — text frames + accent rectangle |
| 1 | The Pressure — 4 pressure cards + bridge line | CJSlide1Pressure | **Native** — 2×2 grid of rounded shapes + text |
| 2 | Your Monday Morning — inbox of 7 emails | CPSlide1MondayMorning | **Native** — `addTable` of 7 rows |
| 3 | Seven Sources — 7 vendors + 60/10/12wk stat strip | CPSlide2SevenSources | **Native** — 7-col grid + 3 stat callouts |
| 4 | The Cost — Business vs You split + £63M accumulator | CPSlide3TheCost | **Native** — 2-column card grid + bottom strip |
| 5 | One Lens Hub | CJOneLensHub | **Image fallback** — `renderToImage("cj-slide-5")` |
| 6 | Connected Decision Meeting | CJSlideConnectedDecision | **Image fallback** — `renderToImage("cj-slide-6")` |
| 7 | Teams Transformed — before/after % bars + 3 KPI cards | CPSlide7TeamsTransformed | **Native** — 8 horizontal bar shapes + 3 cards |
| 8 | Maturity Journey | CJSlideMaturityJourney | **Image fallback** — `renderToImage("cj-slide-8")` |
| 9 | Proof — 3 pillars + 8 logos + testimonial | CJSlideProof | **Native** — 3 stat cards + 4×2 logo grid + quote box |
| 10 | Why Not DIY — DIY vs Connected 4-row comparison | CJSlideWhyNotDIY | **Native** — 2-column card with 4 rows each + footer |
| 11 | CTA — closing headline + 3 action cards + risk reversal | CJSlide12CTA | **Native** — headline + 3 card grid |

All exact copy taken verbatim from the React components I just inspected (e.g. the 7 inbox subjects, the £40M / 12wk / £15M Cost stats, the 8 trusted brand names, etc.).

## Files to create

- `src/lib/pptxBrand.ts` — hex tokens (`primary 0066FF`, `bgNavy 23293D`, etc.), Calibri font fallback (Poppins fallback), `SLIDE_W/H = 13.333/7.5`, helpers `addBackground`, `addAccentBar`, `addTitle`, `addEyebrow`, `addFooter`.
- `src/exporters/pptx/types.ts` — `BuildOpts` interface (`onProgress?: (i, total, label) => void`), `DeckId = "consumer-journey"`.
- `src/exporters/pptx/renderToImage.ts` — `html2canvas` wrapper that captures a slide DOM node by id at `scale: 2`, returns `data:image/png;base64,…`.
- `src/exporters/pptx/index.ts` — `DECK_BUILDERS` map with lazy `import()` so PptxGenJS only loads on click.
- `src/exporters/pptx/buildConsumerJourneyDeck.ts` — orchestrates 12 slide builders, calls `onProgress` between each, returns `Blob`.
- `src/components/DeckPPTXExportButton.tsx` — `<DeckPPTXExportButton deckId="consumer-journey" />`. Lazy-loads builder, shows progress in the button label, downloads via `URL.createObjectURL` + `<a>`.

## Files to modify

- `src/pages/ConsumerJourneyDeck.tsx` — replace `<DeckExportPptxButton …/>` with `<DeckPPTXExportButton deckId="consumer-journey" onBeforeBuild={…} />`. Remove the `?capture=1&slide=N` `useEffect` (no longer needed).
- `src/index.css` — drop the `data-pptx-capture` and `data-pptx-ready` blocks (still keep `data-printing` blocks — used by PDF flow).
- `src/components/DeckExportPptxButton.tsx` — delete.
- `package.json` — remove `modern-screenshot`. Keep `pptxgenjs` and `html2canvas`.

## Native-builder implementation notes

- Use `pptx.layout = "LAYOUT_WIDE"` (13.333" × 7.5", 16:9).
- Every slide gets `addBackground()` (navy) + `addAccentBar()` (1pt primary line at top) + `addFooter(n, 12)`. Title slide skips the accent bar and footer.
- Cards: `slide.addShape("roundRect", { fill: {color, transparency: 80}, line: {color, width: 1}, rectRadius: 0.12 })` then text on top.
- Inbox (slide 2): `slide.addTable(rows, { colW: [...], rowH: 0.42, fontFace, fontSize: 12 })` — first row toolbar header, 7 data rows. Each row = `[unread-dot cell, sender, subject, time]`.
- Bars (slide 7): one rounded background rect per row + a coloured fill rect whose width = `pct × maxBarWidth`. Text label inside.
- ROI / proof slide (9): logos rendered as rounded rectangles with the brand name as text inside (no real logo PNGs needed — keeps file size tiny and copyright-clean).

## Verification (after implementation)

1. Click button in preview, confirm `.pptx` downloads in ~1 s with progress text in the button.
2. `python -m markitdown /mnt/documents/<file>.pptx` — verify all 7 inbox subjects, 4 pressure cards, 8 brand names, etc., come through as **selectable text**.
3. Convert to PDF via LibreOffice and inspect each page image for layout overflow, overlap, off-brand colour.
4. Iterate on any slide that looks broken before declaring done.

## Tradeoffs

- Visual styling is on-brand but **not pixel-identical** to the live React slides. Anyone needing the exact preview look should use **Save as PDF**.
- Slides 5, 6, 8 remain non-editable images (rasterised). They will render correctly because `html2canvas` runs against the live, already-painted DOM (no cross-origin iframe).
- Fonts: using Calibri so PowerPoint Windows / Mac both have it natively. Brand uses Poppins on screen; close enough for an exported deck.
