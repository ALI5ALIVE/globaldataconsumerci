
# Fix Slide 5 - Push Bottom Stats Section Lower

## Problem

The Bottom Stats boxes ("5 Workflow stages", "3 Strategic combinations", "∞ Compounding value") are positioned too high on the slide. The user wants them moved further down toward the bottom of the slide viewport.

## Root Cause

The current layout at line 169 uses `flex flex-col gap-2` which stacks all elements from top to bottom with consistent small gaps. There's no mechanism to push the Bottom Stats section to the bottom of the available space.

## Solution

Use flexbox spacing to push the Bottom Stats section to the bottom of the content area while keeping the upper elements (Combo Pills, Workflow Cards, Detail Panel) positioned at the top.

### File: `src/components/globaldata-slides/GDSlide5ValueChain.tsx`

#### Changes:

| Line | Current | Change To |
|------|---------|-----------|
| 266 | `<div className="min-h-[120px] max-h-[150px]">` | `<div className="min-h-[120px] max-h-[150px] flex-grow">` |
| 391 | `{/* Bottom Stats */}` | `{/* Bottom Stats - pushed to bottom */}` |
| 392 | `<div className="grid grid-cols-3 gap-1.5">` | `<div className="grid grid-cols-3 gap-1.5 mt-auto">` |

**What this does:**
1. Adding `flex-grow` to the Detail Panel container allows it to expand and fill available vertical space
2. Adding `mt-auto` to the Bottom Stats section pushes it to the very bottom of the flex container

This approach ensures the Bottom Stats boxes are anchored to the bottom of the slide's content area, creating clear visual separation from the Detail Panel above.

## Expected Outcome

1. Bottom Stats section will be positioned at the bottom of the slide content area
2. Clear vertical separation between the Detail Panel and Bottom Stats
3. Slide maintains proper layout within 768p viewport
4. All content remains visible without scrolling
