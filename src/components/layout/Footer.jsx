import { Link } from 'react-router-dom'

import homeLogo from '../../assets/logo.png'
import { useLanguage } from '../../context/LanguageContext'
import { navItems } from '../../data/navigation'
import BubbleLayer from './BubbleLayer'
import Rectangle17Blend from './Rectangle17Blend'

function FooterAnchor({ href, label, type }) {
  const className =
    'inline-flex text-sm text-white/78 transition hover:text-[#ffd900] sm:text-[0.95rem]'

  if (type === 'route' || type === 'anchor') {
    return (
      <Link to={href} className={className}>
        {label}
      </Link>
    )
  }

  return null
}

function Footer() {
  const year = new Date().getFullYear()
  const { copy } = useLanguage()

  return (
    <footer className="footer-overlap relative isolate overflow-hidden bg-[radial-gradient(circle_at_top,rgba(84,191,255,0.18),transparent_28%),linear-gradient(180deg,#04104a_0%,#020d35_100%)]">
      <BubbleLayer className="z-0 opacity-85" density="dense" />
      <Rectangle17Blend position="top" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(143,220,255,0.8),rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-[24rem] -translate-x-1/2 rounded-full bg-[#59cfff]/16 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-[#0a46a5]/24 blur-3xl" />
      <div className="pointer-events-none absolute -right-12 top-10 h-40 w-40 rounded-full bg-[#ffd900]/8 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[92rem] px-6 py-14 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)_minmax(0,0.9fr)]">
          <div className="max-w-xl">
            <Link to="/" className="inline-flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/16 bg-white/8 shadow-[0_12px_30px_rgba(0,0,0,0.22)] backdrop-blur-md">
                <img src={homeLogo} alt={copy.common.brandAlt} className="h-10 w-10 object-contain" />
              </span>
              <span>
                <span className="block font-display text-xl text-white sm:text-2xl">{copy.common.brandName}</span>
                <span className="mt-1 block font-nav text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#8fdcff]/78 sm:text-xs">
                  {copy.common.brandTagline}
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/78 sm:text-base">
              {copy.footer.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/tentang"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#ffd900] px-6 py-3 text-sm font-bold text-[#ffd900] shadow-[0_15px_24px_rgba(0,0,0,0.32)] transition hover:border-[#dcbf00] hover:bg-[#dcbf00] hover:text-[#03114f] sm:text-base"
              >
                {copy.footer.primaryAction}
              </Link>
              <a
                href="/#program"
                className="inline-flex items-center justify-center rounded-full border border-white/28 bg-white/8 px-6 py-3 text-sm font-semibold text-white/88 transition hover:border-white/46 hover:bg-white/14 hover:text-white sm:text-base"
              >
                {copy.footer.secondaryAction}
              </a>
            </div>
          </div>

          <div>
            <p className="font-nav text-xs font-semibold uppercase tracking-[0.28em] text-[#8fdcff]/84">{copy.footer.navigationTitle}</p>
            <div className="mt-5 flex flex-col gap-3">
              {navItems.map((item) => (
                <FooterAnchor key={item.key} {...item} label={copy.navigation[item.key]} />
              ))}
            </div>
          </div>

          <div>
            <p className="font-nav text-xs font-semibold uppercase tracking-[0.28em] text-[#8fdcff]/84">{copy.footer.exploreTitle}</p>
            <div className="mt-5 flex flex-col gap-3">
              {copy.footer.exploreItems.map((item) => (
                <FooterAnchor key={item.key} {...item} />
              ))}
            </div>

            <div className="mt-7 rounded-[1.2rem] border border-white/12 bg-white/6 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm">
              <p className="text-sm font-semibold text-white">{copy.footer.quoteTitle}</p>
              <p className="mt-2 text-sm leading-6 text-white/72">
                {copy.footer.quoteDescription}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/56 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {copy.footer.copyright}</p>
          <p>{copy.footer.closing}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
