

# Revised Plan: PowerPoint Slide Images with Voiceover

## Approach

Instead of recreating slides as HTML components, copy the 24 full-page screenshots from the parsed PPTX into the project and display them as images in a scrollable container with the existing ElevenLabs narration system.

## Changes

### 1. Copy 24 slide images into the project
Copy `parsed-documents://...page_1.jpg` through `page_24.jpg` into `public/slides/sp-slide-1.jpg` through `sp-slide-24.jpg`.

### 2. Replace `SalesPitchDeck.tsx`
Strip out all 24 custom slide component imports. Replace with a simple loop that renders each slide as an `<img>` inside a full-viewport snap container. Keep the existing scroll navigation, progress bar, nav dots, keyboard controls, and narration hook (`useSalesPitchNarration`) — just render images instead of components.

```text
┌─────────────────────────────────┐
│  Progress bar                   │
│  ┌───────────────────────────┐  │
│  │                           │  │  ← snap-start section
│  │   <img src="slide-1.jpg"> │  │  ← actual PPTX slide image
│  │                           │  │
│  │  [▶ Play]                 │  │  ← SlidePlayButton overlay
│  └───────────────────────────┘  │
│  Nav dots (right)  Arrows (BR)  │
└─────────────────────────────────┘
```

### 3. Keep existing narration system
`salesPitchNarration.ts` and `useSalesPitchNarration.ts` remain unchanged — they already work and contain all 24 scripts.

### 4. Delete unused slide components
Remove all files in `src/components/salespitch-slides/` (SPSlide01Title, SPSlide02Hook, SPIntelligenceSlide, SPValueChainStage, SPMaturityStage, etc.) since they are no longer needed. Keep `SPSlideContainer.tsx` only if needed, but likely can also be removed.

## File Summary

| File | Action |
|------|--------|
| `public/slides/sp-slide-{1-24}.jpg` | Create (copy from parsed PPTX) |
| `src/pages/SalesPitchDeck.tsx` | Rewrite — image-based slides with overlay play button |
| `src/components/salespitch-slides/*.tsx` | Delete all ~14 files |

## Key Details

- Each slide section is `h-screen w-full snap-start` with `object-contain` image centered on a dark background
- `SlidePlayButton` is overlaid at bottom-left of each slide (same positioning as current)
- The narration props wiring stays identical — just attached to the image section instead of a component
- Navigation (dots, arrows, keyboard, progress bar) stays identical

