import 'reflect-metadata';
import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { AppDataSource } from './config/database';
import authRoutes from './routes/auth.routes';
import securityRoutes from './routes/security.routes';
import residentRoutes from './routes/resident.routes';
import adminRoutes from './routes/admin.routes';
import { errorHandler } from './middleware/errorHandler';

const app: Express = express();
const PORT = process.env.PORT || 3000;

// Middleware de seguridad
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Demasiadas solicitudes desde esta IP',
});
app.use('/api/', limiter);

// Parsers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'SUSIER Backend is running' });
});

// Rutas API
app.use('/api/auth', authRoutes);
app.use('/api/security', securityRoutes);
app.use('/api/resident', residentRoutes);
app.use('/api/admin', adminRoutes);

// Ruta no encontrada
app.use((req, res) => {
  res.status(404).json({
    error: 'Endpoint no encontrado',
    path: req.path,
  });
});

// Middleware de error global
app.use(errorHandler);

// Inicializar base de datos y servidor
const startServer = async () => {
  try {
    await AppDataSource.initialize();
    console.log('✅ Base de datos conectada');

    app.listen(PORT, () => {
      console.log(`🚀 Servidor SUSIER ejecutándose en puerto ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
    process.exit(1);
  }
};

startServer();

export default app;
