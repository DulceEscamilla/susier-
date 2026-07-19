# 🔌 API Reference - SUSIER

## Base URL
```
http://localhost:3000/api
```

---

## 🔐 Autenticación

### POST /auth/register
Registrar nuevo usuario

### POST /auth/login
Iniciar sesión

### POST /auth/refresh
Refrescar token

---

## 👮 Módulo Seguridad

### POST /security/visits
Crear registro de visita

### GET /security/visits
Listar visitas del guardia

### POST /security/packages
Registrar paquete

### POST /security/patrols
Crear rondín

### POST /security/shift-logs
Registrar asistencia

---

## 🏠 Módulo Residente

### GET /resident/profile
Obtener perfil del residente

### POST /resident/authorizations
Autorizar visita

### POST /resident/reports
Crear reporte/queja

---

## 👨‍💼 Módulo Administración

### GET /admin/dashboard
Obtener dashboard con estadísticas

### GET /admin/guards/performance
Analizar desempeño de guardias

---

**Última actualización:** 2026-07-19
