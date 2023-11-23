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

const getSingleUserFromDB = async (userId: number) => {
  const result = await User.findOne({userId}).select({
    username: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
  });
  return result;
};

export const UserService = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
};
