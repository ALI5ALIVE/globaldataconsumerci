

# Plan: Reorder Consumer Journey Slides

## Current Order (indices 0–10)
```
0  CJSlide0Title           — The Pressure
1  CPSlide1MondayMorning   — Your Monday
2  CPSlide2SevenSources    — Seven Sources
3  CPSlide3TheCost         — The Cost
4  CPSlide4ImagineOneLens  — One Lens
5  CPSlide5Platform        — The Platform
6  CJSlideConnectedDecision — The Connected Decision
7  CJSlide11ConnectedInAction — Connected Intelligence
8  CJSlide12CTA            — Let's Talk        ← REMOVE
9  CJSlideProof            — Proof             ← SWAP
10 CPSlide7TeamsTransformed — Teams Transformed ← SWAP
```

## New Order (indices 0–9, 10 slides)
```
0  CJSlide0Title
1  CPSlide1MondayMorning
2  CPSlide2SevenSources
3  CPSlide3TheCost
4  CPSlide4ImagineOneLens
5  CPSlide5Platform
6  CJSlideConnectedDecision
7  CJSlide11ConnectedInAction
8  CPSlide7TeamsTransformed   (was 10)
9  CJSlideProof               (was 9)
```

## Changes

| File | Change |
|------|--------|
| `src/pages/ConsumerJourneyDeck.tsx` | Remove CJSlide12CTA from slides array and JSX, swap Proof and Teams Transformed, update slides array to 10 entries |
| `src/hooks/useConsumerJourneyNarration.ts` | Update max slide cap to 9 |
| `src/data/consumerJourneyNarration.ts` | Remove slideId 8 narration entry, shift remaining: Teams→8, Proof→9 |

No structural or component changes — just reorder and removal.

