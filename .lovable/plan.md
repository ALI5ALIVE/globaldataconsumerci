

# Fix PDF Export — All 12 Slides, Full Layout

## Diagnosis

The PDF you exported is genuine Chrome "Save as PDF" output (good — pixel-perfect renderer is working), but only 2 pages render and content is clipped. Root causes:

1. **Outer wrapper clips everything.** `ConsumerJourneyDeck.tsx` wraps the deck in `<div className="h-screen w-screen overflow-hidden">`. The print CSS only unlocks `[data-deck-print-root]` (the inner scroll container), but its parent still forces `height: 100vh` and `overflow: hidden`, so only the first ~2 slides spill into print.
2. **Slides keep `h-screen` (100vh).** During print Chrome uses the on-screen viewport height (your 696px window), not the `@page` 1080px. Each slide section becomes 696px tall but the page is 1080px → big white gap, and when forced to 1080px the inner content (laid out for 696px) sits at the top, looking cut off.
3. **`@page size: 1920px 1080px`** is non-standard syntax; Chrome ignores the pixel values and falls back to default Letter/A4 with `landscape`. That further distorts ratio.

## Fix

### 1. `src/pages/ConsumerJourneyDeck.tsx`
Add `print:h-auto print:w-auto print:overflow-visible` to the outer `<div className="h-screen w-screen overflow-hidden …">` so the print path is no longer clipped at one viewport.

### 2. `src/index.css` — rewrite the `@media print` block
- Change `@page` to a real landscape ratio Chrome respects: `@page { size: 297mm 167mm landscape; margin: 0; }` (16:9 at A4 width). Or use `size: landscape` only and let Chrome's "Save as PDF" use Letter — but force each slide to one full page via `height: 100vh`.
- Force the deck root, its parent, and `html, body` to `height: auto !important; overflow: visible !important;`.
- Force every direct slide section to **exactly one print page**:
  ```
  [data-deck-print-root] > section {
    width: 100% !important;
    height: 100vh !important;
    min-height: 100vh !important;
    max-height: 100vh !important;
    page-break-after: always;
    break-after: page;
    page-break-inside: avoid;
    overflow: hidden !important;
  }
  ```
  Using `100vh` (not `1080px`) makes the slide match whatever the print page height actually is, so no clipping regardless of `@page` size.
- Also override the slide container's own `h-screen` and `snap-start` (scroll-snap can collapse layout in print): set `scroll-snap-type: none !important` on the print root.

### 3. `src/components/DeckDownloadButton.tsx`
Increase the pre-print settle delay from 250ms to ~600ms and additionally `await document.fonts.ready` plus one `requestAnimationFrame` so all 12 slides have laid out before the print dialog snapshots them.

### 4. Optional safety: temporarily expand the on-screen viewport before print
While `data-printing="true"` is set, apply via CSS:
```
html[data-printing="true"], html[data-printing="true"] body { width: 1920px !important; }
```
This forces the layout engine to compute slide widths at 1920px so responsive breakpoints render their "desktop" layouts in the PDF, not the user's 1139px laptop layout.

## Expected Result
- All 12 slides export as 12 individual landscape pages.
- Each slide fills the full page (no clipping, no white gap).
- Layout matches the 1920×1080 desktop view, not the user's smaller browser window.

## Files Changed
- `src/pages/ConsumerJourneyDeck.tsx` — add print-mode overrides to outer wrapper.
- `src/index.css` — rewrite `@page` + `@media print` rules per above.
- `src/components/DeckDownloadButton.tsx` — longer settle delay + font-ready await.

