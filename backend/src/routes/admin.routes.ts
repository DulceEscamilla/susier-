import { Router } from 'express';
import { authenticateToken, authorize } from '../middleware/auth';

const router = Router();

router.get('/dashboard', authenticateToken, authorize('ADMIN'), (req, res) => {
  res.json({ message: 'Endpoint para dashboard en desarrollo' });
});

router.get('/guards/performance', authenticateToken, authorize('ADMIN'), (req, res) => {
  res.json({ message: 'Endpoint para analizar desempeño en desarrollo' });
});

router.get('/residents', authenticateToken, authorize('ADMIN'), (req, res) => {
  res.json({ message: 'Endpoint para listar residentes en desarrollo' });
});

export default router;
