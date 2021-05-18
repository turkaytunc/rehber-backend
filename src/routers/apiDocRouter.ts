import express from 'express';
import { apiDocControllers } from '../controllers';

const apiDocRouter = express.Router();

apiDocRouter.get('/', apiDocControllers.getApiDoc);

export default apiDocRouter;
