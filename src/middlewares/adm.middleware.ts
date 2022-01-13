import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/error";

export const isAdmOrResourceOwner = async (req, res, next) => {
  try {
    const loginInfo = jwt.decode(req.headers.authorization.split(" ")[1]);

    const { userId, isAdm }: any = loginInfo;

    const { id } = req.params;

    if (userId === id || isAdm) {
      next();
    } else {
      throw new ErrorHandler("Missing admin permissions", 401);
    }
  } catch (e) {
    throw new ErrorHandler("Missing admin permissions", 401);

  }
};
