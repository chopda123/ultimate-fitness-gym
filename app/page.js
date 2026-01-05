import TopInfoBar from '@/app/components/layout/TopInfoBar'
import MainNav from '@/app/components/layout/MainNav'
import FloatingCTA from '@/app/components/layout/FloatingCTA'
import Footer from '@/app/components/layout/Footer'
import Hero from '@/app/components/sections/Hero'
import WhyUs from '@/app/components/sections/WhyUs'
import Services from '@/app/components/sections/Services'
import Gallery from '@/app/components/sections/Gallery'
import Trainers from '@/app/components/sections/Trainers'
import Testimonials from '@/app/components/sections/Testimonials'
import Contact from '@/app/components/sections/Contact'
import FinalCTA from '@/app/components/sections/FinalCTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <TopInfoBar />
      <MainNav />
      <Hero />
      <WhyUs />
      <Services />
      <Gallery />
      <Trainers />
      <Testimonials />
      <Contact />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </div>
  )
}