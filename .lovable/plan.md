

# Plan: Add Back "Why Not DIY?" Slide

## Placement
Insert after "Nothing Like This" (index 8) and before "Proof", as "build vs buy" naturally follows competitive positioning and precedes proof points.

## Changes — `src/pages/ConsumerJourneyDeck.tsx`

1. **Import** `CJSlideWhyNotDIY` from `@/components/consumer-journey/CJSlideWhyNotDIY`
2. **Add slide entry** at index 9: `{ id: "cj-slide-9", label: "Why Not DIY?" }`
3. **Bump "Proof"** to index 10
4. **Add render**: `<CJSlideWhyNotDIY {...getNarrationProps(9)} />` between Nothing Like This and Proof
5. Update Proof narration prop to index 10

Final order (11 slides, 0–10):
0 The Pressure → 1 Your Monday → 2 Seven Sources → 3 The Cost → 4 One Lens → 5 The Platform → 6 The Connected Decision → 7 Teams Transformed → 8 Nothing Like This → **9 Why Not DIY?** → 10 Proof

