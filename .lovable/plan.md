
# Change "Platform Shift" to "Connected Intelligence" on Your Roadmap Slide

## Summary
On Slide 7 ("Your Roadmap to Predictive Performance"), change the label "PLATFORM SHIFT" to "CONNECTED INTELLIGENCE" on the hockey stick curve visualization.

## File to Edit
`src/components/globaldata-slides/GDSlide7MaturityCurve.tsx`

## Change
| Line | Current | New |
|------|---------|-----|
| 467 | `PLATFORM SHIFT` | `CONNECTED INTELLIGENCE` |

## Technical Details
The text element is part of an SVG group that renders a marker at Stage 3 on the maturity curve. The change is a simple text replacement within the existing `<text>` element.

The box dimensions (`width="180"`) on line 465 are sufficient to accommodate "CONNECTED INTELLIGENCE" as it's roughly the same character length as "PLATFORM SHIFT".
