import { Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { IRequestWithUser } from '../types/express';
import { AppDataSource } from '../config/database';
import { User } from '../entities/User';
import { Profile } from '../entities/Profile';

const userRepository = AppDataSource.getRepository(User);
const profileRepository = AppDataSource.getRepository(Profile);

export const registerUser = async (req: IRequestWithUser, res: Response) => {
  try {
    const { email, password, firstName, lastName, phone, role } = req.body;

    if (!email || !password || !firstName || !lastName || !role) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const existingUser = await userRepository.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: 'El usuario ya existe' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = userRepository.create({
      email,
      passwordHash: hashedPassword,
      firstName,
      lastName,
      phone,
    });

    const savedUser = await userRepository.save(user);

    const profile = profileRepository.create({
      user: savedUser,
      role,
      permissions: {},
    });

    await profileRepository.save(profile);

    const token = jwt.sign(
      { id: savedUser.id, email: savedUser.email, role },
      process.env.JWT_SECRET || 'secret-key',
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );

    const refreshToken = jwt.sign(
      { id: savedUser.id },
      process.env.JWT_SECRET || 'secret-key',
      { expiresIn: '30d' }
    );

    res.status(201).json({
      user: {
        id: savedUser.id,
        email: savedUser.email,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        role,
      },
      token,
      refreshToken,
    });
  } catch (error: any) {
    console.error('Error en registro:', error);
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
};

export const loginUser = async (req: IRequestWithUser, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email y contraseña requeridos' });
    }

    const user = await userRepository.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const profile = await profileRepository.findOne({
      where: { user: { id: user.id } },
    });

    const token = jwt.sign(
      { id: user.id, email: user.email, role: profile?.role },
      process.env.JWT_SECRET || 'secret-key',
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );

    const refreshToken = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET || 'secret-key',
      { expiresIn: '30d' }
    );

    res.json({
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: profile?.role,
      },
      token,
      refreshToken,
    });
  } catch (error: any) {
    console.error('Error en login:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

export const refreshToken = (req: IRequestWithUser, res: Response) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({ error: 'Refresh token requerido' });
    }

    jwt.verify(
      refreshToken,
      process.env.JWT_SECRET || 'secret-key',
      (err: any, decoded: any) => {
        if (err) {
          return res.status(403).json({ error: 'Refresh token inválido' });
        }

        const token = jwt.sign(
          { id: decoded.id },
          process.env.JWT_SECRET || 'secret-key',
          { expiresIn: process.env.JWT_EXPIRE || '7d' }
        );

        res.json({ token });
      }
    );
  } catch (error: any) {
    console.error('Error al refrescar token:', error);
    res.status(500).json({ error: 'Error al refrescar token' });
  }
};
