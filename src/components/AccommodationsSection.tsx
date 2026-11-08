import React from 'react';
import { weddingData } from '../data/weddingData';
import { GoldFlourishDivider } from './FloralDecorations';
import { Hotel, Key } from 'lucide-react';

export const AccommodationsSection: React.FC = () => {
  const { accommodations } = weddingData;

  return (
    <section id="accommodations" className="w-full mx-auto px-2 py-8 sm:py-12">
      <div className="text-center mb-8">
        <p className="font-display-classic text-xs tracking-[0.32em] uppercase text-[#E2BE76] font-semibold">
          Where to Stay
        </p>
        <h3 className="font-serif-luxury text-3xl font-light gold-foil-text mt-1">
          Accommodations &amp; Room Blocks
        </h3>
        <GoldFlourishDivider className="my-4" />
      </div>

      <div className="space-y-6 max-w-sm sm:max-w-md mx-auto">
        {accommodations.map((hotel, idx) => (
          <div
            key={idx}
            className="pb-6 border-b border-[#ECC880]/25 last:border-b-0 space-y-2 text-left"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h4 className="font-serif-luxury text-xl font-light text-[#FAF6EE]">
                  {hotel.name}
                </h4>
                <p className="font-display-classic text-[10px] uppercase tracking-wider text-[#ECC880] mt-0.5">
                  {hotel.type} · {hotel.distance}
                </p>
              </div>
              <div className="p-2 rounded-full bg-black/25 border border-[#ECC880]/40 shrink-0">
                <Hotel className="w-4 h-4 text-[#ECC880]" />
              </div>
            </div>

            <p className="font-serif-luxury text-sm text-[#FAF6EE]/90 leading-relaxed">
              {hotel.description}
            </p>

            {hotel.bookingCode && (
              <div className="pt-2 flex items-center justify-between text-xs">
                <span className="font-serif-luxury text-[#FAF6EE]/80 flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5 text-[#ECC880]" />
                  <span>Wedding Courtesy Code:</span>
                </span>
                <span className="font-mono font-medium tracking-wider text-[#ECC880] bg-black/30 px-2.5 py-0.5 rounded border border-[#ECC880]/40">
                  {hotel.bookingCode}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
