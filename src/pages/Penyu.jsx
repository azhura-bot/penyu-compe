import PenyuSection from '../components/home/PenyuSection'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import MusicPlayer from '../components/layout/MusicPlayer'


function Penyu() {
  return (
    <main className="overflow-hidden bg-[#03114f] text-white">
      <Navbar activeLabel="Penyu" />
      <PenyuSection />
      <Footer />
      <MusicPlayer /> 
    </main>
  )
}

export default Penyu
