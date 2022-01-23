import jwt from "jsonwebtoken";
import CartOrderProduct from "../models/CartOrderProduct";

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

export interface InfoContext {
  [key: string]: any;
  name?: string;
  products?: CartOrderProduct[];
  total?: number | string;
  content?: string;
}

declare module "jsonwebtoken" {
  export interface UserId extends jwt.JwtPayload {
    userId: string;
    isAdm: boolean;
  }
}
