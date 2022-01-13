import { UsersRepository } from "../../repositories/users";
import { getCustomRepository } from "typeorm";

class UpdateUsersService {
  async execute({ id, data }) {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ id });

    if (!user) {
      throw new Error("User not found");
    }

    await usersRepository.update(id, data);

    return await usersRepository.findOne({ id });
  }
}

export default UpdateUsersService;
