

# Update Slide 5: Solution Product Names + Keep Personas

## Changes to `src/components/consumer-journey/CJOneLensHub.tsx`

1. **Rename inner ring labels** from verb-led actions to solution product names:
   - "Discover\nTrends" → "Strategic\nForesight"
   - "Size\nOpportunity" → "Market\nSizing"
   - "Track\nCompetition" → "Competitive\nIntelligence"
   - "Validate\nInnovation" → "Innovation\nValidation"
   - "Win at\nShelf" → "Commercial\nIntelligence"
   - "Optimise\nCosts" → "Procurement\nIntelligence"

2. **Replace the italic `solutionName` subtitle** with a short value-prop line:
   - "12-month foresight horizon"
   - "110 countries · 1,000+ segments"
   - "25,000 companies tracked"
   - "8-week validated sprints"
   - "Evidence-backed listings"
   - "Consolidated vendor savings"

3. **Keep** personas (outer ring), spokes, arcs, hover tooltips — all unchanged.

Single file, data-only changes to the `valueChainStages` array.

