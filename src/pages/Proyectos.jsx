import TarjetaProyecto from '../components/TarjetaProyecto'

export default function Proyectos() {
  const listaProyectos = [
    {
      id: 1,
      titulo: 'Proyecto Backend',
      descripcion: 'Proyecto en desarrolo, de una API, junto a su contrato REST y actualmente se le está agregando una base de datos para escalar el proyecto y que pueda ser utilizado por otros desarrolladores.',
      enlace: 'https://github.com/BenjaVarela/backend-2026-grupo-3',
      tecnologias: 'Python 97,4%, Mako 2,6%'
    },
    {
      id: 2,
      titulo: 'Calculadora de limites',
      descripcion: 'Aplicación que gráfica límites matemáticos utilizando una interfaz interactiva. Permite a los usuarios ingresar funciones y visualizar sus límites de manera visual.',
      enlace: 'https://github.com/BenjaVarela/Evaluacion_Integrada_1_-EID-',
      tecnologias: 'Python 100%'
    },
    {
      id: 3,
      titulo: 'Mini Portafolio Personal',
      descripcion: 'Sitio web personal. Desarrollado como evaluación práctica de Frontend.',
      enlace: 'https://github.com/BenjaVarela/my_web',
      tecnologias: 'HTML 55%, CSS 45%'
    }
  ]

  return (
    <article className="pagina-proyectos">
      <header>
        <h1>Mis Proyectos</h1>
        <p>Una selección de los trabajos y proyectos prácticos que he realizado.</p>
      </header>

      <section className="lista-proyectos">
        {listaProyectos.map((proj) => (
          <TarjetaProyecto 
            key={proj.id}
            titulo={proj.titulo}
            descripcion={proj.descripcion}
            enlace={proj.enlace}
            tecnologias={proj.tecnologias}
          />
        ))}
      </section>
    </article>
  )
}