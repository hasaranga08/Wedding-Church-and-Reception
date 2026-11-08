import React from 'react';
import { weddingData } from '../data/weddingData';
import { GoldFlourishDivider } from './FloralDecorations';
import { Sparkles } from 'lucide-react';

export const DressCode: React.FC = () => {
  const { dressCode } = weddingData;

  return (
    <section id="dress-code" className="w-full mx-auto px-2 py-8 sm:py-12 text-center">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 border border-[#ECC880]/40 text-[10px] tracking-[0.25em] uppercase font-display-classic text-[#E2BE76]">
        <Sparkles className="w-3 h-3 text-[#ECC880]" />
        <span>Attire Guide</span>
      </div>

      <h3 className="font-serif-luxury text-3xl font-light gold-foil-text mt-3">
        {dressCode.title}
      </h3>

      <p className="font-serif-luxury text-base italic text-[#ECC880] mt-1">
        {dressCode.subtitle}
      </p>

      <GoldFlourishDivider className="my-4" />

      <p className="font-serif-luxury text-base text-[#FAF6EE] leading-relaxed max-w-md mx-auto mb-7 drop-shadow-xs">
        {dressCode.description}
      </p>

      {/* Suggested Color Palette Swatches */}
      <div className="pt-5 border-t border-[#ECC880]/25 max-w-md mx-auto">
        <p className="font-display-classic text-xs tracking-[0.2em] uppercase text-[#E2BE76] mb-4 font-semibold">
          Suggested Garden Palette
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {dressCode.colors.map((color, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1.5">
              <div
                className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.5)] transition-transform hover:scale-110 ${
                  color.border ? 'border-2 border-[#ECC880]' : 'border border-white/20'
                }`}
                style={{ backgroundColor: color.hex }}
              />
              <span className="font-serif-luxury text-xs text-[#FAF6EE]">
                {color.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
