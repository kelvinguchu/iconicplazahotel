export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#1a1a1a]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Content Side - 50% */}
          <div className="order-2 lg:order-1">
            <p
              className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--hotel-accent)' }}
            >
              About Us
            </p>

            <h2
              className="font-heading text-3xl lg:text-4xl font-normal text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Welcome to Iconic Plaza Hotel
            </h2>

            <p className="text-white/60 leading-relaxed mb-6 text-sm md:text-base">
              Welcome to the finest luxury hotel experience. Our hotel combines
              elegant design with world-class amenities to create an
              unforgettable stay. Every detail has been carefully crafted to
              ensure your comfort and satisfaction.
            </p>

            <p className="text-white/60 leading-relaxed mb-8 text-sm md:text-base">
              Experience our exceptional hospitality with stunning views,
              gourmet dining, rejuvenating spa treatments, and personalized
              service that exceeds your expectations.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById('services')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-6 md:px-8 py-3 text-white text-xs md:text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90 cursor-pointer"
              style={{ backgroundColor: 'var(--hotel-accent)' }}
            >
              Read More
            </button>
          </div>

          {/* Images Side - 50% with two images */}
          <div className="grid grid-cols-2 gap-4 order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Image 1 - Taller */}
            <img
              src="/images/restaurant.jpg"
              alt="Restaurant"
              className="w-full h-[250px] md:h-[350px] lg:h-[420px] object-cover rounded-lg lg:rounded-none"
            />

            {/* Image 2 - Shorter offset */}
            <img
              src="/images/room.jpg"
              alt="Room"
              className="w-full h-[200px] md:h-[280px] lg:h-[320px] object-cover mt-8 lg:mt-12 rounded-lg lg:rounded-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
