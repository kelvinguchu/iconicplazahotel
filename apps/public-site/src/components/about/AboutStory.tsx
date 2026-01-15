export default function AboutStory() {
  return (
    <section className="py-6 md:py-8 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-stretch">
          {/* Image - matches text height */}
          <div className="relative h-[300px] lg:h-auto">
            <img
              src="/images/restaurant.jpg"
              alt="Hotel Interior"
              className="w-full h-full object-cover"
            />
            {/* Decorative Frame */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full border-2 -z-10 hidden lg:block"
              style={{ borderColor: 'var(--hotel-accent)' }}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <p
              className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--hotel-accent)' }}
            >
              Our Vision
            </p>
            <h2
              className="font-heading text-3xl lg:text-4xl font-normal text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Redefining Luxury in the Heart of Nairobi
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
              Iconic Plaza Hotel represents a new chapter in East African
              hospitality. Rising majestically on Kenyatta Avenue, our hotel
              combines contemporary elegance with authentic Kenyan warmth to
              create an experience unlike any other.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
              Every detail has been thoughtfully designed—from the handcrafted
              furnishings by local artisans to the panoramic views of the
              Nairobi skyline. Our rooms and suites offer a sanctuary of
              comfort, while our restaurants celebrate the finest in local and
              international cuisine.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              We invite you to experience Nairobi's newest landmark destination,
              where world-class service meets the heart and soul of Kenya.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
