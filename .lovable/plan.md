
# Animation Timing Fix for Slides 7 & 8

## Problem
Animations are triggering before the narrator mentions each element. The percentages need to be increased (delayed) to align with when the narrator actually speaks each point.

---

## Slide 7 - GDSlide7MaturityCurve.tsx

### Narration Analysis
Script: ~150 words, analyzing when each stage is mentioned:

| Stage | Narrator Says | Current % | Corrected % |
|-------|---------------|-----------|-------------|
| Stage 1 | "At stage one—Fragmented—you're at the bottom" | 10% | 12% |
| Stage 2 | "By stage two—Managed—you've got structure" | 22% | 28% |
| Stage 3 | "Stage three—Connected—is the platform shift" | 35% | 45% |
| Stage 4 | "Stage four—Optimized—is transformational" | 50% | 62% |
| Stage 5 | "And stage five—Predictive" | 68% | 78% |

### Technical Change
Update `stageTimings` array (lines 186-192):

```typescript
// FROM:
const stageTimings = [
  { stage: 1, startPercent: 10 },
  { stage: 2, startPercent: 22 },
  { stage: 3, startPercent: 35 },
  { stage: 4, startPercent: 50 },
  { stage: 5, startPercent: 68 },
];

// TO:
const stageTimings = [
  { stage: 1, startPercent: 12 },
  { stage: 2, startPercent: 28 },
  { stage: 3, startPercent: 45 },
  { stage: 4, startPercent: 62 },
  { stage: 5, startPercent: 78 },
];
```

---

## Slide 8 - GDSlide8ROI.tsx

### Narration Analysis
Script: ~90 words, analyzing when each pillar is mentioned:

| Element | Narrator Says | Current % | Corrected % |
|---------|---------------|-----------|-------------|
| Pillar 1 | "First, speed to decision" | 15% | 22% |
| Pillar 2 | "Second, better growth outcomes" | 38% | 48% |
| Pillar 3 | "Third, lower cost of intelligence" | 58% | 68% |
| Compounding | "Here's the key message: ROI compounds" | 78% | 85% |

### Technical Change
Update `stepTimings` array (lines 39-45):

```typescript
// FROM:
const stepTimings = [
  { step: 'intro', startPercent: 0 },
  { step: 'pillar1', startPercent: 15 },
  { step: 'pillar2', startPercent: 38 },
  { step: 'pillar3', startPercent: 58 },
  { step: 'compounding', startPercent: 78 },
];

// TO:
const stepTimings = [
  { step: 'intro', startPercent: 0 },
  { step: 'pillar1', startPercent: 22 },
  { step: 'pillar2', startPercent: 48 },
  { step: 'pillar3', startPercent: 68 },
  { step: 'compounding', startPercent: 85 },
];
```

---

## Summary of Changes

| File | Line Range | Change |
|------|------------|--------|
| `GDSlide7MaturityCurve.tsx` | 186-192 | Push all stage timings 6-12% later |
| `GDSlide8ROI.tsx` | 39-45 | Push all pillar timings 7-10% later |

## Expected Result
After implementation:
- Stage markers on the maturity curve will highlight **when the narrator says "Stage X"**
- ROI pillars will appear **when the narrator says "First...", "Second...", "Third..."**
- The compounding message will appear **when the narrator says "Here's the key message"**
