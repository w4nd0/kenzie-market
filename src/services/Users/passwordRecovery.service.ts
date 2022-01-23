import { getRepository } from "typeorm";
import Token from "../../models/Token";
import crypto from "crypto";
import * as bcrypt from "bcrypt";

import User from "../../models/User";
import ErrorHandler from "../../utils/error";


export default class PasswordResetTokenService {
  public async execute(email: string): Promise<Token> {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      throw new ErrorHandler("User does not exist");
    }

    const tokenRepository = getRepository(Token);
    const token = await tokenRepository.findOne({
      where: {
        userId: user.id,
      },
    });

    if (token) {
      await tokenRepository.delete(token.id);
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = await bcrypt.hash(resetToken, 8);

    const newToken = tokenRepository.create({
      userId: user.id,
      token: hashedToken,
    });

    await tokenRepository.save(newToken);

    return newToken;
  }
}
