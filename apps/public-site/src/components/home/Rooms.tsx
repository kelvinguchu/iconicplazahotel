import { useState, useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { rooms } from '@/data/rooms'
import {
  HiOutlineUsers,
  HiOutlineWifi,
  HiOutlineArrowRight,
  HiX,
} from 'react-icons/hi'
import { IoBedOutline, IoCafeOutline } from 'react-icons/io5'

const getAmenityIcon = (text: string) => {
  if (text.includes('Guest') || text.includes('Person'))
    return <HiOutlineUsers className="w-4 h-4" />
  if (text.includes('WiFi') || text.includes('Wifi'))
    return <HiOutlineWifi className="w-4 h-4" />
  if (text.includes('Bed')) return <IoBedOutline className="w-4 h-4" />
  if (text.includes('Breakfast')) return <IoCafeOutline className="w-4 h-4" />
  return null
}

function RoomCard({ room }: { room: (typeof rooms)[0] }) {
  const [isFlipped, setIsFlipped] = useState(false)

  const cardAmenities = [
    room.capacity,
    'Free WiFi',
    room.bedType,
    'Breakfast Included',
  ]

  return (
    <div
      className="group h-[400px] cursor-pointer relative"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Card Inner - Flip Logic */}
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full rounded-lg overflow-hidden bg-gray-900"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

          {/* BOOK Tag */}
          <div
            className="absolute top-4 left-0 px-2 py-6 text-white text-xs tracking-widest uppercase"
            style={{
              backgroundColor: 'var(--hotel-accent)',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)',
            }}
          >
            Book
          </div>

          {/* Mobile Flip Button - Visible only on small screens or when hover isn't primary */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsFlipped(true)
            }}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 lg:hidden"
            aria-label="View Details"
          >
            <HiOutlineArrowRight className="w-5 h-5" />
          </button>

          {/* Price and Name */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p
              className="text-sm tracking-wider mb-2"
              style={{ color: 'var(--hotel-accent)' }}
            >
              {room.price}$ / Night
            </p>
            <h3
              className="font-heading text-2xl text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {room.name}
            </h3>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full h-full bg-card p-8 flex flex-col justify-center rounded-lg overflow-hidden border border-foreground/10"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* Close/Back Button for Mobile */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsFlipped(false)
            }}
            className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground lg:hidden"
          >
            <HiX className="w-6 h-6" />
          </button>

          <p
            className="text-sm tracking-wider mb-2"
            style={{ color: 'var(--hotel-accent)' }}
          >
            {room.price}$ / Night
          </p>
          <h3
            className="font-heading text-2xl text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {room.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-3">
            {room.description}
          </p>

          {/* Amenities */}
          <div className="grid grid-cols-2 gap-3 text-sm text-foreground/70 mb-8">
            {cardAmenities.map((amenity, i) => (
              <span key={i} className="flex items-center gap-2">
                <span style={{ color: 'var(--hotel-accent)' }}>
                  {getAmenityIcon(amenity)}
                </span>
                {amenity}
              </span>
            ))}
          </div>

          <Link
            to="/rooms/$roomSlug"
            params={{ roomSlug: room.slug }}
            className="self-start px-6 py-3 text-white text-xs tracking-widest uppercase transition-all hover:opacity-80 cursor-pointer"
            style={{ backgroundColor: 'var(--hotel-accent)' }}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Rooms() {
  const [currentPage, setCurrentPage] = useState(0)
  const roomsPerPage = 3
  const totalPages = Math.ceil(rooms.length / roomsPerPage)
  // Ref for auto-scrolling
  const sectionRef = useRef<HTMLElement>(null)

  const displayedRooms = rooms.slice(
    currentPage * roomsPerPage,
    (currentPage + 1) * roomsPerPage,
  )

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
    // Scroll to top of section with a slight offset or just to the section
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={sectionRef} id="rooms" className="py-6 md:py-8 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p
            className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--hotel-accent)' }}
          >
            Iconic Plaza Hotel
          </p>
          <h2
            className="font-heading text-3xl lg:text-5xl font-normal text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Rooms & Suites
          </h2>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedRooms.map((room, index) => (
            <RoomCard key={index} room={room} />
          ))}
        </div>

        {/* Pagination with Arrows */}
        <div className="flex justify-center items-center gap-4 mt-10">
          {/* Previous Button */}
          <button
            onClick={() =>
              handlePageChange(
                currentPage > 0 ? currentPage - 1 : totalPages - 1,
              )
            }
            className="w-10 h-10 border border-foreground/30 flex items-center justify-center text-foreground hover:border-foreground/50 hover:bg-foreground/10 transition-all cursor-pointer"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i)}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  i === currentPage
                    ? ''
                    : 'bg-foreground/30 hover:bg-foreground/50'
                }`}
                style={
                  i === currentPage
                    ? { backgroundColor: 'var(--hotel-accent)' }
                    : {}
                }
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() =>
              handlePageChange(
                currentPage < totalPages - 1 ? currentPage + 1 : 0,
              )
            }
            className="w-10 h-10 border border-foreground/30 flex items-center justify-center text-foreground hover:border-foreground/50 hover:bg-foreground/10 transition-all cursor-pointer"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
