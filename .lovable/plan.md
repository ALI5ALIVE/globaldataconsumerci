

# Remove All Routes Except Consumer Journey

## Change

In `src/App.tsx`, remove the `/`, `/sales-pitch`, and `/consumer-pitch` routes. Make `ConsumerJourneyDeck` the sole route at `/`. Remove unused imports.

### `src/App.tsx`
- Remove imports: `GlobalDataDeck`, `ConsumerPitchDeck`, `SalesPitchDeck`
- Change routes to only:
  - `<Route path="/" element={<ConsumerJourneyDeck />} />`
  - `<Route path="*" element={<NotFound />} />`

