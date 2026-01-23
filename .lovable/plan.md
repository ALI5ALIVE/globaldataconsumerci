

## Fix Fragmentation Illustration Size and Reduce Layer 3 Circle

### Problem Analysis

**Issue 1: Fragmentation illustration not scaling**
The `GDFragmentationIllustration` component has a CSS constraint `max-w-[700px]` that caps its maximum width at 700px regardless of how large the parent container is. The multiplier increases (to 9.6 x 10.0) only make the container bigger, but the SVG inside stays at max 700px.

**Issue 2: Layer 3 circles too large**
The Quintuple Loop in Layer 3 currently uses multipliers of `1.9` (width) and `1.8` (height), which need to be reduced by 25%.

---

### Fixes

#### 1. Remove max-width constraint from GDFragmentationIllustration

**File:** `src/components/globaldata-slides/GDFragmentationIllustration.tsx`

**Line 47 - Current:**
```tsx
<svg viewBox="0 0 700 190" className="w-full max-w-[700px]">
```

**New:**
```tsx
<svg viewBox="0 0 700 190" className="w-full h-full">
```

This allows the SVG to fill the entire container and scale up with the foreignObject size.

---

#### 2. Reduce Layer 3 (Quintuple Loop) by 25%

**File:** `src/components/globaldata-slides/GDPyramid3D.tsx`

**Lines 298-299 - Current:**
```tsx
const width = (rightX - leftX) * 1.9;
const height = layerHeight * 1.8;
```

**New (multiplied by 0.75):**
```tsx
const width = (rightX - leftX) * 1.425;
const height = layerHeight * 1.35;
```

---

### Summary

| Component | Issue | Fix |
|-----------|-------|-----|
| Fragmentation (Layer 1) | `max-w-[700px]` caps size | Remove max-width, use `h-full` |
| Quintuple Loop (Layer 3) | Too large at 1.9 x 1.8 | Reduce to 1.425 x 1.35 (25% smaller) |

### Files to Modify
- `src/components/globaldata-slides/GDFragmentationIllustration.tsx` - Remove max-width constraint
- `src/components/globaldata-slides/GDPyramid3D.tsx` - Reduce Layer 3 multipliers

