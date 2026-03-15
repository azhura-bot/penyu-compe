import docsBg from '../../assets/tentang/docs-bg.png'
import { documentationImages } from '../../data/tentang'
import BubbleLayer from '../layout/BubbleLayer'
import Rectangle17Blend from '../layout/Rectangle17Blend'
import Reveal from '../motion/Reveal'

function DocumentationCard({ image, index }) {
  const focusX = image.focusX ?? '50%'
  const focusY = image.focusY ?? '50%'

  return (
    <Reveal
      as="article"
      variant={index % 2 === 0 ? 'tilt-left' : 'tilt-right'}
      delay={index * 95}
      distance="28px"
      className="group relative w-full max-w-[17rem] overflow-hidden rounded-[1rem] border-2 border-white/75 shadow-[0_16px_32px_rgba(0,0,0,0.32)] transition duration-400 hover:-translate-y-1.5 hover:shadow-[0_24px_40px_rgba(0,0,0,0.42)] sm:max-w-[18rem] lg:max-w-[19rem]"
    >
      <div className="relative aspect-square overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.02)_34%,rgba(255,255,255,0)_62%)] opacity-0 transition duration-500 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-y-0 left-[-42%] z-10 w-[38%] rotate-[14deg] bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.24),rgba(255,255,255,0))] opacity-0 blur-md transition duration-700 group-hover:left-[108%] group-hover:opacity-100" />
        <img
          src={image.src}
          alt={image.alt ?? `Dokumentasi ${index + 1}`}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out group-hover:brightness-[1.06] group-hover:saturate-[1.05]"
          style={{
            objectPosition: `${focusX} ${focusY}`,
            transformOrigin: `${focusX} ${focusY}`,
            transform: `scale(${image.zoom ?? 1.12})`,
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(3,17,79,0)_0%,rgba(3,17,79,0.08)_46%,rgba(3,17,79,0.22)_100%)] opacity-70 transition duration-500 group-hover:opacity-100" />
      </div>
    </Reveal>
  )
}

function DocumentationSection() {
  return (
    <section className="section-overlap relative isolate overflow-visible pb-20 pt-44 sm:pb-24 sm:pt-48 lg:pb-28 lg:pt-52">
      <img
        src={docsBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,13,109,0.72)_0%,rgba(0,13,109,0.56)_28%,rgba(3,17,79,0.84)_100%)]" />
      <BubbleLayer className="z-10 opacity-85" density="dense" />
      <Rectangle17Blend position="top" />

      <div className="relative z-20 mx-auto w-full max-w-[92rem] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center">
          <Reveal
            as="h2"
            variant="up"
            className="font-display text-3xl text-shadow-[0_4px_14px_rgba(0,0,0,0.5)] sm:text-4xl lg:text-5xl"
          >
            <span className="text-[#ffd900]">Dokumentasi </span>
            <span className="text-white">Kami</span>
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            className="mx-auto mt-5 max-w-5xl text-sm leading-7 text-white/95 text-shadow-[0_4px_20px_rgba(0,0,0,0.7)] sm:text-base lg:text-lg"
          >
            Dokumentasi ini menampilkan berbagai kegiatan kami dalam menjaga kebersihan pantai dan melindungi penyu
            agar tetap dapat hidup serta berkembang dengan aman.
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-[58rem] place-items-center gap-y-8 sm:grid-cols-2 lg:max-w-[60rem] lg:gap-y-10 xl:max-w-[62rem] xl:grid-cols-3">
          {documentationImages.map((image, index) => (
            <DocumentationCard key={image.src} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DocumentationSection
