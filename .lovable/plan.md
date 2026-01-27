

# Fix Slide 6 Narration Stage Numbering

## Problem
The Slide 6 (Value Pyramid) narration script has incorrect stage numbers that contradict the visual pyramid and the data model. The narration refers to stages in reverse order for stages 2 and 4.

### Current Incorrect Script (Slide 6)
```
"At the base: Fragmented and Reactive..." ← Stage 1 (correct)
"Stage four: Managed but Siloed..." ← WRONG (should be Stage 2)
"Stage three: Connected and Governed..." ← Correct
"Stage two: Operational Intelligence..." ← WRONG (should be Stage 4)
"And at the apex: Predictive and Adaptive..." ← Stage 5 (correct)
```

### Correct Stage Hierarchy (matches visual pyramid)
| Stage | Name | Position |
|-------|------|----------|
| 1 | Fragmented & Reactive | Base |
| 2 | Managed but Siloed | Second from bottom |
| 3 | Connected & Governed | Middle (AI Gateway) |
| 4 | Operational Intelligence | Second from top |
| 5 | Predictive & Adaptive | Apex |

## Solution
Update the Slide 6 narration script to use correct stage numbers.

### File to Update
`src/data/globalDataNarration.ts`

### Changes Required (Lines 102-114)

**Current text:**
```
At the base: Fragmented and Reactive. Insight requests handled ad hoc. Multiple disconnected tools. Decisions made with incomplete data. High vendor spend, low self-service, missed windows.

Stage four: Managed but Siloed. Strong systems in specific domains, but fragmented by function. Reporting is regular but backward-looking. Structured intelligence, but limited cross-functional value.

Stage three: Connected and Governed. Unified taxonomy and governance. Self-service access with proper governance. This is the platform shift—reconciliation time drops sixty percent.

Stage two: Operational Intelligence. Analytics embedded in daily workflows. AI augmentation with automated trend detection. Decisions in days, not weeks.

And at the apex: Predictive and Adaptive. AI anticipates market shifts before competitors react. Category performance through speed and foresight.

Most organisations are at stage four or five. The question is: how fast can you climb?
```

**Corrected text:**
```
At the base: Fragmented and Reactive. Insight requests handled ad hoc. Multiple disconnected tools. Decisions made with incomplete data. High vendor spend, low self-service, missed windows.

Stage two: Managed but Siloed. Strong systems in specific domains, but fragmented by function. Reporting is regular but backward-looking. Structured intelligence, but limited cross-functional value.

Stage three: Connected and Governed. Unified taxonomy and governance. Self-service access with proper governance. This is the platform shift—reconciliation time drops sixty percent.

Stage four: Operational Intelligence. Analytics embedded in daily workflows. AI augmentation with automated trend detection. Decisions in days, not weeks.

And at the apex: Predictive and Adaptive. AI anticipates market shifts before competitors react. Category performance through speed and foresight.

Most organisations are at stage one or two. The question is: how fast can you climb?
```

### Summary of Changes
| Line | Before | After |
|------|--------|-------|
| 106 | "Stage four: Managed but Siloed" | "Stage two: Managed but Siloed" |
| 110 | "Stage two: Operational Intelligence" | "Stage four: Operational Intelligence" |
| 114 | "Most organisations are at stage four or five" | "Most organisations are at stage one or two" |

## Why This Fix is Correct
- Aligns with the visual pyramid where Stage 1 is at the bottom and Stage 5 is at the apex
- Matches the data model in `GDSlide6ValuePyramid.tsx` and `GDDetailsPanel.tsx`
- Consistent with Slide 7 narration which correctly uses Stage 1→5 progression
- The closing statement "Most organisations are at stage one or two" makes sense (most are at the bottom of the maturity curve, not near the top)

## Verification
After implementation, the narration audio will correctly describe:
- Stage 1 (base) = Fragmented
- Stage 2 = Managed but Siloed
- Stage 3 = Connected (AI Gateway)
- Stage 4 = Operational
- Stage 5 (apex) = Predictive

