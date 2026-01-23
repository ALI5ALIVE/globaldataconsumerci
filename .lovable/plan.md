

## Reduce Copy Box Width by 30% and Make Pyramid Bigger

### Current State Analysis

**Current Pyramid Dimensions:**
- Apex: `x: 750, y: 40`
- Base Left: `x: 80, y: 1080`
- Base Right: `x: 1420, y: 1080`
- Pyramid width at base: 1340px (1420 - 80)
- Pyramid height: 1040px (1080 - 40)

**Current Copy Box Dimensions:**
- Width: 290px (hardcoded in `rect` elements)
- Position: starts at `labelPos.lineEndX + 16` = 1496px

**Current ViewBox:**
- Desktop: `0 0 1800 1100`
- Mobile: `0 0 1500 1100`

---

### Proposed Changes

#### 1. Reduce Copy Box Width by 30%

Current width: **290px** → New width: **203px** (290 × 0.7)

**Files affected:**
- `GDPyramid3D.tsx` lines 238, 440

Change:
```tsx
// From:
width="290"

// To:
width="203"
```

#### 2. Make Pyramid Taller and Wider

Expand the pyramid by ~15-20% to fill more of the visual space and make icons more legible.

**Current apex/base configuration (lines 53-57):**
```tsx
const layerConfig = {
  apex: { x: 750, y: 40 },
  baseLeft: { x: 80, y: 1080 },
  baseRight: { x: 1420, y: 1080 },
};
```

**Proposed new configuration:**
```tsx
const layerConfig = {
  apex: { x: 650, y: 20 },        // Move apex slightly left and higher
  baseLeft: { x: 40, y: 1100 },   // Extend base further left and down
  baseRight: { x: 1260, y: 1100 }, // Keep right edge similar for label space
};
```

This gives:
- **New width at base:** 1220px (slightly narrower on right to leave room for labels)
- **New height:** 1080px (20 → 1100)

But wait - we also need to increase the viewBox height to accommodate the taller pyramid and adjust layer bounds.

**Updated layerBounds (lines 60-66):**
Scale proportionally to maintain 5 equal-ish layers over the new height range (20 → 1100 = 1080px total)

Each layer height: ~216px (1080 / 5)

```tsx
const layerBounds = {
  5: { top: 20, bottom: 236 },    // PREDICTIVE - Apex
  4: { top: 236, bottom: 452 },   // OPERATIONAL
  3: { top: 452, bottom: 668 },   // CONNECTED
  2: { top: 668, bottom: 884 },   // MANAGED (with 5 silos)
  1: { top: 884, bottom: 1100 },  // FRAGMENTED - Base
};
```

#### 3. Update ViewBox

Increase viewBox height to fit the taller pyramid:
```tsx
// From:
const viewBox = isMobile ? "0 0 1500 1100" : "0 0 1800 1100";

// To:
const viewBox = isMobile ? "0 0 1500 1120" : "0 0 1700 1120";
```

Also reduce desktop width slightly since the narrower copy boxes free up horizontal space.

#### 4. Adjust Label Positions

Move label connector lines and boxes to align with the new layer bounds:

```tsx
const labelPositions = {
  5: { lineStartX: 880, lineStartY: 128, lineEndX: 1380, lineEndY: 128, labelX: 1390, labelY: 128 },
  4: { lineStartX: 960, lineStartY: 344, lineEndX: 1380, lineEndY: 344, labelX: 1390, labelY: 344 },
  3: { lineStartX: 1040, lineStartY: 560, lineEndX: 1380, lineEndY: 560, labelX: 1390, labelY: 560 },
  2: { lineStartX: 1100, lineStartY: 776, lineEndX: 1380, lineEndY: 776, labelX: 1390, labelY: 776 },
  1: { lineStartX: 1160, lineStartY: 992, lineEndX: 1380, lineEndY: 992, labelX: 1390, labelY: 992 },
};
```

Key adjustments:
- Moved `lineEndX` from 1480 to 1380 (100px left)
- Recalculated `lineStartY` / `labelY` to center within new layer bounds

#### 5. Update Min Dimensions

Increase minimum dimensions for better icon visibility:

```tsx
// From:
minWidth: isMobile ? "480px" : "720px",
minHeight: isMobile ? "420px" : "570px",

// To:
minWidth: isMobile ? "520px" : "800px",
minHeight: isMobile ? "460px" : "640px",
```

---

### Summary of File Changes

| File | Lines | Change |
|------|-------|--------|
| `GDPyramid3D.tsx` | 53-57 | Update `layerConfig` for larger pyramid |
| `GDPyramid3D.tsx` | 60-66 | Update `layerBounds` for new proportions |
| `GDPyramid3D.tsx` | 116-122 | Update `labelPositions` for new layer heights |
| `GDPyramid3D.tsx` | 130 | Update `viewBox` dimensions |
| `GDPyramid3D.tsx` | 148-151 | Update `minWidth`/`minHeight` |
| `GDPyramid3D.tsx` | 238 | Reduce copy box width to 203px |
| `GDPyramid3D.tsx` | 440 | Reduce silos copy box width to 203px |

---

### Expected Visual Result

After these changes:
- **Pyramid is ~15% taller and wider** - more visual prominence
- **Icons inside layers are more legible** - larger layer areas mean larger embedded illustrations
- **Copy boxes are 30% narrower** - from 290px to 203px, less visual clutter
- **Better balance** - pyramid dominates the left ~75% of the space, labels fit cleanly on the right

