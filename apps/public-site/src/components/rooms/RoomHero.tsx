import type { Room } from '@/data/rooms'
import { Link } from '@tanstack/react-router'

interface RoomHeroProps {
  room: Room
}

export default function RoomHero({ room }: RoomHeroProps) {
  return (
    <section
      className="relative h-[50vh] md:h-[70vh] min-h-[400px] flex items-end bg-cover bg-center"
      style={{ backgroundImage: `url('${room.image}')` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pb-10 lg:pb-16">
        {/* Breadcrumb */}
        <nav className="mb-6 hidden md:block">
          <ol className="flex items-center gap-2 text-sm text-white/60">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                to="/"
                hash="rooms"
                className="hover:text-white transition-colors"
                activeOptions={{ exact: true }}
              >
                Rooms
              </Link>
            </li>
            <li>/</li>
            <li className="text-white">{room.name}</li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <h1
              className="font-heading text-3xl md:text-5xl lg:text-6xl font-normal text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {room.name}
            </h1>
            <p className="text-white/80 text-sm md:text-lg max-w-xl">
              {room.description}
            </p>
          </div>

          <div className="text-left lg:text-right">
            <p className="text-white/60 text-xs md:text-sm uppercase tracking-wider mb-1">
              From
            </p>
            <p
              className="font-heading text-3xl md:text-4xl text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              ${room.price}
              <span className="text-sm md:text-lg text-white/60"> / night</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
