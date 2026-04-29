## Goal

Make the "Save as PPTX" button produce a deck that:

1. **Looks exactly like the live preview** — every slide is captured pixel-perfect from the rendered React UI (charts, SVG hubs, persona dashboards, illustrations — all included, nothing redrawn or simplified).
2. **Sits inside your official GlobalData PPTX template** — the brand cover, footer, slide-number style, fonts, master/theme metadata, and the closing "Thank You" slide all come from the uploaded `GD_MASTER_-_Final_1-2.potx` so the file feels native to GlobalData when opened in PowerPoint.

This abandons the "rebuild every slide as native shapes" approach (text was right but visuals were wrong / generic) in favour of **template + high-fidelity images**, which is the only reliable way to get pixel-perfect output for SVG-heavy slides like the One-Lens hub, persona panorama, maturity curve, and illustrations.

## What you'll see when you click Save as PPTX

A `.pptx` opens in PowerPoint with:

- **Slide 1**: Branded GlobalData title slide (from your template's cover layout) — title, subtitle, presenter line, date, GlobalData logo, all editable.
- **Slides 2–13**: The 12 Consumer Journey slides, each one a high-resolution image of the live preview, sized exactly to 16:9 with no cropping, on a clean GlobalData-branded master (logo top-right, slide number bottom-right, footer line bottom-left — all from the template, not redrawn).
- **Slide 14**: The template's "Thank You" closing slide.
- File metadata (theme name, master slide, fonts) inherited from your `.potx` so it shows up as a GlobalData-themed deck in PowerPoint's Design tab.

## How it works (technical)

### 1. Ship the template as a project asset

- Copy the uploaded `GD_MASTER_-_Final_1-2.potx` to `src/assets/pptx/gd_master.potx` (~34 MB, loaded lazily only when the export runs, so it doesn't affect normal page weight).
- Convert once to `.pptx` form for easier embedding (template files and presentation files share the same OOXML structure; we just rename + tweak `[Content_Types].xml`).
- Vite's `?url` import will give us a URL we can `fetch()` at click-time.

### 2. Capture every slide at full fidelity

Replace the current "native shapes for slides 0/1/2/3/4/7/9/10/11 + html2canvas for 5/6/8" hybrid with **html-to-image (`htmlToPng`) for ALL 12 slides**, captured at **2× device pixel ratio** (≈2667×1500 px) so they remain crisp when projected.

Capture pipeline:
- Use the existing `id="cj-slide-N"` elements on the page.
- For each slide: scroll into view → wait for fonts + framer-motion animations to settle (`document.fonts.ready` + a 400 ms idle) → snapshot.
- Switch from `html2canvas` (which mis-renders some Tailwind gradients and SVG `<foreignObject>`) to **`html-to-image`** which handles SVG + CSS gradients faithfully. We already have it as a transitive dep through other tooling; if not, add it via `bun add html-to-image`.
- Embed each PNG as a base64 image filling the entire 13.333"×7.5" slide area.

### 3. Compose the final .pptx by *merging* template + captures

Rather than authoring from scratch with PptxGenJS, we'll use **JSZip** to:

1. `fetch` the template `.pptx`/`.potx` bytes and open as a zip in-memory.
2. Keep the template's title slide (slide 1) and "Thank You" slide (last slide) — strip the other 59 example slides from `[Content_Types].xml`, `presentation.xml`, and `_rels` so they don't bloat the file.
3. For each captured image (12 of them):
   - Add the PNG to `ppt/media/`.
   - Add a new `ppt/slides/slideN.xml` that references the GlobalData "blank with logo" slide layout from the template and contains a single full-bleed `<p:pic>` element (the captured image).
   - Wire up `_rels` and `[Content_Types].xml`.
4. Inject the deck title ("Connected Consumer Intelligence — A New Way of Working") into the template's title-slide text frame.
5. Save the zip → blob → trigger download.

This is the same approach the `skill/pptx` template_editing_guide describes (unpack → inject → repack). It preserves theme, masters, fonts, footer logos, and metadata exactly.

### 4. Progress UX

The existing button already shows `Building 3/12 · Slide name`. We'll keep that and extend the labels to: `Capturing slide N/12 → Composing PPTX → Done`.

### 5. Files changed

- **New**: `src/assets/pptx/gd_master.pptx` (the uploaded template, renamed)
- **New**: `src/exporters/pptx/templateMerge.ts` — JSZip-based merger
- **New**: `src/exporters/pptx/captureSlide.ts` — html-to-image capture w/ font + animation settle
- **Rewritten**: `src/exporters/pptx/buildConsumerJourneyDeck.ts` — orchestrates capture loop + merge (drops the per-slide native builders entirely; keeps the same `BuildOpts` signature so the button doesn't change)
- **Deleted**: `src/exporters/pptx/renderToImage.ts` (superseded), `src/lib/pptxBrand.ts` (no longer needed — template owns branding)
- **Tweaked**: `src/components/DeckPPTXExportButton.tsx` — updated progress labels
- **Dependency change**: add `jszip` and `html-to-image`; remove `pptxgenjs` and `html2canvas`.

## Trade-offs you should know

- **Editability**: Slides are images, so text inside them is not editable in PowerPoint (you'd re-export from the app to make edits). The title slide and Thank You slide remain editable since they come straight from the template. This is the standard trade-off for "pixel-perfect" — you can't have both pixel parity *and* native editability for SVG-rich slides.
- **File size**: ~3–6 MB (12 high-res PNGs + template chrome). Fine for email, slack, sharepoint.
- **Speed**: ~8–12 s end-to-end (12 captures × ~600 ms each + merge). The progress toast keeps the user informed.

## QA before declaring done

After implementing, I'll:
1. Click the button in preview, save the file to `/mnt/documents/`.
2. Convert it to PDF via LibreOffice and inspect every page image — check that all 14 slides render, captured slides are sharp (no fuzzy text, no missing SVG elements like the hub spokes or maturity curve), template title and Thank You slides retain their branding, and aspect ratio is clean 16:9 with no cropping or letterboxing.
3. Open in markitdown to confirm the title slide text is correct and editable.
4. Iterate on any slide that looks off (most common issues: framer-motion mid-animation capture → bump the settle delay; font swap → preload Inter/Calibri before capture).

A preview of the template you uploaded is saved at `/mnt/documents/gd_template_overview.jpg` for reference.

<lov-artifact path="gd_template_overview.jpg" mime_type="image/jpeg"></lov-artifact>
