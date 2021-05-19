import { NextFunction, Request, Response } from 'express';
import PersonModel from '../models/PersonModel';

export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<unknown> => {
  try {
    const { username } = req.query;
    const newUser = PersonModel.createUser(username as string);

    return res.json({ newUser });
  } catch (error) {
    return next(error);
  }
};
export const updateUser = (req: Request, res: Response): Response => {
  const { id } = req.params;

  return res.json({ id });
};
