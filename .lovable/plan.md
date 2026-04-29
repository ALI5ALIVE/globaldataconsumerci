# Fix PPTX export — same-origin iframe + reliable capture

## Root cause

Console: `Iframe document unavailable`. The button creates a hidden iframe pointed at `https://globaldataconsumerci.lovable.app` (the published deck), but the user is on the **preview** origin `id-preview--…lovable.app`. Browsers block cross-origin `iframe.contentDocument` access, so `html2canvas` can't read the iframe at all → every slide fails.

Forcing a 1920×1080 layout in a hidden iframe was the right idea; pointing it at a different origin was the bug.

## The fix

### 1. Use a same-origin iframe

In `DeckExportPptxButton.tsx`, default `deckUrl` to `window.location.origin` instead of the hard-coded published URL. That makes `iframe.contentDocument` accessible everywhere the button is used (preview, published, custom domain).

Also: append a cache-busting param so each iframe load is fresh, and explicitly set `iframe.sandbox`-free (default) so scripts run.

### 2. Make the capture deep-link more robust

`ConsumerJourneyDeck.tsx` currently jumps with `requestAnimationFrame` once. In a freshly mounted iframe the slide container's `clientHeight` may still be 0 on the first frame, so the scroll lands on slide 0 every time. Fix:

- After detecting `?capture=1`, poll for `containerRef.current.clientHeight > 0` (max ~1s), then scroll.
- Stop narration + auto-advance entirely while in capture mode.
- Add a `data-pptx-ready="true"` attribute on `<html>` once the target slide is in place and fonts are loaded — the export button waits for this attribute instead of a blind 1500 ms timeout, so capture starts only when the slide is actually painted.

### 3. Replace html2canvas with a more reliable renderer

`html2canvas` is what caused the original overlapping circles / boxes. Swap it for **`modern-screenshot`** (`npm i modern-screenshot`) — a maintained fork of `html-to-image` that handles `backdrop-blur`, CSS `transform`, SVG `<foreignObject>`, and absolutely-positioned overlays correctly. API is similar:

```ts
import { domToPng } from "modern-screenshot";
const dataUrl = await domToPng(iframe.contentDocument.documentElement, {
  width: 1920, height: 1080, scale: 2, backgroundColor: "#ffffff",
});
```

If `modern-screenshot` still misrenders any specific slide, fall back to `html2canvas` for that slide only.

### 4. Better progress + error reporting

- Show "Slide N/12 — waiting for layout…" vs "…capturing…" so a stuck step is obvious.
- On error, log which slide failed and surface the message in the toast.

## Files to change

- `src/components/DeckExportPptxButton.tsx` — same-origin URL, wait-for-ready handshake, swap to `modern-screenshot`, better progress/error.
- `src/pages/ConsumerJourneyDeck.tsx` — poll for non-zero container height before scrolling; set `data-pptx-ready="true"` after fonts ready + 600 ms settle; ensure narration is fully stopped in capture mode.
- `package.json` — add `modern-screenshot`; keep `html2canvas` only as a fallback (or remove if unused after testing).

## Verification

After implementing, I'll open the preview, click **Save as PPTX**, watch the network/console for errors, and confirm a 12-slide `.pptx` downloads with each slide showing the correct full-bleed 1920×1080 layout (no overlapping circles, no white margins). If any slide still looks wrong, I'll iterate on the renderer config for that slide before declaring done.

## Tradeoffs

- Slides remain images in the PPTX (not editable text). Same as before — required for visual fidelity.
- Export time ~20-30 s for 12 slides.
- The button must be used on a route where the deck itself is mounted (it is — same origin, same app).
