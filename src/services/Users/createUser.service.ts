import User from "../../models/User";
import { InfoUser } from "../../types";
import { UsersRepository } from "../../repositories/users";
import { getCustomRepository } from "typeorm";
import { CartsRepository } from "../../repositories/carts";
import Cart from "../../models/Cart";
import ErrorHandler from "../../utils/error";

class CreateUserService {
  async execute(user: InfoUser): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const cartsRepository = getCustomRepository(CartsRepository);

    const checkUser = await usersRepository.findOne({
      where: { email: user.email },
    });

    if (checkUser) throw new ErrorHandler("E-mail already registered");

    const newUser = usersRepository.create({ ...user });

    await usersRepository.save(newUser);

    const newCart = new Cart();

    newCart.user = newUser;

    await cartsRepository.save(newCart);

    delete newUser.password;

    return newUser;
  }
}

export default CreateUserService;
