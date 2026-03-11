

# Plan: Add "Now Unlocked" Actions to Persona Slides

## Approach

Rather than restructuring the whole slide, add a **compact "Now Unlocked" strip** below the dashboard showing 2-3 specific decisions/actions this persona can now take — and crucially, which other persona's intelligence enables each one. This cements the collaboration narrative directly on every persona slide.

## Data change

Add a new `unlockedActions` field to `PersonaData`:

| Persona | Unlocked Action | Enabled By |
|---------|----------------|------------|
| Sarah | Validate trends against live market sizing | James |
| Sarah | Pre-screen concepts before innovation invests | Marcus |
| James | Size only the markets where trends are accelerating | Sarah |
| James | Flag sizing gaps competitors are already exploiting | Priya |
| Priya | Prioritise tracking on categories with validated growth | James |
| Priya | Alert innovation when a competitor files a relevant patent | Marcus |
| Marcus | Score concepts against trend momentum + market size | Sarah + James |
| Marcus | Kill concepts where competitors already dominate | Priya |
| Elena | Build buyer stories with trend + sizing + competitive proof | Sarah + James + Priya |
| Elena | Lead with validated innovation pipeline, not price | Marcus |
| David | Measure usage across all five intelligence layers | All |
| David | Consolidate 14 contracts with full ROI evidence | All |

## Layout change

Replace the static bottom tagline ("Same person. Same role...") with a **"Now Unlocked" row** — 2-3 compact pills/chips showing the action + a small colored dot/avatar of the enabling persona. This sits between the dashboard and the slide bottom.

```text
┌─────────────────────────────────────────────────┐
│ [progress bar] Step 1 of 6 · Trend & Strategy   │
│ [Avatar] Sarah · Head of Strategy               │
│ "I'm always 12 months late..."                  │
│                                                 │
│ ┌─WITHOUT──┐  ┌──── DASHBOARD ────────────────┐ │
│ │ bullets  │  │                                │ │
│ ├─WITH─────┤  │  Strategic Foresight           │ │
│ │ metrics  │  │                                │ │
│ └──────────┘  └────────────────────────────────┘ │
│                                                 │
│ 🔓 NOW UNLOCKED                                 │
│ ┌──────────────────┐ ┌──────────────────────┐   │
│ │ Validate trends  │ │ Pre-screen concepts  │   │
│ │ via James's data │ │ before Marcus invests │   │
│ └──────────────────┘ └──────────────────────┘   │
└─────────────────────────────────────────────────┘
```

Each chip shows a **Lock/Unlock icon**, the action text, and a small colored dot + name of the enabling persona — visually reinforcing that this decision is only possible because intelligence is connected.

## Files to modify

| File | Change |
|------|--------|
| `src/components/consumer-journey/PersonaSlide.tsx` | Add `unlockedActions` to interface, render "Now Unlocked" strip replacing bottom tagline |
| `src/pages/ConsumerJourneyDeck.tsx` | Add `unlockedActions` data to each persona in the array |

