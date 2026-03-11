

# Fix: Auto-play narration when slide changes

## Problem

Narration only auto-plays in two cases:
1. On mount (slide 0)
2. When the auto-advance effect fires after narration completes

When the user **manually scrolls** or clicks nav dots, `activeSlide` changes but nothing triggers `narration.play()` for the new slide. There's no effect watching `activeSlide` changes to start narration.

## Fix

**File:** `src/pages/ConsumerJourneyDeck.tsx`

Add a new `useEffect` that watches `activeSlide` and triggers narration whenever the active slide changes:

```tsx
// Track previous slide to detect changes
const prevSlideRef = useRef<number>(0);

useEffect(() => {
  if (activeSlide !== prevSlideRef.current) {
    prevSlideRef.current = activeSlide;
    // Small delay to let scroll settle
    const timer = setTimeout(() => {
      narration.play(activeSlide);
      narration.preloadNext(activeSlide);
    }, 400);
    return () => clearTimeout(timer);
  }
}, [activeSlide]);
```

This replaces the mount-only auto-play for slide 0 (remove the existing `useEffect` that plays slide 0 on mount, since this new effect covers it).

Also update the auto-advance effect: since the new effect handles playing on slide change, the auto-advance only needs to `scrollToSlide(nextSlide)` — the slide-change effect will handle starting narration automatically. This removes the nested timeout.

