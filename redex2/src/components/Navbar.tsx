import { useEffect } from 'react'

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelector('.nav')?.classList.toggle('scrolled', window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="nav">
      <div className="nav-container">
        <a href="#" className="nav-brand">
          <img src="/images/cultura-builder-icon.jpg" alt="Cultura Builder" className="nav-logo" />
          <span className="nav-brand-name">Vilson <span>Mota</span></span>
        </a>

        <div className="nav-links">
          <a href="#parceiros" className="nav-link" onClick={(e) => scrollTo(e, '#parceiros')}>Parceiros</a>
          <a href="#sobre" className="nav-link" onClick={(e) => scrollTo(e, '#sobre')}>Sobre</a>
          <a href="#servicos" className="nav-link" onClick={(e) => scrollTo(e, '#servicos')}>Serviços</a>
          <a href="#contato" className="nav-link" onClick={(e) => scrollTo(e, '#contato')}>Resultados</a>
          <a href="https://wa.me/5562984924326" className="nav-cta" target="_blank" rel="noopener noreferrer">
            Agendar Consultoria
          </a>
        </div>
      </div>
    </nav>
  )
}
