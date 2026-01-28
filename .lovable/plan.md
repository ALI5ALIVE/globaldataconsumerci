

# Fix: Make Curve Visible Immediately on Slide 08 (Your Roadmap)

## Problem
When landing on Slide 08 ("Your Roadmap to Predictive Performance"), the hockey stick curve is invisible because visibility is gated by narration state:

```tsx
const isAnimated = isPlaying || progress > 0 || hasCompleted;
```

This causes `isAnimated = false` on initial load, and the curve/markers have `opacity-0` classes applied.

## Goal
- **Curve visible immediately** when the slide loads
- **Stage walk animation** still syncs to narration (activeStage advances as stages are mentioned)

---

## Changes Required

### File: `src/components/globaldata-slides/GDSlide7MaturityCurve.tsx`

### 1. Remove the `isAnimated` gating variable
Delete line 208:
```tsx
const isAnimated = isPlaying || progress > 0 || hasCompleted;
```

### 2. Update curve path to always be visible
Line 358 - Change from:
```tsx
className={`transition-all duration-1000 ${isAnimated ? "opacity-100" : "opacity-0"}`}
```
To:
```tsx
className="opacity-100"
```

### 3. Update "Connected Intelligence" marker to always be visible
Line 363 - Change from:
```tsx
<g className={`transition-opacity duration-700 delay-500 ${isAnimated ? "opacity-100" : "opacity-0"}`}>
```
To:
```tsx
<g className="opacity-100">
```

### 4. Update stage marker circles to always be visible
Lines 385, 393, 403 - Remove `isAnimated` conditional and `transitionDelay`:

Change from:
```tsx
className={`transition-all duration-300 ${isAnimated ? "opacity-100" : "opacity-0"}`}
style={{ transitionDelay: `${index * 80}ms` }}
```
To:
```tsx
className="transition-all duration-300 opacity-100"
```

(Apply this to the outer circle, inner circle, and stage number text)

---

## What Stays the Same
- `activeStage` state and its sync to narration progress via `useEffect`
- Stage highlighting (active stage gets larger radius and glow)
- Click-to-select stage functionality
- Stage details panel updates based on `activeStage`
- All other styling and layout

---

## Result
- **On load**: Full curve visible with all 5 stage markers, Stage 1 highlighted by default
- **During narration**: `activeStage` advances to 2, 3, 4, 5 as narrator mentions each stage
- **Active stage**: Gets visual emphasis (larger circle, glow, accent color on label)
- **Click interaction**: User can still click any stage to view its details

