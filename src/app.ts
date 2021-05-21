import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

import { personRouter, apiDocRouter } from './routers';
import { HttpError } from './util/HttpError';

const app = express();

app.use(morgan('dev'));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(helmet());
app.use(express.json());

app.use('/', apiDocRouter);
app.use('/person', personRouter);

// Unhandled Endpoint Error
app.get('/*', (req, res, next: NextFunction) => {
  const error = new HttpError('Page Not Found', 404);
  return next(error);
});

// Global Error Handler
app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(error);
  }

  const status = error.status || 500;
  return res.status(status).json({
    message: error.message || 'An unexpected error occurred!',
  });
});

export default app;
