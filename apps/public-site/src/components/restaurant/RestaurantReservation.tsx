import { HiOutlinePhone, HiOutlineMail, HiOutlineClock } from 'react-icons/hi'

export default function RestaurantReservation() {
  return (
    <section
      className="relative py-16 lg:py-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/restaurant1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--hotel-accent)' }}
          >
            Book Your Table
          </p>
          <h2
            className="font-heading text-3xl lg:text-5xl font-normal text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Make a Reservation
          </h2>
          <p className="text-white/70 leading-relaxed mb-10 text-sm md:text-base">
            For reservations, private dining inquiries, or special event
            bookings, please contact our restaurant team. We recommend booking
            in advance for dinner service and weekends.
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="flex flex-col items-center">
              <HiOutlinePhone
                className="w-8 h-8 mb-3"
                style={{ color: 'var(--hotel-accent)' }}
              />
              <p className="text-white/60 text-sm mb-1">Call Us</p>
              <a
                href="tel:+254700123456"
                className="text-white hover:opacity-80 transition-opacity"
              >
                +254 700 123 456
              </a>
            </div>
            <div className="flex flex-col items-center">
              <HiOutlineMail
                className="w-8 h-8 mb-3"
                style={{ color: 'var(--hotel-accent)' }}
              />
              <p className="text-white/60 text-sm mb-1">Email</p>
              <a
                href="mailto:reservations@iconicplazahotels.com"
                className="text-white hover:opacity-80 transition-opacity"
              >
                reservations@iconicplazahotels.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <HiOutlineClock
                className="w-8 h-8 mb-3"
                style={{ color: 'var(--hotel-accent)' }}
              />
              <p className="text-white/60 text-sm mb-1">Hours</p>
              <p className="text-white">24/7</p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="tel:+254700123456"
            className="inline-block px-10 py-4 text-white text-xs md:text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: 'var(--hotel-accent)' }}
          >
            Reserve Now
          </a>
        </div>
      </div>
    </section>
  )
}
