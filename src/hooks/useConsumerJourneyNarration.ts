import { useState, useRef, useCallback } from "react";
import { getConsumerJourneyNarration } from "@/data/consumerJourneyNarration";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

interface NarrativeState {
  isPlaying: boolean;
  isLoading: boolean;
  currentSlide: number | null;
  progress: number;
  hasCompleted: boolean;
}

interface CacheEntry {
  audioUrl: string;
  scriptKey: string;
}

const hashScript = (script: string): string => {
  let hash = 0;
  for (let i = 0; i < script.length; i++) {
    const char = script.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString(36);
};

const generateScriptKey = (script: string, voiceId: string): string => {
  return `${voiceId}::${script.length}::${hashScript(script)}`;
};

export const useConsumerJourneyNarration = () => {
  const [state, setState] = useState<NarrativeState>({
    isPlaying: false,
    isLoading: false,
    currentSlide: null,
    progress: 0,
    hasCompleted: false,
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const cacheRef = useRef<Map<number, CacheEntry>>(new Map());

  const fetchAudio = async (slideId: number, forceRegenerate = false): Promise<string> => {
    const narration = getConsumerJourneyNarration(slideId);
    if (!narration) throw new Error(`No narration for journey slide ${slideId}`);

    const currentScriptKey = generateScriptKey(narration.script, narration.voiceId);
    const cached = cacheRef.current.get(slideId);
    if (cached && !forceRegenerate) {
      if (cached.scriptKey === currentScriptKey) return cached.audioUrl;
      URL.revokeObjectURL(cached.audioUrl);
      cacheRef.current.delete(slideId);
    }

    const response = await fetch(`${SUPABASE_URL}/functions/v1/elevenlabs-tts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({ text: narration.script, voiceId: narration.voiceId }),
    });

    if (!response.ok) throw new Error("Failed to generate audio");

    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    cacheRef.current.set(slideId, { audioUrl, scriptKey: currentScriptKey });
    return audioUrl;
  };

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    setState(prev => ({ ...prev, isPlaying: false, isLoading: false, progress: 0 }));
  }, []);

  const play = useCallback(async (slideId: number, options?: { forceRegenerate?: boolean }) => {
    stop();
    setState(prev => ({ ...prev, isLoading: true, currentSlide: slideId, progress: 0, hasCompleted: false }));

    try {
      const audioUrl = await fetchAudio(slideId, options?.forceRegenerate);
      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      audio.ontimeupdate = () => {
        if (audio.duration) {
          setState(prev => ({ ...prev, progress: (audio.currentTime / audio.duration) * 100 }));
        }
      };
      audio.onended = () => setState(prev => ({ ...prev, isPlaying: false, progress: 100, hasCompleted: true }));
      audio.onerror = () => setState(prev => ({ ...prev, isPlaying: false, isLoading: false }));

      await audio.play();
      setState(prev => ({ ...prev, isPlaying: true, isLoading: false }));
    } catch (error) {
      console.error("Failed to play journey narration:", error);
      setState(prev => ({ ...prev, isPlaying: false, isLoading: false }));
    }
  }, [stop]);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setState(prev => ({ ...prev, isPlaying: false }));
    }
  }, []);

  const resume = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play();
      setState(prev => ({ ...prev, isPlaying: true }));
    }
  }, []);

  const resetCompleted = useCallback((slideId: number) => {
    if (state.currentSlide === slideId) {
      setState(prev => ({ ...prev, hasCompleted: false, progress: 0 }));
    }
  }, [state.currentSlide]);

  const preloadNext = useCallback((currentSlideId: number) => {
    const nextSlideId = currentSlideId + 1;
    if (nextSlideId <= 10 && !cacheRef.current.has(nextSlideId)) {
      fetchAudio(nextSlideId).catch(() => {});
    }
  }, []);

  return { ...state, play, pause, resume, stop, resetCompleted, preloadNext };
};
