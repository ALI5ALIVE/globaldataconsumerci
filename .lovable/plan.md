

# Reframe Title Slide: "A New Way of Working"

## What Changes

The bottom quote currently reads as a standalone aphorism. We need to reframe it so the idea that "connected intelligence" represents **a new way of working** comes through clearly — not just a quote, but the thesis of the entire deck.

## Changes to `src/components/consumer-journey/CJSlide0Title.tsx`

1. **Update the subtitle** (lines 81-86): Replace "Stop reacting. Start leading..." with copy that positions this as a new way of working:
   - *"What you're about to see isn't just better data."*
   - *"It's a completely new way of working."*

2. **Reframe the bottom quote** (lines 117-127): Make it a two-part statement rather than a plain quote — first the quote, then a reinforcing line:
   - Keep: *"The brands that win don't have more data. They have connected intelligence."*
   - Add below: A small label/tag like **"A new way of working"** styled as an understated accent line (uppercase, tracking-wider, primary color) to land the message.

## Also update narration to match

In `src/data/consumerJourneyNarration.ts`, slide 0 script — adjust the short intro to weave in "a new way of working":
- *"Connected Intelligence for Consumer Brands. What you're about to see is a new way of working — one where the brands that win don't have more data — they have connected intelligence."*

