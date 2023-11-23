import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

//create user route
router.post('/', UserController.createUser);

//get all user route
router.get('/', UserController.getAllUser);

//get single user route
router.get('/:userId', UserController.getSingleUser);

//update user route
router.put('/:userId', UserController.updateUser);

export const UserRouter = router;
