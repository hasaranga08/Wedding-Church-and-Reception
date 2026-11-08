import React from 'react';
import { weddingData } from '../data/weddingData';
import { GoldFlourishDivider } from './FloralDecorations';
import { MapPin, ExternalLink, Compass } from 'lucide-react';
import weddingEstateVenue from '../assets/images/wedding_estate_venue_1793822205059.jpg';

export const VenueSection: React.FC = () => {
  const { venue } = weddingData;

  return (
    <section id="venue" className="w-full mx-auto px-2 py-8 sm:py-12 text-center">
      <div className="mb-6">
        <p className="font-display-classic text-xs tracking-[0.32em] uppercase text-[#E2BE76] font-semibold">
          The Setting
        </p>
        <h3 className="font-serif-luxury text-3xl font-light gold-foil-text mt-1">
          {venue.name}
        </h3>
        <p className="font-serif-luxury text-base italic text-[#FAF6EE]/90 mt-1">
          {venue.subheading}
        </p>
        <GoldFlourishDivider className="my-4" />
      </div>

      {/* Venue Photographic Showcase */}
      <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-[#ECC880]/50 shadow-[0_12px_40px_rgba(0,0,0,0.65)] group my-6">
        <img
          src={weddingEstateVenue}
          alt={`${venue.name} scenic estate gardens`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter saturate-[0.96] group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#130310]/85 via-transparent to-transparent pointer-events-none" />

        <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between">
          <div className="text-left">
            <p className="font-serif-luxury text-lg tracking-wide drop-shadow-sm text-[#FFF4D9]">
              {venue.city}, {venue.country}
            </p>
            <div className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-[#ECC880]">
              <Compass className="w-3 h-3 text-[#ECC880]" />
              <span>{venue.coordinates}</span>
            </div>
          </div>
        </div>
      </div>

      <p className="font-serif-luxury text-base text-[#FAF6EE] leading-relaxed max-w-md mx-auto drop-shadow-xs">
        {venue.description}
      </p>

      {/* Address and Map link */}
      <div className="mt-8 pt-5 border-t border-[#ECC880]/25 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <MapPin className="w-4 h-4 text-[#ECC880] shrink-0" />
          <p className="text-sm text-[#FAF6EE] font-serif-luxury">
            {venue.address}
          </p>
        </div>

        <a
          href={venue.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 border border-[#ECC880]/50 text-xs font-serif-luxury text-[#ECC880] hover:text-[#FFF4D9] hover:border-[#ECC880] transition-colors shadow-sm whitespace-nowrap cursor-pointer"
        >
          <span>View on Google Maps</span>
          <ExternalLink className="w-3 h-3 text-[#ECC880]" />
        </a>
      </div>
    </section>
  );
};
