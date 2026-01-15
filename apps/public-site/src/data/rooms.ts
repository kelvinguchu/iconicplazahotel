export interface Room {
  slug: string
  name: string
  price: number
  image: string
  images: string[]
  description: string
  longDescription: string
  size: string
  capacity: string
  bedType: string
  view: string
  amenities: string[]
  features: string[]
}

export const rooms: Room[] = [
  {
    slug: 'junior-suite',
    name: 'Junior Suite',
    price: 150,
    image: '/images/room.jpg',
    images: ['/images/room.jpg', '/images/room1.jpg'],
    description:
      'A comfortable retreat with elegant furnishings and modern amenities.',
    longDescription:
      'Our Junior Suite offers the perfect balance of comfort and style. Featuring contemporary design with warm African accents, this suite provides a peaceful sanctuary after a day exploring Nairobi. The spacious layout includes a comfortable seating area, work desk, and luxurious bathroom with rain shower.',
    size: '35 sqm',
    capacity: '1-2 Guests',
    bedType: 'Twin Bed',
    view: 'City View',
    amenities: [
      'Free WiFi',
      'Air Conditioning',
      'Mini Fridge',
      'In-Room Safe',
      'Flat Screen TV',
      'Tea & Coffee Maker',
    ],
    features: [
      'Daily Housekeeping',
      'Room Service',
      'Complimentary Breakfast',
      '24/7 Concierge',
    ],
  },
  {
    slug: 'family-room',
    name: 'Family Room',
    price: 200,
    image: '/images/room1.jpg',
    images: ['/images/room1.jpg', '/images/room.jpg'],
    description:
      'Spacious accommodation designed for families traveling together.',
    longDescription:
      'Our Family Room is thoughtfully designed to accommodate families with comfort and convenience. The generous space includes a queen bed and additional sleeping arrangements, ensuring everyone has room to relax. Connected to our family-friendly amenities and kids activities.',
    size: '45 sqm',
    capacity: '1-4 Guests',
    bedType: 'Queen Bed + Sofa Bed',
    view: 'Garden View',
    amenities: [
      'Free WiFi',
      'Air Conditioning',
      'Mini Fridge',
      'In-Room Safe',
      'Flat Screen TV',
      'Tea & Coffee Maker',
      'Extra Towels',
    ],
    features: [
      'Daily Housekeeping',
      'Room Service',
      'Complimentary Breakfast',
      'Kids Welcome Pack',
      'Babysitting Available',
    ],
  },
  {
    slug: 'deluxe-room',
    name: 'Deluxe Room',
    price: 250,
    image: '/images/room.jpg',
    images: ['/images/room.jpg', '/images/room1.jpg'],
    description: 'Elevated comfort with premium finishes and generous space.',
    longDescription:
      'The Deluxe Room represents our commitment to refined hospitality. Featuring premium bedding, elegant décor, and sophisticated amenities, this room provides an elevated stay experience. The marble bathroom includes both rain shower and soaking tub for ultimate relaxation.',
    size: '42 sqm',
    capacity: '1-2 Guests',
    bedType: 'King Bed',
    view: 'City View',
    amenities: [
      'Free WiFi',
      'Air Conditioning',
      'Mini Fridge',
      'In-Room Safe',
      'Flat Screen TV',
      'Nespresso Machine',
      'Bathrobes & Slippers',
    ],
    features: [
      'Daily Housekeeping',
      'Room Service',
      'Complimentary Breakfast',
      'Turn-Down Service',
      'Premium Toiletries',
    ],
  },
  {
    slug: 'superior-room',
    name: 'Superior Room',
    price: 350,
    image: '/images/room1.jpg',
    images: ['/images/room1.jpg', '/images/room.jpg'],
    description:
      'Superior luxury with panoramic views and exclusive amenities.',
    longDescription:
      'Our Superior Room offers an exceptional retreat with panoramic views of the Nairobi skyline. The refined interior features handcrafted furnishings, a spacious work area, and a luxurious bathroom with separate shower and bathtub. Enjoy exclusive access to our Executive Lounge.',
    size: '50 sqm',
    capacity: '1-2 Guests',
    bedType: 'King Bed',
    view: 'Panoramic City View',
    amenities: [
      'Free WiFi',
      'Air Conditioning',
      'Premium Mini Fridge',
      'In-Room Safe',
      '55" Smart TV',
      'Nespresso Machine',
      'Bathrobes & Slippers',
      'Pillow Menu',
    ],
    features: [
      'Daily Housekeeping',
      '24/7 Room Service',
      'Complimentary Breakfast',
      'Executive Lounge Access',
      'Turn-Down Service',
      'Premium Toiletries',
    ],
  },
  {
    slug: 'wellness-room',
    name: 'Wellness Room',
    price: 400,
    image: '/images/room.jpg',
    images: ['/images/room.jpg', '/images/room1.jpg'],
    description: 'Designed for rejuvenation with spa-inspired features.',
    longDescription:
      'The Wellness Room is a sanctuary for mind and body. Designed with holistic wellbeing in mind, this room features air purification, aromatherapy diffuser, yoga mat, and a spa-inspired bathroom with Japanese soaking tub. Complimentary access to our fitness center and one spa treatment included.',
    size: '48 sqm',
    capacity: '1-2 Guests',
    bedType: 'King Bed',
    view: 'Garden View',
    amenities: [
      'Free WiFi',
      'Air Conditioning',
      'Healthy Refreshments',
      'In-Room Safe',
      'Smart TV',
      'Aromatherapy Diffuser',
      'Yoga Mat',
      'Air Purifier',
    ],
    features: [
      'Daily Housekeeping',
      'Room Service',
      'Healthy Breakfast',
      'Complimentary Spa Treatment',
      'Fitness Center Access',
      'Wellness Consultation',
    ],
  },
  {
    slug: 'presidential-suite',
    name: 'Presidential Suite',
    price: 500,
    image: '/images/room1.jpg',
    images: ['/images/room1.jpg', '/images/room.jpg'],
    description:
      'The pinnacle of luxury with separate living areas and butler service.',
    longDescription:
      'Our Presidential Suite represents the ultimate in luxury hospitality. This expansive suite features a separate living room, dining area, and master bedroom with king bed. Floor-to-ceiling windows offer breathtaking views, while dedicated butler service ensures every need is anticipated. Perfect for distinguished guests and special celebrations.',
    size: '85 sqm',
    capacity: '1-4 Guests',
    bedType: 'King Bed',
    view: 'Panoramic Nairobi Skyline',
    amenities: [
      'Free WiFi',
      'Air Conditioning',
      'Premium Refreshments',
      'In-Room Safe',
      '65" Smart TV',
      'Nespresso & Espresso Machine',
      'Bathrobes & Slippers',
      'Pillow Menu',
      'Private Dining Area',
    ],
    features: [
      '24/7 Butler Service',
      'Private Check-In',
      'Complimentary Airport Transfer',
      'Executive Lounge Access',
      'Complimentary Breakfast',
      'Turn-Down Service',
      'Premium Toiletries',
      'Daily Fruit & Flowers',
    ],
  },
]

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((room) => room.slug === slug)
}
