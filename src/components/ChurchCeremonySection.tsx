import React from 'react';
import { MapPin, Clock, Calendar as CalendarIcon, ExternalLink } from 'lucide-react';
import { GoldFlourishDivider } from './FloralDecorations';

/**
 * Section 3 – Church Ceremony
 * - Title: Church Ceremony
 * - Venue: Our Lady of Good Voyage Church – Duwa
 * - Authentic architectural landscape photograph with subtle gold borders and softly rounded corners
 * - Date: 28th December 2026
 * - Time: 8:00 AM
 * - Subtle gold location icon & button labelled "VIEW CHURCH LOCATION"
 * - Opens verified Google Maps link for the exact church
 */
export const ChurchCeremonySection: React.FC = () => {
  const churchMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Our+Lady+of+Good+Voyage+Church+Duwa+Negombo+Sri+Lanka';

  return (
    <section
      id="church-ceremony"
      className="w-full mx-auto px-2 py-10 sm:py-14 text-center select-none"
    >
      {/* Category Header */}
      <p className="font-display-classic text-xs tracking-[0.32em] uppercase text-[#E2BE76] font-semibold">
        SACRED SOLEMNISATION
      </p>

      {/* Main Section Heading */}
      <h2 className="font-serif-luxury text-3xl font-light gold-foil-text tracking-wide mt-2 drop-shadow-md">
        Church Ceremony
      </h2>

      {/* Church Venue Name */}
      <div className="my-4 sm:my-5 space-y-1">
        <h3 className="font-serif-luxury text-2xl font-normal text-[#FAF6EE] tracking-wide">
          Our Lady of Good Voyage Church – Duwa
        </h3>
        <p className="font-serif-luxury text-sm italic text-[#ECC880]/90">
          Duwa Island, Negombo, Sri Lanka
        </p>
      </div>

      {/* Church Architectural Photograph: Consistent Landscape, Subtle Gold Border & Soft Rounded Corners */}
      <div className="my-6 max-w-[310px] sm:max-w-[360px] mx-auto">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#ECC880]/60 shadow-[0_10px_30px_rgba(0,0,0,0.55)] group">
          <img
            src="/src/assets/images/duwa_church_ceremony_1794131670026.jpg"
            alt="Our Lady of Good Voyage Church, Duwa, Negombo"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-[1.01] group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#130310]/60 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Date & Time Lockup */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 my-4 text-[#FAF6EE]/90 font-serif-luxury text-base">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-4 h-4 text-[#ECC880]" />
          <span>Date: 28th December 2026</span>
        </div>
        <span className="hidden sm:inline text-[#ECC880]/60">·</span>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#ECC880]" />
          <span>Time: 8:00 AM</span>
        </div>
      </div>

      {/* Optional reverent ceremony note */}
      <p className="max-w-sm sm:max-w-md mx-auto my-3 text-xs sm:text-sm font-serif-luxury italic text-[#FAF6EE]/75 leading-relaxed">
        Guests are kindly requested to take their seats inside the church by 7:45 AM.
      </p>

      {/* View Church Location Button */}
      <div className="mt-6">
        <a
          href={churchMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-[#ECC880]/70 bg-[#1C0A1B]/80 text-[#ECC880] hover:text-[#FFF4D9] hover:border-[#ECC880] hover:bg-[#ECC880]/15 active:scale-95 transition-all text-xs font-serif-luxury tracking-widest uppercase shadow-md cursor-pointer"
        >
          <MapPin className="w-3.5 h-3.5 text-[#ECC880]" />
          <span>VIEW CHURCH LOCATION</span>
          <ExternalLink className="w-3 h-3 text-[#ECC880]/70 ml-0.5" />
        </a>
      </div>

      <GoldFlourishDivider className="my-8 opacity-75" />
    </section>
  );
};
