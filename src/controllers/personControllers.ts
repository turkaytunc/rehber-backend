import { NextFunction, Request, Response } from 'express';
import PersonModel from '../models/PersonModel';

export const createPerson = async (req: Request, res: Response, next: NextFunction): Promise<unknown> => {
  try {
    const { username } = req.query;
    const newUser = await PersonModel.createPerson(username as string);

    return res.json({ newUser: newUser.rows[0] });
  } catch (error) {
    return next(error);
  }
};

export const updatePerson = (req: Request, res: Response): Response => {
  const { id } = req.params;

  return res.json({ id });
};
