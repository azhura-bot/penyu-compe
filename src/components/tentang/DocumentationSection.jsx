import docsBg from '../../assets/tentang/docs-bg.png'
import { documentationImages } from '../../data/tentang'
import Rectangle17Blend from '../layout/Rectangle17Blend'

function DocumentationCard({ image, index }) {
  return (
    <article className="group w-full max-w-[17rem] overflow-hidden rounded-[1rem] border-2 border-white/75 shadow-[0_16px_32px_rgba(0,0,0,0.32)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_40px_rgba(0,0,0,0.42)] sm:max-w-[18rem] lg:max-w-[19rem]">
      <img
        src={image.src}
        alt={image.alt ?? `Dokumentasi ${index + 1}`}
        className="aspect-square w-full object-cover transition duration-500 ease-out group-hover:scale-[var(--doc-hover-scale)]"
        style={{
          objectPosition: `${image.focusX ?? '50%'} ${image.focusY ?? '50%'}`,
          '--doc-hover-scale': String((image.zoom ?? 1.12) + 0.03),
          transform: `scale(${image.zoom ?? 1.12})`,
        }}
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

        <div className="mx-auto mt-14 grid max-w-[58rem] place-items-center gap-y-8 sm:grid-cols-2 lg:max-w-[60rem] lg:gap-y-10 xl:max-w-[62rem] xl:grid-cols-3">
          {documentationImages.map((image, index) => (
            <DocumentationCard key={image.src} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DocumentationSection
