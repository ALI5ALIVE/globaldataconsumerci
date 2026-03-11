

# Plan: Add Placeholder Dashboards to Slide 6 (Connected Decision)

## Current State
Slide 6 (The Connected Decision) shows 5 persona verdict cards in a 5-column grid. Each card has an icon, name, role, verdict quote, and solution label. No dashboard visuals.

## Proposed Change
Add a mini placeholder dashboard thumbnail inside each of the 5 persona cards (Sarah, James, Priya, Marcus, Elena — excluding David/Procurement). Each placeholder will be a compact, stylised mock UI that hints at the solution's dashboard — reusing the existing `PersonaDashboard` component patterns but rendered as tiny visual thumbnails.

### Layout per card (top to bottom):
1. Icon + Name + Role (existing)
2. **Mini dashboard placeholder** — a small bordered area (~80px tall) with simplified chart/data visuals matching each persona's solution
3. Verdict quote (existing)
4. Solution label (existing)

### Dashboard placeholders per persona:
- **Sarah (Strategy)**: Mini trend line with upward arrow
- **James (Market Sizing)**: Mini bar chart with TAM numbers
- **Priya (Competitive)**: Mini radar/dot grid
- **Marcus (Innovation)**: Mini scorecard with pass/fail indicators
- **Elena (Commercial)**: Mini table/list with retailer data

Each placeholder will be a simple inline SVG or div-based mini visualisation — lightweight, no interactivity, just visual context.

## File to Modify

| File | Change |
|------|--------|
| `src/components/consumer-journey/CJSlideConnectedDecision.tsx` | Add a `dashboardPlaceholder` renderer per persona inside each card, between the role label and verdict quote |

No new files needed. No narration or routing changes.

