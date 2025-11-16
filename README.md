# UTN-DS25-practicas

## 📋 Descripción
Repositorio creado para la realización de la tareas de la materia Desarrollo de Software. Se estructura en siete carpetas principales que contienen distintos módulos del proyecto.

## 📁 Estructura de carpetas

### 1. HTML-CSS-JS

Ejercicios realizados en HTML, CSS y JavaScript.

### 2. api-express-prisma-auth-docker

Versión más avanzada y dockerizada del backend y frontend con Express.js, Prisma, JWT, React y Vite. Incluye formularios con React Hook Form + Yup, validaciones y autorización. Además contiene 5 tests backend. 

```text
📂 api-express-prisma-auth-docker/
├── docker-compose.yml       

📂 backend/
├── Dockerfile               # Configuración del contenedor backend
├── .dockerignore
├── jest.config.js           # Configuración de Jest para tests
├── package.json
├── package-lock.json
├── tsconfig.json
├── .env.example             # Variables de entorno
├── Prisma/                  
│   ├── schema.prisma        # Esquema de base de datos
│   └── migrations/          # Migraciones generadas por Prisma
└── src/
    ├── app.ts                # Entrada principal del servidor Express
    ├── routes/               # Rutas agrupadas por entidad con autenticación     
    │   ├── book.routes.ts
    │   ├── book.routes.test.ts
    │   ├── author.routes.ts
    │   ├── user.routes.ts
    │   ├── contact.routes.ts
    │   └── auth.routes.ts
    ├── controllers/             # Lógica de cada endpoint + auth
    │   ├── book.controller.ts
    │   ├──book.controller.test.ts
    │   ├── author.controller.ts
    │   ├── user.controller.ts
    │   ├── contact.controller.ts
    │   └── auth.controller.ts
    ├── services/                 # Acceso a BD y lógica de negocio + auth
    │   ├── book.service.ts
    │   ├──book.service.test.ts
    │   ├── author.service.ts
    │   ├── user.service.ts
    │   ├── contact.service.ts
    │   └── auth.service.ts
    ├── middlewares/               # Logging, errores, auth y validaciones
    │   ├── logger.middleware.ts
    │   ├── validation.middleware.ts
    │   ├── auth.middleware.ts
    │   ├── auth.middleware.test.ts
    │   └── error.middleware.ts
    ├── validations/               # Validaciones separadas por entidad con ZOD
    │   ├── book.validation.ts
    │   ├── author.validation.ts
    │   ├── user.validation.ts
    │   ├── contact.validation.ts
    │   └── auth.validation.ts
    ├── types/                     # Tipos e interfaces TypeScript
    │   ├── author.types.ts
    │   ├── book.types.ts
    │   ├── user.types.ts
    │   ├── contact.types.ts
    │   └── auth.types.ts
    └── utils/                      # Utilidades
        ├── date.util.ts
        ├── date.util.test.ts
        └── prisma.ts

📂 frontend/
├── Dockerfile              # Configuración del contenedor frontend
├── .dockerignore
├── package.json            # Dependencias configuradas
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── README.md
├── index.html             # Index HTML donde se inyecta la App React
├─ public/                  # Archivos estáticos
└── src/
    ├── assets/            # Imágenes, íconos
    ├── components/         # Componentes reutilizables
    ├── pages/              # Páginas de la aplicación
    ├── hooks/              # Hooks personalizados
    ├── context/            # Contextos de React para estado global
    ├── validations/        # Shemas de Validaciones
    │   ├── contactSchema.js 
    │   └──loginSchema.js
    ├── helpers/
    │   └── auth.js         # Helper con funciones de Auth
    ├── App.jsx            # Componente raíz de la app
    ├── main.jsx           # Punto de entrada
    └── App.css            # Estilos globales
``` 

### 3. api-express-prisma-auth

Backend con Express.js, Prisma y JWT, sin Docker, tests ni utils.
Frontend igual que en  api-express-prisma-auth-docker pero sin formularios ni validaciones avanzadas.

### 4. api-express-prisma

Backend con Express y Prisma, sin autenticación, Docker, tests ni utils.

### 5. api-express

Backend solo con Express, sin Prisma, autenticación ni Docker.

### 6. mi-app

Frontend desarrollado con React y Vite, versión básica sin hooks ni context.

### 7. react-ui-lib

Frontend avanzado con React + Bootstrap.

```text
📂 react-ui-lib/
├── public/
│   └── vite.svg
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── src/
    ├── assets/
    ├── components/
    │   ├── AgregarLibro.jsx
    │   ├── BootstrapBookCard.jsx
    │   ├── CatalogoCompleto.jsx
    │   ├── Footer.jsx
    │   ├── Header.jsx
    │   ├── Layout.jsx
    │   ├── LibroDestacadoBootstrap.jsx
    │   └── Menu.jsx
    ├── pages/
    │   ├── Contacto.jsx
    │   ├── Destacados.jsx
    │   ├── Registro.jsx
    │   └── Secciones.jsx
    ├── hooks/
    │   └── useLibros.js
    ├── context/
    │   └── CatalogoContext.jsx
    ├── App.jsx
    ├── main.jsx
    └── App.css
```       

Nota: Esta es una versión avanzada del frontend, integrando librerías UI, hooks y context para un manejo más profesional del estado y la interfaz. Es el mismo que aparece en la carpeta api-express-prisma y api-express. 

## 🛠 Tecnologías utilizadas

- Frontend: React, Vite, Bootstrap, React Hook Form, Yup
- Backend: Node.js, Express.js, Prisma ORM, JWT, ZOD
- Testing: Jest 
- Contenedores: Docker (solo en la versión dockerizada)
- CORS: Control de origen para frontend externo
- Supabase: Hosting de la base de datos
- Lenguajes: JavaScript, TypeScript, HTML, CSS

## 👩‍💻 Autor

Pilar Wagner – Entrega Desarrollo de Software
