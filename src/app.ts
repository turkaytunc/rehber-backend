import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(helmet());

app.get('/', (req, res, next) => {
  res.json({ message: 'Hello' });
});

export default app;
