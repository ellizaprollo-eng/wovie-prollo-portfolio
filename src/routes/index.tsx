import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'
import { Hero } from '@/components/Hero'
import { ProofPoints } from '@/components/ProofPoints'
import { FeaturedWork } from '@/components/FeaturedWork'
import { CaseStudies } from '@/components/CaseStudies'
import { Services } from '@/components/Services'
import { About } from '@/components/About'
import { Testimonials } from '@/components/Testimonials'
import { Booking } from '@/components/Booking'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: Home,
})

/**
 * Layout: a sticky profile sidebar on the left, a column of cards on the
 * right. Below the lg breakpoint the sidebar becomes a profile card at the
 * top and the compact Navbar takes over navigation.
 */
function Home() {
  return (
    <>
      <Navbar />
      <div className="mx-auto w-full max-w-[84rem] px-3 py-3 sm:px-4 sm:py-4 lg:px-6 lg:py-6">
        <div className="grid gap-3 sm:gap-4 lg:grid-cols-[17rem_minmax(0,1fr)] lg:items-start">
          <Sidebar />
          <main id="top" className="grid min-w-0 gap-3 sm:gap-4">
            <Hero />
            <ProofPoints />
            <FeaturedWork />
            <CaseStudies />
            <Services />
            <About />
            <Testimonials />
            <Booking />
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}
