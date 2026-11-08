import React from 'react';
import { weddingData } from '../data/weddingData';
import { GoldFlourishDivider } from './FloralDecorations';
import couplePortrait from '../assets/images/wedding_couple_portrait_1793822191231.jpg';

export const MainWeddingCover: React.FC = () => {
  const { couple, date, venue, coverMessage } = weddingData;

  return (
    <section
      id="main-wedding-cover"
      className="w-full mx-auto px-2 pt-6 sm:pt-8 pb-10 sm:pb-14 text-center select-none"
    >
      {/* Celebration Header - flows naturally below the top gold wreath on the background */}
      <div className="relative z-10 space-y-1 sm:space-y-2">
        <p className="font-display-classic text-[11px] tracking-[0.3em] uppercase text-[#E2BE76] font-semibold">
          THE WEDDING CELEBRATION OF
        </p>
      </div>

      {/* Bride & Groom Full Names with Gold Foil Calligraphy */}
      <div className="relative z-10 my-5 sm:my-7 space-y-1 sm:space-y-2">
        <h1 className="font-serif-luxury text-3xl font-light gold-foil-text tracking-wide drop-shadow-md">
          {couple.brideFull}
        </h1>

        <div className="flex items-center justify-center gap-3 py-1">
          <span className="h-[0.5px] w-10 sm:w-14 bg-gradient-to-r from-transparent to-[#ECC880]" />
          <span className="font-script-romantic text-2xl text-[#ECC880] italic">
            and
          </span>
          <span className="h-[0.5px] w-10 sm:w-14 bg-gradient-to-l from-transparent to-[#ECC880]" />
        </div>

        <h1 className="font-serif-luxury text-3xl font-light gold-foil-text tracking-wide drop-shadow-md">
          {couple.groomFull}
        </h1>
      </div>

      {/* Couple Photograph with Elegant Champagne Gold Hairline Border */}
      <div className="relative z-10 my-6 sm:my-8 max-w-[240px] sm:max-w-[270px] mx-auto">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#ECC880]/60 shadow-[0_12px_40px_rgba(0,0,0,0.65)] group">
          <img
            src={couplePortrait}
            alt={`${couple.brideFirst} and ${couple.groomFirst}`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter saturate-[0.96] contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          {/* Filmic vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#130310]/85 via-transparent to-transparent pointer-events-none" />

          {/* Inset Photo Caption */}
          <div className="absolute bottom-3.5 inset-x-3 text-center text-white">
            <p className="font-serif-luxury text-base tracking-wider drop-shadow-sm italic text-[#FFF4D9]">
              {couple.brideFirst} &amp; {couple.groomFirst}
            </p>
            <p className="font-display-classic text-[9px] tracking-[0.25em] uppercase text-[#ECC880]">
              {venue.city}, {venue.country}
            </p>
          </div>
        </div>
      </div>

      {/* Refined Wedding Invitation Message */}
      <div className="relative z-10 max-w-sm sm:max-w-md mx-auto my-6 sm:my-8 px-2">
        <p className="font-serif-luxury text-base italic text-[#FAF6EE] leading-relaxed drop-shadow-xs">
          “{coverMessage}”
        </p>
      </div>

      <GoldFlourishDivider className="my-7" />

      {/* Wedding Date & Venue Location */}
      <div className="relative z-10 space-y-1.5">
        <p className="font-display-classic text-sm tracking-[0.25em] uppercase text-[#FAF6EE] font-semibold drop-shadow-xs">
          {date.displayDate}
        </p>
        <p className="font-serif-luxury text-base italic text-[#ECC880]">
          {date.displayTime}
        </p>
        <p className="font-serif-luxury text-lg text-[#FAF6EE] font-normal pt-2">
          {venue.name}
        </p>
        <p className="font-display-classic text-xs tracking-[0.22em] text-[#ECC880] uppercase">
          {venue.city} · {venue.country}
        </p>
      </div>
    </section>
  );
};
