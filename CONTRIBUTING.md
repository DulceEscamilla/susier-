# Guía de Contribución - SUSIER

Gracias por tu interés en contribuir a SUSIER. Este documento te guía sobre cómo colaborar en el proyecto.

## 🎯 Antes de Comenzar

1. Fork el repositorio
2. Clona tu fork localmente: `git clone https://github.com/tu-usuario/susier-.git`
3. Crea una rama para tu feature: `git checkout -b feature/nombre-feature`
4. Realiza tus cambios
5. Commit con mensajes claros: `git commit -m "feat: descripción clara"`
6. Push a tu rama: `git push origin feature/nombre-feature`
7. Abre un Pull Request

## 💻 Estándares de Código

- Usar **TypeScript** en frontend y backend
- Seguir **Prettier** para formato
- ESLint para linting
- Nombres en **camelCase** para variables y funciones
- Nombres en **PascalCase** para componentes y clases
- Documentar funciones complejas con JSDoc

## 🧪 Testing

Todos los cambios deben incluir tests:
```bash
npm run test
npm run test:coverage
```

## 📝 Mensajes de Commit

Usar formato Conventional Commits:
```
feat: agregar nueva funcionalidad
fix: corregir un bug
docs: cambios en documentación
style: cambios de formato
refactor: refactorización de código
test: agregar o actualizar tests
chore: cambios en build, dependencias, etc
```

## ✅ Checklist Antes de PR

- [ ] Código probado localmente
- [ ] Tests pasando
- [ ] Documentación actualizada
- [ ] Sin conflictos con rama main
- [ ] Cambios relevantes en CHANGELOG.md

---

**¡Gracias por contribuir a SUSIER!** 🙌
