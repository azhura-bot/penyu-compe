import { useEffect, useMemo, useState } from 'react'

import { useLanguage } from '../../context/LanguageContext'
import BubbleLayer from '../layout/BubbleLayer'
import Rectangle17Blend from '../layout/Rectangle17Blend'
import Reveal from '../motion/Reveal'
import { turtleBodyPartConfigs, turtleSpeciesConfigs } from '../../data/penyu'
import anatomyBg from '../../assets/images/BG-9.png'
import speciesBg from '../../assets/images/BG-6.png'
import heroBg from '../../assets/tentang/hero-bg.png'
import penyuBodyDiagram from '../../assets/penyu.png'
const TURTLE_SPRITE_SIZE = { width: 1536, height: 1024 }
const TURTLE_COMPOSITE_PARTS = {
  'tangan-kiri': {
    crop: { x: 35, y: 545, width: 500, height: 360 },
    placement: {
      left: '7%',
      top: '20%',
      width: '27%',
      transform: 'rotate(-30deg)',
      zIndex: 10,
    },
    hitboxStyle: {
      inset: '8% 18% 10% 18%',
      borderRadius: '999px',
    },
    labelStyle: {
      right: '100%',
      top: '50%',
      transform: 'translate(-0.75rem, -50%)',
    },
  },
  kepala: {
    crop: { x: 28, y: 110, width: 410, height: 300 },
    placement: {
      left: '33%',
      top: '1%',
      width: '25%',
      zIndex: 30,
    },
    hitboxStyle: {
      left: '42%',
      top: '20%',
      width: '60%',
      height: '68%',
      borderRadius: '50%',
    },
    labelStyle: {
      left: '50%',
      bottom: '100%',
      transform: 'translate(-50%, -0.6rem)',
    },
  },
  tempurung: {
    crop: { x: 500, y: 40, width: 550, height: 670 },
    placement: {
      left: '23%',
      top: '17%',
      width: '54%',
      zIndex: 20,
    },
    hitboxStyle: {
      left: '20%',
      top: '6%',
      width: '68%',
      height: '72%',
      borderRadius: '46% 46% 44% 44% / 34% 34% 52% 52%',
    },
    labelStyle: {
      left: '50%',
      top: '100%',
      transform: 'translate(-50%, 0.8rem)',
    },
  },
  'tangan-kanan': {
    crop: { x: 1065, y: 75, width: 430, height: 320 },
    placement: {
      right: '4%',
      top: '20%',
      width: '27%',
      transform: 'rotate(30deg)',
      zIndex: 10,
    },
    hitboxStyle: {
      inset: '8% 18% 10% 18%',
      borderRadius: '999px',
    },
    labelStyle: {
      left: '100%',
      top: '50%',
      transform: 'translate(0.75rem, -50%)',
    },
  },
  'kaki-kiri': {
    crop: { x: 600, y: 735, width: 340, height: 245 },
    placement: {
      left: '26%',
      bottom: '24%',
      width: '16%',
      transform: 'rotate(-10deg)',
      zIndex: 12,
    },
    hitboxStyle: {
      inset: '8% 12% 10% 12%',
      borderRadius: '999px',
    },
    labelStyle: {
      left: '50%',
      top: '100%',
      transform: 'translate(-50%, 0.6rem)',
    },
  },
  'kaki-kanan': {
    crop: { x: 1060, y: 740, width: 340, height: 245 },
    placement: {
      right: '23%',
      bottom: '23%',
      width: '16%',
      transform: 'rotate(10deg)',
      zIndex: 12,
    },
    hitboxStyle: {
      inset: '8% 12% 10% 12%',
      borderRadius: '999px',
    },
    labelStyle: {
      left: '50%',
      top: '100%',
      transform: 'translate(-50%, 0.6rem)',
    },
  },
}

function AdaptiveBackground({ src, alt = '', objectPosition = 'center' }) {
  return (
    <img
      src={src}
      alt={alt}
      aria-hidden="true"
      className="absolute inset-x-0 -top-24 bottom-0 h-[calc(100%+6rem)] w-full object-cover"
      style={{ objectPosition }}
    />
  )
}

