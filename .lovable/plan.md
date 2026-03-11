

# Plan: Reorder Slides 6 and 10

Move "Why Not DIY?" (currently index 10) to the end, and move "Teams Transformed" (currently index 6) to position 9.

## New order (12 slides):

| Index | Slide |
|-------|-------|
| 0 | The Pressure |
| 1 | Your Monday |
| 2 | Seven Sources |
| 3 | The Cost |
| 4 | One Lens |
| 5 | The Platform |
| 6 | The Connected Decision |
| 7 | Maturity Journey |
| 8 | Nothing Like This |
| 9 | Teams Transformed |
| 10 | Proof |
| 11 | Why Not DIY? |

## Changes

### `src/pages/ConsumerJourneyDeck.tsx`
- **Slides array** (lines 163-176): Reorder entries to match the new sequence
- **Render block** (lines 291-303): Reorder components and update `getNarrationProps` indices

### `src/data/consumerJourneyNarration.ts`
- Update `slideId` values for affected narration entries to match new positions (6-11)

