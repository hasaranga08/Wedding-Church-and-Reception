/**
 * Calendar generation utility for Roshini & Hasaranga's Wedding
 * Date: 28th of December 2026
 * Time: 8:00 AM Asia/Colombo (UTC+05:30)
 * Duration: Configurable (default 10 hours)
 */

export interface WeddingCalendarEvent {
  title: string;
  description: string;
  location: string;
  startDateTime: string;
  durationHours?: number;
}

export const WEDDING_EVENT_DETAILS = {
  title: 'Roshini & Hasaranga – Wedding',
  description: `Church Ceremony:
Our Lady of Good Voyage Church – Duwa
Date: 28th December 2026
Time: 8:00 AM

Reception Invitation:
Auric Grand Ballroom, Negombo
Date: 28th December 2026
Time: 12:00 PM

We warmly invite you to join us in celebrating our special day!`,
  location: 'Our Lady of Good Voyage Church, Duwa, Negombo & Auric Grand Ballroom, Negombo, Sri Lanka',
  startDate: '2026-12-28T08:00:00+05:30',
  durationHours: 10,
};

/**
 * Generates and triggers the download of an RFC 5545 compliant .ics calendar file
 */
export function downloadWeddingIcsFile(): void {
  // Asia/Colombo is UTC+05:30.
  // 08:00 AM on 2026-12-28 in Asia/Colombo = 02:30 AM UTC on 2026-12-28.
  // 10 hours later = 18:00 (6:00 PM) Asia/Colombo = 12:30 PM UTC.
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Roshini & Hasaranga Wedding//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VTIMEZONE',
    'TZID:Asia/Colombo',
    'X-LIC-LOCATION:Asia/Colombo',
    'BEGIN:STANDARD',
    'TZOFFSETFROM:+0530',
    'TZOFFSETTO:+0530',
    'TZNAME:+0530',
    'DTSTART:19700101T000000',
    'END:STANDARD',
    'END:VTIMEZONE',
    'BEGIN:VEVENT',
    'UID:roshini-hasaranga-wedding-20261228@wedding',
    'DTSTAMP:20261228T080000Z',
    'DTSTART;TZID=Asia/Colombo:20261228T080000',
    'DTEND;TZID=Asia/Colombo:20261228T180000',
    'SUMMARY:Roshini & Hasaranga – Wedding',
    'DESCRIPTION:Church Ceremony:\\nOur Lady of Good Voyage Church – Duwa\\nTime: 8:00 AM\\n\\nReception Invitation:\\nAuric Grand Ballroom\\, Negombo\\nTime: 12:00 PM\\n\\nWe warmly invite you to join us in celebrating our special day!',
    'LOCATION:Our Lady of Good Voyage Church\\, Duwa\\, Negombo & Auric Grand Ballroom\\, Negombo',
    'STATUS:CONFIRMED',
    'TRANSP:OPAQUE',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Roshini_and_Hasaranga_Wedding.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 200);
}

/**
 * Returns a web link to create the event in Google Calendar
 */
export function getGoogleCalendarUrl(): string {
  // Start: 20261228T023000Z (8:00 AM Asia/Colombo)
  // End: 20261228T123000Z (6:00 PM Asia/Colombo)
  const text = encodeURIComponent('Roshini & Hasaranga – Wedding');
  const details = encodeURIComponent(
    'Church Ceremony:\nOur Lady of Good Voyage Church – Duwa (8:00 AM)\n\nReception Invitation:\nAuric Grand Ballroom, Negombo (12:00 PM)\n\nWe warmly invite you to join us in celebrating our special day!'
  );
  const location = encodeURIComponent(
    'Our Lady of Good Voyage Church, Duwa, Negombo & Auric Grand Ballroom, Negombo, Sri Lanka'
  );
  const dates = '20261228T023000Z/20261228T123000Z';

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}`;
}
