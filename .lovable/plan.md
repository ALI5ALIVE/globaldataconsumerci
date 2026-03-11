

# Plan: Replace Platform Slide with GDSlide4Proposition (Taxonomy Wheel)

## Problem
Slide 5 currently shows `CPSlide5ConnectedIntelligence` — a simple five-card layout. The user wants the interactive taxonomy wheel slide (`GDSlide4Proposition`) which features:
- The "Connected Consumer Intelligence" title
- A value proposition banner
- The interactive `ConnectedIntelligenceWheel` (SVG taxonomy diagram)
- The `SolutionValuePanel` with Jobs to Be Done, pain-to-outcome, and real examples
- A bottom callout

## Changes

| File | Change |
|------|--------|
| `src/pages/ConsumerJourneyDeck.tsx` | Replace `CPSlide5ConnectedIntelligence` import with `GDSlide4Proposition`; render it at index 5 |

`GDSlide4Proposition` already has the exact title, subtitle, content, and narration props interface the user wants. It uses `GDSlideContainer` (GlobalData branding) instead of `CPSlideContainer`, but the content and layout are correct. The branding difference is minor (GlobalData logo vs consumer pitch footer text).

Single import swap — no other files need changing.

