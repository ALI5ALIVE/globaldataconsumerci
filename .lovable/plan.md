

# Plan: Add Real Vendor Names to Seven Conflicting Signals

Replace the generic source labels with recognizable industry vendors that supply each type of insight.

## Updated Sources Array

| # | Current Label | New Label | Vendor | Signal (unchanged) |
|---|--------------|-----------|--------|-------------------|
| 0 | Trend Report | Mintel\nTrends | Mintel | "Plant-based is peaking" |
| 1 | Market Sizing | Euromonitor\nMarket Sizing | Euromonitor | "$1.4B TAM (or $2.1B?)" |
| 2 | Competitive DB | Innova\nCompetitive Intel | Innova | "No significant moves" |
| 3 | Innovation Agency | IDEO /\nExternal Agency | IDEO | "Consumer fatigue detected" |
| 4 | Sales Intel | NielsenIQ\nRetail Data | NielsenIQ | "Retailer X is demanding it" |
| 5 | Consumer Panel | Kantar\nConsumer Panel | Kantar | "Trial is up, repeat is flat" |
| 6 | Internal Data | Circana\nInternal POS | Circana | "Our test market grew 22%" |

## File Change

| File | Change |
|------|--------|
| `src/components/consumer-pitch/CPSlide2SevenSources.tsx` | Update the `sources` array labels to include vendor names as shown above |

Single file, data-only change.

