const benefits = [
  {
    title: 'Visibilidade em Movimento',
    desc: 'Sua marca vista por milhões enquanto nossos painéis viajam pelas ruas.',
  },
  {
    title: 'Conteúdo Cativante',
    desc: 'Capacidade para até 50 vídeos de alta qualidade, assegurando propagandas impactantes.',
  },
  {
    title: 'Flexibilidade Total',
    desc: 'Atualize suas campanhas a qualquer momento, mantendo seu conteúdo sempre relevante.',
  },
  {
    title: 'Autonomia Energética',
    desc: 'Bateria que suporta até 9 horas de operação contínua.',
  },
  {
    title: 'Monitoramento em Tempo Real',
    desc: 'Dados analíticos para ajustar sua estratégia sempre que necessário.',
  },
  {
    title: 'Suporte Personalizado',
    desc: 'Estamos aqui para criar campanhas que atendam às suas necessidades específicas.',
  },
]

export default function Benefits() {
  return (
    <section className="benefits">
      <h2>Benefícios Exclusivos</h2>
      <div className="benefits-grid">
        {benefits.map((b) => (
          <div key={b.title} className="benefit-card">
            <h3>{b.title}</h3>
            <p>{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
