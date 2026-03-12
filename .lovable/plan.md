

# Swap Slides 10/11 + Enrich "Why Not DIY?" Narration

## What Changes

1. **Swap Proof and Why Not DIY slides** — move "Why Not DIY?" to position 10 (after Proof) so the arc flows: Proof first (here's what others achieved), then the objection handling (why you can't just DIY it), then CTA.

2. **Deepen the "Why Not DIY?" narration** — the current script is ~70 words and surface-level. Expand it to ~150 words with concrete pain points: what DIY actually looks like (the taxonomy nightmare, the maintenance burden, the 18-month timeline that becomes 36), and why Connected Intelligence is structurally different (not just bundled tools, but a unified intelligence layer built on 40 years of analyst-curated data).

## Changes

### `src/pages/ConsumerJourneyDeck.tsx`

Swap the render order and slides array:
- Position 9 → `CJSlideProof` (was `CJSlideWhyNotDIY`)
- Position 10 → `CJSlideWhyNotDIY` (was `CJSlideProof`)
- Update `slides` array labels to match

### `src/data/consumerJourneyNarration.ts`

**Swap slideId assignments:**
- Proof becomes slideId 9, Why Not DIY becomes slideId 10

**Expand the Why Not DIY script (slideId 10) from ~70 to ~150 words:**

> "Now, here's the question we always get: can't we just integrate what we already have? Let's be honest about what that looks like. You start with fourteen separate contracts — each with its own taxonomy, its own definitions, its own API. Eighteen months of integration becomes thirty-six when you factor in maintenance, version changes, and the three people you need just to keep the pipes connected. And even then — you still don't have cross-pollination. A trend signal in one tool never reaches the innovation scorecard in another. The data flows, but the intelligence doesn't. Connected Intelligence is structurally different. One taxonomy across every solution. One contract. Ninety-day deployment — not because we cut corners, but because it's built on forty years of analyst-validated market intelligence covering ninety-five percent of global GDP. The infrastructure already exists. You're not building it — you're switching it on. The real question isn't whether to connect your intelligence. It's how many more planning cycles you're willing to lose while you try to do it yourself."

**Update the Proof script (slideId 9)** — remove the trailing "could we just build this ourselves?" line since the DIY slide now follows it:

> "Leading global FMCG companies are already seeing this. Three times faster decisions. Seventy percent reduction in time to insight. Double the launch success rate. Thirty percent lower total cost of ownership. This is Connected Intelligence — proven and delivering."

