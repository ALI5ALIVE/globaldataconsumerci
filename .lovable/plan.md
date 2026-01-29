

# Plan: Reduce Vertical Height and Center Details Panel on Pyramid Slide

## Problem

The details panel (copy box) on the **Intelligence Maturity Ladder** slide (Slide 7) is:
1. **Too long vertically** - stretches to fill available height
2. **Disproportionate** - taller than needed relative to the pyramid

## Solution

Adjust the layout to:
1. **Constrain the vertical height** of the details panel with a maximum height
2. **Center both the pyramid and panel vertically** for visual balance
3. **Maintain current width** (the width is fine as-is)

## Technical Changes

### File: `src/components/globaldata-slides/GDSlide6ValuePyramid.tsx`

**Current Main Container (Line 263):**
```tsx
<div className="grid lg:grid-cols-[3fr_2fr] gap-3 lg:gap-4 items-stretch h-full max-h-full overflow-hidden">
```

**New Main Container:**
```tsx
<div className="grid lg:grid-cols-[3fr_2fr] gap-3 lg:gap-4 items-center h-full max-h-full overflow-hidden">
```
- Change `items-stretch` to `items-center` to vertically center both elements

**Current Details Panel (Lines 283-285):**
```tsx
<div className="h-full overflow-y-auto bg-card/30 rounded-lg p-4 border border-border/30 flex flex-col">
```

**New Details Panel:**
```tsx
<div className="max-h-[380px] overflow-y-auto bg-card/30 rounded-lg p-4 border border-border/30 flex flex-col">
```
- Remove `h-full` (which stretches to fill container)
- Add `max-h-[380px]` to cap the vertical height

## Layout Comparison

**Before (Too Long Vertically):**
```
┌──────────────────────────────────────────────────────────────┐
│  ┌─────────────────────────────┐  ┌────────────────────────┐ │
│  │                             │  │                        │ │
│  │                             │  │   DETAILS PANEL        │ │
│  │         PYRAMID             │  │   (stretches full      │ │
│  │                             │  │    height - too long)  │ │
│  │                             │  │                        │ │
│  │                             │  │                        │ │
│  │                             │  │                        │ │
│  └─────────────────────────────┘  └────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

**After (Constrained & Centered):**
```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  ┌─────────────────────────────┐  ┌────────────────────────┐ │
│  │                             │  │   DETAILS PANEL        │ │
│  │         PYRAMID             │  │   (max-height: 380px)  │ │
│  │                             │  │   CENTERED             │ │
│  │                             │  └────────────────────────┘ │
│  │                             │                             │
│  └─────────────────────────────┘                             │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

## Specific Code Changes

| Line | Current | New |
|------|---------|-----|
| 263 | `items-stretch` | `items-center` |
| 283 | `h-full overflow-y-auto` | `max-h-[380px] overflow-y-auto` |

## Summary

| Change | Purpose |
|--------|---------|
| `items-stretch` → `items-center` | Vertically center both pyramid and panel |
| `h-full` → `max-h-[380px]` | Cap vertical height to ~380px instead of stretching |

## Result

After these changes:
- The details panel will have a **maximum vertical height of 380px**
- Content will scroll if it exceeds this height (overflow-y-auto preserved)
- Both pyramid and panel will be **vertically centered** together
- Width remains unchanged as requested

