import { TUser } from './user.interface';
import { User } from './user.model';

//save a new user into database
const createUserIntoDB = async (userData: TUser) => {
  const result = await User.create(userData);
  return result;
};

//get all user from database and show some specific fields
const getAllUserFromDB = async () => {
  const result = await User.find().select({
    username: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
  });
  return result;
};

//get a single user from database
const getSingleUserFromDB = async (userId: number) => {
  const result = await User.findOne({ userId }).select({
    username: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
  });
  return result;
};

//update user information and save into database
const updateUserInfoFromDB = async (userId: number, userUpdatedData: TUser) => {
  const result = await User.updateOne({ userId: userId }, userUpdatedData, {
    new: true,
  });
  if (result.matchedCount) {
    const updatedData = await User.findOne({ userId });
    return updatedData;
  } else {
    throw Error('Something went wrong.');
  }
};

//delete user from database
const deleteUserFromDB = async (userId: number) => {
  const result = await User.deleteOne({ userId });
  return result;
};

export const UserService = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateUserInfoFromDB,
  deleteUserFromDB,
};
