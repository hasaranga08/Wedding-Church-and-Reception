import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { audioManager } from '../utils/audioManager';

/**
 * Discreet, elegant mute/unmute button visible on both opening screen & information page.
 * Styled in deep plum purple & champagne gold. Tapping directly mutes/unmutes without restarting.
 */
export const AudioPlayer: React.FC = () => {
  const [audioState, setAudioState] = useState(audioManager.getState());

  useEffect(() => {
    const unsubscribe = audioManager.subscribe(() => {
      setAudioState(audioManager.getState());
    });
    return unsubscribe;
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    // Prevent accidental triggering of envelope opening
    e.stopPropagation();
    audioManager.toggleMute();
  };

  const isMuted = audioState.isMuted;

  return (
    <button
      type="button"
      onClick={handleToggle}
      title={isMuted ? 'Unmute background music' : 'Mute background music'}
      aria-label={isMuted ? 'Unmute background music' : 'Mute background music'}
      className="fixed top-4 right-4 sm:top-5 sm:right-5 z-[70] w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1C0A1B]/90 backdrop-blur-md border border-[#ECC880]/50 shadow-[0_4px_16px_rgba(0,0,0,0.6)] flex items-center justify-center text-[#ECC880] hover:text-[#FFF4D9] hover:border-[#ECC880] active:scale-95 transition-all cursor-pointer group"
    >
      {isMuted ? (
        <VolumeX className="w-4 h-4 text-[#ECC880]/65 group-hover:text-[#FFF4D9] transition-colors" />
      ) : (
        <Volume2 className="w-4 h-4 text-[#ECC880] group-hover:text-[#FFF4D9] transition-colors" />
      )}
    </button>
  );
};
