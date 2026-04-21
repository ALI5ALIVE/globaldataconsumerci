
# Replace Broken PDF Capture with Native Browser “Save as PDF”

## Goal

Stop using `html2canvas`/`jsPDF` to recreate the slides, because that is producing inconsistent, non-pixel-perfect output.

Instead, export the **actual deck DOM that the browser renders** using the browser’s own print-to-PDF engine. This is the closest way to get the slides exactly as shown, because it uses Chrome/Safari/Edge’s real rendering pipeline rather than a canvas approximation.

## Key Change

The **Download Deck** button will become a **Save as PDF** flow:

1. User clicks **Save as PDF**.
2. The app switches into a clean print/export mode.
3. Header, slide dots, arrows, play buttons, and narration controls are hidden.
4. Every deck slide is printed as one full-bleed landscape page.
5. The browser opens the native print dialog.
6. User chooses **Save as PDF**.

This will not silently auto-download the file, but it will produce a much more faithful PDF because the browser is printing the real slides.

## Why this is better

The current export is failing because it tries to screenshot React slides with `html2canvas`, which does not perfectly support all browser CSS, responsive layouts, gradients, blur effects, SVGs, transforms, and animation states.

Native print/PDF uses the browser’s actual renderer, so:

- Text stays sharper.
- SVGs and gradients render more accurately.
- Layout matches the real deck more closely.
- Slides are not re-rendered into a separate hidden 1920×1080 environment.
- The PDF comes from the same slide DOM the user sees.

## Implementation Plan

### 1. Replace `DeckDownloadButton.tsx`

Remove the current off-screen `createRoot`, `html2canvas`, and `jsPDF` logic.

Replace it with a print/export button that:

- Stops narration before export.
- Adds a temporary `data-printing="true"` attribute to the document.
- Waits for fonts to finish loading.
- Calls `window.print()`.
- Removes the print flag after the print dialog closes.

The button label changes from **Download Deck** to **Save as PDF**.

### 2. Add print/export CSS in `src/index.css`

Add a dedicated `@media print` section that:

- Hides all UI chrome:
  - progress bar
  - header
  - navigation dots
  - up/down arrows
  - narration/play controls
- Forces backgrounds and colours to print:
  - `print-color-adjust: exact`
  - `-webkit-print-color-adjust: exact`
- Makes the scroll container printable:
  - removes scroll snapping
  - removes viewport overflow clipping
  - allows every slide to appear in sequence
- Forces each direct slide section to become one PDF page:
  - full-page landscape
  - no margins
  - page break after each slide
  - no extra blank pages

### 3. Add print-safe classes/attributes to deck UI

Update `ConsumerJourneyDeck.tsx` so non-slide controls have clear export-hide markers, for example:

- `data-deck-ui="true"` on the progress bar/header/nav/arrows
- `data-deck-print-root="true"` on the slide container

This makes the print CSS reliable and avoids accidentally hiding slide content.

### 4. Hide narration controls inside slides

Update `SlidePlayButton.tsx` so its wrapper has a print-hide marker, for example:

```tsx
data-deck-ui="true"
```

That prevents the “Listen” buttons from appearing on every PDF page.

### 5. Make animation states print-ready

Because some slides use Framer Motion, add print/export CSS to neutralise animation artefacts:

```css
[data-printing="true"] * {
  animation: none !important;
  transition: none !important;
}

@media print {
  [data-deck-print-root] * {
    animation: none !important;
    transition: none !important;
    transform: none !important;
  }
}
```

Where needed, force motion elements into their visible/final state during print so no slide exports half-hidden.

### 6. Remove the broken export path

The current forced 1920×1080 off-screen export should be removed entirely from the active download flow.

This avoids having two competing PDF export methods and prevents users from downloading the bad version again.

## Files to Change

- `src/components/DeckDownloadButton.tsx`
  - Replace `html2canvas`/`jsPDF` export with native print flow.

- `src/pages/ConsumerJourneyDeck.tsx`
  - Add print/export markers to deck UI and slide container.
  - Keep narration stop logic before export.

- `src/components/SlidePlayButton.tsx`
  - Add a print-hide marker to the narration control wrapper.

- `src/index.css`
  - Add print-specific layout and page-break rules.
  - Hide UI chrome.
  - Force exact colour printing.
  - Neutralise animations during PDF export.

## Expected Result

Clicking **Save as PDF** will open the browser’s print dialog with all 12 slides laid out as full-page landscape PDF pages, using the actual rendered deck rather than a canvas screenshot approximation.

This should be significantly closer to “what is shown in the deck” than the current generated PDF approach.
