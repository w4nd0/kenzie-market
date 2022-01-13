import { UsersRepository } from "../../repositories/users";
import { getCustomRepository } from "typeorm";

class DeleteUserService {
  async execute(id: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    // const user = await usersRepository.findOne({ id });

    // if (!user) {
    // throw new Error("User not found");
    // }

    // await usersRepository.delete(id);

    return { message: "User deleted with success" };
  }
}

export default DeleteUserService;
