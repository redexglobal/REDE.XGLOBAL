export default function Contact() {
  return (
    <section id="contato" className="contact-section">
      <div className="contact-content">
        <h2>Entre em Contato</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Telefones</h3>
            <div className="contact-info">
              <a
                href="https://wa.me/5562984924326"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon">📱</span>
                (62) 98492-4326
              </a>
              <a
                href="https://wa.me/5562984452548"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon">📱</span>
                (62) 98445-2548
              </a>
            </div>
          </div>

          <div className="contact-card">
            <h3>Redes Sociais</h3>
            <div className="contact-info">
              <a
                href="https://www.instagram.com/culturabuildergoiania/"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon">📸</span>
                @culturabuildergoiania
              </a>
            </div>
          </div>

          <div className="contact-card">
            <h3>Horário de Atendimento</h3>
            <div className="contact-info">
              <p><span className="contact-icon">⏰</span> Segunda a Sexta: 9h às 18h</p>
              <p><span className="contact-icon">⏰</span> Sábado: 9h às 13h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
