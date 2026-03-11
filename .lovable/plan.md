

# Plan: Replace Platform Slide with Connected Consumer Intelligence

## Problem
Slide 5 currently shows `SlidePlatformCapabilities` (the Comply365 platform slide with ecosystem image and capability cards). User wants the `CPSlide5ConnectedIntelligence` component instead — the five-solution card layout with the connected taxonomy bar.

## Changes

| File | Change |
|------|--------|
| `src/pages/ConsumerJourneyDeck.tsx` | Replace `SlidePlatformCapabilities` import with `CPSlide5ConnectedIntelligence`; render it at index 5 |
| `src/components/consumer-pitch/CPSlide5ConnectedIntelligence.tsx` | Update subtitle to "One solution that moves faster, aligns better, and acts with confidence" |

