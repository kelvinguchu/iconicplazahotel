import { useState } from 'react'
import { HiStar, HiOutlinePhone, HiOutlineCalendar } from 'react-icons/hi'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { format } from 'date-fns'

export default function BookingForm() {
  const [checkIn, setCheckIn] = useState<Date | undefined>()
  const [checkOut, setCheckOut] = useState<Date | undefined>()
  const [adults, setAdults] = useState('2')
  const [children, setChildren] = useState('0')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking submitted:', { checkIn, checkOut, adults, children })
    alert('Thank you for your booking request! We will contact you shortly.')
  }

  return (
    <section
      id="booking"
      className="relative py-16 lg:py-32 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/room.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* 5 Stars */}
            <div className="flex gap-1 mb-6 justify-center lg:justify-start">
              {[...Array(5)].map((_, i) => (
                <HiStar
                  key={i}
                  className="w-4 h-4"
                  style={{ color: 'var(--hotel-accent)' }}
                />
              ))}
            </div>

            <p
              className="text-xl lg:text-2xl text-white leading-relaxed mb-8 italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Each of our guest rooms feature a private bath, wi-fi, cable
              television and include full breakfast.
            </p>

            {/* Reservation Phone */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <HiOutlinePhone
                className="w-8 h-8"
                style={{ color: 'var(--hotel-accent)' }}
              />
              <div className="text-left">
                <p className="text-white/60 text-sm">Reservation</p>
                <a
                  href="tel:+254700123456"
                  className="text-white text-xl font-medium hover:opacity-80 transition-opacity cursor-pointer"
                >
                  +254 700 123 456
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form Card */}
          <div className="bg-[#222]/95 backdrop-blur-sm p-6 lg:p-10 rounded-lg">
            <h2
              className="font-heading text-2xl lg:text-3xl font-normal text-white mb-8 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hotel Booking Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Check In / Check Out */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/60 text-xs mb-2 uppercase tracking-wider">
                    Check In
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-12 bg-[#333] border-white/10 text-white rounded-none justify-between cursor-pointer hover:bg-[#444] hover:text-white"
                      >
                        <span
                          className={checkIn ? 'text-white' : 'text-white/50'}
                        >
                          {checkIn
                            ? format(checkIn, 'MMM dd, yyyy')
                            : 'Select date'}
                        </span>
                        <HiOutlineCalendar className="w-5 h-5 text-white/70" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-[#333] border-white/10">
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={setCheckIn}
                        disabled={(date) => date < new Date()}
                        className="bg-[#333] text-white [&_button]:text-white [&_button:hover]:bg-white/10 [&_button:hover]:text-white [&_.rdp-day_button]:text-white [&_.rdp-weekday]:text-white/60 [&_.rdp-caption_label]:text-white [&_.rdp-button_previous]:text-white [&_.rdp-button_next]:text-white **:data-selected:bg-hotel-accent **:data-selected:text-white **:data-today:bg-white/10 **:data-outside:text-white/30"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <label className="block text-white/60 text-xs mb-2 uppercase tracking-wider">
                    Check Out
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-12 bg-[#333] border-white/10 text-white rounded-none justify-between cursor-pointer hover:bg-[#444] hover:text-white"
                      >
                        <span
                          className={checkOut ? 'text-white' : 'text-white/50'}
                        >
                          {checkOut
                            ? format(checkOut, 'MMM dd, yyyy')
                            : 'Select date'}
                        </span>
                        <HiOutlineCalendar className="w-5 h-5 text-white/70" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-[#333] border-white/10">
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                        disabled={(date) => date < (checkIn || new Date())}
                        className="bg-[#333] text-white [&_button]:text-white [&_button:hover]:bg-white/10 [&_button:hover]:text-white [&_.rdp-day_button]:text-white [&_.rdp-weekday]:text-white/60 [&_.rdp-caption_label]:text-white [&_.rdp-button_previous]:text-white [&_.rdp-button_next]:text-white **:data-selected:bg-hotel-accent **:data-selected:text-white **:data-today:bg-white/10 **:data-outside:text-white/30"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Row 2: Adults / Children */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/60 text-xs mb-2 uppercase tracking-wider">
                    Adults
                  </label>
                  <Select value={adults} onValueChange={setAdults}>
                    <SelectTrigger className="bg-[#333] border-white/10 text-white h-12 rounded-none w-full cursor-pointer [&>svg]:text-white/70">
                      <SelectValue placeholder="Adults" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#333] border-white/10">
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <SelectItem
                          key={n}
                          value={n.toString()}
                          className="text-white hover:bg-white/10 cursor-pointer focus:bg-white/10 focus:text-white"
                        >
                          {n} Adult{n > 1 ? 's' : ''}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-white/60 text-xs mb-2 uppercase tracking-wider">
                    Children
                  </label>
                  <Select value={children} onValueChange={setChildren}>
                    <SelectTrigger className="bg-[#333] border-white/10 text-white h-12 rounded-none w-full cursor-pointer [&>svg]:text-white/70">
                      <SelectValue placeholder="Children" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#333] border-white/10">
                      {[0, 1, 2, 3, 4].map((n) => (
                        <SelectItem
                          key={n}
                          value={n.toString()}
                          className="text-white hover:bg-white/10 cursor-pointer focus:bg-white/10 focus:text-white"
                        >
                          {n} Child{n !== 1 ? 'ren' : ''}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 text-white text-sm tracking-widest uppercase rounded-none cursor-pointer mt-4 hover:opacity-90"
                style={{ backgroundColor: 'var(--hotel-accent)' }}
              >
                Check Availability
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
