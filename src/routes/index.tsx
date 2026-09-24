import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { ProofPoints } from '@/components/ProofPoints'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { CaseStudies } from '@/components/CaseStudies'
import { Tools } from '@/components/Tools'
import { Booking } from '@/components/Booking'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { FlowDivider } from '@/components/Motif'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProofPoints />
        <About />
        <FlowDivider />
        <Services />
        <CaseStudies />
        <Tools />
        <Booking />
        <FlowDivider />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
