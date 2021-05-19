import express from 'express';
import { apiDocControllers } from '../controllers';

const apiDocRouter = express.Router();

apiDocRouter.get('/', apiDocControllers.getApiDoc);
apiDocRouter.get('/init', apiDocControllers.init);

export default apiDocRouter;
