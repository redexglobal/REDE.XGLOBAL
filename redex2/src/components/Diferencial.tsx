const cards = [
  { icon: '🚀', title: 'Velocidade 10x', desc: 'Prototipe e lance produtos em dias, não meses.' },
  { icon: '🤖', title: 'IA como Copiloto', desc: 'Agentes inteligentes que aceleram cada etapa do processo.' },
  { icon: '🏗️', title: 'Infra Enterprise', desc: 'AWS e NVIDIA nos bastidores garantindo escala e performance.' },
  { icon: '🎯', title: 'Sem Barreiras', desc: 'Não precisa saber programar. Foco no negócio, não no código.' },
]

export default function Diferencial() {
  return (
    <section className="section section-alt">
      <div className="section-inner">
        <div className="section-header">
          <div className="badge">⚡ O Diferencial</div>
          <h2 className="section-title">
            Vibe Coding &amp; <span className="green">Escala</span>
          </h2>
          <p className="section-desc">
            Construímos em dias o que levava meses. Nossa metodologia permite que sua empresa
            crie apps, automações e agentes de IA com foco total no negócio.
          </p>
        </div>

        <div className="diferencial-grid">
          <div className="diferencial-left">
            <p className="diferencial-left-title">
              Com o <span className="highlight">Vibe Coding</span>, você não precisa ser
              programador para construir soluções poderosas. Utilizamos créditos e suporte
              técnico de elite (AWS/NVIDIA) para transformar ideias em produtos reais —
              com velocidade e qualidade profissional.
            </p>
            <p className="diferencial-left-title">
              O resultado? Empresas que antes dependiam de meses de desenvolvimento agora
              lançam em semanas. É a democratização da tecnologia acontecendo agora em
              Goiânia.
            </p>
          </div>

          <div className="diferencial-right">
            {cards.map((c) => (
              <div key={c.title} className="diferencial-card">
                <div className="icon-box">{c.icon}</div>
                <div className="diferencial-card-text">
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
