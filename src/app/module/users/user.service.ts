import { TOrder, TUser } from './user.interface';
import { User } from './user.model';

//save a new user into database
const createUserIntoDB = async (userData: TUser) => {
  const user = await User.create(userData);
  const userId = user.userId;
  const result = await User.findOne({ userId }).select({ password: 0, _id: 0 });
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
    _id: 0,
  });
  return result;
};

//get a single user from database
const getSingleUserFromDB = async (userId: number) => {
  if ((await User.isUserExists(userId)) === null) {
    throw Error('User not found.');
  }
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
const updateUserInfoFromDB = async (
  userId: number,
  userUpdatedData: Partial<TUser>,
) => {
  if ((await User.isUserExists(userId)) === null) {
    throw Error('User not found.');
  }
  const result = await User.findOneAndUpdate(
    { userId: userId },
    userUpdatedData,
    {
      new: true,
    },
  ).select({password:0});
  return result;
};

//delete user from database
const deleteUserFromDB = async (userId: number) => {
  if ((await User.isUserExists(userId)) === null) {
    throw Error('User not found.');
  }
  const result = await User.deleteOne({ userId });
  return result;
};

//Add order into database
const addOrderIntoDB = async (userId: number, order: TOrder) => {
  if ((await User.isUserExists(userId)) === null) {
    throw Error('User not found.');
  }
  const user = await User.findOneAndUpdate(
    { userId },
    { $push: { orders: order } },
    { new: true },
  );
  return user;
};

//Show all order from an user
const getAllOderFromUser = async (userId: number) => {
  if ((await User.isUserExists(userId)) === null) {
    throw Error('User not found.');
  }
  const orders = await User.findOne({ userId }).select({ orders: 1 });
  if (orders?.orders?.length) {
    return orders;
  } else {
    throw Error("User don't have any order.");
  }
};

//calculate the total cost of a user
const calculateTotalCostOfAnUser = async (userId: number) => {
  if ((await User.isUserExists(userId)) === null) {
    throw Error('User not found.');
  }
  const user = await User.findOne({ userId });
  if (user?.orders?.length) {
    const result = await User.aggregate([
      //stage 1 : matching the userId
      { $match: { userId } },
      //stage 2 : Convert the array of object into multiple document
      { $unwind: '$orders' },
      //stage 3 : Grouping by userId
      {
        $group: {
          _id: '$userId',
          totalCost: {
            $sum: { $multiply: ['$orders.price', '$orders.quantity'] },
          },
        },
      },
      // stage 4 : Round the totalCost and remove the _id
      { $project: { totalCost: { $round: ['$totalCost', 2] }, _id: 0 } },
    ]);

    return result;
  } else {
    throw Error("User don't have any order.");
  }
};

export const UserService = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateUserInfoFromDB,
  deleteUserFromDB,
  addOrderIntoDB,
  getAllOderFromUser,
  calculateTotalCostOfAnUser,
};
