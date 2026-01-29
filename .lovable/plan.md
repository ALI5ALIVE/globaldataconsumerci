

# Plan: Fix Stage Color Bars Not Rendering on Slide 9

## Issue

The maturity stage bars (Fragmented, Managed, Connected, Optimised, Predictive) are showing only the stage names without the colored bars. The bars have a `height` set correctly but the `background` color is not rendering.

## Root Cause

The HSL color values in `stageConfig` use the modern CSS Color Level 4 space-separated format:
```javascript
{ name: "Fragmented", color: "hsl(0 70% 50%)" }
```

When used in inline styles with template literals for `linear-gradient`, browser compatibility can be inconsistent. The comma-separated HSL format has better cross-browser support:
```javascript
{ name: "Fragmented", color: "hsl(0, 70%, 50%)" }
```

## Solution

Update all HSL color values in the `stageConfig` array to use the comma-separated format for maximum browser compatibility.

### File: `src/components/globaldata-slides/GDSlide8ROI.tsx`

**Lines 38-44 - Update `stageConfig` colors:**

| Current | Fixed |
|---------|-------|
| `hsl(0 70% 50%)` | `hsl(0, 70%, 50%)` |
| `hsl(199 89% 48%)` | `hsl(199, 89%, 48%)` |
| `hsl(173 80% 40%)` | `hsl(173, 80%, 40%)` |
| `hsl(280 65% 55%)` | `hsl(280, 65%, 55%)` |
| `hsl(45 93% 58%)` | `hsl(45, 93%, 58%)` |

## Technical Details

The fix simply adds commas between the HSL values:

```javascript
const stageConfig = [
  { name: "Fragmented", color: "hsl(0, 70%, 50%)" },
  { name: "Managed", color: "hsl(199, 89%, 48%)" },
  { name: "Connected", color: "hsl(173, 80%, 40%)" },
  { name: "Optimised", color: "hsl(280, 65%, 55%)" },
  { name: "Predictive", color: "hsl(45, 93%, 58%)" },
];
```

## Files Changed

| File | Lines | Change |
|------|-------|--------|
| `src/components/globaldata-slides/GDSlide8ROI.tsx` | 38-44 | Add commas to HSL color values for browser compatibility |

## Outcome

- All five stage bars will render with their correct colors (red, sky blue, teal, purple, gold)
- Bar heights will correctly increase from Fragmented (shortest) to Predictive (tallest)
- Stage name labels will display in their matching colors below each bar

