

# Pixel-Perfect Slide Export to PPTX

## The honest answer

A true "pixel-perfect" PPTX export of these React slides is **not realistic** — PPTX is a structured format (shapes, text boxes, native fonts) and cannot natively render Tailwind/Framer Motion/SVG layouts the way a browser does. Any direct React→PPTX conversion will look noticeably different.

The reliable way to get the deck **looking exactly like the browser** inside a `.pptx` file is to **render each slide as a high-resolution image and place each image full-bleed on its own PPTX slide.** The result is visually identical to the live deck, opens in PowerPoint/Keynote/Google Slides, and can be presented or re-exported to PDF cleanly.

This is the same technique design agencies use when delivering "image decks" to clients.

## Approach

Use a **server-side Puppeteer (headless Chrome) edge function** to:

1. Open the live deck at a forced **1920×1080** viewport.
2. Navigate to each of the 12 slides in turn (via a `?slide=N&capture=1` URL param the deck already understands, or by scrolling).
3. Screenshot each slide as a **PNG at 2× density (3840×2160)**.
4. Pass the 12 PNGs to **PptxGenJS** running in the same edge function.
5. For each PNG, create a 13.333"×7.5" (16:9) PPTX slide and place the image full-bleed (`x:0, y:0, w:13.333, h:7.5`).
6. Return the assembled `.pptx` as a download.

A new "Download as PPTX" button in the deck header triggers the edge function and saves the file.

## Why this works

- Headless Chrome renders the slides with the **real browser engine** — so gradients, blur, SVGs, custom fonts, and Framer Motion all look identical to what's on screen.
- Each slide becomes a 4K PNG → crisp on any display, projector, or PDF re-export.
- The PPTX file is fully portable (no fonts to install, no missing assets).

## Tradeoffs (be aware)

- Slides are **not editable** in PowerPoint — they're images. Text cannot be re-typed inside PPTX.
- File size will be ~15–25 MB (12 high-res PNGs).
- Generation takes ~20–30 seconds.

If editable native PPTX text is required instead, that would be a separate, much larger effort (rebuilding each slide's layout in PptxGenJS shapes/textboxes by hand) and would not look pixel-identical to the browser.

## Implementation

### 1. New edge function: `supabase/functions/export-pptx/index.ts`
- Use `puppeteer` (Deno-compatible build) + `pptxgenjs`.
- Accept `{ deckUrl: string, slideCount: number }` in the POST body.
- Loop slides 0..N-1: `page.goto(`${deckUrl}?slide=${i}&capture=1`)`, wait for fonts + 600ms settle, `page.screenshot({ type: 'png', omitBackground: false })`.
- Build the PPTX with `pres.layout = 'LAYOUT_WIDE'` (13.333×7.5 in) and one image per slide full-bleed.
- Return the binary file with `Content-Type: application/vnd.openxmlformats-officedocument.presentationml.presentation`.

### 2. Add a `?slide=N&capture=1` deep-link to `ConsumerJourneyDeck.tsx`
- On mount, read the URL params and scroll directly to that slide; in `capture=1` mode also hide UI chrome (reuse the existing `data-deck-ui="true"` selectors via a CSS class on `<html>`).
- This lets Puppeteer load any single slide cleanly without scrolling animations.

### 3. New header button: `DeckExportPptxButton.tsx`
- Sits next to the existing **Save as PDF** button.
- On click: stops narration, calls the edge function via `supabase.functions.invoke('export-pptx', ...)`, downloads the returned blob as `GlobalData-Connected-Intelligence.pptx`.
- Shows progress: `Rendering slide 5/12…`.

### 4. Wire it into `ConsumerJourneyDeck.tsx`
- Place the new button alongside the existing `DeckDownloadButton`.

## Files

- **New**: `supabase/functions/export-pptx/index.ts` — Puppeteer + PptxGenJS pipeline.
- **New**: `src/components/DeckExportPptxButton.tsx` — trigger + progress UI.
- **Modified**: `src/pages/ConsumerJourneyDeck.tsx` — read `?slide=&capture=` params, mount new button.

## Alternative if you want PPTX without server-side Chrome

Reuse the **already-working "Save as PDF" output** and convert it: open the saved PDF in PowerPoint (File → Open → choose the PDF) or use Acrobat's "Export → PowerPoint." Each PDF page becomes one image-based slide. No code changes needed — but the user has to do a manual two-step.

Recommend the **edge function approach** for a one-click experience.

