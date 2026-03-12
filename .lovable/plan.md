

# Enrich Slide 7 Dashboards + Deepen Narration

## Visual Changes: `src/components/consumer-journey/CJSlideConnectedDecision.tsx`

Expand each persona's mini dashboard from ~60px to ~110px with richer, scenario-specific data:

- **Sarah (Strategic)**: Keep trend line. Add "Converging signals" row with theme pills (Plant Protein + Clean Label + Gut Health) and convergence score (92/100). Add "3 brands entered in last 6 months" label.
- **James (Market)**: Keep bar chart. Add highlighted row: "SEA $820M · CAGR 14.2%". Add white-space indicator: "42% of snacking occasions unaddressed".
- **Priya (Competitive)**: Replace signal dots with mini timeline: Patent (2w), Hire (1mo), Supply (3mo), SKU (6mo). Add threat badge: "High — accelerating".
- **Marcus (Innovation)**: Keep scorecard. Add concept names with pass/fail: "Crispy Bites 87✓ · Protein Bar 72✓ · Gut Shot 34✗". Add evidence confidence bar (3/5 above threshold).
- **Elena (Commercial)**: Keep retailer list. Add shelf gap % and buyer sentiment per retailer. Add "Pitch readiness: 2 of 3 ready" badge.

Increase persona card min-height. Reduce icon/header slightly to give data more room.

## Narration Changes: `src/data/consumerJourneyNarration.ts`

Update slideId 6 script to walk through each persona's data in more detail, matching the enriched dashboards:

> "One question: should you launch plant-based snacking in Southeast Asia? Sarah pulls the Strategic Intelligence data — three converging signals: plant protein, clean label, and gut health — all accelerating. Convergence score: ninety-two out of a hundred. Three competitors have already entered in the last six months. James sizes the opportunity: two point one billion dollars globally, but Southeast Asia alone is eight hundred and twenty million — growing at fourteen percent. And forty-two percent of snacking occasions in the region are completely unaddressed. Priya's competitive radar is flashing. A rival filed four patents in the last two weeks. They've hired a regional supply chain lead. They're building capacity. Threat level: high and accelerating. Marcus runs five concepts through Innovation Intelligence. Crispy Bites scores eighty-seven. Protein Bar, seventy-two. Gut Shot fails at thirty-four. Three of five pass the evidence threshold — and crucially, they're the three aligned to the converging trends Sarah identified. Elena walks into the Tesco meeting with everything: confirmed category gap, twelve percent shelf space available, buyer sentiment positive. Two of three target retailers are ready for a first-mover pitch. One platform. One meeting. One decision — backed by evidence from every angle. Without it? Six vendors. Fourteen weeks. Three conflicting recommendations. Imagine what that speed does to your competitors' confidence."

This deepens the narration from ~100 words to ~200 words, adding ~40 seconds — well within the overall deck timing budget.

