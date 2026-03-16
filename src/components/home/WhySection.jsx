import { useEffect, useRef, useState } from 'react'

import turtleSwim from '../../assets/homepage/penyu-swim-loop.webm'
import whyBg from '../../assets/homepage/why-bg.jpg'
import BubbleLayer from '../layout/BubbleLayer'
import Rectangle17Blend from '../layout/Rectangle17Blend'
import Reveal from '../motion/Reveal'

function TurtleLoopVideo() {
  const [isReady, setIsReady] = useState(false)
  const canvasRef = useRef(null)
  const sourceVideoRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const sourceVideo = sourceVideoRef.current

    if (!canvas || !sourceVideo) {
      return undefined
    }

    const context = canvas.getContext('2d')
    let animationFrameId = 0
    let isMounted = true

    const waitForPlayback = () =>
      new Promise((resolve) => {
        if (sourceVideo.readyState >= 2) {
          resolve()
          return
        }

        sourceVideo.addEventListener('canplay', resolve, { once: true })
      })

    const drawFrame = () => {
      if (!isMounted || sourceVideo.paused || sourceVideo.ended) {
        animationFrameId = requestAnimationFrame(drawFrame)
        return
      }

      context.clearRect(0, 0, canvas.width, canvas.height)
      context.drawImage(sourceVideo, 0, 0, canvas.width, canvas.height)

      const frame = context.getImageData(0, 0, canvas.width, canvas.height)
      const pixels = frame.data

      for (let index = 0; index < pixels.length; index += 4) {
        const red = pixels[index]
        const green = pixels[index + 1]
        const blue = pixels[index + 2]
        const maxChannel = Math.max(red, green, blue)

        if (maxChannel < 26) {
          pixels[index + 3] = 0
        } else if (maxChannel < 48) {
          pixels[index + 3] = Math.round(((maxChannel - 26) / 22) * pixels[index + 3])
        }
      }

      context.putImageData(frame, 0, 0)
      animationFrameId = requestAnimationFrame(drawFrame)
    }

    const startCanvasLoop = async () => {
      await waitForPlayback()

      if (!isMounted) {
        return
      }

      canvas.width = sourceVideo.videoWidth
      canvas.height = sourceVideo.videoHeight

      await sourceVideo.play().catch(() => {})
      setIsReady(true)
      animationFrameId = requestAnimationFrame(drawFrame)
    }

    startCanvasLoop()

    return () => {
      isMounted = false

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <>
      <video
        ref={sourceVideoRef}
        src={turtleSwim}
        preload="metadata"
        autoPlay
        loop
        muted
        playsInline
        className="hidden"
      />

      {!isReady && (
        <video
          src={turtleSwim}
          preload="metadata"
          autoPlay
          loop
          muted
          playsInline
          className="block h-auto w-full object-contain"
        >
          Browser Anda tidak mendukung video HTML5.
        </video>
      )}

      <canvas
        ref={canvasRef}
        className={`h-auto w-full object-contain ${isReady ? 'block' : 'hidden'}`}
      />
    </>
  )
}

function WhySection() {
  const sectionRef = useRef(null)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section || shouldLoadVideo) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return
        }

        setShouldLoadVideo(true)
        observer.disconnect()
      },
      {
        rootMargin: '240px 0px',
        threshold: 0.01,
      },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [shouldLoadVideo])

  return (
    <section
      id="tentang-penyu"
      ref={sectionRef}
      className="section-overlap relative isolate flex min-h-screen items-center overflow-visible pb-20 pt-44 sm:pb-24 sm:pt-48 lg:pb-28 lg:pt-52"
    >
      <img
        src={whyBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,17,79,0.72)_0%,rgba(3,17,79,0.42)_18%,rgba(3,17,79,0.64)_100%)]" />
      <BubbleLayer className="z-10 opacity-85" density="dense" />
      <Rectangle17Blend position="top" />
      <Rectangle17Blend position="bottom" />

      <div className="relative z-20 mx-auto grid w-full max-w-[92rem] gap-10 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-18 lg:px-12 xl:px-16">
        <div className="order-1 max-w-2xl">
          <Reveal
            as="h2"
            variant="left"
            className="font-display text-3xl leading-tight text-white text-shadow-[0_4px_12px_rgba(0,0,0,0.55)] sm:text-4xl lg:text-5xl"
          >
            Mengapa <span className="text-[#ffd900]">Penyu Penting?</span>
          </Reveal>

          <Reveal
            delay={140}
            variant="up"
            className="mt-8 hidden max-w-xl rounded-[1.7rem] border border-white/65 bg-white/16 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-md lg:block sm:p-8"
          >
            <p className="text-sm leading-7 text-white/92 sm:text-base lg:text-lg">
              Penyu bukan sekadar hewan laut biasa. Mereka punya peran penting menjaga keseimbangan laut, dari
              terumbu karang sampai padang lamun. Kalau penyu hilang, kehidupan di laut juga bisa ikut terganggu.
              Indonesia termasuk rumah penting bagi penyu dunia. Banyak pantai di negeri ini jadi tempat mereka
              kembali setiap tahun untuk bertelur.
            </p>
          </Reveal>
        </div>

        <Reveal variant="right" delay={200} className="order-2 relative lg:order-3">
          <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffd900]/15 blur-3xl sm:h-60 sm:w-60" />
          <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[24rem] lg:max-w-[27rem]">
            {shouldLoadVideo ? <TurtleLoopVideo /> : <div aria-hidden="true" className="aspect-square w-full" />}
          </div>
        </Reveal>

        <div className="order-3 lg:order-2 lg:hidden">
          <Reveal
            delay={140}
            variant="up"
            className="max-w-xl rounded-[1.7rem] border border-white/65 bg-white/16 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-8"
          >
            <p className="text-sm leading-7 text-white/92 sm:text-base lg:text-lg">
              Penyu bukan sekadar hewan laut biasa. Mereka punya peran penting menjaga keseimbangan laut, dari
              terumbu karang sampai padang lamun. Kalau penyu hilang, kehidupan di laut juga bisa ikut terganggu.
              Indonesia termasuk rumah penting bagi penyu dunia. Banyak pantai di negeri ini jadi tempat mereka
              kembali setiap tahun untuk bertelur.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default WhySection
