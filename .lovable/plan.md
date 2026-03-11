

# Add Auto-Advance to Consumer Journey Deck

## What
When narration finishes on a slide, automatically scroll to the next slide and start its narration — matching the existing Sales Pitch deck pattern (1.5s delay before scroll, 800ms pause before next narration plays).

## File: `src/pages/ConsumerJourneyDeck.tsx`

### Changes

1. **Add state + ref** for auto-advance:
   - `const [autoAdvance, setAutoAdvance] = useState(true);`
   - `const autoAdvanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);`

2. **Add auto-advance useEffect** (same pattern as `SalesPitchDeck.tsx` lines 56-76):
   - When `narration.hasCompleted` is true and `narration.currentSlide === activeSlide` and not on last slide:
     - Wait 1.5s, scroll to next slide
     - Wait additional 800ms, then call `narration.play(nextSlide)` and `narration.preloadNext(nextSlide)`
   - Cleanup timer on unmount/re-run
   - Respect `autoAdvance` toggle (defaulting to `true`)

3. **Cancel auto-advance on manual interaction** — clear the timer when user manually scrolls or clicks nav, so auto-advance doesn't fight manual control. Reset when narration completes on the new slide.

No other files need changes. This is a direct port of the proven Sales Pitch auto-advance logic.

