import { HiOutlineTruck, HiOutlineWifi } from 'react-icons/hi'
import {
  MdOutlineLocalParking,
  MdOutlineRoomService,
  MdOutlinePool,
  MdOutlineFreeBreakfast,
} from 'react-icons/md'

const facilities = [
  {
    icon: HiOutlineTruck,
    title: 'Pick Up & Drop',
    description:
      "We'll pick you up from airport while you relax comfortably on your ride.",
  },
  {
    icon: MdOutlineLocalParking,
    title: 'Parking Space',
    description:
      'Complimentary valet parking available for all our valued guests.',
  },
  {
    icon: MdOutlineRoomService,
    title: 'Room Service',
    description: '24/7 room service to cater to your every need at any hour.',
  },
  {
    icon: MdOutlinePool,
    title: 'Swimming Pool',
    description:
      'Enjoy our heated infinity pool with stunning panoramic views.',
  },
  {
    icon: HiOutlineWifi,
    title: 'Fibre Internet',
    description: 'High-speed WiFi throughout the hotel to keep you connected.',
  },
  {
    icon: MdOutlineFreeBreakfast,
    title: 'Breakfast',
    description:
      'Start your day with our gourmet breakfast buffet included in your stay.',
  },
]

const extraServices = [
  { name: 'Room Cleaning', price: 50 },
  { name: 'Dining Included', price: 35 },
  { name: 'Room Breakfast', price: 30 },
  { name: 'Safe & Secure', price: 25 },
]

export default function Facilities() {
  return (
    <>
      {/* Hotel Facilities */}
      <section className="py-16 lg:py-24 bg-[#1a1a1a]">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <p
              className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--hotel-accent)' }}
            >
              Our Services
            </p>
            <h2
              className="font-heading text-3xl lg:text-5xl font-normal text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hotel Facilities
            </h2>
          </div>

          {/* Facilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-[#222] border border-white/10 p-8 text-center group hover:border-white/20 transition-colors duration-300 rounded-lg lg:rounded-none"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <facility.icon
                    className="w-12 h-12"
                    style={{ color: 'var(--hotel-accent)' }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="font-heading text-xl text-white mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {facility.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Services */}
      <section className="bg-[#1a1a1a]">
        <div className="grid lg:grid-cols-2">
          {/* Image */}
          <div className="h-[300px] lg:h-auto">
            <img
              src="/images/room1.jpg"
              alt="Extra Services"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Pricing List */}
          <div className="flex flex-col justify-center p-8 lg:p-16">
            <p
              className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--hotel-accent)' }}
            >
              Pricing Plan
            </p>
            <h2
              className="font-heading text-3xl lg:text-4xl font-normal text-white mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Extra Services
            </h2>

            <div className="space-y-0">
              {extraServices.map((service, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-4 border-b border-white/10"
                >
                  <span className="text-white/80 text-sm md:text-base">
                    {service.name}
                  </span>
                  <span className="text-white font-medium text-sm md:text-base">
                    ${service.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
