import arrowIcon from '../../assets/homepage/arrow.svg'
import heroBg from '../../assets/homepage/hero-bg.jpg'
import Rectangle17Blend from '../layout/Rectangle17Blend'

function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative isolate min-h-screen overflow-visible"
    >
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,13,109,0.28)_0%,rgba(0,13,109,0.5)_55%,rgba(3,17,79,0.94)_100%)]" />
      <div className="pointer-events-none absolute inset-x-[-6%] bottom-[-2.5rem] h-40 w-[112%] bg-[linear-gradient(180deg,rgba(3,17,79,0)_0%,rgba(3,17,79,0.36)_30%,rgba(3,17,79,0.82)_72%,rgba(3,17,79,0.98)_100%)] blur-[44px]" />
      <div className="pointer-events-none absolute inset-x-[-10%] bottom-[-3.25rem] h-28 w-[120%] bg-[radial-gradient(ellipse_at_center,rgba(0,13,109,0.74)_0%,rgba(0,13,109,0.46)_42%,rgba(0,13,109,0.12)_68%,rgba(0,13,109,0)_84%)] blur-[52px]" />
      <Rectangle17Blend position="bottom" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[92rem] flex-col px-6 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-24 lg:pt-36 xl:px-16">
        <div className="flex flex-1 items-center py-16 sm:py-20 lg:py-28">
          <div className="max-w-2xl">
            <h1 className="font-display max-w-xl text-4xl leading-tight text-shadow-[0_4px_8px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl">
              Selamatkan Penyu, Selamatkan Masa Depan Laut
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/90 text-shadow-[0_4px_24px_rgba(0,0,0,0.8)] sm:text-base lg:text-lg">
              Penyu sudah menjelajahi lautan sejak jutaan tahun lalu, jauh sebelum manusia mengenal peradaban.
              Mereka terus kembali ke pantai yang sama untuk bertelur, menjaga siklus hidup yang luar biasa dari
              generasi ke generasi.
            </p>

            <a
              href="#tentang-penyu"
              className="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-[#ffd900] px-6 py-3 text-sm font-bold text-[#ffd900] shadow-[0_15px_24px_rgba(0,0,0,0.45)] transition hover:bg-[#ffd900] hover:text-[#03114f] sm:text-base"
            >
              <span>Tentang Penyu</span>
              <img src={arrowIcon} alt="" aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
