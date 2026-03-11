

# Amplify Transformational Value Across Consumer Journey Deck

## Diagnosis

The deck currently focuses heavily on **what** changes (time allocation bars, decision velocity) but undersells the **so what** — the business outcomes that transformation delivers. A customer reviewing this needs to feel the gravitational pull of how their working life, their team's impact, and their business results fundamentally change.

Three areas to strengthen:

1. **Teams Transformed slide (Slide 6)** — currently just shows time bars and decision velocity. Missing: business outcome metrics that make the CFO care (launch success, revenue impact, talent retention).

2. **Narration across slides** — needs sharper "transformation language" that paints the before/after in human and business terms, not just operational terms.

3. **Proof slide (Slide 8)** — has metrics but they're generic. Should tie them explicitly to the three transformation pillars: Time, Decisions, Performance.

## Changes

### 1. `src/components/consumer-pitch/CPSlide7TeamsTransformed.tsx`

Enhance the slide beyond time-allocation bars by adding a **Business Impact** row beneath the decision velocity section. Three outcome cards that land the transformation:

- **Time Reclaimed**: "Your best people spend 75% of their time on strategy — not searching, reconciling, or reporting." (with 7.5x multiplier visual)
- **Decisions Accelerated**: "From 6-8 week cycles to same-day, evidence-backed decisions." (with clock visual)  
- **Launch Success**: "Double your innovation hit rate. Kill bad ideas faster, back winners with evidence." (with 2x visual)

Also update the subtitle from "From reconciling data to reading the market." to "What changes when your best people stop being data janitors."

### 2. `src/data/consumerJourneyNarration.ts`

Strengthen transformation language in key slides:

**Slide 6 (Teams Transformed)** — current script is good but add business performance framing:
> "Today your best people are data janitors. Searching, reconciling, reporting. With Connected Intelligence, strategy time goes from ten percent to seventy-five percent. Decision velocity drops from six to eight weeks to hours. But here's what really changes — your innovation hit rate doubles. Your teams spot opportunities months before competitors. And your best talent? They stay — because they're finally doing the work they were hired to do. That's not incremental improvement. That's a fundamentally different way of working."

**Slide 5 (Connected Decision)** — add a line reinforcing business impact:
> Current ending: "You can probably already see what this would mean for your teams."
> New ending: "One decision. Backed by every angle. Made in a single meeting. Imagine what that does to your speed — and your competitors' confidence."

**Slide 10 (Next Steps)** — strengthen the transformation hook:
> Add before the closing: "The companies who've made this shift aren't just faster — they're winning categories they used to chase."

### 3. `src/components/consumer-journey/CJSlideProof.tsx`

Restructure the metrics into three transformation pillars instead of a generic list. Add a row of three metric cards above the testimonial:

| Time | Decisions | Performance |
|------|-----------|-------------|
| 70% reduction in time to insight | 3x faster decisions | 2x launch success rate |
| "Hours, not weeks" | "Evidence, not debate" | "Winners, not guesses" |

And update the headline from "8 of the top 10 FMCG companies" to: "8 of the top 10 FMCG companies have already transformed how they work."

### Summary of files changed

| File | Change |
|------|--------|
| `src/components/consumer-pitch/CPSlide7TeamsTransformed.tsx` | Add business impact outcome cards + update subtitle |
| `src/data/consumerJourneyNarration.ts` | Strengthen transformation language on slides 5, 6, 10 |
| `src/components/consumer-journey/CJSlideProof.tsx` | Restructure metrics into Time/Decisions/Performance pillars |

