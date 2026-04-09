const partners = [
  {
    icon: '☁️',
    name: 'AWS',
    desc: 'Amazon Web Services — Infraestrutura de nuvem líder mundial para escala ilimitada. Potencialize seu negócio com a mesma base tecnológica das maiores empresas do planeta.',
  },
  {
    icon: '⚡',
    name: 'NVIDIA',
    desc: 'O motor da revolução da IA generativa em nossas mãos. GPUs e frameworks de ponta para treinar e rodar modelos de inteligência artificial de alta performance.',
  },
  {
    icon: '🏭',
    name: 'Votorantim',
    desc: 'Metodologia validada por quem lidera o mercado industrial brasileiro. Transformação digital com a solidez de uma das maiores empresas do Brasil.',
  },
]

export default function Partners() {
  return (
    <section id="parceiros" className="section section-alt">
      <div className="section-inner">

        {/* ── Logos Cultura Builder nos cantos ── */}
        <div className="cb-brand-bar">
          <img
            src="/images/cultura-builder-logo.png"
            alt="Cultura Builder"
            className="cb-logo-left"
          />
          <img
            src="/images/cultura-builder-icon.jpg"
            alt="Cultura Builder Icon"
            className="cb-logo-right"
          />
        </div>

        <div className="section-header">
          <div className="badge">🛡️ Ecossistema de Elite</div>
          <h2 className="section-title">
            Tecnologia de Ponta com <span className="green">Parceiros Globais</span>
          </h2>
          <p className="section-desc">
            Como consultor do time de vendas da Cultura Builder, entrego soluções apoiadas pelas
            maiores potências tecnológicas do mundo. Não é apenas consultoria, é acesso ao
            ecossistema que está redefinindo a indústria.
          </p>
        </div>

        {/* ── Foto do Time ── */}
        <div className="cb-team-wrap">
          <img
            src="/images/cultura-builder-time.png"
            alt="Cultura Builder Time"
            className="cb-team-img"
          />
          <div className="cb-team-badge">🚀 Cultura Builder Team</div>
        </div>

        <div className="partners-grid">
          {partners.map((p) => (
            <div key={p.name} className="partner-card">
              <div className="icon-box" style={{ margin: '0 auto 1.5rem' }}>{p.icon}</div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
