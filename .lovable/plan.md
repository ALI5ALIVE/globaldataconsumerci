

# Fix Narration Auto-Play Chaos

## Root Cause

The `useEffect` on line 189-198 fires `narration.play()` every time `activeSlide` changes. During scrolling, the scroll handler rapidly updates `activeSlide` (via `Math.round`), so multiple TTS requests fire simultaneously. The 400ms delay isn't enough — scroll events keep updating `activeSlide` within that window, creating overlapping timers that all eventually fire.

Additionally, the condition `prevSlideRef.current === 0` means slide 0 always triggers on mount, even before the user has interacted.

## Design: Manual Play, Smart Stop

The world-class experience here is: **narration does NOT auto-play on scroll**. The user presses the play button when they're ready. But once playing, if narration completes, it auto-advances to the next slide and starts that slide's narration automatically (preserving the "sit back and watch" flow once initiated).

**Key behaviors:**
1. Landing on a slide via scroll/nav: narration does NOT auto-play. Play button is visible and ready.
2. User presses play: narration plays for that slide. Next slide is preloaded.
3. Narration completes: after 1.5s, auto-advance to next slide AND auto-play that slide's narration (continuous flow).
4. User scrolls/navigates manually during playback: current narration stops immediately. Auto-advance cancels. New slide shows play button (no auto-play).
5. User presses pause: narration pauses. No auto-advance. Play button resumes.

## Changes

### `src/pages/ConsumerJourneyDeck.tsx`

1. **Remove** the auto-play `useEffect` (lines 189-198) entirely — this is the bug source
2. **Add** a `userInitiated` ref to track whether the user started playback (vs manual scroll)
3. **Modify** the auto-advance effect: when narration completes AND `userInitiated` is true, scroll to next slide and set a flag to auto-play it
4. **Add** a new effect: when `activeSlide` changes, if the change was triggered by auto-advance, play narration after 800ms settle time. If triggered by manual scroll, just stop current narration.
5. **Update** `getNarrationProps.onPlay` to set `userInitiated = true`
6. **Update** `navigateSlide` and dot-nav clicks to set `userInitiated = false` and call `narration.stop()`
7. **Add scroll listener logic**: detect manual scroll (user-initiated) vs programmatic scroll to distinguish auto-advance from manual navigation

### `src/hooks/useConsumerJourneyNarration.ts`

No changes needed — the hook's `stop()` and `play()` already handle cleanup correctly. The problem is entirely in the deck's orchestration.

## Summary

| Behavior | Before (broken) | After (fixed) |
|----------|-----------------|---------------|
| Land on slide | Auto-plays immediately | Shows play button, silent |
| Scroll through slides | Multiple narrations fire | Current narration stops, silent on new slide |
| Press play | Plays (sometimes conflicts) | Plays cleanly |
| Narration finishes | Auto-advances + auto-plays next | Auto-advances + auto-plays next (continuous flow) |
| Manual nav during playback | Narration keeps playing | Stops immediately |

