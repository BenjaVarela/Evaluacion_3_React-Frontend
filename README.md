# Mini Portafolio Personal - React

Este proyecto es un mini portafolio web personal desarrollado con React, Vite y React Router. Permite mostrar mis datos principales, estudios, habilidades técnicas, proyectos desarrollados y ofrece un canal de comunicación mediante un formulario interactivo.

## Secciones del sitio
- **Inicio (`/`)**: Presentación principal con mi nombre, la universidad donde estudio e invitación a recorrer el sitio.
- **Sobre mí (`/sobre-mi`)**: Breve descripción sobre qué estudio (Ingeniería Civil Informática), intereses de desarrollo y mi visión del futuro yo.
- **Habilidades (`/habilidades`)**: Lista detallada de herramientas, tecnologías y lenguajes de programación junto a su nivel.
- **Proyectos (`/proyectos`)**: Selección de trabajos prácticos que incluyen título, descripción, tecnologías y enlace a GitHub.
- **Contacto (`/contacto`)**: Formulario interactivo que valida campos obligatorios, formato de correo y muestra un mensaje de confirmación al enviar.

## Requisitos e instalación
Para ejecutar este proyecto de forma local, asegúrate de contar con Node.js instalado.

1. Clona el repositorio o descarga el código fuente.
2. Abre una terminal en la carpeta raíz del proyecto y ejecuta el siguiente comando para instalar las dependencias:
   npm install

## Cómo ejecutarlo
Para iniciar el servidor local de desarrollo:
npm run dev

Abre en tu navegador la dirección URL que se indica en la consola (por defecto http://localhost:5173).

## Estructura de carpetas y archivos principales
```text
/
├── public/
│   └── favicon.jpg           # Icono de la pestaña del sitio
├── src/
│   ├── assets/
│   │   └── isagi.jpg         # Imagen de perfil utilizada en Inicio
│   ├── components/
│   │   ├── Footer.jsx        # Componente global de pie de página
│   │   ├── Header.jsx        # Componente global de barra de navegación
│   │   ├── Layout.jsx        # Estructura principal con Header, Outlet y Footer
│   │   └── TarjetaProyecto.jsx # Componente reusable para mostrar cada proyecto vía props
│   ├── pages/
│   │   ├── Contacto.jsx      # Página de contacto con formulario y estado
│   │   ├── Habilidades.jsx  # Vista con listado de tecnologías
│   │   ├── Inicio.jsx       # Vista principal con presentación e imagen
│   │   ├── Proyectos.jsx    # Vista que mapea la lista de proyectos
│   │   └── SobreMi.jsx      # Vista con información personal y académica
│   ├── App.css               # Estilos específicos de componentes de la aplicación
│   ├── App.jsx               # Configuración de las rutas de la aplicación
│   ├── index.css             # Estilos globales y paleta de colores personalizada
│   └── main.jsx              # Punto de entrada de React con BrowserRouter
├── .gitignore                # Archivos ignorados por Git
├── eslint.config.js          # Configuración del linter
├── index.html                # Plantilla HTML del sitio
├── package-lock.json         # Bloqueo de versiones de dependencias
├── package.json              # Dependencias y scripts de ejecución
├── vite.config.js            # Configuración del empaquetador Vite
├── README.md                 # Documentación del proyecto
└── uso_ia.md                 # Declaración de uso de Inteligencia Artificial