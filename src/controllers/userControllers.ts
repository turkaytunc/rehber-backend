import { Request, Response, NextFunction } from 'express';
import User from '../models/User';
const user = new User();

export const createUser = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.query;

  return res.json({ username });
};
