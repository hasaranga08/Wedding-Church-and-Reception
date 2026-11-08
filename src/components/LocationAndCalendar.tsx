import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';
import { GoldFlourishDivider } from './FloralDecorations';
import { MapPin, Plane, Bus, Calendar, Check, Download } from 'lucide-react';

export const LocationAndCalendar: React.FC = () => {
  const { venue, transportation, accommodations, couple, date } = weddingData;
  const [icsDownloaded, setIcsDownloaded] = useState(false);

  // Generate Google Calendar Link
  const googleCalendarUrl = (() => {
    const title = encodeURIComponent(`${couple.brideFirst} & ${couple.groomFirst}'s Wedding`);
    const details = encodeURIComponent(
      `Celebrating the marriage of ${couple.brideFull} and ${couple.groomFull} at ${venue.name}.`
    );
    const location = encodeURIComponent(`${venue.name}, ${venue.address}`);
    // 20270918T140000Z to 20270919T000000Z (UTC format)
    const dates = '20270918T140000Z/20270919T000000Z';
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  })();

  // Download .ics file for Apple Calendar / Outlook
  const downloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Lumiere Wedding//EN',
      'BEGIN:VEVENT',
      'SUMMARY:' + `${couple.brideFirst} & ${couple.groomFirst}'s Wedding`,
      'DESCRIPTION:' + `Celebrating the union of ${couple.brideFull} and ${couple.groomFull}`,
      'LOCATION:' + `${venue.name}, ${venue.address}`,
      'DTSTART:20270918T140000Z',
      'DTEND:20270919T000000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${couple.brideFirst}-${couple.groomFirst}-Wedding.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    setIcsDownloaded(true);
    setTimeout(() => setIcsDownloaded(false), 3000);
  };

  return (
    <section id="location-travel" className="w-full max-w-xl mx-auto px-4 py-8 sm:py-12 space-y-8">
      {/* Travel & Directions Card */}
      <div className="paper-texture paper-card-shadow rounded-2xl p-7 sm:p-10 border border-[#E2D4C0]">
        <div className="text-center mb-6">
          <p className="font-serif-luxury text-xs sm:text-sm tracking-[0.3em] uppercase text-[#8C7A68]">
            Getting There
          </p>
          <h3 className="font-serif-luxury text-3xl font-light text-[#241F1C] mt-1">
            Travel &amp; Directions
          </h3>
          <GoldFlourishDivider className="my-4" />
        </div>

        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="p-2.5 rounded-full bg-[#FAF7F2] border border-[#C5A880]/30 shrink-0 mt-0.5">
              <Plane className="w-4 h-4 text-[#C5A880]" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-lg text-[#241F1C]">Airports</h4>
              <p className="font-serif-luxury text-sm text-[#594B3F] mt-0.5 leading-relaxed">
                {transportation.airportArrivals}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-2.5 rounded-full bg-[#FAF7F2] border border-[#C5A880]/30 shrink-0 mt-0.5">
              <Bus className="w-4 h-4 text-[#C5A880]" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-lg text-[#241F1C]">Guest Shuttles</h4>
              <p className="font-serif-luxury text-sm text-[#594B3F] mt-0.5 leading-relaxed">
                {transportation.shuttleDetails}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-2.5 rounded-full bg-[#FAF7F2] border border-[#C5A880]/30 shrink-0 mt-0.5">
              <MapPin className="w-4 h-4 text-[#C5A880]" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-lg text-[#241F1C]">Accommodations</h4>
              <p className="font-serif-luxury text-sm text-[#594B3F] mt-0.5 leading-relaxed">
                Room blocks reserved at Belmond Villa San Michele and Villa San Girolamo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Save The Date / Add to Calendar Card */}
      <div className="paper-texture paper-card-shadow rounded-2xl p-7 sm:p-10 border border-[#E2D4C0] text-center">
        <p className="font-serif-luxury text-xs sm:text-sm tracking-[0.3em] uppercase text-[#8C7A68]">
          Save The Date
        </p>
        <h3 className="font-serif-luxury text-2xl sm:text-3xl font-light text-[#241F1C] mt-1 mb-2">
          Add to Your Calendar
        </h3>
        <p className="font-serif-luxury text-sm italic text-[#7D6B58] mb-6">
          {date.displayDate} · Florence, Italy
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF7F2] border border-[#C5A880] text-xs font-serif-luxury tracking-wide text-[#594835] hover:bg-[#F3ECE2] transition-colors shadow-2xs"
          >
            <Calendar className="w-4 h-4 text-[#C5A880]" />
            <span>Add to Google Calendar</span>
          </a>

          <button
            onClick={downloadIcs}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#241F1C] text-white text-xs font-serif-luxury tracking-wide hover:bg-[#38312B] transition-colors shadow-xs"
          >
            {icsDownloaded ? (
              <>
                <Check className="w-4 h-4 text-[#D4AF37]" />
                <span>Downloaded (.ics)</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-[#D4AF37]" />
                <span>Apple / Outlook (.ics)</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
