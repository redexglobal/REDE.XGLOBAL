const tags = [
  'Vibe Coding Expert',
  'Ecossistema AWS/NVIDIA',
  '+7.000 Builders',
  'Certificação Blockchain',
]

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-photo-wrap">
            <div className="about-photo-card">
              <img src="/images/vilson-about.jpg" alt="Vilson Mota - Consultor de IA Cultura Builder Goiânia" />
            </div>
            <div className="about-role-badge">👤 Consultor de IA</div>
          </div>

          <div className="about-content">
            <div className="badge">👤 Sobre</div>
            <h2 className="about-name">Vilson <span>Mota</span></h2>

            <p className="about-text">
              Sou Vilson Mota, Consultor de IA focado em transformar processos complexos em
              resultados exponenciais. Através da Cultura Builder, ajudo líderes e empresas em
              Goiânia a dominarem o{' '}
              <span className="highlight">"Vibe Coding"</span> — construindo soluções robustas
              com a velocidade que o mercado atual exige, sem as barreiras da programação
              tradicional.
            </p>

            <p className="about-text">
              Minha missão é democratizar o acesso à inteligência artificial para empresas de
              todos os portes em Goiás, conectando-as ao ecossistema de parceiros globais como
              AWS, NVIDIA e Votorantim.
            </p>

            <div className="about-tags">
              {tags.map((tag) => (
                <div key={tag} className="about-tag">
                  <span className="check">✓</span>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
