

# Narrative-Animation Alignment Review and Improvement Plan

## Executive Summary

After reviewing all 10 slides (0-9) and their corresponding narration scripts, I've identified which slides have animation timing synchronized with narration and which need implementation. This plan details the gaps and provides a complete implementation strategy.

---

## Current State Analysis

### Already Synchronized (3 slides)

| Slide | Component | Mechanism | Status |
|-------|-----------|-----------|--------|
| **Slide 5** | GDSlide5ValueChain | `stepTimings` array (15%, 30%, 45%, 60%, 75%) | Synced |
| **Slide 6** | GDSlide6ValuePyramid | `stageTimings` array (12%, 28%, 42%, 56%, 72%) | Synced |
| **Slide 7** | GDSlide7MaturityCurve | `stageTimings` array (10%, 22%, 35%, 50%, 68%) | Synced |

These slides correctly use `useEffect` hooks that watch `progress` and `isPlaying` to progressively reveal content as the narrator discusses each element.

### Not Synchronized (5 slides need work)

| Slide | Component | Issue | Narrative Elements to Sync |
|-------|-----------|-------|---------------------------|
| **Slide 1** | GDSlide1GrowthReality | All content appears at once | 3 pain points, Paradox section, Real Problem section, Bottom callout |
| **Slide 2** | GDSlide2IntelligenceGap | All content appears at once | 4 root causes, 4 quantified impacts, Bottom line |
| **Slide 3** | GDSlide3BeforeAfter | All content appears at once | Before section, After section, 3 transformation metrics |
| **Slide 4** | GDSlide4Proposition | Wheel visible but no progressive reveal | 5 wheel segments should highlight as narrator mentions each |
| **Slide 8** | GDSlide8ROI | All content appears at once | 3 ROI pillars, compounding message |

### Static Slides (2 slides - no changes needed)

| Slide | Component | Reason |
|-------|-----------|--------|
| **Slide 0** | GDSlide0Title | Title slide with agenda - no progressive content |
| **Slide 9** | GDSlide9WhyGlobalData | Summary slide - content appears together as designed |

---

## Detailed Implementation Plan

### 1. Slide 1 - GDSlide1GrowthReality

**Narrative Structure:**
```
0-15%:  "Here's the growth reality..." (intro)
15-35%: "Market velocity...Shrinking windows...Asymmetric competition" (3 pain points)
35-55%: "Here's the paradox..." (Paradox card)
55-75%: "The real problem..." (Real Problem card)
75-100%: "Category performers..." (Bottom callout)
```

**Technical Changes:**
- Add `stepTimings` array with percentages mapping to each section
- Add `activeStep` state variable
- Use `useEffect` to watch `progress` and `isPlaying`
- Apply opacity/translate transitions to each section based on `activeStep`

**Step Timings:**
```typescript
const stepTimings = [
  { step: 'intro', startPercent: 0 },
  { step: 'painPoint1', startPercent: 15 },
  { step: 'painPoint2', startPercent: 23 },
  { step: 'painPoint3', startPercent: 31 },
  { step: 'paradox', startPercent: 42 },
  { step: 'realProblem', startPercent: 58 },
  { step: 'callout', startPercent: 78 },
];
```

---

### 2. Slide 2 - GDSlide2IntelligenceGap

**Narrative Structure:**
```
0-12%:  "So where exactly does growth get lost?" (Definition box)
12-25%: "First, signals fragment..." (Root cause 1)
25-38%: "Then, leaders debate..." (Root cause 2)
38-50%: "Third, decisions arrive late..." (Root cause 3)
50-62%: "Finally, decisions lack conviction..." (Root cause 4)
62-85%: "The quantified impact..." (4 impact metrics)
85-100%: "This gap is where growth stalls..." (Bottom line)
```

**Technical Changes:**
- Add `stepTimings` for 4 root causes appearing sequentially
- Add paired reveal for quantified impacts (each appears with its root cause)
- Bottom line reveals after all causes/impacts shown

**Step Timings:**
```typescript
const stepTimings = [
  { step: 'definition', startPercent: 0 },
  { step: 'cause1', startPercent: 12 },
  { step: 'cause2', startPercent: 25 },
  { step: 'cause3', startPercent: 38 },
  { step: 'cause4', startPercent: 50 },
  { step: 'impacts', startPercent: 62 },
  { step: 'bottomLine', startPercent: 85 },
];
```

---

### 3. Slide 3 - GDSlide3BeforeAfter

