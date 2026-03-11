

# Redesign: More Visual, More Impactful Persona Slides

## Problem
The current 3-column layout has too much dead space — the pain/benefit boxes stretch full height but only contain a quote, a paragraph, and 3 bullet points. No persona imagery makes the slides feel abstract and text-heavy.

## Proposed Layout: Persona-Led Split Design

Replace the 3-column equal grid with a **2-row layout** — persona identity at top, transformation story below.

```text
┌─────────────────────────────────────────────────────┐
│ [Step dots]  Step 3 of 6 · Track Competition        │
│                                                     │
│  ┌──────────┐                                       │
│  │  Avatar  │  Priya · Competitive Intelligence     │
│  │  Circle  │  "I find out about competitor moves   │
│  │  (icon)  │   from trade press. Too late."        │
│  └──────────┘                                       │
│                                                     │
│  ┌──── WITHOUT ─────┐  ┌───── DASHBOARD ──────────┐ │
│  │ • Reactive        │  │                          │ │
│  │ • Same intel      │  │   [Competitive Tracker]  │ │
│  │ • Always behind   │  │                          │ │
│  ├──── WITH ────────┤  │                          │ │
│  │ ✓ 25K companies  │  │                          │ │
│  │ ✓ 6 signal types │  │                          │ │
│  │ ✓ Real-time      │  │                          │ │
│  └──────────────────┘  └──────────────────────────┘ │
│         Same person. Completely different impact.    │
└─────────────────────────────────────────────────────┘
```

### Key changes

1. **Persona avatar header** — Large icon-based avatar circle (using the persona's Lucide icon with initials fallback) + name + role + the pain quote as a hero statement. Creates immediate human connection.

2. **Compact left column** — Stack the "Without" and "With" into a single narrow column. Without = red-tinted compact card with just the 3 pain bullets. With = green-tinted card with the 3 metric bullets. No paragraph text — just the sharp, scannable bullets. Eliminates dead space.

3. **Larger dashboard** — The dashboard mockup takes ~60% width instead of 33%. This is the visual centrepiece — making it bigger adds impact and reduces the "three equal boxes of text" feel.

4. **Layout**: Top row = persona identity bar. Bottom row = `grid-cols-[280px_1fr]` (compact pain/benefit stack | large dashboard).

## Files

| File | Change |
|------|--------|
| `src/components/consumer-journey/PersonaSlide.tsx` | Redesign layout: persona header row with avatar, 2-col bottom (stacked pain+benefit cards | enlarged dashboard) |

## Implementation detail

- Avatar: 56px circle with gradient bg matching the persona's value chain position color, persona icon centered inside, initials as text fallback
- Pain card: compact, no quote/paragraph — just label + 3 bullets with AlertTriangle icons
- Benefit card: compact — just label + 3 metric bullets with CheckCircle2 icons  
- The pain quote moves up to the persona header as a large italic statement
- The benefit quote becomes a small accent line between the two cards
- Dashboard column gets `col-span` majority of width
- Remove the `painDetail` and `benefitDetail` paragraphs from the visible layout (data stays in the interface for narration use)

