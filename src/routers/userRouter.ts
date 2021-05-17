import express from 'express';
import { createUser } from '../controllers';

const userRouter = express.Router();

userRouter.get('/', createUser);

export default userRouter;
