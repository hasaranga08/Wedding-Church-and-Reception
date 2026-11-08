export interface WeddingEvent {
  time: string;
  title: string;
  description: string;
  location: string;
}

export interface AccommodationOption {
  name: string;
  type: string;
  distance: string;
  description: string;
  bookingCode?: string;
}

export interface RegistryItem {
  title: string;
  category: string;
  description: string;
  iconName: string;
}

export interface WeddingData {
  couple: {
    brideFirst: string;
    brideFull: string;
    groomFirst: string;
    groomFull: string;
    initials: string;
    story: string;
  };
  parentsNote: string;
  invitationMessage: string;
  coverMessage: string;
  date: {
    displayDate: string;
    displayTime: string;
    targetTimestamp: number; // For countdown
    dayOfWeek: string;
    year: string;
  };
  venue: {
    name: string;
    subheading: string;
    city: string;
    country: string;
    address: string;
    description: string;
    coordinates: string;
    googleMapsUrl: string;
  };
  ceremony: {
    time: string;
    location: string;
    description: string;
    notes: string;
  };
  reception: {
    time: string;
    location: string;
    description: string;
    notes: string;
  };
  schedule: WeddingEvent[];
  dressCode: {
    title: string;
    subtitle: string;
    description: string;
    colors: { name: string; hex: string; border?: boolean }[];
  };
  transportation: {
    shuttleDetails: string;
    airportArrivals: string;
    parkingNotes: string;
  };
  accommodations: AccommodationOption[];
  registry: {
    intro: string;
    items: RegistryItem[];
  };
}
