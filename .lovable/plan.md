

# Add GlobalData Connected Intelligence Title Slide

Replace the current Consumer Journey title slide (CJSlide0Title) with a branded GlobalData "Connected Intelligence for Consumer Brands" title slide featuring a hard-hitting strapline.

## Design

- **Headline**: "Connected Intelligence for Consumer Brands"
- **Strapline**: "Stop reacting. Start leading. Turn fragmented consumer data into the fastest path to growth."
- **Audience badge**: "For CMOs, CSOs & Category Leaders"
- **Key stats strip**: 3 punchy proof points (e.g., "8 of top 10 FMCG", "95% global GDP coverage", "40+ years of market intelligence")
- **Visual style**: Matches existing GDSlide0Title aesthetic — gradient orbs, subtle grid, dark theme, motion animations
- **Keeps**: SlidePlayButton, scroll indicator, narration props interface

## Changes

### `src/components/consumer-journey/CJSlide0Title.tsx`
- Replace current "pressure cards" layout with branded title slide
- Large gradient headline: "Connected Intelligence" / "for Consumer Brands"
- Strapline below in muted text
- Audience callout card (styled like GD title's executive takeaway)
- 3-column stats strip with animated entrance
- Bottom quote: "The brands that win don't have more data. They have connected intelligence."
- Keep scroll indicator and play button

No changes needed to ConsumerJourneyDeck.tsx — same component, same slot.

