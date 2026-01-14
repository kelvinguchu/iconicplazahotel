import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Rooms from '@/components/home/Rooms'
import Services from '@/components/home/Services'
import Testimonials from '@/components/home/Testimonials'
import Facilities from '@/components/home/Facilities'
import BookingForm from '@/components/home/BookingForm'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Rooms />
      <Services />
      <Testimonials />
      <Facilities />
      <BookingForm />
    </>
  )
}
