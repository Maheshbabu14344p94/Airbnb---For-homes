export type ListingPhoto = {
  id: number;
  src: string;
  alt: string;
  category: string;
  caption?: string;
};

export type Review = {
  name: string;
  avatar: string;
  stay: string;
  date: string;
  text: string;
};

const img = (id: string, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

export const photos: ListingPhoto[] = [
  { id: 1, src: img('photo-1600607687920-4e2a09cf159d'), alt: 'Bright modern living room', category: 'Living room 1' },
  { id: 2, src: img('photo-1600210492486-724fe5c67fb0'), alt: 'Living room seating', category: 'Living room 2' },
  { id: 3, src: img('photo-1600566753190-17f0baa2a6c3'), alt: 'Warm kitchen and dining area', category: 'Full kitchen' },
  { id: 4, src: img('photo-1616486338812-3dadae4b4ace'), alt: 'Bedroom with double bed', category: 'Bedroom' },
  { id: 5, src: img('photo-1600566753086-00f18fb6b3ea'), alt: 'Modern bathroom', category: 'Full bathroom' },
  { id: 6, src: img('photo-1549490349-8643362247b5'), alt: 'Fitness room', category: 'Gym' },
  { id: 7, src: img('photo-1545324418-cc1a3fa10c00'), alt: 'Apartment exterior', category: 'Exterior' },
  { id: 8, src: img('photo-1600607687939-ce8a6c25118c'), alt: 'Shared pool', category: 'Pool' },
  { id: 9, src: img('photo-1505693416388-ac5ce068fe85'), alt: 'Cozy room detail', category: 'Additional photos' },
  { id: 10, src: img('photo-1600585154340-be6161a56a0c'), alt: 'Building terrace', category: 'Exterior' },
  { id: 11, src: img('photo-1556912173-3bb406ef7e77'), alt: 'Kitchen detail', category: 'Full kitchen' },
  { id: 12, src: img('photo-1586023492125-27b2c045efd7'), alt: 'Dining detail', category: 'Living room 2' },
  { id: 13, src: img('photo-1615873968403-89e068629265'), alt: 'Bedroom detail', category: 'Bedroom' },
  { id: 14, src: img('photo-1552321554-5fefe8c9ef14'), alt: 'Bathroom detail', category: 'Full bathroom' },
  { id: 15, src: img('photo-1566073771259-6a8506099945'), alt: 'Pool and lounge', category: 'Pool' },
  { id: 16, src: img('photo-1572331165267-854da2b10ccc'), alt: 'Pool detail', category: 'Pool' },
  { id: 17, src: img('photo-1540541338287-41700207dee6'), alt: 'Resort exterior', category: 'Exterior' },
  { id: 18, src: img('photo-1512917774080-9991f1c4c750'), alt: 'Property facade', category: 'Exterior' },
  { id: 19, src: img('photo-1519710164239-da123dc03ef4'), alt: 'Reading corner', category: 'Additional photos' },
  { id: 20, src: img('photo-1497366811353-6870744d04b2'), alt: 'Workspace', category: 'Additional photos' },
  { id: 21, src: img('photo-1493809842364-78817add7ffb'), alt: 'Open-plan room', category: 'Living room 1' },
  { id: 22, src: img('photo-1560185127-6a8c1f3a7c86'), alt: 'Bedroom seating', category: 'Bedroom' },
  { id: 23, src: img('photo-1505691938895-1758d7feb511'), alt: 'Bed close-up', category: 'Bedroom' },
  { id: 24, src: img('photo-1540518614846-7eded433c457'), alt: 'Bedroom with natural light', category: 'Bedroom' },
  { id: 25, src: img('photo-1511818966892-d7d671e672a2'), alt: 'Property architecture', category: 'Exterior' },
];

export const amenities = [
  ['🍳', 'Kitchen'], ['📶', 'Wifi'], ['💻', 'Dedicated workspace'], ['🅿️', 'Free parking on premises'],
  ['🏊', 'Pool'], ['🛁', 'Hot tub'], ['🐾', 'Pets allowed'], ['📹', 'Exterior security cameras on property'],
  ['🧯', 'Smoke alarm'], ['❄️', 'Air conditioning'], ['📺', 'Smart TV'], ['🧺', 'Washer'],
  ['🧴', 'Essentials'], ['🚪', 'Private entrance'], ['🌳', 'Outdoor furniture'], ['🛗', 'Elevator'],
];

export const reviews: Review[] = [
  { name: 'Amit', avatar: 'https://i.pravatar.cc/96?img=12', stay: '1 week', date: '2 months ago', text: 'Very helpful and responsive team. Safe and peaceful stay. Loved everything about the property.' },
  { name: 'Aheesh', avatar: 'https://i.pravatar.cc/96?img=11', stay: '2 weeks', date: '3 years ago', text: 'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive.' },
  { name: 'Samiksha', avatar: 'https://i.pravatar.cc/96?img=47', stay: '1 week', date: 'May 2026', text: 'The host was really great help. The place was calm, comfortable and easy to access.' },
  { name: 'Vedant', avatar: 'https://i.pravatar.cc/96?img=68', stay: '2 weeks', date: 'May 2026', text: 'We had an amazing stay at this property in Goa. It was spotless and exceptionally well maintained.' },
  { name: 'Vaibhav S', avatar: 'https://i.pravatar.cc/96?img=60', stay: '1 week', date: 'May 2026', text: 'Great great experience living out there. Would absolutely recommend it to friends.' },
  { name: 'Mohd', avatar: 'https://i.pravatar.cc/96?img=56', stay: '2 weeks', date: 'May 2026', text: 'Great place. Exactly as described in the listing.' },
];

export const reviewScores = [
  ['Cleanliness', 5.0], ['Accuracy', 5.0], ['Check-in', 5.0], ['Communication', 5.0], ['Location', 4.8], ['Value', 4.8],
] as const;

export const galleryCategories = ['All photos', ...Array.from(new Set(photos.map((p) => p.category)))];

export const listing = {
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
  subtitle: 'Entire serviced apartment in Candolim, India',
  guests: 3,
  bedrooms: 1,
  beds: 1,
  baths: 1,
  rating: 4.95,
  reviews: 19,
  host: 'Mirashya Homes',
  hostReviews: 1463,
  hostRating: 4.68,
  yearsHosting: 2,
  price: 5699,
  cleaning: 1200,
  serviceFee: 3240,
  taxes: 4200,
  nights: 5,
  description: `Escape to Amor de Goa by Mirashya Homes, a serene 1BHK retreat in the heart of Candolim—perfect for couples, families, solo travelers, and work-from-anywhere stays. Thoughtfully designed with modern comforts and a touch of Goan charm, this space blends relaxation with convenience.\n\nEnjoy a private jacuzzi, cozy living area, private balcony and access to a tranquil shared swimming pool. The fully equipped kitchen makes short or long stays easy, while the location keeps Candolim Beach, cafés, restaurants and nightlife close by.`,
};
