# 🗄️ Base de Datos - SUSIER

## Diagrama de Entidades

```
users (1) ──── (1) profiles
  │
  ├── (1) ──── (N) residences
  │             │
  │             ├── (1) ──── (N) vehicles
  │             ├── (1) ──── (N) visits
  │             ├── (1) ──── (N) packages
  │             └── (1) ──── (N) authorizations
  │
  ├── (1) ──── (N) patrols
  │             └── (1) ──── (N) patrol_evidences
  │
  ├── (1) ──── (N) shift_logs
  │
  └── (1) ──── (N) reports
```

---

## 📊 Tablas Principales

- **users** - Usuarios del sistema
- **profiles** - Perfiles (Security, Resident, Admin)
- **residences** - Domicilios
- **vehicles** - Vehículos
- **visits** - Registro de visitas
- **packages** - Paquetería
- **patrols** - Rondines
- **patrol_evidences** - Evidencias de rondines
- **reports** - Reportes/Quejas
- **shift_logs** - Registro de turnos
- **qr_codes** - Códigos QR
- **common_areas** - Áreas comunes
- **authorizations** - Autorizaciones
- **notifications** - Notificaciones

---

**Última actualización:** 2026-07-19
