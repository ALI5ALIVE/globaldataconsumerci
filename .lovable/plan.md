

## Make Each Pyramid Level Clickable with Animated Copy Box Transition

The pyramid already has click functionality - clicking any level updates the details panel. This plan adds a smooth transition animation to make the layer switching visually clear.

---

### Current Behavior

- Each pyramid layer is clickable and updates the active layer state
- The details panel (copy box) updates immediately with no visible transition
- Users may not notice the content change

---

### Proposed Changes

Add a fade-slide animation when transitioning between layers so users clearly see the copy box content change.

---

### Technical Implementation

**File:** `src/components/globaldata-slides/GDSlide6ValuePyramid.tsx`

**1. Add animation state tracking:**

```tsx
const [isTransitioning, setIsTransitioning] = useState(false);
const [pendingLayerId, setPendingLayerId] = useState<string | null>(null);
```

**2. Update handleLayerClick to trigger transition:**

```tsx
const handleLayerClick = useCallback((level: number) => {
  const layer = layersData.find((l) => l.level === level);
  if (layer && layer.id !== activeLayerId) {
    setIsTransitioning(true);
    setPendingLayerId(layer.id);
    setHighlightedModule(null);
    setIsAutoCycling(false);
    
    // After fade-out, switch content and fade-in
    setTimeout(() => {
      setActiveLayerId(layer.id);
      setIsTransitioning(false);
      setPendingLayerId(null);
    }, 200);
  }
}, [activeLayerId]);
```

**3. Apply transition class to details panel container:**

```tsx
<div className={`flex-1 transition-all duration-200 ${
  isTransitioning 
    ? 'opacity-0 translate-x-4' 
    : 'opacity-100 translate-x-0'
}`}>
  <GDDetailsPanel layer={activeLayer} highlightedModule={highlightedModule} />
</div>
```

---

### Animation Effect

| Phase | Duration | Visual |
|-------|----------|--------|
| Click layer | 0ms | Trigger transition |
| Fade out | 0-200ms | Opacity 0, slide right 4px |
| Content swap | 200ms | Update activeLayerId |
| Fade in | 200-400ms | Opacity 100, slide back |

---

### Summary

| Change | File | Purpose |
|--------|------|---------|
| Add transition states | GDSlide6ValuePyramid.tsx | Track animation phase |
| Update click handler | GDSlide6ValuePyramid.tsx | Trigger fade transition |
| Add animation classes | GDSlide6ValuePyramid.tsx | Smooth fade-slide effect |

### File to Modify
- `src/components/globaldata-slides/GDSlide6ValuePyramid.tsx`

