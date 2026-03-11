

# Plan: Remove "Connected Intelligence in Action" Slide

Remove `CJSlide11ConnectedInAction` (slide index 7 — the cross-pollination slide showing Sarah/James/Priya/Marcus/Elena/David connections) from the Consumer Journey deck, reducing from 10 to 9 slides.

## Changes — `src/pages/ConsumerJourneyDeck.tsx`

1. Remove the `CJSlide11ConnectedInAction` import (line 17)
2. Remove `{ id: "cj-slide-7", label: "Connected Intelligence" }` from the `slides` array (line 168)
3. Remove `<CJSlide11ConnectedInAction {...getNarrationProps(7)} />` from the render (line 294)
4. Re-index the remaining slides after index 6: Teams Transformed becomes `getNarrationProps(7)`, Proof becomes `getNarrationProps(8)`

