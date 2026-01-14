import {
  MdOutlinePool,
  MdOutlineSpa,
  MdOutlineRestaurant,
  MdOutlineFitnessCenter,
  MdOutlineMeetingRoom,
  MdOutlineLocalBar,
} from 'react-icons/md'

const amenities = [
  {
    icon: MdOutlinePool,
    title: 'Infinity Pool',
    description:
      'Rooftop infinity pool with panoramic views of Nairobi skyline',
  },
  {
    icon: MdOutlineSpa,
    title: 'Luxury Spa',
    description: 'Full-service spa featuring African-inspired treatments',
  },
  {
    icon: MdOutlineRestaurant,
    title: 'Fine Dining',
    description:
      'Three signature restaurants with international and local cuisine',
  },
  {
    icon: MdOutlineFitnessCenter,
    title: 'Fitness Center',
    description: '24/7 state-of-the-art gym with personal trainers',
  },
  {
    icon: MdOutlineMeetingRoom,
    title: 'Conference Center',
    description: 'Modern meeting rooms and grand ballroom for 500+ guests',
  },
  {
    icon: MdOutlineLocalBar,
    title: 'Rooftop Lounge',
    description: 'Exclusive bar with craft cocktails and live entertainment',
  },
]

export default function AboutAmenities() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p
            className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--hotel-accent)' }}
          >
            World-Class Facilities
          </p>
          <h2
            className="font-heading text-3xl lg:text-5xl font-normal text-gray-900 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            5-Star Amenities
          </h2>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="text-center p-6 lg:p-8 bg-gray-50 shadow-md hover:shadow-xl transition-all duration-300 rounded-lg lg:rounded-none"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <amenity.icon
                  className="w-10 h-10 lg:w-12 lg:h-12"
                  style={{ color: 'var(--hotel-accent)' }}
                />
              </div>

              {/* Title */}
              <h3
                className="font-heading text-lg lg:text-xl text-gray-900 mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {amenity.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
