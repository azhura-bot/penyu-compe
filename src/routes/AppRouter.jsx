import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const Penyu = lazy(() => import('../pages/Penyu'))
const Kontak = lazy(() => import('../pages/Kontak'))
const Tentang = lazy(() => import('../pages/Tentang'))

function RouteFallback() {
  return <main className="min-h-screen bg-[#03114f]" />
}

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    const scrollToHashTarget = () => {
      const target = document.getElementById(hash.slice(1))

      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }

    window.requestAnimationFrame(scrollToHashTarget)
  }, [pathname, hash])

  return null
}

function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/penyu" element={<Penyu />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/tentang" element={<Tentang />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
