import { Request } from 'express';

export interface IRequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
  };
}

export interface IUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: string;
}

export interface IAuthPayload {
  user: IUser;
  token: string;
  refreshToken: string;
}
