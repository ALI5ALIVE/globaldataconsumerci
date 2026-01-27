
# Fix Slide 5 Value Chain - Detail Panel Overlapping Bottom Stats

## Problem Summary

On Slide 5 "Intelligence That Compounds Across the Value Chain", the Detail Panel (containing JTBD, Pain to Outcome flow, and Real Example) visually overlaps with the Bottom Stats section ("5 Workflow stages", "3 Strategic combinations", "∞ Compounding value" boxes).

**Root Cause:**
- The Detail Panel at lines 266-389 has `min-h-[140px] max-h-[180px]` but the 3-column grid content inside (JTBD, Pain→Outcome, Real Example) exceeds this height
- The content is being clipped or overflowing into the Bottom Stats area below

---

## Technical Solution

### File: `src/components/globaldata-slides/GDSlide5ValueChain.tsx`

**Strategy:** Compact the Detail Panel content to fit within its container and ensure clear separation from the Bottom Stats.

#### 1. Reduce Detail Panel internal padding and spacing

| Line | Current | Change To |
|------|---------|-----------|
| 275 | `p-4` | `p-2.5` |
| 276 | `gap-4` | `gap-3` |
| 298 | `gap-3` | `gap-2` |

#### 2. Compact the 3-column grid sections (JTBD, Pain→Outcome, Real Example)

**JTBD Column (lines 300-311):**
| Line | Current | Change To |
|------|---------|-----------|
| 301 | `p-3` | `p-2` |
| 305 | `text-xs ... leading-relaxed` | `text-[10px] ... leading-snug` |

**Pain to Outcome Column (lines 314-332):**
| Line | Current | Change To |
|------|---------|-----------|
| 315 | `p-3` | `p-2` |
| 319 | `gap-0.5` | `gap-0` (remove vertical gaps between boxes) |
| 321, 325, 329 | `text-[10px]` | `text-[9px]` |
| 323, 327 | `w-3 h-3` | `w-2.5 h-2.5` (smaller arrows) |

**Real Example Column (lines 336-350):**
| Line | Current | Change To |
|------|---------|-----------|
| 338 | `p-2` | `p-1.5` |
| 339, 340, 341 | `text-[10px]` | `text-[9px]` |
| 343 | `gap-1` | `gap-0.5` |
| 345 | `text-[9px]` | `text-[8px]` |

#### 3. Reduce left column (stage info) size

| Line | Current | Change To |
|------|---------|-----------|
| 285 | `w-8 h-8` | `w-6 h-6` |
| 288 | `w-4 h-4` | `w-3 h-3` |
| 293 | `text-xs` | `text-[11px]` |

#### 4. Adjust Detail Panel height constraints

| Line | Current | Change To |
|------|---------|-----------|
| 266 | `min-h-[140px] max-h-[180px]` | `min-h-[120px] max-h-[150px]` |

#### 5. Compact Bottom Stats section

| Line | Current | Change To |
|------|---------|-----------|
| 392 | `gap-2` | `gap-1.5` |
| 393, 397, 401 | `p-3` / `p-2` | `p-2` / `p-1.5` |
| 394 | `text-2xl` | `text-xl` |
| 398, 402 | `text-xl` | `text-lg` |
| 395 | `text-xs` | `text-[11px]` |
| 399, 403 | `text-[11px]` | `text-[10px]` |

---

## Summary of Changes

| Element | Before | After |
|---------|--------|-------|
| Detail Panel height | 140-180px | 120-150px |
| Detail Panel padding | p-4 | p-2.5 |
| Grid columns padding | p-3 | p-2 |
| Pain→Outcome text | text-[10px] | text-[9px] |
| Pain→Outcome arrows | w-3 h-3 | w-2.5 h-2.5 |
| Stage icons | w-8 h-8 | w-6 h-6 |
| Bottom Stats numbers | text-2xl/xl | text-xl/lg |

---

## Expected Outcome

1. The Detail Panel content (JTBD, Pain to Outcome, Real Example) will fit within its container without overflow
2. Clear visual separation between the Detail Panel and Bottom Stats boxes
3. No overlapping of any elements
4. All content remains visible and readable
5. Slide maintains the "no page scroll" 768p viewport optimization
