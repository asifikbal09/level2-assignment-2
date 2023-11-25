import { Request, Response } from 'express';
import { UserService } from './user.service';
import userValidationSchema, { orderValidationSchema } from './user.validation';

//create a user function
const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    const validatedData = userValidationSchema.parse(userData)
    const result = await UserService.createUserIntoDB(validatedData);
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'User not created.',
      error: {
        code: 404,
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
    res.status(404).json({
      success: false,
      message: err.message,
      error: {
        code: 404,
        description: err,
      },
    });
  }
};

//get single user function
const getSingleUser = async (req: Request, res: Response) => {
try {
  const { userId } = req.params;
  const result = await UserService.getSingleUserFromDB(parseFloat(userId));
  res.status(200).json({
    success: true,
    message: 'User fetched successfully!',
    data: result,
  });
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
} catch (err: any) {
  res.status(404).json({
    success: false,
    message: err.message,
    error: {
      code: 404,
      description: err,
    },
  });
}
};

//update user data
const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { user } = req.body;
    const validatedData = userValidationSchema.parse(user)
    const result = await UserService.updateUserInfoFromDB(
      parseFloat(userId),
      validatedData,
    );

    res.status(200).json({
      success: true,
      message: 'User updated successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: err.message,
      error: {
        code: 404,
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
    res.status(404).json({
      success: false,
      message: err.message,
      error: {
        code: 404,
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
    const validatedData = orderValidationSchema.parse(order)
    const result = await UserService.addOrderIntoDB(parseFloat(userId), validatedData);
    res.status(200).json({
      success: true,
      message: 'Order added successfully.',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: err.message,
      error: {
        code: 404,
        description: err,
      },
    });
  }
};

//Get all order
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
    res.status(404).json({
      success: false,
      message: err.message,
      error: {
        code: 404,
        description: err,
      },
    });
  }
};

//calculate the total cost
const calculateTotalCost=async(req:Request,res:Response)=>{
try {
  const {userId}=req.params
  const result = await UserService.calculateTotalCostOfAnUser(parseFloat(userId))
  res.status(200).json({
    success: true,
    message: 'Total price calculated successfully!',
    data: result,
  })
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} catch (err:any) {
  res.status(404).json({
    success: false,
    message: err.message,
    error: {
      code: 404,
      description: err,
    },
  });
}
}

export const UserController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
  addOrder,
  getAllOrder,
  calculateTotalCost
};
