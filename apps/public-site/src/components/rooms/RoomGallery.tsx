import type { Room } from '@/data/rooms'
import { useState } from 'react'

interface RoomGalleryProps {
  room: Room
}

export default function RoomGallery({ room }: RoomGalleryProps) {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <section className="py-16 lg:py-24 bg-[#f8f5f0]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--hotel-accent)' }}
          >
            Gallery
          </p>
          <h2
            className="font-heading text-3xl lg:text-4xl font-normal text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Room Photos
          </h2>
        </div>

        {/* Main Image */}
        <div className="relative mb-4">
          <img
            src={room.images[activeImage]}
            alt={`${room.name} - Photo ${activeImage + 1}`}
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
          />
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
          {room.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`relative w-20 h-14 md:w-24 md:h-16 overflow-hidden cursor-pointer transition-opacity ${
                activeImage === index
                  ? 'ring-2'
                  : 'opacity-60 hover:opacity-100'
              }`}
              style={
                activeImage === index
                  ? { outlineColor: 'var(--hotel-accent)' }
                  : {}
              }
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {activeImage === index && (
                <div
                  className="absolute inset-0 border-2"
                  style={{ borderColor: 'var(--hotel-accent)' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
