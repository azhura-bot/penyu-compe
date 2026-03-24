import { useState } from 'react'
import { Link } from 'react-router-dom'

import homeLogo from '../../assets/logo.png'
import searchIcon from '../../assets/homepage/search.svg'
import { navItems } from '../../data/navigation'
import { warmTentangPage } from '../../utils/routePreload'

function NavLink({ href, label, type, active = false, mobile = false, onNavigate }) {
  const className = [
    'nav-link font-nav',
    active ? 'is-active' : '',
    mobile
      ? `nav-link-mobile flex min-h-[2.8rem] w-full items-center justify-start rounded-[1rem] border px-3.5 text-[0.88rem] leading-none shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:min-h-[3.25rem] sm:rounded-[1.15rem] sm:px-4 sm:text-[0.95rem]
        ${active
          ? 'border-[#ffe45c]/55 bg-[linear-gradient(135deg,rgba(255,217,0,0.18),rgba(255,255,255,0.08))] text-[#ffd900]'
          : 'border-white/12 bg-white/[0.045] text-white hover:border-white/22 hover:bg-white/[0.09]'}`
      : '',
  ].join(' ')
  const shouldPrefetchTentang = href === '/tentang'

  const handlePrefetch = () => {
    if (!shouldPrefetchTentang) {
      return
    }

    warmTentangPage({ full: true })
  }

  if (type === 'route' || type === 'anchor') {
    return (
      <Link
        to={href}
        className={className}
        onClick={onNavigate}
        onMouseEnter={handlePrefetch}
        onFocus={handlePrefetch}
        onPointerDown={handlePrefetch}
      >
        {label}
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={className}
      onClick={onNavigate}
    >
      {label}
    </a>
  )
}

function Navbar({ activeLabel = 'Beranda' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeHref = navItems.find((item) => item.label === activeLabel)?.href

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-4 pt-2.5 sm:px-8 sm:pt-4 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-7xl">
        <nav className="relative overflow-hidden rounded-[1.2rem] border border-white/45 bg-[linear-gradient(135deg,rgba(255,255,255,0.28),rgba(255,255,255,0.12)_35%,rgba(170,220,255,0.12)_100%)] px-2.5 py-1.5 shadow-[0_20px_45px_rgba(1,11,61,0.44),inset_0_1px_0_rgba(255,255,255,0.72),inset_0_-18px_34px_rgba(255,255,255,0.07)] backdrop-blur-2xl sm:rounded-[1.45rem] sm:px-3 sm:py-2">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0.08)_34%,rgba(255,255,255,0.03)_100%)]" />
          <div className="pointer-events-none absolute inset-[1px] rounded-[1.1rem] border border-white/14 sm:rounded-[1.35rem]" />
          <div className="pointer-events-none absolute left-6 right-6 top-0 h-px bg-white/85 sm:left-8 sm:right-8" />
          <div className="pointer-events-none absolute left-4 top-1 h-7 w-28 rounded-full bg-white/34 blur-xl sm:left-6 sm:h-9 sm:w-44" />
          <div className="pointer-events-none absolute -right-12 top-0 h-20 w-28 rounded-full bg-[#8fd3ff]/22 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-8 left-1/3 h-16 w-40 rounded-full bg-[#dff5ff]/10 blur-2xl" />

          <div className="relative flex items-center justify-between gap-2 sm:gap-3">
            <Link
              to="/"
              className="inline-flex h-10 items-center gap-2 rounded-lg px-1.5 py-1 transition hover:bg-white/8 sm:h-12 sm:gap-3 sm:rounded-xl sm:px-2"
              aria-label="Komunitas Penyu Nusantara"
              onClick={() => setIsMenuOpen(false)}
            >
              <img
                src={homeLogo}
                alt="Logo Komunitas Penyu Nusantara"
                className="h-full w-auto object-contain drop-shadow-[0_2px_10px_rgba(255,255,255,0.18)]"
              />
              <span className="max-w-[10rem] font-display text-[0.72rem] font-semibold uppercase leading-tight tracking-[0.16em] [text-shadow:0_1px_0_rgba(255,255,255,0.28),0_3px_10px_rgba(1,17,44,0.9),0_0_18px_rgba(143,211,255,0.18)] sm:max-w-none sm:text-[0.8rem]">
                Komunitas Penyu Nusantara
              </span>
            </Link>

            <div className="hidden flex-1 items-center justify-center gap-x-4 gap-y-2 md:flex md:flex-wrap sm:gap-x-5 lg:gap-x-8">
              {navItems.map((item) => (
                <NavLink key={item.label} {...item} active={activeHref === item.href} />
              ))}
            </div>

            <button
              type="button"
              aria-label={isMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/10 transition hover:bg-white/20 md:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="relative h-4 w-4.5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-4.5 rounded-full bg-white transition-transform duration-300 ${
                    isMenuOpen ? 'translate-y-[6px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-0.5 w-4.5 rounded-full bg-white transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-[12px] h-0.5 w-4.5 rounded-full bg-white transition-transform duration-300 ${
                    isMenuOpen ? '-translate-y-[6px] -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>

          {isMenuOpen ? (
            <div
              id="mobile-navigation"
              className="relative mt-2.5 border-t border-white/12 pt-2.5 md:hidden sm:mt-3 sm:pt-3"
            >
              <div className="pointer-events-none absolute left-4 right-4 top-0 h-px bg-white/20 sm:left-6 sm:right-6" />

              <div className="flex flex-col gap-1.5 sm:gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.label}
                    {...item}
                    active={activeHref === item.href}
                    mobile
                    onNavigate={() => setIsMenuOpen(false)}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </nav>
      </div>
    </div>
  )
}

export default Navbar
