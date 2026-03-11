

# Plan: Reduce Vertical Height of Slide 3 Content

## Problem

Slide 3 ("Where Growth and Performance Are Lost") is overflowing the viewport. The current layout has too much vertical spacing and padding, causing content to go off the page.

## Current Vertical Budget Analysis

| Element | Current Spacing | Issue |
|---------|----------------|-------|
| Definition Box | `p-4`, `mb-2` | Can be reduced |
| Section headers | `text-xs` with margin | Acceptable |
| Root cause cards | `p-3`, `mb-2` icon, `mt-1` text gaps | Too much internal padding |
| Impact cards | `p-3`, `mb-1` dimension label | Too much internal padding |
| Bottom Line box | `p-4`, `mb-1` label | Can be reduced |
| Main grid | `gap-2` | Acceptable |
| Card columns | `gap-1.5` | Acceptable |

## Proposed Reductions

| Element | Current | Proposed | Savings |
|---------|---------|----------|---------|
| Definition Box padding | `p-4` | `p-3` | ~8px |
| Definition Box text | `text-base` | `text-sm` | ~2px |
| Definition Box header margin | `mb-2` | `mb-1` | ~4px |
| Root cause card padding | `p-3` | `p-2` | ~8px per card (32px total) |
| Root cause icon wrapper | `w-8 h-8`, `mb-2` | `w-6 h-6`, `mb-1` | ~12px per card |
| Root cause icon | `w-4 h-4` | `w-3 h-3` | proportional |
| Root cause text margins | `mt-1` | `mt-0.5` | ~2px per line |
| Impact card padding | `p-3` | `p-2` | ~8px per card (32px total) |
| Impact value text | `text-xl` | `text-lg` | ~2px |
| Impact text margins | `mt-1`, `mb-1` | `mt-0.5`, `mb-0.5` | ~4px per card |
| Bottom Line padding | `p-4` | `p-3` | ~8px |
| Bottom Line text | `text-base` | `text-sm` | ~2px |
| Bottom Line header margin | `mb-1` | `mb-0.5` | ~2px |

**Estimated Total Savings: ~80-100px vertical space**

## File to Modify

| File | Lines | Changes |
|------|-------|---------|
| `src/components/globaldata-slides/GDSlide2IntelligenceGap.tsx` | 73-138 | Reduce padding, margins, and font sizes throughout |

## Specific Changes

### Definition Box (lines 75-83)
- Change `p-4` → `p-3`
- Change `mb-2` → `mb-1`
- Change body `text-base` → `text-sm`

### Root Cause Cards (lines 93-104)
- Change card `p-3` → `p-2`
- Change icon wrapper `w-8 h-8` → `w-6 h-6`, `mb-2` → `mb-1`
- Change icon `w-4 h-4` → `w-3 h-3`
- Change text margins `mt-1` → `mt-0.5`

### Impact Cards (lines 115-125)
- Change card `p-3` → `p-2`
- Change value `text-xl` → `text-lg`
- Change `mb-1` → `mb-0.5`, `mt-1` → `mt-0.5`

### Bottom Line Box (lines 132-137)
- Change `p-4` → `p-3`
- Change header `mb-1` → `mb-0.5`
- Change body `text-base` → `text-sm`

## Outcome

- All content fits within the 768p viewport without scrolling
- Maintains the color-coded swim lane design
- Preserves visual hierarchy and readability
- Consistent with the deck's compact styling policy

