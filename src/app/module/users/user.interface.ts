export type TUserName = {
  firstName: string;
  lastName: string;
};

export type TAddress = {
  street: string;
  city: string;
  country: string;
};

export type TUser = {
  userID: number;
  username: string;
  password: string;
  fullName: TUserName;
  age: number;
  email: string;
  isActive: 'active' | 'inactive';
  hobbies: string[];
  address: TAddress;
};

export type Order = {
  productName: string;
  price: number;
  quantity: number;
};

export type TOrders = Array<Order>