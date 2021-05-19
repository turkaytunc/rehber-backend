import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

import { personRouter, apiDocRouter } from './routers';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/', apiDocRouter);
app.use('/person', personRouter);

export default app;
