

# Enhance Slide 4: What Connected Intelligence Is

## Goal
Slide 4 defines **what** Connected Intelligence is (the platform, solutions, Ava). Slide 5 shows **how** it works in practice (the plant-based decision scenario). We need to enrich Slide 4 with solution descriptions, Ava as the AI layer, and value statements per persona — without duplicating slide 5's walkthrough.

## Changes

### 1. `src/components/consumer-journey/CJOneLensHub.tsx`

**Add Ava to the center hub:** Replace the generic "Consumer" center with a dual-ring center — the consumer at the core surrounded by an "Ava" AI ring. Ava orbits or wraps the consumer hub with a glowing accent and label: "Ava — AI Intelligence Layer" with subtitle "Surfaces patterns across all five solutions."

**Enrich solution descriptions** in the `valueChainStages` data:
- Add a `value` field to each stage describing what you **get** (not how it's used — that's slide 5):
  - Strategic Intelligence: "See where your category is heading before your competitors do"
  - Market Intelligence: "One definitive sizing across every market you care about"
  - Competitive Intelligence: "Every move, every patent, every hire — tracked in real time"
  - Innovation Intelligence: "Test concepts against real evidence, not gut feel"
  - Sales Intelligence: "Walk into every buyer meeting with the full story"
  - One Vendor: "One contract. Best-in-class solutions. 30% lower cost"

**Update hover tooltip** to show the `value` statement instead of the current questions (questions are more relevant to the "how it works" slide).

**Add Ava connection lines:** Faint curved lines from Ava ring to each solution node, showing Ava connects across all solutions.

### 2. `src/components/consumer-pitch/CPSlide4ImagineOneLens.tsx`

**Update bottom text:**
- First line: "Five solutions. One AI layer. One connected lens — from signal to shelf."
- Second line: "Ava works across every solution, surfacing patterns no single team would see alone."

Remove the David procurement paragraph (it's now embedded in the hub as the "One Vendor" node value).

### 3. `src/data/consumerJourneyNarration.ts` — Slide 4

Update narration to describe what each solution gives you and introduce Ava:

> "Imagine seeing that same opportunity through one connected lens. Five solutions — each best-in-class — working together for the first time. Strategic Intelligence shows you where the category is heading. Market Intelligence gives you one definitive sizing. Competitive Intelligence tracks every move in real time. Innovation Intelligence tests your concepts against real evidence. And Sales Intelligence arms your team with the full story for every buyer meeting. Connecting all of them is Ava — our AI intelligence layer — surfacing patterns across solutions that no single team would spot alone. And David? He wraps it all into one contract — best-in-class at thirty percent lower cost. That's what Connected Intelligence is. Now let's see how it works in practice."

### Summary

| File | Change |
|------|--------|
| `CJOneLensHub.tsx` | Add Ava AI ring at center, add `value` field to stages, show value in tooltip |
| `CPSlide4ImagineOneLens.tsx` | Update bottom text to reference Ava and five solutions |
| `consumerJourneyNarration.ts` | Rewrite slide 4 script to describe solutions + Ava |

