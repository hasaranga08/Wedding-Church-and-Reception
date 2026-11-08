import React from 'react';
import { GoldFlourishDivider } from './FloralDecorations';

/**
 * Section 1 – Wedding introduction
 * - Display the couple’s names: Roshini & Chamod
 * - Include a beautiful photograph of the couple (centred, without a large rectangular card or coloured container)
 * - Elegant gold typography for names
 * - Short, romantic introductory wedding invitation message
 */
export const WeddingIntroduction: React.FC = () => {
  return (
    <section
      id="wedding-introduction"
      className="w-full mx-auto px-2 pt-4 sm:pt-6 pb-12 sm:pb-16 text-center select-none"
    >
      {/* Editorial Kicker */}
      <div className="space-y-1 mb-4">
        <p className="font-display-classic text-[11px] tracking-[0.32em] uppercase text-[#E2BE76] font-semibold">
          THE WEDDING CELEBRATION OF
        </p>
      </div>

      {/* Couple's Names: Exactly on ONE horizontal line: "Roshini & Hasaranga" */}
      <div className="my-4 sm:my-5 flex items-center justify-center px-1">
        <h1 className="font-serif-luxury text-[25px] min-[360px]:text-[27px] sm:text-3xl font-light gold-foil-text tracking-wide drop-shadow-md whitespace-nowrap text-center">
          Roshini &amp; Hasaranga
        </h1>
      </div>

      {/* Couple Photograph: Centred & Elegantly Presented without a large card container */}
      <div className="my-6 sm:my-8 max-w-[240px] sm:max-w-[270px] mx-auto">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#ECC880]/60 shadow-[0_12px_40px_rgba(0,0,0,0.6)] group">
          <img
            src="/src/assets/images/wedding_couple_portrait_1793822191231.jpg"
            alt="Roshini & Hasaranga"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter saturate-[0.96] contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          {/* Subtle filmic vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#130310]/75 via-transparent to-transparent pointer-events-none" />

          {/* Discreet Inset Caption */}
          <div className="absolute bottom-3 inset-x-2 text-center text-white pointer-events-none">
            <p className="font-serif-luxury text-sm tracking-wider drop-shadow-sm italic text-[#FFF4D9]">
              Roshini &amp; Hasaranga
            </p>
          </div>
        </div>
      </div>

      {/* Short, Romantic Introductory Wedding Invitation Message */}
      <div className="max-w-sm sm:max-w-md mx-auto my-5 sm:my-6 px-2">
        <p className="font-serif-luxury text-base italic text-[#FAF6EE] leading-relaxed drop-shadow-xs">
          “Together with our families, we joyfully invite you to celebrate the beginning of our forever as we unite in holy matrimony.”
        </p>
      </div>

      <GoldFlourishDivider className="my-6 opacity-80" />
    </section>
  );
};
