import React from 'react';
import { weddingData } from '../data/weddingData';
import { GoldFlourishDivider, FloralCorner } from './FloralDecorations';
import { MapPin, Clock, ExternalLink } from 'lucide-react';

export const WeddingDetails: React.FC = () => {
  const { ceremony, reception, venue } = weddingData;

  return (
    <section id="wedding-details" className="w-full max-w-xl mx-auto px-4 py-8 sm:py-12 space-y-8 sm:space-y-12">
      {/* ============================================================ */}
      {/* 1. CEREMONY CARD */}
      {/* ============================================================ */}
      <div className="relative paper-texture paper-card-shadow rounded-2xl p-7 sm:p-10 border border-[#E2D4C0] text-center overflow-hidden">
        <FloralCorner position="top-right" className="!w-20 !h-20 absolute -top-3 -right-3 opacity-60" />

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE8DD]/70 border border-[#C5A880]/30 text-[10px] tracking-[0.25em] uppercase font-display-classic text-[#8C7A68]">
          <Clock className="w-3 h-3 text-[#C5A880]" />
          <span>The Vows</span>
        </div>

        <h3 className="font-serif-luxury text-2xl sm:text-3xl font-light text-[#241F1C] mt-3">
          Wedding Ceremony
        </h3>

        <p className="font-serif-luxury text-lg italic text-[#9C7E54] mt-1">
          {ceremony.time} · {ceremony.location}
        </p>

        <GoldFlourishDivider className="my-4" />

        <p className="font-serif-luxury text-base text-[#594B3F] leading-relaxed max-w-md mx-auto">
          {ceremony.description}
        </p>

        <div className="mt-4 pt-3 border-t border-[#E8DEC9]/60">
          <p className="text-xs font-serif-luxury text-[#8C7A68] italic">
            Note: {ceremony.notes}
          </p>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. RECEPTION CARD */}
      {/* ============================================================ */}
      <div className="relative paper-texture paper-card-shadow rounded-2xl p-7 sm:p-10 border border-[#E2D4C0] text-center overflow-hidden">
        <FloralCorner position="top-left" className="!w-20 !h-20 absolute -top-3 -left-3 opacity-60" />

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE8DD]/70 border border-[#C5A880]/30 text-[10px] tracking-[0.25em] uppercase font-display-classic text-[#8C7A68]">
          <Clock className="w-3 h-3 text-[#C5A880]" />
          <span>The Celebration</span>
        </div>

        <h3 className="font-serif-luxury text-2xl sm:text-3xl font-light text-[#241F1C] mt-3">
          Evening Reception &amp; Dinner
        </h3>

        <p className="font-serif-luxury text-lg italic text-[#9C7E54] mt-1">
          {reception.time} · {reception.location}
        </p>

        <GoldFlourishDivider className="my-4" />

        <p className="font-serif-luxury text-base text-[#594B3F] leading-relaxed max-w-md mx-auto">
          {reception.description}
        </p>

        <div className="mt-4 pt-3 border-t border-[#E8DEC9]/60">
          <p className="text-xs font-serif-luxury text-[#8C7A68] italic">
            {reception.notes}
          </p>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. VENUE SPOTLIGHT */}
      {/* ============================================================ */}
      <div className="relative paper-texture paper-card-shadow rounded-2xl p-6 sm:p-10 border border-[#E2D4C0] overflow-hidden">
        <div className="text-center mb-6">
          <p className="font-serif-luxury text-xs sm:text-sm tracking-[0.3em] uppercase text-[#8C7A68]">
            The Destination
          </p>
          <h3 className="font-serif-luxury text-3xl font-light text-[#241F1C] mt-1">
            {venue.name}
          </h3>
          <p className="font-serif-luxury text-sm italic text-[#8C7A68] mt-0.5">
            {venue.subheading}
          </p>
        </div>

        {/* Venue Photographic Showcase */}
        <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-[#D9CBB7] shadow-md group">
          <img
            src="/src/assets/images/wedding_estate_venue_1793822205059.jpg"
            alt={`${venue.name} scenic estate gardens`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter saturate-[0.95] group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241C15]/70 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between">
            <div>
              <p className="font-serif-luxury text-lg tracking-wide drop-shadow-sm">
                {venue.city}, {venue.country}
              </p>
              <p className="text-[10px] tracking-widest uppercase opacity-80">
                {venue.coordinates}
              </p>
            </div>
          </div>
        </div>

        <p className="font-serif-luxury text-base text-[#594B3F] leading-relaxed text-center mt-6 max-w-md mx-auto">
          {venue.description}
        </p>

        {/* Address and Map link */}
        <div className="mt-6 pt-5 border-t border-[#E8DEC9]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <MapPin className="w-4 h-4 text-[#C5A880] shrink-0" />
            <p className="text-xs text-[#6B5C4D] font-serif-luxury">
              {venue.address}
            </p>
          </div>

          <a
            href={venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF7F2] border border-[#C5A880]/50 text-xs font-serif-luxury text-[#6E5A44] hover:text-[#241F1C] hover:border-[#C5A880] transition-colors shadow-2xs whitespace-nowrap"
          >
            <span>View on Google Maps</span>
            <ExternalLink className="w-3 h-3 text-[#C5A880]" />
          </a>
        </div>
      </div>
    </section>
  );
};
