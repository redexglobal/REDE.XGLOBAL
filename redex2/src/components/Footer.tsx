export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/images/ISOTIPO 1.png" alt="Cultura Builder" className="footer-logo" />
          <span className="footer-brand-name">Vilson <span>Mota</span></span>
        </div>

        <div className="footer-links">
          <a href="https://wa.me/5562984924326" className="footer-link" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="https://www.instagram.com/culturabuildergoiania/" className="footer-link" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://hub.culturabuilder.com/hub" className="footer-link" target="_blank" rel="noopener noreferrer">Cultura Builder</a>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Vilson Mota · Cultura Builder Goiânia
        </p>
      </div>
    </footer>
  )
}
