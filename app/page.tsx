import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import Services from '@/components/Services'
import Quote from '@/components/Quote'
import WhyFavour from '@/components/WhyFavour'
import Location from '@/components/Location'
import Booking from '@/components/Booking'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Quote />
      <WhyFavour />
      <Location />
      <Booking />
      <Footer />
    </main>
  )
}
