import { Request, Response } from "express";
import SendEmailToUserService from "../../services/Email/sendEmailToUser.service";

class SendEmailToUserController {
  async handle(request: Request, response: Response) {
    const serviceEmail = new SendEmailToUserService();

    const { userId, subject, text } = request.body;

    const email = await serviceEmail.execute(userId, subject, text);

    return response.status(201).json(email);
  }
}

export default SendEmailToUserController;
