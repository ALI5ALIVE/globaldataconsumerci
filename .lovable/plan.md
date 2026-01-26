

# Fix Slide 3 "From Fragmented Insight to Connected Decisions" Layout

## Problem Summary

The slide content is compressed toward the top with very small illustrations. Currently:
- Illustrations are only `h-14` (56px tall)
- Gaps are minimal (`gap-1.5`, `gap-1`)
- Padding is tight (`p-2.5`, `p-1`)
- Icons are tiny (`w-5 h-5`, `w-2.5 h-2.5`)
- Text is very small (`text-[9px]` to `text-[11px]`)

The container has `flex-1` available space but the children don't expand to fill it.

---

## Technical Solution

### File: `src/components/globaldata-slides/GDSlide3BeforeAfter.tsx`

**Layout Structure Changes:**

| Line | Current | Change To |
|------|---------|-----------|
| 50 | `gap-1.5 h-full` | `gap-4 h-full` |
| 52 | `gap-2` | `gap-4` |
| 54, 101 | `p-2.5` | `p-4` |
| 56, 103 | `px-2 py-0.5 mb-1.5` | `px-3 py-1 mb-2` |
| 56, 103 | `text-[10px]` | `text-xs` |
| 61, 108 | `h-14 mb-0.5` | `h-32 mb-2` (increase from 56px to 128px) |
| 66, 113 | `gap-1` | `gap-2` |
| 68, 115 | `gap-1.5` | `gap-2` |
| 69, 116 | `w-5 h-5` | `w-8 h-8` |
| 70, 117 | `w-2.5 h-2.5` | `w-4 h-4` |
| 73, 120 | `text-[11px]` | `text-sm` |
| 74, 121 | `text-[9px]` | `text-xs` |
| 81, 128 | `mt-1 pt-1` | `mt-3 pt-3` |
| 82, 129 | `gap-1` | `gap-2` |
| 82, 129 | `p-1` | `p-2` |
| 83, 130 | `text-[11px]` | `text-sm` |
| 84, 131 | `text-[9px]` | `text-xs` |
| 142 | `p-1.5` | `p-3` |
| 143 | `gap-1` | `gap-3` |
| 146 | `gap-1.5 mb-1` | `gap-2 mb-1.5` |
| 147, 149 | `text-[10px]` | `text-sm` |
| 148 | `w-2.5 h-2.5` | `w-4 h-4` |
| 151 | `text-[10px]` | `text-sm` |
| 152 | `text-xs` | `text-base` |
| 152 | `mt-0.5` | `mt-1` |

**Also make the grid use remaining space:**

| Line | Current | Change To |
|------|---------|-----------|
| 52 | `<div className="grid lg:grid-cols-2 gap-2">` | `<div className="grid lg:grid-cols-2 gap-4 flex-1">` |

---

### File: `src/components/globaldata-slides/GDBeforeSilosIllustration.tsx`

Scale up the SVG viewBox and node sizes for better visibility:

| Line | Current | Change To |
|------|---------|-----------|
| 40 | `nodeRadius = 26` | `nodeRadius = 32` |
| 44 | `viewBox="0 0 460 155"` | `viewBox="0 0 460 180"` |
| 184 | `fontSize="18"` | `fontSize="22"` |
| 196 | `fontSize="9"` | `fontSize="11"` |
| 229 | `fontSize="9"` | `fontSize="11"` |

---

### File: `src/components/globaldata-slides/GDAfterConnectedIllustration.tsx`

Scale up the SVG for better visibility:

| Line | Current | Change To |
|------|---------|-----------|
| 18 | `loopRadius = 22` | `loopRadius = 28` |
| 19 | `loopSpacing = 52` | `loopSpacing = 58` |
| 21 | `cy = 45` | `cy = 50` |
| 25 | `viewBox="0 0 300 100"` | `viewBox="0 0 340 120"` |
| 121 | `fontSize="7"` | `fontSize="9"` |

---

## Summary of Changes

| Component | Key Change |
|-----------|------------|
| GDSlide3BeforeAfter | Increase illustration height from 56px to 128px (2.3x larger) |
| GDSlide3BeforeAfter | Increase gaps from 1.5 to 4 (2.7x more spacing) |
| GDSlide3BeforeAfter | Increase icon sizes from w-5 to w-8 (60% larger) |
| GDSlide3BeforeAfter | Increase text from text-[9px] to text-xs/text-sm |
| GDSlide3BeforeAfter | Add flex-1 to main grid to use available space |
| GDBeforeSilosIllustration | Increase node radius from 26 to 32, larger fonts |
| GDAfterConnectedIllustration | Increase loop radius from 22 to 28, larger fonts |

---

## Expected Outcome

1. **Illustrations**: Will be 128px tall instead of 56px - more than 2x larger and more impactful
2. **Before/After cards**: Will expand to fill available vertical space with comfortable padding
3. **Icons and text**: Will be clearly legible at all screen sizes
4. **Overall**: The slide will use the full available content area instead of being compressed at the top

