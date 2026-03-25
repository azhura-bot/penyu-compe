import { Link } from 'react-router-dom'

import ctaBg from '../../assets/homepage/cta-bg.jpg'
import { useLanguage } from '../../context/LanguageContext'
import BubbleLayer from '../layout/BubbleLayer'
import Rectangle17Blend from '../layout/Rectangle17Blend'
import Reveal from '../motion/Reveal'

function ContactSection() {
  const { copy } = useLanguage()

  return (
    <section id="kontak" className="section-overlap relative isolate flex min-h-screen items-center overflow-visible pb-20 pt-44 sm:pb-24 sm:pt-48 lg:pb-28 lg:pt-52">
      <img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,13,109,0.62)_0%,rgba(3,17,79,0.85)_100%)]" />
      <BubbleLayer className="z-10 opacity-85" density="dense" />
      <Rectangle17Blend position="top" />

      <div className="relative z-20 mx-auto w-full max-w-[92rem] px-6 text-center sm:px-8 lg:px-12 xl:px-16">
        <Reveal
          as="h2"
          variant="up"
          className="type-section-title font-display text-white text-shadow-[0_4px_12px_rgba(0,0,0,0.55)]"
        >
          <span className="text-white">{copy.home.contact.titleBefore}</span>
          <span className="text-[#ffd900]">{copy.home.contact.titleHighlight}</span>
        </Reveal>
        <Reveal
          as="p"
          delay={120}
          className="type-body-lg mx-auto mt-5 max-w-4xl text-white/92 text-shadow-[0_4px_24px_rgba(0,0,0,0.75)]"
        >
          {copy.home.contact.description}
        </Reveal>
        <Reveal
          as={Link}
          to="/tentang"
          delay={240}
          variant="pop"
          distance="30px"
          className="type-button mt-8 inline-flex items-center justify-center rounded-full border-2 border-[#ffd900] px-6 py-3 text-[#ffd900] shadow-[0_15px_24px_rgba(0,0,0,0.45)] transition hover:border-[#dcbf00] hover:bg-[#dcbf00] hover:text-[#03114f]"
        >
          <span>{copy.home.contact.button}</span>
        </Reveal>
      </div>
    </section>
  )
}

export default ContactSection
