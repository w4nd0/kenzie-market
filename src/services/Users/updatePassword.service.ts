import { getRepository } from "typeorm";
import * as bcrypt from "bcrypt";
import User from "../../models/User";
import Token from "../../models/Token";
import ErrorHandler from "../../utils/error";

export default class UpdatePasswordService {
  public async execute(
    token: string,
    password: string,
    confirmation: string
  ): Promise<User> {
    console.log(token);
    const tokenRepository = getRepository(Token);
    const findToken = await tokenRepository.findOne({
      where: {
        token,
      },
    });

    if (!findToken) {
      throw new ErrorHandler("Invalid Token.");
    }
    console.log(findToken.userId);
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({
      where: {
        id: findToken.userId,
      },
    });

    if (!user) {
      throw new ErrorHandler("User does not exist");
    }

    if (password !== confirmation) {
      throw new ErrorHandler("Password and Confirmation don't match.");
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    hashedPassword ? (user.password = hashedPassword) : user.password;

    await userRepository.save(user);
    await tokenRepository.delete(findToken.id);

    return user;
  }
}
