export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img
            src="/images/ISOTIPO 1.png"
            alt="Cultura Builder Goiânia"
            className="footer-logo"
          />
          <p>Transformando a publicidade em movimento</p>
          <p>Goiânia - GO</p>
        </div>

        <div className="footer-section">
          <h3>Contato</h3>
          <p>Telefones:</p>
          <p>(62) 98492-4326</p>
          <p>(62) 98445-2548</p>
          <div className="social-links">
            <a
              href="https://www.instagram.com/culturabuildergoiania/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/5562984924326"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp 1
            </a>
            <a
              href="https://wa.me/5562984452548"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp 2
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Horário de Atendimento</h3>
          <p>Segunda a Sexta: 9h às 18h</p>
          <p>Sábado: 9h às 13h</p>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Cultura Builder Goiânia. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
