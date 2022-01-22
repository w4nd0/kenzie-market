import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import config from "../config/auth";
import { CartsRepository } from "../repositories/carts";
import { OrdersRepository } from "../repositories/orders";
import { UsersRepository } from "../repositories/users";
import ErrorHandler from "../utils/error";

export const setPassword = async (req, res, next) => {
  if (!req.body.password) {
    throw new ErrorHandler("Password is required");
  }
  const hashedPassword = await bcrypt.hash(req.body.password, 8);

  req.body.password = hashedPassword;

  next();
};

export const authenticate = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw new ErrorHandler("Missing authorization headers",401);
    }

    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        throw new ErrorHandler("Unauthorized", 401);
      }
    });

    const user = <jwt.UserId>jwt.decode(token);

    req.userId = user.userId;

    next();
  } catch (e) {
    if (e instanceof ErrorHandler) {
      throw new ErrorHandler(e.message, e.statusCode);
    }
    throw new ErrorHandler("Internal Error", 500);
  }
};

export const resourceOwner = async (req, res, next) => {
  const userRepository = getCustomRepository(UsersRepository);
  const cartRepository = getCustomRepository(CartsRepository);
  const orderRepository = getCustomRepository(OrdersRepository);

  const user = await userRepository.findOne({ id: req.userId });

  if (user.isAdm) next();

  await cartRepository
    .findOneOrFail({ where: [{ user }, { userId: req.userId }] })
    .catch((e: any) => {
      throw new ErrorHandler("Missing admin permissions", 403);
    });

  await orderRepository
    .findOneOrFail({ where: [{ user }, { userId: req.userId }] })
    .catch((e: any) => {
      throw new ErrorHandler("Missing admin permissions", 403);
    });

  next();
};
