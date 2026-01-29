

# Plan: Redesign Slide 10 to Match Reference Layout

## Overview

Redesign GDSlide9WhyGlobalData.tsx to match the reference image, which features a clean two-column layout with a central circular Venn diagram and descriptive callout boxes around it.

## Reference Image Analysis

The reference shows:
- **Left column**: Large headline + intro paragraph + "The result" section
- **Right/Center**: Circular Venn diagram with three overlapping segments (High-impact data, Human expertise, AI & technology) surrounding a central blue circle
- **Around diagram**: Three callout boxes with curved connector lines explaining each pillar

## Proposed Layout Structure

```text
┌─────────────────────────────────────────────────────────────────────────┐
│  [Left Column 40%]              │        [Right Column 60%]            │
│                                 │                                       │
│  "Consumer intelligence         │        ┌─ "High-impact data" callout │
│   that turns strategy           │        │                              │
│   into performance"             │   ┌────┴────────────────────────┐     │
│                                 │   │     ○ High-impact           │     │
│  Our connected intelligence     │   │       data                  │     │
│  platform unites high-impact    │   │            ┌───┐            │     │
│  data, AI, and human expertise  │   │ ○ Sales  ─ │ ● │ ─ ○ Human │     │
│  to move teams from reactive    │   │   intell.  └───┘  expertise│     │
│  to precision execution.        │   │                             │     │
│                                 │   │       ○ AI &                │     │
│  The result:                    │   │         technology          │     │
│  • Faster time to market        │   └─────────────────────────────┘     │
│  • Stronger consumer connect.   │        │                              │
│  • Consistent category gains    │        └─ "AI that accelerates" callout
│                                 │                                       │
│                                 │     "Domain experts" callout ─────────│
└─────────────────────────────────────────────────────────────────────────┘
```

## Technical Implementation

### 1. Update Slide Title and Subtitle

| Element | Current | Proposed |
|---------|---------|----------|
| Title | "Built for Connected Intelligence at Scale" | "Consumer intelligence that turns strategy into performance" |
| Subtitle | "High-impact data, AI, and human expertise—moving you from reactive to precision execution" | Remove (will be inline body text) |

### 2. Create New SVG Visualization Component

Create a new component `ThreePillarDiagram.tsx` that renders:
- A circular Venn-style diagram with three overlapping rings
- Central blue circle labeled "Consumer Intelligence"
- Three outer segments: "High-impact data", "Human expertise", "AI & technology"
- Curved connector lines to callout boxes

### 3. New Layout Structure

Replace the current grid-based card layout with a two-column design:

**Left Column (40%)**:
- Large headline (handled by GDSlideContainer)
- Intro paragraph explaining the connected platform
- "The result:" section with three bullet points

**Right Column (60%)**:
- Central Venn diagram (new SVG component)
- Three positioned callout boxes with curved connectors:
  - Top: "High-impact data — real-time, trusted, actionable"
  - Bottom-left: "AI that accelerates execution"
  - Right: "Domain experts who turn insight into impact"

### 4. Content Updates

**Intro Paragraph:**
> "Our connected intelligence platform unites high-impact data, AI, and human expertise to move consumer teams from reactive to precision execution."

**The Result Section:**
- Faster time to market
- Stronger consumer connection
- Consistent category gains

**Three Callout Boxes:**

| Pillar | Title | Description |
|--------|-------|-------------|
| High-impact data | "High-impact data — real-time, trusted, actionable" | Coverage of 95% of global GDP, analyst-validated and unified into a single taxonomy. Earlier signals, clearer context, and decisions you can trust. |
| AI & Technology | "AI that accelerates execution" | Agentic AI that acts, not just reports — forecasting moves, surfacing answers in seconds, and guiding your teams to act when timing matters most. |
| Human Expertise | "Domain experts who turn insight into impact" | Industry specialists, journalists, and advisors embedded in your workflows — decoding complexity and transforming intelligence into confident action. |

## Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| `src/components/globaldata-slides/ThreePillarDiagram.tsx` | Create | New SVG component for the circular Venn diagram |
| `src/components/globaldata-slides/GDSlide9WhyGlobalData.tsx` | Modify | Complete redesign with new layout, content, and diagram |

## Visual Styling Notes

- Use a beige/cream colored ring for the outer Venn circle (matching reference)
- Central circle in GlobalData blue (#0066FF / primary)
- Light background with clean typography
- Curved connector lines from diagram to callout boxes
- Maintain the existing dark theme variant for consistency with other slides

## Outcome

- Slide 10 matches the reference design with a professional Venn diagram visualization
- Clear visual hierarchy: headline → intro → results on left; diagram with callouts on right
- Consumer-focused messaging aligned with the deck's terminology pivot
- Maintains consistency with GDSlideContainer structure

