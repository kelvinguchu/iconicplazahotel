export default function ContactHero() {
  return (
    <section
      className="relative h-[50vh] md:h-[60vh] min-h-[300px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/about.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p
          className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
          style={{ color: 'var(--hotel-accent)' }}
        >
          Get In Touch
        </p>
        <h1
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Contact Us
        </h1>
      </div>
    </section>
  )
}
