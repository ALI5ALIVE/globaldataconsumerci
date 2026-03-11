

# Plan: "Connected Intelligence in Action" Slide

## The idea

Insert a new slide between the last persona (David, slide 10) and "Teams Transformed" (slide 11). This slide is the narrative climax — it shows how the six personas' intelligence **flows across the value chain as a connected system**, creating outcomes no siloed vendor can deliver.

## Layout: Cross-Pollination Flow

```text
┌─────────────────────────────────────────────────────────┐
│  "What happens when intelligence connects"              │
│                                                         │
│  ┌─────┐    ┌─────┐    ┌─────┐    ┌─────┐    ┌─────┐  │
│  │Sarah│───▶│James│───▶│Priya│───▶│Marcus│──▶│Elena │  │
│  │ S   │    │ J   │    │ P   │    │  M   │   │  E   │  │
│  └──┬──┘    └──┬──┘    └──┬──┘    └──┬──┘   └──┬──┘  │
│     │          │          │          │          │       │
│  Foresight → Sizing  → Signals  → Validated → Buyer   │
│                                     Sprint    Story    │
│                                                         │
│  ┌─────────────────────────────────────────────────────┐│
│  │  "Cross-pollination unlocks"                        ││
│  │  ┌──────────────┐ ┌──────────────┐ ┌─────────────┐ ││
│  │  │ Trend-sized   │ │ Competitor-  │ │ Evidence-   │ ││
│  │  │ innovation    │ │ validated    │ │ backed      │ ││
│  │  │ pipeline      │ │ launches     │ │ buyer story │ ││
│  │  └──────────────┘ └──────────────┘ └─────────────┘ ││
│  └─────────────────────────────────────────────────────┘│
│                                                         │
│  David consolidates it all: 14→1 · 40% TCO reduction   │
│  "No combination of point solutions can do this."       │
└─────────────────────────────────────────────────────────┘
```

### Visual mechanics

1. **Top: Persona chain** — Five persona avatar circles (Sarah→James→Priya→Marcus→Elena) connected by animated arrows. Each arrow carries a label showing what intelligence passes forward (e.g. "Trend signals" → "Sized opportunities" → "Competitive context" → "Validated concepts" → "Full buyer story"). Arrows animate sequentially left-to-right to show the flow.

2. **Middle: Cross-pollination outcomes** — Three outcome cards that appear after the chain completes, each showing a compound benefit only possible when solutions connect:
   - "Trend-sized innovation pipeline" (Sarah + James + Marcus)
   - "Competitor-validated launches" (Priya + Marcus)  
   - "Evidence-backed buyer stories" (Sarah + James + Priya + Elena)

3. **Bottom: David as the consolidation anchor** — A single accent bar showing David wraps the entire chain into one contract (14→1 suppliers, 40% TCO), with the killer line: *"No combination of point solutions can deliver this."*

4. **Animated data pulse** — A subtle glowing dot travels the full chain path on loop, visualising live intelligence flow.

## Files

| File | Action |
|------|--------|
| `src/components/consumer-journey/CJSlide11ConnectedInAction.tsx` | **Create** — New slide component |
| `src/pages/ConsumerJourneyDeck.tsx` | **Edit** — Insert new slide at position 11, bump subsequent slide numbers and nav labels |
| `src/data/consumerJourneyNarration.ts` | **Edit** — Add narration entry for the new slide |

## Narration text (for the new slide)

*"This is what changes everything. Sarah's foresight feeds James's sizing. James's numbers sharpen Priya's competitive signals. Priya's intelligence validates Marcus's innovation pipeline. And Marcus's validated concepts give Elena the evidence-backed story that wins the listing. No single vendor delivers this. No combination of point solutions connects these dots. And David? He consolidates fourteen contracts into one — with forty percent lower total cost of ownership. This is Connected Intelligence in action."*

