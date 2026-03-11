

# Plan: Compact Operating Model Canvas to Fit Viewport

## Problem
The 3×2 card grid overflows the ~500px available content height at 628px viewport. Cards have too much padding, spacing, and font sizes.

## Changes — `src/components/consumer-journey/CJSlideOperatingModel.tsx`

### Layout
- Grid gap: `gap-3` → `gap-2`
- Remove `flex items-center` wrapper (wastes space centering); just render the grid directly
- Card padding: `p-4` → `p-2.5`
- Card border-radius: `rounded-xl` → `rounded-lg`

### Header row
- Icon box: `w-8 h-8` → `w-6 h-6`, icon `w-4 h-4` → `w-3 h-3`
- Title: `text-sm` → `text-xs`
- Description: `text-[10px]` → `text-[9px]`
- Header margin: `mb-2` → `mb-1`
- Gap: `gap-2.5` → `gap-2`

### Before/After section
- Remove `mt-1`, reduce `pt-2` → `pt-1`
- Font: `text-[11px]` → `text-[10px]`
- Label width: `w-10` → `w-9`
- `space-y-1` → `space-y-0.5`

### Stat bar section
- `mt-2 pt-2` → `mt-1 pt-1`
- Bar height: `h-2` → `h-1.5`
- Stat unit text: `text-sm` → `text-xs`

### Benefit line
- `pt-2` → `pt-1`
- `text-[10px]` → `text-[9px]`

**Estimated savings: ~60–80px total vertical**, fitting all 6 cards within the viewport.

