/**
 * Utility functions for computing narration-synced animation timings.
 * Uses weighted character counts to better approximate TTS spoken duration.
 */

// Weighting for TTS pacing - punctuation and whitespace create pauses
const PAUSE_WEIGHTS: Record<string, number> = {
  '\n': 35,  // Newline = big pause
  '.': 18,
  '!': 18,
  '?': 18,
  ',': 8,
  ';': 8,
  ':': 8,
  '—': 10,  // Em dash
  '-': 5,   // Regular dash (smaller pause)
};

/**
 * Compute the weighted "spoken time" index for a position in the script.
 * Returns a value representing approximate spoken progress (not raw character count).
 */
export function computeWeightedIndex(script: string, charIndex: number): number {
  let weight = 0;
  const end = Math.min(charIndex, script.length);
  
  for (let i = 0; i < end; i++) {
    const char = script[i];
    // Base weight for each character
    weight += 1;
    // Additional pause weight for punctuation/whitespace
    if (PAUSE_WEIGHTS[char]) {
      weight += PAUSE_WEIGHTS[char];
    }
  }
  
  return weight;
}

/**
 * Compute the total weighted length of the entire script.
 */
export function computeTotalWeight(script: string): number {
  return computeWeightedIndex(script, script.length);
}

interface StageMarker {
  stage: number | string;
  phrase: string;
}

interface ComputedTiming {
  stage: number | string;
  startPercent: number;
}

/**
 * Compute stage timing percentages based on marker phrases in the script.
 * 
 * @param script - The full narration script text
 * @param markers - Array of {stage, phrase} objects defining where each stage begins
 * @param lagPercent - Optional safety lag (default 1.5%) to prevent early triggering
 * @param fallbackTimings - Fallback timings if any marker phrase is not found
 */
export function computeStageTimingsFromScript(
  script: string,
  markers: StageMarker[],
  lagPercent: number = 1.5,
  fallbackTimings?: ComputedTiming[]
): ComputedTiming[] {
  const totalWeight = computeTotalWeight(script);
  const timings: ComputedTiming[] = [];
  
  for (const marker of markers) {
    const phraseIndex = script.indexOf(marker.phrase);
    
    if (phraseIndex === -1) {
      // Marker phrase not found - use fallback or warn
      console.warn(`[narrationTimingUtils] Marker phrase not found: "${marker.phrase}"`);
      if (fallbackTimings) {
        return fallbackTimings;
      }
      // Continue with best effort - skip this marker
      continue;
    }
    
    const weightAtPhrase = computeWeightedIndex(script, phraseIndex);
    let percent = (weightAtPhrase / totalWeight) * 100;
    
    // Apply lag for stages after the first
    if (timings.length > 0) {
      percent += lagPercent;
    }
    
    // Clamp to valid range
    percent = Math.max(0, Math.min(100, percent));
    
    timings.push({
      stage: marker.stage,
      startPercent: Math.round(percent * 10) / 10, // Round to 1 decimal
    });
  }
  
  return timings;
}
