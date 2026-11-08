import React from 'react';
import { weddingData } from '../data/weddingData';
import { GoldFlourishDivider } from './FloralDecorations';
import { Clock, Wine, Heart } from 'lucide-react';

export const CeremonyReception: React.FC = () => {
  const { ceremony, reception } = weddingData;

  return (
    <section id="ceremony-reception" className="w-full mx-auto px-2 py-8 sm:py-12 space-y-10 sm:space-y-14 text-center">
      {/* 1. CEREMONY DETAILS */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 border border-[#ECC880]/40 text-[10px] tracking-[0.25em] uppercase font-display-classic text-[#E2BE76]">
          <Heart className="w-3 h-3 text-[#ECC880]" />
          <span>The Marriage Vows</span>
        </div>

        <h3 className="font-serif-luxury text-3xl font-light gold-foil-text mt-2">
          Wedding Ceremony
        </h3>

        <p className="font-serif-luxury text-lg italic text-[#ECC880]">
          {ceremony.time} · {ceremony.location}
        </p>

        <GoldFlourishDivider className="my-3" />

        <p className="font-serif-luxury text-base text-[#FAF6EE] leading-relaxed max-w-md mx-auto drop-shadow-xs">
          {ceremony.description}
        </p>

        <p className="text-xs font-serif-luxury text-[#E2BE76] italic pt-1">
          Note: {ceremony.notes}
        </p>
      </div>

      <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-[#ECC880]/50 to-transparent" />

      {/* 2. RECEPTION DETAILS */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 border border-[#ECC880]/40 text-[10px] tracking-[0.25em] uppercase font-display-classic text-[#E2BE76]">
          <Wine className="w-3 h-3 text-[#ECC880]" />
          <span>The Celebration</span>
        </div>

        <h3 className="font-serif-luxury text-3xl font-light gold-foil-text mt-2">
          Evening Reception &amp; Banquet
        </h3>

        <p className="font-serif-luxury text-lg italic text-[#ECC880]">
          {reception.time} · {reception.location}
        </p>

        <GoldFlourishDivider className="my-3" />

        <p className="font-serif-luxury text-base text-[#FAF6EE] leading-relaxed max-w-md mx-auto drop-shadow-xs">
          {reception.description}
        </p>

        <p className="text-xs font-serif-luxury text-[#E2BE76] italic pt-1">
          {reception.notes}
        </p>
      </div>
    </section>
  );
};
