

# Plan: Remove Operating Model Slide

## Changes

### `src/pages/ConsumerJourneyDeck.tsx`
- Remove the import of `CJSlideOperatingModel`
- Remove `{ id: "cj-slide-7", label: "Operating Model" }` from the `slides` array
- Remove `<CJSlideOperatingModel {...getNarrationProps(7)} />` from the render
- Re-index "Teams Transformed" back to 7 and "Proof" back to 8 (9 slides total)

### `src/components/consumer-journey/CJSlideOperatingModel.tsx`
- Delete file

