
# Remove AI Gateway from Pyramid and Roadmap

## Overview
Remove the "AI GATEWAY" visual elements from both the Value Pyramid (Slide 6) and the Roadmap/Maturity Curve (Slide 7). This will create cleaner visualizations without the threshold marker.

## Files to Update

### 1. `src/components/globaldata-slides/GDPyramid3D.tsx`
**Remove:** Lines 455-501 (the entire AI GATEWAY threshold marker block)

This section renders:
- A dashed gold line between Layer 3 (Connected) and Layer 4 (Operational)
- A gold rectangle with "AI GATEWAY" text on the left side of the pyramid

**Change:** Delete the entire block that starts with:
```jsx
{/* AI GATEWAY threshold marker between Layer 3 and Layer 4 */}
{!isMobile && (() => {
  ...
})()}
```

---

### 2. `src/components/globaldata-slides/GDSlide7MaturityCurve.tsx`
**Remove:** Lines 316-351 (the AI GATEWAY threshold line and label on the maturity curve)

This section renders:
- A horizontal dashed gold line at the Stage 3 level (y=460)
- A gold-bordered rectangle with "AI GATEWAY" text

**Change:** Delete the entire block that starts with:
```jsx
{/* AI THRESHOLD line at Stage 3 */}
{!isMobile && (
  <g className={`transition-opacity duration-700 delay-300 ...`}>
    <line ... />
    <rect ... />
    <text>AI GATEWAY</text>
  </g>
)}
```

---

## Summary of Removals

| File | What's Removed | Visual Impact |
|------|----------------|---------------|
| `GDPyramid3D.tsx` | Dashed gold line + "AI GATEWAY" label between layers 3-4 | Cleaner pyramid without threshold marker |
| `GDSlide7MaturityCurve.tsx` | Horizontal dashed line + "AI GATEWAY" label at Stage 3 level | Cleaner curve with only stage markers and "CONNECTED INTELLIGENCE" label |

---

## What Remains
- The "CONNECTED INTELLIGENCE" vertical marker on the roadmap (lines 400-408) will remain intact
- All pyramid layers and their illustrations remain unchanged
- All maturity curve stage markers and labels remain unchanged

---

## Outcome
Both slides will display their core visualizations without the "AI GATEWAY" annotations, providing a simpler visual hierarchy while maintaining all other informational elements.
