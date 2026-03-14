import threatBg from '../../assets/homepage/threat-bg.jpg'
import { threatCards } from '../../data/home'
import Rectangle17Blend from '../layout/Rectangle17Blend'

function ThreatCard({ title, description, image }) {
  return (
    <article className="group relative isolate overflow-hidden rounded-[1.35rem] bg-[#03114f] shadow-[0_22px_50px_rgba(0,0,0,0.35)]">
      <div className="h-64 sm:h-72" />

      <div className="absolute inset-0 transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-10 group-hover:opacity-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,16,58,0.28)_0%,rgba(4,30,101,0.42)_35%,rgba(3,17,79,0.86)_100%)]" />
        <div className="absolute inset-x-5 bottom-5 text-left text-base font-bold leading-tight text-white text-shadow-[0_4px_18px_rgba(0,0,0,0.82)] sm:inset-x-6 sm:bottom-6 sm:text-[1.15rem]">
          {title}
        </div>
      </div>

      <div className="absolute inset-0 translate-x-[-100%] bg-[linear-gradient(180deg,rgba(6,40,111,0.52)_0%,rgba(7,74,159,0.96)_38%,rgba(3,39,115,1)_100%)] transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />

      <div className="absolute inset-0 flex translate-x-[-100%] flex-col justify-end p-5 transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 sm:p-6">
        <div className="rounded-[1.2rem] border border-white/18 bg-[#0a4d9c]/62 p-5 shadow-[0_24px_44px_rgba(0,0,0,0.24)] backdrop-blur-sm">
          <h3 className="text-lg font-bold leading-tight text-white sm:text-[1.35rem]">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/88 sm:text-[0.98rem]">
            {description}
          </p>
        </div>
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

      <div className="relative z-20 mx-auto w-full max-w-[92rem] px-6 sm:px-8 lg:px-12 xl:px-16">
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
