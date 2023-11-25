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

//update user data
const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { user } = req.body;
    const result = await UserService.updateUserInfoFromDB(
      parseFloat(userId),
      user,
    );

    res.status(200).json({
      success: true,
      message: 'User updated successfully!',
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

//delete user function
const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const result = await UserService.deleteUserFromDB(parseFloat(userId));
    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: null,
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

//add order function
const addOrder = async (req: Request, res: Response) => {
  try {
    const { order } = req.body;
    const { userId } = req.params;
    const result = await UserService.addOrderIntoDB(parseFloat(userId), order);
    res.status(200).json({
      success: true,
      message: 'Order added successfully.',
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

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
  const result = await UserService.getAllOderFromUser(parseFloat(userId));
  res.status(200).json({
    success: true,
    message: 'Order fetched successfully!',
    data: result,
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err:any) {
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

export const UserController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
  addOrder,
  getAllOrder,
};
