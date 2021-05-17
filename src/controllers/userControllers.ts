import { Request, Response, NextFunction } from 'express';

export const createUser = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.query;

  return res.json({ username });
};
