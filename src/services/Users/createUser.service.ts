import { User } from "../../models/User";
import { InfoUser } from "../../types";
import { UsersRepository } from "../../repositories/users";
import { getCustomRepository } from "typeorm";

class CreateUserService {
  async execute(user: InfoUser): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const newUser = usersRepository.create({ ...user });

    await usersRepository.save(newUser);

    delete newUser.password;

    return newUser;
  }
}

export default CreateUserService;
