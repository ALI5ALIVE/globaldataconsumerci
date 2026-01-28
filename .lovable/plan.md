
## Goal
Fix Slides 7 & 8 so:
1) the **narration being played is definitely the latest script**, and  
2) the **visual steps (stage/pillar changes) happen exactly when the narrator reaches each line**, not earlier.

Right now, even after changing `stageTimings` / `stepTimings`, you can still experience “animations faster than script” because the app can keep using **previously generated audio** (from in-memory cache that survives hot reload / session), so the percentages are being applied to an audio track that doesn’t match the current text.

---

## What I found (root causes)

### A) The narration audio can be stale even when the script file is updated
In `src/hooks/useGlobalDataNarration.ts`, audio is cached like this:

- `cacheRef` is `Map<number, string>` keyed only by `slideId`
- once Slide 7 or 8 has been generated once, it will keep returning the same `audioUrl` for that slide for the rest of the session
- with Vite/HMR, that cache can effectively persist while you iterate, so you can change the script/timings and still hear the old audio

That matches your symptom: “narration has not been updated… animation still too fast”.

### B) Slide 7 has a separate “mount animation” not tied to narration
`GDSlide7MaturityCurve.tsx` runs:
- `setTimeout(() => setIsAnimated(true), 100)` on mount
So the curve + markers fade in quickly regardless of narration progress. Even if stage highlighting is fixed, the “animation” may still feel like it’s racing ahead.

### C) Slide 8 defaults to showing the end-state when not narration-controlled
`GDSlide8ROI.tsx` initializes `activeStep` to `'compounding'` and also resets to `'compounding'` in multiple branches. If the narration state toggles (pause/resume/loading transitions), it can flash or return to end-state in ways that feel “too fast”.

---

## Implementation plan

### 1) Make narration caching script-aware (fix “narration not updated”)
Update `useGlobalDataNarration.ts` so cache keys include the actual content being narrated.

**Change:**
- Replace `Map<number, string>` with something like:
  - `Map<number, { audioUrl: string; scriptKey: string }>`
- Compute a stable `scriptKey` for each slide such as:
  - `${voiceId}::${script.length}::${hash(script)}`
  - (can use a lightweight hash function in TS; no new dependency required)

**Behavior:**
- When `fetchAudio(slideId)` runs:
  - compute `scriptKey` from `getGlobalDataNarration(slideId).script` and `voiceId`
  - if cache entry exists AND `entry.scriptKey === scriptKey`, reuse
  - else revoke the old ObjectURL (important) and regenerate fresh audio

**Outcome:**
- Anytime you change Slide 7/8 script text (even a single character), it forces regeneration.
- This directly addresses your “narration hasn’t been updated” complaint.

---

### 2) Add a “force regenerate” path for Slides 7 & 8 (fast iteration)
Even with script-aware caching, you may want to regenerate when you adjust ElevenLabs settings or want a clean re-run.

**Change:**
- Add an optional flag to `play(slideId, options?)` or a new method like `playFresh(slideId)` that bypasses cache for that play.
- Wire the SlidePlayButton UI (or a small secondary action) to allow “Regenerate audio” for the current slide.

**Outcome:**
- You can immediately confirm you’re hearing the current narration, without needing hard refreshes.

---

### 3) Make Slide 7 animations narration-gated (reduce “too fast” feeling)
In `GDSlide7MaturityCurve.tsx`:
- Change the mount-driven `isAnimated` behavior so it doesn’t “animate in” before narration starts.

**Change options (we’ll implement the safest):**
- Gate the `isAnimated` transition on narration:
  - `isAnimated = isPlaying || progress > 0 || hasCompleted`
- Or: only start the fade-in when `progress >= 1` (small buffer to avoid firing at 0).

**Outcome:**
- The chart/markers don’t perform their entrance animation until narration actually begins.

---

### 4) Stabilize Slide 8 step state so it doesn’t jump to the end
In `GDSlide8ROI.tsx`:
- Adjust initial and reset behavior:
  - When narration is playing: initialize and keep `activeStep` at `'intro'` until thresholds are reached.
  - When narration is not playing: decide a single consistent “resting” state (likely `'compounding'` if you want the full slide visible when idle), but avoid flipping between states due to transient loading/pause branches.

**Outcome:**
- No early “full reveal” flashes during load/pause/resume.
- The only reveals come from progress thresholds.

---

### 5) Add a temporary on-screen calibration overlay (to get “exact”)
To truly match “exactly”, we need a way to measure the real audio pacing you’re hearing.

**Change (dev-friendly, can be left behind behind a boolean):**
- On Slides 7 and 8, render a tiny debug overlay (top-right) when `import.meta.env.DEV`:
  - current `progress` %
  - current `audio.currentTime` / `duration` if accessible (we can also expose this from the narration hook)
  - current `activeStage` / `activeStep`

**Outcome:**
- We can tune timings precisely without guessing.
- You can tell me “Stage 3 is mentioned at 52%” and we update numbers once, confidently.

---

### 6) Recalibrate Slide 7 & 8 timing markers using measured audio
After steps 1–5, we’ll do a targeted recalibration:
- Play Slide 7 and note the progress % at the start of:
  - “At stage one—Fragmented—…”
  - “By stage two—Managed—…”
  - “Stage three—Connected—…”
  - “Stage four—Optimized—…”
  - “And stage five—Predictive…”
- Same for Slide 8:
  - “First…”
  - “Second…”
  - “Third…”
  - “Here’s the key message…”

Then set timings to those measured % (plus a small safety buffer like +1–2%) so visuals never lead audio.

---

## Files to change
1) `src/hooks/useGlobalDataNarration.ts`
   - script-aware caching
   - optional bypass/regenerate path
   - (optional) expose `currentTime`/`duration` for calibration

2) `src/components/globaldata-slides/GDSlide7MaturityCurve.tsx`
   - gate entrance animation on narration start
   - (optional) add calibration overlay

3) `src/components/globaldata-slides/GDSlide8ROI.tsx`
   - stabilize `activeStep` initialization and idle behavior
   - (optional) add calibration overlay

---

## Acceptance criteria (what you should see)
- If you change the Slide 7/8 script text and press Play again, the spoken audio **changes immediately** (no stale narration).
- Slide 7 curve/markers do not “animate in” before narration begins.
- Stage/pillar reveals never happen before the narrator says the corresponding line.
- If anything is still off, we can tune using the overlay and get it exact in one pass.

---

## What I need from you during calibration (after implementation)
A single playback pass where you tell me:
- Slide 7: the progress % (shown in overlay) when each “stage one / stage two / stage three / stage four / stage five” line begins
- Slide 8: the progress % when “First / Second / Third / Here’s the key message” begins

That will let us set the final timing markers with precision.

