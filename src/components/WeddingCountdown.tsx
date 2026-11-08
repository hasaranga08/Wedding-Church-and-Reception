import React, { useEffect, useState } from 'react';
import { weddingData } from '../data/weddingData';
import { GoldFlourishDivider } from './FloralDecorations';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const WeddingCountdown: React.FC = () => {
  const { date } = weddingData;

  const calculateTimeLeft = (): TimeLeft => {
    const diff = date.targetTimestamp - Date.now();
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="w-full mx-auto px-2 py-8 sm:py-12 text-center">
      <p className="font-display-classic text-xs tracking-[0.3em] uppercase text-[#E2BE76] font-semibold">
        Counting Down The Moments
      </p>
      <h3 className="font-serif-luxury text-2xl font-light text-[#FAF6EE] mt-1 mb-4 drop-shadow-xs">
        Until We Say “I Do”
      </h3>

      <GoldFlourishDivider className="my-4" />

      {/* 4-Item Grid of Luxury Gold Serif Numbers directly on stationery */}
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5 my-5 max-w-xs sm:max-w-sm mx-auto">
        {timeUnits.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center py-3 px-1.5 sm:py-4 rounded-xl border border-[#ECC880]/35 bg-black/25 backdrop-blur-xs shadow-md"
          >
            <span className="font-serif-luxury text-2xl font-normal gold-foil-text tabular-nums tracking-tight">
              {String(item.value).padStart(2, '0')}
            </span>
            <span className="font-display-classic text-[9px] uppercase tracking-[0.2em] text-[#E2BE76] mt-1 font-medium">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <p className="font-serif-luxury text-base italic text-[#FAF6EE]/90">
        {date.displayDate} · {date.displayTime}
      </p>
    </section>
  );
};
