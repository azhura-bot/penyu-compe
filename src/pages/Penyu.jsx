import PenyuSection from '../components/home/PenyuSection'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

function Penyu() {
  return (
    <main className="overflow-hidden bg-[#03114f] text-white">
      <Navbar activeLabel="Penyu" />
      <PenyuSection />
      <Footer />
    </main>
  )
}

export default Penyu
