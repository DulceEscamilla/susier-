import { Router } from 'express';
import { authenticateToken, authorize } from '../middleware/auth';

const router = Router();

router.get('/profile', authenticateToken, authorize('RESIDENT'), (req, res) => {
  res.json({ message: 'Endpoint para obtener perfil en desarrollo' });
});

router.post('/authorizations', authenticateToken, authorize('RESIDENT'), (req, res) => {
  res.json({ message: 'Endpoint para autorizar visita en desarrollo' });
});

router.post('/reports', authenticateToken, authorize('RESIDENT'), (req, res) => {
  res.json({ message: 'Endpoint para crear reporte en desarrollo' });
});

export default router;
