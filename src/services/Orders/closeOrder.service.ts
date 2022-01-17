import hbs from "nodemailer-express-handlebars";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../../repositories/users";
import ErrorHandler from "../../utils/error";
import { handlebarOptions, transport } from "../../utils/mailer";

class CloseOrderService {
  async execute(cartId: string, userId: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ id: userId });

    transport.use("compile", hbs(handlebarOptions));

    const mailOptions = {
      from: "kenzie_market@outlook.com",
      to: user.email,
      subject: "Resumo da compra",
      template: "purchaseEmail",
      context: {
        products: user.cart.products,
        name: user.name,
        total: Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(user.cart.total),
      },
    };

    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
        throw new ErrorHandler("Error while sending the email", 500);
      }
      console.log(info);
    });

    return { message: "Successful purchase" };
  }
}

export default CloseOrderService;
