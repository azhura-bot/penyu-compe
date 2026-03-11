import heroBg from '../../assets/tentang/hero-bg.png'
import Rectangle17Blend from '../layout/Rectangle17Blend'

function AboutHeroSection() {
  return (
    <section className="relative isolate flex min-h-[44rem] items-end overflow-visible pt-28 sm:pt-32 lg:pt-36">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,13,109,0.7)_0%,rgba(0,13,109,0.64)_42%,rgba(3,17,79,0.78)_100%)]" />
      <Rectangle17Blend position="bottom" />

      <div className="relative z-20 mx-auto w-full max-w-[92rem] px-6 pb-20 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-5xl">
          <h1 className="font-display text-4xl leading-tight text-shadow-[0_4px_18px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl">
            <span className="text-white">Komunitas </span>
            <span className="text-[#ffd900]">Penyu Nusantara</span>
          </h1>

          <p className="mt-5 max-w-5xl text-sm leading-7 text-white/92 text-shadow-[0_4px_24px_rgba(0,0,0,0.75)] sm:text-base lg:text-[1.3rem] lg:leading-9">
            Komunitas Penyu Nusantara adalah sebuah gerakan kepedulian yang berfokus pada pelestarian penyu di
            wilayah Indonesia. Komunitas ini hadir sebagai ruang kolaborasi bagi masyarakat, relawan, dan pecinta
            lingkungan yang ingin terlibat langsung dalam menjaga keberlangsungan hidup penyu di alam.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutHeroSection
