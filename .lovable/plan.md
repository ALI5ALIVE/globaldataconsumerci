

# Plan: Add "The Connected Decision" Slide (Keep Panoramas)

## The Concept

Add a new slide after the two panorama slides (before "Connected Intelligence in Action") that shows a **critical boardroom meeting** where all six personas converge around one strategic question. Each persona contributes their intelligence layer to reach a unified, evidence-based decision — demonstrating the single version of truth across the full value chain.

## The Scenario

**"Should we launch plant-based snacking in Southeast Asia?"**

One question. Six perspectives. One connected answer — in one meeting.

```text
┌──────────────────────────────────────────────────────────┐
│  "One Decision. Six Perspectives. One Connected Answer." │
│                                                          │
│  ┌─ THE QUESTION ──────────────────────────────────────┐ │
│  │ "Should we launch plant-based snacking in SE Asia?" │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  Sarah        James        Priya        Marcus     Elena │
│  "Trend is    "$2.1B       "CompX has   "3 of 5    "Tesco│
│   accelerat-   TAM by       filed 4      concepts   wants│
│   ing +38%"    2027"        patents"     pass"      this" │
│  ─────────────────────────────────────────────────────── │
│                                                          │
│  ┌─ THE VERDICT ─────────────────────────────────────┐   │
│  │ ✓ GO — Validated in one meeting, not 14 weeks     │   │
│  └───────────────────────────────────────────────────┘   │
│                                                          │
│  David: "One platform. One contract. All of this."       │
│                                                          │
│  WITHOUT: 6 vendors · 14 weeks · 3 conflicting answers   │
│  WITH:    1 platform · 1 meeting · 1 connected answer    │
└──────────────────────────────────────────────────────────┘
```

## Visual Mechanics

1. **Top**: Strategic question in a prominent card
2. **Middle**: Five persona verdict cards animate sequentially, each showing avatar, name, their specific data contribution, and solution name
3. **Verdict bar**: A green "GO" verdict that appears after all cards, emphasising this was done in one meeting
4. **David anchor**: Consolidation message at bottom
5. **Without vs With**: A stark comparison footer

## Slide Order (13 slides — panoramas kept)

```text
 0  The Pressure
 1  Your Monday Morning
 2  Seven Sources
 3  The Cost
 4  One Lens
 5  Team Panorama 1 (Sarah, James, Priya)
 6  Team Panorama 2 (Marcus, Elena, David)
 7  The Connected Decision (NEW)
 8  Connected Intelligence in Action
 9  Why Not DIY?
10  Proof
11  Teams Transformed
12  Let's Talk
```

## Files

| File | Action |
|------|--------|
| `src/components/consumer-journey/CJSlideConnectedDecision.tsx` | **Create** — Boardroom decision slide |
| `src/pages/ConsumerJourneyDeck.tsx` | **Edit** — Insert slide at position 7, update slides array to 13 entries, re-index narration props |
| `src/data/consumerJourneyNarration.ts` | **Edit** — Add narration entry for new slide |

## Narration Script

*"Here's what this looks like in practice. One question: should we launch plant-based snacking in Southeast Asia? Sarah pulls the trend data — plant-based is accelerating at thirty-eight percent year-on-year. James sizes the opportunity — two point one billion dollar TAM by twenty-twenty-seven. Priya flags that Competitor X has filed four patents in this space. Marcus scores five concepts — three pass the evidence threshold. And Elena walks into Tesco with the full story. One meeting. One connected answer. Without this? Six vendors. Fourteen weeks. Three conflicting recommendations. With it? One platform. One meeting. One decision — backed by evidence from every angle. And David? He made it all possible with one contract."*

