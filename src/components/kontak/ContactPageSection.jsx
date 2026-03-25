import ctaBg from '../../assets/images/BG.png'
import { useLanguage } from '../../context/LanguageContext'
import BubbleLayer from '../layout/BubbleLayer'
import Rectangle17Blend from '../layout/Rectangle17Blend'
import Reveal from '../motion/Reveal'

function ContactField({ label, id, placeholder, textarea = false, type = 'text' }) {
  const inputClassName =
    'type-body w-full rounded-[1.1rem] border border-white/55 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.06))] px-4 py-3 text-white outline-none backdrop-blur-md transition placeholder:text-white/42 focus:border-[#ffd900] focus:bg-white/12 focus:ring-2 focus:ring-[#ffd900]/28'

  return (
    <label htmlFor={id} className="block">
      <span className="type-label mb-2 block text-white/88">{label}</span>
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

function ContactMapCard({ title }) {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/55 bg-[linear-gradient(135deg,rgba(255,255,255,0.24),rgba(255,255,255,0.08))] p-3 shadow-[0_24px_50px_rgba(1,11,61,0.38)] backdrop-blur-xl">
      <div className="relative aspect-[1.02] overflow-hidden rounded-[1.35rem] border border-white/22 bg-[#eef3f7]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1013047.4822824948!2d105.17801777812505!3d-7.329538800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42af13bd7d7093%3A0x49fcfa987486bbd2!2sPantai%20Konservasi%20Penyu%20Pangumbahan!5e0!3m2!1sid!2sid!4v1773295796980!5m2!1sid!2sid"
          title={title}
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
  const { copy } = useLanguage()

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
                  className="type-section-title font-display text-[#ffd900] text-shadow-[0_6px_18px_rgba(0,0,0,0.35)]"
                >
                  {copy.contactPage.kicker}
                </Reveal>
                <Reveal
                  as="h1"
                  delay={200}
                  className="type-subsection-title mt-3 text-white text-shadow-[0_4px_18px_rgba(0,0,0,0.45)]"
                >
                  {copy.contactPage.title}
                </Reveal>
                <Reveal
                  as="p"
                  delay={260}
                  className="type-body-lg mt-5 max-w-xl text-justify text-white/84"
                >
                  {copy.contactPage.description}
                </Reveal>
              </div>

              <Reveal delay={320} variant="pop" className="max-w-[32rem]">
                <ContactMapCard title={copy.contactPage.mapTitle} />
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
                  className="type-subsection-title font-display text-white text-shadow-[0_4px_16px_rgba(0,0,0,0.35)]"
                >
                  {copy.contactPage.formTitleBefore}
                  <span className="text-[#ffd900]">{copy.contactPage.formTitleHighlight}</span>
                </Reveal>

                <Reveal as="form" delay={280} className="mt-8 space-y-5" onSubmit={handleSubmit}>
                  <ContactField
                    id="nama"
                    label={copy.contactPage.fields.name.label}
                    placeholder={copy.contactPage.fields.name.placeholder}
                  />
                  <ContactField
                    id="email"
                    label={copy.contactPage.fields.email.label}
                    placeholder={copy.contactPage.fields.email.placeholder}
                    type="email"
                  />
                  <ContactField
                    id="subjek"
                    label={copy.contactPage.fields.subject.label}
                    placeholder={copy.contactPage.fields.subject.placeholder}
                  />
                  <ContactField
                    id="pesan"
                    label={copy.contactPage.fields.message.label}
                    placeholder={copy.contactPage.fields.message.placeholder}
                    textarea
                  />

                  <button
                    type="submit"
                    className="type-button inline-flex min-w-[8.75rem] items-center justify-center rounded-full border-2 border-[#ffd900] bg-transparent px-8 py-3.5 text-[#ffd900] shadow-[0_15px_24px_rgba(0,0,0,0.45)] transition hover:border-[#dcbf00] hover:bg-[#dcbf00] hover:text-[#03114f]"
                  >
                    {copy.contactPage.submit}
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
