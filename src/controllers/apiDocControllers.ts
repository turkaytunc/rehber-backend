import { Request, Response, NextFunction } from 'express';

export const getApiDoc = (req: Request, res: Response, next: NextFunction) => {
  return res.json({ docs: 'docs' });
};
