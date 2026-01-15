import { createFileRoute } from '@tanstack/react-router'
import { getRoomBySlug } from '@/data/rooms'
import RoomHero from '@/components/rooms/RoomHero'
import RoomDetails from '@/components/rooms/RoomDetails'
import RoomGallery from '@/components/rooms/RoomGallery'
import RoomBooking from '@/components/rooms/RoomBooking'

export const Route = createFileRoute('/rooms/$roomSlug')({
  component: RoomPage,
})

function RoomPage() {
  const { roomSlug } = Route.useParams()
  const room = getRoomBySlug(roomSlug)

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1
            className="font-heading text-4xl text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Room Not Found
          </h1>
          <p className="text-white/60 mb-8">
            The room you're looking for doesn't exist.
          </p>
          <a
            href="/#rooms"
            className="inline-block px-8 py-3 text-white text-sm tracking-widest uppercase transition-all hover:opacity-90"
            style={{ backgroundColor: 'var(--hotel-accent)' }}
          >
            View All Rooms
          </a>
        </div>
      </div>
    )
  }

  return (
    <>
      <RoomHero room={room} />
      <RoomDetails room={room} />
      <RoomGallery room={room} />
      <RoomBooking room={room} />
    </>
  )
}
