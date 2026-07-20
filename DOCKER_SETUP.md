# Docker Setup Guide - SUSIER

Guía completa para ejecutar SUSIER con Docker Compose.

## 📋 Requisitos Previos

- Docker Engine 20.10+
- Docker Compose 2.0+
- Mínimo 2GB RAM disponible
- Puertos 3000, 5173, 5432 disponibles (desarrollo)

## 🚀 Inicio Rápido (Desarrollo)

### 1. Configurar variables de entorno

```bash
cp .env.example .env
```

Edita `.env` y proporciona valores seguros para:
- `DB_PASSWORD`
- `JWT_SECRET`
- `PGADMIN_PASSWORD` (opcional)

### 2. Iniciar los servicios

```bash
docker-compose up -d
```

### 3. Verificar estado

```bash
docker-compose ps
```

Deberías ver:
- ✅ susier-postgres (healthy)
- ✅ susier-backend (healthy)
- ✅ susier-frontend (running)
- ✅ susier-pgadmin (running)

### 4. Acceder a las aplicaciones

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000
- **PgAdmin**: http://localhost:5050 (usuario: `admin@susier.local`)
- **PostgreSQL**: `localhost:5432`

## 🛑 Detener servicios

```bash
# Detener sin eliminar volúmenes
docker-compose down

# Detener y eliminar volúmenes (cuidado - elimina datos)
docker-compose down -v
```

## 📊 Comandos útiles

### Ver logs
```bash
# Todos los servicios
docker-compose logs -f

# Servicio específico
docker-compose logs -f backend
docker-compose logs -f postgres
```

### Acceder a contenedores
```bash
# Backend
docker-compose exec backend bash

# PostgreSQL
docker-compose exec postgres psql -U ${DB_USER} -d ${DB_NAME}

# Frontend
docker-compose exec frontend sh
```

### Rebuild de imágenes
```bash
# Reconstruir todo
docker-compose build

# Reconstruir servicio específico
docker-compose build backend
```

## 🏭 Producción

Para ejecutar en producción con restricciones de seguridad:

```bash
# Usar archivo de configuración de producción
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

# Verificar estado
docker-compose ps
```

### Cambios en producción:

✅ Los servicios están vinculados solo a `127.0.0.1` (no accesibles desde la red)
✅ Aumentados límites de recursos
✅ `NODE_ENV=production`
✅ PgAdmin deshabilitado
✅ Comandos optimizados para producción

### Usa un proxy inverso (Nginx/Caddy) en producción para:
- Terminar conexiones SSL/TLS
- Enrutamiento de solicitudes
- Balanceo de carga
- Manejo de CORS

## 🔧 Troubleshooting

### El backend no se conecta a PostgreSQL

```bash
# Verificar que postgres está healthy
docker-compose ps postgres

# Revisar logs del backend
docker-compose logs backend

# Reiniciar servicios
docker-compose restart
```

### Puerto ya en uso

```bash
# Cambiar puerto en .env
BACKEND_PORT=3001
FRONTEND_PORT=5174
DB_PORT=5433
```

### Espacio en disco lleno

```bash
# Limpiar imágenes y volúmenes sin usar
docker system prune -a --volumes

# Ver tamaño de volúmenes
docker volume ls -q | xargs docker volume inspect | grep -E '"Name":|"Mountpoint":'
```

### Permisos de volumen

```bash
# Si hay errores de permisos en volúmenes
sudo chown -R $USER:$USER ./backend ./frontend-web ./database
```

## 📈 Monitoreo

### Ver uso de recursos
```bash
docker stats
```

### Verificar salud de servicios
```bash
docker-compose ps
```

### Logs de un servicio específico
```bash
docker-compose logs --tail=100 -f backend
```

## 🔐 Seguridad

- ✅ Las variables sensibles están en `.env` (no versionadas)
- ✅ Contraseña de BD obtenida de variables de entorno
- ✅ JWT_SECRET requerido (no valor por defecto débil)
- ✅ Limites de recursos configurados para prevenir DoS
- ✅ Health checks implementados
- ✅ Logs rotados automáticamente (10MB máximo)

### Para producción adicional:

1. Usa un `.env` seguro (permisos 600)
2. Implementa Secret Management (Docker Secrets, Vault, etc.)
3. Configura Nginx/Caddy como proxy inverso
4. Implementa HTTPS
5. Usa redes separadas por ambiente
6. Configura backups automáticos de BD
7. Implementa monitoreo y alertas

## 📝 Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `DB_USER` | Usuario de PostgreSQL | `susier_user` |
| `DB_PASSWORD` | Contraseña BD | Mínimo 12 caracteres |
| `DB_NAME` | Nombre de BD | `susier_db` |
| `JWT_SECRET` | Clave para JWT | Mínimo 32 caracteres |
| `NODE_ENV` | Ambiente | `development` o `production` |
| `LOG_LEVEL` | Nivel de logs | `info`, `warn`, `error` |
| `VITE_API_URL` | URL del API backend | `http://localhost:3000` |

## 🐛 Debug

Modo debug con servicios adicionales:

```bash
# Incluir pgadmin y otros servicios de debug
docker-compose --profile debug up -d
```

## 📚 Referencias

- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [PostgreSQL Docker Image](https://hub.docker.com/_/postgres)
- [Node.js Best Practices](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
