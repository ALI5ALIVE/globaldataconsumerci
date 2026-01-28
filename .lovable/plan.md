

# Fix Slide 8: Always Show Curve with Phase Animation

## Current State

The "Visual Compounding Chart" at the bottom of Slide 8 (lines 176-198) has two issues:

1. **Visibility**: The chart is hidden until narration reaches the "compounding" step (85% progress) - controlled by `isVisible('compounding')`
2. **No Phase Animation**: The 5 stage bars are static - they don't animate through the phases during narration

## Proposed Changes

### File: `src/components/globaldata-slides/GDSlide8ROI.tsx`

### 1. Always Display the Curve
Remove the conditional visibility on the compounding chart container so it's always visible when the slide loads.

**Lines 177-178 Change:**
- Remove the `isVisible('compounding')` conditional from the chart container class
- Chart will always be visible with `opacity-100 translate-y-0`

### 2. Add Phase Animation to Stage Bars
Add state tracking for the currently highlighted stage and animate through stages 1-5 as narration progresses.

**Add New State (after line 64):**
```tsx
const [highlightedStage, setHighlightedStage] = useState(0);
```

**Add Stage Timing Markers:**
```tsx
const stageBarTimings = [
  { stage: 1, startPercent: 22 },
  { stage: 2, startPercent: 40 },
  { stage: 3, startPercent: 55 },
  { stage: 4, startPercent: 70 },
  { stage: 5, startPercent: 85 },
];
```

**Update useEffect (lines 66-83):**
Add logic to sync `highlightedStage` with narration progress, walking through stages 1→5 as the narration plays.

**Update Bar Rendering (lines 181-192):**
- Add visual highlight (brighter color, scale, glow) to the currently active stage bar
- Previously passed stages stay lit, upcoming stages are dimmed
- Active stage pulses or glows to indicate current position

### 3. Visual Enhancement for Active Stage

**Current bar style:**
```tsx
style={{ 
  height: `${16 + stage * 16}px`,
  opacity: stage * 0.2 + 0.2
}}
```

**New bar style with animation:**
```tsx
style={{ 
  height: `${16 + stage * 16}px`,
  opacity: stage <= highlightedStage ? 1 : 0.3,
  transform: stage === highlightedStage ? 'scale(1.1)' : 'scale(1)',
}}
className={`... ${stage === highlightedStage ? 'ring-2 ring-primary shadow-lg' : ''}`}
```

---

## Technical Summary

| Change | Location | Description |
|--------|----------|-------------|
| Remove visibility condition | Line 177-178 | Chart always visible |
| Add `highlightedStage` state | After line 64 | Track which stage bar is active |
| Add `stageBarTimings` array | After line 47 | Define when each stage highlights |
| Update useEffect | Lines 66-83 | Sync highlighted stage with progress |
| Update bar rendering | Lines 181-192 | Visual highlight for active/passed stages |

---

## Animation Behavior

| Narration Progress | Highlighted Stage | Visual Effect |
|-------------------|-------------------|---------------|
| 0-21% | 0 (none) | All bars dimmed |
| 22-39% | Stage 1 | Stage 1 glows, others dimmed |
| 40-54% | Stage 2 | Stages 1-2 lit, 3-5 dimmed |
| 55-69% | Stage 3 | Stages 1-3 lit, 4-5 dimmed |
| 70-84% | Stage 4 | Stages 1-4 lit, stage 5 dimmed |
| 85-100% | Stage 5 | All stages fully lit |

---

## Outcome

After this update:
- The compounding curve chart is always visible on Slide 8
- As narration plays, the animation walks through stages 1→2→3→4→5
- Each stage bar lights up progressively with a highlight effect on the current stage
- When narration completes, all 5 stages remain fully visible

