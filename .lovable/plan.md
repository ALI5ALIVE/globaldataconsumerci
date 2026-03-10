

# Plan: Sales Pitch Deck — 24-Slide Scrollable Presentation with Narration

## Overview

Create a new page at `/sales-pitch` that presents all 24 slides from the uploaded PPTX as a scrollable deck with ElevenLabs voiceover narration. Each slide has a narration script that serves as the "sales pitch" for that slide's content.

## Slide Structure (24 slides from PPTX)

| # | Title | Content Summary |
|---|-------|----------------|
| 1 | Title Slide | GlobalData Connected Intelligence |
| 2 | Hook | "How leading consumer brands turn change into growth" |
| 3 | Journey Overview | Agenda/roadmap of the presentation |
| 4 | Markets Reward Speed | 3x faster shifts, 40% narrower windows, protein snacking case |
| 5 | Where Growth Is Lost | Intelligence Gap - 4 dimensions of loss, QBR case study |
| 6 | Fragmented → Connected | Ferrero transformation, consolidation advantage |
| 7 | Connected Intelligence: Sales | Wheel focused on Sales Intelligence + Ava intro |
| 8 | Connected Intelligence: Strategic | Wheel focused on Strategic Intelligence |
| 9 | Connected Intelligence: Market | Wheel focused on Market Intelligence |
| 10 | Connected Intelligence: Competitive | Wheel focused on Competitive Intelligence |
| 11 | Connected Intelligence: Innovation | Wheel focused on Innovation Intelligence |
| 12 | Value Chain Stage 1 | Strategic Intelligence — "Is this trend material?" |
| 13 | Value Chain Stage 2 | Market Intelligence — "Where's the demand?" |
| 14 | Value Chain Stage 3 | Innovation Intelligence — "What product will win?" |
| 15 | Value Chain Stage 4 | Competitive Intelligence — "Where's the gap?" |
| 16 | Value Chain Stage 5 | Sales Intelligence — "How do we win listings?" |
| 17 | Maturity Stage 1 | Fragmented — hunting for answers |
| 18 | Maturity Stage 2 | Connected — one truth |
| 19 | Maturity Stage 3 | Optimized — deciding in days |
| 20 | Maturity Stage 4 | Predictive — AI-driven foresight |
| 21 | Why GlobalData | Data + AI + Human expertise |
| 22 | The Return | ROI — speed, success, savings (Mondelēz) |
| 23 | Get Connected | 90-day implementation, consolidation benefits |
| 24 | CTA | Let's embed foresight into your strategy |

## Implementation Approach

### Phase 1: Narration Data (~800 lines)
**File:** `src/data/salesPitchNarration.ts`

Write narration scripts for all 24 slides derived directly from the PPTX content. Each script is what a presenter would say when presenting that slide — conversational, persuasive, sales-oriented. Reuse the existing `SlideNarration` interface and voice ID (`JBFqnCBsd6RMkjVDRZzb`).

### Phase 2: Narration Hook
**File:** `src/hooks/useSalesPitchNarration.ts`

Clone the existing `useGlobalDataNarration.ts` pattern — same caching, playback, and preloading logic but referencing `salesPitchNarration.ts`. Update the preload limit from 9 to 23.

### Phase 3: Slide Components (24 slides)
**Directory:** `src/components/salespitch-slides/`

Many slides share common patterns. Implementation strategy:

- **Reuse existing components directly** for slides that match: `GDSlideContainer`, `ConnectedIntelligenceWheel`, `SlidePlayButton`
- **Adapt existing slide designs** for slides 4-6 (market pressure, intelligence gap, before/after) — similar layout to existing GD slides but with PPTX-specific content (Ferrero, protein snacking case, QBR story)
- **New template components** for repeated patterns:
  - `SPIntelligenceSlide.tsx` — shared template for slides 7-11 (wheel + jobs-to-be-done + Ava + pain-to-outcome + real example). Each slide highlights a different intelligence segment and passes different content props.
  - `SPValueChainStage.tsx` — shared template for slides 12-16 (value chain header + stage detail table). Each slide highlights one stage.
  - `SPMaturityStage.tsx` — shared template for slides 17-20 (maturity bar + stage detail + key capabilities + decision velocity + time allocation). Each highlights one stage.
