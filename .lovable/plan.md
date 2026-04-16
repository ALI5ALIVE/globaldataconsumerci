

# Generate Branded GlobalData PPTX from Consumer Journey Deck

## Summary

Create a downloadable .pptx file that translates the 12-slide Consumer Journey deck into a fully branded GlobalData presentation, using the 2025 master template's brand system.

## Brand System (from template)

- **Font**: Poppins (all slides)
- **Primary palette**: Navy Blue `#1F2432` (dark bg), Cream `#FBF5E9` (light bg), Hyper Blue `#293FE1` (accent/CTA), GD Black `#242528` (text), Mid Blue `#09216B`, White `#FFFFFF`
- **Secondary**: Light Grey `#F2F2F2`, Mid Grey `#D1D5D8`, Dark Grey `#676B75`
- **Logo**: G-mark icon top-right on every content slide; full "GlobalData" wordmark on title slide
- **Footer**: `globaldata.com` bottom-center + slide number bottom-right
- **Layout patterns**: Dark navy title slides, white/cream content slides, diagonal image crops with cream border on hero slides

## Approach

Use **pptxgenjs** to generate a 12-slide .pptx from scratch, embedding all slide content from `consumerJourneyNarration.ts` and `ConsumerJourneyDeck.tsx` into on-brand layouts. Also add a "Download Deck" button to the web app.

## Slide-by-Slide Plan

| # | Title | Layout |
|---|-------|--------|
| 01 | Connected Intelligence for Consumer Brands | Dark navy bg, full logo wordmark, subtitle, stats strip, date + presenter fields |
| 02 | The Pressure You're Under | White bg, bold heading, 3 bullet pain points |
| 03 | Your Monday Morning | White bg, scenario narrative with key stats callouts |
| 04 | Seven Sources, Seven Signals | Navy bg, "60% reconciling / 10% strategy / 12 weeks" stat callouts |
| 05 | What It's Costing You | Cream bg, revenue-at-risk headline (63M), personal cost bullets |
| 06 | One Lens, One New Way | Navy bg, 6 persona cards (Sarah/James/Priya/Marcus/Elena/David) |
| 07 | The Connected Decision | White bg, plant-based snacking scenario flow across 5 personas |
| 08 | Teams Transformed | Cream bg, before/after metrics (10% to 75% strategy time, etc.) |
| 09 | The Intelligence Maturity Journey | White bg, 4-stage progression (Fragmented > Connected > Optimised > Predictive) |
| 10 | The Proof | Navy bg, 4 large stat callouts (3x, 70%, 2x, 30%) |
| 11 | Why Not DIY? | White bg, DIY vs Connected comparison (14 contracts vs 1, 36mo vs 90 days) |
| 12 | Next Steps | Navy bg, CTA with maturity assessment offer, contact details |

## Technical Steps

1. **Copy the .potx template** to extract the logo images (G-mark, wordmark) for embedding in slides
2. **Install Poppins font** (Google Font) for LibreOffice rendering
3. **Write a Node.js script** using pptxgenjs that:
   - Sets 16:9 layout with Poppins as default font
   - Creates each slide with the correct background color, logo placement, and footer
   - Embeds the G-mark logo as base64 on content slides
   - Adds narration scripts as speaker notes on every slide
4. **Generate the .pptx** to `/mnt/documents/`
5. **QA**: Convert to PDF, then to images, inspect every slide
6. **Add a Download button** to `ConsumerJourneyDeck.tsx` that links to a static copy of the file in the `public/` folder, or triggers a client-side download

## Files Changed

- **New**: `/tmp/generate-gd-deck.js` (generation script)
- **New**: `public/downloads/GlobalData-Connected-Intelligence.pptx` (generated file)
- **Modified**: `src/pages/ConsumerJourneyDeck.tsx` (add download button in header)
- **New**: `src/components/DeckDownloadButton.tsx` (download UI component)

