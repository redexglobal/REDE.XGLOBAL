const services = [
  {
    icon: '🔍',
    title: 'Diagnóstico de Produtividade com IA',
    desc: 'Análise completa dos processos da sua empresa para identificar onde a IA pode gerar ganhos imediatos de eficiência, redução de custos e vantagem competitiva.',
  },
  {
    icon: '⚙️',
    title: 'Automações Inteligentes',
    desc: 'Implementação de workflows automatizados com IA para eliminar tarefas repetitivas, otimizar operações e liberar seu time para o que realmente importa.',
  },
  {
    icon: '💻',
    title: 'Consultoria para Apps/SaaS com IA',
    desc: 'Do conceito ao produto. Ajudo a criar aplicativos e plataformas SaaS utilizando Vibe Coding — sem necessidade de equipe técnica tradicional.',
  },
  {
    icon: '👥',
    title: 'Treinamento de Times na Cultura Builder',
    desc: 'Capacite sua equipe na metodologia Vibe Coding. Trilhas práticas, mentorias com executivos Fortune 500 e acesso a +R$25.000 em créditos de IA.',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="section">
      <div className="section-inner">
        <div className="section-header">
          <div className="badge">🏢 Serviços</div>
          <h2 className="section-title">
            Como posso <span className="green">ajudar sua empresa</span>
          </h2>
          <p className="section-desc">
            Soluções sob medida para levar inteligência artificial ao centro da sua operação.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <div className="icon-box">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
