import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import config from "../config/auth";
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
      throw new Error("Missing authorization headers");
    }

    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        throw new Error("Unauthorized");
      }
    });

    const user = <jwt.UserId>jwt.decode(token);

    req.userId = user.userId;

    next();
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
