

# Narrative Review: Sharpening the Consumer Journey Deck

## Current Assessment

The content quality on individual slides is strong. The plant-based snacking thread (slides 0-5) is well-executed. But there are structural problems that weaken the overall impact.

## Problem 1: The closing arc is backwards

The current order after slide 8 is:

```text
 8  The Platform
 9  Next Steps (CTA)   ← too early
10  Proof               ← should come before CTA
11  Nothing Like This   ← should come before CTA
12  Why Not DIY?        ← should come before CTA
```

A world-class sales deck builds conviction THEN asks for action. Right now the CTA fires before you've earned the right to ask. Proof, competitive differentiation, and objection-handling all come after the ask — the listener has already mentally checked out.

## Problem 2: Redundant "Nothing Like This" messaging

The CTA slide (CJSlide12CTA) already leads with "Nothing like this exists" and describes the five connected solutions. Then slide 11 (CPSlide9NothingLikeThis) repeats almost the exact same headline and copy. The listener hears the same claim twice with no new information.

## Problem 3: No emotional re-escalation before the close

Great sales decks follow a tension curve: Pain → Relief → Vision → Proof → Urgency → Ask. This deck does Pain → Relief → Vision well (slides 0-8), but then jumps straight to the ask without re-escalating urgency or stacking proof first.

---

## Proposed Changes

### 1. Restructure the closing arc (slide order in ConsumerJourneyDeck.tsx)

New order:
```text
 0  The Pressure
 1  Your Monday
 2  Seven Sources
 3  The Cost
 4  One Lens, One New Way
 5  The Connected Decision
 6  Teams Transformed
 7  Maturity Journey
 8  The Platform
 9  Proof                    ← moved up: earns credibility
10  Why Not DIY?             ← handles the objection
11  Next Steps (CTA)         ← now the final slide, earned
```

**Drop slide 11 (Nothing Like This)** entirely — its content is already in the CTA slide and repeating it dilutes the message.

### 2. Sharpen the CTA slide (CJSlide12CTA)

- Remove the "Nothing like this exists" hero block (it now serves as the closing slide, not a differentiation slide)
- Replace with a stronger, action-oriented close: **"Your competitors already see the full picture. Let's make sure you do too."**
- Keep the three CTA options but make them punchier
- Add a final urgency line referencing the "8 of top 10" stat

### 3. Tighten the Title slide (CJSlide0Title)

- Sharpen headline from "You're under more pressure than ever" to **"The consumer has already moved. Have you?"**
- Tighten closing quote to something more provocative

### 4. Sharpen copy across key slides

- **Slide 3 (The Cost)**: Change title from "What It's Costing You" to **"What You've Already Lost"** — past tense hits harder
- **Slide 4 (One Lens)**: Change title from "Imagine One Lens, One New Way of Working" to **"Now Imagine One Lens"** — shorter, more dramatic after the pain
- **Slide 6 (Teams Transformed)**: Change subtitle from "From data janitors to strategic advisors" to **"From reconciling data to reading the market"** — more specific, more aspirational

### 5. Update nav dot labels to match

Update the `slides` array labels for the restructured order.

---

## Files Changed

1. **`src/pages/ConsumerJourneyDeck.tsx`** — Reorder slides, remove NothingLikeThis import, update narration indices
2. **`src/components/consumer-journey/CJSlide0Title.tsx`** — Sharpen headline and closing quote
3. **`src/components/consumer-pitch/CPSlide3TheCost.tsx`** — Update title
4. **`src/components/consumer-pitch/CPSlide4ImagineOneLens.tsx`** — Update title
5. **`src/components/consumer-pitch/CPSlide7TeamsTransformed.tsx`** — Update subtitle
6. **`src/components/consumer-journey/CJSlide12CTA.tsx`** — Redesign as the definitive closing slide with urgency + action

