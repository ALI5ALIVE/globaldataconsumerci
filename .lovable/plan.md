

# Plan: Replace Deck with New 19-Slide PPTX + 6-Minute Narration + Auto-Advance

## What Changes

The new PPTX has **19 slides** (down from 24). The value chain stages (old slides 12-16) are removed. Narration scripts will be rewritten to fit a **6-minute total** (~840 words at 140 wpm, ~44 words per slide average). Slides will auto-advance when narration completes.

## New Slide Map

| # | Label | Content |
|---|-------|---------|
| 1 | Title | GlobalData Connected Intelligence |
| 2 | Hook | How leading brands turn change into growth |
| 3 | Journey | 9-stop agenda roadmap |
| 4 | Market Speed | 3x faster shifts, protein snacking case |
| 5 | Intelligence Gap | 4 dimensions of loss, QBR case |
| 6 | Transformation | Ferrero before/after |
| 7 | Strategic Intel | Ava intro + strategic intelligence wheel |
| 8 | Market Intel | Market intelligence wheel |
| 9 | Competitive Intel | Competitive intelligence wheel |
| 10 | Innovation Intel | Innovation intelligence wheel |
| 11 | Sales Intel | Sales intelligence wheel |
| 12 | Fragmented | Maturity stage 1 |
| 13 | Connected | Maturity stage 2 |
| 14 | Optimised | Maturity stage 3 |
| 15 | Predictive | Maturity stage 4 |
| 16 | Why GlobalData | Data + AI + Human expertise |
| 17 | The Return | ROI — Mondelēz |
| 18 | Get Connected | 90-day escape fragmentation |
| 19 | CTA | Let's embed foresight |

## Changes

### 1. Replace slide images
Copy 19 new slide images from the parsed PPTX to `public/slides/sp-slide-{1-19}.jpg`. Delete old `sp-slide-{20-24}.jpg`.

### 2. Rewrite `src/data/salesPitchNarration.ts`
19 scripts totalling ~840 words. Each script is tighter — roughly 20-50 words per slide. Key narration adjustments:
- Title/Hook/Journey: ~15 words each (brief)
- Slides 4-6 (problem/transformation): ~60-70 words each (core story)
- Slides 7-11 (intelligence wheel): ~50 words each (concise pain→outcome)
- Slides 12-15 (maturity): ~40 words each (stage summary)
- Slides 16-19 (close): ~40-50 words each

### 3. Update `src/pages/SalesPitchDeck.tsx`
- Update slides array to 19 entries with new labels
- Add auto-advance: when `narration.hasCompleted` fires for the active slide, automatically scroll to the next slide and start its narration after a 1.5s delay

### 4. Update `src/hooks/useSalesPitchNarration.ts`
- Change preloadNext limit from 23 to 18

## Auto-Advance Logic
```text
useEffect:
  if hasCompleted && currentSlide === activeSlide && activeSlide < slides.length - 1:
    setTimeout → scrollToSlide(activeSlide + 1)
    setTimeout → play(activeSlide + 1) after scroll settles
```

## File Summary

| File | Action |
|------|--------|
| `public/slides/sp-slide-{1-19}.jpg` | Create (copy from new PPTX) |
| `public/slides/sp-slide-{20-24}.jpg` | Delete |
| `src/data/salesPitchNarration.ts` | Rewrite (19 shorter scripts) |
| `src/pages/SalesPitchDeck.tsx` | Rewrite (19 slides + auto-advance) |
| `src/hooks/useSalesPitchNarration.ts` | Update preload limit |

