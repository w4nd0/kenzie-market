import { UsersRepository } from "../../repositories/users";
import { getCustomRepository } from "typeorm";

class RetriveUserService {
  async execute(id) {
    const usersRepository = getCustomRepository(UsersRepository);

    // const user = await usersRepository.findOneOrFail({ id });

    // return user;
  }
}
export default RetriveUserService;
