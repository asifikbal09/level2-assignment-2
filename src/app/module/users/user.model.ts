import { Schema, model } from 'mongoose';
import {
  TAddress,
  TOrder,
  TUser,
  TUserName,
  UserModel,
} from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

const fullNameSchema = new Schema<TUserName>({
  firstName: { type: String, required: [true, 'First name is required.'] },
  lastName: { type: String, required: [true, 'Last name is required.'] },
});

const addressSchema = new Schema<TAddress>({
  street: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const orderSchema = new Schema<TOrder>({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const userSchema = new Schema<TUser, UserModel>({
  userId: {
    type: Number,
    required: [true, 'User ID is required.'],
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'Username is required.'],
    unique: true,
  },
  password: { type: String, required: [true, 'Password is required.'] },
  fullName: {
    type: fullNameSchema,
    required: [true, 'Full Name is required.'],
  },
  age: { type: Number, required: [true, 'Age is required.'] },
  email: { type: String, required: true, unique: true },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
  hobbies: {
    type: [String],
  },
  address: {
    type: addressSchema,
    required: true,
  },
  orders: {
    type: [orderSchema],
    required: false,
    default: [],
  },
});

//pre save middleware / hook
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  // hashing the password
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcryptSaltRound),
  );
  next();
});

//create custom static method
userSchema.statics.isUserExists = async function (userId: number) {
  const existingUser = await User.findOne({ userId });
  return existingUser;
};

export const User = model<TUser,UserModel>('User', userSchema);
