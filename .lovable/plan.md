

# Plan: Update Copy Box Headlines to Action-Oriented Style

## Overview

Update the **details panel copy** (not the graph labels) on Slide 8 ("Transforming How Teams Work") to use action-oriented headlines that focus on team behavior.

## Changes

### File: `src/components/globaldata-slides/GDSlide7MaturityCurve.tsx`

Update the `roadmapStagesData` array (lines 29-120) with new `headline` and `sublabel` values:

| Stage | Current Headline | New Headline | Current Sublabel | New Sublabel |
|-------|-----------------|--------------|------------------|--------------|
| 1 | Fragmented & Reactive | **Hunting for Answers** | Manual / Reactive | **Data Everywhere, Insight Nowhere** |
| 2 | Managed (Siloed) | **Working in Parallel** | Silo Optimisation | **Good Alone, Misaligned Together** |
| 3 | Connected Intelligence | **Working from One Truth** | Platform Shift | **Platform-Enabled Collaboration** |
| 4 | Optimized Operations | **Deciding in Days** | Intelligent Ops | **AI-Powered Operations** |
| 5 | Predictive & Proactive | **Anticipating the Market** | AI-Driven Foresight | **Proactive Strategy** |

## What Stays the Same

- **Graph X-axis labels**: "Fragmented", "Managed", "Connected", "Optimized", "Predictive" (defined in `shortLabels` on lines 359-365)
- **Curve annotations**: The popup annotations that appear on the graph
- **All other content**: Key Actions, Team Behavior, Example Use Case, Time to Decision

## Visual Result

**Details Panel Header (Before):**
```
┌──────────────────────────────────┐
│ [1] Fragmented & Reactive        │
│     Manual / Reactive            │
└──────────────────────────────────┘
```

**Details Panel Header (After):**
```
┌──────────────────────────────────┐
│ [1] Hunting for Answers          │
│     Data Everywhere, Insight Nowhere │
└──────────────────────────────────┘
```

## Technical Details

Lines to modify in `src/components/globaldata-slides/GDSlide7MaturityCurve.tsx`:

| Line | Property | Current Value | New Value |
|------|----------|---------------|-----------|
| 33 | `headline` | `"Fragmented & Reactive"` | `"Hunting for Answers"` |
| 34 | `sublabel` | `"Manual / Reactive"` | `"Data Everywhere, Insight Nowhere"` |
| 51 | `headline` | `"Managed (Siloed)"` | `"Working in Parallel"` |
| 52 | `sublabel` | `"Silo Optimisation"` | `"Good Alone, Misaligned Together"` |
| 69 | `headline` | `"Connected Intelligence"` | `"Working from One Truth"` |
| 70 | `sublabel` | `"Platform Shift"` | `"Platform-Enabled Collaboration"` |
| 87 | `headline` | `"Optimized Operations"` | `"Deciding in Days"` |
| 88 | `sublabel` | `"Intelligent Ops"` | `"AI-Powered Operations"` |
| 105 | `headline` | `"Predictive & Proactive"` | `"Anticipating the Market"` |
| 106 | `sublabel` | `"AI-Driven Foresight"` | `"Proactive Strategy"` |

