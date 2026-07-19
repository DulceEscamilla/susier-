# 🛡️ SUSIER - Sistema Unificado de Seguridad Inteligente para Espacios Residenciales

## 📋 Descripción del Proyecto

SUSIER es una plataforma integral de gestión de seguridad para condominios residenciales que optimiza la seguridad, control de acceso y comunicación entre residentes, guardias y administración.

**Versión:** 1.0.0  
**Estado:** En Desarrollo 🔨

---

## 🎯 Características Principales

### 👮 **Perfil Seguridad (Guardias)**
- ✅ Registro de visitas con foto, nombre, motivo, domicilio y datos de vehículos
- ✅ Lector QR para verificación de autorización previa
- ✅ Registro de paquetería con notificaciones automáticas
- ✅ Rondines con evidencias fotográficas
- ✅ Sistema de alertas por prioridad (baja, media, alta)
- ✅ Control de asistencia y turnos
- ✅ Registro de inicio/cierre de turno

### 🏠 **Perfil Residente**
- ✅ Gestión de información del domicilio, vehículos y residentes
- ✅ Autorizar visitas, empleados y mascotas
- ✅ Generar códigos QR de entrada
- ✅ Recibir notificaciones de paquetería
- ✅ Reportes, quejas, sugerencias y felicitaciones
- ✅ Reserva de áreas comunes
- ✅ Directorio de contactos

### 👨‍💼 **Perfil Administración**
- ✅ Control total de permisos y usuarios
- ✅ Análisis de desempeño de guardias
- ✅ Estadísticas de reportes y paquetería
- ✅ Padrón de residentes y contactos
- ✅ Calificación integral de guardias
- ✅ Gestión de áreas comunes

---

## 🏗️ Arquitectura del Proyecto

```
susier/
├── 📁 backend/               # API REST (Node.js + Express)
├── 📁 frontend-web/          # Aplicación web (React + TypeScript)
├── 📁 frontend-mobile/       # App móvil (React Native + Expo)
├── 📁 database/              # Scripts SQL y migraciones
├── 📁 docs/                  # Documentación del proyecto
├── 📁 docker/                # Configuración Docker
├── 📄 docker-compose.yml     # Orquestación de contenedores
├── 📄 .env.example           # Variables de entorno ejemplo
└── 📄 README.md              # Este archivo
```

---

## 🛠️ Stack Tecnológico

### Frontend Web
- **React 18** + TypeScript
- **Vite** (bundler ultrarrápido)
- **Tailwind CSS** + **Framer Motion** (UI moderna y futurista)
- **React Router** (navegación)
- **Axios** (HTTP client)
- **React Hook Form** (manejo de formularios)
- **Zustand** (state management)

### Mobile
- **React Native** + Expo
- **Expo Camera** (acceso a cámara)
- **Expo QR Code** (lector QR)
- **React Navigation** (navegación)
- **React Native Paper** (componentes)

### Backend
- **Node.js** + **Express**
- **TypeScript**
- **PostgreSQL** (base de datos)
- **TypeORM** (ORM)
- **JWT** (autenticación)
- **Nodemailer** (notificaciones)
- **Multer** (subida de archivos)
- **Docker** (containerización)

---

## 📦 Instalación

### Requisitos Previos
- Node.js 18+
- PostgreSQL 14+
- Docker & Docker Compose
- Git

### Clonar el Repositorio
```bash
git clone https://github.com/DulceEscamilla/susier-.git
cd susier-
```

### Configurar Entorno
```bash
cp .env.example .env
```

### Iniciar con Docker
```bash
docker-compose up -d
```

---

## 🚀 Uso Rápido

### Todos los servicios
```bash
docker-compose up
```

**Accesos:**
- 🌐 Frontend: http://localhost:5173
- 🔌 Backend API: http://localhost:3000
- 🗄️ PostgreSQL: localhost:5432

---

## 📚 Documentación

- [Estructura Detallada](./docs/STRUCTURE.md)
- [Instalación Local](./docs/INSTALLATION.md)
- [API Reference](./docs/API.md)
- [Base de Datos](./docs/DATABASE.md)
- [Guía de Contribución](./CONTRIBUTING.md)

---

## 👥 Equipo

**Desarrolladora:** Dulce Escamilla  
**Rol:** Full Stack Developer

---

## 📝 Licencia

MIT © 2026 SUSIER

---

🚀 **SUSIER: Seguridad Inteligente, Residentes Seguros**
