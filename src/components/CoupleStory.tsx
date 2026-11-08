import React from 'react';
import { weddingData } from '../data/weddingData';
import { WatercolorBotanicalWreath, GoldFlourishDivider } from './FloralDecorations';
import couplePortrait from '../assets/images/wedding_couple_portrait_1793822191231.jpg';

export const CoupleStory: React.FC = () => {
  const { couple } = weddingData;

  return (
    <section id="our-story" className="w-full mx-auto px-2 py-8 sm:py-12 text-center">
      <p className="font-display-classic text-xs tracking-[0.32em] uppercase text-[#E2BE76] font-semibold">
        Our Love Story
      </p>

      <h3 className="font-serif-luxury text-3xl font-light gold-foil-text mt-2 mb-6">
        {couple.brideFirst} &amp; {couple.groomFirst}
      </h3>

      {/* Circular Fine Art Botanical Wreath Frame */}
      <div className="relative flex justify-center items-center my-6">
        <WatercolorBotanicalWreath className="w-56 h-56 sm:w-64 sm:h-64">
          <div className="relative w-44 h-44 sm:w-50 sm:h-50 rounded-full overflow-hidden p-1.5 border border-[#ECC880]/60 shadow-[0_8px_30px_rgba(0,0,0,0.6)] bg-[#130310]">
            <div className="w-full h-full rounded-full overflow-hidden relative shadow-md">
              <img
                src={couplePortrait}
                alt={`${couple.brideFirst} and ${couple.groomFirst}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter saturate-[0.96] contrast-[1.03] transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-full bg-radial from-transparent via-transparent to-[#130310]/50 pointer-events-none" />
            </div>
          </div>
        </WatercolorBotanicalWreath>
      </div>

      <GoldFlourishDivider className="my-6" />

      <p className="font-serif-luxury text-base text-[#FAF6EE] leading-relaxed max-w-md mx-auto italic drop-shadow-xs">
        “{couple.story}”
      </p>

      <p className="font-display-classic text-xs tracking-[0.25em] uppercase text-[#ECC880] mt-5 font-medium">
        Forever &amp; Always
      </p>
    </section>
  );
};
