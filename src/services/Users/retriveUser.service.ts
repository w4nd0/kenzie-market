import { UsersRepository } from "../../repositories/users";
import { getCustomRepository } from "typeorm";
import ErrorHandler from "../../utils/error";

class RetriveUserService {
  async execute(id) {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOneOrFail({ id }).catch((e) => {
      throw new ErrorHandler("User not found");
    });
    console.log(user.cart)
    return user;
  }
}
export default RetriveUserService;
