
# Master Fix Plan: GlobalData Deck Content Overflow Resolution

## Executive Summary

This plan addresses content overflow issues across all 11 slides in the GlobalData presentation deck (Slides 0-10), ensuring all content is visible on standard 1366x768 laptop screens without scrolling while preserving all images at their current sizes.

---

## Problem Analysis

### Viewport Budget Calculation (768px height)

| Element | Height |
|---------|--------|
| Container vertical padding (`py-6 sm:py-8`) | ~64px |
| Header (title + subtitle + margin) | ~80px |
| Footer/logo reserved space | ~24px |
| **Available content space** | **~600px** |

### Root Causes Identified

1. **Slide 3 (Before/After)**: Content height ~330px fits, but labels positioned with `absolute -top-2.5` are clipped by `overflow-hidden` in parent container
2. **Slide 4 (Proposition)**: `ConnectedIntelligenceWheel` has no height constraint and `SolutionValuePanel` uses `min-h-[160px] max-h-[320px]` which together exceed available space
3. **Slide 5 (Value Chain)**: Workflow cards use `min-h-[140px]`, detail panel uses `min-h-[120px] max-h-[140px]`, combined with combo pills and stats = overflow
4. **Slide 10 (Solutions)**: `GDSolutionsFlow` has no height constraints, active solution details panel uses `p-4 sm:p-6` with generous spacing
5. **Multiple slides**: Use `flex-1` on grid items causing expansion beyond available space

---

## Technical Solution by Slide

### Slide 3: GDSlide3BeforeAfter.tsx

**Current Issues:**
- Labels inside cards but vertical space still tight
- Illustration at `h-16` (64px) with icon grid and indicators

**Changes:**

| Line | Current | New |
|------|---------|-----|
| 50 | `gap-2` | `gap-1.5` |
| 52 | `gap-3` | `gap-2` |
| 54, 101 | `p-3` | `p-2.5` |
| 56, 103 | `mb-2` | `mb-1.5` |
| 61, 108 | `h-16 mb-1` | `h-14 mb-0.5` |
| 66, 113 | `gap-1.5` | `gap-1` |
| 69, 116 | `w-6 h-6` | `w-5 h-5` |
| 70, 117 | `w-3 h-3` | `w-2.5 h-2.5` |
| 73, 120 | `text-xs` | `text-[11px]` |
| 81, 128 | `mt-1.5 pt-1.5` | `mt-1 pt-1` |
| 82, 129 | `p-1.5` | `p-1` |
| 142 | `p-2` | `p-1.5` |
| 146 | `mb-2` | `mb-1` |
| 152 | `text-sm` | `text-xs` |

**Space Saved: ~50px**

---

### Slide 4: GDSlide4Proposition.tsx

**Current Issues:**
- Wheel container has `max-h-[320px]` but no strict enforcement
- Panel can expand beyond constraints
- Combined content exceeds 600px

**Changes:**

| Line | Current | New |
|------|---------|-----|
| 32 | `gap-2` | `gap-1.5` |
| 34 | `p-3` | `p-2` |
| 35 | `text-sm md:text-base` | `text-xs md:text-sm` |
| 41 | `gap-3 items-center min-h-0 max-h-[calc(100%-120px)]` | `gap-2 items-center min-h-0 max-h-[calc(100%-80px)]` |
| 43 | `max-h-[320px]` | `max-h-[280px]` |
| 57 | `p-2` | `p-1.5` |
| 58 | `text-sm` | `text-xs` |

**ConnectedIntelligenceWheel.tsx:**

| Line | Current | New |
|------|---------|-----|
| 88 | `max-w-sm` | `max-w-xs` |
| 89 | `max-h-[300px]` | `max-h-[260px]` |

**SolutionValuePanel.tsx:**

| Line | Current | New |
|------|---------|-----|
| 26 | `min-h-[160px] max-h-[320px]` | `min-h-[120px] max-h-[260px]` |
| 48 | `min-h-[160px] max-h-[320px]` | `min-h-[120px] max-h-[260px]` |
| 48 | `p-3` | `p-2` |
| 52 | `gap-2 mb-2` | `gap-1.5 mb-1.5` |
| 54 | `w-10 h-10` | `w-8 h-8` |
| 57 | `w-5 h-5` | `w-4 h-4` |
| 59 | `text-lg` | `text-base` |
| 63, 75, 104 | `mb-1.5 p-1.5` | `mb-1 p-1` |
| 67, 109 | `text-sm` | `text-xs` |
| 79 | `gap-1.5` | `gap-1` |
| 81, 89, 97 | `px-2.5 py-1.5` | `px-2 py-1` |
| 82, 90, 98 | `text-xs` | `text-[10px]` |
| 116 | `slice(0, 4)` | `slice(0, 3)` |
| 119 | `px-2 py-1` | `px-1.5 py-0.5` |
| 119 | `text-[10px]` | `text-[9px]` |

