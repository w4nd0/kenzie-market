import { InfoLogin } from "../../types";
import { UsersRepository } from "../../repositories/users";
import { getCustomRepository } from "typeorm";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config/auth";

class LoginUserService {
  async execute(user: InfoLogin) {
    const usersRepository = getCustomRepository(UsersRepository);

    const { email, password } = user;

    if (!email || !password) {
      throw new Error();
    }

    const infoLogin = await usersRepository.findOne({
      where: { email },
      select: ["id", "password", "isAdm"],
    });

    if (!infoLogin) {
      throw new Error();
    }
    const match = await bcrypt.compare(password, infoLogin.password);

    if (!match) {
      throw new Error();
    }
    const token: string = jwt.sign(
      { id: infoLogin.id, isAdm: infoLogin.isAdm },
      config.secret,
      {
        expiresIn: config.expiresIn,
      }
    );

    return token;
  }
}

export default LoginUserService;
