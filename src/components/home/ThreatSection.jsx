import threatBg from '../../assets/homepage/threat-bg.jpg'
import BubbleLayer from '../layout/BubbleLayer'
import { threatCards } from '../../data/home'
import Rectangle17Blend from '../layout/Rectangle17Blend'
import Reveal from '../motion/Reveal'

function ThreatCard({ title, description, image, index }) {
  return (
    <Reveal
      as="article"
      variant={index % 3 === 1 ? 'up' : index % 2 === 0 ? 'tilt-left' : 'tilt-right'}
      delay={index * 110}
      distance="34px"
      className="group relative isolate overflow-hidden rounded-[1.35rem] bg-[#0a4d9c] shadow-[0_22px_50px_rgba(0,0,0,0.35)]"
    >
      <div className="h-64 sm:h-72" />

      <div className="absolute inset-0 transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-10 group-hover:opacity-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,28,0.14)_0%,rgba(5,14,38,0.22)_34%,rgba(3,17,79,0.58)_100%)]" />
        <div className="absolute inset-x-5 bottom-5 text-left text-base font-bold leading-tight text-white text-shadow-[0_4px_18px_rgba(0,0,0,0.82)] sm:inset-x-6 sm:bottom-6 sm:text-[1.15rem]">
          {title}
        </div>
      </div>

      <div className="absolute inset-0 translate-x-[-100%] bg-[linear-gradient(180deg,rgba(8,22,66,0.48)_0%,rgba(10,42,112,0.78)_38%,rgba(6,29,83,0.92)_100%)] transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />

      <div className="absolute inset-0 flex translate-x-[-100%] flex-col justify-end p-5 transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 sm:p-6">
        <div className="rounded-[1.2rem] border border-white/18 bg-[rgba(10,44,102,0.42)] p-5 shadow-[0_24px_44px_rgba(0,0,0,0.24)] backdrop-blur-sm">
          <h3 className="text-lg font-bold leading-tight text-white sm:text-[1.35rem]">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/88 sm:text-[0.98rem]">
            {description}
          </p>
        </div>
      </div>
    </Reveal>
  )
}

function ThreatSection() {
  return (
    <section id="ancaman-penyu" className="section-overlap relative isolate flex min-h-screen items-center overflow-visible pb-20 pt-44 sm:pb-24 sm:pt-48 lg:pb-28 lg:pt-52">
      <img
        src={threatBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,17,79,0.62)_0%,rgba(3,17,79,0.4)_26%,rgba(2,10,38,0.72)_100%)]" />
      <BubbleLayer className="z-10 opacity-85" density="dense" />
      <Rectangle17Blend position="top" />
      <Rectangle17Blend position="bottom" />

      <div className="relative z-20 mx-auto w-full max-w-[92rem] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal
            as="h2"
            variant="up"
            className="font-display text-3xl leading-tight text-white text-shadow-[0_4px_12px_rgba(0,0,0,0.55)] sm:text-4xl lg:text-5xl"
          >
            <span className="text-[#ffd900]">Ancaman </span>yang Mereka Hadapi
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            className="mx-auto mt-5 max-w-4xl text-sm leading-7 text-white/90 text-shadow-[0_4px_24px_rgba(0,0,0,0.75)] sm:text-base lg:text-lg"
          >
            Di balik perjalanan panjang mereka di laut, ada banyak ancaman yang terus mengintai kehidupan penyu.
            Berikut beberapa hal yang sering membahayakan mereka.
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {threatCards.map((card, index) => (
            <ThreatCard key={card.title} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ThreatSection
