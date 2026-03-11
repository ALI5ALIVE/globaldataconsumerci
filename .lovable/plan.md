

# Remove Platform Slide from Consumer Journey Deck

## Change

Remove `GDSlide4Proposition` (The Platform / taxonomy wheel) from the Consumer Journey deck, creating a tighter 11-slide arc.

## File: `src/pages/ConsumerJourneyDeck.tsx`

1. **Remove import** (line 9): `import GDSlide4Proposition`
2. **Update `slides` array** (lines 164-177) — remove `{ id: "cj-slide-8", label: "The Platform" }` and re-index remaining entries:

```text
0  The Pressure
1  Your Monday
2  Seven Sources
3  The Cost
4  One Lens, One New Way
5  The Connected Decision
6  Teams Transformed
7  Maturity Journey
8  Proof
9  Why Not DIY?
10 Next Steps
```

3. **Update JSX** (lines 292-304) — remove `<GDSlide4Proposition {...getNarrationProps(8)} />` and re-index narration props for the remaining slides:
   - `CJSlideProof` → `getNarrationProps(8)`
   - `CJSlideWhyNotDIY` → `getNarrationProps(9)`
   - `CJSlide12CTA` → `getNarrationProps(10)`

4. **Update comment** (line 291): Change "11-slide" to "11-slide" (stays at 11 slides, indices 0-10).

No other files need changes.

