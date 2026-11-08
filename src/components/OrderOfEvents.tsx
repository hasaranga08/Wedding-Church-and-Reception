import React from 'react';
import { weddingData } from '../data/weddingData';
import { GoldFlourishDivider } from './FloralDecorations';

export const OrderOfEvents: React.FC = () => {
  const { schedule } = weddingData;

  return (
    <section id="order-of-events" className="w-full mx-auto px-2 py-8 sm:py-12">
      <div className="text-center mb-8">
        <p className="font-display-classic text-xs tracking-[0.3em] uppercase text-[#E2BE76] font-semibold">
          Celebration Itinerary
        </p>
        <h3 className="font-serif-luxury text-3xl font-light gold-foil-text mt-1">
          Order of Events
        </h3>
        <GoldFlourishDivider className="my-4" />
      </div>

      {/* Vertical Stationery Timeline directly over background */}
      <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-[11px] sm:before:left-[15px] before:top-2 before:bottom-2 before:w-[1px] before:bg-gradient-to-b before:from-[#ECC880]/20 before:via-[#ECC880]/60 before:to-[#ECC880]/20 max-w-sm sm:max-w-md mx-auto">
        {schedule.map((item, idx) => (
          <div key={idx} className="relative group text-left">
            {/* Timeline Floral/Gold Node */}
            <div className="absolute -left-[23px] sm:-left-[27px] top-1.5 w-6 h-6 rounded-full bg-[#130310] border-2 border-[#ECC880] flex items-center justify-center shadow-md">
              <div className="w-2 h-2 rounded-full bg-[#ECC880]" />
            </div>

            {/* Event Content */}
            <div>
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-display-classic text-xs tracking-wider text-[#ECC880] font-semibold">
                  {item.time}
                </span>
                <span className="text-xs text-[#ECC880]/60">·</span>
                <span className="font-serif-luxury text-xs italic text-[#FAF6EE]/80">
                  {item.location}
                </span>
              </div>

              <h4 className="font-serif-luxury text-xl font-light text-[#FAF6EE] mt-0.5">
                {item.title}
              </h4>

              <p className="font-serif-luxury text-sm text-[#FAF6EE]/90 mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
