

# Plan: Enhance Operating Model Canvas with Consumer-Specific Detail, Stats & Visuals

Transform the generic Operating Model Canvas cards into rich, consumer-industry-specific cards with real stats, benefit statements, and visual progress indicators.

## Updated Card Data

Each card gets: consumer-specific before/after examples, a stat with visual indicator, and a benefit line.

| Dimension | Before | After | Stat | Benefit |
|---|---|---|---|---|
| **Workflow Impact** | Pulling trend data from Mintel, Nielsen, Kantar separately every Monday | One unified consumer intelligence feed — trends, sizing & retail signals in one view | 60% → 5% time on data reconciliation | Your CMI team reclaims 11 hours per week for strategic thinking |
| **Role Evolution** | Consumer insights analysts building 40-slide decks nobody reads | Strategic advisors briefing the board with evidence-backed recommendations | 10% → 75% time on strategy | Analysts become the growth advisors they were hired to be |
| **Decision Rights** | Category decisions based on whoever presents last or loudest | Every call backed by connected trend, sizing & competitive evidence | 6–8 weeks → 48 hours decision velocity | Kill or fast-track concepts in days, not quarters |
| **Information Flow** | Trend team emails a PDF. Sizing team has a different number. Nobody sees competitor moves | One taxonomy connects foresight, sizing, competitive intel & innovation scoring in real time | 7 sources → 1 connected truth | No more "which number is right?" meetings |
| **Success Metrics** | Tracking reports produced and meetings attended | Measuring concepts validated, time-to-shelf, and listing win rate | 3× faster innovation cycle | Prove CMI's impact in language the board understands |
| **Change Velocity** | Quarterly planning cycles that miss fast-moving consumer trends | Continuous signal monitoring with AI-triggered alerts when markets shift | 12 weeks → real-time response | Never miss another plant-based protein moment |

## Visual Enhancements

- Each card gets a **stat bar** showing the before→after metric visually (a mini progress/comparison bar)
- Benefit line in primary colour at the bottom of each card
- Framer Motion stagger animations for card entry
- Cards use slightly larger padding and the stat is prominently displayed

## Files Changed

1. **`src/components/consumer-journey/CJSlideOperatingModel.tsx`** — Complete rewrite of card data and card layout to include stats, benefits, and visual stat indicators with motion animations.

