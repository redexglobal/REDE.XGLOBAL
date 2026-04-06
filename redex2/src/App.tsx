import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ImageGrid from './components/ImageGrid'
import DemoSection from './components/DemoSection'
import Benefits from './components/Benefits'
import About from './components/About'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <>
      <div className="branding-banner">
        <span className="branding-text">Sua Marca em Movimento</span>
      </div>
      <Navbar />
      <div className="container">
        <Hero />
        <ImageGrid />
        <DemoSection />
        <Benefits />
        <About />
        <CTA />
        <Contact />
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
