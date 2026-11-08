import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles } from 'lucide-react';
import { audioManager } from '../utils/audioManager';

interface EnvelopeVideoExperienceProps {
  onComplete: () => void;
  isOpen: boolean;
}

export const EnvelopeVideoExperience: React.FC<EnvelopeVideoExperienceProps> = ({
  onComplete,
  isOpen,
}) => {
  // State machine:
  // 'initial': video paused on first frame, text overlay "Chamod & Roshini" + "Tap to open" visible
  // 'playing': video actively playing from 0:00 to completion
  // 'fading': video reached end (after playing 9.6s+), applying soft cinematic blur & crossfade
  // 'completed': overlay invisible, main wedding information page active
  const [stage, setStage] = useState<'initial' | 'playing' | 'fading' | 'completed'>(
    isOpen ? 'completed' : 'initial'
  );

  const videoRef = useRef<HTMLVideoElement>(null);
  const hasStartedRef = useRef(false);
  const hasTriggeredEndRef = useRef(false);
  const transitionTimeoutRef = useRef<number | null>(null);

  // Configure video element DOM properties for strict mobile (iOS Safari & Android Chrome) inline playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // React JSX attributes don't always set native DOM properties on iOS WebKit
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('x5-playsinline', '');
  }, []);

  // Safely pause and reset video playback to 0:00 without throwing errors
  const resetVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.pause();
      if (video.readyState >= 1) {
        video.currentTime = 0;
      }
    } catch (e) {
      console.warn('Error resetting video position:', e);
    }
  }, []);

  // Sync state and reset video whenever isOpen changes (including user tapping "Replay Envelope")
  useEffect(() => {
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }

    if (!isOpen) {
      setStage('initial');
      hasStartedRef.current = false;
      hasTriggeredEndRef.current = false;
      resetVideo();
    } else {
      setStage('completed');
    }
  }, [isOpen, resetVideo]);

  // Clean up any pending transition timer on unmount
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  // Strict transition trigger: ONLY callable when video has actually played through to the end
  const handleVideoTransitionToEnd = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    // Guard: Video MUST have started and actually progressed to at least 8.5 seconds (full duration is 10s)
    if (!hasStartedRef.current || video.currentTime < 8.5) {
      return;
    }

    if (hasTriggeredEndRef.current) return;
    hasTriggeredEndRef.current = true;

    // Apply slow, luxurious cinematic blur & fade-out
    setStage('fading');

    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    transitionTimeoutRef.current = window.setTimeout(() => {
      resetVideo();
      setStage('completed');
      onComplete();
    }, 1200);
  }, [onComplete, resetVideo]);

  // Tap anywhere on opening screen: starts video synchronously from user interaction
  const handleTapToOpen = (e: React.MouseEvent | React.TouchEvent) => {
    // If not on the initial screen, ignore taps
    if (stage !== 'initial' || hasStartedRef.current) return;

    // 1. Separate audio start in try-catch so audio failure can NEVER prevent video playback
    try {
      audioManager.start();
    } catch (audioErr) {
      console.warn('Background audio start skipped:', audioErr);
    }

    const video = videoRef.current;
    if (!video) return;

    // Ensure DOM properties are set for mobile Safari & Android Chrome
    video.muted = true;
    video.defaultMuted = true;

    // Ensure playback starts from the very beginning (0:00)
    try {
      if (video.readyState >= 1) {
        video.currentTime = 0;
      }
    } catch (err) {
      console.warn('Could not reset currentTime to 0:', err);
    }

    // Call video.play() SYNCHRONOUSLY within this user interaction!
    // Never defer play() into canplay or async callbacks on iOS Safari
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Playback confirmed started by the mobile browser engine!
          hasStartedRef.current = true;
          hasTriggeredEndRef.current = false;
          setStage('playing');
        })
        .catch((err: Error) => {
          console.warn('Video play rejected on mobile:', err);
          // CRITICAL: NEVER navigate to information page on failure!
          // Keep guest on the opening screen so they can tap again to play
          hasStartedRef.current = false;
          setStage('initial');
        });
    } else {
      hasStartedRef.current = true;
      hasTriggeredEndRef.current = false;
      setStage('playing');
    }
  };

  // When video natural ended event fires
  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;

    // Only transition if the video has actually played to near completion (duration is 10s)
    if (stage === 'playing' && hasStartedRef.current && video.currentTime >= 8.5) {
      handleVideoTransitionToEnd();
    }
  };

  // Time update monitoring: transition when reaching the end of the 10-second video
  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    if (stage !== 'playing' || !hasStartedRef.current) return;
    const video = e.currentTarget;

    // The envelope video is 10.0 seconds long. Transition when reaching 9.6s+
    if (video.duration && video.currentTime >= 9.6) {
      handleVideoTransitionToEnd();
    }
  };

  return (
    <div
      onClick={handleTapToOpen}
      className={`fixed inset-0 z-50 flex items-center justify-center select-none overflow-hidden transition-all duration-1200 ease-out bg-[#060914] ${
        stage === 'completed'
          ? 'hidden opacity-0 pointer-events-none'
          : stage === 'fading'
          ? 'opacity-0 scale-105 filter blur-lg pointer-events-none'
          : 'opacity-100 scale-100 filter-none cursor-pointer'
      }`}
      style={{ touchAction: stage === 'completed' ? 'none' : 'manipulation' }}
      aria-hidden={stage === 'completed'}
    >
      {/* 9:16 Portrait Container holding the video */}
      <div className="relative w-full h-[100dvh] max-w-[500px] flex items-center justify-center overflow-hidden">
        {/* 1. ACTUAL ENVELOPE-OPENING VIDEO */}
        <video
          ref={videoRef}
          src="/assets/aistudio/Envelope_with_rings_b7a3117d.mp4"
          poster="/assets/aistudio/envelope_rings_first_frame.jpg"
          muted
          playsInline
          preload="auto"
          controls={false}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          onError={(e) => console.warn('Video element error:', e)}
          className="w-full h-full object-cover sm:object-contain select-none"
        />

        {/* 2. ELEGANT TEXT OVERLAY (Positioned towards the bottom 12-15% of the screen) */}
        <div
          className={`absolute inset-x-0 bottom-0 h-2/3 flex flex-col justify-end items-center text-center pointer-events-none z-30 transition-all duration-700 ease-out ${
            stage === 'initial'
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 translate-y-4'
          }`}
        >
          {/* Soft atmospheric gradient at bottom for maximum legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent pointer-events-none" />

          {/* Centered Wedding Header Lockup positioned ~12-15% above bottom with safe-area support */}
          <div className="relative z-10 flex flex-col items-center max-w-sm px-4 mb-[13vh] sm:mb-[14vh] pb-[env(safe-area-inset-bottom,0px)]">
            {/* Top Flourish / Monogram Accent */}
            <div className="flex items-center justify-center gap-3 mb-1.5 animate-fadeIn">
              <span className="h-[0.5px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#F3E5AB]/85" />
              <Sparkles className="w-3.5 h-3.5 text-[#F3E5AB] drop-shadow-sm" />
              <span className="h-[0.5px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#F3E5AB]/85" />
            </div>

            {/* Main Heading: “Roshini & Hasaranga” - Consistent mobile font size across all screens */}
            <h1 className="font-calligraphy text-4xl text-[#FFF8EC] tracking-wide leading-tight drop-shadow-[0_2px_10px_rgba(20,15,8,0.75)] filter">
              Roshini &amp; Hasaranga
            </h1>

            {/* Second Line: “Tap to open” - Consistent mobile font size across all screens */}
            <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 px-5 py-1.5 sm:py-2 rounded-full bg-black/30 backdrop-blur-md border border-[#F3E5AB]/45 shadow-lg">
              <span className="font-serif-luxury text-xs tracking-[0.32em] uppercase text-[#FFF9EF] font-light drop-shadow-sm">
                Tap to open
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
