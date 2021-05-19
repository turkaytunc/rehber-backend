import express from 'express';
import { personControllers } from '../controllers';

const userRouter = express.Router();

userRouter.get('/create', personControllers.createUser);
userRouter.get('/update/:id', personControllers.updateUser);

export default userRouter;
