import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h2>Mi Portafolio</h2>
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/sobre-mi">Sobre mí</NavLink>
        <NavLink to="/habilidades">Habilidades</NavLink>
        <NavLink to="/proyectos">Proyectos</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
    </header>
  )
}