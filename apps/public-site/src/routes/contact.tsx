import { createFileRoute } from '@tanstack/react-router'
import ContactHero from '@/components/contact/ContactHero'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactMap from '@/components/contact/ContactMap'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactMap />
    </>
  )
}
