import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header className="header">
        <NavLink to="/" className="logo">
          MiPortafolio
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/sobre-mi">Sobre mí</NavLink>
          <NavLink to="/habilidades">Habilidades</NavLink>
          <NavLink to="/proyectos">Proyectos</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>Benjamín Varela © 2026</p>
      </footer>
    </>
  )
}