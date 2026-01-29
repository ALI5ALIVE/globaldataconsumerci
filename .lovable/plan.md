

# Plan: Remove Animations & Improve Value Chain Narration Sync

## Overview

This plan addresses two slides:
1. **Slide 2 ("The Market Rewards Speed and Punishes Delay")** - Remove progressive reveal animations
2. **Slide 6 ("Intelligence That Compounds Across the Value Chain")** - Remove animations, ensure Trend & Strategy card shows on load, link combo pills to stages, and sync narration perfectly

---

## Changes for Slide 2

### File: `src/components/globaldata-slides/GDSlide1GrowthReality.tsx`

**Current Behavior:**
- Content progressively reveals as narration plays (uses `isVisible()` function)
- Pain points, paradox, and callout sections animate in with opacity/translate

**New Behavior:**
- All content visible immediately when slide loads
- Remove the conditional visibility logic based on narration progress
- Keep the narration sync logic for future highlighting if needed, but all content is always visible

**Changes:**
1. Remove the `isVisible(stepKey)` conditional classes on all elements
2. Remove the `opacity-0 translate-y-4` and `opacity-0 -translate-x-4` animation states
3. All cards render with full opacity and no transform animations

---

## Changes for Slide 6 (Value Chain)

### File: `src/components/globaldata-slides/GDSlide5ValueChain.tsx`

**Current Behavior:**
- Defaults to stage 0 (Trend & Strategy) on load - this is correct
- Uses `animate-fade-in` on the detail panel
- Combo pills highlight multiple stages but don't show detailed content

**New Behavior:**
1. **Remove `animate-fade-in`** from the detail panel
2. **Ensure Stage 1 (Trend & Strategy) card is always the default** when user navigates to slide
3. **Update combo pill behavior** to show the first associated stage's full details when clicked:
   - "Where to Play" → Shows Trend & Strategy (stage 0) details
   - "How to Win" → Shows Concept Screening (stage 2) details
   - "How to Execute" → Shows Market Entry (stage 3) details

4. **Update narration sync timings** to match the exact phrases in the script:
   - The script mentions each stage explicitly, so we align animations to those phrases

### Updated Stage Timings (based on narration script)

The narration script for slideId: 5 has these key phrases:

| Stage | Phrase | Approximate % |
|-------|--------|---------------|
| 0 - Trend & Strategy | "Stage one: Trend and Strategy" | 8% |
| 1 - White Space | "Stage two: White Space" | 25% |
| 2 - Concept Screening | "Stage three: Concept Screening" | 40% |
| 3 - Market Entry | "Stage four: Market Entry" | 55% |
| 4 - Post-Launch | "Stage five: Post-Launch" | 70% |

**Updated `stepTimings` array:**
```typescript
const stepTimings = [
  { index: 0, startPercent: 8 },   // Stage one: Trend and Strategy
  { index: 1, startPercent: 25 },  // Stage two: White Space
  { index: 2, startPercent: 40 },  // Stage three: Concept Screening
  { index: 3, startPercent: 55 },  // Stage four: Market Entry
  { index: 4, startPercent: 70 },  // Stage five: Post-Launch
];
```

### Combo Pill Mapping

Update the combo pills to show detailed content for the primary stage:

| Combo | Primary Stage to Show |
|-------|----------------------|
| "Where to Play" | Trend & Strategy (index 0) |
| "How to Win" | Concept Screening (index 2) |
| "How to Execute" | Market Entry (index 3) |

**Changes to `handleComboHover` function:**
```typescript
const handleComboHover = (index: number | null) => {
  if (!isNarrationControlled) {
    setActiveCombo(index);
    if (index !== null) {
      // Set active stage to the primary stage for this combo
      const primaryStageMap: Record<number, number> = {
        0: 0,  // "Where to Play" → Trend & Strategy
        1: 2,  // "How to Win" → Concept Screening
        2: 3,  // "How to Execute" → Market Entry
      };
      setActiveStage(primaryStageMap[index]);
    }
  }
};
```

---

## Summary of Code Changes

| File | Change |
|------|--------|
| `GDSlide1GrowthReality.tsx` | Remove `isVisible()` conditional classes; all content renders at full opacity with no animation delays |
| `GDSlide5ValueChain.tsx` | Remove `animate-fade-in` from detail panel; update `stepTimings` for precise narration sync; update `handleComboHover` to show primary stage details when combo is selected |

---

## Technical Details

### GDSlide1GrowthReality.tsx - Lines to modify

**Lines 92-99** (Pain point cards):
Remove: `${isVisible(stepKey) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`

**Lines 121-122** (Paradox card):
Remove: `${isVisible('paradox') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`

**Lines 136-137** (Real Problem card):
Remove: `${isVisible('realProblem') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`

**Lines 153-154** (Bottom callout):
Remove: `${isVisible('callout') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`

### GDSlide5ValueChain.tsx - Lines to modify

**Line 275** (Detail panel):
Remove: `animate-fade-in` class

**Lines 91-97** (stepTimings):
Update percentages to match narration phrases more precisely

**Lines 138-143** (handleComboHover):
Update to set activeStage to the primary stage for the selected combo

---

## Result

After these changes:
1. Slide 2 will show all content immediately with no progressive reveal
2. Slide 6 will show the Trend & Strategy card by default when user arrives
3. Clicking combo pills will show the appropriate stage's full details (JTBD, Pain to Outcome, Real Example)
4. Narration will sync precisely with stage transitions, highlighting each stage as it's mentioned
