

## Fix GDQuintupleLoop Overflow - Contain Within Blue Layer

### Problem
The recent scaling changes increased the `GDQuintupleLoop` container multipliers to `2.2` (width) and `2.4` (height), causing the component to overflow outside the blue "CONNECTED" layer (layer 3) of the pyramid.

### Current Values (Causing Overflow)

**In `GDPyramid3D.tsx` (lines 314-315):**
```tsx
const width = (rightX - leftX) * 2.2;
const height = layerHeight * 2.4;
```

Layer 3 bounds:
- Top: 543, Bottom: 812
- Layer height: 269px
- With 2.4x multiplier, height becomes ~645px (overflows by ~376px!)

### Solution

#### 1. Reduce Container Multipliers in GDPyramid3D.tsx

Reduce multipliers back to values that keep the component within bounds:

**Lines 314-315:**
```tsx
// Current (overflow)
const width = (rightX - leftX) * 2.2;
const height = layerHeight * 2.4;

// Fixed (contained)
const width = (rightX - leftX) * 0.95;
const height = layerHeight * 0.9;
```

Using `0.95` and `0.9` keeps the component comfortably within the layer with small margins.

#### 2. Adjust GDQuintupleLoop Internal Dimensions

Scale down the internal SVG to fit properly within the constrained container:

**In `GDQuintupleLoop.tsx` (lines 19-22):**
```tsx
// Current (too large)
const loopRadius = 85;
const loopSpacing = 130;
const startX = 140;
const cy = 130;

// Fixed (proportional)
const loopRadius = 50;
const loopSpacing = 80;
const startX = 90;
const cy = 85;
```

**Line 26 - ViewBox:**
```tsx
// Current
<svg viewBox="0 0 800 320" className="w-full h-full">

// Fixed
<svg viewBox="0 0 500 200" className="w-full h-full">
```

**Line 58 - Central glow:**
```tsx
// Current
<circle cx="400" cy={cy} r="260" fill="url(#gdCenterGlow)" />

// Fixed
<circle cx="250" cy={cy} r="160" fill="url(#gdCenterGlow)" />
```

**Lines 66-67 - Intersection ellipses:**
```tsx
// Current
rx="30"
ry="52"

// Fixed
rx="18"
ry="32"
```

**Line 100 - Module label font size:**
```tsx
// Current
fontSize="18"

// Fixed
fontSize="13"
```

**Lines 113-117 - Unified Taxonomy label:**
```tsx
// Current
x="400"
y="280"
fontSize="22"

// Fixed
x="250"
y="175"
fontSize="15"
```

### Summary of Changes

| File | Element | Current | New |
|------|---------|---------|-----|
| GDPyramid3D.tsx | width multiplier | 2.2 | 0.95 |
| GDPyramid3D.tsx | height multiplier | 2.4 | 0.9 |
| GDQuintupleLoop.tsx | loopRadius | 85 | 50 |
| GDQuintupleLoop.tsx | loopSpacing | 80 | 80 |
| GDQuintupleLoop.tsx | viewBox | 0 0 800 320 | 0 0 500 200 |
| GDQuintupleLoop.tsx | center glow r | 260 | 160 |
| GDQuintupleLoop.tsx | module font | 18px | 13px |
| GDQuintupleLoop.tsx | taxonomy font | 22px | 15px |

### Files to Modify
- `src/components/globaldata-slides/GDPyramid3D.tsx` (lines 314-315)
- `src/components/globaldata-slides/GDQuintupleLoop.tsx` (multiple lines)

### Expected Result
- The quintuple loop visualization stays fully contained within the blue "CONNECTED" layer
- Proportional scaling maintains visual clarity
- No overflow into adjacent pyramid layers

