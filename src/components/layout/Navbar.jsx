import { Link } from 'react-router-dom'

import searchIcon from '../../assets/homepage/search.svg'
import { navItems } from '../../data/navigation'
import { warmTentangPage } from '../../utils/routePreload'

function NavLink({ href, label, type, active = false }) {
  const className = `nav-link font-nav ${active ? 'is-active' : ''}`
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
    >
      {label}
    </a>
  )
}

function Navbar({ activeLabel = 'Beranda' }) {
  const activeHref = navItems.find((item) => item.label === activeLabel)?.href

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-6 pt-3 sm:px-8 sm:pt-4 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-7xl">
        <nav className="relative overflow-hidden rounded-[1.45rem] border border-white/45 bg-[linear-gradient(135deg,rgba(255,255,255,0.28),rgba(255,255,255,0.12)_35%,rgba(170,220,255,0.12)_100%)] px-3 py-2 shadow-[0_20px_45px_rgba(1,11,61,0.44),inset_0_1px_0_rgba(255,255,255,0.72),inset_0_-18px_34px_rgba(255,255,255,0.07)] backdrop-blur-2xl">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0.08)_34%,rgba(255,255,255,0.03)_100%)]" />
          <div className="pointer-events-none absolute inset-[1px] rounded-[1.35rem] border border-white/14" />
          <div className="pointer-events-none absolute left-8 right-8 top-0 h-px bg-white/85" />
          <div className="pointer-events-none absolute left-6 top-1 h-9 w-44 rounded-full bg-white/34 blur-xl" />
          <div className="pointer-events-none absolute -right-12 top-0 h-20 w-28 rounded-full bg-[#8fd3ff]/22 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-8 left-1/3 h-16 w-40 rounded-full bg-[#dff5ff]/10 blur-2xl" />

          <div className="relative flex flex-wrap items-center justify-between gap-3">
            <Link
              to="/"
              className="font-nav text-lg font-bold tracking-wide text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.18)] sm:text-xl lg:text-[1.55rem]"
            >
              Logo
            </Link>

            <div className="flex flex-1 flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-5 lg:gap-x-8">
              {navItems.map((item) => (
                <NavLink key={item.label} {...item} active={activeHref === item.href} />
              ))}
            </div>

            <button
              type="button"
              aria-label="Cari"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/10 transition hover:bg-white/20"
            >
              <img src={searchIcon} alt="" aria-hidden="true" className="h-3.5 w-3.5" />
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
