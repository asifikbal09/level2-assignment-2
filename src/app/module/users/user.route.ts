import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

//create user route
router.post("/",UserController.createUser);

export const UserRouter = router
