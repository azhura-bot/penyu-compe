import journeyBg from '../../assets/images/BG-3.png'
import eggImage from '../../assets/journey/Dari Dalam Telur.png'
import hatchImage from '../../assets/journey/Menetas dan Menuju Laut.png'
import oceanImage from '../../assets/journey/Hidup di Laut Lepas.png'
import adultImage from '../../assets/journey/Menjadi Dewasa.png'
import returnImage from '../../assets/journey/Kembali ke Pantai.png'
import { useLanguage } from '../../context/LanguageContext'
import BubbleLayer from '../layout/BubbleLayer'
import Rectangle17Blend from '../layout/Rectangle17Blend'
import Reveal from '../motion/Reveal'
import LogoLoop from '../LogoLoop'

const journeyImages = [eggImage, hatchImage, oceanImage, adultImage, returnImage]

function JourneyCard({ step, image }) {
  return (
    <article
      className="group/card relative h-72 w-[17rem] sm:h-80 sm:w-[19rem]"
      tabIndex={0}
    >
      <div className="relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] group-hover/card:[transform:rotateY(180deg)] group-focus-visible/card:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 overflow-hidden rounded-[1.75rem] border-2 border-white/80 [backface-visibility:hidden] shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
          <img
            src={image}
            alt={step.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover scale-[1.4]"
          />
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex flex-col justify-center rounded-[1.75rem] border-2 border-white/80 bg-[#032b6d]/95 p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,0.28)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h3 className="type-card-title text-[1.35rem] font-bold line-clamp-2">
            {step.title}
          </h3>
          <p className="type-body mt-4 text-white/90 line-clamp-4">
            {step.description}
          </p>
        </div>
      </div>
    </article>
  )
}

function JourneySection() {
  const { copy } = useLanguage()
  const journeySteps = copy.home.journey.steps.map((step, index) => ({
    ...step,
    image: journeyImages[index],
    order: index,
  }))

  return (
    <section className="section-overlap relative isolate overflow-visible pb-18 pt-20 sm:pb-22 sm:pt-20 lg:pb-26 lg:pt-25">
      <img
        src={journeyBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: 'center 48%' }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,17,79,0.78)_0%,rgba(3,17,79,0.5)_26%,rgba(2,13,56,0.84)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,217,255,0.12),rgba(125,217,255,0)_32%),radial-gradient(circle_at_bottom,rgba(255,217,0,0.08),rgba(255,217,0,0)_34%)]" />
      <BubbleLayer className="z-10 opacity-85" density="dense" />
      <Rectangle17Blend position="top" />
      <Rectangle17Blend position="bottom" />

      <div className="relative z-20 w-full px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal as="p" variant="up" className="type-kicker text-[#8fdcff]/84">
            {copy.home.journey.kicker}
          </Reveal>
          <Reveal
            as="h2"
            variant="up"
            delay={80}
            className="type-section-title mt-4 font-display text-white text-shadow-[0_8px_22px_rgba(0,0,0,0.55)]"
          >
            {copy.home.journey.titleBefore}
            <span className="text-[#ffd900]">{copy.home.journey.titleHighlight}</span>
          </Reveal>
          <Reveal
            as="p"
            delay={160}
            className="type-body-lg mx-auto mt-5 max-w-3xl text-white/88 text-shadow-[0_4px_18px_rgba(0,0,0,0.5)]"
          >
            {/* {copy.home.journey.description} */}
          </Reveal>
        </div>

        <Reveal delay={240} className="mt-14">
          {/* <div className="rounded-[2rem] border border-white/14 bg-[linear-gradient(145deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03)_52%,rgba(115,184,255,0.08)_100%)] p-2 shadow-[0_28px_70px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-3 lg:p-4"> */}
          <LogoLoop
            logos={journeySteps}
            speed={58}
            direction="left"
            width="100%"
            gap={20}
            logoHeight={24}
            pauseOnHover
            ariaLabel={copy.home.journey.ariaLabel}
            className="overflow-visible px-1"
            renderItem={(item, key) => (
              <JourneyCard
                key={key}
                step={item}
                image={item.image}
                index={item.order}
              />
            )}
          />
          {/* </div> */}
        </Reveal>
      </div>
    </section>
  )
}

export default JourneySection
