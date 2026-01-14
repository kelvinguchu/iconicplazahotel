import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineClock,
} from 'react-icons/hi'

export default function ContactInfo() {
  return (
    <>
      {/* Main Contact Info Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <p
              className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--hotel-accent)' }}
            >
              Contact Information
            </p>
            <h2
              className="font-heading text-3xl lg:text-5xl font-normal text-gray-900 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get In Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Whether you have a question about reservations, need assistance
              with planning your stay, or simply want to learn more about our
              hotel, our team is here to help.
            </p>
          </div>

          {/* Main Contact Info - 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-8 bg-gray-50 shadow-sm rounded-lg lg:rounded-none">
              <HiOutlineLocationMarker
                className="w-8 h-8 mx-auto mb-4"
                style={{ color: 'var(--hotel-accent)' }}
              />
              <h3 className="font-medium text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600 text-sm">Kenyatta Avenue</p>
              <p className="text-gray-600 text-sm">Nairobi, Kenya</p>
            </div>

            <div className="text-center p-8 bg-gray-50 shadow-sm rounded-lg lg:rounded-none">
              <HiOutlinePhone
                className="w-8 h-8 mx-auto mb-4"
                style={{ color: 'var(--hotel-accent)' }}
              />
              <h3 className="font-medium text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">+254 700 123 456</p>
              <p className="text-gray-600 text-sm">+254 20 123 4567</p>
            </div>

            <div className="text-center p-8 bg-gray-50 shadow-sm rounded-lg lg:rounded-none">
              <HiOutlineMail
                className="w-8 h-8 mx-auto mb-4"
                style={{ color: 'var(--hotel-accent)' }}
              />
              <h3 className="font-medium text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:info@iconicplazahotels.com"
                className="block text-gray-600 text-sm hover:opacity-70 transition-opacity break-all"
              >
                info@iconicplazahotels.com
              </a>
            </div>

            <div className="text-center p-8 bg-gray-50 shadow-sm rounded-lg lg:rounded-none">
              <HiOutlineClock
                className="w-8 h-8 mx-auto mb-4"
                style={{ color: 'var(--hotel-accent)' }}
              />
              <h3 className="font-medium text-gray-900 mb-2">Front Desk</h3>
              <p className="text-gray-600 text-sm">Open 24 Hours</p>
              <p className="text-gray-600 text-sm">7 Days a Week</p>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts - Full Width */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-6 lg:px-12">
          <h3
            className="font-heading text-xl md:text-2xl text-white text-center mb-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Department Contacts
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white/60 text-xs uppercase tracking-wider mb-2">
                General Enquiries
              </h4>
              <a
                href="mailto:info@iconicplazahotels.com"
                className="text-white text-sm hover:opacity-70 transition-opacity break-all"
              >
                info@iconicplazahotels.com
              </a>
            </div>

            <div>
              <h4 className="text-white/60 text-xs uppercase tracking-wider mb-2">
                Reservations
              </h4>
              <a
                href="mailto:reservations@iconicplazahotels.com"
                className="text-white text-sm hover:opacity-70 transition-opacity break-all"
              >
                reservations@iconicplazahotels.com
              </a>
            </div>

            <div>
              <h4 className="text-white/60 text-xs uppercase tracking-wider mb-2">
                Guest Relations
              </h4>
              <a
                href="mailto:guestrelations@iconicplazahotels.com"
                className="text-white text-sm hover:opacity-70 transition-opacity break-all"
              >
                guestrelations@iconicplazahotels.com
              </a>
            </div>

            <div>
              <h4 className="text-white/60 text-xs uppercase tracking-wider mb-2">
                Events & Banquets
              </h4>
              <a
                href="mailto:events@iconicplazahotels.com"
                className="text-white text-sm hover:opacity-70 transition-opacity break-all"
              >
                events@iconicplazahotels.com
              </a>
            </div>

            <div>
              <h4 className="text-white/60 text-xs uppercase tracking-wider mb-2">
                Group Reservations
              </h4>
              <a
                href="mailto:groups@iconicplazahotels.com"
                className="text-white text-sm hover:opacity-70 transition-opacity break-all"
              >
                groups@iconicplazahotels.com
              </a>
            </div>

            <div>
              <h4 className="text-white/60 text-xs uppercase tracking-wider mb-2">
                Concierge
              </h4>
              <a
                href="mailto:concierge@iconicplazahotels.com"
                className="text-white text-sm hover:opacity-70 transition-opacity break-all"
              >
                concierge@iconicplazahotels.com
              </a>
            </div>

            <div>
              <h4 className="text-white/60 text-xs uppercase tracking-wider mb-2">
                Feedback
              </h4>
              <a
                href="mailto:feedback@iconicplazahotels.com"
                className="text-white text-sm hover:opacity-70 transition-opacity break-all"
              >
                feedback@iconicplazahotels.com
              </a>
            </div>

            <div>
              <h4 className="text-white/60 text-xs uppercase tracking-wider mb-2">
                Careers
              </h4>
              <a
                href="mailto:careers@iconicplazahotels.com"
                className="text-white text-sm hover:opacity-70 transition-opacity break-all"
              >
                careers@iconicplazahotels.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
