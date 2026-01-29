

# Plan: Refine Slide 10 for Consumer Brand Focus

## Overview

Update Slide 10 ("Built for Connected Intelligence at Scale") to use consumer-specific terminology, domain expertise examples, and language that resonates with consumer goods brands without being retail-specific. The three-pillar structure (Data, AI, Human Expertise) remains intact, but the content will speak directly to consumer brand challenges.

## Current State Analysis

The current copy is generic/enterprise-focused:
- "95% of global GDP" — impressive but not consumer-relevant
- "Industry specialists, journalists, and advisors" — vague domain expertise
- "Market attainment" — enterprise language, not consumer vernacular
- Missing consumer-specific data types and use cases

## Proposed Changes

### File 1: `src/components/globaldata-slides/GDSlide9WhyGlobalData.tsx`

#### Three Pillars Update

| Pillar | Current | Proposed (Consumer-Focused) |
|--------|---------|----------------------------|
| **High-Impact Data** | | |
| Tagline | "Real-time, trusted, actionable" | "Category, consumer, and competitive signals in one view" |
| Description | "Coverage of 95% of global GDP, analyst-validated and unified into a single taxonomy. Earlier signals, clearer context, decisions you can trust." | "Deep coverage across categories, brands, and consumer behaviour—analyst-validated and unified into one taxonomy. Earlier signals on trends, preferences, and competitive moves." |
| **AI & Technology** | | |
| Tagline | "AI that accelerates execution" | "AI that accelerates insight to action" |
| Description | "Agentic AI that acts, not just reports—forecasting moves, surfacing answers in seconds, guiding teams to act when timing matters most." | "Agentic AI that surfaces opportunities, predicts shifts, and guides teams to act—turning weeks of analysis into minutes of clarity." |
| **Human Expertise** | | |
| Tagline | "Domain experts who turn insight into impact" | "Consumer specialists who translate insight into action" |
| Description | "Industry specialists, journalists, and advisors embedded in your workflows—decoding complexity and transforming intelligence into confident action." | "Category analysts, consumer researchers, and strategic advisors embedded in your workflows—decoding consumer behaviour and translating intelligence into confident brand decisions." |

#### Closing Truths Update

| Current | Proposed |
|---------|----------|
| "Faster decision velocity" | "Faster time to market" |
| "Stronger market attainment" | "Stronger consumer connection" |
| "Consistent high-value wins" | "Consistent category gains" |

#### Performance Imperative Update

| Current | Proposed |
|---------|----------|
| "...will define the next generation of category performers" | "...will define the next generation of consumer brand leaders" |

#### Final Takeaway Update

| Current | Proposed |
|---------|----------|
| "Faster decision velocity, stronger market attainment, and consistent high-value wins." | "Faster time to market, stronger consumer connection, and consistent category gains." |

#### Ava Description Update

| Current | Proposed |
|---------|----------|
| "AI-powered research analyst that amplifies human expertise — accelerating insight discovery, pattern recognition, and decision support across all intelligence domains." | "AI-powered research analyst that amplifies your teams — accelerating trend discovery, consumer pattern recognition, and decision support across brand, innovation, and category intelligence." |

### File 2: `src/data/globalDataNarration.ts` (Slide 10 narration, slideId: 9)

Update the narration script to match the consumer-focused copy:

**Proposed Script:**

```
Why GlobalData? Let me show you exactly how we deliver connected intelligence built for consumer brands.

Our platform brings together three essential elements.

First: High-Impact Data. Category, consumer, and competitive signals unified in one view. Deep coverage across categories, brands, and consumer behaviour—analyst-validated and structured into a single taxonomy. Earlier signals on trends, preferences, and competitive moves that matter to your business.

Second: AI and Technology that accelerates insight to action. This is Agentic AI that surfaces opportunities, predicts consumer shifts, and guides your teams to act—turning weeks of analysis into minutes of clarity.

Third: Human Expertise. Category analysts, consumer researchers, and strategic advisors embedded in your workflows—decoding consumer behaviour and translating intelligence into confident brand decisions.

These three elements power our connected intelligence platform—moving your teams from reactive to precision execution.

The result? Faster time to market. Stronger consumer connection. And consistent category gains.

The performance imperative: organisations that close the Intelligence Gap and operate intelligence as a connected system will define the next generation of consumer brand leaders.

The future belongs to brands that turn change into decisions—earlier, together, and with conviction.
```

## Summary of Terminology Shifts

| Generic/Enterprise | Consumer-Focused |
|-------------------|------------------|
| Global GDP coverage | Category, brand, and consumer coverage |
| Industry specialists | Category analysts, consumer researchers |
| Market attainment | Consumer connection |
| High-value wins | Category gains |
| Decision velocity | Time to market |
| Category performers | Consumer brand leaders |
| Intelligence domains | Brand, innovation, and category intelligence |

## Files Changed Summary

| File | Lines | Change |
|------|-------|--------|
| `src/components/globaldata-slides/GDSlide9WhyGlobalData.tsx` | 5-33, 92-93, 104-105, 129-130 | Update all three pillars, Ava description, closing truths, performance imperative, and final takeaway |
| `src/data/globalDataNarration.ts` | 158-174 | Update full narration script for consumer brand focus |

## Outcome

The slide will:
- Speak directly to consumer brand professionals using their language
- Highlight domain expertise specific to categories, consumers, and competitive dynamics
- Maintain the powerful three-pillar structure and visual impact
- Avoid retail-specific terminology (no shelf, shopper, store references)
- Strengthen resonance with the target audience throughout the deck's closing sequence

