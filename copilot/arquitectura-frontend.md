# Arquitectura del Frontend

Este documento describe la arquitectura, tecnologías y scaffolding actual del frontend del proyecto RBAC Bootstrap MVP.

## Tecnologías Usadas
- **Framework:** React 18
- **Build Tool:** Vite 7
- **Lenguaje:** JavaScript (con soporte para JSX)
- **UI Kit:** Tabler React
- **Linting:** ESLint con plugins para React Hooks y React Refresh
- **Plugin de Vite:** @vitejs/plugin-react para Fast Refresh

## Estructura de Carpetas
```
apps/frontend/
├── src/
│   ├── App.jsx           # Componente principal
│   ├── main.jsx          # Punto de entrada
│   ├── index.css         # Estilos globales
│   ├── App.css           # Estilos del componente App
│   ├── assets/           # Imágenes y SVG
│   ├── components/       # Componentes reutilizables (vacío actualmente)
│   └── pages/
│       └── LoginPage.jsx # Página de login
├── public/
│   └── vite.svg          # Favicon
├── index.html            # HTML principal
├── vite.config.js        # Configuración de Vite
├── eslint.config.js      # Configuración de ESLint
├── package.json          # Dependencias y scripts
└── README.md             # Documentación
```

## Scripts Útiles
- `pnpm dev:frontend`: Inicia el frontend en modo desarrollo
- `pnpm build:frontend`: Compila el frontend
- `pnpm lint:frontend`: Ejecuta ESLint



## Estado de Integración de Tabler React y Login
- Tabler React se utiliza en la página de login (`LoginPage.jsx`) para el formulario, layout y experiencia de usuario (loading, error, botón, card).
- El login está integrado con el backend: el formulario envía las credenciales al endpoint `/auth/login` y guarda el token JWT en `localStorage` tras autenticación exitosa.
- Los mensajes de error y el estado de carga se muestran usando componentes de Tabler React.
- No se ha integrado el dashboard ni los componentes avanzados de Tabler React (sidebar, navegación, widgets, tablas, gráficos, etc.).
- La carpeta `components` sigue vacía y no existen componentes reutilizables basados en Tabler React.
- No hay estructura de dashboard ni navegación implementada; la aplicación muestra únicamente la pantalla de login.

## Notas
- El frontend está preparado para consumir la API del backend NestJS.
- El único componente de página implementado es el login, usando algunos componentes de Tabler React.
- La integración completa del dashboard y sus componentes está pendiente.
