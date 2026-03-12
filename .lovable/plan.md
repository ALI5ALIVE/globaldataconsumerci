

# Replace Animated Detail Panel with 4 Static Content Boxes

## What changes

**`src/components/consumer-journey/CJSlideMaturityJourney.tsx`** — single file change:

1. **Remove** the `useState` for `activeStage`, the `AnimatePresence` detail card, and the `TimeBar` component
2. **Shrink the SVG curve** height (reduce `max-h` from 340px to ~220px) to make room for the boxes below
3. **Add a 4-column grid** below the graph with one card per stage, each containing:
   - Colored top border matching the stage color
   - Stage label + decision speed badge
   - Tagline in the stage accent color
   - 3 bullet points
   - A mini time-allocation summary line (e.g., "60% reconciliation → 10% strategy")
   - The insight quote at the bottom
4. **Keep** the SVG curve, markers, gateway line — but markers are no longer clickable (remove onClick/active state)

## Layout

```text
┌─────────────────────────────────────────────────┐
│          The Intelligence Maturity Journey       │
│              (title + subtitle)                  │
├─────────────────────────────────────────────────┤
│         [SVG curve - compact ~200px]             │
├───────────┬───────────┬───────────┬─────────────┤
│ Fragmented│ Connected │ Optimised │ Predictive  │
│ 6-8 weeks │ 2-3 weeks │ 3-5 days  │ Hours       │
│ tagline   │ tagline   │ tagline   │ tagline     │
│ • bullet  │ • bullet  │ • bullet  │ • bullet    │
│ • bullet  │ • bullet  │ • bullet  │ • bullet    │
│ • bullet  │ • bullet  │ • bullet  │ • bullet    │
│ 60%→10%   │ 20%→35%   │ 10%→55%   │ 5%→75%     │
│ insight   │ insight   │ insight   │ insight     │
└───────────┴───────────┴───────────┴─────────────┘
```

Each box gets a `borderTop: 3px solid {stageColor}` and subtle background tint. The "Connected" box gets a small "Gateway" badge to highlight it as the unlock point.

