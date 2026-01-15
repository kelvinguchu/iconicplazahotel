import { Link, useNavigate } from '@tanstack/react-router'
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi'

const exploreLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Rooms & Suites', href: '/#rooms' },
  { name: 'Restaurant', href: '/restaurant' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  { icon: FiFacebook, href: '#' },
  { icon: FiTwitter, href: '#' },
  {
    icon: FiInstagram,
    href: 'https://www.instagram.com/iconicplazahotel/',
  },
  { icon: FiYoutube, href: '#' },
]

export default function Footer() {
  const navigate = useNavigate()

  const handleNavClick = (href: string) => {
    // Handle hash links with path (e.g., /#rooms)
    if (href.includes('#')) {
      const [path, hash] = href.split('#')
      if (path === '/' || path === '') {
        // Same page anchor check
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        } else {
          // Navigate to home then scroll
          navigate({ to: '/' }).then(() => {
            setTimeout(() => {
              const el = document.getElementById(hash)
              el?.scrollIntoView({ behavior: 'smooth' })
            }, 100)
          })
        }
      }
    } else {
      // Regular route navigation
      navigate({ to: href })
    }
  }

  return (
    <footer className="bg-background text-foreground py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* About Column with Logo */}
          <div>
            <Link to="/" className="inline-block mb-6 cursor-pointer">
              <img
                src="/logos/logo-for-light-mode.png"
                alt="Iconic Plaza Hotel"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Welcome to the finest luxury hotel experience. Our hotel combines
              elegant design with world-class amenities to create an
              unforgettable stay.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-foreground/20 flex items-center justify-center hover:border-foreground/50 transition-colors cursor-pointer"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h3
              className="font-heading text-xl mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Explore
            </h3>
            <ul className="space-y-3">
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/') && !link.href.includes('#') ? (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm cursor-pointer text-left"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3
              className="font-heading text-xl mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Contact
            </h3>
            <div className="space-y-4 text-muted-foreground text-sm">
              <p>Kenyatta Avenue</p>
              <p>Nairobi, Kenya</p>
              <p className="pt-2">
                <a
                  href="tel:+254700123456"
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  +254 700 123 456
                </a>
              </p>
              <p>
                <a
                  href="mailto:reservations@iconicplazahotels.com"
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  reservations@iconicplazahotels.com
                </a>
              </p>
              <p>
                <a
                  href="mailto:helpdesk@iconicplazahotels.com"
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  helpdesk@iconicplazahotels.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-foreground/10 text-center">
          <p className="text-muted-foreground/70 text-sm">
            © {new Date().getFullYear()} Iconic Plaza Hotel. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
