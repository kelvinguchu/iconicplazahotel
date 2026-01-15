const services = [
  {
    number: '01',
    title: 'Fine Dining',
    description:
      'Experience exquisite culinary delights at our award-winning restaurant. From breakfast to dinner, our chef prepares the finest dishes using fresh, local ingredients.',
    image: '/images/restaurant.jpg',
  },
  {
    number: '02',
    title: 'Spa & Wellness',
    description:
      'Rejuvenate your body and mind at our luxurious spa. Enjoy a range of treatments designed to relax, refresh, and restore your natural balance.',
    image: '/images/spa.jpg',
  },
  {
    number: '03',
    title: 'Fitness & Yoga',
    description:
      'Stay active during your stay with our state-of-the-art fitness center and daily yoga sessions overlooking the beautiful surroundings.',
    image: '/images/yoga.jpg',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-6 md:py-8 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className="font-heading text-3xl lg:text-5xl font-normal text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Services
          </h2>
        </div>

        {/* Services List */}
        <div className="space-y-12 lg:space-y-0">
          {services.map((service, index) => {
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-0 ${index > 0 ? 'mt-8 lg:mt-0' : ''}`}
              >
                {/* Image - switches position based on index on desktop, always top on mobile */}
                <div
                  className={`order-1 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-lg lg:rounded-none"
                  />
                </div>

                {/* Content */}
                <div
                  className={`flex items-center p-6 md:p-8 lg:p-12 order-2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="flex gap-4 md:gap-6 items-start">
                    {/* Number */}
                    <span
                      className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal shrink-0"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: 'var(--hotel-accent)',
                        WebkitTextStroke: '1px var(--hotel-accent)',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {service.number}
                    </span>

                    <div>
                      {/* Title */}
                      <h3
                        className="font-heading text-xl md:text-2xl lg:text-3xl text-foreground mb-3 md:mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                        {service.description}
                      </p>

                      {/* CTA */}
                      <button
                        onClick={() =>
                          document
                            .getElementById('booking')
                            ?.scrollIntoView({ behavior: 'smooth' })
                        }
                        className="px-6 py-3 text-white text-xs tracking-widest uppercase transition-all duration-300 hover:opacity-90 cursor-pointer"
                        style={{ backgroundColor: 'var(--hotel-accent)' }}
                      >
                        Discover
                      </button>
                    </div>
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
