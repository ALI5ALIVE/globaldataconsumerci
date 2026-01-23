

## Double Level 4 (OPERATIONAL) Images Size Again

### Current Values
After the previous doubling, the Metrics Gauges illustration in Layer 4 currently uses:
- Width: `(rightX - leftX) * 5.6`
- Height: `layerHeight * 6.4`

### New Values (doubled again)
- Width: `(rightX - leftX) * 11.2`
- Height: `layerHeight * 12.8`

---

### Technical Change

**File:** `src/components/globaldata-slides/GDPyramid3D.tsx`

**Lines 273-274 - Current:**
```tsx
const width = (rightX - leftX) * 5.6;
const height = layerHeight * 6.4;
```

**New (doubled again):**
```tsx
const width = (rightX - leftX) * 11.2;
const height = layerHeight * 12.8;
```

---

### Summary

| Layer | Previous Size | New Size | Change |
|-------|--------------|----------|--------|
| 4 (Operational) | 5.6 x 6.4 | 11.2 x 12.8 | 2x larger |

### File to Modify
- `src/components/globaldata-slides/GDPyramid3D.tsx` (lines 273-274)

