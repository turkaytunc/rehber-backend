import express from 'express';
import { userControllers } from '../controllers';

const userRouter = express.Router();

userRouter.get('/create', userControllers.createUser);
userRouter.get('/update/:id', userControllers.updateUser);

export default userRouter;
