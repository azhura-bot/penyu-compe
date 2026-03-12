import ContactPageSection from '../components/kontak/ContactPageSection'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

function Kontak() {
  return (
    <main className="overflow-x-hidden bg-[#03114f] text-white">
      <Navbar activeLabel="Kontak" />
      <ContactPageSection />
      <Footer />
    </main>
  )
}

export default Kontak
