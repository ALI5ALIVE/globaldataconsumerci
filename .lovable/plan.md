

# Plan: Enrich "Imagine One Lens" — Concentric Hub-and-Spoke Diagram

## Concept

Replace the simple convergence animation with a **3-ring concentric diagram**:

```text
                    ┌─────────────┐
                    │   Sarah     │
                    │  (Strategy) │
                    └──────┬──────┘
                           │
              ┌────────────┼────────────┐
              │    ┌───────┴───────┐    │
     Dashboard│    │  Strategic    │    │Dashboard
     placeholder   │  Intelligence │    │placeholder
              │    └───────┬───────┘    │
              │            │            │
              │      ┌─────┴─────┐      │
              │      │ ONE TRUTH │      │
              │      │   (Eye)   │      │
              │      └─────┬─────┘      │
              │            │            │
              │    ┌───────┴───────┐    │
              │    │   Market     │    │
              │    │ Intelligence │    │
              └────┼───────────────┼────┘
                   └───────┬───────┘
                           │
                    ┌──────┴──────┐
                    │   James     │
                    │  (Market)   │
                    └─────────────┘
```

**Ring 1 (center):** "One Truth" — Eye icon, pulsing glow
**Ring 2 (inner):** 5 solution modules — Strategic, Market, Competitive, Innovation, Commercial — each with key questions they answer and a placeholder dashboard thumbnail
**Ring 3 (outer):** 5 personas — Sarah, James, Priya, Marcus, Elena — connected by lines to their primary solution, showing team unity

Spokes connect all three rings. Animated build: center appears → solutions radiate out → dashboards fade in → personas appear on the outside. Hovering a solution highlights its connected persona and sample questions.

## New Component

Create `src/components/consumer-journey/CJOneLensHub.tsx` — the full hub-and-spoke SVG/HTML hybrid diagram with:

- Center: Eye icon + "One Truth" + "One Taxonomy"
- 5 solution nodes at ~140px radius, each showing:
  - Solution name (e.g. "Strategic Intelligence")
  - 2 sample questions (e.g. "Where is plant-based heading?", "Which trends are peaking?")
  - Small placeholder dashboard rectangle (gradient mock)
- 5 persona nodes at ~260px radius, each showing:
  - Avatar circle with initials + name
  - Role title
  - Connected to their solution via animated dashed line
- SVG spokes connecting center → solutions → personas
- Staggered Framer Motion entrance: center (0s) → solutions (0.8s) → dashboards (1.5s) → personas (2.2s)
- Hover interaction: hovering a solution highlights its persona and questions

## Data Structure

```typescript
const solutionNodes = [
  { id: "strategic", label: "Strategic Intelligence", 
    questions: ["Where is plant-based heading?", "Which macro trends matter?"],
    persona: { name: "Sarah", initials: "S", role: "Head of Strategy" } },
  { id: "market", label: "Market Intelligence",
    questions: ["How big is the opportunity?", "Which markets to prioritise?"],
    persona: { name: "James", initials: "J", role: "Market Intelligence Lead" } },
  // ... Priya (Competitive), Marcus (Innovation), Elena (Commercial)
];
```

## Files

| File | Action |
|------|--------|
| `src/components/consumer-journey/CJOneLensHub.tsx` | Create — the hub-and-spoke diagram |
| `src/components/consumer-pitch/CPSlide4ImagineOneLens.tsx` | Replace convergence animation with the new hub diagram (keep the container, title, reveal text) |

No route changes needed — the slide is already used in both `/consumer-pitch` and `/consumer-journey`.

