import React from 'react';
import { weddingData } from '../data/weddingData';
import { WatercolorBotanicalWreath, GoldFlourishDivider } from './FloralDecorations';
import couplePortrait from '../assets/images/wedding_couple_portrait_1793822191231.jpg';

export const CoupleSection: React.FC = () => {
  const { couple } = weddingData;

  return (
    <section id="couple-portrait" className="w-full max-w-xl mx-auto px-4 py-12 sm:py-16 text-center">
      <div className="relative paper-texture paper-card-shadow rounded-2xl p-8 sm:p-12 gold-border border overflow-hidden">
        {/* Soft background watermark */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4E8E3]/40 rounded-full blur-2xl pointer-events-none" />

        <p className="font-serif-luxury text-xs sm:text-sm tracking-[0.3em] uppercase text-[#8C7A68]">
          The Happy Couple
        </p>

        <h2 className="font-serif-luxury text-3xl sm:text-4xl font-light text-[#241F1C] mt-2 mb-6">
          {couple.brideFirst} &amp; {couple.groomFirst}
        </h2>

        {/* Circular / Oval Fine Art Framed Photograph with Botanical Wreath */}
        <div className="relative flex justify-center items-center my-6">
          <WatercolorBotanicalWreath className="w-72 h-72 sm:w-88 sm:h-88">
            <div className="relative w-56 h-56 sm:w-68 sm:h-68 rounded-full overflow-hidden p-1.5 border-2 border-[#D4AF37]/50 shadow-inner bg-[#FAF7F2]">
              <div className="w-full h-full rounded-full overflow-hidden relative shadow-md">
                <img
                  src={couplePortrait}
                  alt={`${couple.brideFirst} and ${couple.groomFirst} in a romantic botanical garden`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter saturate-[0.92] contrast-[1.03] transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                {/* Soft warm vignette on portrait */}
                <div className="absolute inset-0 rounded-full bg-radial from-transparent via-transparent to-[#4A3B2A]/20 pointer-events-none" />
              </div>
            </div>
          </WatercolorBotanicalWreath>
        </div>

        <GoldFlourishDivider className="my-6" />

        {/* Romantic Vow Excerpt */}
        <blockquote className="max-w-md mx-auto">
          <p className="font-serif-luxury text-lg sm:text-xl italic text-[#594B3F] leading-relaxed">
            “Two souls with but a single thought, two hearts that beat as one.”
          </p>
          <cite className="block font-display-classic text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#9C7E54] mt-3 not-italic">
            Forever &amp; Always
          </cite>
        </blockquote>
      </div>
    </section>
  );
};
