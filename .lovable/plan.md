

# Make Personas Prominent on Slide 4 to Feed Slide 5

## Goal
Slide 4 should explicitly introduce Sarah, James, Priya, Marcus, Elena, and David as the people who use each solution. This sets up Slide 5 ("The Connected Decision") where these same six personas appear in the meeting scenario — creating narrative continuity and making the meeting feel like a natural continuation.

## Changes

### 1. `src/data/consumerJourneyNarration.ts` — Slide 4 script

Rewrite to introduce each persona alongside their solution, making the connection between "who" and "what" explicit:

> "Imagine seeing that same opportunity through one connected lens. Five solutions — each best-in-class — working together for the first time. **Sarah**, your Head of Strategy, uses Strategic Intelligence to see where the category is heading. **James** gets one definitive sizing from Market Intelligence across every market you care about. **Priya** tracks every competitive move in real time. **Marcus** tests concepts against real evidence with Innovation Intelligence. And **Elena** walks into every buyer meeting armed with the full story from Sales Intelligence. Connecting all of them is **Ava** — our AI intelligence layer — surfacing patterns no single team would spot alone. **David** wraps it into one contract at thirty percent lower cost. Six people. One platform. That's what Connected Intelligence is. Now let's see how it works in practice."

### 2. `src/components/consumer-pitch/CPSlide4ImagineOneLens.tsx` — Bottom text

Update to reference the personas:

- First line: "Six people. Five solutions. One AI layer. One connected lens."
- Second line: "Meet the team who'll show you how it works."

### 3. `src/components/consumer-journey/CJOneLensHub.tsx` — Tooltip enhancement

Update the hover tooltip to show both the solution value AND the persona name/role, reinforcing the connection:

- Header: "{Solution Name}"
- Subheader: "{Persona Name}, {Role}"  
- Body: "{Value proposition}"

Example: "Strategic Intelligence | Sarah, Head of Strategy | See where your category is heading..."

### Summary of files changed

| File | Change |
|------|--------|
| `consumerJourneyNarration.ts` | Introduce each persona by name in slide 4 script |
| `CPSlide4ImagineOneLens.tsx` | Update bottom text to reference "six people" |
| `CJOneLensHub.tsx` | Enhance tooltip to show persona name + role |

