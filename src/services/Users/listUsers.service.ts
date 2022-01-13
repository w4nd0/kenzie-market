import { UsersRepository } from "../../repositories/users";
import { getCustomRepository } from "typeorm";

class ListUsersService {
  async execute() {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = usersRepository.find();

    return users;
  }
}

export default ListUsersService;
