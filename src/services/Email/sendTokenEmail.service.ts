import hbs from "nodemailer-express-handlebars";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../../repositories/users";
import ErrorHandler from "../../utils/error";
import { handlebarOptions, mailOptions, transport } from "../../utils/mailer";

class SendTokenEmailService {
  async execute(token: string, email: any) {
    transport.use("compile", hbs(handlebarOptions));

    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({
      where: {
        email,
      },
    });

    const context = {
      name: user.name,
      token,
    };

    const template = "requestResetPassword";
    const subject = "Redefinição de senha";

    transport.sendMail(
      mailOptions(context, subject, template, user),
      (error, info) => {
        if (error) {
          console.log(error);
          throw new ErrorHandler("Error while sending the email", 500);
        }
      }
    );

    return { message: "Email successfully sent" };
  }
}

export default SendTokenEmailService;
