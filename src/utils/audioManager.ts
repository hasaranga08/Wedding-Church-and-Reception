/**
 * Global Audio Manager for Wedding Background Music
 * - Plays the newly uploaded wedding audio file from 00:00 upon opening the invitation
 * - Uses a single persistent HTMLAudioElement instance to avoid overlapping or duplicate tracks
 * - Continues playing seamlessly across video playback, page transitions, and scrolling
 * - Immediately pauses and resets to 00:00 when returning to the unopened envelope screen
 * - Preserves mute/unmute preference across stop/reset/reopen cycles
 * - Compatible with iPhone Safari, Android Chrome, and desktop browsers
 */

import { getAssetUrl } from './assets';

export const WEDDING_AUDIO_SRC = getAssetUrl(
  'assets/aistudio/New_song.mp3_a78f27ce.mpeg'
);

class AudioManager {
  private audio: HTMLAudioElement | null = null;
  private isStarted = false;
  private shouldBePlaying = false;
  private isMuted = false;
  private listeners: Set<() => void> = new Set();

  constructor() {
    if (typeof window !== 'undefined') {
      this.initAudioElement();

      // Stop playback if leaving the page (e.g., navigating back out of the site or closing tab)
      window.addEventListener('pagehide', () => {
        this.stop();
      });
    }
  }

  private initAudioElement(): HTMLAudioElement {
    if (!this.audio) {
      const audio = new Audio(WEDDING_AUDIO_SRC);
      audio.loop = true;
      audio.preload = 'auto';
      audio.muted = this.isMuted;
      try {
        audio.volume = this.isMuted ? 0 : 0.85;
      } catch {
        // iOS Safari treats HTMLAudioElement.volume as read-only
      }

      audio.addEventListener('play', () => {
        if (this.shouldBePlaying) {
          this.isStarted = true;
          this.notify();
        }
      });

      audio.addEventListener('pause', () => {
        this.notify();
      });

      audio.addEventListener('error', (e) => {
        console.warn('Background audio element error:', e);
      });

      this.audio = audio;
    }
    return this.audio;
  }

  private resetPlaybackPosition(audio: HTMLAudioElement) {
    try {
      if (audio.readyState >= 1) {
        audio.currentTime = 0;
      }
    } catch {
      // Ignore InvalidStateError if metadata is not yet ready
    }
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
   * Starts background music from 00:00 upon direct user interaction ("Tap to open").
   * Maintains existing mute preference and prevents duplicate/overlapping playback.
   */
  start() {
    const audio = this.initAudioElement();

    // If already actively playing in the current open session, do not interrupt or duplicate
    if (this.shouldBePlaying && this.isStarted && !audio.paused) {
      return;
    }

    this.shouldBePlaying = true;
    this.resetPlaybackPosition(audio);

    try {
      audio.muted = this.isMuted;
      try {
        audio.volume = this.isMuted ? 0 : 0.85;
      } catch {
        // iOS Safari volume property is read-only
      }

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // If stop() was triggered before play() resolved, immediately halt & reset to 00:00
            if (!this.shouldBePlaying) {
              audio.pause();
              this.resetPlaybackPosition(audio);
              this.isStarted = false;
              this.notify();
              return;
            }
            this.isStarted = true;
            this.notify();
          })
          .catch((err) => {
            console.warn('Audio playback not allowed or interrupted:', err);
            this.isStarted = false;
            this.notify();
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
   * Toggles mute state without resetting playback position.
   * Preserves mute state when returning to the beginning and reopening.
   */
  toggleMute() {
    this.isMuted = !this.isMuted;

    if (this.audio) {
      this.audio.muted = this.isMuted;
      try {
        this.audio.volume = this.isMuted ? 0 : 0.85;
      } catch {
        // iOS Safari does not allow programmatically modifying volume property, uses muted instead
      }

      // If invitation is active/playing and audio was paused (e.g. autoplay fallback), start/resume on unmute
      if (!this.isMuted && this.shouldBePlaying && this.audio.paused) {
        const playPromise = this.audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              if (!this.shouldBePlaying) {
                this.audio?.pause();
                if (this.audio) this.resetPlaybackPosition(this.audio);
                return;
              }
              this.isStarted = true;
              this.notify();
            })
            .catch((err) => {
              console.warn('Audio resume error on unmute:', err);
            });
        }
      }
    }

    this.notify();
  }

  /**
   * Pauses audio if explicitly needed without resetting position
   */
  pause() {
    if (this.audio && !this.audio.paused) {
      this.audio.pause();
    }
    this.notify();
  }

  /**
   * Immediately pauses audio and resets playback position to 00:00.
   * Intentionally preserves isMuted preference for subsequent reopens.
   */
  stop() {
    this.shouldBePlaying = false;
    this.isStarted = false;
    if (this.audio) {
      this.audio.pause();
      this.resetPlaybackPosition(this.audio);
    }
    this.notify();
  }
}

export const audioManager = new AudioManager();
