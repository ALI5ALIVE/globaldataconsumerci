# Fix: PDF Download Not Working

## Problem
The current "Save as PDF" button (`src/components/DeckDownloadButton.tsx`) relies on `window.print()` plus a large block of `@media print` CSS that forces the body to `1920px` and remaps each slide to one print page. In practice this is unreliable on the Consumer Journey deck because:

- Slides use `h-screen` (100vh) and heavy SVG/framer-motion content. Chrome's print engine frequently produces blank pages, clipped layouts, or simply hangs the print preview.
- The route does not expose the requested slides (some are progressively rendered / animated), and toggling `data-printing` does not always force them into a printable state in time before `window.print()` fires.
- There is no fallback or progress indicator, so a stalled print dialog looks like a totally broken button.

We already have a proven, pixel-perfect capture pipeline used by the PPTX exporter (`captureSlide.ts` using `html-to-image` at 2× DPR, with deck UI filtered out). We will reuse it for PDF.

## Solution
Rewrite `DeckDownloadButton` to build the PDF in-app using the same image-capture approach as the PPTX export, then assemble a 16:9 landscape PDF with `jspdf` (already installed). This removes all dependence on the browser print dialog and the print CSS, and guarantees the PDF matches what the user sees on screen.

### What changes

1. **`src/components/DeckDownloadButton.tsx` — rewrite**
   - Accept a `slideIds: string[]` prop (the same DOM ids the PPTX builder uses).
   - On click:
     1. Call `onBeforeCapture?.()` (stop narration, etc.).
     2. Set `document.documentElement.dataset.capturing = "true"` (existing CSS already disables animations under this attribute).
     3. For each id, scroll the slide into view, await fonts + a short settle delay, call `captureSlide(id)` (reuse the existing helper) to get a high-res PNG data URL, and update a progress toast.
     4. Create a landscape `jsPDF` at 1920×1080 px (16:9), and `addImage` each PNG full-bleed, calling `addPage()` between slides.
     5. `pdf.save("Connected-Consumer-Intelligence.pdf")`.
     6. Cleanup: clear `data-capturing`, dismiss progress toast, show success/error toast (`sonner`).
   - Show a spinner + "Capturing slide X / N" label on the button while running (mirrors `DeckPPTXExportButton`).

2. **`src/pages/ConsumerJourneyDeck.tsx` — pass slide ids**
   - Pass the same 12-slide id list already declared in `src/exporters/pptx/buildConsumerJourneyDeck.ts` to `<DeckDownloadButton slideIds={...} />`.
   - To avoid duplicating the list, export `CONSUMER_JOURNEY_SLIDE_IDS` from `buildConsumerJourneyDeck.ts` and import it in both places.

3. **`src/index.css` — trim dead print CSS (optional cleanup)**
   - The `@media print` and `[data-printing="true"]` blocks are no longer needed. Leave them in place for now (harmless) to keep the diff small; only remove if they cause layout issues during normal use.

### Technical details

- `captureSlide(id)` already:
  - Filters out elements with `data-deck-ui="true"` (export buttons, nav arrows, dots).
  - Renders at `pixelRatio: 2` on the `#0F1320` brand background.
  - Awaits `document.fonts.ready` and a 600 ms settle.
- `jspdf` config:
  ```ts
  const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [1920, 1080] });
  pdf.addImage(dataUrl, "PNG", 0, 0, 1920, 1080, undefined, "FAST");
  ```
- Each capture is sequential (matches PPTX builder) so the user sees deterministic progress and we do not hammer the main thread.
- Memory: 12 slides × ~3840×2160 PNG ≈ a few MB each, comfortably under jsPDF limits. We will release intermediate data URLs (`pngs.length = 0` at end) so GC can reclaim.

### Acceptance criteria
- Clicking "Save as PDF" downloads `Connected-Consumer-Intelligence.pdf` containing 12 landscape pages, one per slide, in the correct order.
- Each page visually matches the on-screen slide (same as the PPTX export).
- Deck UI chrome (export buttons, nav dots, arrows, progress bar) does not appear in the PDF.
- Button shows progress (`Capturing 5 / 12`) and a success toast on completion; error toast on failure.
- No reliance on `window.print()` or the browser print dialog.

## Files touched
- `src/components/DeckDownloadButton.tsx` — full rewrite (image-capture + jsPDF).
- `src/exporters/pptx/buildConsumerJourneyDeck.ts` — export the slide-id list.
- `src/pages/ConsumerJourneyDeck.tsx` — import the shared id list and pass to `DeckDownloadButton`.

No new dependencies (jspdf, html-to-image already installed).
