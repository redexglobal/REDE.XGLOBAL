export default function DemoSection() {
  return (
    <section className="demo-section">
      <div className="demo-content">
        <h2>Nossa Tecnologia em Ação</h2>
        <div className="demo-container">
          <div className="demo-image-container">
            <img
              src="/images/LOGO 1.png"
              alt="Cultura Builder Goiânia"
              className="demo-image"
            />
            <div className="demo-overlay">
              <div className="demo-text">
                <h3>Painéis LED de Alta Resolução</h3>
                <p>
                  Impacto visual garantido: Sua marca brilhando nas ruas de Goiânia
                  com nossa tecnologia LED de última geração
                </p>
              </div>
              <a
                href="https://wa.me/5562984924326"
                className="demo-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
