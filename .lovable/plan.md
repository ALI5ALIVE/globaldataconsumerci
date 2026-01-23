

## Reduce Layer 3 Circles by 15%

### Current Values
The Quintuple Loop in Layer 3 currently uses:
- Width: `1.425`
- Height: `1.35`

### New Values (multiplied by 0.85)
- Width: `1.425 × 0.85 = 1.21`
- Height: `1.35 × 0.85 = 1.15`

---

### Change

**File:** `src/components/globaldata-slides/GDPyramid3D.tsx`

**Lines 298-299 - Current:**
```tsx
const width = (rightX - leftX) * 1.425;
const height = layerHeight * 1.35;
```

**New:**
```tsx
const width = (rightX - leftX) * 1.21;
const height = layerHeight * 1.15;
```

---

### Summary

| Layer | Current Size | New Size | Change |
|-------|-------------|----------|--------|
| 3 (Connected) | 1.425 × 1.35 | 1.21 × 1.15 | 15% smaller |

### File to Modify
- `src/components/globaldata-slides/GDPyramid3D.tsx`

