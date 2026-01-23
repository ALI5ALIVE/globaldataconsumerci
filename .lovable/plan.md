

## Double Level 4 (OPERATIONAL) Images Size

### Current Values
The Metrics Gauges illustration in Layer 4 currently uses:
- Width: `(rightX - leftX) * 2.8`
- Height: `layerHeight * 3.2`

### New Values (doubled)
- Width: `(rightX - leftX) * 5.6`
- Height: `layerHeight * 6.4`

---

### Technical Change

**File:** `src/components/globaldata-slides/GDPyramid3D.tsx`

**Lines 273-274 - Current:**
```tsx
const width = (rightX - leftX) * 2.8;
const height = layerHeight * 3.2;
```

**New (doubled):**
```tsx
const width = (rightX - leftX) * 5.6;
const height = layerHeight * 6.4;
```

---

### Summary

| Layer | Current Size | New Size | Change |
|-------|-------------|----------|--------|
| 4 (Operational) | 2.8 x 3.2 | 5.6 x 6.4 | 2x larger |

### File to Modify
- `src/components/globaldata-slides/GDPyramid3D.tsx` (lines 273-274)

