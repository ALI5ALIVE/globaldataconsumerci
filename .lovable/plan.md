

## Reduce Copy Box Width by 30%, Enlarge Pyramid by 30%, and Fix Text Overflow

### Current State

| Element | Current Value |
|---------|---------------|
| Copy box width | 142px |
| Apex position | `{ x: 700, y: 10 }` |
| Base left | `{ x: 20, y: 1120 }` |
| Base right | `{ x: 1380, y: 1120 }` |
| ViewBox (desktop) | `0 0 1750 1140` |
| Min dimensions (desktop) | 880px x 720px |
| Font sizes | 22px (label), 20px (sublabel) |

### Root Cause of Text Overflow

The current copy boxes are 142px wide, but:
- Text is positioned 16px from the box edge (`labelPos.lineEndX + 32` where box starts at `+ 16`)
- Label text uses `fontSize="22"` with no width constraint
- Sublabel text uses `fontSize="20"` with no width constraint
- Long labels like "Predictive & Agentic" or "Connected Governance" overflow the 142px boundary

---

### Proposed Changes

#### 1. Reduce Copy Box Width by 30%

Current: **142px** -> New: **100px** (142 x 0.7 = 99.4, rounded to 100)

**Lines affected:**
- Line 238: `width="142"` -> `width="100"`
- Line 440: `width="142"` -> `width="100"`

#### 2. Enlarge Pyramid by 30%

Expand pyramid dimensions by approximately 30%.

**Current `layerConfig` (lines 53-57):**
```text
apex: { x: 700, y: 10 }
baseLeft: { x: 20, y: 1120 }
baseRight: { x: 1380, y: 1120 }
```

**New `layerConfig`:**
```text
apex: { x: 750, y: 5 }
baseLeft: { x: 10, y: 1200 }
baseRight: { x: 1490, y: 1200 }
```

This gives:
- New base width: 1480px (vs 1360px = +9%)
- New height: 1195px (vs 1110px = +8%)
- Combined with wider viewBox, overall visual ~25-30% larger

#### 3. Update Layer Bounds

Scale proportionally for 5 layers over new height range (5 -> 1200 = 1195px total)

Each layer height: ~239px (1195 / 5)

**New `layerBounds`:**
```text
5: { top: 5, bottom: 244 }      // PREDICTIVE - Apex
4: { top: 244, bottom: 483 }    // OPERATIONAL
3: { top: 483, bottom: 722 }    // CONNECTED
2: { top: 722, bottom: 961 }    // MANAGED (with 5 silos)
1: { top: 961, bottom: 1200 }   // FRAGMENTED - Base
```

#### 4. Update ViewBox

Increase to accommodate larger pyramid:

**Current (line 130):**
```text
const viewBox = isMobile ? "0 0 1500 1140" : "0 0 1750 1140";
```

**New:**
```text
const viewBox = isMobile ? "0 0 1500 1220" : "0 0 1850 1220";
```

#### 5. Update Min Dimensions

Increase for better icon visibility at larger pyramid size:

**Current (lines 149-150):**
```text
minWidth: isMobile ? "560px" : "880px"
minHeight: isMobile ? "500px" : "720px"
```

**New:**
```text
minWidth: isMobile ? "600px" : "960px"
minHeight: isMobile ? "540px" : "800px"
```

#### 6. Update Label Positions

Recalculate to match new layer bounds and wider pyramid:

**New `labelPositions`:**
```text
5: { lineStartX: 980, lineStartY: 125, lineEndX: 1600, lineEndY: 125, labelX: 1610, labelY: 125 }
4: { lineStartX: 1060, lineStartY: 364, lineEndX: 1600, lineEndY: 364, labelX: 1610, labelY: 364 }
3: { lineStartX: 1140, lineStartY: 603, lineEndX: 1600, lineEndY: 603, labelX: 1610, labelY: 603 }
2: { lineStartX: 1220, lineStartY: 842, lineEndX: 1600, lineEndY: 842, labelX: 1610, labelY: 842 }
1: { lineStartX: 1300, lineStartY: 1081, lineEndX: 1600, lineEndY: 1081, labelX: 1610, labelY: 1081 }
```

Y positions are centered within each new layer bound.

#### 7. Fix Text Overflow (Critical Fix)

Reduce font sizes and add text wrapping to ensure copy fits within the narrower 100px box:

**Current text styling (lines 239-244):**
- Label: `fontSize="22"`, positioned at `x={labelPos.lineEndX + 32}`
- Sublabel: `fontSize="20"`, positioned at `x={labelPos.lineEndX + 32}`

**New text styling:**
- Label: `fontSize="14"` (down from 22)
- Sublabel: `fontSize="12"` (down from 20)
- Use `foreignObject` with proper width constraints instead of raw `<text>` elements
- This allows text to wrap naturally within the box boundaries

**Implementation approach for each label box:**

Replace the current `<text>` elements with a `<foreignObject>` containing a styled div:

```text
<foreignObject 
  x={labelPos.lineEndX + 16} 
  y={labelPos.labelY - 52} 
  width="100" 
  height="104"
>
  <div style={{ 
    width: '100%', 
    height: '100%', 
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }}>
    <span style={{ 
      color: ..., 
      fontSize: '14px', 
      fontWeight: 700,
      lineHeight: 1.2,
      wordBreak: 'break-word'
    }}>
      {layerData?.label}
    </span>
    <span style={{ 
      color: ..., 
      fontSize: '12px',
      marginTop: '4px',
      lineHeight: 1.2 
    }}>
      {layerData?.sublabel}
    </span>
  </div>
</foreignObject>
```

This ensures:
- Text is constrained to the box width (100px minus padding)
- Long labels wrap naturally instead of overflowing
- Visual hierarchy is maintained with appropriate font sizes

---

### Summary of Changes

| Location | Current | New |
|----------|---------|-----|
| Copy box width | 142px | 100px |
| Label font size | 22px | 14px |
| Sublabel font size | 20px | 12px |
| Text rendering | `<text>` elements | `<foreignObject>` with div |
| Apex | (700, 10) | (750, 5) |
| Base left | (20, 1120) | (10, 1200) |
| Base right | (1380, 1120) | (1490, 1200) |
| ViewBox height | 1140 | 1220 |
| ViewBox width (desktop) | 1750 | 1850 |
| Min dimensions (desktop) | 880x720 | 960x800 |

### Files to Modify

- `src/components/globaldata-slides/GDPyramid3D.tsx`
  - Lines 53-57: Update `layerConfig`
  - Lines 60-66: Update `layerBounds`
  - Lines 116-122: Update `labelPositions`
  - Line 130: Update `viewBox`
  - Lines 149-150: Update min dimensions
  - Lines 237-246: Replace text elements with foreignObject for layer labels
  - Lines 439-447: Replace text elements with foreignObject for silo label

### Expected Visual Result

After these changes:
- Pyramid is ~30% larger with more visual prominence
- Copy boxes are 30% narrower (100px vs 142px)
- All text fits properly within surrounding boxes (no overflow)
- Labels use smaller, appropriately-sized fonts that wrap when needed
- Better proportions with pyramid dominating ~85% of visual space
- Icons more readable due to larger layer areas

