import threatBg from '../../assets/homepage/threat-bg.jpg'
import { threatCards } from '../../data/home'
import Rectangle17Blend from '../layout/Rectangle17Blend'

function ThreatCard({ title, image }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.35rem] border border-white/70 shadow-[0_22px_50px_rgba(0,0,0,0.35)]">
      <img
        src={image}
        alt={title}
        className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#03114f]/70 via-transparent to-transparent" />
      <div className="absolute inset-x-4 bottom-4 rounded-full border border-white/80 bg-white/20 px-4 py-2 text-center text-sm font-bold shadow-[0_20px_40px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:text-base">
        {title}
      </div>
    </article>
  )
}

function ThreatSection() {
  return (
    <section id="ancaman-penyu" className="relative isolate flex min-h-screen items-center overflow-visible py-20 sm:py-24 lg:py-28">
      <img
        src={threatBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,13,109,0.74)_0%,rgba(0,13,109,0.56)_26%,rgba(3,17,79,0.86)_100%)]" />
      <Rectangle17Blend position="top" />
      <Rectangle17Blend position="bottom" />

      <div className="relative mx-auto w-full max-w-[92rem] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl leading-tight text-white text-shadow-[0_4px_12px_rgba(0,0,0,0.55)] sm:text-4xl lg:text-5xl">
            <span className="text-[#ffd900]">Ancaman </span>yang Mereka Hadapi
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-sm leading-7 text-white/90 text-shadow-[0_4px_24px_rgba(0,0,0,0.75)] sm:text-base lg:text-lg">
            Di balik perjalanan panjang mereka di laut, ada banyak ancaman yang terus mengintai kehidupan penyu.
            Berikut beberapa hal yang sering membahayakan mereka.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {threatCards.map((card) => (
            <ThreatCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ThreatSection
