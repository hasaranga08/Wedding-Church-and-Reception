import React, { useEffect, useState } from 'react';
import { Mail, ArrowUp } from 'lucide-react';

interface FloatingControlsProps {
  onReplayEnvelope?: () => void;
  scrollContainerRef?: React.RefObject<HTMLDivElement | null>;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({
  onReplayEnvelope,
  scrollContainerRef,
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const el = scrollContainerRef?.current;
    if (!el) {
      const handleWindowScroll = () => {
        setShowScrollTop(window.scrollY > 350);
      };
      window.addEventListener('scroll', handleWindowScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleWindowScroll);
    }

    const handleContainerScroll = () => {
      setShowScrollTop(el.scrollTop > 350);
    };
    el.addEventListener('scroll', handleContainerScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleContainerScroll);
  }, [scrollContainerRef]);

  const scrollToTop = () => {
    if (scrollContainerRef?.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="fixed bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2">
      {onReplayEnvelope && (
        <button
          onClick={onReplayEnvelope}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#1C0A1B]/90 backdrop-blur-md border border-[#ECC880]/50 shadow-lg text-[#ECC880] hover:text-[#FFF4D9] hover:border-[#ECC880] transition-all active:scale-95 text-xs font-serif-luxury tracking-wide cursor-pointer"
          title="Replay Envelope Video"
          aria-label="Replay Envelope Video"
        >
          <Mail className="w-3.5 h-3.5 text-[#ECC880]" />
          <span className="hidden sm:inline italic">Replay Envelope</span>
        </button>
      )}

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center p-2.5 rounded-full bg-[#1C0A1B]/90 backdrop-blur-md border border-[#ECC880]/50 shadow-lg text-[#ECC880] hover:text-[#FFF4D9] hover:border-[#ECC880] transition-all active:scale-95 text-xs font-serif-luxury cursor-pointer"
          title="Scroll to Top"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-3.5 h-3.5 text-[#ECC880]" />
        </button>
      )}
    </div>
  );
};
