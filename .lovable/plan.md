

# Pixel-Perfect PDF Export — Force 1920×1080 Capture

## Why the current PDF is wrong

- Pages target 1920×1080 in `jsPDF`, but the captured **images** are 1440×810 (or whatever the user's browser viewport is — yours is currently 1139×696). They get upscaled inside the PDF, so the result looks soft and slides designed for 1920×1080 layouts get squished/clipped.
- All 12 slides ARE in the PDF (I verified the embedded image objects), so the "missing slides" perception is actually content that's been clipped out by the small viewport rather than absent slides.

## Fix: render slides off-screen at a forced 1920×1080 frame

Instead of capturing the live, on-screen scroll container at the user's browser size, mount each slide one-by-one into a hidden 1920×1080 wrapper that exists outside the visible viewport. html2canvas then captures true 1920×1080 pixels, regardless of the user's screen.

### Implementation

**1. Refactor `src/pages/ConsumerJourneyDeck.tsx`**
- Extract the ordered list of `<Slide />` JSX elements into a single `slidesArray` constant (one entry per slide, in order). The current inline JSX block becomes `slidesArray.map(...)`.
- Pass `slidesArray` (the React nodes, with narration props stripped) down to `DeckDownloadButton` as a new `slides` prop.

**2. Rewrite `src/components/DeckDownloadButton.tsx`**
- Replace the scroll-and-capture loop with an off-screen render approach:
  1. Create a hidden host `<div>` and append it to `document.body`:
     ```
     position: fixed; left: -100000px; top: 0;
     width: 1920px; height: 1080px;
     overflow: hidden; pointer-events: none;
     ```
  2. Use `ReactDOM.createRoot(host)` to render each slide one at a time inside this fixed-size container.
  3. After each render, wait ~600ms for fonts/layout/SVGs (use `document.fonts.ready` + a frame tick), then `html2canvas(host, { scale: 2, width: 1920, height: 1080, windowWidth: 1920, windowHeight: 1080, useCORS: true, backgroundColor: null })`.
  4. Add the resulting 3840×2160 PNG into `jsPDF` (page format 1920×1080 landscape).
  5. After all slides, unmount the root and remove the host node.
- Keep the same progress UI (`Capturing 3 / 12…`) and the `onBeforeCapture` hook (still pause narration first).

**3. Disable animations during capture**
- Add a `data-capturing="true"` attribute on `<html>` while capture runs; in `src/index.css` add a small rule that forces `animation: none !important; transition: none !important; transform: none !important;` for elements with framer-motion `animate`/`initial` styles, scoped to `[data-capturing="true"] *`. This makes sure entrance animations don't cause half-rendered frames.

**4. Wait for fonts before first capture**
- Call `await document.fonts.ready` once before the loop so Poppins is fully loaded.

### Result

- Every page is a true **3840×2160 PNG** (2× scale of 1920×1080) embedded into a 1920×1080 PDF page → pixel-perfect crisp output.
- Layout is identical to what the slide looks like at 1920×1080, regardless of the user's browser size.
- All 12 slides render fully (no clipping caused by the user's small viewport).

## Files Changed

- **Modified**: `src/components/DeckDownloadButton.tsx` — new off-screen render + capture loop using `react-dom/client`.
- **Modified**: `src/pages/ConsumerJourneyDeck.tsx` — extract slides into an array; pass to download button.
- **Modified**: `src/index.css` — add `[data-capturing="true"]` rule to neutralise animations during capture.

## Tradeoffs / Notes

- Capture time stays around 12–18 seconds for 12 slides.
- Slides that depend on `IntersectionObserver` or scroll-driven effects (none currently used in the Consumer Journey deck) would need a hint to render in their "final" state — not an issue here.
- If a slide later uses lazy-loaded media, we'd add an explicit `await` for `<img>` decode before capture. Not needed for the current deck.
- If after this fix any individual slide STILL looks off, the fix moves into that specific slide's CSS (e.g., a hardcoded `min-h-[1100px]`), not the export pipeline.

## Fallback if results still aren't acceptable

If client-side rendering still produces artifacts (e.g., complex SVG filters or `backdrop-blur` not rendering perfectly in html2canvas), the next step is a **server-side Puppeteer edge function**: headless Chrome navigates to `/?capture=1&slide=N` for each slide at 1920×1080, screenshots, then assembles the PDF. This produces true browser-rendered output but requires a Lovable Cloud edge function with the `puppeteer` runtime.

