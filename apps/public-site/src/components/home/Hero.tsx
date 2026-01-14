import { HiOutlineChevronDown } from 'react-icons/hi'

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/room.jpg')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-start justify-center px-6 md:px-16 lg:px-24">
        {/* Tagline */}
        <p
          className="mb-4 text-xs md:text-sm tracking-[0.3em] text-hotel-accent uppercase"
          style={{ color: 'var(--hotel-accent)' }}
        >
          Unique Place to Relax & Enjoy
        </p>

        {/* Main Heading */}
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-normal text-white leading-tight max-w-2xl">
          Iconic Plaza Hotel
        </h1>

        {/* CTA Button */}
        <button
          onClick={() =>
            document
              .getElementById('rooms')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          className="mt-8 md:mt-10 px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90 cursor-pointer"
          style={{ backgroundColor: 'var(--hotel-accent)', color: 'white' }}
        >
          Discover Rooms
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 hover:text-white transition-colors cursor-pointer z-10"
      >
        <div className="w-6 h-10 md:w-8 md:h-12 border-2 border-white/50 rounded-full flex items-start justify-center pt-2">
          <HiOutlineChevronDown className="w-3 h-3 md:w-4 md:h-4 animate-bounce" />
        </div>
      </button>
    </section>
  )
}
