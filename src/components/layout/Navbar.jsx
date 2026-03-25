import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import homeLogo from '../../assets/logo.png'
import { useLanguage } from '../../context/LanguageContext'
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

function FlagIcon({ language, className = '' }) {
  if (language === 'id') {
    return (
      <svg viewBox="0 0 28 28" className={className} aria-hidden="true">
        <rect width="28" height="14" fill="#D81F26" />
        <rect y="14" width="28" height="14" fill="#FFFFFF" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden="true">
      <rect width="28" height="28" fill="#1F4AA8" />
      <line x1="0" y1="0" x2="28" y2="28" stroke="#FFFFFF" strokeWidth="7" />
      <line x1="28" y1="0" x2="0" y2="28" stroke="#FFFFFF" strokeWidth="7" />
      <line x1="0" y1="0" x2="28" y2="28" stroke="#D81F26" strokeWidth="3" />
      <line x1="28" y1="0" x2="0" y2="28" stroke="#D81F26" strokeWidth="3" />
      <rect x="10" width="8" height="28" fill="#FFFFFF" />
      <rect y="10" width="28" height="8" fill="#FFFFFF" />
      <rect x="11.5" width="5" height="28" fill="#D81F26" />
      <rect y="11.5" width="28" height="5" fill="#D81F26" />
    </svg>
  )
}

function Navbar({ activeKey = 'home' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const languageMenuRef = useRef(null)
  const { language, setLanguage, copy, supportedLanguages } = useLanguage()
  const activeHref = navItems.find((item) => item.key === activeKey)?.href
  const alternateLanguages = supportedLanguages.filter((code) => code !== language)

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!languageMenuRef.current?.contains(event.target)) {
        setIsLanguageMenuOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsLanguageMenuOpen(false)
      }
    }

    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-4 pt-2.5 sm:px-8 sm:pt-4 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-7xl">
        <nav className="relative overflow-visible rounded-[1.2rem] border border-white/45 bg-[linear-gradient(135deg,rgba(255,255,255,0.28),rgba(255,255,255,0.12)_35%,rgba(170,220,255,0.12)_100%)] px-2.5 py-1.5 shadow-[0_20px_45px_rgba(1,11,61,0.44),inset_0_1px_0_rgba(255,255,255,0.72),inset_0_-18px_34px_rgba(255,255,255,0.07)] backdrop-blur-2xl sm:rounded-[1.45rem] sm:px-3 sm:py-2">
          <div className="pointer-events-none absolute inset-px rounded-[calc(1.2rem-1px)] bg-[linear-gradient(180deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0.08)_34%,rgba(255,255,255,0.03)_100%)] sm:rounded-[calc(1.45rem-1px)]" />
          <div className="pointer-events-none absolute inset-[1px] rounded-[1.1rem] border border-white/14 sm:rounded-[1.35rem]" />
          <div className="pointer-events-none absolute left-6 right-6 top-0 h-px bg-white/85 sm:left-8 sm:right-8" />
          <div className="pointer-events-none absolute left-4 top-1 h-7 w-28 rounded-full bg-white/22 blur-xl sm:left-6 sm:h-9 sm:w-44" />
          <div className="pointer-events-none absolute -bottom-8 left-1/3 h-16 w-40 rounded-full bg-[#dff5ff]/10 blur-2xl" />

          <div className="relative flex items-center justify-between gap-2 sm:gap-3">
            <Link
              to="/"
              className="inline-flex h-10 items-center gap-2 rounded-lg px-1.5 py-1 transition hover:bg-white/8 sm:h-12 sm:gap-3 sm:rounded-xl sm:px-2"
              aria-label={copy.navbar.brandAriaLabel}
              onClick={() => {
                setIsMenuOpen(false)
                setIsLanguageMenuOpen(false)
              }}
            >
              <img
                src={homeLogo}
                alt={copy.common.brandAlt}
                className="h-full w-auto object-contain drop-shadow-[0_2px_10px_rgba(255,255,255,0.18)]"
              />
              <span className="max-w-[10rem] font-display text-[0.72rem] font-semibold uppercase leading-tight tracking-[0.16em] [text-shadow:0_1px_0_rgba(255,255,255,0.2),0_2px_6px_rgba(1,17,44,0.35)] sm:max-w-none sm:text-[0.8rem]">
                {copy.common.brandName}
              </span>
            </Link>

            <div className="hidden flex-1 items-center justify-center gap-x-4 gap-y-2 md:flex md:flex-wrap sm:gap-x-5 lg:gap-x-8">
              {navItems.map((item) => (
                <NavLink key={item.key} {...item} label={copy.navigation[item.key]} active={activeHref === item.href} />
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5">
              <div ref={languageMenuRef} className="relative">
                <div className="flex items-center gap-1 rounded-full border border-white/24 bg-white/8 p-1 shadow-[0_12px_22px_rgba(1,11,61,0.22)] sm:gap-2 sm:p-1.5">
                  <button
                    type="button"
                    aria-label={copy.languageSwitcher.options.id.label}
                    className={`relative flex items-center gap-1.5 transition-all duration-200 sm:gap-2 ${
                      language === 'id'
                        ? 'scale-105'
                        : 'opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                    onClick={() => {
                      setLanguage('id')
                      setIsLanguageMenuOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    <span className={`inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-full sm:h-8 sm:w-8 ${
                      language === 'id'
                        ? 'ring-2 ring-white/80 ring-offset-1 ring-offset-white/20'
                        : ''
                    }`}>
                      <FlagIcon language="id" className="h-full w-full rounded-full object-cover shadow-[0_6px_14px_rgba(0,0,0,0.18)]" />
                    </span>
                    <span className={`text-[0.7rem] font-semibold uppercase sm:text-[0.75rem] ${
                      language === 'id' ? 'text-white' : 'text-white/80'
                    }`}>
                      ID
                    </span>
                  </button>
                  <div className="h-5 w-px bg-white/20 sm:h-6"></div>
                  <button
                    type="button"
                    aria-label={copy.languageSwitcher.options.en.label}
                    className={`relative flex items-center gap-1.5 transition-all duration-200 sm:gap-2 ${
                      language === 'en'
                        ? 'scale-105'
                        : 'opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                    onClick={() => {
                      setLanguage('en')
                      setIsLanguageMenuOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    <span className={`inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-full sm:h-8 sm:w-8 ${
                      language === 'en'
                        ? 'ring-2 ring-white/80 ring-offset-1 ring-offset-white/20'
                        : ''
                    }`}>
                      <FlagIcon language="en" className="h-full w-full rounded-full object-cover shadow-[0_6px_14px_rgba(0,0,0,0.18)]" />
                    </span>
                    <span className={`text-[0.7rem] font-semibold uppercase sm:text-[0.75rem] ${
                      language === 'en' ? 'text-white' : 'text-white/80'
                    }`}>
                      EN
                    </span>
                  </button>
                </div>

                <div
                  className={`absolute right-0 top-[calc(100%+0.45rem)] z-50 rounded-[1rem] border border-white/38 bg-[linear-gradient(135deg,rgba(255,255,255,0.24),rgba(255,255,255,0.1)_35%,rgba(170,220,255,0.1)_100%)] p-1.5 shadow-[0_16px_28px_rgba(1,11,61,0.28)] backdrop-blur-2xl transition duration-300 ${
                    isLanguageMenuOpen
                      ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
                      : 'pointer-events-none -translate-y-2 scale-95 opacity-0'
                  }`}
                  role="menu"
                  aria-label={copy.languageSwitcher.dropdownLabel}
                >
                  {alternateLanguages.map((code) => (
                    <button
                      key={code}
                      type="button"
                      role="menuitem"
                      aria-label={copy.languageSwitcher.options[code].label}
                      title={copy.languageSwitcher.options[code].label}
                      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/14 bg-transparent text-white/90 transition hover:border-white/28 hover:bg-white/10 hover:text-white sm:h-11 sm:w-11"
                      onClick={() => {
                        setLanguage(code)
                        setIsLanguageMenuOpen(false)
                        setIsMenuOpen(false)
                      }}
                    >
                      <span className="inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-full ring-1 ring-white/18 sm:h-8 sm:w-8">
                        <FlagIcon language={code} className="h-full w-full rounded-full" />
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                aria-label={isMenuOpen ? copy.navbar.closeMenu : copy.navbar.openMenu}
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
                    key={item.key}
                    {...item}
                    label={copy.navigation[item.key]}
                    active={activeHref === item.href}
                    mobile
                    onNavigate={() => {
                      setIsMenuOpen(false)
                      setIsLanguageMenuOpen(false)
                    }}
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