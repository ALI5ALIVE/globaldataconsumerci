

# Rename Stage 4 from "Operational" to "Optimised" in Pyramid

## Issue Identified

The pyramid slide (Slide 6) currently uses **"OPERATIONAL"** for Stage 4, while Slides 7 (Maturity Curve) and 8 (ROI) use **"OPTIMISED"**. This creates messaging inconsistency across the presentation.

| Stage | Current (Slide 6) | Target (Slides 7/8) |
|-------|-------------------|---------------------|
| Stage 4 | "OPERATIONAL" / "Operational Intelligence" | **"OPTIMISED"** / "Optimised Intelligence" |
| Stage 5 | "PREDICTIVE" (correct) | "PREDICTIVE" (correct) |

---

## File to Modify

`src/components/globaldata-slides/GDSlide6ValuePyramid.tsx`

---

## Changes

### 1. Stage 4 ID and Labels (Lines 47-50)

**Current:**
```tsx
id: "OPERATIONAL",
level: 4,
headline: "Operational Intelligence",
sublabel: "Intelligent Ops",
```

**Change to:**
```tsx
id: "OPTIMISED",
level: 4,
headline: "Optimised Intelligence",
sublabel: "Intelligence in Action",
```

### 2. Update `layerOrder` Array (Line ~195)

**Current:**
```tsx
const layerOrder = ["FRAGMENTED", "MANAGED", "CONNECTED", "OPERATIONAL", "PREDICTIVE"];
```

**Change to:**
```tsx
const layerOrder = ["FRAGMENTED", "MANAGED", "CONNECTED", "OPTIMISED", "PREDICTIVE"];
```

### 3. Update `glowClasses` Mapping (Lines ~185-191)

**Current:**
```tsx
const glowClasses: Record<string, string> = {
  PREDICTIVE: "glow-transformational",
  OPERATIONAL: "glow-commercial",
  ...
};
```

**Change to:**
```tsx
const glowClasses: Record<string, string> = {
  PREDICTIVE: "glow-transformational",
  OPTIMISED: "glow-commercial",
  ...
};
```

### 4. Update Stage Timings (Lines ~197-203)

**Current:**
```tsx
{ stage: "OPERATIONAL", startPercent: 56 },
```

**Change to:**
```tsx
{ stage: "OPTIMISED", startPercent: 56 },
```

### 5. Update Stage 4 Copy to Match ROI Metrics

**whatItLooksLike[0]:** 
- Change from: "Advanced analytics integrated into daily workflows across multiple markets"
- Change to: "Intelligence embedded directly into decision workflows"

**result array:**
- Add: "Decisions in days, not weeks"
- Add: "70% faster decision cycles"

**valueProof.metrics:**
- Change from: `["Decision cycle -40-70%", "ROMI +25%", "Innovation hit +30%", "NPD hit rate ↑"]`
- Change to: `["Decision speed ↑ 70%", "ROMI +25%", "Launch success ↑", "NPD hit rate ↑"]`

**valueProof.roiStatement:**
- Change from: "60% of time on growth decisions, AI synthesizes complexity."
- Change to: "Decisions in days, not weeks. 70% faster decision cycles."

### 6. Update Stage 5 (Predictive) ROI Metrics

**result array:**
- Add: "Two times higher launch success"
- Add: "Thirty percent lower total cost of ownership"

**valueProof.metrics:**
- Change from: `["Category share +3-5pts", "35% faster response", "ROI 15:1+", "First-mover systematic"]`
- Change to: `["Decision speed ↑ 70%", "Launch success 2x", "TCO ↓ 30%", "First-mover systematic"]`

**valueProof.roiStatement:**
- Change from: "See disruption before it hits—and act first."
- Change to: "See disruption before it hits. 2x launch success, 30% lower TCO."

---

## Summary of All Stage Names After Update

| Level | ID | Headline | Sublabel |
|-------|-----|----------|----------|
| 1 | FRAGMENTED | Fragmented and Reactive Intelligence | Starting Point |
| 2 | MANAGED | Managed but Siloed Intelligence | Silo Optimisation |
| 3 | CONNECTED | Connected and Governed Intelligence | Unified Platform |
| 4 | **OPTIMISED** | **Optimised Intelligence** | **Intelligence in Action** |
| 5 | PREDICTIVE | Predictive and Adaptive Category Performance | AI-Driven Foresight |

---

## Outcome

After this update:
- Stage 4 will display as "Optimised Intelligence" in the pyramid and details panel
- Stage 5 remains "Predictive" (already correct)
- All stage names and ROI metrics will be consistent across Slides 6, 7, and 8
- Narration keywords ("stage four - optimised", "stage five - predictive") will align with visual labels

