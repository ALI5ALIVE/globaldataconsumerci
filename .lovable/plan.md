

# Reimagine Slide 4: "What You Get" — Solution + Ava + New Way of Working

## Problem

Slide 4 currently shows a hub diagram with solution names and personas, but:
- It doesn't clearly describe **what each solution delivers** (the value, not just the label)
- **Ava** (the AI assistant) is completely absent from both the visual and narration
- The "new way of working" message is in the title but not reinforced visually
- Slide 5 (Connected Decision) then repeats the same personas with the same solutions — creating redundancy

## Design

Restructure Slide 4 as the **"Here's what you get"** slide. Replace the current hub diagram with a cleaner layout:

### Visual: Solution cards + Ava

Replace `CJOneLensHub` with a new component showing:

**Top**: Headline reinforcing the new way of working
**Middle**: 5 solution cards in a horizontal row, each showing:
- Solution name (Strategic Intelligence, Market Intelligence, etc.)
- One-line value statement (what it unlocks, not what it tracks)
- The data asset ("110 countries", "25,000 companies", etc.)

**Bottom-center**: Ava AI card — golden accent, Sparkles icon — positioned as the intelligence layer that connects everything. Tagline: "Ava surfaces patterns across all five solutions — so your teams don't have to."

**Footer text**: Updated to reinforce the procurement consolidation message (David) but framed as outcome.

Remove the 6th "One Vendor / Lower Cost" node from the ring — David's consolidation message moves to the footer text and narration only, keeping the visual focused on the 5 intelligence solutions.

### Narration update (Slide 4)

Rewrite to:
> "This is what Connected Intelligence actually looks like. Five solutions — each best-in-class — working as one. Strategic Intelligence gives you an eighteen-month foresight horizon, so you see what's coming before your competitors do. Market Intelligence sizes opportunities across a hundred and ten countries — one number, one methodology. Competitive Intelligence tracks twenty-five thousand companies in real time — patents, hires, supply chain moves. Innovation Intelligence validates concepts in eight-week sprints — evidence, not gut feel. And Sales Intelligence arms your commercial team with the proof points that win listings. Connecting all of it is Ava — your AI analyst. She works across every solution, surfacing the patterns and cross-signals your teams would never find manually. And David? He consolidates fourteen contracts into one — best-in-class at thirty percent lower cost. This isn't a dashboard. It's a completely new way of working."

### Narration update (Slide 5 — Connected Decision)

Remove the solution-by-solution walkthrough (now covered in slide 4) and focus purely on the decision scenario:
> "So what does this look like in practice? One question lands on the table: should you launch plant-based snacking in Southeast Asia? In a single meeting, your team has the answer. The trend is accelerating — thirty-eight percent year on year. The market is two point one billion dollars. Four competitor patents are already filed. Three of five concepts pass the evidence threshold. And your buyer confirms a category gap. One platform. One meeting. One decision — backed by evidence from every angle. Without Connected Intelligence? Six vendors. Fourteen weeks. Three conflicting recommendations. That's the difference."

## Files changed

| File | Change |
|------|--------|
| `src/components/consumer-journey/CJOneLensHub.tsx` | Replace hub diagram with 5 solution cards + Ava AI card layout |
| `src/components/consumer-pitch/CPSlide4ImagineOneLens.tsx` | Update subtitle/footer text, use new component |
| `src/data/consumerJourneyNarration.ts` | Rewrite slides 4 and 5 narration |

