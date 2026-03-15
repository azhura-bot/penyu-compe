import { Suspense, lazy, useEffect, useRef, useState } from 'react'

import HomeLoadingScreen from '../components/home/HomeLoadingScreen'
import HeroSection from '../components/home/HeroSection'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import MusicPlayer from '../components/layout/MusicPlayer'
import DeferredSection from '../components/performance/DeferredSection'

const WhySection = lazy(() => import('../components/home/WhySection'))
const ThreatSection = lazy(() => import('../components/home/ThreatSection'))
const ProgramSection = lazy(() => import('../components/home/ProgramSection'))
const ContactSectionLazy = lazy(() => import('../components/home/ContactSection'))
const HERO_LOADER_MAX_DURATION = 2200
const HERO_LOADER_MIN_DURATION = 700

let hasPreparedHeroVideo = false

function SectionFallback({ className = 'min-h-screen' }) {
  return (
    <div
      aria-hidden="true"
      className={`${className} w-full bg-[linear-gradient(180deg,rgba(3,17,79,0.96),rgba(3,17,79,0.82))]`}
    />
  )
}

function Home() {
  const [isHeroExperienceReady, setIsHeroExperienceReady] = useState(() => hasPreparedHeroVideo)
  const startedAtRef = useRef(0)
  const hasClosedLoaderRef = useRef(hasPreparedHeroVideo)
  const loaderTimeoutRef = useRef(0)

  useEffect(() => {
    if (isHeroExperienceReady) {
      return undefined
    }

    startedAtRef.current = performance.now()
    document.body.style.overflow = 'hidden'

    loaderTimeoutRef.current = window.setTimeout(() => {
      hasClosedLoaderRef.current = true
      hasPreparedHeroVideo = true
      document.body.style.overflow = ''
      setIsHeroExperienceReady(true)
    }, HERO_LOADER_MAX_DURATION)

    return () => {
      window.clearTimeout(loaderTimeoutRef.current)
      document.body.style.overflow = ''
    }
  }, [isHeroExperienceReady])

  const handleHeroReady = () => {
    if (hasClosedLoaderRef.current) {
      return
    }

    hasClosedLoaderRef.current = true
    window.clearTimeout(loaderTimeoutRef.current)
    const elapsed = performance.now() - startedAtRef.current
    const remainingDelay = Math.max(0, HERO_LOADER_MIN_DURATION - elapsed)

    window.setTimeout(() => {
      hasPreparedHeroVideo = true
      document.body.style.overflow = ''
      setIsHeroExperienceReady(true)
    }, remainingDelay)
  }

  return (
    <main className="overflow-hidden bg-[#03114f] text-white">
      {!isHeroExperienceReady && <HomeLoadingScreen />}
      <Navbar activeLabel="Beranda" />
      <HeroSection
        prioritizeVideo={!hasPreparedHeroVideo}
        onVideoReady={!hasPreparedHeroVideo ? handleHeroReady : undefined}
      />
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
