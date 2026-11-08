import React, { useState, useEffect } from 'react';
import { Calendar, Download, ExternalLink, Check } from 'lucide-react';
import { downloadWeddingIcsFile, getGoogleCalendarUrl } from '../utils/calendarGenerator';
import { GoldFlourishDivider } from './FloralDecorations';

/**
 * Section 2 – Save the Date
 * - Prominently displays: 28th of December 2026
 * - Live wedding countdown (Days, Hours, Minutes, Seconds) targeting 28 Dec 2026 00:00 Asia/Colombo
 * - Centrally aligned without a large card or container
 * - SAVE THE DATE button generating downloadable .ics calendar file
 * - Direct Google Calendar link
 */
const TARGET_TIME = new Date('2026-12-28T00:00:00+05:30').getTime();

export const SaveTheDateSection: React.FC = () => {
  const [downloaded, setDownloaded] = useState(false);

  const calculateTimeLeft = () => {
    const diff = TARGET_TIME - Date.now();
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      isPast: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSaveTheDate = () => {
    downloadWeddingIcsFile();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 5000);
  };

  const googleCalUrl = getGoogleCalendarUrl();

  return (
    <section
      id="save-the-date"
      className="w-full mx-auto px-2 py-10 sm:py-14 text-center select-none"
    >
      {/* Subtitle Header */}
      <p className="font-display-classic text-xs tracking-[0.32em] uppercase text-[#E2BE76] font-semibold">
        SAVE THE DATE
      </p>

      {/* Prominent Wedding Date */}
      <div className="my-4 sm:my-5">
        <h2 className="font-serif-luxury text-3xl sm:text-4xl font-normal gold-foil-text tracking-wide drop-shadow-md">
          28th of December 2026
        </h2>
        <p className="font-display-classic text-xs tracking-[0.25em] uppercase text-[#FAF6EE]/80 mt-1">
          Monday · Negombo, Sri Lanka
        </p>
      </div>

      {/* Live Wedding Countdown */}
      <div className="my-5 sm:my-6">
        {timeLeft.isPast ? (
          <div className="py-2 font-serif-luxury text-xl sm:text-2xl gold-foil-text italic animate-pulse">
            Today is our special day!
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2.5 sm:gap-5 max-w-[280px] sm:max-w-[340px] mx-auto">
            {/* Days */}
            <div className="flex flex-col items-center">
              <span className="font-serif-luxury text-2xl sm:text-3xl gold-foil-text font-light tabular-nums drop-shadow-xs">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="font-display-classic text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#FAF6EE]/85 mt-0.5">
                Days
              </span>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center">
              <span className="font-serif-luxury text-2xl sm:text-3xl gold-foil-text font-light tabular-nums drop-shadow-xs">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="font-display-classic text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#FAF6EE]/85 mt-0.5">
                Hours
              </span>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <span className="font-serif-luxury text-2xl sm:text-3xl gold-foil-text font-light tabular-nums drop-shadow-xs">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="font-display-classic text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#FAF6EE]/85 mt-0.5">
                Minutes
              </span>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <span className="font-serif-luxury text-2xl sm:text-3xl gold-foil-text font-light tabular-nums drop-shadow-xs">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="font-display-classic text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#FAF6EE]/85 mt-0.5">
                Seconds
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Short Inviting Message */}
      <div className="max-w-sm sm:max-w-md mx-auto my-4 px-2">
        <p className="font-serif-luxury text-base italic text-[#FAF6EE]/90 leading-relaxed">
          Please mark your calendar and reserve this day to celebrate with us. Your love and presence will make our union truly complete.
        </p>
      </div>

      {/* Save the Date Action Button */}
      <div className="mt-6 flex flex-col items-center justify-center gap-3">
        <button
          type="button"
          onClick={handleSaveTheDate}
          className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#ECC880] to-[#C59B42] text-[#140513] font-serif-luxury font-medium text-sm tracking-widest uppercase shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:brightness-110 active:scale-95 transition-all cursor-pointer"
        >
          {downloaded ? (
            <>
              <Check className="w-4 h-4 text-[#140513]" />
              <span>Calendar Event Saved</span>
            </>
          ) : (
            <>
              <Calendar className="w-4 h-4 text-[#140513]" />
              <span>SAVE THE DATE</span>
            </>
          )}
        </button>

        {/* Alternate Google Calendar direct link for Android / web users */}
        <div className="flex items-center justify-center gap-4 text-xs font-serif-luxury text-[#ECC880]/85 pt-1">
          <button
            type="button"
            onClick={downloadWeddingIcsFile}
            className="hover:text-[#FFF4D9] underline decoration-[#ECC880]/40 transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            <Download className="w-3 h-3" />
            <span>Apple / Phone (.ics)</span>
          </button>
          <span>·</span>
          <a
            href={googleCalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFF4D9] underline decoration-[#ECC880]/40 transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Google Calendar</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <GoldFlourishDivider className="my-8 opacity-75" />
    </section>
  );
};
