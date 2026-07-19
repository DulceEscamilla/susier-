import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IRequestWithUser } from '../types/express';

export const authenticateToken = (
  req: IRequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET || 'secret-key',
    (err: any, user: any) => {
      if (err) {
        return res.status(403).json({ error: 'Token inválido' });
      }

      req.user = user;
      next();
    }
  );
};

export const authorize = (...roles: string[]) => {
  return (req: IRequestWithUser, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'No autorizado para esta acción' });
    }
    next();
  };
};
