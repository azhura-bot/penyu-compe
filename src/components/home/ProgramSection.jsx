import programBg from '../../assets/homepage/program-bg.jpg'
import programSprite from '../../assets/homepage/program-plastic.jpg'
import { programCards } from '../../data/home'
import Rectangle17Blend from '../layout/Rectangle17Blend'

function ProgramCard({ title, position }) {
  return (
    <article
      className="group relative w-full max-w-[17rem] cursor-pointer overflow-hidden rounded-[0.2rem] border border-white/10 shadow-[0_16px_32px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_44px_rgba(0,0,0,0.34)] sm:max-w-[18rem] lg:max-w-[19rem]"
    >
      <div
        className="absolute inset-x-0 -top-14 bottom-0 brightness-[1.12] saturate-[1.08] transition duration-500 group-hover:scale-[1.03] group-hover:brightness-[1.18] group-hover:saturate-[1.12]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.01) 0%, rgba(3, 17, 79, 0.01) 60%, rgba(3, 17, 79, 0.16) 82%, rgba(3, 17, 79, 0.52) 100%), url(${programSprite})`,
          backgroundPosition: position,
          backgroundSize: '300% 100%',
        }}
      />
      <div className="aspect-[0.68]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,29,118,0.58)_0%,rgba(5,29,118,0.38)_34%,rgba(5,29,118,0.16)_62%,rgba(3,17,79,0.04)_100%)] transition-all duration-500 group-hover:bg-[linear-gradient(180deg,rgba(5,29,118,0.42)_0%,rgba(5,29,118,0.24)_34%,rgba(5,29,118,0.08)_62%,rgba(3,17,79,0.02)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[6.5rem] bg-[linear-gradient(180deg,rgba(3,17,79,0)_0%,rgba(3,17,79,0.08)_32%,rgba(3,17,79,0.28)_72%,rgba(3,17,79,0.48)_100%)] transition-all duration-500 group-hover:h-[4.5rem] group-hover:bg-[linear-gradient(180deg,rgba(3,17,79,0)_0%,rgba(3,17,79,0.05)_30%,rgba(3,17,79,0.16)_68%,rgba(3,17,79,0.28)_100%)]" />
      <div className="pointer-events-none absolute bottom-3 left-1/2 h-[5.8rem] w-[82%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(6,31,132,0.72)_0%,rgba(6,31,132,0.4)_42%,rgba(6,31,132,0.12)_68%,transparent_100%)] blur-[24px] transition-all duration-500 group-hover:bottom-2 group-hover:h-[4.2rem] group-hover:w-[70%] group-hover:bg-[radial-gradient(circle_at_center,rgba(6,31,132,0.46)_0%,rgba(6,31,132,0.22)_44%,rgba(6,31,132,0.06)_70%,transparent_100%)]" />
      <div className="absolute inset-x-4 bottom-10 text-center text-[0.95rem] font-bold leading-[1.18] text-white text-shadow-[0_4px_10px_rgba(0,0,0,0.78)] transition duration-500 group-hover:bottom-8 sm:text-[1rem] lg:text-[1.08rem]">
        <p>{title[0]}</p>
        <p>{title[1]}</p>
      </div>
    </article>
  )
}

function ProgramSection() {
  return (
    <section id="program" className="relative isolate flex min-h-screen items-center overflow-visible py-20 sm:py-24 lg:py-28">
      <img
        src={programBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,13,109,0.86)_0%,rgba(0,13,109,0.54)_24%,rgba(3,17,79,0.8)_100%)]" />
      <Rectangle17Blend position="top" />
      <Rectangle17Blend position="bottom" />

      <div className="relative mx-auto w-full max-w-[92rem] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl">
          <h2 className="font-display text-3xl leading-tight text-white text-shadow-[0_4px_12px_rgba(0,0,0,0.55)] sm:text-4xl lg:text-5xl">
            <span className="text-[#ffd900]">Program </span>Kami
          </h2>
          <p className="mt-5 max-w-5xl text-sm leading-7 text-white/90 text-shadow-[0_4px_24px_rgba(0,0,0,0.75)] sm:text-base lg:text-lg">
            Setiap langkah kecil yang di lakukan bisa memberi dampak besar bagi laut. Program dibuat untuk
            melindungi penyu dari hulu ke hilir mulai dari sarang di pantai hingga kehidupan mereka di lautan.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 lg:gap-5">
          {programCards.map((card) => (
            <ProgramCard key={card.title.join('-')} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramSection
