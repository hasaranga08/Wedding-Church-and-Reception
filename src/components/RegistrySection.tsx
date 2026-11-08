import React from 'react';
import { weddingData } from '../data/weddingData';
import { GoldFlourishDivider } from './FloralDecorations';
import { Gift, Compass, Wine, Home, Heart } from 'lucide-react';

export const RegistrySection: React.FC = () => {
  const { registry } = weddingData;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Wine':
        return <Wine className="w-5 h-5 text-[#C5A880]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#C5A880]" />;
      default:
        return <Home className="w-5 h-5 text-[#C5A880]" />;
    }
  };

  return (
    <section id="registry" className="w-full mx-auto px-2 py-8 sm:py-12 text-center">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 border border-[#ECC880]/40 text-[10px] tracking-[0.25em] uppercase font-display-classic text-[#E2BE76] mb-3">
        <Gift className="w-3.5 h-3.5 text-[#ECC880]" />
        <span>Wishing Well</span>
      </div>

      <h3 className="font-serif-luxury text-3xl font-light gold-foil-text">
        Wedding Registry
      </h3>

      <GoldFlourishDivider className="my-4" />

      <p className="font-serif-luxury text-base text-[#FAF6EE] leading-relaxed max-w-md mx-auto mb-7 drop-shadow-xs">
        {registry.intro}
      </p>

      <div className="grid grid-cols-1 gap-4 text-left max-w-sm sm:max-w-md mx-auto">
        {registry.items.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border border-[#ECC880]/25 bg-black/20 backdrop-blur-xs flex items-start gap-4 hover:border-[#ECC880]/50 transition-colors"
          >
            <div className="p-2.5 rounded-full bg-black/30 border border-[#ECC880]/40 shrink-0 mt-0.5">
              {getIcon(item.iconName)}
            </div>
            <div className="flex-1">
              <span className="font-display-classic text-[9px] uppercase tracking-[0.2em] text-[#ECC880] font-semibold">
                {item.category}
              </span>
              <h4 className="font-serif-luxury text-lg font-light text-[#FAF6EE] mt-0.5">
                {item.title}
              </h4>
              <p className="font-serif-luxury text-sm text-[#FAF6EE]/85 mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-5 border-t border-[#ECC880]/20 max-w-sm sm:max-w-md mx-auto">
        <div className="inline-flex items-center gap-2 text-sm font-serif-luxury italic text-[#FAF6EE]/90">
          <Heart className="w-3.5 h-3.5 text-[#ECC880]" />
          <span>Thank you for blessing our beginning together</span>
        </div>
      </div>
    </section>
  );
};
