

# Plan: Add Back "Nothing Like This" Competitive Slide

The competitive positioning slide (`CPSlide9NothingLikeThis` — "Nothing like this exists") needs to be re-added to the Consumer Journey deck.

## Placement

Insert it after "Teams Transformed" (index 7) and before "Proof" (index 8), as competitive positioning logically bridges team outcomes into proof points.

## Changes — `src/pages/ConsumerJourneyDeck.tsx`

1. **Import** `CPSlide9NothingLikeThis` from `@/components/consumer-pitch/CPSlide9NothingLikeThis`
2. **Add slide entry** at index 8: `{ id: "cp-slide-8", label: "Nothing Like This" }`
3. **Bump "Proof"** to index 9
4. **Add render**: `<CPSlide9NothingLikeThis {...getNarrationProps(8)} />` between Teams Transformed and Proof
5. Update Proof narration prop to index 9

Final slide order (10 slides, indices 0–9):
0 The Pressure → 1 Your Monday → 2 Seven Sources → 3 The Cost → 4 One Lens → 5 The Platform → 6 The Connected Decision → 7 Teams Transformed → **8 Nothing Like This** → 9 Proof

