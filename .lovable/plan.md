

# Plan: Update Slide 9 Narration to Reference Maturity Assessment / Value Calculator

## Overview

Update the narration script for Slide 9 (ROI slide) to explicitly mention the "Maturity Assessment" and "Value Calculator" CTA, inviting viewers to explore these tools to see the value they can unlock at each stage.

## Current State

The current script for slideId 8 (Slide 9 - "ROI Shows Up in Three Places") is:

> ROI shows up in three places—measurable returns that compound as maturity increases.
>
> First, speed to decision. Decision cycles shrink from weeks to days. Seventy percent faster.
>
> Second, better growth outcomes. Higher-quality bets, fewer failed launches. Two times higher launch success.
>
> Third, lower cost of intelligence. Less duplication, fewer tools, less manual reconciliation. Thirty percent lower total cost of ownership.
>
> Here's the key message: ROI compounds as organisations move up the maturity curve. The sooner you start, the faster value accumulates.

The script mentions the maturity curve but does not reference the new CTA button for the Maturity Assessment or Value Calculator.

## Proposed Script Update

Add a new paragraph after the "key message" to explicitly invite viewers to use the assessment/calculator tools:

### Updated Script

> ROI shows up in three places—measurable returns that compound as maturity increases.
>
> First, speed to decision. Decision cycles shrink from weeks to days. Seventy percent faster.
>
> Second, better growth outcomes. Higher-quality bets, fewer failed launches. Two times higher launch success.
>
> Third, lower cost of intelligence. Less duplication, fewer tools, less manual reconciliation. Thirty percent lower total cost of ownership.
>
> Look at the chart below. You can see exactly how value compounds as you move from Fragmented through to Predictive. Each stage unlocks exponentially more return.
>
> Here's the key message: ROI compounds as organisations move up the maturity curve. The sooner you start, the faster value accumulates.
>
> **Want to see exactly what you could unlock? Try our Maturity Assessment to benchmark where you are today—or use the Value Calculator to quantify the returns at each stage for your organisation. Both tools will give you a clear, personalised picture of what's possible.**

## Changes Summary

| Section | Current | Proposed |
|---------|---------|----------|
| Chart reference | None | Added reference to the visual compounding chart with stage names |
| CTA mention | None | Added paragraph inviting viewers to try the Maturity Assessment or Value Calculator |

## File to Change

| File | Lines | Change |
|------|-------|--------|
| `src/data/globalDataNarration.ts` | 141-154 | Update script for slideId 8 to reference the stage names in the chart and mention the Maturity Assessment / Value Calculator CTA |

## Outcome

- Narration explicitly mentions the visual chart showing value compounding across stages (Fragmented to Predictive)
- Viewers are invited to try the Maturity Assessment or Value Calculator
- Creates a natural call-to-action within the narration that aligns with the on-screen CTA button
- Maintains the professional, advisory tone consistent with the rest of the deck

