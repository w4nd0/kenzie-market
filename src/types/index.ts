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

declare module "jsonwebtoken" {
  export interface UserId extends jwt.JwtPayload {
    id: string;
  }
}
