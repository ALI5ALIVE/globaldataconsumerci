

# Plan: Add Maturity Journey Slide to Consumer Journey Deck

## What

Create a single consolidated maturity slide that combines the 4-stage journey from the sales pitch (Fragmented → Connected → Optimised → Predictive) into one interactive slide for the consumer journey deck. This replaces the need for 4 separate slides.

## New Component: `src/components/consumer-journey/CJSlideMaturityJourney.tsx`

A single full-screen slide showing all 4 maturity stages with:
- A visual maturity curve (hockey-stick shape) with 4 stage markers
- Clickable/auto-highlighting stage cards showing:
  - **Fragmented**: 60% reconciliation / 10% strategy, 6-8 week decisions
  - **Connected**: The gateway — one taxonomy, reconciliation drops to 20%, 2-3 week decisions
  - **Optimised**: AI-powered cross-solution insights, 3-5 day decisions
  - **Predictive**: AI anticipates shifts, 75% strategy time, decisions in hours
- Time allocation bars for each stage (reconciliation vs analysis vs strategy)
- "Connected" stage visually emphasised as the gateway/unlock

Styling matches existing consumer journey deck (dark theme, card-based layout).

## Placement

Insert after "Teams Transformed" (index 7) and before "Nothing Like This" (index 8). This logically flows: teams are transformed → here's the maturity journey → nothing like this exists → why not DIY → proof.

## Changes

### `src/pages/ConsumerJourneyDeck.tsx`
- Import new `CJSlideMaturityJourney` component
- Add slide entry at index 8: `{ id: "cj-slide-8", label: "Maturity Journey" }`
- Bump remaining slides: Nothing Like This → 9, Why Not DIY → 10, Proof → 11
- Add render and update narration prop indices (12 slides total, indices 0-11)

### `src/data/consumerJourneyNarration.ts`
- Add narration entry for slideId 8 covering the 4-stage maturity journey in a single script, drawing from the sales pitch narration content (stages Fragmented through Predictive with time allocation shifts)

### Final slide order (12 slides):
0 The Pressure → 1 Your Monday → 2 Seven Sources → 3 The Cost → 4 One Lens → 5 The Platform → 6 Connected Decision → 7 Teams Transformed → **8 Maturity Journey** → 9 Nothing Like This → 10 Why Not DIY → 11 Proof

