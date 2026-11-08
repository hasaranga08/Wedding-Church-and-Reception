import React from 'react';
import { weddingData } from '../data/weddingData';
import { GoldFlourishDivider } from './FloralDecorations';
import { Plane, Bus, Car } from 'lucide-react';

export const TransportationSection: React.FC = () => {
  const { transportation } = weddingData;

  return (
    <section id="transportation" className="w-full mx-auto px-2 py-8 sm:py-12">
      <div className="text-center mb-8">
        <p className="font-display-classic text-xs tracking-[0.32em] uppercase text-[#E2BE76] font-semibold">
          Guest Travel
        </p>
        <h3 className="font-serif-luxury text-3xl font-light gold-foil-text mt-1">
          Transportation &amp; Transfers
        </h3>
        <GoldFlourishDivider className="my-4" />
      </div>

      <div className="space-y-6 max-w-sm sm:max-w-md mx-auto">
        {/* Executive Shuttles */}
        <div className="flex gap-4 items-start text-left">
          <div className="p-2.5 rounded-full bg-black/25 border border-[#ECC880]/50 shrink-0 mt-0.5 shadow-md">
            <Bus className="w-4 h-4 text-[#ECC880]" />
          </div>
          <div>
            <h4 className="font-serif-luxury text-lg text-[#FAF6EE] font-medium">Private Guest Shuttles</h4>
            <p className="font-serif-luxury text-sm text-[#FAF6EE]/90 mt-1 leading-relaxed">
              {transportation.shuttleDetails}
            </p>
          </div>
        </div>

        {/* Airport Arrivals */}
        <div className="flex gap-4 items-start text-left">
          <div className="p-2.5 rounded-full bg-black/25 border border-[#ECC880]/50 shrink-0 mt-0.5 shadow-md">
            <Plane className="w-4 h-4 text-[#ECC880]" />
          </div>
          <div>
            <h4 className="font-serif-luxury text-lg text-[#FAF6EE] font-medium">Nearest Airports</h4>
            <p className="font-serif-luxury text-sm text-[#FAF6EE]/90 mt-1 leading-relaxed">
              {transportation.airportArrivals}
            </p>
          </div>
        </div>

        {/* Valet Parking */}
        <div className="flex gap-4 items-start text-left">
          <div className="p-2.5 rounded-full bg-black/25 border border-[#ECC880]/50 shrink-0 mt-0.5 shadow-md">
            <Car className="w-4 h-4 text-[#ECC880]" />
          </div>
          <div>
            <h4 className="font-serif-luxury text-lg text-[#FAF6EE] font-medium">Driving &amp; Valet Parking</h4>
            <p className="font-serif-luxury text-sm text-[#FAF6EE]/90 mt-1 leading-relaxed">
              {transportation.parkingNotes}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
