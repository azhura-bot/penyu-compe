import ctaBg from '../../assets/images/BG.png'
import BubbleLayer from '../layout/BubbleLayer'
import Rectangle17Blend from '../layout/Rectangle17Blend'
import Reveal from '../motion/Reveal'

function ContactField({ label, id, placeholder, textarea = false, type = 'text' }) {
  const inputClassName =
    'w-full rounded-[1.1rem] border border-white/55 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.06))] px-4 py-3 text-sm text-white outline-none backdrop-blur-md transition placeholder:text-white/42 focus:border-[#ffd900] focus:bg-white/12 focus:ring-2 focus:ring-[#ffd900]/28 sm:text-base'

  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-sm font-medium text-white/88 sm:text-[0.95rem]">{label}</span>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={4}
          placeholder={placeholder}
          className={`${inputClassName} min-h-[8rem] resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          className={inputClassName}
        />
      )}
    </label>
  )
}

function ContactMapCard() {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/55 bg-[linear-gradient(135deg,rgba(255,255,255,0.24),rgba(255,255,255,0.08))] p-3 shadow-[0_24px_50px_rgba(1,11,61,0.38)] backdrop-blur-xl">
      <div className="relative aspect-[1.02] overflow-hidden rounded-[1.35rem] border border-white/22 bg-[#eef3f7]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1013047.4822824948!2d105.17801777812505!3d-7.329538800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42af13bd7d7093%3A0x49fcfa987486bbd2!2sPantai%20Konservasi%20Penyu%20Pangumbahan!5e0!3m2!1sid!2sid!4v1773295796980!5m2!1sid!2sid"
          title="Lokasi Pantai Konservasi Penyu Pangumbahan"
          className="absolute inset-0 h-full w-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}

function ContactPageSection() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className="section-overlap relative isolate flex min-h-screen items-center overflow-visible pb-24 pt-48 sm:pb-28 sm:pt-52 lg:pb-32 lg:pt-56">
      <img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: 'center 52%' }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,13,109,0.42)_0%,rgba(0,13,109,0.56)_26%,rgba(3,17,79,0.88)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(115,184,255,0.1),rgba(115,184,255,0)_42%)]" />
      <BubbleLayer className="z-10 opacity-85" density="dense" />
      <Rectangle17Blend position="top" />

      <div className="relative mx-auto w-full max-w-[92rem] px-6 sm:px-8 lg:px-12 xl:px-16">
        <Reveal
          variant="up"
          className="overflow-hidden rounded-[2rem] border border-white/22 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04)_52%,rgba(132,198,255,0.08)_100%)] px-6 py-8 shadow-[0_30px_70px_rgba(1,11,61,0.38)] backdrop-blur-xl sm:px-8 sm:py-10 lg:px-10 lg:py-12"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] lg:gap-12">
            <Reveal variant="left" delay={100} className="flex flex-col gap-8 lg:min-h-[34rem] lg:justify-between">
              <div className="max-w-lg">
                <Reveal
                  as="p"
                  variant="down"
                  delay={140}
                  className="font-display text-4xl leading-none text-[#ffd900] text-shadow-[0_6px_18px_rgba(0,0,0,0.35)] sm:text-5xl"
                >
                  Kontak
                </Reveal>
                <Reveal
                  as="h1"
                  delay={200}
                  className="mt-3 text-2xl font-semibold text-white text-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-3xl"
                >
                  Terhubung dengan Kami
                </Reveal>
                <Reveal
                  as="p"
                  delay={260}
                  className="mt-5 max-w-xl text-justify text-sm leading-7 text-white/84 sm:text-base lg:text-lg"
                >
                  Sampaikan pertanyaan, ide kolaborasi, atau ajakan konservasi. Kami terbuka untuk terhubung dan
                  bergerak bersama.
                </Reveal>
              </div>

              <Reveal delay={320} variant="pop" className="max-w-[32rem]">
                <ContactMapCard />
              </Reveal>
            </Reveal>

            <Reveal
              variant="right"
              delay={180}
              className="relative overflow-hidden rounded-[1.9rem] border border-white/26 bg-[linear-gradient(135deg,rgba(18,44,158,0.52),rgba(14,33,126,0.32)_48%,rgba(255,255,255,0.06)_100%)] p-6 shadow-[0_28px_60px_rgba(1,11,61,0.38)] backdrop-blur-2xl sm:p-8 lg:p-9"
            >
              <div className="pointer-events-none absolute right-[-3rem] top-[-2rem] h-32 w-32 rounded-full bg-[#7fd8ff]/14 blur-3xl" />
              <div className="pointer-events-none absolute bottom-[-3rem] left-[-1rem] h-28 w-28 rounded-full bg-[#ffd900]/8 blur-3xl" />

              <div className="relative">
                <Reveal
                  as="h2"
                  delay={220}
                  className="font-display text-3xl text-white text-shadow-[0_4px_16px_rgba(0,0,0,0.35)] sm:text-4xl"
                >
                  Form <span className="text-[#ffd900]">Kontak</span>
                </Reveal>

                <Reveal as="form" delay={280} className="mt-8 space-y-5" onSubmit={handleSubmit}>
                  <ContactField id="nama" label="Nama Anda" placeholder="Masukkan nama lengkap" />
                  <ContactField id="email" label="Email" placeholder="Masukkan email aktif" type="email" />
                  <ContactField id="subjek" label="Subjek" placeholder="Tulis subjek pesan" />
                  <ContactField
                    id="pesan"
                    label="Pesan"
                    placeholder="Tulis pesan atau kebutuhan kolaborasi Anda"
                    textarea
                  />

                  <button
                    type="submit"
                    className="inline-flex min-w-[8.75rem] items-center justify-center rounded-full border-2 border-[#ffd900] bg-transparent px-8 py-3.5 text-sm font-bold text-[#ffd900] shadow-[0_15px_24px_rgba(0,0,0,0.45)] transition hover:border-[#dcbf00] hover:bg-[#dcbf00] hover:text-[#03114f] sm:text-base"
                  >
                    Kirim
                  </button>
                </Reveal>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default ContactPageSection
