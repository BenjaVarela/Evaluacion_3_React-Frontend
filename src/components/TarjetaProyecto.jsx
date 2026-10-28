export default function TarjetaProyecto({ titulo, descripcion, enlace, tecnologias }) {
  return (
    <article className="tarjeta-proyecto">
      <figure>
        <figcaption>Vista previa de {titulo}</figcaption>
      </figure>
      <section>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        {tecnologias && (
          <p>
            <small><strong>Tecnologías:</strong> {tecnologias}</small>
          </p>
        )}
        {enlace && (
          <p>
            <a href={enlace} target="_blank" rel="noopener noreferrer">
              Entrar al proyecto
            </a>
          </p>
        )}
      </section>
    </article>
  )
}