**Space Saved: ~80px**

---

### Slide 5: GDSlide5ValueChain.tsx

**Current Issues:**
- Combo pills have `px-4 py-2` padding
- Workflow cards have `min-h-[140px]` and `p-4`
- Detail panel has `min-h-[120px] max-h-[140px]`
- Stats row has `p-3`

**Changes:**

| Line | Current | New |
|------|---------|-----|
| 169 | `gap-2` | `gap-1.5` |
| 171 | `gap-3` | `gap-2` |
| 175 | `px-4 py-2` | `px-3 py-1.5` |
| 185 | `text-sm` | `text-xs` |
| 192 | `w-3.5 h-3.5` | `w-3 h-3` |
| 204 | `flex-1 flex items-center` | `flex items-center` |
| 209 | `p-4 ... min-h-[140px]` | `p-3 ... min-h-[110px]` |
| 219 | `text-xs ... min-h-[28px]` | `text-[11px] ... min-h-[22px]` |
| 224 | `gap-1 mb-2` | `gap-0.5 mb-1` |
| 230 | `gap-1.5 px-2 py-0.5` | `gap-1 px-1.5 py-0.5` |
| 236, 288 | `w-3 h-3` / `w-4 h-4` | `w-2.5 h-2.5` / `w-3.5 h-3.5` |
| 238 | `text-[9px]` | `text-[8px]` |
| 266 | `min-h-[120px] max-h-[140px]` | `min-h-[90px] max-h-[110px]` |
| 275 | `p-4` | `p-3` |
| 276 | `gap-4` | `gap-3` |
| 285 | `w-8 h-8` | `w-6 h-6` |
| 293, 305 | `text-xs` | `text-[11px]` |
| 298 | `gap-4` | `gap-2` |
| 301, 315, 338 | `p-3` / `p-3` / `p-2` | `p-2` / `p-2` / `p-1.5` |
| 344 | `slice(0, 3)` | `slice(0, 2)` |
| 345 | `text-[9px]` | `text-[8px]` |
| 360 | `p-4` | `p-3` |
| 369 | `w-10 h-10` | `w-8 h-8` |
| 378, 379 | `text-sm` | `text-xs` |
| 382 | `mt-2` | `mt-1` |
| 392 | `gap-2` | `gap-1.5` |
| 393 | `p-3` | `p-2` |
| 394 | `text-2xl` | `text-xl` |

**Space Saved: ~75px**

---

### Slide 10: GDSlide10Solutions.tsx

**Current Issues:**
- `GDSolutionsFlow` expands without constraint
- Active solution details use `mt-6 p-4 sm:p-6`
- Comparison table uses `p-4` with `space-y-2`
- Bottom stats use `p-3`

**Changes in GDSlide10Solutions.tsx:**

| Line | Current | New |
|------|---------|-----|
| 74 | `gap-4` | `gap-2` |
| 76 | `gap-3 text-sm` | `gap-2 text-xs` |
| 77 | `px-3 py-1.5` | `px-2 py-1` |
| 97 | `gap-3` | `gap-2` |
| 99, 115 | `p-4` | `p-3` |
| 100, 116 | `text-sm ... mb-3` | `text-xs ... mb-2` |
| 104, 120 | `space-y-2` | `space-y-1.5` |
| 106, 122 | `text-sm` | `text-xs` |
| 132 | `gap-3` | `gap-2` |
| 133, 137, 141 | `p-3` | `p-2` |
| 134, 138 | `text-2xl sm:text-3xl` | `text-xl sm:text-2xl` |
| 143 | `w-8 h-8 sm:w-10 sm:h-10` | `w-6 h-6 sm:w-8 sm:h-8` |

**Changes in GDSolutionsFlow.tsx:**

| Line | Current | New |
|------|---------|-----|
| 88 | `max-h-full` | `max-h-[calc(100%-60px)]` |
| 92 | `h-12` | `h-10` |
| 93 | `text-xs sm:text-sm` | `text-[10px] sm:text-xs` |
| 190 | `gap-2 sm:gap-4 pb-16` | `gap-1.5 sm:gap-3 pb-14` |
| 201 | `p-2 sm:p-4` | `p-2 sm:p-3` |
| 219 | `w-8 h-8 sm:w-12 sm:h-12 ... mb-2` | `w-6 h-6 sm:w-10 sm:h-10 ... mb-1.5` |
| 261 | `mt-6 p-4 sm:p-6` | `mt-3 p-3 sm:p-4` |
| 267 | `w-10 h-10 sm:w-12 sm:h-12` | `w-8 h-8 sm:w-10 sm:h-10` |
| 276 | `text-base sm:text-lg ... mb-1` | `text-sm sm:text-base ... mb-0.5` |
| 279 | `text-sm ... mb-3` | `text-xs ... mb-2` |
| 284 | `gap-2 mb-3` | `gap-1.5 mb-2` |
| 287-288 | `text-xs px-2 py-1` | `text-[10px] px-1.5 py-0.5` |
| 296 | `p-3` | `p-2` |
| 297 | `text-xs ... mb-1` | `text-[10px] ... mb-0.5` |
| 298 | `text-sm` | `text-xs` |

