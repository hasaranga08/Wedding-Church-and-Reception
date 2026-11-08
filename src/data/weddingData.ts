import { WeddingData } from '../types';

export const weddingData: WeddingData = {
  couple: {
    brideFirst: 'Roshini',
    brideFull: 'Roshini',
    groomFirst: 'Hasaranga',
    groomFull: 'Hasaranga',
    initials: 'R & H',
    story:
      'Together with our beloved families and friends, our journey of love and joy brings us to this sacred moment. We invite you to join us as we exchange sacred vows and celebrate our new beginning.',
  },
  parentsNote: 'Together with their families',
  invitationMessage: 'request the honour of your presence at the celebration of their marriage',
  coverMessage:
    'Together with our families, we joyfully invite you to celebrate the beginning of our forever as we unite in holy matrimony.',
  date: {
    displayDate: 'Monday, 28th of December 2026',
    displayTime: '8:00 AM',
    dayOfWeek: 'Monday',
    year: '2026',
    targetTimestamp: new Date('2026-12-28T08:00:00+05:30').getTime(),
  },
  venue: {
    name: 'Auric Grand Ballroom',
    subheading: 'Negombo, Sri Lanka',
    city: 'Negombo',
    country: 'Sri Lanka',
    address: 'Golden Star Beach Hotel, Lewis Place, Negombo, Sri Lanka',
    description:
      'Celebration venue located along the coastal shores of Negombo, Sri Lanka.',
    coordinates: '7.2079° N, 79.8227° E',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Auric+Grand+Ballroom+Golden+Star+Beach+Hotel+Negombo+Sri+Lanka',
  },
  ceremony: {
    time: '8:00 AM',
    location: 'Our Lady of Good Voyage Church – Duwa',
    description: 'The sacred celebration of Holy Matrimony at the historic church of Duwa, Negombo.',
    notes: 'Please be seated by 7:45 AM before the processional begins.',
  },
  reception: {
    time: '12:00 PM',
    location: 'Auric Grand Ballroom, Negombo',
    description: 'We warmly invite you to join us in celebrating our special day with luncheon, toasts, and music.',
    notes: 'Commencing at 12:00 PM following the church ceremony.',
  },
  schedule: [
    {
      time: '03:30 PM',
      title: 'Guest Arrival & Welcome Infusions',
      description: 'Chilled white peach bellinis, sparkling elderflower tonics, and light hors d’oeuvres on the west terrace.',
      location: 'The West Terrace',
    },
    {
      time: '04:00 PM',
      title: 'The Sacred Ceremony & Vows',
      description: 'Processional, heartfelt exchange of vows and rings, accompanied by classical acoustic strings.',
      location: 'The Belvedere Rose Lawn',
    },
    {
      time: '05:00 PM',
      title: 'Garden Aperitivo & Golden Hour',
      description: 'Artisanal Tuscan antipasti, prosecco bar, acoustic live jazz, and relaxed portrait moments.',
      location: 'The Cypress Courtyard',
    },
    {
      time: '07:00 PM',
      title: 'Candlelit Wedding Banquet',
      description: 'A four-course seasonal feast created by Tuscan chefs, accompanied by selected Chianti Classico vintages.',
      location: 'The Loggia Di Villa',
    },
    {
      time: '09:30 PM',
      title: 'Cake Creation & First Dance',
      description: 'Live assembly of the traditional Italian Millefoglie cake, followed by dancing under festoon lights.',
      location: 'The Grand Orangery',
    },
    {
      time: '12:30 AM',
      title: 'Midnight Gelato & Sparkler Send-Off',
      description: 'Artisanal Florentine gelato cart, midnight espresso, and a glowing sparkler farewell.',
      location: 'The Fountain Plaza',
    },
  ],
  dressCode: {
    title: 'Formal Elegance / Black Tie Optional',
    subtitle: 'Tuscan Garden Soirée',
    description:
      'Gentlemen are invited to wear tuxedos or dark formal suits with neckties. Ladies are encouraged to wear floor-length or refined midi evening gowns in soft or rich tones. Block heels or wedges are recommended for garden terraces.',
    colors: [
      { name: 'Champagne Gold', hex: '#D4AF37' },
      { name: 'Muted Sage', hex: '#8A9A86' },
      { name: 'Dusty Rose', hex: '#D9A59F' },
      { name: 'Warm Ivory', hex: '#FAF7F2', border: true },
      { name: 'Tuscan Olive', hex: '#58624E' },
    ],
  },
  transportation: {
    shuttleDetails:
      'Complimentary private executive shuttles will operate on a rolling schedule between Piazza Santa Maria Novella (Florence City Center) and Villa Di Bellezza throughout the afternoon and evening.',
    airportArrivals:
      'Florence Peretola Airport (FLR) is 25 minutes by taxi. Pisa International Airport (PSA) is 60 minutes away with high-speed rail connections into central Florence.',
    parkingNotes:
      'Valet parking is provided at the main gate of Villa Di Bellezza for guests driving their own vehicles.',
  },
  accommodations: [
    {
      name: 'Belmond Villa San Michele',
      type: 'Luxury Boutique Estate (Next to Venue)',
      distance: '5 min walk',
      description: 'A 15th-century monastery designed with facades attributed to Michelangelo, offering panoramic terrace views.',
      bookingCode: 'MONTGOMERY2027',
    },
    {
      name: 'Villa San Girolamo',
      type: 'Tuscan Garden Villa',
      distance: '3 min drive / 10 min walk',
      description: 'Peaceful private grounds nestled in the hills of Fiesole, reserved exclusively for wedding guests.',
      bookingCode: 'VANCEWEDDING',
    },
    {
      name: 'Four Seasons Hotel Firenze',
      type: 'Florence City Center',
      distance: '18 min drive (Shuttle Stop)',
      description: 'Historic Renaissance palazzo set in private botanical gardens within walking distance of the Duomo.',
      bookingCode: 'CV2027SPECIAL',
    },
  ],
  registry: {
    intro:
      'Your presence at our wedding is the greatest gift of all. For those wishing to honour us with a wedding gift, we have established a honeymoon adventure fund and a curated registry.',
    items: [
      {
        title: 'Tuscan Culinary & Vineyard Tour',
        category: 'Honeymoon Experience',
        description: 'Private wine tasting and pasta-making masterclass in the hills of Montalcino.',
        iconName: 'Wine',
      },
      {
        title: 'Almafi Coast Sailboat Journey',
        category: 'Honeymoon Experience',
        description: 'Sunset sail along the dramatic cliffs of Positano and Capri.',
        iconName: 'Compass',
      },
      {
        title: 'Home Foundation & Fine Living',
        category: 'Home & Future',
        description: 'Artisanal Italian ceramics, handcrafted linen bedding, and heirloom pieces for our home.',
        iconName: 'Home',
      },
    ],
  },
};
