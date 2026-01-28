

# Fix Narration-Animation Sync on Slide 8

## Problem Analysis

The animation and narration are out of sync because:
1. **The stage timing percentages are incorrect** - The current values (12%, 28%, 45%, 62%, 78%) don't align with where each stage is actually discussed in the narration
2. **The script was extended** - The recently added time allocation section (discussing Stage 1 and Stage 5 again) shifted the content proportions

## Current vs. Required Timing

The narration script for Slide 8 (slideId: 7) is approximately 1,850 characters. Here's where each stage is mentioned:

| Stage | Current % | Actual Script Position | New % |
|-------|-----------|------------------------|-------|
| 1 | 12% | "At stage one, teams request..." (≈10% into script) | **8%** |
| 2 | 28% | "At stage two, you've got structure..." (≈22% into script) | **20%** |
| 3 | 45% | "Stage three changes everything..." (≈35% into script) | **32%** |
| 4 | 62% | "Stage four embeds intelligence..." (≈48% into script) | **45%** |
| 5 | 78% | "And stage five—predictive..." (≈58% into script) | **55%** |

The time allocation section at the end (~68-95%) re-discusses stages 1 and 5, but the animation should stay on Stage 5 during that conclusion.

## File to Modify

**`src/components/globaldata-slides/GDSlide7MaturityCurve.tsx`**

### Change: Update `stageTimings` array (Lines 111-117)

```typescript
// CURRENT (out of sync)
const stageTimings = [
  { stage: 1, startPercent: 12 },
  { stage: 2, startPercent: 28 },
  { stage: 3, startPercent: 45 },
  { stage: 4, startPercent: 62 },
  { stage: 5, startPercent: 78 },
];

// UPDATED (synchronized)
const stageTimings = [
  { stage: 1, startPercent: 8 },
  { stage: 2, startPercent: 20 },
  { stage: 3, startPercent: 32 },
  { stage: 4, startPercent: 45 },
  { stage: 5, startPercent: 55 },
];
```

## Expected Result

| Narration Moment | Animation |
|------------------|-----------|
| "At stage one, teams request insights..." | Curve animates to Stage 1 marker |
| "At stage two, you've got structure..." | Curve animates to Stage 2 marker |
| "Stage three changes everything..." | Curve animates to Stage 3 marker |
| "Stage four embeds intelligence..." | Curve animates to Stage 4 marker |
| "And stage five—predictive..." | Curve animates to Stage 5 marker |
| "But here's the hidden cost..." (time allocation) | Stays on Stage 5 through conclusion |

## Technical Notes

- The timing percentages are based on audio playback progress (0-100%)
- The `useEffect` in the component listens to `progress` and updates `activeStage` accordingly
- The `stageTimings` array is searched in reverse order to find the highest matching stage for the current progress
- Stage 5 should remain active for the final ~45% of the narration (the time allocation discussion and conclusion)