- **Unique slides**: Title (1), Hook (2), Journey (3), Why GlobalData (21), ROI (22), Get Connected (23), CTA (24)

Total new files: ~12 component files (7 unique + 3 templates + 2 shared)

### Phase 4: Page & Routing
**File:** `src/pages/SalesPitchDeck.tsx`

Clone the `GlobalDataDeck.tsx` structure — same scroll-snap, navigation dots, keyboard nav, progress bar — but with 24 slides and the new narration hook.

**File:** `src/App.tsx`

Add route: `<Route path="/sales-pitch" element={<SalesPitchDeck />} />`

### Phase 5: Slide Container
**File:** `src/components/salespitch-slides/SPSlideContainer.tsx`

Clone `GDSlideContainer.tsx` with minor branding tweaks (footer text, slide numbering format).

## File Summary

| File | Action | Description |
|------|--------|-------------|
| `src/data/salesPitchNarration.ts` | Create | 24 narration scripts |
| `src/hooks/useSalesPitchNarration.ts` | Create | Audio playback hook |
| `src/components/salespitch-slides/SPSlideContainer.tsx` | Create | Base slide wrapper |
| `src/components/salespitch-slides/SPSlide01Title.tsx` | Create | Title slide |
| `src/components/salespitch-slides/SPSlide02Hook.tsx` | Create | Hook/opener |
| `src/components/salespitch-slides/SPSlide03Journey.tsx` | Create | Agenda roadmap |
| `src/components/salespitch-slides/SPSlide04MarketSpeed.tsx` | Create | Market rewards speed |
| `src/components/salespitch-slides/SPSlide05IntelligenceGap.tsx` | Create | Where growth is lost |
| `src/components/salespitch-slides/SPSlide06Transformation.tsx` | Create | Ferrero before/after |
| `src/components/salespitch-slides/SPIntelligenceSlide.tsx` | Create | Template for slides 7-11 |
| `src/components/salespitch-slides/SPValueChainStage.tsx` | Create | Template for slides 12-16 |
| `src/components/salespitch-slides/SPMaturityStage.tsx` | Create | Template for slides 17-20 |
| `src/components/salespitch-slides/SPSlide21WhyGlobalData.tsx` | Create | Why GlobalData |
| `src/components/salespitch-slides/SPSlide22ROI.tsx` | Create | ROI with Mondelēz |
| `src/components/salespitch-slides/SPSlide23GetConnected.tsx` | Create | 90-day implementation |
| `src/components/salespitch-slides/SPSlide24CTA.tsx` | Create | Final CTA |
| `src/pages/SalesPitchDeck.tsx` | Create | Page with scroll navigation |
| `src/App.tsx` | Edit | Add `/sales-pitch` route |

## Narration Approach

Each slide's narration script will be written as what a sales presenter would actually say — conversational and persuasive. Content is derived directly from the PPTX slide text, expanded into natural speech. Example for Slide 4:

> "Here's the growth reality every consumer brand faces. Consumer trends shift three times faster than insight cycles can track. Innovation windows are forty percent narrower than five years ago. And here's a case in point — in 2023, a major CPG company missed the protein snacking wave entirely. Their insight, innovation, and sales teams had three different views of the opportunity. By the time they aligned, Grenade and Barebells had claimed the shelf..."

## Implementation Order

Given the size, this should be implemented in phases:
1. Narration data + hook + container + routing
2. Slides 1-6 (unique slides)
3. Slides 7-11 (intelligence wheel template)
4. Slides 12-16 (value chain template)
5. Slides 17-20 (maturity template)
6. Slides 21-24 (closing slides)

