

## Comprehensive Fix for GlobalData Deck Content Overflow

### Problem Summary

Multiple slides in the GlobalData deck have content being cut off:
1. **Slide 3 (Before/After)**: The label badges (e.g., "Before: Fragmented Intelligence") positioned with `absolute -top-2.5` are being clipped by the container's `overflow-hidden`
2. **Slide 4 (Proposition)**: The Connected Intelligence Wheel and Solution Value Panel overflow the viewport
3. **Multiple slides**: Content at the bottom is cut off due to insufficient height constraints and excessive padding/gaps

### Root Cause Analysis

1. **GDSlideContainer (Line 46)**: Uses `overflow-hidden` which clips any absolutely positioned elements that extend beyond the container boundaries

2. **Slide 3 (GDSlide3BeforeAfter.tsx)**:
   - Lines 55-56: Absolute positioned labels use `-top-2.5` which positions them outside the card, getting clipped
   - Line 52: `flex-1` on the grid causes it to expand beyond available space
   - Line 60, 107: Illustration containers at `h-20` (80px) consume significant vertical space

3. **Slide 4 (GDSlide4Proposition.tsx)**:
   - Line 41: No max-height constraint on the grid containing the wheel and panel
   - Line 43: Wheel container has no height limits
   - ConnectedIntelligenceWheel.tsx Line 88: Uses `max-w-md` (448px) but no height constraint

4. **Slides 1, 2, 5, 8, 9**: Use `flex-1` on content sections which can cause overflow when combined with fixed-height elements

---

### Technical Solution

#### 1. Fix GDSlideContainer - Allow Labels to Show

**File:** `src/components/globaldata-slides/GDSlideContainer.tsx`

| Line | Current | Change |
|------|---------|--------|
| 46 | `overflow-hidden` | Change to `overflow-visible` for the content area but keep `overflow-hidden` on section |
| 111 | `overflow-hidden` | Remove to allow badge labels to be visible |

New approach - wrap children with proper overflow handling:
```tsx
// Line 110-111: Change content area wrapper
<div className="w-full flex-1 min-h-0 relative">{children}</div>
```

#### 2. Fix Slide 3 - Before/After Labels and Layout

**File:** `src/components/globaldata-slides/GDSlide3BeforeAfter.tsx`

**Issue 1: Labels are clipped**
Move labels inside the cards instead of absolute positioning outside:

| Line | Current | Change |
|------|---------|--------|
| 54-57 | Absolute label `-top-2.5` | Move inside card with `mb-2` margin |
| 101-104 | Absolute label `-top-2.5` | Move inside card with `mb-2` margin |

**Issue 2: Content overflow**
| Line | Current | Change |
|------|---------|--------|
| 50 | `gap-3` | Reduce to `gap-2` |
| 52 | `gap-4 flex-1` | Remove `flex-1`, reduce to `gap-3` |
| 58, 105 | `p-4 pt-6` | Change to `p-3` (no pt-6 needed since label is inside) |
| 60, 107 | `h-20` | Reduce to `h-16` |
| 65, 112 | `gap-2` | Reduce to `gap-1.5` |
| 80, 127 | `mt-2 pt-2` | Reduce to `mt-1.5 pt-1.5` |
| 142 | `p-3` | Reduce to `p-2` |

**New label structure (Lines 54-58):**
```tsx
<div className="relative bg-card/30 border border-destructive/20 rounded-xl p-3 h-full flex flex-col">
  {/* Label inside the card */}
  <div className="inline-flex self-start px-2 py-0.5 mb-2 bg-destructive/20 border border-destructive/30 rounded text-[10px] font-semibold text-destructive uppercase tracking-wider">
    Before: Fragmented Intelligence
  </div>
  {/* Rest of content */}
```

#### 3. Fix Slide 4 - Wheel and Panel Constraints

**File:** `src/components/globaldata-slides/GDSlide4Proposition.tsx`

| Line | Current | Change |
|------|---------|--------|
| 32 | `gap-3` | Reduce to `gap-2` |
| 34 | `p-4` | Reduce to `p-3` |
| 41 | `gap-4` | Add `max-h-[calc(100%-120px)]`, reduce to `gap-3` |
| 43 | `h-full` | Add `max-h-[320px]` |
| 57 | `p-3` | Reduce to `p-2` |

