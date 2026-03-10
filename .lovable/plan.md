

# Plan: Replace Custom Slides with Actual PowerPoint Images + Voiceover

## What Changes

Replace the 14 custom HTML slide components with the 24 actual PowerPoint slide images from the uploaded PPTX, displayed full-screen in a scrollable container with the existing ElevenLabs narration overlay.

## Steps

### 1. Copy 24 slide images to `public/slides/`
Copy the extracted page screenshots from the parsed PPTX into the project:
- `parsed-documents://...page_1.jpg` → `public/slides/sp-slide-1.jpg`
- `parsed-documents://...page_2.jpg` → `public/slides/sp-slide-2.jpg`
- ... through `page_24.jpg`

### 2. Rewrite `src/pages/SalesPitchDeck.tsx`
Remove all 14 custom component imports. Replace the slides section with a simple loop:

```tsx
{slides.map((slide, index) => {
  const props = getNarrationProps(index);
  return (
    <section key={slide.id} className="h-screen w-full snap-start relative flex items-center justify-center bg-black">
      <img
        src={`/slides/sp-slide-${index + 1}.jpg`}
        alt={slide.label}
        className="max-h-full max-w-full object-contain"
      />
      <SlidePlayButton {...props} />
    </section>
  );
})}
```

Keep all existing navigation (dots, arrows, keyboard, progress bar) and narration hook unchanged.

### 3. Delete unused slide components
Remove all files in `src/components/salespitch-slides/`:
- `SPSlide01Title.tsx` through `SPSlide24CTA.tsx`
- `SPSlideContainer.tsx`
- `SPIntelligenceSlide.tsx`
- `SPValueChainStage.tsx`
- `SPMaturityStage.tsx`

(14 files total)

### 4. Keep narration system as-is
`src/data/salesPitchNarration.ts` and `src/hooks/useSalesPitchNarration.ts` remain unchanged — the 24 scripts and audio playback work independently of the slide rendering.

## File Summary

| File | Action |
|------|--------|
| `public/slides/sp-slide-{1-24}.jpg` | Create (24 images) |
| `src/pages/SalesPitchDeck.tsx` | Rewrite (image loop + play button overlay) |
| `src/components/salespitch-slides/*.tsx` | Delete (14 files) |

