import React from 'react';
import { weddingData } from '../data/weddingData';
import { FloralCorner, GoldFlourishDivider } from './FloralDecorations';

interface MainInvitationCardProps {
  isMiniPreview?: boolean;
}

export const MainInvitationCard: React.FC<MainInvitationCardProps> = ({ isMiniPreview = false }) => {
  const { couple, parentsNote, invitationMessage, date, venue } = weddingData;

  if (isMiniPreview) {
    return (
      <div className="w-full h-full p-4 sm:p-6 flex flex-col items-center justify-between text-center paper-texture rounded-lg border border-[#E2D4C0] shadow-sm select-none relative overflow-hidden">
        {/* Subtle floral corners */}
        <FloralCorner position="top-left" className="!w-16 !h-16 absolute -top-2 -left-2 opacity-50" />
        <FloralCorner position="top-right" className="!w-16 !h-16 absolute -top-2 -right-2 opacity-50" />

        {/* Inner frame */}
        <div className="absolute inset-2 border border-[#C5A880]/30 pointer-events-none rounded" />

        <div className="pt-2">
          <p className="font-serif-luxury text-[10px] tracking-[0.25em] text-[#8C7A68] uppercase">
            Wedding Invitation
          </p>
          <p className="font-calligraphy text-2xl text-[#6D543B] mt-1">{couple.initials}</p>
        </div>

        <div>
          <h2 className="font-serif-luxury text-lg font-light text-[#2D2723] leading-tight">
            {couple.brideFirst} &amp; {couple.groomFirst}
          </h2>
          <p className="text-[9px] tracking-wider text-[#8C7A68] mt-1 font-serif-luxury italic">
            {date.displayDate}
          </p>
          <p className="text-[8px] tracking-widest text-[#9C7E54] uppercase font-display-classic mt-0.5">
            {venue.city}
          </p>
        </div>

        <div className="pb-1 text-[8px] text-[#A69380] uppercase tracking-widest">
          Scroll to read details ↓
        </div>
      </div>
    );
  }

  return (
    <section id="invitation-card" className="w-full max-w-xl mx-auto px-4 py-8 sm:py-12">
      <div className="relative paper-texture paper-card-shadow gold-border-double rounded-xl p-8 sm:p-12 text-center overflow-hidden">
        {/* Four Watercolor Floral Corner Accents */}
        <FloralCorner position="top-left" className="absolute top-0 left-0" />
        <FloralCorner position="top-right" className="absolute top-0 right-0" />
        <FloralCorner position="bottom-left" className="absolute bottom-0 left-0" />
        <FloralCorner position="bottom-right" className="absolute bottom-0 right-0" />

        {/* Monogram Header */}
        <div className="relative z-10 pt-2 sm:pt-4">
          <div className="inline-block p-3 rounded-full border border-[#C5A880]/40 mb-3 bg-[#FAF7F2]/60">
            <span className="font-serif-luxury text-xl sm:text-2xl font-light tracking-widest text-[#8C6F45]">
              {couple.initials}
            </span>
          </div>

          <p className="font-serif-luxury text-xs sm:text-sm tracking-[0.28em] uppercase text-[#7D6B58] font-light">
            {parentsNote}
          </p>
        </div>

        <GoldFlourishDivider className="my-5 sm:my-6" />

        {/* Bride & Groom Names */}
        <div className="relative z-10 space-y-2 my-4 sm:my-6">
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[#241F1C] tracking-wide">
            {couple.brideFull}
          </h1>

          <div className="flex items-center justify-center gap-3">
            <span className="h-[0.5px] w-10 bg-[#C5A880]/50" />
            <span className="font-script-romantic text-3xl sm:text-4xl text-[#9C7E54] italic">
              and
            </span>
            <span className="h-[0.5px] w-10 bg-[#C5A880]/50" />
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[#241F1C] tracking-wide">
            {couple.groomFull}
          </h1>
        </div>

        {/* Invitation Message */}
        <div className="relative z-10 max-w-md mx-auto my-6">
          <p className="font-serif-luxury text-base sm:text-lg italic text-[#594B3F] leading-relaxed">
            {invitationMessage}
          </p>
        </div>

        <GoldFlourishDivider className="my-5 sm:my-6" />

        {/* Date & Time */}
        <div className="relative z-10 space-y-2">
          <p className="font-display-classic text-sm sm:text-base tracking-[0.2em] uppercase text-[#3A322C] font-medium">
            {date.displayDate}
          </p>
          <p className="font-serif-luxury text-sm sm:text-base italic text-[#736354]">
            {date.displayTime}
          </p>
        </div>

        {/* Venue & Location */}
        <div className="relative z-10 mt-6 pt-5 border-t border-[#C5A880]/30 space-y-1">
          <p className="font-serif-luxury text-xl sm:text-2xl text-[#241F1C] font-normal tracking-wide">
            {venue.name}
          </p>
          <p className="font-serif-luxury text-sm sm:text-base italic text-[#736354]">
            {venue.subheading}
          </p>
          <p className="font-display-classic text-xs tracking-[0.2em] text-[#9C7E54] uppercase pt-1">
            {venue.city} · {venue.country}
          </p>
        </div>

        {/* Bottom Reception Note */}
        <div className="relative z-10 mt-8">
          <p className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#8C7A68] font-serif-luxury">
            Reception &amp; Festivities to Follow
          </p>
        </div>
      </div>
    </section>
  );
};
