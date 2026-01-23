
## Double Illustration Sizes and Show Only AVA at Apex

### Overview
Two main changes:
1. Double the size of illustrations in layers 1, 3, and 4
2. Replace the three-icon GDTransformationalIllustration with just the AVA icon at the apex (layer 5)

---

### 1. Double Illustration Sizes (Layers 1, 3, 4)

**File:** `src/components/globaldata-slides/GDPyramid3D.tsx`

#### Layer 4 (OPERATIONAL - Metrics Gauges) - Lines 261-262:
```tsx
// Current
const width = (rightX - leftX) * 1.4;
const height = layerHeight * 1.6;

// New (doubled)
const width = (rightX - leftX) * 2.8;
const height = layerHeight * 3.2;
```

#### Layer 3 (CONNECTED - Quintuple Loop) - Lines 286-287:
```tsx
// Current
const width = (rightX - leftX) * 0.95;
const height = layerHeight * 0.9;

// New (doubled)
const width = (rightX - leftX) * 1.9;
const height = layerHeight * 1.8;
```

#### Layer 1 (FRAGMENTED - Base) - Lines 311-312:
```tsx
// Current
const width = (rightX - leftX) * 2.4;
const height = layerHeight * 2.5;

// New (doubled)
const width = (rightX - leftX) * 4.8;
const height = layerHeight * 5.0;
```

---

### 2. Replace Apex with Just AVA Icon

**File:** `src/components/globaldata-slides/GDPyramid3D.tsx`

Replace the `GDTransformationalIllustration` component in Layer 5 (lines 229-252) with a simpler inline AVA-only display.

**Current (Lines 229-252):**
Uses `<GDTransformationalIllustration>` which shows:
- TrendingUp icon (Intelligence)
- "+" sign
- Sparkles icon (Ava)
- "=" sign  
- Trophy icon (Performance)

**New:**
Replace with a simple centered AVA icon only:

```tsx
{/* Layer 5 (PREDICTIVE - Apex) - AVA Only */}
{(() => {
  const bounds = layerBounds[5];
  const layerHeight = bounds.bottom - bounds.top;
  const centerY = (bounds.top + bounds.bottom) / 2;
  const leftX = getLeftX(centerY);
  const rightX = getRightX(centerY);
  const width = (rightX - leftX) * 0.8;
  const height = layerHeight * 0.8;
  const offsetX = (rightX - leftX - width) / 2;
  const offsetY = (layerHeight - height) / 2;
  
  return (
    <foreignObject
      x={leftX + offsetX}
      y={bounds.top + offsetY}
      width={width}
      height={height}
      className="pointer-events-auto"
    >
      <div className="w-full h-full flex items-center justify-center">
        <div
          className="p-5 sm:p-6 rounded-xl bg-gradient-to-b from-amber-400/30 to-amber-600/20 border-2 border-amber-400/50 cursor-pointer hover:scale-110 transition-all duration-300"
          style={{
            boxShadow: "0 0 32px 12px hsl(45, 93%, 58%, 0.6)",
          }}
          onClick={() => handleModuleClick("ava")}
        >
          <Sparkles 
            className="w-16 h-16 sm:w-20 sm:h-20 text-amber-400" 
            strokeWidth={2.5}
          />
        </div>
      </div>
    </foreignObject>
  );
})()}
```

This also requires adding `Sparkles` to the Lucide imports at the top of the file:
```tsx
import { BarChart3, ShoppingCart, Users, TrendingUp, FileSpreadsheet, Sparkles } from "lucide-react";
```

---

### Summary of Changes

| Layer | Current Size | New Size | Other Changes |
|-------|-------------|----------|---------------|
| 5 (Apex) | 1.8 x 1.8 | 0.8 x 0.8 | Replace 3-icon illustration with single AVA icon |
| 4 (Operational) | 1.4 x 1.6 | 2.8 x 3.2 | Doubled |
| 3 (Connected) | 0.95 x 0.9 | 1.9 x 1.8 | Doubled |
| 1 (Fragmented) | 2.4 x 2.5 | 4.8 x 5.0 | Doubled |

### Files to Modify
- `src/components/globaldata-slides/GDPyramid3D.tsx` - Size multipliers and apex illustration replacement

### Note
The `GDTransformationalIllustration` import can be removed since it will no longer be used, keeping the codebase clean.
