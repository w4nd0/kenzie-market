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
  name: string;
  price: number;
}

export interface InfoCart {
  total: number;
  user: InfoUser;
}


declare module "jsonwebtoken" {
  export interface UserId extends jwt.JwtPayload {
    id: string;
  }
}
