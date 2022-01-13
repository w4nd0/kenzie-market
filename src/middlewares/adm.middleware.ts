import jwt from "jsonwebtoken";
import { ErrorHandler } from "../utils/error";

export const isAdmOrResourceOwner = async (req, res, next) => {
  try {
    const loginInfo = jwt.decode(req.headers.authorization.split(" ")[1]);

    const { id, isAdm }: any = loginInfo;

    const { uuid } = req.params;

    if (id === uuid || isAdm) {
      next();
    } else {
      throw new ErrorHandler(401, "Missing admin permissions");
    }
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
