import { Router } from 'express';
import { authenticateToken, authorize } from '../middleware/auth';

const router = Router();

router.post('/visits', authenticateToken, authorize('SECURITY'), (req, res) => {
  res.json({ message: 'Endpoint para crear visita en desarrollo' });
});

router.get('/visits', authenticateToken, authorize('SECURITY'), (req, res) => {
  res.json({ message: 'Endpoint para listar visitas en desarrollo' });
});

router.post('/packages', authenticateToken, authorize('SECURITY'), (req, res) => {
  res.json({ message: 'Endpoint para registrar paquete en desarrollo' });
});

export default router;
