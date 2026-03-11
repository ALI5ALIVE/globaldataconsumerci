

# Plan: Reorder Slides — Move The Platform and Nothing Like This

Based on your request: Move "The Platform" (currently index 5) to after the Maturity Journey trio, and move "Nothing Like This" (currently index 8) to after "Proof" (now at index 9).

## New Order (12 slides)

| Index | Label | Component |
|-------|-------|-----------|
| 0 | The Pressure | CJSlide0Title |
| 1 | Your Monday | CPSlide1MondayMorning |
| 2 | Seven Sources | CPSlide2SevenSources |
| 3 | The Cost | CPSlide3TheCost |
| 4 | One Lens | CPSlide4ImagineOneLens |
| 5 | **The Connected Decision** | CJSlideConnectedDecision |
| 6 | **Teams Transformed** | CPSlide7TeamsTransformed |
| 7 | **Maturity Journey** | CJSlideMaturityJourney |
| 8 | **The Platform** *(moved from 5)* | GDSlide4Proposition |
| 9 | **Proof** *(was 10)* | CJSlideProof |
| 10 | **Nothing Like This** *(moved from 8)* | CPSlide9NothingLikeThis |
| 11 | **Why Not DIY?** *(was 11)* | CJSlideWhyNotDIY |

## Changes

### `src/pages/ConsumerJourneyDeck.tsx`
- **Slides array**: Reorder to match new sequence
- **Render block**: Reorder components with updated `getNarrationProps` indices (5-11)

### `src/data/consumerJourneyNarration.ts`
- Remap `slideId` values for affected narration entries to match new positions (5-11)

