

# Plan: Add "Your Operating Model Transformed" Slide

## New Component
Create `src/components/consumer-journey/CJSlideOperatingModel.tsx` — a full-screen slide with the title "Your Operating Model Transformed" using `GDSlideContainer`.

Six canvas cards in a 3×2 grid, each with an icon, title, and description:

| Icon | Title | Description |
|------|-------|-------------|
| → | Workflow Impact | How daily work changes |
| ⟳ | Role Evolution | Who does what differently |
| ◆ | Decision Rights | Where authority shifts |
| ↔ | Information Flow | What data moves where |
| ◎ | Success Metrics | How outcomes are measured |
| ⚡ | Change Velocity | Speed of transformation |

Each card uses a subtle border, icon accent, and consistent dark theme styling matching the deck.

## Deck Integration — `ConsumerJourneyDeck.tsx`
- Import the new component
- Insert as slide index 7 (after Connected Decision, before Teams Transformed)
- Add `{ id: "cj-slide-7", label: "Operating Model" }` to slides array
- Re-index Teams Transformed to 8, Proof to 9

## Slide Order After Change (10 slides)
0. The Pressure
1. Your Monday
2. Seven Sources
3. The Cost
4. One Lens
5. The Platform
6. The Connected Decision
7. **Operating Model** ← new
8. Teams Transformed
9. Proof

