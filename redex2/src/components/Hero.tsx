export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="badge">⚡ Consultoria de IA &amp; Vibe Coding</div>

          <h1 className="hero-title">
            Implemente a{' '}
            <span className="green">Inteligência Artificial</span>{' '}
            que as Gigantes Globais já Usam.
          </h1>

          <p className="hero-desc">
            Consultoria especializada em IA e Vibe Coding para empresas em Goiânia.
            Leve a eficiência da AWS, NVIDIA e Votorantim para o DNA do seu negócio
            com Vilson Mota.
          </p>

          <div className="hero-buttons">
            <a href="https://wa.me/5562984924326" className="btn-primary" target="_blank" rel="noopener noreferrer">
              💬 Agendar Diagnóstico de IA
            </a>
            <a href="#sobre" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' }) }}>
              👤 Conheça Vilson Mota
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <div className="stat-value">+7.000</div>
              <div className="stat-label">Builders na comunidade</div>
            </div>
            <div>
              <div className="stat-value">R$ 25k+</div>
              <div className="stat-label">Créditos de nuvem</div>
            </div>
            <div>
              <div className="stat-value">AWS</div>
              <div className="stat-label">NVIDIA &amp; Votorantim</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-photo-card">
            <div className="hero-photo-placeholder">
              <img src="/images/LOGO 1.png" alt="Cultura Builder Goiânia" />
            </div>
            <div className="hero-role-badge">👤 Consultor de IA</div>
          </div>
        </div>
      </div>
    </section>
  )
}
