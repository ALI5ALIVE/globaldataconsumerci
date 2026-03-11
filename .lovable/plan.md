

# Plan: Deck Improvement Sprint Based on Scoring

Based on the scorecard, here are the highest-impact changes to move from 6.5 to 8+, targeting the five gaps identified.

## 1. Fix Persona Fatigue (Impact: +1.5 to Narrative Arc)

Instead of 6 full-screen slides, condense personas into **2 slides of 3 personas each** — a compact "team panorama" format. Each persona gets a card (avatar, pain quote, 3 metrics, unlocked actions) rather than a full slide. This halves the middle section from 6 slides to 2 while keeping all the content.

**Files:** Create `src/components/consumer-journey/PersonaPanorama.tsx`, edit `ConsumerJourneyDeck.tsx` to replace 6 persona slides with 2 panorama slides.

## 2. Add Social Proof Slide (Impact: +2.0 to Credibility)

Replace the generic Results slide with a **"Trusted By" proof slide** — real logos (Ferrero, Mondelez, etc.), a named quote with photo, and a "8 of top 10 FMCG" badge. Use a testimonial-first layout rather than abstract stat cards.

**Files:** Create `src/components/consumer-journey/CJSlideProof.tsx`, edit `ConsumerJourneyDeck.tsx`.

## 3. Add "Why Not Just Integrate?" Slide (Impact: +1.5 to Differentiation)

Insert a slide between Connected Intelligence and Results that directly addresses the #1 objection. Show a visual comparison: "DIY integration" (fragmented, 14 contracts, 18 months, no shared taxonomy) vs "Connected Intelligence" (unified, 1 platform, 90 days, one taxonomy). Make the differentiation visual and undeniable.

**Files:** Create `src/components/consumer-journey/CJSlideWhyNotDIY.tsx`, edit `ConsumerJourneyDeck.tsx`.

## 4. Add Competitive Urgency (Impact: +1.0 to Urgency)

On the opening "Pressure" slide (Slide 0), add a fourth pressure card: "Your Competitors" — "8 of the top 10 FMCG companies have already connected their intelligence. The question isn't whether — it's when." Move this social proof from the CTA (where it's buried) to the opening (where it creates urgency).

**Files:** Edit `src/components/consumer-journey/CJSlide0Title.tsx`.

## 5. Strengthen CTA (Impact: +1.0 to Close)

Replace the soft "Let's have the conversation" with a structured 3-option CTA: (1) "30-min Discovery Call" (2) "Intelligence Maturity Assessment" (3) "90-Day Pilot". Add a risk reversal line: "No commitment. No procurement. Just clarity." Give the salesperson something concrete to propose.

**Files:** Edit `src/components/consumer-journey/CJSlide12CTA.tsx`.

## Revised Slide Order (15 → 12 slides)

```text
 0  The Pressure (+ competitor urgency card)
 1  Your Monday Morning
 2  Seven Sources
 3  The Cost
 4  One Lens
 5  Team Panorama 1 (Sarah, James, Priya)
 6  Team Panorama 2 (Marcus, Elena, David)
 7  Connected Intelligence in Action
 8  Why Not Just Integrate?
 9  Proof (logos + testimonial)
10  Teams Transformed
11  Let's Talk (structured CTA)
```

## Summary

| File | Action |
|------|--------|
| `src/components/consumer-journey/PersonaPanorama.tsx` | **Create** — 3-persona compact panorama slide |
| `src/components/consumer-journey/CJSlideProof.tsx` | **Create** — Social proof with logos + quote |
| `src/components/consumer-journey/CJSlideWhyNotDIY.tsx` | **Create** — DIY vs Connected comparison |
| `src/components/consumer-journey/CJSlide0Title.tsx` | **Edit** — Add competitor urgency card |
| `src/components/consumer-journey/CJSlide12CTA.tsx` | **Edit** — Structured 3-option CTA |
| `src/pages/ConsumerJourneyDeck.tsx` | **Edit** — New slide order, replace 6 personas with 2 panoramas |

Projected score improvement: **6.5 → 8.2**

