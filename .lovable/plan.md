## What the deck actually says
Slide 8 of the uploaded PDF names **five personas — Sarah, Chloe, Sebastian, Priya, Marcus**. There is no James, no Elena, no David. My earlier script (and memory) used the wrong roster.

## Correct persona lock (from deck)
| Name | Role | Headline number on slide 8 |
|---|---|---|
| Sarah | Strategy | Convergence 92 |
| Chloe | Market sizing | $2.1B TAM |
| Sebastian | Competitive Intel | High threat |
| Priya | Innovation | 3 of 5 concepts pass |
| Marcus | Commercial / Sales | 2 of 3 retailers ready |

Note: Priya is **Innovation** (not Competitive); Marcus is **Commercial** (not Innovation). Both were swapped in the old script.

## Fix — `src/pages/PresenterScript.tsx`

**Slide 07 — value walk (rewrite to correct roster + roles):**
- Sarah in Strategy — stops chasing convergence across vendors; sees it scored across 22 sectors.
- Chloe in Market Sizing — stops rebuilding TAMs in spreadsheets; sized and forecast across 110 countries.
- Sebastian in Competitive Intelligence — stops finding out late; 25,000 companies tracked the day moves happen.
- Priya in Innovation — stops guessing at concepts; 4M products and patents tell her what's been tried and what's about to land.
- Marcus in Commercial — stops walking into retailers with caveats; walks in with the evidence, account by account.
- Drop David/Procurement line (not on the deck).
- Close: "One platform. One source of truth. Every number traceable back to a named analyst. Now watch what they do with it on a Friday."

**Slide 08 — decision in motion (rewrite numbers to match deck):**
- "Sarah — convergence 92. Chloe — $2.1 billion TAM, Southeast Asia is the white space. Sebastian — high threat, a rival is building capacity, four patents filed. Priya — three of five concepts pass. Marcus — two of three target retailers ready for a first-mover pitch."
- Keep the audit-trail paragraph and old-way/new-way close.

**Slide 09 — anchor stats to correct people:**
- "Sarah stops defending numbers. Chloe stops rebuilding TAMs. Sebastian stops chasing rumours. Priya stops killing time on dead concepts. Marcus walks into retailers already trusted."

**Slide 10 — Maturity Journey:**
- Replace "Sarah, James, Priya, Marcus and Elena" with "Sarah, Chloe, Sebastian, Priya and Marcus" in the Connected stage line.

## Also update the copy-updates reference section
- **Slide 05 — Persona lock** block: replace the Sarah/James/Priya/Marcus/Elena/David line with the corrected 5-persona roster and their roles as listed above. Drop the "David (Procurement outcome)" framing.
- **Number discipline** block: replace the "Personas: Sarah, James, Priya, Marcus, Elena, David" line with "Personas: Sarah (Strategy) · Chloe (Market) · Sebastian (Competitive) · Priya (Innovation) · Marcus (Commercial)".

## Memory update
The locked persona memory is wrong and has caused this rework. Update:
- `mem://features/consumer-journey/one-lens-hub-config-v2` (if it carries names) and the index Core note — to "Sarah · Chloe · Sebastian · Priya · Marcus" with roles, and flag explicitly: "no James, no Elena, no David — deck is source of truth."

## Out of scope
- No edits to slide components or narration audio data.
- No other script slides changed.