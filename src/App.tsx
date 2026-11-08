import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EnvelopeVideoExperience } from './components/EnvelopeVideoExperience';
import { WeddingIntroduction } from './components/WeddingIntroduction';
import { SaveTheDateSection } from './components/SaveTheDateSection';
import { ChurchCeremonySection } from './components/ChurchCeremonySection';
import { ReceptionInvitationSection } from './components/ReceptionInvitationSection';
import { RsvpSection } from './components/RsvpSection';
import { ThankYouSection } from './components/ThankYouSection';
import { AudioPlayer } from './components/AudioPlayer';
import { FloatingControls } from './components/FloatingControls';
import { getAssetUrl } from './utils/assets';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const stationeryContainerRef = useRef<HTMLDivElement>(null);
  const bgImgRef = useRef<HTMLImageElement>(null);

  // Exact scroll bounds ensuring the top gold R|H logo and wreath area remains permanently clear
  const [scrollBounds, setScrollBounds] = useState({
    top: 200,
    maxWidth: 380,
  });

  // Calculate the precise rendered dimensions of the fixed portrait stationery artwork
  const updateBounds = useCallback(() => {
    const img = bgImgRef.current;
    if (!img) return;

    const rect = img.getBoundingClientRect();
    const naturalAspect = 941 / 1672;
    const containerAspect = rect.width / (rect.height || 1);

    let imgTop = rect.top;
    let imgHeight = rect.height;
    let imgWidth = rect.width;

    if (containerAspect > naturalAspect) {
      // Screen is wider than 9:16 (desktop / wide tablets)
      imgHeight = rect.height;
      imgWidth = rect.height * naturalAspect;
      imgTop = rect.top;
    } else {
      // Screen is narrower than 9:16 (mobile portrait phones)
      imgWidth = rect.width;
      imgHeight = rect.width / naturalAspect;
      imgTop = rect.top + (rect.height - imgHeight) / 2;
    }

    // In the final 941x1672 artwork (AEA657B5-41A8-44A6-89F1-20751E733C74_80b10421.png):
    // - Top gold R|H wreath ends at y = 260 (15.55% of image height).
    // - Starting at 20.8% provides dedicated, visually balanced clearance (~88px)
    //   directly beneath the bottom of the wreath within the open purple area.
    const topClearance = Math.round(imgTop + imgHeight * 0.208);

    // Inner clear safe width between the decorative side frame & corner ornaments:
    // Ensures text, photographs, countdown, and forms have comfortable room in the central safe area.
    const contentWidth = Math.min(Math.round(imgWidth * 0.85), 450);

    setScrollBounds({
      top: topClearance,
      maxWidth: contentWidth,
    });
  }, []);

  useEffect(() => {
    updateBounds();
    window.addEventListener('resize', updateBounds);
    window.addEventListener('orientationchange', updateBounds);
    return () => {
      window.removeEventListener('resize', updateBounds);
      window.removeEventListener('orientationchange', updateBounds);
    };
  }, [updateBounds]);

  const handleEnvelopeComplete = () => {
    setIsEnvelopeOpen(true);
    updateBounds();

    if (stationeryContainerRef.current) {
      stationeryContainerRef.current.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }

    // Trigger entrance animation for Section 1 (Wedding Introduction)
    setTimeout(() => {
      if (stationeryContainerRef.current) {
        const intro = stationeryContainerRef.current.querySelector('#wedding-introduction');
        if (intro) {
          gsap.fromTo(
            intro,
            { opacity: 0, y: 16, scale: 0.99 },
            { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: 'power2.out' }
          );
        }
      }
      ScrollTrigger.refresh();
    }, 60);
  };

  const handleReplayEnvelope = () => {
    setIsEnvelopeOpen(false);
    if (stationeryContainerRef.current) {
      stationeryContainerRef.current.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  };

  // Scroll animations: elements smoothly fade-and-rise as user scrolls down inside container
  useEffect(() => {
    if (!isEnvelopeOpen) return;

    const el = stationeryContainerRef.current;
    if (!el) return;

    const timer = setTimeout(() => {
      const sections = el.querySelectorAll('section:not(#wedding-introduction), footer');
      const ctx = gsap.context(() => {
        sections.forEach((sec) => {
          gsap.fromTo(
            sec,
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: sec,
                scroller: el,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true,
              },
            }
          );
        });
      }, el);

      ScrollTrigger.refresh();

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, [isEnvelopeOpen]);

  return (
    <div className="min-h-screen bg-[#130310] text-[#FAF6EE] selection:bg-[#ECC880]/30 selection:text-[#FFF4D9] relative overflow-x-hidden font-sans">
      {/* ============================================================ */}
      {/* STAGE 1 & 2: ACTUAL ENVELOPE PHOTOGRAPH & VIDEO EXPERIENCE */}
      {/* ============================================================ */}
      <EnvelopeVideoExperience
        isOpen={isEnvelopeOpen}
        onComplete={handleEnvelopeComplete}
      />

      {/* ============================================================ */}
      {/* FIXED STATIONARY BACKGROUND LAYER (Remains 100% still while scrolling) */}
      {/* Uses the exact newly uploaded final wedding invitation artwork */}
      {/* ============================================================ */}
      <div
        className={`fixed inset-0 z-0 pointer-events-none bg-[#130310] flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${
          isEnvelopeOpen ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        <div className="relative w-full h-[100dvh] max-w-[540px] md:max-w-[620px] flex items-center justify-center">
          <img
            ref={bgImgRef}
            src={getAssetUrl('assets/aistudio/AEA657B5-41A8-44A6-89F1-20751E733C74_80b10421.png')}
            alt=""
            className="w-full h-full object-contain select-none"
            onLoad={updateBounds}
          />
        </div>
      </div>

      {/* ============================================================ */}
      {/* STAGE 3: MAIN WEDDING INFORMATION CONTENT */}
      {/* Completely seamless boundary: NO overlays, lines, dividers, or shadows */}
      {/* Starts strictly below the gold R|H wreath, leaving the logo clear */}
      {/* Content disappears cleanly before reaching the logo upon upward scroll */}
      {/* ============================================================ */}
      <main
        ref={stationeryContainerRef}
        style={{
          top: `${scrollBounds.top}px`,
          bottom: 0,
        }}
        className={`fixed inset-x-0 z-20 overflow-y-auto overflow-x-hidden transition-opacity duration-700 stationery-scroller ${
          isEnvelopeOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          style={{ maxWidth: `${scrollBounds.maxWidth}px` }}
          className="w-full mx-auto px-2.5 sm:px-4 pt-2 pb-[32vh] sm:pb-[36vh] text-center"
        >
          {/* SECTION 1 – Wedding introduction */}
          <WeddingIntroduction />

          {/* SECTION 2 – Save the Date */}
          <SaveTheDateSection />

          {/* SECTION 3 – Church Ceremony */}
          <ChurchCeremonySection />

          {/* SECTION 4 – Reception Invitation */}
          <ReceptionInvitationSection />

          {/* SECTION 5 – RSVP */}
          <RsvpSection />

          {/* SECTION 6 – Thank You */}
          <ThankYouSection />
        </div>
      </main>

      {/* Floating Music Control (starts muted, user taps to play) */}
      <AudioPlayer />

      {/* Floating Replay / Scroll-Top Controls (available once envelope is open) */}
      {isEnvelopeOpen && (
        <FloatingControls
          onReplayEnvelope={handleReplayEnvelope}
          scrollContainerRef={stationeryContainerRef}
        />
      )}
    </div>
  );
}
