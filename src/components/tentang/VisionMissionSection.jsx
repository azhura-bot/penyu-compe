import visionBg from '../../assets/tentang/vision-bg.png'
import { missionItems } from '../../data/tentang'
import Rectangle17Blend from '../layout/Rectangle17Blend'

function GlassPanel({ children, className = '' }) {
  return (
    <div
      className={`rounded-[1.9rem] border-2 border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.24),rgba(255,255,255,0.08))] shadow-[0_24px_60px_rgba(0,0,0,0.25)] backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  )
}

function VisionMissionSection() {
  return (
    <section className="relative isolate overflow-visible py-20 sm:py-24 lg:py-28">
      <img
        src={visionBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,13,109,0.54)_0%,rgba(0,13,109,0.48)_36%,rgba(3,17,79,0.72)_100%)]" />
      <Rectangle17Blend position="top" />
      <Rectangle17Blend position="bottom" />

      <div className="relative z-20 mx-auto flex w-full max-w-[92rem] flex-col gap-10 px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="ml-auto w-full max-w-[36rem]">
          <h2 className="font-display text-3xl text-shadow-[0_4px_14px_rgba(0,0,0,0.5)] sm:text-4xl lg:text-5xl">
            <span className="text-[#ffd900]">Visi </span>
            <span className="text-white">Kami</span>
          </h2>

          <GlassPanel className="mt-5 p-5 sm:p-6">
            <p className="text-sm leading-7 text-white/95 sm:text-base lg:text-lg">
              Mewujudkan laut yang bersih, pantai yang aman, serta menjaga keberlangsungan penyu agar dapat terus
              bertelur dan hidup untuk generasi mendatang.
            </p>
          </GlassPanel>
        </div>

        <div className="w-full max-w-[78rem]">
          <h2 className="font-display text-3xl text-shadow-[0_4px_14px_rgba(0,0,0,0.5)] sm:text-4xl lg:text-5xl">
            <span className="text-[#ffd900]">Misi </span>
            <span className="text-white">Kami</span>
          </h2>

          <GlassPanel className="mt-5 p-5 sm:p-6 lg:p-7">
            <ol className="space-y-2 text-sm leading-7 text-white/95 sm:text-base lg:text-lg">
              {missionItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="font-semibold text-[#ffd900]">*</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </GlassPanel>
        </div>
      </div>
    </section>
  )
}

export default VisionMissionSection
