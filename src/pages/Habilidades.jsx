export default function Habilidades() {
  const tecnologias = [
    { nombre: 'HTML / CSS', nivel: '50' },
    { nombre: 'JavaScript', nivel: '50%' },
    { nombre: 'React', nivel: '30' },
    { nombre: 'Python', nivel: '75%' },
    { nombre: 'SQL', nivel: '30%' }
  ]

  const herramientas = ['Git', 'GitHub', 'VS Code', 'Node.js', 'FastAPI']

  return (
    <article className="pagina-habilidades">
      <header>
        <h1>Habilidades y Lenguajes</h1>
      </header>

      <section>
        <h2>Lenguajes y Tecnologías</h2>
        <section className="grid-tecnologias">
          {tecnologias.map((tech) => (
            <article key={tech.nombre}>
              <h3>{tech.nombre}</h3>
              <meter min="0" max="100" value={parseInt(tech.nivel)} title={tech.nivel}>
                {tech.nivel}
              </meter>
              <span>{tech.nivel}</span>
            </article>
          ))}
        </section>
      </section>

      <section>
        <h2>Herramientas de Trabajo</h2>
        <aside className="tags-herramientas">
          <ul>
            {herramientas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>
    </article>
  )
}