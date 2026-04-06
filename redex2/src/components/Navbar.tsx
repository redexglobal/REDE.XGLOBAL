import { useEffect } from 'react'

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.nav')
      if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 50)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#') return
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="logo-container">
          <img src="/images/LOGO 1.png" alt="Cultura Builder Goiânia Logo" className="logo" />
          <img src="/images/slogan.png" alt="Sua Marca em Movimento" className="slogan" />
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link" onClick={(e) => handleAnchorClick(e, '#')}>Início</a>
          <a href="#sobre" className="nav-link" onClick={(e) => handleAnchorClick(e, '#sobre')}>Sobre</a>
          <a href="#contato" className="nav-link" onClick={(e) => handleAnchorClick(e, '#contato')}>Contato</a>
        </div>
      </div>
    </nav>
  )
}
