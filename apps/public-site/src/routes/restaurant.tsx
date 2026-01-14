import { createFileRoute } from '@tanstack/react-router'
import RestaurantHero from '@/components/restaurant/RestaurantHero'
import RestaurantIntro from '@/components/restaurant/RestaurantIntro'
import DiningVenues from '@/components/restaurant/DiningVenues'
import MenuHighlights from '@/components/restaurant/MenuHighlights'
import RestaurantReservation from '@/components/restaurant/RestaurantReservation'

export const Route = createFileRoute('/restaurant')({
  component: RestaurantPage,
})

function RestaurantPage() {
  return (
    <>
      <RestaurantHero />
      <RestaurantIntro />
      <DiningVenues />
      <MenuHighlights />
      <RestaurantReservation />
    </>
  )
}
