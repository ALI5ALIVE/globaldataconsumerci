

# Insert CTA Slide After Slide 8 (The Platform)

The CTA slide (`CJSlide12CTA`) exists as a component but isn't currently in the deck. It will be inserted after slide 8 ("The Platform"), pushing Proof, Nothing Like This, and Why Not DIY down by one position.

## Changes to `src/pages/ConsumerJourneyDeck.tsx`

1. **Import** `CJSlide12CTA` from `@/components/consumer-journey/CJSlide12CTA`
2. **Add entry** to `slides` array at index 9: `{ id: "cj-slide-12", label: "Next Steps" }`
3. **Insert** `<CJSlide12CTA {...getNarrationProps(9)} />` after `GDSlide4Proposition` in the JSX
4. **Shift** narration prop indices for Proof (→10), Nothing Like This (→11), Why Not DIY (→12)

### New slide order (13 slides):
```text
 0  Title
 1  Monday Morning
 2  Seven Sources
 3  The Cost
 4  One Lens
 5  Connected Decision
 6  Teams Transformed
 7  Maturity Journey
 8  The Platform
 9  Next Steps (CTA)  ← inserted
10  Proof
11  Nothing Like This
12  Why Not DIY
```

## Narration data

Add a narration entry for slideId 12 in `src/data/consumerJourneyNarration.ts` (or leave it without narration for now — the component works standalone).

