## New Slide: "What You Actually Get"

Insert a new slide immediately after Slide 5 (One Lens hub) that makes the purchase tangible. Combines a 6-tile deliverables grid with a thin 3-step time-to-value strip across the bottom.

### Position in deck
Becomes Slide 6 of 13 (deck grows from 12 → 13 slides).

```
... → 05 One Lens hub → 06 What You Get (NEW) → 07 Connected Decision → ...
```

### Content

**Eyebrow:** "What You Actually Get"
**Title:** "One platform. Six deliverables. Live in 90 days."
**Sub:** "Beyond the vision — here's what lands in your business."

**6-tile grid (2 rows × 3 cols):**

| Tile | Headline | Detail |
|---|---|---|
| Platform | The Connected Platform | Single login, 6 solutions, one taxonomy across 50+ markets |
| Ava AI | Ava AI Workspace | Agentic assistant, natural-language queries, proactive alerts |
| Data | Analyst-Validated Data | 25,000 companies · 1,000+ segments · 95% global GDP · continuously refreshed |
| People | Dedicated Domain Experts | Named analysts and industry advisors embedded in your workflows |
| Onboarding | 90-Day Onboarding & Taxonomy Mapping | White-glove deployment mapped to your categories |
| Briefings | Executive Briefings & Custom Research | Quarterly board-ready deep dives on demand |

**Bottom timeline strip (3 chips):**
- **Day 1** — Platform access · taxonomy workshop · named analyst introduced
- **Day 30** — Your category mapped · first cross-solution dashboards live
- **Day 90** — Ava trained on your portfolio · first connected decision delivered
- *Closing tagline (right-aligned):* "Renewed annually · Advisory included"

### Web implementation

1. Create `src/components/consumer-journey/CJSlideWhatYouGet.tsx`
   - Reuse card pattern from `CJSlideWhyNotDIY.tsx` (icon-in-circle, headline, detail).
   - Use existing semantic tokens (primary = #0066FF, sky accents). No custom hex.
   - Lucide icons: `LayoutGrid`, `Sparkles`, `Database`, `Users`, `Rocket`, `FileText`.
   - Bottom strip: 3 numbered chips with `border-primary/30 bg-primary/5` styling, plus muted closing tagline.
   - Static-first per visibility memory — no progressive reveals.
2. Wire into `src/pages/ConsumerJourneyDeck.tsx`:
   - Insert after the One Lens hub slide.
   - Assign DOM id `cj-slide-whatyouget`.
   - Update slide-count props / index math so Connected Decision becomes 7/13 etc.
3. Add narration entry in `src/data/consumerJourneyNarration.ts`:
   - ~55 words, "Empathetic Advisor" tone, second-person.
   - Sample: "So what actually arrives? One platform with six connected solutions. Ava, your AI analyst. Validated data refreshed continuously. Named experts on your team. A ninety-day onboarding that maps your categories. And quarterly briefings ready for your board. Live in ninety days. Renewed annually. Advisory included."
4. Update `src/hooks/useConsumerJourneyNarration.ts` if it has a hard-coded slide count.

### PPTX export implementation

1. Add copy block `WHAT_YOU_GET_SLIDE` to `src/exporters/pptx/specs/consumerJourney/_copy.ts` (mirrors web strings).
2. Create `src/exporters/pptx/specs/consumerJourney/05a-what-you-get.ts`:
   - `gdLayout: "Content"` (most flexible body layout from gd_master).
   - Title row + 6-tile grid laid out as 2×3 using `addCard` patterns from existing specs.
   - Bottom 3 timeline chips using `addShape` rounded rects.
3. Update `src/exporters/pptx/buildConsumerJourneyDeck.ts`:
   - Add `{ id: "cj-slide-whatyouget", label: "What You Get" }` after One Lens entry.
4. Update `src/exporters/pptx/buildConsumerJourneyEditable.ts`:
   - Import and register the new spec in correct order.
   - Verify `gdMasterLayouts.ts` mapping array length matches new slide count.

### Memory updates

- Add `mem://features/consumer-journey/what-you-get-slide` describing the new slide's role and contents.
- Update `mem://features/consumer-journey/deck-structure-v3` from 12 → 13 slides with new index 6.

### QA

- Visual: verify grid breathes at 1370×885 viewport; 6 tiles fit without clipping; timeline strip doesn't collide with footer.
- Export: render PPTX, convert to images via libreoffice + pdftoppm, inspect new slide for overflow and ensure subsequent slides still pull correct gd_master layouts.
- Narration: confirm timing under ~25 seconds so it doesn't break sub-5-minute deck target.
