import { Request, Response } from 'express';
import { UserService } from './user.service';

//create a user function
const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    const result = await UserService.createUserIntoDB(userData);
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

//get all user function
const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUserFromDB();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(501).json({
      success: false,
      message: err.message,
      error: {
        code: 501,
        description: err,
      },
    });
  }
};

//get single user function
const getSingleUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const result = await UserService.getSingleUserFromDB(parseFloat(userId));
  res.status(200).json({
    success: true,
    message: 'User fetched successfully!',
    data: result,
  });
};

export const UserController = {
  createUser,
  getAllUser,
  getSingleUser,
};
