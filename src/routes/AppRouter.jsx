import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

import Home from '../pages/Home'
import Kontak from '../pages/Kontak'
import Tentang from '../pages/Tentang'

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/tentang" element={<Tentang />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
