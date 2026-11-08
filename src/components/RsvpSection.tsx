import React, { useState, useEffect } from 'react';
import { GoldFlourishDivider } from './FloralDecorations';
import { Send, MessageCircle, ExternalLink, Edit3, ArrowRight } from 'lucide-react';

/**
 * Section 5 – RSVP
 * - Destination WhatsApp Number: +94766148615
 * - Fields:
 *   1. Guest Name (required)
 *   2. Will you be attending? (Yes, happily accepting / Sorry, unable to attend)
 *   3. Number of Guests (required if attending, hidden/0 if unable to attend)
 *   4. Message (optional)
 * - Click-to-chat WhatsApp link with formatted pre-filled message
 * - Clear post-submission UI informing the guest to press Send inside WhatsApp
 */

export type AttendanceOption = 'Yes, happily accepting' | 'Sorry, unable to attend';

interface RsvpEntry {
  guestName: string;
  attending: AttendanceOption;
  numberOfGuests: string;
  message: string;
  timestamp: string;
}

const STORAGE_KEY = 'roshini_hasaranga_rsvp_submissions';
const WHATSAPP_PHONE = '94766148615';

export const RsvpSection: React.FC = () => {
  const [guestName, setGuestName] = useState('');
  const [attending, setAttending] = useState<AttendanceOption>('Yes, happily accepting');
  const [numberOfGuests, setNumberOfGuests] = useState('1');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  // Check if this device already saved an RSVP response
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: RsvpEntry[] = JSON.parse(stored);
        if (parsed.length > 0) {
          const last = parsed[parsed.length - 1];
          if (last.guestName) setGuestName(last.guestName);
          if (
            last.attending === 'Yes, happily accepting' ||
            last.attending === 'Sorry, unable to attend'
          ) {
            setAttending(last.attending);
          }
          if (last.numberOfGuests) setNumberOfGuests(last.numberOfGuests);
          if (last.message) setMessage(last.message);
        }
      }
    } catch (e) {
      console.warn('localStorage read error:', e);
    }
  }, []);

  const handleAttendanceChange = (choice: AttendanceOption) => {
    setAttending(choice);
    if (choice === 'Sorry, unable to attend') {
      setNumberOfGuests('0');
    } else if (numberOfGuests === '0' || !numberOfGuests) {
      setNumberOfGuests('1');
    }
  };

  const constructWhatsAppMessage = (
    name: string,
    attendance: AttendanceOption,
    guestsCount: string,
    wishes: string
  ) => {
    const finalGuests = attendance === 'Yes, happily accepting' ? (guestsCount || '1') : '0';
    const finalMessage = wishes.trim() ? wishes.trim() : 'None';

    return [
      'Wedding RSVP – Roshini & Hasaranga',
      '',
      `Guest Name: ${name.trim()}`,
      '',
      `Attendance: ${attendance}`,
      '',
      `Number of Guests: ${finalGuests}`,
      '',
      `Message: ${finalMessage}`,
      '',
      'Wedding Date: 28th December 2026',
    ].join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!guestName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (attending === 'Yes, happily accepting' && (!numberOfGuests || numberOfGuests === '0')) {
      setErrorMessage('Please specify the number of guests attending.');
      return;
    }

    setErrorMessage('');

    const text = constructWhatsAppMessage(guestName, attending, numberOfGuests, message);
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
    setWhatsappUrl(url);

    // Save to localStorage so details are never lost
    const newEntry: RsvpEntry = {
      guestName: guestName.trim(),
      attending,
      numberOfGuests: attending === 'Yes, happily accepting' ? numberOfGuests : '0',
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    try {
      const existing = localStorage.getItem(STORAGE_KEY);
      const list: RsvpEntry[] = existing ? JSON.parse(existing) : [];
      list.push(newEntry);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (err) {
      console.warn('Could not save RSVP to localStorage:', err);
    }

    // Trigger WhatsApp in a new window/tab
    try {
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.warn('Could not trigger WhatsApp opening automatically:', err);
    }

    setSubmitted(true);
  };

  const handleEdit = () => {
    setSubmitted(false);
  };

  return (
    <section
      id="rsvp"
      className="w-full mx-auto px-2 py-10 sm:py-14 text-center select-none"
    >
      {/* Category Header */}
      <p className="font-display-classic text-xs tracking-[0.32em] uppercase text-[#E2BE76] font-semibold">
        RSVP
      </p>

      {/* Main Section Heading */}
      <h2 className="font-serif-luxury text-3xl font-light gold-foil-text tracking-wide mt-2 drop-shadow-md">
        Kindly Respond
      </h2>

      {/* Warm Invitation Message */}
      <div className="max-w-sm sm:max-w-md mx-auto my-4 px-2">
        <p className="font-serif-luxury text-base italic text-[#FAF6EE]/90 leading-relaxed">
          “It would mean so much to us to have you celebrate this special day with us. Please let us know whether you will be joining us.”
        </p>
      </div>

      {submitted ? (
        /* Confirmation State without heavy card styling */
        <div className="max-w-sm sm:max-w-md mx-auto my-6 px-3 py-4 text-center space-y-4">
          <div className="w-12 h-12 mx-auto rounded-full border border-[#ECC880] flex items-center justify-center text-[#ECC880] bg-black/30">
            <MessageCircle className="w-6 h-6" />
          </div>

          <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#FAF6EE] font-light leading-snug">
            Your RSVP message is ready in WhatsApp. Please press Send to confirm your response.
          </h3>

          <p className="font-serif-luxury text-sm text-[#FAF6EE]/85 leading-relaxed">
            Please make sure to tap or click <span className="text-[#ECC880] font-semibold">Send</span> inside WhatsApp so your response is delivered directly to Roshini &amp; Hasaranga (+94 76 614 8615).
          </p>

          {/* Response summary */}
          <div className="py-3 px-4 rounded-xl border border-[#ECC880]/30 bg-black/25 text-left text-xs font-serif-luxury space-y-1.5 text-[#FAF6EE]/90">
            <div>
              <span className="text-[#ECC880] font-medium">Guest:</span> {guestName}
            </div>
            <div>
              <span className="text-[#ECC880] font-medium">Response:</span> {attending}
            </div>
            {attending === 'Yes, happily accepting' && (
              <div>
                <span className="text-[#ECC880] font-medium">Guests Attending:</span> {numberOfGuests}
              </div>
            )}
            {message.trim() && (
              <div>
                <span className="text-[#ECC880] font-medium">Message:</span> “{message.trim()}”
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className="pt-2 space-y-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#ECC880] to-[#C59B42] text-[#140513] font-serif-luxury font-medium text-sm tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_16px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#140513]" />
              <span>Open WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#140513]/70" />
            </a>

            <button
              type="button"
              onClick={handleEdit}
              className="w-full py-2.5 px-5 rounded-full border border-[#ECC880]/50 text-xs font-serif-luxury text-[#ECC880] hover:bg-[#ECC880]/15 transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Edit3 className="w-3.5 h-3.5 text-[#ECC880]" />
              <span>Edit Response / Update Details</span>
            </button>
          </div>
        </div>
      ) : (
        /* RSVP Form without large cards or coloured containers */
        <form
          onSubmit={handleSubmit}
          className="max-w-sm sm:max-w-md mx-auto my-6 space-y-4 text-left px-2"
        >
          {errorMessage && (
            <div className="p-2.5 rounded-lg bg-red-950/60 border border-red-500/40 text-red-200 text-xs text-center font-serif-luxury">
              {errorMessage}
            </div>
          )}

          {/* Field 1: Guest name (required) */}
          <div>
            <label className="block font-serif-luxury text-xs text-[#E2BE76] mb-1">
              Guest Name <span className="text-[#ECC880]">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Your full name"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-black/25 border border-[#ECC880]/40 focus:outline-none focus:border-[#ECC880] font-serif-luxury text-sm text-[#FAF6EE] placeholder-[#FAF6EE]/40 transition-colors"
            />
          </div>

          {/* Field 2: Will you be attending? (required selection) */}
          <div>
            <label className="block font-serif-luxury text-xs text-[#E2BE76] mb-1.5">
              Will you be attending? <span className="text-[#ECC880]">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => handleAttendanceChange('Yes, happily accepting')}
                className={`py-2.5 px-3 rounded-xl border text-center transition-all cursor-pointer font-serif-luxury text-xs leading-tight ${
                  attending === 'Yes, happily accepting'
                    ? 'bg-gradient-to-r from-[#D4AF37] via-[#ECC880] to-[#C59B42] text-[#140513] font-medium border-[#ECC880] shadow-md'
                    : 'bg-black/20 text-[#FAF6EE] border-[#ECC880]/30 hover:border-[#ECC880]/60'
                }`}
              >
                Yes, happily accepting
              </button>

              <button
                type="button"
                onClick={() => handleAttendanceChange('Sorry, unable to attend')}
                className={`py-2.5 px-3 rounded-xl border text-center transition-all cursor-pointer font-serif-luxury text-xs leading-tight ${
                  attending === 'Sorry, unable to attend'
                    ? 'bg-gradient-to-r from-[#D4AF37] via-[#ECC880] to-[#C59B42] text-[#140513] font-medium border-[#ECC880] shadow-md'
                    : 'bg-black/20 text-[#FAF6EE] border-[#ECC880]/30 hover:border-[#ECC880]/60'
                }`}
              >
                Sorry, unable to attend
              </button>
            </div>
          </div>

          {/* Field 3: Number of guests (where applicable) */}
          {attending === 'Yes, happily accepting' && (
            <div>
              <label className="block font-serif-luxury text-xs text-[#E2BE76] mb-1">
                Number of Guests <span className="text-[#ECC880]">*</span>
              </label>
              <select
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-[#ECC880]/40 focus:outline-none focus:border-[#ECC880] font-serif-luxury text-sm text-[#FAF6EE] transition-colors"
              >
                <option value="1" className="bg-[#140513] text-[#FAF6EE]">1 Guest</option>
                <option value="2" className="bg-[#140513] text-[#FAF6EE]">2 Guests</option>
                <option value="3" className="bg-[#140513] text-[#FAF6EE]">3 Guests</option>
                <option value="4" className="bg-[#140513] text-[#FAF6EE]">4 Guests</option>
                <option value="5" className="bg-[#140513] text-[#FAF6EE]">5+ Guests</option>
              </select>
            </div>
          )}

          {/* Field 4: A short message (optional) */}
          <div>
            <label className="block font-serif-luxury text-xs text-[#E2BE76] mb-1">
              Message (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Additional wishes, dietary notes or blessings for Roshini & Hasaranga..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-black/25 border border-[#ECC880]/40 focus:outline-none focus:border-[#ECC880] font-serif-luxury text-sm text-[#FAF6EE] placeholder-[#FAF6EE]/40 resize-none transition-colors"
            />
          </div>

          {/* Submit Button labelled "SEND RSVP" */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#ECC880] to-[#C59B42] text-[#140513] font-serif-luxury font-medium text-sm tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_16px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>SEND RSVP</span>
              <Send className="w-4 h-4 text-[#140513]" />
            </button>
            <p className="mt-2 text-center text-[11px] font-serif-luxury italic text-[#ECC880]/75">
              Clicking Send RSVP prepares your response and opens WhatsApp to +94 76 614 8615
            </p>
          </div>
        </form>
      )}

      <GoldFlourishDivider className="my-8 opacity-75" />
    </section>
  );
};

