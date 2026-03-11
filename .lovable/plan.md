

# Plan: Enriched Persona Slides + Reorder One Lens

## Changes

### 1. Reorder slides — Move "One Lens" before personas

Current order: Slides 1-3 → 5 Personas → One Lens → Teams → Results → CTA
New order: Slides 1-3 → **One Lens** → 5 Personas → Teams → Results → CTA

This sets up the "here's the unified platform" context FIRST, then walks through each persona showing how they use it. The hub diagram becomes the map; the personas become the guided tour.

Update `slides` array and render order in `ConsumerJourneyDeck.tsx`. Update narration slideId mappings in `consumerJourneyNarration.ts` accordingly.

### 2. Enrich PersonaSlide with dashboard mockups, metrics, and company context

Transform each persona slide from a simple quote-based split into a rich, visual storytelling slide. All personas work at the same company — **a Top-5 Global FMCG** — telling one connected story.

**New PersonaData fields:**
- `company`: shared company context (e.g. "Top-5 Global FMCG")
- `solutionName`: the specific platform module (e.g. "Strategic Foresight")
- `metrics`: array of 3 quantified benefits per persona (e.g. `{ value: "18mo", label: "Foresight horizon" }`)
- `dashboardElements`: data for rendering a mock dashboard (chart type, KPI cards, data labels)
- `valueChainPosition`: number 1-5 for visual progress indicator

**New slide layout (3-column on desktop):**

```text
┌──────────────────────────────────────────────────────┐
│ Step 2 of 5 ━━━━●━━━━━━━━  Opportunity Sizing       │
│                                                       │
│ Meet James · Market Intelligence Lead                 │
│ Same company. Connected team.                         │
│                                                       │
│ ┌─────────────┐ ┌──────────────────┐ ┌─────────────┐ │
│ │  WITHOUT     │ │   DASHBOARD      │ │  WITH       │ │
│ │  ─────────   │ │   MOCKUP         │ │  ─────────  │ │
│ │  Pain quote  │ │  ┌──┐ ┌──┐      │ │  Benefit    │ │
│ │  Pain detail │ │  │▓▓│ │░░│ KPIs │ │  quote      │ │
│ │              │ │  └──┘ └──┘      │ │  + metrics  │ │
│ │  ⚠ 3 weeks  │ │  [chart area]   │ │  ✓ 3 mins   │ │
│ │  ⚠ 4 sources│ │                  │ │  ✓ 110 mkts │ │
│ │  ⚠ Distrust │ │  "Market Sizing" │ │  ✓ Trusted  │ │
│ └─────────────┘ └──────────────────┘ └─────────────┘ │
│                                                       │
│ Same person. Same role. Completely different impact.   │
└──────────────────────────────────────────────────────┘
```

**Dashboard mockups per persona (rendered as styled HTML/SVG):**
- Sarah (Strategic): Trend radar with rising/falling indicators, heatmap grid
- James (Market): Bar chart with country flags, market size KPI cards
- Priya (Competitive): Real-time feed with signal dots, company tracker grid
- Marcus (Innovation): Concept scorecard with pass/fail indicators, funnel chart
- Elena (Commercial): Buyer dashboard with category tiles, proof-point cards

**Quantified metrics per persona:**
- Sarah: 18mo foresight · 1 validated view · 3x faster board prep
- James: 110 countries · 3 weeks → 3 mins · One trusted number
- Priya: 25,000 companies · 6 signal types · Real-time alerts
- Marcus: 2x launch success · 18mo → 8 weeks · Evidence-based scoring
- Elena: Full buyer story · 4 intelligence layers · Partnership conversations

### 3. Update narration scripts

Adjust the One Lens narration to work as slide 4 (setup before personas) and reorder slideId values. Slightly enrich persona scripts to reference the dashboard and metrics.

## Files to Modify

| File | Change |
|------|--------|
| `src/components/consumer-journey/PersonaSlide.tsx` | Complete redesign — 3-column layout with dashboard mockup center panel, metrics badges, value chain progress bar, shared company context |
| `src/pages/ConsumerJourneyDeck.tsx` | Reorder slides (One Lens → slot 4), update persona data with new fields (metrics, dashboardElements, solutionName), fix narration prop indices |
| `src/data/consumerJourneyNarration.ts` | Reorder slideIds (One Lens = 3, personas = 4-8), minor script tweaks |

## Files to Create

None — all changes are enrichments to existing components.