**File:** `src/components/globaldata-slides/ConnectedIntelligenceWheel.tsx`

| Line | Current | Change |
|------|---------|--------|
| 88 | `max-w-md` | Change to `max-w-sm` |
| 89 | `w-full h-auto` | Add `max-h-[300px]` |

**File:** `src/components/globaldata-slides/SolutionValuePanel.tsx`

| Line | Current | Change |
|------|---------|--------|
| 26, 48 | `min-h-[200px]` | Change to `min-h-[160px] max-h-[320px]` |
| 48 | `p-4` | Reduce to `p-3` |
| 63, 75, 104 | `mb-2 p-2` | Reduce to `mb-1.5 p-1.5` |

#### 4. Fix Remaining Slides for Consistency

**File:** `src/components/globaldata-slides/GDSlide1GrowthReality.tsx`

| Line | Current | Change |
|------|---------|--------|
| 52 | `gap-4` | Reduce to `gap-3` |
| 78 | `flex-1` | Remove `flex-1` to prevent expansion |

**File:** `src/components/globaldata-slides/GDSlide2IntelligenceGap.tsx`

| Line | Current | Change |
|------|---------|--------|
| 66 | `gap-4` | Reduce to `gap-3` |
| 79 | `gap-4` | Reduce to `gap-3` |

**File:** `src/components/globaldata-slides/GDSlide5ValueChain.tsx`

| Line | Current | Change |
|------|---------|--------|
| 169 | `gap-3` | Reduce to `gap-2` |
| 266 | `min-h-[140px]` | Change to `min-h-[120px] max-h-[140px]` |
| 392 | `gap-4` | Reduce to `gap-2` |

**File:** `src/components/globaldata-slides/GDSlide6ValuePyramid.tsx`

| Line | Current | Change |
|------|---------|--------|
| 319 | `gap-4 lg:gap-6` | Reduce to `gap-3 lg:gap-4` |
| 321 | `min-h-[300px] lg:min-h-[400px]` | Change to `min-h-0 max-h-[380px]` |

**File:** `src/components/globaldata-slides/GDSlide8ROI.tsx`

| Line | Current | Change |
|------|---------|--------|
| 61 | `gap-4` | Reduce to `gap-3` |
| 63 | `gap-5 flex-1` | Remove `flex-1`, reduce to `gap-4` |

**File:** `src/components/globaldata-slides/GDSlide9WhyGlobalData.tsx`

| Line | Current | Change |
|------|---------|--------|
| 58 | `gap-4` | Reduce to `gap-3` |
| 103 | `flex-1 gap-4` | Remove `flex-1`, keep `gap-3` |

---

### Summary of Changes by File

| File | Key Changes |
|------|-------------|
| `GDSlideContainer.tsx` | Remove `overflow-hidden` from content wrapper |
| `GDSlide3BeforeAfter.tsx` | Move labels inside cards, reduce heights/gaps/padding |
| `GDSlide4Proposition.tsx` | Add max-height constraints, reduce gaps |
| `ConnectedIntelligenceWheel.tsx` | Constrain width to `max-w-sm`, add `max-h-[300px]` |
| `SolutionValuePanel.tsx` | Add max-height, reduce min-height and padding |
| `GDSlide1GrowthReality.tsx` | Remove `flex-1`, reduce gaps |
| `GDSlide2IntelligenceGap.tsx` | Reduce gaps |
| `GDSlide5ValueChain.tsx` | Constrain detail panel height, reduce gaps |
| `GDSlide6ValuePyramid.tsx` | Reduce pyramid container height, reduce gaps |
| `GDSlide8ROI.tsx` | Remove `flex-1`, reduce gaps |
| `GDSlide9WhyGlobalData.tsx` | Remove `flex-1`, reduce gaps |

---

### Expected Outcome

After these changes:
- **Slide 3**: "Before" and "After" labels will be fully visible inside their cards
- **Slide 4**: The Connected Intelligence Wheel and panel will fit within viewport
- **All slides**: Content will fit on standard 1366x768 laptop screens without scrolling
- Labels, copy, and illustrations will all be visible without cutoff
- Image sizes remain appropriate and legible

