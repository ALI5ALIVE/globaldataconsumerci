

# Plan: Replace "Dashboards" with "Intelligence-Driven Decision" Language

## Overview

Update Slide 7 (Pyramid) and Slide 8 (Maturity Curve) copy and narration to replace "dashboards" terminology with language that emphasizes intelligence driving decisions. This aligns with the core positioning that GlobalData provides actionable intelligence, not just data visualization.

## Current References Found

| Location | Line | Current Text |
|----------|------|--------------|
| `GDSlide7MaturityCurve.tsx` | 58 | "Maintain domain-specific **dashboards** and workflows" |
| `GDSlide7MaturityCurve.tsx` | 76 | "Share **dashboards** cross-functionally in real-time" |
| `globalDataNarration.ts` | 126 | "Real-time **dashboards** shared cross-functionally" |

Note: Slide 7 (GDSlide6ValuePyramid.tsx) does not contain any "dashboard" references.

## Proposed Changes

### File 1: `src/components/globaldata-slides/GDSlide7MaturityCurve.tsx`

**Stage 2 Key Actions (Line 58):**
| Current | Proposed |
|---------|----------|
| "Maintain domain-specific dashboards and workflows" | "Maintain domain-specific intelligence tools and workflows" |

**Stage 3 Key Actions (Line 76):**
| Current | Proposed |
|---------|----------|
| "Share dashboards cross-functionally in real-time" | "Share decision-ready intelligence cross-functionally in real-time" |

### File 2: `src/data/globalDataNarration.ts`

**Slide 8 Narration Script (slideId: 7, Line 126):**
| Current | Proposed |
|---------|----------|
| "Real-time dashboards shared cross-functionally" | "Real-time intelligence shared cross-functionally" |

## Rationale

The word "dashboards" implies passive data visualization—something you look at. The replacement language emphasizes:

- **Stage 2**: "Intelligence tools" acknowledges structured systems exist but positions them as active components, not passive displays
- **Stage 3**: "Decision-ready intelligence" reinforces that the platform delivers actionable insights, not just data views—intelligence that drives decisions

This shift aligns with the core messaging: Connected Intelligence drives decisions, not just displays data.

## Files Changed Summary

| File | Lines | Change |
|------|-------|--------|
| `src/components/globaldata-slides/GDSlide7MaturityCurve.tsx` | 58, 76 | Replace dashboard references in Stage 2 and Stage 3 key actions |
| `src/data/globalDataNarration.ts` | 126 | Update narration to match copy changes |

