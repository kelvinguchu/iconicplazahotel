import type { Room } from '@/data/rooms'
import {
  HiOutlineUsers,
  HiOutlineHome,
  HiOutlineEye,
  HiOutlineCheck,
} from 'react-icons/hi'
import { IoBedOutline } from 'react-icons/io5'

interface RoomDetailsProps {
  room: Room
}

export default function RoomDetails({ room }: RoomDetailsProps) {
  return (
    <section className="py-6 md:py-8 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left - Description */}
          <div>
            <p
              className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--hotel-accent)' }}
            >
              About This Room
            </p>
            <h2
              className="font-heading text-3xl lg:text-4xl font-normal text-gray-900 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Room Details
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
              {room.longDescription}
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <HiOutlineHome
                  className="w-5 h-5 md:w-6 md:h-6"
                  style={{ color: 'var(--hotel-accent)' }}
                />
                <div>
                  <p className="text-gray-500 text-[10px] md:text-xs uppercase">
                    Room Size
                  </p>
                  <p className="text-gray-900 font-medium text-sm md:text-base">
                    {room.size}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlineUsers
                  className="w-5 h-5 md:w-6 md:h-6"
                  style={{ color: 'var(--hotel-accent)' }}
                />
                <div>
                  <p className="text-gray-500 text-[10px] md:text-xs uppercase">
                    Capacity
                  </p>
                  <p className="text-gray-900 font-medium text-sm md:text-base">
                    {room.capacity}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <IoBedOutline
                  className="w-5 h-5 md:w-6 md:h-6"
                  style={{ color: 'var(--hotel-accent)' }}
                />
                <div>
                  <p className="text-gray-500 text-[10px] md:text-xs uppercase">
                    Bed Type
                  </p>
                  <p className="text-gray-900 font-medium text-sm md:text-base">
                    {room.bedType}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlineEye
                  className="w-5 h-5 md:w-6 md:h-6"
                  style={{ color: 'var(--hotel-accent)' }}
                />
                <div>
                  <p className="text-gray-500 text-[10px] md:text-xs uppercase">
                    View
                  </p>
                  <p className="text-gray-900 font-medium text-sm md:text-base">
                    {room.view}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Amenities & Features */}
          <div className="mt-8 lg:mt-0">
            {/* Amenities */}
            <div className="mb-10">
              <h3
                className="font-heading text-xl text-gray-900 mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Room Amenities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <HiOutlineCheck
                      className="w-4 h-4 shrink-0"
                      style={{ color: 'var(--hotel-accent)' }}
                    />
                    <span className="text-gray-600 text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3
                className="font-heading text-xl text-gray-900 mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Services Included
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <HiOutlineCheck
                      className="w-4 h-4 shrink-0"
                      style={{ color: 'var(--hotel-accent)' }}
                    />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