function SeamMist({ position = 'top' }) {
  const positionClass = position === 'top' ? 'top-0 -translate-y-[52%]' : 'bottom-0 translate-y-[52%]'
  const maskStyle = {
    WebkitMaskImage:
      'radial-gradient(ellipse at center, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.88) 34%, rgba(0,0,0,0.46) 66%, transparent 86%)',
    maskImage:
      'radial-gradient(ellipse at center, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.88) 34%, rgba(0,0,0,0.46) 66%, transparent 86%)',
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute left-1/2 z-0 h-[18rem] w-[min(175%,124rem)] max-w-none -translate-x-1/2 ${positionClass}`}
      style={maskStyle}
    >
      <div className="absolute inset-x-[-16%] inset-y-[-26%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(3,17,79,0.7)_0%,rgba(5,26,99,0.4)_36%,rgba(6,40,122,0.16)_58%,rgba(6,40,122,0)_82%)] blur-[108px]" />
      <div className="absolute inset-x-[8%] top-1/2 h-28 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(104,186,255,0.12),rgba(104,186,255,0.04)_42%,rgba(104,186,255,0)_78%)] blur-[34px]" />
    </div>
  )
}

function InteractiveTurtlePart({ part, isActive, onActivate, onDeactivate, onSelect }) {
  const config = TURTLE_COMPOSITE_PARTS[part.id]

  if (!config) {
    return null
  }

  const { crop, placement, hitboxStyle, labelStyle } = config

  return (
    <div
      className="pointer-events-none absolute"
      style={{
        ...placement,
        aspectRatio: `${crop.width} / ${crop.height}`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src={penyuBodyDiagram}
          alt=""
          aria-hidden="true"
          className="absolute max-w-none select-none"
          style={{
            width: `${(TURTLE_SPRITE_SIZE.width / crop.width) * 100}%`,
            height: `${(TURTLE_SPRITE_SIZE.height / crop.height) * 100}%`,
            left: `-${(crop.x / crop.width) * 100}%`,
            top: `-${(crop.y / crop.height) * 100}%`,
            filter: 'drop-shadow(0 16px 28px rgba(0,0,0,0.28))',
          }}
        />
      </div>

      <button
        type="button"
        data-cursor-target
        data-cursor-label={part.objectLabel}
        aria-label={part.title}
        className={`pointer-events-auto absolute border transition duration-300 ${
          isActive
            ? 'border-[#ffe17c]/86 bg-[#ffd900]/14 shadow-[0_0_0_1px_rgba(255,225,124,0.3),0_0_42px_rgba(255,217,0,0.18)]'
            : 'border-transparent bg-transparent hover:border-[#ffe17c]/44 hover:bg-[#ffd900]/8'
        }`}
        style={hitboxStyle}
        onPointerEnter={onActivate}
        onPointerLeave={onDeactivate}
        onFocus={onActivate}
        onBlur={onDeactivate}
        onClick={onSelect}
      >
        <span className="sr-only">{part.title}</span>
      </button>

      <div
        className={`pointer-events-none absolute z-30 inline-flex min-w-[7.5rem] items-center justify-center rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.08em] text-white transition-all duration-300 sm:min-w-[9rem] sm:text-sm ${
          isActive
            ? 'translate-y-0 border-[#ffe17c]/56 bg-[rgba(96,58,0,0.84)] opacity-100 shadow-[0_18px_40px_rgba(255,184,0,0.22)]'
            : 'translate-y-1 border-white/14 bg-[rgba(255,255,255,0.08)] opacity-0'
        }`}
        style={labelStyle}
      >
        {part.shortLabel}
      </div>
    </div>
  )
}

function DialogTurtlePreview({ activePartId }) {
  const config = TURTLE_COMPOSITE_PARTS[activePartId]

  if (!config) {
    return null
  }

  const { crop } = config
  const previewStyle =
    activePartId === 'tempurung'
      ? { width: '58%', left: '50%', top: '8%', transform: 'translateX(-50%)' }
      : activePartId === 'kepala'
        ? { width: '44%', left: '50%', top: '16%', transform: 'translateX(-50%)' }
        : activePartId.includes('tangan')
          ? {
              width: '34%',
              left: '50%',
              top: '16%',
              transform: `translateX(-50%) ${activePartId.endsWith('kiri') ? 'rotate(-20deg)' : 'rotate(20deg)'}`,
            }
          : {
              width: '28%',
              left: '50%',
              top: '20%',
              transform: `translateX(-50%) ${activePartId.endsWith('kiri') ? 'rotate(-10deg)' : 'rotate(10deg)'}`,
            }

  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-[22rem] sm:max-w-[24rem]">
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(255,217,0,0.12),rgba(255,217,0,0)_46%)]" />
      <div className="pointer-events-none absolute inset-x-[8%] inset-y-[8%] rounded-[2rem] border border-[#8fdcff]/14 bg-[linear-gradient(180deg,rgba(4,15,64,0.34),rgba(2,10,41,0.18))]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffd900]/10 blur-3xl" />

      <div
        className="pointer-events-none absolute transition duration-500"
        style={{
          ...previewStyle,
          aspectRatio: `${crop.width} / ${crop.height}`,
          filter: 'drop-shadow(0 0 18px rgba(255,217,0,0.34)) drop-shadow(0 16px 28px rgba(0,0,0,0.28))',
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={penyuBodyDiagram}
            alt=""
            aria-hidden="true"
            className="absolute max-w-none select-none"
            style={{
              width: `${(TURTLE_SPRITE_SIZE.width / crop.width) * 100}%`,
              height: `${(TURTLE_SPRITE_SIZE.height / crop.height) * 100}%`,
              left: `-${(crop.x / crop.width) * 100}%`,
              top: `-${(crop.y / crop.height) * 100}%`,
            }}
          />
        </div>

        <div
          className="absolute border-2 border-[#ffe17c]/90 bg-[#ffd900]/8 shadow-[0_0_0_1px_rgba(255,225,124,0.3),0_0_26px_rgba(255,217,0,0.22)]"
          style={config.hitboxStyle}
        />
      </div>
    </div>
  )
}

function AnatomyDialog({ part, onClose, copy }) {
  useEffect(() => {
    if (!part) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, part])

  if (!part) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      <button
        type="button"
        className="absolute inset-0 bg-[rgba(2,9,35,0.78)] backdrop-blur-md"
        aria-label={copy.closeDialog}
        onClick={onClose}
      />
      <div className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-[#8cd9ff]/26 bg-[linear-gradient(145deg,rgba(5,23,87,0.96),rgba(3,15,58,0.94)_54%,rgba(2,10,39,0.98)_100%)] p-6 shadow-[0_28px_70px_rgba(0,0,0,0.46)] sm:p-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(110,202,255,0.32),rgba(110,202,255,0)_72%)]" />
        <div className="pointer-events-none absolute -right-10 top-8 h-32 w-32 rounded-full bg-[#7dd9ff]/14 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-[#ffd46e]/10 blur-3xl" />

        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8fdcff]/84">{copy.dialogLabel}</p>
              <h3 className="mt-3 font-display text-3xl text-white sm:text-4xl">{part.title}</h3>
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/16 bg-white/8 text-lg text-white/82 transition hover:bg-white/14 hover:text-white"
              aria-label={copy.closeButton}
              onClick={onClose}
            >
              x
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-[#9edfff]/28 bg-[#0a2a7d]/52 px-4 py-2 text-sm font-semibold text-[#dff8ff]">
              {copy.selectedObject}: {part.objectLabel}
            </span>
            <span className="rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm text-white/78">
              {copy.previewLabel}
            </span>
          </div>

          <div className="mt-6 overflow-hidden rounded-[1.7rem] border border-[#9edfff]/20 bg-[linear-gradient(180deg,rgba(2,11,44,0.84),rgba(3,16,62,0.48))] px-4 py-5 sm:px-6 sm:py-6">
            <DialogTurtlePreview activePartId={part.id} />
          </div>

          <p className="mt-6 text-sm leading-7 text-white/86 sm:text-base sm:leading-8">{part.description}</p>
        </div>
      </div>
    </div>
  )
}

function SpeciesCard({ species, index }) {
  const isEven = index % 2 === 0
  const motionClass = isEven ? 'turtle-float-right' : 'turtle-float-left'
  const turtleOffsetClass =
    species.id === 'lekang'
      ? isEven
        ? 'right-[-2.6rem] sm:right-[-3rem] lg:right-[-3.4rem]'
        : 'left-[-0.6rem] sm:left-[-0.9rem] lg:left-[-1rem]'
      : ''
  const turtleImageShiftClass =
    species.id === 'lekang' ? 'translate-x-8 sm:translate-x-10 lg:translate-x-12' : ''
  const turtleSizeClass = species.id === 'lekang' ? 'scale-[1.08] sm:scale-[1.1]' : ''

  return (
    <Reveal
      variant={isEven ? 'left' : 'right'}
      delay={index * 90}
      className="group relative"
    >
      <div className={`relative min-h-[16.75rem] sm:min-h-[18.75rem] ${isEven ? 'lg:pr-32' : 'lg:pl-32'}`}>
        <div
          className={`relative overflow-hidden rounded-[1.55rem] border border-white/28 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.06)_38%,rgba(115,184,255,0.14)_100%)] shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-md ${
            isEven
              ? 'mr-2 px-5 py-6 pr-[50%] sm:mr-3 sm:px-6 sm:py-7 sm:pr-[44%] lg:pr-[18%]'
              : 'ml-2 px-5 py-6 pl-[50%] sm:ml-3 sm:px-6 sm:py-7 sm:pl-[44%] lg:pl-[18%]'
          }`}
        >
          <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${species.accent} opacity-90`} />
          <div className={`relative z-20 text-left ${isEven ? '' : 'lg:text-right'}`}>
            <h3 className="font-display text-[1.62rem] text-[#ffd900] sm:text-[1.95rem]">{species.title}</h3>
            <p className="mt-3 text-[0.98rem] leading-7 text-white/84 sm:text-[1.08rem] sm:leading-8">
              {species.description}
            </p>
          </div>
        </div>

        <div
          className={`pointer-events-none absolute z-10 ${
            isEven
              ? 'right-[-4rem] top-[-2.9rem] w-[20rem] sm:right-[-4.4rem] sm:top-[-3.7rem] sm:w-[24rem] lg:right-[-4.8rem] lg:top-[-4.2rem] lg:w-[28rem]'
              : 'left-[-4rem] top-[-2.9rem] w-[20rem] sm:left-[-4.4rem] sm:top-[-3.7rem] sm:w-[24rem] lg:left-[-4.8rem] lg:top-[-4.2rem] lg:w-[28rem]'
          } ${turtleOffsetClass}`}
        >
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${species.accent} opacity-18 blur-3xl`} />
          <div className={turtleImageShiftClass}>
            <img
              src={species.image}
              alt={species.title}
              className={`relative h-auto w-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.32)] ${motionClass} ${turtleSizeClass}`}
            />
          </div>
        </div>
      </div>
    </Reveal>
  )
}

function PenyuSection() {
  const [hoveredPartId, setHoveredPartId] = useState(null)
  const [selectedPartId, setSelectedPartId] = useState(null)
  const { copy } = useLanguage()
  const localizedBodyParts = useMemo(
    () =>
      turtleBodyPartConfigs.map((config) => ({
        ...config,
        ...copy.turtle.anatomy.bodyParts.find((part) => part.id === config.id),
      })),
    [copy],
  )
  const localizedSpecies = useMemo(
    () =>
      turtleSpeciesConfigs.map((config) => ({
        ...config,
        ...copy.turtle.species.items.find((species) => species.id === config.id),
      })),
    [copy],
  )

  const activePartId = hoveredPartId ?? selectedPartId
  const selectedPart = useMemo(
    () => localizedBodyParts.find((part) => part.id === selectedPartId) ?? null,
    [localizedBodyParts, selectedPartId],
  )

  return (
    <>
      <section id="penyu-section" className="relative isolate flex min-h-[44rem] items-end overflow-visible pt-28 sm:pt-32 lg:pt-36">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,13,109,0.7)_0%,rgba(0,13,109,0.64)_42%,rgba(3,17,79,0.78)_100%)]" />
        <BubbleLayer className="z-10 opacity-90" density="dense" />
        <Rectangle17Blend position="bottom" />

        <div className="relative z-20 mx-auto w-full max-w-[92rem] px-6 pb-20 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-5xl">
            <Reveal
              as="h1"
              variant="zoom"
              className="font-display text-4xl leading-tight text-shadow-[0_4px_18px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl"
            >
              {copy.turtle.hero.titleBefore}
              <span className="text-[#ffd900]">{copy.turtle.hero.titleHighlight}</span>
              {copy.turtle.hero.titleAfter}
            </Reveal>
            <Reveal
              as="p"
              delay={140}
              className="mt-5 max-w-5xl text-sm leading-7 text-white/92 text-shadow-[0_4px_24px_rgba(0,0,0,0.75)] sm:text-base lg:text-[1.3rem] lg:leading-9"
            >
              {copy.turtle.hero.description}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-overlap relative isolate overflow-hidden pb-20 pt-44 sm:pb-24 sm:pt-48 lg:pb-28 lg:pt-52">
        <AdaptiveBackground src={anatomyBg} objectPosition="center 56%" />
        <div className="absolute inset-x-0 -top-24 bottom-0 h-[calc(100%+6rem)] bg-[linear-gradient(180deg,rgba(4,18,88,0.82)_0%,rgba(5,21,88,0.68)_26%,rgba(3,15,62,0.9)_100%)]" />
        <div className="absolute inset-x-0 -top-24 bottom-0 h-[calc(100%+6rem)] bg-[radial-gradient(circle_at_center,rgba(125,217,255,0.14),rgba(125,217,255,0)_42%)]" />
        <BubbleLayer className="z-10 opacity-100" density="dense" />
        <SeamMist position="top" />
        <SeamMist position="bottom" />
        <Rectangle17Blend position="top" />
        <Rectangle17Blend position="bottom" />

        <div className="relative z-20 mx-auto w-full max-w-[92rem] px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="rounded-[2.2rem] border border-[#6fd7ff]/26 bg-[linear-gradient(145deg,rgba(7,31,112,0.46),rgba(4,16,70,0.58)_48%,rgba(3,11,44,0.72)_100%)] p-4 shadow-[0_28px_80px_rgba(1,10,48,0.38)] backdrop-blur-xl sm:p-6 lg:p-8">
            <Reveal variant="up" className="text-center">
              <h3 className="font-display text-2xl text-white sm:text-3xl">
                {copy.turtle.anatomy.titleBefore}<span className="text-[#ffd900]">{copy.turtle.anatomy.titleHighlight}</span>
              </h3>
              <p className="mt-3 text-sm text-white/72 sm:text-base">
                {copy.turtle.anatomy.helper}
              </p>
            </Reveal>

            <div className="relative mx-auto mt-10 w-full max-w-[36rem]">
              <div className="relative mx-auto aspect-[5/4] w-full max-w-[28rem] overflow-visible rounded-[2rem] border border-[#9edfff]/24 shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] bg-[radial-gradient(circle_at_top,rgba(126,212,255,0.1),rgba(126,212,255,0)_28%),linear-gradient(180deg,rgba(7,25,92,0.46),rgba(5,15,58,0.38)_35%,rgba(5,18,66,0.52)_100%)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,217,0,0.08),rgba(255,217,0,0)_44%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_20%,rgba(0,0,0,0.14)_100%)]" />
                  <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(158,223,255,0.68),rgba(255,255,255,0))]" />
                </div>
                <div className="turtle-composite-float absolute left-[10%] top-[9%] h-[100%] w-[80%]">
                  {localizedBodyParts.map((part) => (
                    <InteractiveTurtlePart
                      key={part.id}
                      part={part}
                      isActive={activePartId === part.id}
                      onActivate={() => setHoveredPartId(part.id)}
                      onDeactivate={() => setHoveredPartId(null)}
                      onSelect={() => setSelectedPartId(part.id)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-5 text-center text-xs text-white/62 sm:text-sm">
              {copy.turtle.anatomy.footer}
            </p>
          </div>
        </div>
      </section>

      <section className="section-overlap relative isolate overflow-hidden pb-20 pt-44 sm:pb-24 sm:pt-48 lg:pb-28 lg:pt-52">
        <AdaptiveBackground src={speciesBg} objectPosition="center 50%" />
        <div className="absolute inset-x-0 -top-24 bottom-0 h-[calc(100%+6rem)] bg-[linear-gradient(180deg,rgba(4,18,88,0.76)_0%,rgba(5,23,96,0.68)_22%,rgba(3,16,74,0.88)_56%,rgba(2,10,40,0.96)_100%)]" />
        <div className="absolute inset-x-0 -top-24 bottom-0 h-[calc(100%+6rem)] bg-[radial-gradient(circle_at_top,rgba(125,217,255,0.14),rgba(125,217,255,0)_28%),radial-gradient(circle_at_bottom,rgba(125,217,255,0.08),rgba(125,217,255,0)_36%)]" />
        <BubbleLayer className="z-10 opacity-100" density="dense" />
        <SeamMist position="top" />
        <Rectangle17Blend position="top" />

        <div className="relative z-20 mx-auto w-full max-w-[92rem] px-6 sm:px-8 lg:px-12 xl:px-16">
          <Reveal variant="up" className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8fdcff]/82">{copy.turtle.species.kicker}</p>
            <h3 className="mt-4 font-display text-3xl text-white sm:text-4xl lg:text-5xl">
              {copy.turtle.species.titleBefore}<span className="text-[#ffd900]">{copy.turtle.species.titleHighlight}</span>
            </h3>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/78 sm:text-base">
              {copy.turtle.species.description}
            </p>
          </Reveal>

          <div className="mx-auto mt-10 max-w-[72rem] space-y-2 sm:space-y-3">
            {localizedSpecies.map((species, index) => (
              <SpeciesCard key={species.id} species={species} index={index} />
            ))}
          </div>
        </div>
      </section>

      <AnatomyDialog part={selectedPart} onClose={() => setSelectedPartId(null)} copy={copy.turtle.anatomy} />
    </>
  )
}

export default PenyuSection
