import { InfoLogin } from "../../types";
import { UsersRepository } from "../../repositories/users";
import { getCustomRepository } from "typeorm";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config/auth";
import ErrorHandler from "../../utils/error";

class LoginUserService {
  async execute(user: InfoLogin) {
    const usersRepository = getCustomRepository(UsersRepository);

    const { email, password } = user;

    if (!email || !password) {
      throw new ErrorHandler("Wrong email/password");
    }

    const infoLogin = await usersRepository.findOne({
      where: { email },
      select: ["id", "password", "isAdm"],
    });

    if (!infoLogin) {
      throw new ErrorHandler("Wrong email/password");
    }
    const match = await bcrypt.compare(password, infoLogin.password);

    if (!match) {
      throw new ErrorHandler("Wrong email/password");
    }
    const token: string = jwt.sign(
      {
        userId: infoLogin.id,
        cartId: infoLogin.cart.id,
        isAdm: infoLogin.isAdm,
      },
      config.secret,
      {
        expiresIn: config.expiresIn,
      }
    );

    return token;
  }
}

export default LoginUserService;
