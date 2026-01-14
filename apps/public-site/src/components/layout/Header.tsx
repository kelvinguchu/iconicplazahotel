import { useState, useEffect } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import { HiOutlineMenu, HiOutlineChevronDown } from 'react-icons/hi'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Rooms & Suites',
    href: '/#rooms',
    dropdown: [
      { name: 'Junior Suite', href: '/rooms/junior-suite' },
      { name: 'Family Room', href: '/rooms/family-room' },
      { name: 'Deluxe Room', href: '/rooms/deluxe-room' },
      { name: 'Superior Room', href: '/rooms/superior-room' },
      { name: 'Wellness Room', href: '/rooms/wellness-room' },
      { name: 'Presidential Suite', href: '/rooms/presidential-suite' },
    ],
  },
  { name: 'Restaurant', href: '/restaurant' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    setActiveDropdown(null)

    // Handle hash links with path (e.g., /#rooms)
    if (href.includes('#')) {
      const [path, hash] = href.split('#')
      if (path === '/' || path === '') {
        // Same page anchor
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-sm shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-3 md:px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="cursor-pointer">
            <img
              src="/logos/logo-for-light-mode.png"
              alt="Iconic Plaza Hotel"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() =>
                  link.dropdown && setActiveDropdown(link.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.href.startsWith('/') && !link.href.includes('#') ? (
                  <Link
                    to={link.href}
                    className="flex items-center gap-1 text-sm tracking-wider text-white/90 hover:text-white transition-colors uppercase cursor-pointer [&.active]:text-hotel-accent"
                  >
                    {link.name}
                    {link.dropdown && (
                      <HiOutlineChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center gap-1 text-sm tracking-wider text-white/90 hover:text-white transition-colors uppercase cursor-pointer"
                  >
                    {link.name}
                    {link.dropdown && (
                      <HiOutlineChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </button>
                )}

                {/* Dropdown */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-black/95 backdrop-blur-sm min-w-[200px] py-3 shadow-xl rounded-b-md border-t-2 border-hotel-accent">
                      {link.dropdown.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => handleNavClick(item.href)}
                          className="block w-full text-left px-6 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden p-2 text-white cursor-pointer hover:text-hotel-accent transition-colors">
                <HiOutlineMenu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black/95 border-l-gray-800 text-white min-w-[90vw] px-3"
            >
              <SheetHeader className="text-left text-white font-heading text-xl border-b border-white/10 px-2 py-2">
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 px-2">
                {navLinks.map((link) => (
                  <div key={link.name} className="flex flex-col">
                    {link.href.startsWith('/') && !link.href.includes('#') ? (
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg tracking-wider text-white/90 hover:text-hotel-accent transition-colors uppercase font-medium [&.active]:text-hotel-accent"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="text-left text-lg tracking-wider text-white/90 hover:text-hotel-accent transition-colors uppercase font-medium"
                      >
                        {link.name}
                      </button>
                    )}

                    {/* Mobile Dropdown Items */}
                    {link.dropdown && (
                      <div className="flex flex-col gap-3 mt-3 pl-4 border-l border-white/10">
                        {link.dropdown.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => handleNavClick(item.href)}
                            className="text-left text-sm text-white/60 hover:text-white transition-colors uppercase tracking-wide"
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  )
}
