export default function CTA() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector('#contato')
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Eleve sua Marca ao Próximo Nível</h2>
        <p>
          Não perca a oportunidade de fazer parte desta revolução publicitária.
          Oferecemos contratos flexíveis de 3, 6, 9 ou 12 meses para garantir
          uma presença consistente da sua marca.
        </p>
        <a href="#contato" className="button" onClick={handleClick}>
          Entre em Contato
        </a>
      </div>
    </section>
  )
}
