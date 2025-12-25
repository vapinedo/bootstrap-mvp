# Contexto del Proyecto: Bootstrap MVP

## Resumen General
Este proyecto es una implementación de un sistema de autorización y autenticación con un modelo RBAC (Control de Acceso Basado en Roles) básico, construido como un MVP (Producto Mínimo Viable).

## Arquitectura
- **Backend Modular**: El proyecto sigue una arquitectura modular, típica de aplicaciones construidas con el framework NestJS. Cada dominio funcional (usuarios, roles, permisos, autenticación, etc.) está separado en módulos independientes bajo `src/modules`.
- **Lógica de negocio**: Se organiza en servicios y controladores, siguiendo el patrón de diseño de inyección de dependencias y separación de responsabilidades.
- **Persistencia**: Utiliza Prisma ORM para la gestión de la base de datos, con migraciones y seeds definidos en la carpeta `prisma/`.
- **Autenticación y Autorización**: Implementa autenticación JWT y autorización RBAC usando guards personalizados y Passport.js.
- **Testing**: Incluye pruebas unitarias y de integración con Jest.

## Tecnologías y Paquetes Principales
- **Lenguaje**: TypeScript
- **Framework principal**: [NestJS](https://nestjs.com/) (v11)
  - `@nestjs/common`, `@nestjs/core`, `@nestjs/platform-express`, `@nestjs/config`, `@nestjs/jwt`, `@nestjs/passport`, `@nestjs/typeorm`
- **ORM**: [Prisma](https://www.prisma.io/) (`@prisma/client`, migraciones en `prisma/`)
- **Base de datos**: MySQL (driver: `mysql2`)
- **ORM alternativo**: TypeORM (`typeorm`), aunque el uso principal parece ser Prisma
- **Autenticación**: Passport.js (`passport`, `passport-jwt`, `passport-local`)
- **Hashing de contraseñas**: `bcrypt`
- **Programación reactiva**: `rxjs`
- **Testing**: Jest
- **Linting y formato**: ESLint, Prettier

## Estructura de Carpetas
- `src/` - Código fuente principal
  - `main.ts` - Punto de entrada de la aplicación
  - `app.module.ts` - Módulo raíz
  - `modules/` - Módulos funcionales (prisma, security, auth, permission, role, user)
  - `common/` - Código compartido (guards, constantes, utilidades)
- `prisma/` - Esquema de base de datos, migraciones y seeds
- `test/` - Pruebas end-to-end y configuración de Jest
- `copilot/` - (Carpeta para documentación/contexto generado)

## Patrones y buenas prácticas
- **Inyección de dependencias**: Uso extensivo de providers y servicios de NestJS
- **Guards personalizados**: Para roles y permisos
- **Separación de responsabilidades**: Controladores para endpoints, servicios para lógica de negocio
- **Migraciones y seeds**: Automatización de la gestión de la base de datos

## Scripts útiles
- `start`, `start:dev`, `start:prod`: Iniciar la aplicación en diferentes modos
- `build`: Compilar el proyecto
- `test`, `test:e2e`: Ejecutar pruebas
- `lint`, `format`: Linting y formateo de código
- `seed`: Poblar la base de datos con datos iniciales

## Autores
- Victor Pinedo
- Jose Soto

---

> **Nota:** Este archivo resume la arquitectura, tecnologías y estructura del proyecto para referencia rápida y onboarding de nuevos desarrolladores.
