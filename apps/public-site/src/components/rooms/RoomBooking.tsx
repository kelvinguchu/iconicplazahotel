import type { Room } from '@/data/rooms'
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi'

interface RoomBookingProps {
  room: Room
}

export default function RoomBooking({ room }: RoomBookingProps) {
  return (
    <section
      className="relative py-16 lg:py-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url('${room.images[1] || room.image}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--hotel-accent)' }}
          >
            Book Now
          </p>
          <h2
            className="font-heading text-3xl lg:text-5xl font-normal text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Reserve Your Stay
          </h2>
          <p className="text-white/70 leading-relaxed mb-4 text-sm md:text-base">
            Ready to experience the {room.name}? Contact our reservations team
            to check availability and secure your booking.
          </p>
          <p
            className="font-heading text-2xl md:text-3xl mb-10"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: 'var(--hotel-accent)',
            }}
          >
            From ${room.price} per night
          </p>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <a
              href="tel:+254700123456"
              className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
            >
              <HiOutlinePhone className="w-5 h-5" />
              <span>+254 700 123 456</span>
            </a>
            <a
              href="mailto:reservations@iconicplazahotels.com"
              className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
            >
              <HiOutlineMail className="w-5 h-5" />
              <span>reservations@iconicplazahotels.com</span>
            </a>
          </div>

          {/* CTA */}
          <a
            href="mailto:reservations@iconicplazahotels.com"
            className="inline-block px-10 py-4 text-white text-xs md:text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: 'var(--hotel-accent)' }}
          >
            Make a Reservation
          </a>
        </div>
      </div>
    </section>
  )
}
