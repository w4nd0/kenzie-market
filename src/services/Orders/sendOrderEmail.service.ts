import hbs from "nodemailer-express-handlebars";
import { getCustomRepository } from "typeorm";
import Cart from "../../models/Cart";
import { UsersRepository } from "../../repositories/users";
import ErrorHandler from "../../utils/error";
import { handlebarOptions, transport } from "../../utils/mailer";

class SendOrderEmailService {
  async execute(userId: string, cart: Cart) {
    transport.use("compile", hbs(handlebarOptions));

    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ id: userId });

    const mailOptions = {
      from: "kenzie_market@outlook.com",
      to: user.email,
      subject: "Resumo da compra",
      template: "orderEmail",
      context: {
        products: cart.products,
        name: user.name,
        total: Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(cart.total),
      },
    };

    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        throw new ErrorHandler("Error while sending the email", 500);
      }
    });

    return;
  }
}

export default SendOrderEmailService;
