

# Plan: Swap Slides 6 and 7

Swap "The Connected Decision" (currently index 6) with "Teams Transformed" (currently index 7).

## Changes — `src/pages/ConsumerJourneyDeck.tsx`

**Slides array** (lines 170-171):
```
{ id: "cj-slide-6", label: "Teams Transformed" },
{ id: "cj-slide-7", label: "The Connected Decision" },
```

**Render order** (lines 298-299):
```
<CPSlide7TeamsTransformed {...getNarrationProps(6)} />
<CJSlideConnectedDecision {...getNarrationProps(7)} />
```

**Narration data** (`src/data/consumerJourneyNarration.ts`): Swap `slideId` values for the "Teams Transformed" (currently 7 → 6) and "The Connected Decision" (currently 6 → 7) entries so narration tracks the new positions.

No other files affected.

