import express from 'express';
import { personControllers } from '../controllers';

const userRouter = express.Router();

userRouter.post('/create', personControllers.createPerson);
userRouter.patch('/update/:id', personControllers.updatePerson);
userRouter.get('/all', personControllers.getPeople);
userRouter.delete('/delete/:id', personControllers.deletePerson);

export default userRouter;
