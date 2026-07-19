# 📁 Estructura Detallada del Proyecto SUSIER

## Árbol Completo

```
susier/
│
├── 📁 backend/
│   ├── 📁 src/
│   │   ├── 📁 config/           # Configuración de DB, JWT, etc
│   │   ├── 📁 controllers/      # Controladores por módulo
│   │   │   ├── auth.controller.ts
│   │   │   ├── security.controller.ts
│   │   │   ├── resident.controller.ts
│   │   │   ├── admin.controller.ts
│   │   │   └── ...
│   │   ├── 📁 entities/         # Modelos TypeORM
│   │   ├── 📁 services/         # Lógica de negocio
│   │   ├── 📁 routes/           # Rutas API
│   │   ├── 📁 middleware/       # Autenticación, validación
│   │   ├── 📁 utils/            # Utilidades
│   │   ├── 📁 types/            # Tipos TypeScript
│   │   └── app.ts
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
├── 📁 frontend-web/
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── 📁 Security/     # Componentes perfil seguridad
│   │   │   ├── 📁 Resident/     # Componentes perfil residente
│   │   │   ├── 📁 Admin/        # Componentes perfil admin
│   │   │   ├── 📁 Common/       # Componentes reutilizables
│   │   │   └── 📁 Layout/       # Layout general
│   │   ├── 📁 pages/
│   │   ├── 📁 hooks/
│   │   ├── 📁 services/
│   │   ├── 📁 store/            # Zustand stores
│   │   ├── 📁 types/
│   │   ├── 📁 utils/
│   │   ├── 📁 styles/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── 📁 public/
│   ├── Dockerfile
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── package.json
│
├── 📁 frontend-mobile/
│   ├── 📁 src/
│   │   ├── 📁 screens/
│   │   │   ├── 📁 Security/
│   │   │   ├── 📁 Resident/
│   │   │   └── 📁 Auth/
│   │   ├── 📁 components/
│   │   ├── 📁 navigation/
│   │   ├── 📁 services/
│   │   ├── 📁 store/
│   │   ├── 📁 types/
│   │   └── App.tsx
│   ├── app.json
│   ├── package.json
│   └── tsconfig.json
│
├── 📁 database/
│   ├── init.sql                 # Script inicial de BD
│   └── migrations/              # Migraciones TypeORM
│
├── 📁 docs/
│   ├── STRUCTURE.md             # Este archivo
│   ├── INSTALLATION.md
│   ├── API.md
│   ├── DATABASE.md
│   └── ARCHITECTURE.md
│
├── 📁 docker/
│   ├── nginx/                   # Configuración nginx (opcional)
│   └── ...
│
├── 📄 docker-compose.yml
├── 📄 .env.example
├── 📄 .gitignore
├── 📄 README.md
└── 📄 CONTRIBUTING.md
```

---

## 🔌 Backend - Estructura Modular

### Rutas Principales
```
/api/auth               - Autenticación y registro
/api/security           - Módulo de guardias
/api/resident           - Módulo de residentes
/api/admin              - Módulo de administración
/api/uploads            - Gestión de archivos
/api/reports            - Reportes y analytics
```

---

## 🎨 Frontend Web - Estructura de Componentes

### Layouts
- **MainLayout** - Layout principal con sidebar
- **AuthLayout** - Layout para login/registro
- **DashboardLayout** - Panel de control

---

## 📱 Frontend Mobile - Pantallas Principales

```
Autenticación
├── Login
├── Registro
└── Recuperar Contraseña
```

---

**Última actualización:** 2026-07-19
