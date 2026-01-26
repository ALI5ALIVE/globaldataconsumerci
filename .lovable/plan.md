

# Fix Slides 4, 5, and 6 Layout Issues

## Problem Summary

Based on my code review, the issues are:

1. **Slide 4**: Content is compressed toward the top with small images. The wheel is constrained to `max-h-[280px]` and `max-w-xs` (320px), and the panel is limited to `max-h-[260px]`.

2. **Slide 5**: The detail panel has `min-h-[90px] max-h-[110px]` which may cut off content when displaying the full JTBD, Pain-to-Outcome flow, and examples. Additionally, the 3-column grid forces content into very tight spaces.

3. **Slide 6**: The GDDetailsPanel contains multiple stacked cards (What It Looks Like, Result, Value Proof, Behavioral Shift, Time Allocation) that may overlap when the panel has `overflow-y-auto` but limited height.

---

## Technical Solution

### Slide 4: Make Content Deeper and Images Bigger

**File: `src/components/globaldata-slides/GDSlide4Proposition.tsx`**

| Line | Current | Change To |
|------|---------|-----------|
| 32 | `gap-1.5` | `gap-3` |
| 34 | `p-2` | `p-3` |
| 35 | `text-xs md:text-sm` | `text-sm md:text-base` |
| 41 | `gap-2 items-center min-h-0 max-h-[calc(100%-80px)]` | `gap-4 items-center min-h-0 flex-1` |
| 43 | `max-h-[280px]` | `max-h-[380px]` |
| 57 | `p-1.5` | `p-2` |
| 58 | `text-xs` | `text-sm` |

**File: `src/components/globaldata-slides/ConnectedIntelligenceWheel.tsx`**

| Line | Current | Change To |
|------|---------|-----------|
| 88 | `max-w-xs` | `max-w-md` (increase from 320px to 448px) |
| 89 | `max-h-[260px]` | `max-h-[380px]` |

**File: `src/components/globaldata-slides/SolutionValuePanel.tsx`**

| Line | Current | Change To |
|------|---------|-----------|
| 26 | `min-h-[120px] max-h-[260px]` | `min-h-[200px] max-h-[380px]` |
| 48 | `min-h-[120px] max-h-[260px]` | `min-h-[200px] max-h-[380px]` |
| 48 | `p-2` | `p-4` |
| 52 | `gap-1.5 mb-1.5` | `gap-2 mb-2` |
| 54 | `w-8 h-8` | `w-10 h-10` |
| 57 | `w-4 h-4` | `w-5 h-5` |
| 59 | `text-base` | `text-lg` |
| 63 | `mb-1 p-1` | `mb-2 p-2` |
| 67 | `text-xs` | `text-sm` |
| 75 | `mb-1 p-1` | `mb-2 p-2` |
| 81, 89, 97 | `px-2 py-1` | `px-2.5 py-1.5` |
| 82, 90, 98 | `text-[10px]` | `text-xs` |
| 104 | `mb-1 p-1` | `mb-2 p-2` |
| 109 | `text-xs` | `text-sm` |
| 119 | `px-1.5 py-0.5 text-[9px]` | `px-2 py-1 text-[10px]` |

---

### Slide 5: Ensure Copy Box Displays All Information Without Scrolling

**File: `src/components/globaldata-slides/GDSlide5ValueChain.tsx`**

| Line | Current | Change To |
|------|---------|-----------|
| 169 | `gap-1.5` | `gap-2` |
| 266 | `min-h-[90px] max-h-[110px]` | `min-h-[140px] max-h-[180px]` |
| 275 | `p-3` | `p-4` |
| 276 | `gap-3` | `gap-4` |
| 285 | `w-6 h-6` | `w-8 h-8` |
| 288 | `w-3.5 h-3.5` | `w-4 h-4` |
| 293 | `text-[11px]` | `text-xs` |
| 298 | `gap-2` | `gap-3` |
| 301 | `p-2` | `p-3` |
| 305 | `text-[11px]` | `text-xs` |
| 315 | `p-2` | `p-3` |
| 320, 324, 328 | `px-1.5 py-0.5` | `px-2 py-1` |
| 321, 325, 329 | `text-[9px]` | `text-[10px]` |
| 338 | `p-1.5` | `p-2` |
| 339-341 | `text-[9px]` | `text-[10px]` |
| 344 | `slice(0, 2)` | `slice(0, 3)` (show more capabilities) |
| 345 | `text-[8px]` | `text-[9px]` |
| 392 | `gap-1.5` | `gap-2` |
| 393 | `p-2` | `p-3` |
| 394 | `text-xl` | `text-2xl` |
| 395 | `text-[11px]` | `text-xs` |

Also reduce workflow card heights slightly to give more room to the detail panel:

| Line | Current | Change To |
|------|---------|-----------|
| 209 | `min-h-[110px]` | `min-h-[100px]` |

---

### Slide 6: Prevent Bottom 3 Cards from Overlapping

**File: `src/components/globaldata-slides/GDSlide6ValuePyramid.tsx`**

| Line | Current | Change To |
|------|---------|-----------|
| 319 | `gap-2 lg:gap-3` | `gap-3 lg:gap-4` |
| 321 | `max-h-[360px]` | `max-h-[420px]` |
| 339 | `p-3` | `p-4` |
| 349 | `mt-2 pt-2` | `mt-3 pt-3` |

**File: `src/components/globaldata-slides/GDDetailsPanel.tsx`**

| Line | Current | Change To |
|------|---------|-----------|
| 74 | `gap-2` | `gap-2.5` |
| 97 | `space-y-1` | `space-y-1.5` |
| 132 | `space-y-1` | `space-y-1.5` |
| 150 | `space-y-1` | `space-y-1.5` |
| 157 | `gap-1` | `gap-1.5` |

**File: `src/components/globaldata-slides/GDBehaviorShiftCard.tsx`**

| Line | Current | Change To |
|------|---------|-----------|
| 34 | `p-1.5 ... mb-1` | `p-2 ... mb-1.5` |

**File: `src/components/globaldata-slides/GDTimeAllocationBar.tsx`** (if exists, check spacing)

---

## Summary of Changes

| Slide | Component | Key Change |
|-------|-----------|------------|
| 4 | GDSlide4Proposition | Increase gaps from 1.5 to 3, expand max-heights |
| 4 | ConnectedIntelligenceWheel | Increase max-w from xs (320px) to md (448px), max-h from 260px to 380px |
| 4 | SolutionValuePanel | Increase max-h from 260px to 380px, expand all padding and text sizes |
| 5 | GDSlide5ValueChain | Increase detail panel from max-h-110px to max-h-180px, reduce workflow card min-h to 100px |
| 6 | GDSlide6ValuePyramid | Increase pyramid max-h from 360px to 420px, increase gaps |
| 6 | GDDetailsPanel | Increase gaps between sections from 2 to 2.5, space-y from 1 to 1.5 |
| 6 | GDBehaviorShiftCard | Increase padding from 1.5 to 2 |

---

## Expected Outcome

1. **Slide 4**: The Connected Intelligence Wheel will be 40% larger and more prominent. The Solution Value Panel will have more breathing room with larger text and better spacing.

2. **Slide 5**: The detail panel will expand from 110px to 180px max height, allowing all JTBD, Pain-to-Outcome flows, and examples to display without scrolling.

3. **Slide 6**: Cards will have proper spacing (gap-2.5 instead of gap-2), preventing the Value Proof, Behavioral Shift, and Time Allocation cards from overlapping.

