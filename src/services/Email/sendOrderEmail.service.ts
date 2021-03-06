import hbs from "nodemailer-express-handlebars";
import { getCustomRepository } from "typeorm";
import Cart from "../../models/Cart";
import { UsersRepository } from "../../repositories/users";
import ErrorHandler from "../../utils/error";
import { handlebarOptions, mailOptions, transport } from "../../utils/mailer";

class SendOrderEmailService {
  async execute(userId: string, cart: Cart) {
    transport.use("compile", hbs(handlebarOptions));

    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ id: userId });

    const context = {
      products: cart.products,
      total: Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(cart.total),
    };
    const subject: string = "Resumo da compra";
    const template: string = "orderEmail";

    transport.sendMail(
      mailOptions(context, subject, template, user),
      (error, info) => {
        if (error) {
          console.log(error);
          throw new ErrorHandler("Error while sending the email", 500);
        }
      }
    );

    return;
  }
}

export default SendOrderEmailService;
