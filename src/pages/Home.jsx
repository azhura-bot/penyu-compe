import ContactSection from '../components/home/ContactSection'
import HeroSection from '../components/home/HeroSection'
import ProgramSection from '../components/home/ProgramSection'
import ThreatSection from '../components/home/ThreatSection'
import WhySection from '../components/home/WhySection'
import Navbar from '../components/layout/Navbar'

function Home() {
  return (
    <main className="overflow-hidden bg-[#03114f] text-white">
      <Navbar activeLabel="Beranda" />
      <HeroSection />
      <WhySection />
      <ThreatSection />
      <ProgramSection />
      <ContactSection />
    </main>
  )
}

export default Home
