const cards = [
  {
    src: '/images/moto-led.jpg',
    alt: 'Painel LED em moto',
    title: 'Tecnologia de Ponta',
    desc: 'Painéis LED de alta resolução para máximo impacto visual',
  },
  {
    src: '/images/bag-demo.jpg',
    alt: 'Publicidade em movimento',
    title: 'Alcance Dinâmico',
    desc: 'Sua marca em movimento por toda a cidade',
  },
  {
    src: '/images/acai-led.jpg',
    alt: 'Impacto visual',
    title: 'Impacto Garantido',
    desc: 'Visibilidade incomparável para sua marca',
  },
]

export default function ImageGrid() {
  return (
    <div className="image-grid">
      {cards.map((card) => (
        <div key={card.title} className="image-card">
          <img src={card.src} alt={card.alt} />
          <div className="image-overlay">
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
