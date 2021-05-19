import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

import { personRouter } from './routers';
import apiDocRouter from './routers/apiDocRouter';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());

app.use('/', apiDocRouter);
app.use('/user', personRouter);

export default app;
