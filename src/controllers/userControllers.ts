import { Request, Response } from 'express';
import User from '../models/User';
const user = new User();

export const createUser = (req: Request, res: Response): Response => {
  const { username } = req.query;

  const newUser = user.createUser(username as string);

  return res.json({ newUser });
};
export const updateUser = (req: Request, res: Response): Response => {
  const { id } = req.params;

  return res.json({ id });
};
