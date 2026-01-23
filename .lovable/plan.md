

## Further Reduce Copy Box Width by 30% and Enlarge Pyramid

### Current State (After Previous Changes)

| Element | Current Value |
|---------|---------------|
| Copy box width | 203px |
| Apex position | `{ x: 650, y: 20 }` |
| Base left | `{ x: 40, y: 1100 }` |
| Base right | `{ x: 1260, y: 1100 }` |
| ViewBox (desktop) | `0 0 1700 1120` |
| Min dimensions | 800px × 640px |

---

### Proposed Changes

#### 1. Reduce Copy Box Width by Another 30%

Current: **203px** → New: **142px** (203 × 0.7)

**Lines affected:**
- Line 238: `width="203"` → `width="142"`
- Line 440: `width="203"` → `width="142"`

---

#### 2. Expand Pyramid Dimensions (~20% Larger)

With narrower copy boxes, the pyramid can expand further to the right.

**Current `layerConfig` (lines 53-57):**
```tsx
const layerConfig = {
  apex: { x: 650, y: 20 },
  baseLeft: { x: 40, y: 1100 },
  baseRight: { x: 1260, y: 1100 },
};
```

**New `layerConfig`:**
```tsx
const layerConfig = {
  apex: { x: 700, y: 10 },        // Move apex right and higher
  baseLeft: { x: 20, y: 1120 },   // Extend base further left and down
  baseRight: { x: 1380, y: 1120 }, // Extend right edge (gained space from narrower labels)
};
```

This gives:
- **New width at base:** 1360px (vs 1220px = +11%)
- **New height:** 1110px (10 → 1120)
- Overall ~15-20% larger visual

---

#### 3. Update Layer Bounds

Scale proportionally for 5 layers over new height range (10 → 1120 = 1110px total)

Each layer height: ~222px (1110 / 5)

**Current `layerBounds` (lines 60-66):**
```tsx
const layerBounds = {
  5: { top: 20, bottom: 236 },
  4: { top: 236, bottom: 452 },
  3: { top: 452, bottom: 668 },
  2: { top: 668, bottom: 884 },
  1: { top: 884, bottom: 1100 },
};
```

**New `layerBounds`:**
```tsx
const layerBounds = {
  5: { top: 10, bottom: 232 },    // PREDICTIVE - Apex
  4: { top: 232, bottom: 454 },   // OPERATIONAL
  3: { top: 454, bottom: 676 },   // CONNECTED
  2: { top: 676, bottom: 898 },   // MANAGED (with 5 silos)
  1: { top: 898, bottom: 1120 },  // FRAGMENTED - Base
};
```

---

#### 4. Update Label Positions

Recalculate to match new layer bounds and narrower boxes:

**Current `labelPositions` (lines 116-122):**
```tsx
const labelPositions = {
  5: { lineStartX: 880, lineStartY: 128, lineEndX: 1380, lineEndY: 128, labelX: 1390, labelY: 128 },
  4: { lineStartX: 960, lineStartY: 344, lineEndX: 1380, lineEndY: 344, labelX: 1390, labelY: 344 },
  3: { lineStartX: 1040, lineStartY: 560, lineEndX: 1380, lineEndY: 560, labelX: 1390, labelY: 560 },
  2: { lineStartX: 1100, lineStartY: 776, lineEndX: 1380, lineEndY: 776, labelX: 1390, labelY: 776 },
  1: { lineStartX: 1160, lineStartY: 992, lineEndX: 1380, lineEndY: 992, labelX: 1390, labelY: 992 },
};
```

**New `labelPositions`:**
```tsx
const labelPositions = {
  5: { lineStartX: 920, lineStartY: 121, lineEndX: 1480, lineEndY: 121, labelX: 1490, labelY: 121 },
  4: { lineStartX: 1000, lineStartY: 343, lineEndX: 1480, lineEndY: 343, labelX: 1490, labelY: 343 },
  3: { lineStartX: 1080, lineStartY: 565, lineEndX: 1480, lineEndY: 565, labelX: 1490, labelY: 565 },
  2: { lineStartX: 1160, lineStartY: 787, lineEndX: 1480, lineEndY: 787, labelX: 1490, labelY: 787 },
  1: { lineStartX: 1240, lineStartY: 1009, lineEndX: 1480, lineEndY: 1009, labelX: 1490, labelY: 1009 },
};
```

Key adjustments:
- Moved `lineEndX` from 1380 to 1480 (labels start further right, matching wider pyramid)
- Recalculated Y positions to center within new layer bounds

---

#### 5. Update ViewBox

Increase to accommodate the larger pyramid:

**Current (line 130):**
```tsx
const viewBox = isMobile ? "0 0 1500 1120" : "0 0 1700 1120";
```

**New:**
```tsx
const viewBox = isMobile ? "0 0 1500 1140" : "0 0 1750 1140";
```

---

#### 6. Update Min Dimensions

Increase for better icon visibility at larger pyramid size:

**Current (lines 149-150):**
```tsx
minWidth: isMobile ? "520px" : "800px",
minHeight: isMobile ? "460px" : "640px",
```

**New:**
```tsx
minWidth: isMobile ? "560px" : "880px",
minHeight: isMobile ? "500px" : "720px",
```

---

### Summary of Changes

| Location | Current | New |
|----------|---------|-----|
| Copy box width | 203px | 142px |
| Apex | (650, 20) | (700, 10) |
| Base left | (40, 1100) | (20, 1120) |
| Base right | (1260, 1100) | (1380, 1120) |
| ViewBox height | 1120 | 1140 |
| ViewBox width (desktop) | 1700 | 1750 |
| Min dimensions (desktop) | 800×640 | 880×720 |

---

### Expected Visual Result

After these changes:
- **Pyramid is ~20% larger** - more visual prominence and legible icons
- **Copy boxes are 30% narrower** - from 203px to 142px
- **Better proportions** - pyramid dominates ~80% of visual space
- **Icons more readable** - larger layer areas accommodate illustrations better

