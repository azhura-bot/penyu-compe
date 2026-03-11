import docsBg from '../../assets/tentang/docs-bg.png'
import { documentationImages } from '../../data/tentang'
import Rectangle17Blend from '../layout/Rectangle17Blend'

function DocumentationCard({ image, index }) {
  return (
    <article className="overflow-hidden rounded-[1.2rem] border-2 border-white/75 shadow-[0_18px_36px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_44px_rgba(0,0,0,0.45)]">
      <img
        src={image}
        alt={`Dokumentasi ${index + 1}`}
        className="aspect-square w-full object-cover transition duration-500 hover:scale-[1.03]"
      />
    </article>
  )
}

function DocumentationSection() {
  return (
    <section className="relative isolate overflow-visible py-20 sm:py-24 lg:py-28">
      <img
        src={docsBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,13,109,0.72)_0%,rgba(0,13,109,0.56)_28%,rgba(3,17,79,0.84)_100%)]" />
      <Rectangle17Blend position="top" />

      <div className="relative z-20 mx-auto w-full max-w-[92rem] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center">
          <h2 className="font-display text-3xl text-shadow-[0_4px_14px_rgba(0,0,0,0.5)] sm:text-4xl lg:text-5xl">
            <span className="text-[#ffd900]">Dokumentasi </span>
            <span className="text-white">Kami</span>
          </h2>
          <p className="mx-auto mt-5 max-w-5xl text-sm leading-7 text-white/95 text-shadow-[0_4px_20px_rgba(0,0,0,0.7)] sm:text-base lg:text-lg">
            Dokumentasi ini menampilkan berbagai kegiatan kami dalam menjaga kebersihan pantai dan melindungi penyu
            agar tetap dapat hidup serta berkembang dengan aman.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {documentationImages.map((image, index) => (
            <DocumentationCard key={image} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DocumentationSection
