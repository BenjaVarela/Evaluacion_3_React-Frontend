import { Link } from 'react-router-dom'
import fotoPerfil from '../assets/isagi.jpg'

export default function Inicio() {
  return (
    <article className="pagina-inicio">
      <section className="hero">
        <div className="hero-texto">
          <header>
            <h1>Hola, soy Benjamín Varela</h1>
            <h2>Estudiante de Ingeniería Civil Informática</h2>
          </header>
          <p>
            Te invito a recorrer mi portafolio y conocer más sobre mis habilidades, proyectos y experiencia en el desarrollo de software.
          </p>
          <p>
            <Link to="/sobre-mi">Explora mi sitio web</Link>
          </p>
        </div>

        <figure className="hero-imagen">
          <img src={fotoPerfil} alt="Benjamín Varela" />
        </figure>
      </section>
    </article>
  )
}