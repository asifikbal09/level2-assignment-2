import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z.string().max(20,{message: "First name can't be more than 20 character."}),
  lastName: z.string().max(20,{message: "Last name can't be more than 20 character."}),
});

const addressValidationSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

export const orderValidationSchema = z.object({
  productName: z.string(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
});

const userValidationSchema = z.object({
  userId: z.number().positive({message : "UserID must be a number."}),
  username: z.string().max(15,{message:"User name can't be more than 15 character."}),
  password: z.string().max(20,{message : "Password can't be more than 20 character."}),
  fullName: userNameValidationSchema,
  age: z.number().positive({message:"Age must be a positive number."}),
  email: z.string().email({message: "Please provide a email."}),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: addressValidationSchema,
  orders: z.array(orderValidationSchema).optional(),
});

export default userValidationSchema;
