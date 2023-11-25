import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z.string().min(1).max(255),
  lastName: z.string().min(1).max(255),
});

const addressValidationSchema = z.object({
  street: z.string().max(255),
  city: z.string().min(1).max(255),
  country: z.string().min(1).max(255),
});

export const orderValidationSchema = z.object({
  productName: z.string().min(1).max(255),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
});

const userValidationSchema = z.object({
  userId: z.number().positive(),
  username: z.string().min(1).max(255),
  password: z.string().min(1).max(255),
  fullName: userNameValidationSchema,
  age: z.number().positive(),
  email: z.string().email(),
  isActive: z.boolean(),
  hobbies: z.array(z.string().min(1).max(255)),
  address: addressValidationSchema,
  orders: z.array(orderValidationSchema).optional(),
});

export default userValidationSchema;
