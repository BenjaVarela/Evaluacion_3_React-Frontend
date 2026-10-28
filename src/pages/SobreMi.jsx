export default function SobreMi() {
  return (
    <article className="pagina-sobre-mi">
      <header>
        <h1>Sobre mí</h1>
      </header>

      <section className="presentacion-container">
        <figure>
          <figcaption>Fotografía de Benjamín Varela</figcaption>
        </figure>
        <p>
          Actualmente estudio en la Universidad Católica de Temuco, tengo 19 años recien cumplidos. 
          Me apasiona el desarrollo de scripts en python y aprender cosas nuevas de programación.
        </p>
      </section>

      <section className="seccion-detalles">
        <article>
          <h2>¿Qué estudio?</h2>
          <p>
            Curso la carrera de Ingeniería Civil Informática en la Universidad Católica de Temuco y
            actualmente en primer año de la carrera.
          </p>
        </article>
        <article>
          <h2>¿Qué me interesa?</h2>
          <ul>
            <li>Automatización de procesos y desarrollo de aplicaciones backend.</li>
            <li>Aprender constantemente nuevas herramientas, frameworks y buenas prácticas de arquitectura.</li>
          </ul>
        </article>
        <article>
          <h2>¿Hacia dónde quiero ir?</h2>
          <p>
            Quisiera llegar a emprender con aplicaciones o servicios que ayuden a las personas y que sean útiles para la sociedad.
          </p>
        </article>
      </section>
    </article>
  )
}