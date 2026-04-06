const cards = [
  {
    title: 'Nossa Missão',
    paragraphs: [
      'Na Cultura Builder Goiânia, estamos revolucionando a forma como as marcas se conectam com seu público, redefinindo o conceito de mídia Out-of-Home (OOH) com inovação, tecnologia e mobilidade. Entendemos que, no mundo atual, alcançar uma audiência ampla, diversificada e engajada é um dos maiores desafios para empresas de todos os tamanhos.',
      'Por isso, desenvolvemos uma solução única e de alto impacto: mega painéis de LED instalados nas bags das motos de entrega — levando a publicidade para as ruas, em movimento e em tempo real.',
    ],
  },
  {
    title: 'Nosso Propósito',
    paragraphs: [
      'Nosso propósito vai além da simples exposição de marcas; queremos criar experiências visuais memoráveis, que acompanhem o ritmo acelerado das cidades modernas e transformem o cenário publicitário urbano. Acreditamos no poder da mobilidade para multiplicar a visibilidade, e é assim que garantimos que sua mensagem chegue onde o público está, de forma dinâmica e personalizada.',
    ],
  },
  {
    title: 'Por Que Fazemos o Que Fazemos',
    paragraphs: [
      'Vivemos em um mundo em constante transformação digital, onde a atenção do consumidor é fragmentada e cada segundo conta. Pensando nisso, unimos tecnologia de ponta com estratégias inteligentes de comunicação para oferecer às marcas uma plataforma inovadora, flexível e eficaz.',
      'Nossa visão é ser o principal motor da evolução da mídia Out-of-Home, democratizando o acesso a anúncios que são ao mesmo tempo tecnológicos, sustentáveis e mensuráveis.',
    ],
  },
  {
    title: 'Nossa Visão para o Futuro',
    paragraphs: [
      'O futuro da publicidade está em soluções inteligentes, móveis e conectadas. Estamos investindo constantemente em inovação para expandir nossa rede de painéis de LED por todo o país e, em breve, internacionalmente.',
      'Queremos integrar inteligência artificial, dados em tempo real e novas tecnologias para personalizar campanhas ao máximo e aumentar a eficiência das ações publicitárias.',
    ],
  },
  {
    title: 'Nossa Expansão e Impacto Global',
    paragraphs: [
      'Com o crescimento acelerado do e-commerce e serviços de entrega, nossas motos equipadas com painéis LED se tornam canais estratégicos para as marcas alcançarem consumidores em trânsito. Estamos preparados para expandir nossa presença em grandes centros urbanos, potencializando a comunicação outdoor em escala global e consolidando parcerias que impulsionem o futuro da mídia exterior.',
    ],
  },
]

export default function About() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-content">
        <h2>Sobre Nós</h2>
        <div className="about-grid">
          {cards.map((card) => (
            <div key={card.title} className="about-card">
              <h3>{card.title}</h3>
              {card.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
