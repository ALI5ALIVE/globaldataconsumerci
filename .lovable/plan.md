
# Fix Slide 8 Animation and Remove Annotations

## Issue Summary

The user has identified two issues:

1. **Slide 8 (The Return)** has a DEV calibration annotation overlay that should be removed
2. **Slide 8** has stage bar animations that are misaligned because the narration discusses 3 ROI pillars (Speed, Growth, Cost), not 5 maturity stages

**Slide 7 (Your Roadmap)** already has proper animation aligned to narration - the curve walks through stages 1-5 as the narrator mentions each stage.

---

## Slide Numbering Reference

| Display Number | Index | Label | Content |
|----------------|-------|-------|---------|
| 00 | 0 | Title | Title slide |
| 01 | 1 | Market Pressure | Growth reality |
| 02 | 2 | Intelligence Gap | Where growth is lost |
| 03 | 3 | Transformation | Before/After |
| 04 | 4 | The Answer | Connected Intelligence |
| 05 | 5 | Value Chain | 5-stage value chain |
| 06 | 6 | Your Position | Maturity pyramid |
| 07 | 7 | Your Roadmap | Maturity curve |
| 08 | 8 | **The Return** | Speed, Success, Savings |
| 09 | 9 | Why GlobalData | Final slide |

---

## Changes Required

### File: `src/components/globaldata-slides/GDSlide8ROI.tsx`

### 1. Remove DEV Calibration Overlay (Lines 122-129)

Delete the entire DEV overlay block:
```tsx
{import.meta.env.DEV && (isPlaying || progress > 0) && (
  <div className="absolute top-2 right-2 z-50 bg-background/90 border border-primary rounded px-3 py-2 text-xs font-mono">
    <div className="text-primary font-bold">Slide 8 Calibration</div>
    <div>Progress: <span className="text-primary">{progress.toFixed(1)}%</span></div>
    <div>Step: <span className="text-primary">{activeStep}</span></div>
  </div>
)}
```

### 2. Remove Stage Bar Animation Logic

Since Slide 8 narration covers 3 ROI pillars (not 5 stages), remove the stage-based animation:

**Remove `stageBarTimings` array (Lines 47-53):**
```tsx
const stageBarTimings = [
  { stage: 1, startPercent: 22 },
  { stage: 2, startPercent: 40 },
  { stage: 3, startPercent: 55 },
  { stage: 4, startPercent: 70 },
  { stage: 5, startPercent: 85 },
];
```

**Remove `highlightedStage` state (Line 73):**
```tsx
const [highlightedStage, setHighlightedStage] = useState(() => hasCompleted ? 5 : 0);
```

**Remove stage sync logic from useEffect (Lines 83-85, 89, 94):**
- Remove: `const currentStageTiming = [...stageBarTimings].reverse().find(t => progress >= t.startPercent);`
- Remove: `setHighlightedStage(currentStageTiming ? currentStageTiming.stage : 0);`
- Remove: `setHighlightedStage(5);` in both completion branches

### 3. Simplify Stage Bars to Static Display

Update the stage bars (Lines 193-208) to show as a static visual with consistent styling:

**Current (animated based on highlightedStage):**
```tsx
<div 
  className={`w-14 bg-gradient-to-t from-primary to-sky-400 rounded-t-lg transition-all duration-300 ${
    stage === highlightedStage ? 'ring-2 ring-primary shadow-lg shadow-primary/30' : ''
  }`}
  style={{ 
    height: `${16 + stage * 16}px`,
    opacity: stage <= highlightedStage ? 1 : 0.3,
    transform: stage === highlightedStage ? 'scale(1.1)' : 'scale(1)',
  }}
/>
```

**Change to (static display):**
```tsx
<div 
  className="w-14 bg-gradient-to-t from-primary to-sky-400 rounded-t-lg"
  style={{ 
    height: `${16 + stage * 16}px`,
    opacity: stage * 0.2 + 0.2
  }}
/>
```

**Update stage labels to static:**
```tsx
<span className="text-[10px] text-muted-foreground mt-1.5">Stage {stage}</span>
```

---

## Summary of Removals

| Element | Action |
|---------|--------|
| DEV calibration overlay | Delete entirely |
| `stageBarTimings` array | Delete |
| `highlightedStage` state | Delete |
| Stage sync logic in useEffect | Delete |
| Dynamic bar styling | Replace with static |

---

## Outcome

After this update:
- Slide 8 will have no DEV annotation overlay
- The compounding curve chart will display statically (all bars visible with graduated opacity)
- The 3 ROI pillars will still animate in sequence with narration (pillar1, pillar2, pillar3)
- Slide 7 continues to work correctly with stage animation aligned to narration
