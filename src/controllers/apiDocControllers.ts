import { Request, Response } from 'express';

export const getApiDoc = (req: Request, res: Response): Response => {
  return res.json({ docs: 'docs' });
};
