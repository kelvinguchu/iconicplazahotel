const venues = [
  {
    name: 'The Terrace',
    subtitle: 'All-Day Dining',
    description:
      'Our signature restaurant offering an extensive breakfast buffet, à la carte lunch, and elegant dinner service. Floor-to-ceiling windows provide stunning city views while you enjoy dishes from around the world.',
    hours: '6:30 AM - 10:30 PM',
    image: '/images/restaurant.jpg',
  },
  {
    name: 'Nyama Choma Grill',
    subtitle: 'African Cuisine',
    description:
      'Experience authentic Kenyan flavors at our specialty grill. From traditional nyama choma (grilled meat) to coastal Swahili dishes, this restaurant celebrates the rich culinary heritage of East Africa.',
    hours: '12:00 PM - 11:00 PM',
    image: '/images/restaurant2.jpg',
  },
  {
    name: 'Skyline Lounge',
    subtitle: 'Rooftop Lounge',
    description:
      'Perched on the top floor with panoramic views of Nairobi, our rooftop lounge offers signature mocktails, premium juices, and light bites. The perfect setting for sunset beverages or late-night conversations.',
    hours: '4:00 PM - 2:00 AM',
    image: '/images/restaurant3.jpg',
  },
]

export default function DiningVenues() {
  return (
    <section className="py-16 lg:py-24 bg-[#1a1a1a]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p
            className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--hotel-accent)' }}
          >
            Our Venues
          </p>
          <h2
            className="font-heading text-3xl lg:text-5xl font-normal text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Dining Destinations
          </h2>
        </div>

        {/* Venues */}
        <div className="space-y-12 lg:space-y-16">
          {venues.map((venue, index) => {
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                {/* Image */}
                <div
                  className={`${isEven ? 'lg:order-1' : 'lg:order-2'} order-1`}
                >
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-[300px] lg:h-[400px] object-cover"
                  />
                </div>

                {/* Content */}
                <div
                  className={`${isEven ? 'lg:order-2' : 'lg:order-1'} order-2`}
                >
                  <p
                    className="text-xs md:text-sm tracking-[0.3em] uppercase mb-2"
                    style={{ color: 'var(--hotel-accent)' }}
                  >
                    {venue.subtitle}
                  </p>
                  <h3
                    className="font-heading text-2xl lg:text-3xl text-white mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {venue.name}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-6 text-sm md:text-base">
                    {venue.description}
                  </p>
                  <div className="flex items-center gap-2 text-white/80">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: 'var(--hotel-accent)' }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm">{venue.hours}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
