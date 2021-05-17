import express from 'express';
import { createUser, updateUser } from '../controllers';

const userRouter = express.Router();

userRouter.get('/create', createUser);
userRouter.get('/update/:id', updateUser);

export default userRouter;
