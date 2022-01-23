import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { getCustomRepository, getManager } from "typeorm";
import config from "../config/auth";
import CartOrderProduct from "../models/CartOrderProduct";
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
      throw new ErrorHandler("Missing authorization headers", 401);
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

export const resourceOwnerOrAdm = async (req, res, next) => {
  try {
    const { id } = req.params;

    const userRepository = getCustomRepository(UsersRepository);

    const user = await userRepository.findOne({ id: req.userId });

    if (user.id === id || user.isAdm) next();

    const result = await getManager()
      .createQueryBuilder(CartOrderProduct, "buys")
      .where("buys.cartId = :cartId", { cartId: id })
      .orWhere("buys.orderId = :orderId", { orderId: id })
      .getOne();

    if (result.userId !== req.userId) {
      throw new ErrorHandler("Access not allowed");
    }

    next();
  } catch (e) {
    throw new ErrorHandler(e.message);
  }
};
