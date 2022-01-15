import jwt from "jsonwebtoken";

export interface InfoUser {
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
}

export interface InfoLogin {
  email: string;
  password: string;
}

export interface InfoProduct {
  id: string;
  name: string;
  price: number;
}

export interface InfoCart {
  total: number;
  user: InfoUser;
}

export interface InfoUserCart {
  userId: string;
  cartId: string;
}

declare module "jsonwebtoken" {
  export interface UserId extends jwt.JwtPayload {
    userId: string;
    cartId: string;
    isAdm: boolean;
  }
}
