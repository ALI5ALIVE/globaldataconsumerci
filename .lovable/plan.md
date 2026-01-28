

# Remove Animations from Slides 2-5 & Make Content Visible Immediately

## What You Asked For
1. Remove the progressive reveal animations from slides 2, 3, 4, and 5
2. Show all content immediately when the slide loads (no blank screen)
3. For slide 5, have the narration highlight each solution section while talking through them at a high level

---

## Current Problem
All four slides currently use a "progressive reveal" animation pattern:
- Content starts hidden (`opacity-0`, `translate-x/y`)
- As narration progresses, each section fades/slides in
- Without narration playing, you see a partial or blank screen initially

---

## Solution Summary

### Slides 2, 3, 4: Remove All Animation Logic
- Remove the `isVisible()` function and step-based visibility
- Remove all opacity/translate animation classes from elements
- All content will be visible immediately when the slide loads
- Narration will play over a fully-visible, static slide

### Slide 5: Keep Highlighting, Show All Content
- Remove opacity/visibility animations so all workflow stages are visible from the start
- Keep the highlighting logic that emphasizes each stage as narration progresses
- The narration already talks through the 5 value chain stages in order
- Adjust timing to match when narration mentions each stage

---

## Detailed Changes

### Slide 2 - GDSlide2IntelligenceGap.tsx

**Remove:**
- `stepTimings` array (lines 44-52)
- `stepOrder` array (line 54)
- `activeStep` state and `isNarrationControlled` state
- `useEffect` that controls step visibility (lines 68-81)
- `isVisible()`, `isCauseVisible()`, `isImpactVisible()` functions

**Modify:**
- Remove all conditional opacity/translate classes from:
  - Definition box (line 108-109)
  - Root cause cards (lines 128-129)
  - Impact cards (lines 153-154)
  - Bottom line box (lines 171-172)

**Result:** All content visible immediately, no animations

---

### Slide 3 - GDSlide3BeforeAfter.tsx

**Remove:**
- `stepTimings` array (lines 28-33)
- `stepOrder` array (line 35)
- `activeStep` state and `isNarrationControlled` state
- `useEffect` that controls step visibility (lines 49-62)
- `isVisible()` function

**Modify:**
- Remove all conditional opacity/translate classes from:
  - Before column (lines 88-89)
  - Transformation arrow (lines 130-131)
  - After column (lines 139-140)
  - Metrics banner (lines 182-183)

**Result:** Both Before and After panels visible immediately, metrics visible

---

### Slide 4 - GDSlide4Proposition.tsx

**Remove:**
- `stepTimings` array (lines 15-19)
- `stepOrder` array (line 21)
- `activeStep` state visibility logic
- Step-based visibility from `useEffect`
- `isVisible()` function

**Modify:**
- Remove all conditional opacity/translate/scale classes from:
  - Central value proposition box (lines 95-96)
  - Intelligence domains hub grid (lines 104-105)
  - Bottom callout (lines 122-123)

**Keep:**
- `segmentTimings` for wheel segment highlighting during narration
- `activeSegment` state for wheel interaction
- User interaction handlers for wheel hover/click

**Result:** Wheel and all content visible immediately, segments still highlight during narration

---

### Slide 5 - GDSlide5ValueChain.tsx

**Remove:**
- Any opacity-based visibility animations

**Keep and Enhance:**
- `stepTimings` array for stage highlighting (lines 91-97)
- `activeStage` state for highlighting which stage is being discussed
- `isStageHighlighted()` function

**Modify:**
- Ensure all 5 workflow stage cards are always visible (full opacity)
- The highlighting (border color, scale, shadow) still applies to show which stage narration is discussing
- Update narration timing to match the script more precisely:

**Narration Analysis for Slide 5:**
| Stage | Narrator Says | Current % | Corrected % |
|-------|--------------|-----------|-------------|
| Stage 0 (Trend & Strategy) | "Strategy and Portfolio: Where to play..." | 15% | 12% |
| Stage 1 (White Space) | "Innovation and Product: Trend discovery..." | 30% | 28% |
| Stage 2 (Concept Screening) | "Brand, Pricing and Claims..." | 45% | 45% |
| Stage 3 (Market Entry) | "Go-to-Market and Sales..." | 60% | 62% |
| Stage 4 (Post-Launch) | "In-Market Performance..." | 75% | 78% |

**Result:** All 5 stages visible from the start, active stage highlights as narrator discusses each

---

## Files to Modify

| File | Changes |
|------|---------|
| `GDSlide2IntelligenceGap.tsx` | Remove all animation logic, make all content always visible |
| `GDSlide3BeforeAfter.tsx` | Remove all animation logic, make all content always visible |
| `GDSlide4Proposition.tsx` | Remove step animations, keep wheel segment highlighting |
| `GDSlide5ValueChain.tsx` | Keep all content visible, maintain stage highlighting with corrected timings |

---

## Expected Outcome

After implementation:
- **Slides 2, 3, 4:** All content visible immediately when slide loads - no blank screen, no progressive reveals
- **Slide 5:** All 5 value chain stages visible from the start; as narration plays, each stage gets a highlight effect (border glow, slight scale) when the narrator discusses it
- **User interaction still works:** Hover/click on wheel (slide 4) and stages (slide 5) still functional when not narration-controlled

