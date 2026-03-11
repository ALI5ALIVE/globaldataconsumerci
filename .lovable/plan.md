

# Plan: Reorder and Remove Slides

**Current order (0-10):**
```
0  The Pressure
1  Your Monday
2  Seven Sources
3  The Cost
4  One Lens
5  The Connected Decision
6  Connected Intelligence
7  Why Not DIY?        ← REMOVE
8  Proof
9  Teams Transformed
10 Let's Talk           ← MOVE after slide 6
```

**New order (0-9, 10 slides):**
```
0  The Pressure
1  Your Monday
2  Seven Sources
3  The Cost
4  One Lens
5  The Connected Decision
6  Connected Intelligence
7  Let's Talk            (moved from 10)
8  Proof
9  Teams Transformed
```

## Changes

| File | Change |
|------|--------|
| `src/pages/ConsumerJourneyDeck.tsx` | Remove `CJSlideWhyNotDIY` from slides array and JSX, move `CJSlide12CTA` after `CJSlide11ConnectedInAction`, re-index narration props (0-9) |
| `src/data/consumerJourneyNarration.ts` | Remove "Why Not DIY?" entry, reorder "Let's Talk" to slideId 7, re-index Proof→8, Teams→9 |
| `src/hooks/useConsumerJourneyNarration.ts` | Update max slide cap to 9 |

