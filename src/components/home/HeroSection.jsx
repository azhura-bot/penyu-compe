import { useEffect, useRef, useState } from 'react'

import seaTurtleVideo from '../../assets/homepage/sea-turtle.webm'
import BubbleLayer from '../layout/BubbleLayer'
import Reveal from '../motion/Reveal'

function HeroSection({ prioritizeVideo = false, onVideoReady, onVideoError }) {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(prioritizeVideo)
  const hasNotifiedReadyRef = useRef(false)

  useEffect(() => {
    if (prioritizeVideo) {
      return undefined
    }

    let timeoutId = 0
    let idleCallbackId = 0

    const loadVideo = () => setShouldLoadVideo(true)

    if ('requestIdleCallback' in window) {
      idleCallbackId = window.requestIdleCallback(loadVideo, { timeout: 1600 })
    } else {
      timeoutId = window.setTimeout(loadVideo, 900)
    }

    return () => {
      if (idleCallbackId) {
        window.cancelIdleCallback(idleCallbackId)
      }

      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [prioritizeVideo])

  const handleVideoReady = () => {
    if (hasNotifiedReadyRef.current) {
      return
    }

    hasNotifiedReadyRef.current = true
    onVideoReady?.()
  }

  const handleVideoError = () => {
    onVideoError?.()
  }

  return (
    <section
      id="beranda"
      className="relative isolate min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#02103f]" />

      {shouldLoadVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload={prioritizeVideo ? 'auto' : 'none'}
          className="absolute inset-0 h-full w-full object-cover"
          onLoadedData={handleVideoReady}
          onCanPlay={handleVideoReady}
          onError={handleVideoError}
        >
          <source src={seaTurtleVideo} type="video/webm" />
        </video>
      )}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,13,109,0.28)_0%,rgba(0,13,109,0.5)_55%,rgba(3,17,79,0.94)_100%)]" />
      <BubbleLayer className="z-10 opacity-100" density="light" />
      <div className="pointer-events-none absolute inset-x-[-6%] bottom-[-2.5rem] h-40 w-[112%] bg-[linear-gradient(180deg,rgba(3,17,79,0)_0%,rgba(3,17,79,0.36)_30%,rgba(3,17,79,0.82)_72%,rgba(3,17,79,0.98)_100%)] blur-[44px]" />
      <div className="pointer-events-none absolute inset-x-[-10%] bottom-[-3.25rem] h-28 w-[120%] bg-[radial-gradient(ellipse_at_center,rgba(0,13,109,0.74)_0%,rgba(0,13,109,0.46)_42%,rgba(0,13,109,0.12)_68%,rgba(0,13,109,0)_84%)] blur-[52px]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full py-12 md:py-16 lg:py-20">
          <div className="max-w-2xl">
            <Reveal
              as="h1"
              variant="zoom"
              distance="56px"
              className="text-4xl font-bold leading-tight text-white [text-shadow:0_4px_8px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl"
            >
              Selamatkan Penyu, Selamatkan Masa Depan Laut
            </Reveal>

            <Reveal
              as="p"
              delay={140}
              distance="46px"
              className="mt-4 text-sm leading-relaxed text-white/90 [text-shadow:0_4px_24px_rgba(0,0,0,0.8)] sm:mt-6 sm:text-base lg:text-lg"
            >
              Penyu sudah menjelajahi lautan sejak jutaan tahun lalu, jauh 
              sebelum manusia mengenal peradaban. Mereka terus kembali 
              ke pantai yang sama untuk bertelur, menjaga siklus hidup yang 
              luar biasa dari generasi ke generasi.
            </Reveal>

            <Reveal
              as="a"
              href="#tentang-penyu"
              delay={260}
              variant="pop"
              distance="34px"
              className="group mt-6 inline-flex items-center gap-3 rounded-full border-2 border-[#ffd900] px-6 py-3 text-sm font-bold text-[#ffd900] shadow-[0_15px_24px_rgba(0,0,0,0.45)] transition-all hover:border-[#dcbf00] hover:bg-[#dcbf00] hover:text-[#03114f] sm:mt-8 sm:text-base"
            >
              <span>Tentang Penyu</span>
              <span className="text-[#ffd900] transition group-hover:text-white group-hover:translate-x-1">
                <svg
                  viewBox="0 0 36.1426 32.1422"
                  className="h-4 w-4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16.0711H34M34 16.0711L18.7 1.07111M34 16.0711L18.7 31.0711"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </span>
            </Reveal>
          </div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection
