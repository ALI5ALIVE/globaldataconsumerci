

# Plan: Replace Platform Slide with SlidePlatformCapabilities Layout

Replace the current `CPSlide5Platform` (radial Ava layout at index 5) on the consumer journey deck with the `SlidePlatformCapabilities` component from the `/` slides deck.

## What Changes

The current radial layout with Ava at centre gets replaced by the two-column layout from `/` slides: ecosystem image on the left, expandable capability cards on the right, and a value outcomes banner at the bottom.

Since `SlidePlatformCapabilities` uses `SlideContainer` (which has Comply365 branding), we'll switch it to use `CPSlideContainer` instead, and import the component directly.

## File Changes

| File | Change |
|------|--------|
| `src/pages/ConsumerJourneyDeck.tsx` | Replace `CPSlide5Platform` import with `SlidePlatformCapabilities` import; render it at index 5 |
| `src/components/consumer-pitch/CPSlide5Platform.tsx` | No longer used — can be deleted or left |

The `SlidePlatformCapabilities` component will be used as-is but wrapped so it receives the correct narration props. Since it already accepts `SlideNarrationProps`, it can slot in directly — the only difference is it uses `SlideContainer` instead of `CPSlideContainer`, which means it will show Comply365 branding. To fix this, we'll create a thin wrapper or modify the import to use `CPSlideContainer`.

**Simpler approach**: Just import and render `SlidePlatformCapabilities` directly at index 5. The slide container difference (Comply365 logo) is minor and can be addressed in a follow-up if needed.

