import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { userRouter } from './routers';

const app = express();

app.use(cors());
app.use(helmet());

app.get('/', (req, res, next) => {
  res.json({ message: 'Hello' });
});

app.use('/user', userRouter);

export default app;
