# Contexto del Proyecto: Bootstrap MVP - Monorepo

## Resumen General
Este proyecto es una implementación de un sistema de autorización y autenticación con un modelo RBAC (Control de Acceso Basado en Roles) básico, construido como un MVP (Producto Mínimo Viable). Está organizado como un **monorepo** que contiene el backend (NestJS) y el frontend (React + Vite).

## Arquitectura del Monorepo
- **Monorepo con pnpm workspaces**: El proyecto utiliza pnpm workspaces para gestionar múltiples aplicaciones en un solo repositorio con dependencias centralizadas.
- **Estructura modular**: Cada aplicación (backend y frontend) es independiente pero comparte herramientas de desarrollo, configuración y potencialmente librerías comunes.

### Backend (NestJS)
- **Arquitectura Modular**: Sigue una arquitectura modular, típica de aplicaciones construidas con el framework NestJS. Cada dominio funcional (usuarios, roles, permisos, autenticación, etc.) está separado en módulos independientes bajo `apps/backend/src/modules`.
- **Lógica de negocio**: Se organiza en servicios y controladores, siguiendo el patrón de diseño de inyección de dependencias y separación de responsabilidades.
- **Persistencia**: Utiliza Prisma ORM para la gestión de la base de datos, con migraciones y seeds definidos en `apps/backend/prisma/`.
- **Autenticación y Autorización**: Implementa autenticación JWT y autorización RBAC usando guards personalizados y Passport.js.
- **Testing**: Incluye pruebas unitarias y de integración con Jest.

### Frontend (React + Vite)
- **Framework**: React 19 con TypeScript
- **Build Tool**: Vite 7 para desarrollo rápido y build optimizado
- **Linting**: ESLint con plugins específicos para React
- **Hot Module Replacement (HMR)**: Desarrollo ágil con recarga instantánea

## Tecnologías y Paquetes Principales

### Backend
- **Lenguaje**: TypeScript
- **Framework principal**: [NestJS](https://nestjs.com/) (v11)
  - `@nestjs/common`, `@nestjs/core`, `@nestjs/platform-express`, `@nestjs/config`, `@nestjs/jwt`, `@nestjs/passport`, `@nestjs/typeorm`
- **ORM**: [Prisma](https://www.prisma.io/) (`@prisma/client`, migraciones en `prisma/`)
- **Base de datos**: MySQL (driver: `mysql2`)
- **ORM alternativo**: TypeORM (`typeorm`), aunque el uso principal es Prisma
- **Autenticación**: Passport.js (`passport`, `passport-jwt`, `passport-local`)
- **Hashing de contraseñas**: `bcrypt`
- **Programación reactiva**: `rxjs`
- **Testing**: Jest
- **Linting y formato**: ESLint, Prettier

### Frontend
- **Framework UI**: React 19
- **Build Tool**: Vite 7
- **Lenguaje**: TypeScript
- **Linting**: ESLint con plugins para React Hooks y React Refresh
- **Plugin de Vite**: @vitejs/plugin-react para Fast Refresh

### Herramientas del Monorepo
- **Gestor de paquetes**: pnpm con workspaces
- **Node.js**: >= 20.19.0
- **Workspaces**: Definidos en `pnpm-workspace.yaml`

## Estructura de Carpetas del Monorepo
```
/
├── apps/
│   ├── backend/              # API Backend con NestJS
│   │   ├── src/              # Código fuente
│   │   │   ├── main.ts       # Punto de entrada
│   │   │   ├── app.module.ts # Módulo raíz
│   │   │   ├── modules/      # Módulos funcionales
│   │   │   └── common/       # Código compartido (guards, constantes)
│   │   ├── prisma/           # Esquema, migraciones y seeds
│   │   ├── test/             # Pruebas E2E
│   │   └── package.json      # Dependencias del backend
│   └── frontend/             # Aplicación Frontend con React + Vite
│       ├── src/              # Código fuente
│       ├── public/           # Assets estáticos
│       ├── index.html        # HTML principal
│       ├── vite.config.js    # Configuración de Vite
│       └── package.json      # Dependencias del frontend
├── packages/                 # Librerías compartidas (opcional)
├── copilot/                  # Documentación y contexto
├── node_modules/             # Dependencias centralizadas
├── package.json              # Scripts y configuración raíz
├── pnpm-workspace.yaml       # Configuración de workspaces
└── README.md                 # Documentación principal
```

## Patrones y buenas prácticas
- **Inyección de dependencias**: Uso extensivo de providers y servicios de NestJS
- **Guards personalizados**: Para roles y permisos en el backend
- **Separación de responsabilidades**: Controladores para endpoints, servicios para lógica de negocio
- **Migraciones y seeds**: Automatización de la gestión de la base de datos
- **Monorepo organizado**: Separación clara entre backend, frontend y librerías compartidas
- **Dependencias centralizadas**: Un solo `node_modules` en la raíz para mejor gestión

## Scripts útiles (desde la raíz)

### Desarrollo
- `pnpm dev`: Iniciar backend y frontend simultáneamente
- `pnpm dev:backend`: Iniciar solo el backend en modo watch
- `pnpm dev:frontend`: Iniciar solo el frontend con Vite

### Build
- `pnpm build`: Compilar ambos proyectos
- `pnpm build:backend`: Compilar solo el backend
- `pnpm build:frontend`: Compilar solo el frontend

### Testing (Backend)
- `pnpm test`: Ejecutar tests unitarios
- `pnpm test:e2e`: Ejecutar tests end-to-end
- `pnpm test:cov`: Ejecutar tests con cobertura

### Otros
- `pnpm lint`: Linting en ambos proyectos
- `pnpm seed`: Poblar la base de datos con datos iniciales
- `pnpm start:backend:prod`: Iniciar backend en modo producción

## Autores
- Victor Pinedo
- Jose Soto

---

> **Nota:** Este archivo resume la arquitectura, tecnologías y estructura del monorepo para referencia rápida y onboarding de nuevos desarrolladores.
