import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

//create user route
router.post('/', UserController.createUser);
router.get('/', UserController.getAllUser);
router.get('/:userId', UserController.getSingleUser);

export const UserRouter = router;
