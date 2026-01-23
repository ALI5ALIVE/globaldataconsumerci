

## Scale Up Fragmentation Illustration, Pyramid, and Narrow Details Panel

### Overview
Three adjustments to the GDSlide6ValuePyramid layout:
1. **Make the fragment image bigger** - Scale up the `GDFragmentationIllustration` within the pyramid's Layer 1
2. **Make the pyramid 30% bigger** - Increase the overall pyramid dimensions and viewBox
3. **Make the main copy box 25% shorter in width** - Reduce the details panel column width from 50% to 37.5%

---

### 1. Scale Up Fragmentation Illustration

**File:** `src/components/globaldata-slides/GDPyramid3D.tsx`

The fragmentation illustration is embedded in Layer 1 (lines 304-327). Currently it uses multipliers of `1.8` (width) and `1.9` (height).

**Current (lines 311-312):**
```tsx
const width = (rightX - leftX) * 1.8;
const height = layerHeight * 1.9;
```

**New:**
```tsx
const width = (rightX - leftX) * 2.4;
const height = layerHeight * 2.5;
```

This makes the fragmentation illustration approximately 35% larger so it better fills the base layer of the pyramid.

---

### 2. Make the Pyramid 30% Bigger

**File:** `src/components/globaldata-slides/GDPyramid3D.tsx`

This requires scaling up the pyramid's coordinate system and related values.

**A. Increase pyramid configuration (lines 52-57):**
```tsx
// Current
apex: { x: 820, y: 5 },
baseLeft: { x: 5, y: 1350 },
baseRight: { x: 1635, y: 1350 },

// New (30% increase: 1350 * 1.3 = 1755, width scales proportionally)
apex: { x: 1066, y: 5 },
baseLeft: { x: 5, y: 1755 },
baseRight: { x: 2127, y: 1755 },
```

**B. Update layer bounds (lines 60-66):**
Scale all Y values by 1.3 factor:
```tsx
// Current
5: { top: 5, bottom: 274 },
4: { top: 274, bottom: 543 },
3: { top: 543, bottom: 812 },
2: { top: 812, bottom: 1081 },
1: { top: 1081, bottom: 1350 },

// New (scaled by 1.3)
5: { top: 5, bottom: 355 },
4: { top: 355, bottom: 705 },
3: { top: 705, bottom: 1055 },
2: { top: 1055, bottom: 1405 },
1: { top: 1405, bottom: 1755 },
```

**C. Update viewBox (line 129):**
```tsx
// Current
const viewBox = isMobile ? "0 0 1650 1370" : "0 0 1700 1370";

// New (30% larger)
const viewBox = isMobile ? "0 0 2145 1780" : "0 0 2210 1780";
```

**D. Update connector endX (line 120):**
```tsx
// Current
return { startX: rightX + 10, y: centerY, endX: 1680 };

// New
return { startX: rightX + 10, y: centerY, endX: 2185 };
```

**E. Update minimum dimensions (lines 148-149):**
```tsx
// Current
minWidth: isMobile ? "660px" : "1040px",
minHeight: isMobile ? "600px" : "900px",

// New (30% increase)
minWidth: isMobile ? "858px" : "1352px",
minHeight: isMobile ? "780px" : "1170px",
```

**F. Update Y-axis arrow positions (lines 193-197):**
```tsx
// Current
<line x1={40} y1={900} x2={40} y2={80} ... />
<polygon points="40,56 28,84 52,84" ... />
<text x={-500} y={20} ... />

// New (scaled)
<line x1={52} y1={1170} x2={52} y2={104} ... />
<polygon points="52,73 37,109 67,109" ... />
<text x={-650} y={26} ... />
```

---

### 3. Make the Details Panel 25% Narrower

**File:** `src/components/globaldata-slides/GDSlide6ValuePyramid.tsx`

The current layout uses `lg:grid-cols-2` which gives 50%/50% split. To make the copy box 25% shorter in width, change to a custom grid.

**Current (line 312):**
```tsx
<div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch h-full">
```

**New:**
```tsx
<div className="grid lg:grid-cols-[3fr_2fr] gap-6 lg:gap-8 items-stretch h-full">
```

This creates a 60%/40% split instead of 50%/50%, making the pyramid area larger and the details panel 25% narrower (from 50% down to ~37.5%).

---

### Summary of Changes

| Component | Current | New | Effect |
|-----------|---------|-----|--------|
| Fragmentation width multiplier | 1.8 | 2.4 | +33% larger |
| Fragmentation height multiplier | 1.9 | 2.5 | +32% larger |
| Pyramid apex X | 820 | 1066 | 30% scale |
| Pyramid base Y | 1350 | 1755 | 30% scale |
| ViewBox | 1700x1370 | 2210x1780 | 30% larger |
| Grid layout | 50/50 | 60/40 | Details panel 25% narrower |

### Files to Modify
- `src/components/globaldata-slides/GDPyramid3D.tsx` - Pyramid scaling and fragmentation size
- `src/components/globaldata-slides/GDSlide6ValuePyramid.tsx` - Grid column ratio

