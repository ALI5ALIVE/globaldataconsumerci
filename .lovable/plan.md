

# Move "Where Teams Spend Time" Card to Slide 8 and Update Narration

## Summary

Move the time allocation visualization (GDTimeAllocationBar) from Slide 6 to Slide 8, and update the Slide 8 narration to incorporate the powerful insight about how teams spend their time differently at each maturity stage.

## Rationale

The time allocation data tells a compelling story about the operational transformation:
- **Stage 1 (Fragmented)**: 60% Reconcile, 30% Analysis, 10% Strategic
- **Stage 5 (Predictive)**: 5% Reconcile, 20% Analysis, 75% Strategic

This shows the real human value of maturity progression - teams shift from "debating data" to "driving strategy."

## Files to Modify

### 1. `src/components/globaldata-slides/RoadmapStageDetails.tsx`

**Add time allocation data and component**

| Change | Details |
|--------|---------|
| Import | Add `GDTimeAllocationBar` and `GDTimeAllocation` |
| Interface | Extend `RoadmapStage` with `timeAllocation?: GDTimeAllocation` |
| Component | Add `<GDTimeAllocationBar>` below the "Time to Decision" section |

### 2. `src/components/globaldata-slides/GDSlide7MaturityCurve.tsx`

**Add time allocation data to each roadmap stage**

| Stage | Reconcile | Analysis | Strategic |
|-------|-----------|----------|-----------|
| 1 - Fragmented | 60% | 30% | 10% |
| 2 - Managed | 40% | 40% | 20% |
| 3 - Connected | 20% | 40% | 40% |
| 4 - Optimized | 10% | 30% | 60% |
| 5 - Predictive | 5% | 20% | 75% |

### 3. `src/data/globalDataNarration.ts`

**Update Slide 8 (slideId: 7) narration to include time allocation insight**

Add after the roadmap walkthrough:

```text
But here's the hidden cost most executives miss—where your teams actually spend their time.

At stage one, sixty percent of analyst time goes to reconciling conflicting data sources. Thirty percent to actual analysis. Just ten percent on strategic work. That's your most expensive people doing data janitoring instead of driving growth.

By stage five, that ratio inverts completely. Only five percent on reconciliation—because there's one truth. Twenty percent on analysis. And seventy-five percent on strategic work that actually moves the business.

The transformation isn't just about faster decisions. It's about liberating your teams to do the work that matters.
```

## Technical Implementation Details

### RoadmapStageDetails.tsx Changes

```typescript
// Add import
import GDTimeAllocationBar, { GDTimeAllocation } from "./GDTimeAllocationBar";

// Extend interface
export interface RoadmapStage {
  // ... existing fields ...
  timeAllocation?: GDTimeAllocation;  // Add this field
}

// Add component after Time to Decision section
{stage.timeAllocation && (
  <div className="mt-2">
    <GDTimeAllocationBar
      timeAllocation={stage.timeAllocation}
      accentColor={stage.accentColor}
    />
  </div>
)}
```

### GDSlide7MaturityCurve.tsx Data Updates

Each stage in `roadmapStagesData` gets a new `timeAllocation` property matching the values from Slide 6.

## Narrative Flow Result

| Before | After |
|--------|-------|
| Slide 8 focuses only on decision speed | Slide 8 shows both decision speed AND team productivity transformation |
| Time allocation buried in Slide 6 details panel | Time allocation becomes a key proof point in the operational transformation story |

## Visual Result

The "Where Teams Spend Time" stacked bar will appear in the right-hand detail panel on Slide 8, updating dynamically as users click through stages 1-5. This creates a powerful visual contrast between the 60/30/10 split at Stage 1 and the 5/20/75 split at Stage 5.

