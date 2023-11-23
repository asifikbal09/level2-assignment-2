import { Request, Response } from 'express';
import { UserService } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    const result = await UserService.createUserFromDB(userData);
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (err) {
    res.status(501).json({
      success: false,
      message: 'User not created.',
      error: {
        code: 501,
        description: err,
      },
    });
  }
};

export const UserController = {
  createUser,
};
