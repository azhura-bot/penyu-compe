import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Kontak from '../pages/Kontak'
import Tentang from '../pages/Tentang'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/tentang" element={<Tentang />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
