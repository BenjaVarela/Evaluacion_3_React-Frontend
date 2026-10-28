import { useState } from 'react'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  })

  const [errores, setErrores] = useState({})
  const [mensajeEnviado, setMensajeEnviado] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validar = () => {
    let err = {}
    if (!formData.nombre.trim()) err.nombre = 'El nombre es obligatorio'
    if (!formData.correo.trim()) {
      err.correo = 'El correo electrónico es obligatorio'
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      err.correo = 'Ingresa un correo electrónico válido'
    }
    if (!formData.mensaje.trim()) err.mensaje = 'El mensaje es obligatorio'
    return err
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validacionErrores = validar()
    if (Object.keys(validacionErrores).length === 0) {
      setMensajeEnviado(true)
      setErrores({})
      setFormData({ nombre: '', correo: '', mensaje: '' })
    } else {
      setErrores(validacionErrores)
      setMensajeEnviado(false)
    }
  }

  return (
    <article className="pagina-contacto">
      <header>
        <h1>Contacto</h1>
        <p>Envíame un mensaje!</p>
      </header>

      {mensajeEnviado && (
        <aside className="mensaje-exito">
          <p>Mensaje recibido.</p>
        </aside>
      )}

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Formulario de Contacto</legend>

          <p>
            <label htmlFor="nombre">Nombre *</label>
            <input 
              id="nombre"
              type="text" 
              name="nombre" 
              placeholder="Tu nombre" 
              value={formData.nombre} 
              onChange={handleChange} 
            />
            {errores.nombre && <strong>{errores.nombre}</strong>}
          </p>

          <p>
            <label htmlFor="correo">Correo electrónico *</label>
            <input 
              id="correo"
              type="email" 
              name="correo" 
              placeholder="tu@email.com" 
              value={formData.correo} 
              onChange={handleChange} 
            />
            {errores.correo && <strong>{errores.correo}</strong>}
          </p>

          <p>
            <label htmlFor="mensaje">Mensaje *</label>
            <textarea 
              id="mensaje"
              name="mensaje" 
              placeholder="Escribe tu mensaje aquí..." 
              rows="5"
              value={formData.mensaje} 
              onChange={handleChange} 
            />
            {errores.mensaje && <strong>{errores.mensaje}</strong>}
          </p>

          <button type="submit">Enviar mensaje</button>
        </fieldset>
      </form>
    </article>
  )
}