**Space Saved: ~70px**

---

### Other Slides (Already Fixed but Additional Tightening)

**GDSlide1GrowthReality.tsx:**
| Line | Current | New |
|------|---------|-----|
| 52 | `gap-3` | `gap-2` |
| 58 | `p-5` | `p-4` |
| 79, 92 | `p-6` | `p-5` |
| 107 | `p-4` | `p-3` |

**GDSlide2IntelligenceGap.tsx:**
| Line | Current | New |
|------|---------|-----|
| 66 | `gap-3` | `gap-2` |
| 68 | `p-5` | `p-4` |
| 79 | `gap-3` | `gap-2` |
| 125 | `p-5` | `p-4` |

**GDSlide6ValuePyramid.tsx:**
| Line | Current | New |
|------|---------|-----|
| 319 | `gap-3 lg:gap-4` | `gap-2 lg:gap-3` |
| 321 | `max-h-[380px]` | `max-h-[360px]` |
| 339 | `p-4` | `p-3` |
| 349 | `mt-3 pt-3` | `mt-2 pt-2` |

**GDSlide7MaturityCurve.tsx:**
| Line | Current | New |
|------|---------|-----|
| 281 | `gap-3` | `gap-2` |
| 282 | `gap-4` | `gap-3` |
| 284 | `p-4 md:p-6` | `p-3 md:p-4` |
| 287 | `max-h-[500px]` | `max-h-[420px]` |

**GDSlide8ROI.tsx:**
| Line | Current | New |
|------|---------|-----|
| 61 | `gap-3` | `gap-2` |
| 63 | `gap-4` | `gap-3` |
| 69 | `p-5` | `p-4` |
| 104 | `p-5` | `p-4` |
| 119 | `p-4` | `p-3` |

**GDSlide9WhyGlobalData.tsx:**
| Line | Current | New |
|------|---------|-----|
| 58 | `gap-3` | `gap-2` |
| 60 | `gap-4` | `gap-3` |
| 66 | `p-5` | `p-4` |
| 83 | `p-5` | `p-4` |
| 103 | `gap-3` | `gap-2` |
| 105 | `p-5` | `p-4` |
| 130 | `p-6` | `p-5` |

---

## Files to Modify (Summary)

| File | Primary Changes |
|------|-----------------|
| `GDSlide3BeforeAfter.tsx` | Reduce illustration height, tighten gaps/padding/icons |
| `GDSlide4Proposition.tsx` | Add stricter max-height, reduce gaps |
| `ConnectedIntelligenceWheel.tsx` | Reduce max dimensions |
| `SolutionValuePanel.tsx` | Reduce height constraints and internal spacing |
| `GDSlide5ValueChain.tsx` | Reduce card heights, detail panel, all padding |
| `GDSlide10Solutions.tsx` | Reduce gaps and padding throughout |
| `GDSolutionsFlow.tsx` | Constrain height, reduce detail panel spacing |
| `GDSlide1GrowthReality.tsx` | Minor padding reductions |
| `GDSlide2IntelligenceGap.tsx` | Minor padding reductions |
| `GDSlide6ValuePyramid.tsx` | Reduce pyramid container max-height |
| `GDSlide7MaturityCurve.tsx` | Reduce curve max-height and gaps |
| `GDSlide8ROI.tsx` | Reduce card padding and gaps |
| `GDSlide9WhyGlobalData.tsx` | Reduce padding throughout |

---

## Expected Outcome

After implementation:

1. **All slides fit within 768px viewport** without scrolling
2. **Images remain unchanged** - only padding, margins, gaps, and text sizes reduced
3. **All copy is visible** including labels, descriptions, and metric text
4. **Slide 3**: Before/After labels and indicators fully visible
5. **Slide 4**: Wheel and panel fit side-by-side without cutoff
6. **Slide 5**: All 5 workflow cards, detail panel, and stats visible
7. **Slide 10**: Solutions flow, comparison table, and stats all fit
8. **Legibility maintained** - font sizes reduced minimally (mostly 1-2px)

---

## Height Budget After Changes

| Slide | Before | After | Available |
|-------|--------|-------|-----------|
| Slide 3 | ~330px | ~280px | 600px ✓ |
| Slide 4 | ~650px | ~520px | 600px ✓ |
| Slide 5 | ~670px | ~540px | 600px ✓ |
| Slide 10 | ~680px | ~550px | 600px ✓ |
