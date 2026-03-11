

# Plan: Replace Card Layout with SVG Maturity Curve

Replace the current button-card layout in `CJSlideMaturityJourney.tsx` with an actual hockey-stick SVG curve graph, similar to the one in `MaturityCurveVisualization.tsx` but adapted for the 4-stage consumer journey context.

## Changes — `src/components/consumer-journey/CJSlideMaturityJourney.tsx`

Replace the stage-selector buttons and dashed SVG line with a proper SVG maturity curve:

- **SVG hockey-stick curve** with gradient stroke (red → teal → plum → sky), axes labeled "Value / Capability" (Y) and "Maturity" (X), and faint grid lines
- **4 clickable stage markers** positioned on the curve at their respective points, with colored dots and labels beneath
- **"Connected Intelligence" gateway marker** — a dashed vertical line at stage 2 with a label badge, matching the sales pitch pattern
- **Animated curve draw-in** on mount using stroke-dasharray/dashoffset
- **Active stage glow** — selected marker gets a glow filter and enlarged dot

Below the curve, keep the existing detail panel (2-column grid with stage info + time allocation bars) — it already works well and updates on click.

### Curve coordinates (4 stages)
```text
Stage 1 (Fragmented):  x=100, y=350  — bottom-left
Stage 2 (Connected):   x=250, y=280  — slight rise
Stage 3 (Optimised):   x=400, y=150  — steep climb
Stage 4 (Predictive):  x=550, y=50   — top-right
```

### Layout
```text
┌──────────────────────────────────┐
│     The Intelligence Maturity    │
│           Journey                │
├──────────────────────────────────┤
│  VALUE ↑                         │
│   │           ╭─── ● Predictive  │
│   │        ╭──╯                  │
│   │    ● Connected               │
│   │  ╭─╯  ⁞ GATEWAY             │
│   ● ─╯                          │
│  Fragmented ──────── MATURITY →  │
├─────────────────┬────────────────┤
│  Stage details  │ Time allocation│
└─────────────────┴────────────────┘
```

Single file change only. All data and the detail panel remain the same.