**Narrative Structure:**
```
0-10%:  "But here's what happens..." (intro)
10-35%: "Look at the left side..." (Before column with 4 items + metrics)
35-60%: "Now look at the right side..." (After column with 4 items + metrics)
60-100%: "The transformation..." (3 metrics banner)
```

**Technical Changes:**
- Before section fully visible first
- After section reveals when narrator says "Now look at the right side"
- Metrics banner animates in at the end

**Step Timings:**
```typescript
const stepTimings = [
  { step: 'intro', startPercent: 0 },
  { step: 'before', startPercent: 10 },
  { step: 'after', startPercent: 38 },
  { step: 'metrics', startPercent: 65 },
];
```

---

### 4. Slide 4 - GDSlide4Proposition

**Narrative Structure:**
```
0-20%:  "This is Connected Intelligence..." (Value proposition box)
20-40%: "A unified solution that connects..." (Wheel intro)
40-80%: "Hover over each segment..." (Interactive exploration prompt)
80-100%: "This is intelligence designed..." (Bottom callout)
```

**Technical Changes:**
- The wheel is already interactive (hover-based)
- Add subtle highlight animation that cycles through segments during narration
- Auto-rotate through segments if user doesn't interact

**Step Timings:**
```typescript
const segmentTimings = [
  { segment: 'Market Intelligence', startPercent: 25 },
  { segment: 'Competitor Intelligence', startPercent: 35 },
  { segment: 'Innovation Intelligence', startPercent: 45 },
  { segment: 'Sales Intelligence', startPercent: 55 },
  { segment: 'Strategic Intelligence', startPercent: 65 },
];
```

---

### 5. Slide 8 - GDSlide8ROI

**Narrative Structure:**
```
0-10%:  "ROI shows up in three places..." (intro)
10-30%: "First, speed to decision..." (Pillar 1)
30-50%: "Second, better growth outcomes..." (Pillar 2)
50-70%: "Third, lower cost of intelligence..." (Pillar 3)
70-100%: "Here's the key message: ROI compounds..." (Compounding section + chart)
```

**Technical Changes:**
- 3 ROI pillars reveal one-by-one
- Compounding message and chart reveal together at the end

**Step Timings:**
```typescript
const stepTimings = [
  { step: 'intro', startPercent: 0 },
  { step: 'pillar1', startPercent: 12 },
  { step: 'pillar2', startPercent: 32 },
  { step: 'pillar3', startPercent: 52 },
  { step: 'compounding', startPercent: 72 },
];
```

---

## Implementation Pattern (Reusable)

Each slide will follow this pattern:

```typescript
// 1. Define timing markers
const stepTimings = [
  { step: 'elementName', startPercent: XX },
  // ...
];

// 2. Add state
const [activeStep, setActiveStep] = useState<string>('');
const [isNarrationControlled, setIsNarrationControlled] = useState(false);

// 3. Add useEffect to sync with narration
useEffect(() => {
  if (isPlaying && progress > 0) {
    setIsNarrationControlled(true);
    
    const currentTiming = [...stepTimings]
      .reverse()
      .find(t => progress >= t.startPercent);
    
    if (currentTiming) {
      setActiveStep(currentTiming.step);
    }
  } else if (!isPlaying && isNarrationControlled) {
    setIsNarrationControlled(false);
  }
}, [isPlaying, progress]);

// 4. Apply conditional visibility in JSX
<div className={`transition-all duration-300 ${
  activeStep >= 'thisStep' ? 'opacity-100' : 'opacity-0'
}`}>
  {/* Content */}
</div>
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/globaldata-slides/GDSlide1GrowthReality.tsx` | Add timing sync for 3 pain points + paradox sections |
| `src/components/globaldata-slides/GDSlide2IntelligenceGap.tsx` | Add timing sync for 4 causes + 4 impacts |
| `src/components/globaldata-slides/GDSlide3BeforeAfter.tsx` | Add timing sync for before/after reveal |
| `src/components/globaldata-slides/GDSlide4Proposition.tsx` | Add auto-cycling wheel segments during narration |
| `src/components/globaldata-slides/GDSlide8ROI.tsx` | Add timing sync for 3 ROI pillars |

---

## Expected Outcome

After implementation:
- **All 10 slides** will have visual elements that animate in sync with the narrator
- Elements will appear progressively as the narrator discusses them
- When narration stops, users can still interact freely with all elements
- The presentation will feel like a professionally synchronized pitch deck

