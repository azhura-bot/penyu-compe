import { useEffect, useState } from 'react'

import homeLogo from '../assets/image.png'
import ctaBg from '../assets/homepage/cta-bg.jpg'
import heroBg from '../assets/homepage/hero-bg.jpg'
import programBg from '../assets/homepage/program-bg.jpg'
import programPlastic from '../assets/homepage/program-plastic.jpg'
import searchIcon from '../assets/homepage/search.svg'
import threatBeach from '../assets/homepage/threat-beach.jpg'
import threatBg from '../assets/homepage/threat-bg.jpg'
import threatEgg from '../assets/homepage/threat-egg.jpg'
import threatIllegal from '../assets/homepage/threat-illegal.jpg'
import threatNet from '../assets/homepage/threat-net.jpg'
import threatTourism from '../assets/homepage/threat-tourism.jpg'
import threatTrash from '../assets/homepage/threat-trash.jpg'
import turtleVideo from '../assets/homepage/penyu-swim-loop.webm'
import whyBg from '../assets/homepage/why-bg.jpg'
import ContactSection from '../components/home/ContactSection'
import HeroSection from '../components/home/HeroSection'
import HomeLoadingScreen from '../components/home/HomeLoadingScreen'
import ProgramSection from '../components/home/ProgramSection'
import ThreatSection from '../components/home/ThreatSection'
import WhySection from '../components/home/WhySection'
import Navbar from '../components/layout/Navbar'

const HOME_IMAGE_ASSETS = [
  homeLogo,
  heroBg,
  whyBg,
  threatBg,
  programBg,
  ctaBg,
  programPlastic,
  threatEgg,
  threatTrash,
  threatTourism,
  threatIllegal,
  threatNet,
  threatBeach,
  searchIcon,
]
const HOME_LOADER_DURATION = 2600

let hasShownInitialHomeLoader = false

function preloadImage(source) {
  return new Promise((resolve) => {
    const image = new Image()

    image.onload = resolve
    image.onerror = resolve
    image.src = source

    if (image.complete) {
      resolve()
    }
  })
}

function preloadVideo(source) {
  return new Promise((resolve) => {
    const video = document.createElement('video')
    let settled = false

    const finish = () => {
      if (settled) {
        return
      }

      settled = true
      video.src = ''
      resolve()
    }

    video.preload = 'auto'
    video.muted = true
    video.playsInline = true
    video.addEventListener('loadeddata', finish, { once: true })
    video.addEventListener('error', finish, { once: true })
    video.src = source
    video.load()

    window.setTimeout(finish, 2800)
  })
}

function Home() {
  const [isReady, setIsReady] = useState(() => hasShownInitialHomeLoader)

  useEffect(() => {
    if (isReady) {
      return undefined
    }

    let isMounted = true
    const startedAt = performance.now()

    document.body.style.overflow = 'hidden'

    const prepareHome = async () => {
      await Promise.all([
        Promise.allSettled(HOME_IMAGE_ASSETS.map(preloadImage)),
        preloadVideo(turtleVideo),
      ])

      const elapsed = performance.now() - startedAt
      const minDuration = HOME_LOADER_DURATION

      if (elapsed < minDuration) {
        await new Promise((resolve) => window.setTimeout(resolve, minDuration - elapsed))
      }

      if (!isMounted) {
        return
      }

      hasShownInitialHomeLoader = true
      document.body.style.overflow = ''
      setIsReady(true)
    }

    prepareHome()

    return () => {
      isMounted = false
      document.body.style.overflow = ''
    }
  }, [isReady])

  if (!isReady) {
    return <HomeLoadingScreen />
  }

  return (
    <main className="overflow-hidden bg-[#03114f] text-white">
      <Navbar activeLabel="Beranda" />
      <HeroSection />
      <WhySection />
      <ThreatSection />
      <ProgramSection />
      <ContactSection />
    </main>
  )
}

export default Home
