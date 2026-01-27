

# Fix Copy Box Overflow on Connected Intelligence Slide

## Problem
The Solution Value Panel on Slide 4 ("The Answer: Connected Intelligence") requires scrolling because the content exceeds the available vertical space. The panel is set to `max-h-[340px]` with `overflow-hidden`, causing content to be cut off at the bottom.

## Solution
Reduce typography sizes and spacing within the `SolutionValuePanel` component to fit all content without scrolling.

## File to Update
**`src/components/globaldata-slides/SolutionValuePanel.tsx`**

## Changes

### 1. Reduce Header Size (Lines 52-60)
- Icon container: `w-8 h-8` → `w-6 h-6`, icon `w-4 h-4` → `w-3 h-3`
- Title: `text-base` → `text-sm`
- Margin: `mb-1.5` → `mb-1`

### 2. Compact JTBD Section (Lines 63-72)
- Section padding: `p-1.5` → `p-1`
- Section margin: `mb-1.5` → `mb-1`
- JTBD text: `text-[11px]` → `text-[10px]`

### 3. Compact Pain-to-Outcome Section (Lines 75-101)
- Section padding: `p-1.5` → `p-1`
- Section margin: `mb-1.5` → `mb-1`
- Text in boxes: `text-[11px]` → `text-[10px]`
- Inner padding: `px-2 py-1` → `px-1.5 py-0.5`
- Arrow icons: `w-3 h-3` → `w-2.5 h-2.5`
- Reduce gap between items: `gap-0.5` → keep but tighten arrow spacing

### 4. Compact Real Example Section (Lines 104-112)
- Section padding: `p-1.5` → `p-1`
- Section margin: `mb-1.5` → `mb-1`
- Brand text: `text-[10px]` → `text-[9px]`
- Result text: `text-[11px]` → `text-[10px]`

### 5. Reduce Capability Tags (Lines 115-128)
- Gap: `gap-1` → `gap-0.5`
- Tag padding: `px-1.5 py-0.5` → `px-1 py-0.5`
- Tag text: `text-[9px]` → `text-[8px]`

## Summary of Typography Reductions
| Element | Before | After |
|---------|--------|-------|
| Title | `text-base` | `text-sm` |
| JTBD text | `text-[11px]` | `text-[10px]` |
| Pain/Capability/Outcome | `text-[11px]` | `text-[10px]` |
| Brand name | `text-[10px]` | `text-[9px]` |
| Result text | `text-[11px]` | `text-[10px]` |
| Capability tags | `text-[9px]` | `text-[8px]` |

## Outcome
- All content will fit within the 340px max height without scrolling or being cut off
- Visual hierarchy is preserved with proportional reductions
- Maintains readability while maximizing vertical space efficiency

