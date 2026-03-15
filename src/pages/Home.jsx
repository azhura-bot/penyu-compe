import { Suspense, lazy } from 'react'

import HeroSection from '../components/home/HeroSection'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import MusicPlayer from '../components/layout/MusicPlayer'
import DeferredSection from '../components/performance/DeferredSection'

const WhySection = lazy(() => import('../components/home/WhySection'))
const ThreatSection = lazy(() => import('../components/home/ThreatSection'))
const ProgramSection = lazy(() => import('../components/home/ProgramSection'))
const ContactSectionLazy = lazy(() => import('../components/home/ContactSection'))

function SectionFallback({ className = 'min-h-screen' }) {
  return (
    <div
      aria-hidden="true"
      className={`${className} w-full bg-[linear-gradient(180deg,rgba(3,17,79,0.96),rgba(3,17,79,0.82))]`}
    />
  )
}

function Home() {
  return (
    <main className="overflow-hidden bg-[#03114f] text-white">
      <Navbar activeLabel="Beranda" />
      <HeroSection />
      <DeferredSection fallback={<SectionFallback />} minHeight="100vh">
        <Suspense fallback={<SectionFallback />}>
          <WhySection />
        </Suspense>
      </DeferredSection>
      <DeferredSection fallback={<SectionFallback />} minHeight="100vh">
        <Suspense fallback={<SectionFallback />}>
          <ThreatSection />
        </Suspense>
      </DeferredSection>
      <DeferredSection fallback={<SectionFallback />} minHeight="100vh">
        <Suspense fallback={<SectionFallback />}>
          <ProgramSection />
        </Suspense>
      </DeferredSection>
      <DeferredSection fallback={<SectionFallback className="min-h-[72vh]" />} minHeight="72vh">
        <Suspense fallback={<SectionFallback className="min-h-[72vh]" />}>
          <ContactSectionLazy />
        </Suspense>
      </DeferredSection>
      <Footer />
      <MusicPlayer /> 
    </main>
  )
}

export default Home
