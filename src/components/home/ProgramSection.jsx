import programBg from '../../assets/homepage/program-bg.jpg'
import programSprite from '../../assets/homepage/program-plastic.jpg'
import { programCards } from '../../data/home'
import BubbleLayer from '../layout/BubbleLayer'
import Rectangle17Blend from '../layout/Rectangle17Blend'
import Reveal from '../motion/Reveal'

function ProgramCard({ title, position, index }) {
  return (
    <Reveal
      as="article"
      variant={index % 2 === 0 ? 'tilt-left' : 'tilt-right'}
      delay={index * 95}
      distance="30px"
      className="group relative w-full max-w-[18.5rem] cursor-pointer overflow-hidden rounded-[0.2rem] shadow-[0_16px_32px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_44px_rgba(0,0,0,0.34)] sm:max-w-[19.5rem] lg:max-w-[20.5rem]"
    >
      <div
        className="absolute inset-x-0 -top-10 bottom-0 brightness-[1.04] saturate-[1.03] transition duration-500 group-hover:scale-[1.03] group-hover:brightness-[1.08] group-hover:saturate-[1.06]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.01) 0%, rgba(10, 14, 24, 0.01) 54%, rgba(10, 14, 24, 0.12) 78%, rgba(10, 14, 24, 0.3) 100%), url(${programSprite})`,
          backgroundPosition: position,
          backgroundSize: '318% 108%',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="aspect-[0.68]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,29,118,0.58)_0%,rgba(5,29,118,0.38)_34%,rgba(5,29,118,0.16)_62%,rgba(3,17,79,0.04)_100%)] transition-all duration-500 group-hover:bg-[linear-gradient(180deg,rgba(5,29,118,0.42)_0%,rgba(5,29,118,0.24)_34%,rgba(5,29,118,0.08)_62%,rgba(3,17,79,0.02)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[6.25rem] bg-[linear-gradient(180deg,rgba(3,17,79,0)_0%,rgba(3,17,79,0.08)_32%,rgba(3,17,79,0.28)_72%,rgba(3,17,79,0.48)_100%)] transition-all duration-500 group-hover:h-[4.75rem] group-hover:bg-[linear-gradient(180deg,rgba(3,17,79,0)_0%,rgba(3,17,79,0.05)_30%,rgba(3,17,79,0.16)_68%,rgba(3,17,79,0.28)_100%)]" />
      <div className="absolute inset-x-4 bottom-10 text-center text-[0.95rem] font-bold leading-[1.18] text-white text-shadow-[0_4px_10px_rgba(0,0,0,0.78)] transition duration-500 group-hover:bottom-8 sm:text-[1rem] lg:text-[1.08rem]">
        <p>{title[0]}</p>
        <p>{title[1]}</p>
      </div>
    </Reveal>
  )
}

function ProgramSection() {
  return (
    <section id="program" className="section-overlap relative isolate flex min-h-screen items-center overflow-visible pb-20 pt-44 sm:pb-24 sm:pt-48 lg:pb-28 lg:pt-52">
      <img
        src={programBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,13,109,0.86)_0%,rgba(0,13,109,0.54)_24%,rgba(3,17,79,0.8)_100%)]" />
      <BubbleLayer className="z-10 opacity-85" density="dense" />
      <Rectangle17Blend position="top" />
      <Rectangle17Blend position="bottom" />

      <div className="relative z-20 mx-auto w-full max-w-[92rem] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="w-full">
          <Reveal
            as="h2"
            variant="left"
            className="font-display text-3xl leading-tight text-white text-shadow-[0_4px_12px_rgba(0,0,0,0.55)] sm:text-4xl lg:text-5xl"
          >
            <span className="text-[#ffd900]">Program </span>Kami
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            className="mt-5 w-full max-w-none text-sm leading-7 text-white/90 text-shadow-[0_4px_24px_rgba(0,0,0,0.75)] sm:text-base lg:text-lg"
          >
            Setiap langkah kecil yang di lakukan bisa memberi dampak besar bagi laut. Program dibuat untuk melindungi penyu dari hulu ke hilir mulai dari sarang di pantai hingga kehidupan mereka di lautan.
          </Reveal>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6">
          {programCards.map((card, index) => (
            <ProgramCard key={card.title.join('-')} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramSection
