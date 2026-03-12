

# Make Slide 4 ("The Cost") Personal and Powerful

## Concept: "The Real Cost — To Your Business and To You"

Reframe the slide from abstract business losses into a deeply personal mirror. Split into two halves: **what fragmentation cost the business** and **what it cost the listener personally** (their credibility, their time, their career momentum). This creates an emotional bridge between the "Seven Sources" problem (slide 3) and the "One Lens" solution (slide 5).

## Design

### Layout (top to bottom)
1. **Title**: "What It's Already Cost You" — subtitle: "In your category. This year. Personally."
2. **Two-column layout**:
   - **Left: "Your Business"** — 3 loss cards with accumulating £ ticker (competitor moved first → £40M line lost, 12-week alignment delay, concept killed without evidence)
   - **Right: "You, Personally"** — 3 cards framing the human cost (credibility eroded in the boardroom, 60% of your week wasted reconciling, the call you didn't make because you weren't sure)
3. **Bottom accumulator bar**: A running "total cost" that animates up as cards appear — combining revenue lost + time wasted + opportunities missed. Ends with a punchy line: *"And next quarter, it happens again — unless something changes."*

### Animation
- Cards appear sequentially (left-right alternating) with staggered delays
- The accumulator bar fills/counts up as each card lands
- Final line fades in after all cards, creating a pause before the viewer scrolls to "One Lens"

### Emotional hooks (personal side)
- "Your board questioned the numbers — again" (credibility)
- "You spent 3 days building a deck instead of building strategy" (time)
- "You had the right instinct but no evidence to back it" (confidence)

## File Changes

### `src/components/consumer-pitch/CPSlide3TheCost.tsx`
- Replace 4-card grid with 2-column layout (Business | You)
- 3 cards per column with icon, headline, and one-line detail
- Add bottom accumulator strip with animated counter
- Add closing bridge line that sets up the "One Lens" slide
- Keep framer-motion staggered entrance, CPSlideContainer wrapper, and narration props

