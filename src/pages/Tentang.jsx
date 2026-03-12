import AboutHeroSection from '../components/tentang/AboutHeroSection'
import DocumentationSection from '../components/tentang/DocumentationSection'
import VisionMissionSection from '../components/tentang/VisionMissionSection'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

function Tentang() {
  return (
    <main className="overflow-x-hidden bg-[#03114f] text-white">
      <Navbar activeLabel="Tentang" />
      <AboutHeroSection />
      <VisionMissionSection />
      <DocumentationSection />
      <Footer />
    </main>
  )
}

export default Tentang
