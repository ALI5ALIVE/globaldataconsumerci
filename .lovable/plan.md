

# Download Slides as Pixel-Perfect PDF

## Summary

Replace the existing PPTX download with a **client-side PDF export** that captures each of the 12 live React slides exactly as they appear on screen — same visuals, same GlobalData branding, same fonts — and bundles them into a single downloadable PDF.

## How It Works

1. User clicks **"Download Deck"** in the header.
2. The app programmatically scrolls through all 12 slides one-by-one in a hidden/offscreen capture mode at a fixed 1920×1080 viewport.
3. Each slide is rasterised to a high-resolution PNG using `html2canvas` (scale 2x for crisp output, `useCORS: true`, backgroundColor preserved).
4. Each PNG is added as a full-bleed 16:9 landscape page in a `jsPDF` document.
5. The completed PDF (`GlobalData-Connected-Intelligence.pdf`) is saved via `pdf.save()` — no server round-trip, no proxy redirect.

## Technical Changes

### 1. `src/components/DeckDownloadButton.tsx` (rewritten)
- Remove the static `.pptx` fetch.
- Accept a `containerRef` prop pointing to the scroll container.
- On click: iterate slides 0–11, for each:
  - Scroll the container to `index * slideHeight` and wait ~600ms for layout/animations to settle.
  - Target the slide's DOM node (first-level child of the scroll container) and run `html2canvas(node, { scale: 2, useCORS: true, logging: false })`.
  - Add the resulting dataURL to `jsPDF` as a new landscape page sized 1920×1080.
- Show progress: `"Capturing slide 3 / 12…"` in the button label.
- Restore the original scroll position when done.
- Save as `GlobalData-Connected-Intelligence.pdf`.

### 2. `src/pages/ConsumerJourneyDeck.tsx`
- Pass `containerRef` to `<DeckDownloadButton containerRef={containerRef} />`.
- Pause narration (`narration.stop()`) before capture begins.

### Libraries
- `html2canvas` and `jspdf` are **already installed** (used by `src/components/DownloadButton.tsx`). No new dependencies.

## Notes & Tradeoffs

- **Pixel-perfect match** with the web deck — whatever renders on screen is what lands in the PDF.
- **Non-editable** — slides become images in the PDF (same tradeoff we discussed for the PPTX screenshot approach).
- **Capture time**: ~10–15 seconds for 12 slides (user sees live progress).
- **Fonts/gradients/SVGs** render natively via html2canvas — no recreation needed.
- The obsolete `.pptx` file in `public/downloads/` can be left or removed later; it's no longer referenced.

## Files Changed

- **Modified**: `src/components/DeckDownloadButton.tsx` — replace PPTX fetch with html2canvas + jsPDF capture loop.
- **Modified**: `src/pages/ConsumerJourneyDeck.tsx` — pass `containerRef` prop; stop narration before capture.

