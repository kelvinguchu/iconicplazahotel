export default function RestaurantIntro() {
  return (
    <section className="py-6 md:py-8 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-stretch">
          {/* Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <p
              className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--hotel-accent)' }}
            >
              Culinary Excellence
            </p>
            <h2
              className="font-heading text-3xl lg:text-4xl font-normal text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A Celebration of Flavor
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
              At Iconic Plaza Hotel, dining is more than a meal—it's an
              experience. Our culinary team, led by passionate chefs with
              international expertise, crafts dishes that honor both local
              Kenyan flavors and global culinary traditions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
              We source the freshest ingredients from local farms and markets,
              supporting Kenyan farmers while ensuring every dish meets our
              exacting standards. From sunrise breakfast to late-night dining,
              every moment at our table is designed to delight.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Whether you're celebrating a special occasion, hosting a business
              dinner, or simply enjoying a quiet meal, our restaurants offer the
              perfect setting for every moment.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[300px] lg:h-auto order-1 lg:order-2">
            <img
              src="/images/restaurant1.jpg"
              alt="Restaurant Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
