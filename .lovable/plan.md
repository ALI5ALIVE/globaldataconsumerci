
# Fix Pyramid Level Clickability

## Problem
The pyramid layers are not responding to clicks because the embedded illustrations (AVA icon, Metrics Gauges, Quintuple Loop, Fragmentation Illustration) overlay the clickable polygon areas. When users click on these visual elements, the events are captured by the illustrations instead of propagating to the pyramid layer click handlers.

## Solution
Add `onPointerDownCapture` handlers to the wrapper `div` inside each `foreignObject` to ensure click events trigger the layer selection even when clicking on the illustrations. This approach intercepts pointer events at the capture phase before they reach the illustration components.

## File to Update
**`src/components/globaldata-slides/GDPyramid3D.tsx`**

## Changes

### 1. Layer 5 (PREDICTIVE - AVA Icon) - Lines 248-262
Add `onPointerDownCapture` to the wrapper div:
```tsx
<div 
  className="w-full h-full flex items-center justify-center cursor-pointer"
  onPointerDownCapture={() => onLayerClick(5)}
>
```

### 2. Layer 4 (OPERATIONAL - Metrics Gauges) - Lines 278-288
Wrap the `GDMetricsGauges` component in a clickable div:
```tsx
<div 
  className="w-full h-full cursor-pointer"
  onPointerDownCapture={() => onLayerClick(4)}
>
  <GDMetricsGauges onMetricClick={handleModuleClick} />
</div>
```

### 3. Layer 3 (CONNECTED - Quintuple Loop) - Lines 303-313
Wrap the `GDQuintupleLoop` component in a clickable div:
```tsx
<div 
  className="w-full h-full cursor-pointer"
  onPointerDownCapture={() => onLayerClick(3)}
>
  <GDQuintupleLoop onModuleClick={handleModuleClick} />
</div>
```

### 4. Layer 1 (FRAGMENTED - Fragmentation Illustration) - Lines 328-338
Wrap the `GDFragmentationIllustration` component in a clickable div:
```tsx
<div 
  className="w-full h-full cursor-pointer"
  onPointerDownCapture={() => onLayerClick(1)}
>
  <GDFragmentationIllustration onNodeClick={handleModuleClick} />
</div>
```

### 5. Level 2 Silos (Already Clickable)
The Level 2 silos already have proper click handlers directly on the polygons (line 369), so no changes needed there.

---

## Summary of Changes

| Layer | Current State | Fix Applied |
|-------|--------------|-------------|
| Layer 5 (Apex) | AVA icon blocks clicks | Add `onPointerDownCapture={() => onLayerClick(5)}` |
| Layer 4 | Gauges block clicks | Add `onPointerDownCapture={() => onLayerClick(4)}` |
| Layer 3 | Loop blocks clicks | Add `onPointerDownCapture={() => onLayerClick(3)}` |
| Layer 2 | Silos already clickable | No change needed |
| Layer 1 (Base) | Fragmentation blocks clicks | Add `onPointerDownCapture={() => onLayerClick(1)}` |

---

## Technical Details
- **Why `onPointerDownCapture`?** The capture phase runs before the bubbling phase, so the event is intercepted before it reaches child components
- **Why not `onClick`?** The illustrations have their own click handlers (`onModuleClick`); using capture phase allows both to work
- **`cursor-pointer`** provides visual feedback that the entire layer is clickable

---

## Outcome
- Users can click anywhere on any pyramid level (including the illustrations) to select that stage
- The details panel updates immediately to show the selected stage's content
- The smooth fade transition between stages (already implemented) will continue to work
- Module-specific clicks within illustrations will still trigger their own handlers after the layer is selected
