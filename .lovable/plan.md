

## Fix Pyramid Stage Numbering and AI Labels

### Issues Identified

1. **Stage numbering is inverted** - Currently Level 1 is at the apex (Predictive) and Level 5 is at the base (Fragmented). This is confusing; the natural expectation is Stage 1 at the bottom and Stage 5 at the top.

2. **Annotation arrows are unreadable** - The "AI-Enabled" and "AI-Blocked" text annotations next to arrows on the right side of the pyramid are hard to read and clutter the visual.

3. **AI Readiness indicator logic is confusing** - The `GDDetailsPanel.tsx` has inverted logic with comments like "Stages 4-5 in inverted order" which makes maintenance difficult.

---

### Changes Required

#### 1. Remove AI Annotation Arrows from Pyramid

In `GDPyramid3D.tsx`, remove lines 502-515 (the annotation arrows and "AI-Enabled"/"AI-Blocked" text labels).

**Keep**: The "AI GATEWAY" dashed line and label box (lines 467-500) - this is readable and important.

**Remove**:
```tsx
{/* Annotation arrows and labels */}
<g transform={`translate(${rightX + 20}, ${markerY})`}>
  {/* Arrow pointing up */}
  <line x1="0" y1="-10" x2="0" y2="-60" ... />
  <text x="10" y="-35" ...>AI-Enabled</text>
  
  {/* Arrow pointing down */}
  <line x1="0" y1="10" x2="0" y2="60" ... />
  <text x="10" y="40" ...>AI-Blocked</text>
</g>
```

---

#### 2. Correct Stage Numbering (Level 1 = Bottom, Level 5 = Apex)

Update the `layerColors`, `layerBounds`, and `labelPositions` mappings in `GDPyramid3D.tsx` to use correct numbering:

| Stage | Position | Name | Current Level | New Level |
|-------|----------|------|---------------|-----------|
| FRAGMENTED | Base | Reactive | 5 | 1 |
| MANAGED | Above base | Siloed | 4 | 2 |
| CONNECTED | Middle | The Platform Shift | 3 | 3 (unchanged) |
| OPERATIONAL | Below apex | Optimised | 2 | 4 |
| PREDICTIVE | Apex | AI-Driven | 1 | 5 |

**Files to update:**
- `GDPyramid3D.tsx` - Layer colors, bounds, render order
- `GDSlide6ValuePyramid.tsx` - Layer metadata (levels 1-5)
- `GDDetailsPanel.tsx` - AI Readiness logic

---

#### 3. Fix AI Readiness Indicator Logic

Update `GDDetailsPanel.tsx` with corrected logic:

```tsx
const AIReadinessIndicator = ({ level }: { level: number }) => {
  if (level <= 2) {
    // Stages 1-2 (FRAGMENTED/MANAGED) = AI Blocked
    return (
      <div className="...bg-red-500/15...">
        <Lock className="..." />
        <span>AI Blocked</span>
      </div>
    );
  } else if (level === 3) {
    // Stage 3 (CONNECTED) = AI Enabled
    return (
      <div className="...bg-emerald-500/15...">
        <Cpu className="..." />
        <span>AI Enabled</span>
      </div>
    );
  } else {
    // Stages 4-5 (OPERATIONAL/PREDICTIVE) = AI Optimized
    return (
      <div className="...bg-amber-500/15...">
        <Sparkles className="..." />
        <span>AI Optimized</span>
      </div>
    );
  }
};
```

---

### Technical Implementation

#### GDPyramid3D.tsx Changes

**Step 1: Update layer colors mapping (lines 26-32)**
```tsx
// CORRECTED: Level 1 = base (Red), Level 5 = apex (Gold)
const layerColors = {
  1: { main: "hsl(0, 70%, 50%)", dark: "hsl(0, 70%, 38%)", glow: "hsl(0, 70%, 50%)" },        // FRAGMENTED - Red (base)
  2: { main: "hsl(199, 89%, 48%)", dark: "hsl(199, 89%, 36%)", glow: "hsl(199, 89%, 48%)" },  // MANAGED - Blue
  3: { main: "hsl(195, 100%, 45%)", dark: "hsl(195, 100%, 35%)", glow: "hsl(195, 100%, 45%)" },  // CONNECTED - Sky Blue
  4: { main: "hsl(280, 65%, 55%)", dark: "hsl(280, 65%, 42%)", glow: "hsl(280, 65%, 55%)" },  // OPERATIONAL - Purple
  5: { main: "hsl(45, 93%, 58%)", dark: "hsl(45, 93%, 45%)", glow: "hsl(45, 93%, 58%)" },     // PREDICTIVE - Gold (apex)
};
```

**Step 2: Update layer bounds (lines 60-66)**
```tsx
// CORRECTED: Level 1 at base, Level 5 at apex
const layerBounds = {
  5: { top: 40, bottom: 248 },    // PREDICTIVE - Apex
  4: { top: 248, bottom: 456 },   // OPERATIONAL
  3: { top: 456, bottom: 664 },   // CONNECTED
  2: { top: 664, bottom: 872 },   // MANAGED (with 5 silos)
  1: { top: 872, bottom: 1080 },  // FRAGMENTED - Base
};
```

**Step 3: Update render order (line 202)**
```tsx
// Render from apex (5) to base (1), excluding silos layer (2)
{[5, 4, 3, 1].map((level) => {
```

**Step 4: Update silo layer references from level 4 to level 2**
All references to `layerBounds[4]` become `layerBounds[2]`

**Step 5: Remove annotation arrows (lines 502-515)**
Delete the entire `<g transform={...}>` block containing AI-Enabled/AI-Blocked text

---

#### GDSlide6ValuePyramid.tsx Changes

Update the layer metadata array so levels match the new numbering:

| Layer Name | Current `level` | New `level` |
|------------|-----------------|-------------|
| FRAGMENTED | 5 | 1 |
| MANAGED | 4 | 2 |
| CONNECTED | 3 | 3 |
| OPERATIONAL | 2 | 4 |
| PREDICTIVE | 1 | 5 |

---

### Summary

| File | Changes |
|------|---------|
| `GDPyramid3D.tsx` | Remove AI annotation arrows; swap layer numbering (1↔5, 2↔4); update silo references |
| `GDDetailsPanel.tsx` | Simplify AI Readiness logic (no more "inverted" comments) |
| `GDSlide6ValuePyramid.tsx` | Update level values in layer metadata array |

After these changes:
- Stage 1 (FRAGMENTED) will be at the bottom with "AI Blocked" status
- Stage 3 (CONNECTED) remains in the middle with "AI Enabled" and the AI GATEWAY marker
- Stage 5 (PREDICTIVE) will be at the apex with "AI Optimized" status
- The cluttered annotation arrows will be removed, keeping only the clean "AI GATEWAY" label

