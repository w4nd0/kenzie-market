import { Response, Request } from "express";
import SendTokenEmailService from "../../services/Email/sendTokenEmail.service";
import PasswordResetTokenService from "../../services/Users/passwordRecovery.service";

class SendPasswordResetToken {
  async handle(request: Request, response: Response) {
    const { email } = request.body;

    const passwordResetTokenService = new PasswordResetTokenService();
    const token = await passwordResetTokenService.execute(email);

    const sendTokenEmailService = new SendTokenEmailService();
    await sendTokenEmailService.execute(token.token, email);
    console.log(token.token);

    return response.json({ message: "Token sendded to your email." });
  }
}
export default SendPasswordResetToken;
