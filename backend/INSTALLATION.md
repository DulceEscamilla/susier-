# 🔌 Backend SUSIER - Guía de Instalación

## 📋 Requisitos

- Node.js 18+
- PostgreSQL 14+
- npm o yarn

## 📦 Instalación

### 1. Instalar dependencias
```bash
cd backend
npm install
```

### 2. Configurar variables de entorno
```bash
cp .env.example .env
```

Edita `.env` con tus valores:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=susier_user
DB_PASSWORD=susier_password
DB_NAME=susier_db
NODE_ENV=development
JWT_SECRET=your-secret-key
```

### 3. Ejecutar en desarrollo
```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

---

## 🐳 Con Docker

```bash
cd ..
docker-compose up
```

---

## 🧪 Testing

```bash
# Ejecutar tests
npm run test

# Tests con cobertura
npm run test:coverage

# Tests en modo watch
npm run test:watch
```

---

## 📝 Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Iniciar servidor en desarrollo |
| `npm run build` | Compilar TypeScript |
| `npm start` | Iniciar servidor compilado |
| `npm run lint` | Verificar código |
| `npm run lint:fix` | Arreglar problemas de linting |
| `npm run test` | Ejecutar tests |

---

**Última actualización:** 2026-07-19
