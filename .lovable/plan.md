

# Fix PPTX Export — Render Each Slide Pixel-Perfect

## Why the current PPTX is wrong

Two distinct bugs in the current client-side `html2canvas` capture:

1. **Slides export too small / leave white space.** `html2canvas` renders the slide at the **user's actual browser viewport** (currently 1139×696), not at 1920×1080. We then place that small image into a 13.333"×7.5" PPTX slide → it shows up undersized with white margins. Forcing `width: 1920px` via CSS doesn't fix it because the browser's layout engine still uses the real window size for media queries, `vw/vh`, and `sm:/md:/lg:` Tailwind breakpoints.

2. **Circles and boxes overlay text.** `html2canvas` has known limitations with: `backdrop-blur`, `position: fixed`, CSS `transform`, SVG `<foreignObject>`, and absolutely-positioned overlays. The Slide Play Button (circular progress ring), nav dots, and motion-revealed cards are getting captured at the wrong coordinates because the layout shifted between when html2canvas walked the DOM and when it painted the canvas.

These are **fundamental** limitations of the html2canvas approach. No amount of tweaking `scale`, delays, or CSS overrides will fix them reliably.

## The fix: server-side headless Chrome

Move the PPTX export to a **Lovable Cloud edge function** that:

1. Spins up headless Chrome at a true **1920×1080** viewport (`deviceScaleFactor: 2` → 4K capture).
2. For each of the 12 slides, navigates to `https://globaldataconsumerci.lovable.app/?capture=1&slide=N`.
3. Waits for fonts + 800ms layout settle.
4. Takes a real Chromium screenshot — the **same renderer the user sees on screen**, so circles, blur, gradients, SVGs, and motion-final states all render correctly.
5. Assembles the 12 PNGs into a `LAYOUT_WIDE` (13.333×7.5") PPTX with each image full-bleed.
6. Returns the `.pptx` to the browser for download.

This is the only reliable way to get pixel-perfect output. Headless Chrome **is** a real browser — there is no rendering gap.

## Implementation

### 1. New edge function `supabase/functions/export-deck-pptx/index.ts`
- Use Deno-compatible Puppeteer (`puppeteer-core` + `@sparticuz/chromium` style, or `astral` Deno-native browser library).
- Accept `{ deckUrl: string, slideCount: number }`.
- Open one page, set viewport `{ width: 1920, height: 1080, deviceScaleFactor: 2 }`.
- Loop `slide=0..N-1`, screenshot as PNG buffer.
- Use `pptxgenjs` (Deno ESM import) to build the deck; `pres.layout = 'LAYOUT_WIDE'`; one image per slide at `x:0, y:0, w:13.333, h:7.5`.
- Return `application/vnd.openxmlformats-officedocument.presentationml.presentation` with `Content-Disposition: attachment`.
- `verify_jwt = false` in `supabase/config.toml` so the button works without auth.

### 2. Add `?capture=1&slide=N` deep-link to `ConsumerJourneyDeck.tsx`
- On mount, read URL params. If `capture=1`:
  - Add `data-pptx-capture="true"` to `<html>` (reuses existing CSS that hides UI chrome and sets 1920px layout).
  - Stop narration + auto-advance.
  - Scroll directly to slide N with `behavior: 'auto'`, no animation.
  - Force any Framer Motion reveals into final state (set a flag the slide components can read, OR rely on existing `data-printing` overrides in `index.css`).

### 3. Replace `DeckExportPptxButton.tsx` logic
- Remove `html2canvas` capture loop.
- Call edge function via `supabase.functions.invoke('export-deck-pptx', { body: { deckUrl: window.location.origin, slideCount: 12 } })`.
- Stream the response blob, trigger download as `GlobalData-Connected-Intelligence.pptx`.
- Show progress: "Rendering slides… (this takes ~25s)".

### 4. Cleanup
- Drop the `html2canvas` dependency from `package.json` (no longer used after this swap; the PDF flow uses native print, not html2canvas).
- Keep `pptxgenjs` only in the edge function, remove from client bundle.

## Tradeoffs

- **Editability**: slides are images inside the PPTX, not editable text. Same as before — this is the only way to keep visual fidelity. If editable text is later required, we'd rebuild each slide manually in PptxGenJS shapes (large separate effort, would not look identical).
- **Time**: ~25–30 seconds for 12 slides (user sees progress).
- **File size**: ~15–20 MB.
- **Public URL required**: the edge function fetches `globaldataconsumerci.lovable.app`, which is already published.

## Files

- **New**: `supabase/functions/export-deck-pptx/index.ts` — Puppeteer + PptxGenJS pipeline.
- **Modified**: `supabase/config.toml` — register the function with `verify_jwt = false`.
- **Modified**: `src/pages/ConsumerJourneyDeck.tsx` — handle `?capture=1&slide=N` deep-link.
- **Modified**: `src/components/DeckExportPptxButton.tsx` — invoke edge function instead of client-side capture.
- **Modified**: `package.json` — remove `html2canvas` and `pptxgenjs` from client deps.

## Expected result

Clicking **Save as PPTX** produces a 12-slide deck where each slide is a crisp 3840×2160 image of the actual rendered slide — circles in the right place, no overlapping boxes, no undersized layout, no white margins.

