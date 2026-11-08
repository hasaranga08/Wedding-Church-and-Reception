/**
 * Global Audio Manager for Wedding Background Music
 * Plays the official wedding song: "The Wedding Song (Mathakaida Ada Wage)" - Meena Prasadini
 * - Starts seamlessly upon the guest's first tap on "Tap to open"
 * - Continues playing smoothly across video playback, page transitions, and scrolling
 * - Muting silences the audio without pausing or resetting track position
 * - Unmuting restores audio at the current position
 * - Handled via native HTML5 Audio singleton for optimal mobile (iOS Safari & Android Chrome) performance
 */

export const WEDDING_AUDIO_SRC =
  '/assets/aistudio/Y2Mate.is_-_The_Wedding_Song___Mathakaida_Ada_Wage___Meena_Prasadini_6608321d.mp3';

class AudioManager {
  private audio: HTMLAudioElement | null = null;
  private isStarted = false;
  private isMuted = false;
  private listeners: Set<() => void> = new Set();

  constructor() {
    // Lazily initialize audio on first browser load if window is available
    if (typeof window !== 'undefined') {
      this.initAudioElement();
    }
  }

  private initAudioElement(): HTMLAudioElement {
    if (!this.audio) {
      this.audio = new Audio(WEDDING_AUDIO_SRC);
      this.audio.loop = true;
      this.audio.preload = 'auto';
      this.audio.muted = this.isMuted;
      this.audio.volume = this.isMuted ? 0 : 0.85;

      // Event listeners for state changes
      this.audio.addEventListener('play', () => {
        this.isStarted = true;
        this.notify();
      });

      this.audio.addEventListener('pause', () => {
        this.notify();
      });

      this.audio.addEventListener('error', (e) => {
        console.warn('Background audio element error:', e);
      });
    }
    return this.audio;
  }

  subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((fn) => {
      try {
        fn();
      } catch (err) {
        console.error('Audio listener error:', err);
      }
    });
  }

  getState() {
    return {
      isStarted: this.isStarted,
      isMuted: this.isMuted,
      isPlaying: this.isStarted && !this.isMuted,
    };
  }

  /**
   * Starts background music from the beginning upon direct user interaction.
   * If already playing, maintains playback without glitch or restart.
   */
  start() {
    const audio = this.initAudioElement();

    // If already playing smoothly, do not interrupt
    if (this.isStarted && !audio.paused) {
      return;
    }

    try {
      audio.muted = this.isMuted;
      audio.volume = this.isMuted ? 0 : 0.85;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.isStarted = true;
            this.notify();
          })
          .catch((err) => {
            console.warn('Audio playback not allowed or interrupted:', err);
            // Gracefully handle without throwing so video and UI remain fully functional
          });
      } else {
        this.isStarted = true;
        this.notify();
      }
    } catch (err) {
      console.warn('Audio start error:', err);
    }
  }

  /**
   * Toggles mute state.
   * Muting silences the music without stopping or resetting playback position.
   * Unmuting restores the music from its current playback position.
   */
  toggleMute() {
    this.isMuted = !this.isMuted;

    if (this.audio) {
      this.audio.muted = this.isMuted;
      try {
        this.audio.volume = this.isMuted ? 0 : 0.85;
      } catch (e) {
        // iOS Safari does not allow programmatically modifying volume property, uses muted instead
      }

      // If user tapped unmute before start was triggered, initiate playback
      if (!this.isMuted && !this.isStarted) {
        this.start();
        return;
      }
    }

    this.notify();
  }

  /**
   * Pauses audio if explicitly needed
   */
  pause() {
    if (this.audio && !this.audio.paused) {
      this.audio.pause();
    }
    this.notify();
  }

  /**
   * Stops audio and resets to start
   */
  stop() {
    if (this.audio) {
      this.audio.pause();
      try {
        this.audio.currentTime = 0;
      } catch (e) {
        // ignore
      }
    }
    this.isStarted = false;
    this.notify();
  }
}

export const audioManager = new AudioManager();
