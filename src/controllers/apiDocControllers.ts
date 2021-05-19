import { NextFunction, Request, Response } from 'express';
import { initDB } from '../db/initDB';

export const getApiDoc = async (req: Request, res: Response, next: NextFunction): Promise<unknown> => {
  try {
    return res.json({ docs: 'docs' });
  } catch (error) {
    return next(error);
  }
};

export const init = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    await initDB();
    return res.json({ message: 'DB initialized!' });
  } catch (error) {
    return next(error);
  }
};
