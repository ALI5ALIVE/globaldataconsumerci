

# Ensure Uninterrupted Auto-Advance Flow

## Issues Found

1. **No auto-start on first slide** — narration doesn't begin until manually triggered. The deck should auto-play slide 0 on load to kick off the uninterrupted flow.

2. **Preload cap too low** — `preloadNext` in the narration hook stops at `nextSlideId <= 9`, but there are 11 slides (0–10). Slide 10 never gets preloaded, causing a gap before the final slide's narration.

3. **Timing is already correct** — the 1.5s post-narration delay → scroll → 800ms pause → play next pattern is solid and doesn't need changing.

## Changes

### `src/pages/ConsumerJourneyDeck.tsx`
- Add a `useEffect` that auto-plays slide 0 narration on mount (with a short delay to let the page render), so the deck starts flowing immediately without user interaction.

### `src/hooks/useConsumerJourneyNarration.ts`
- Update `preloadNext`: change `nextSlideId <= 9` to `nextSlideId <= 10` so the final slide's audio is preloaded during slide 9's narration.

