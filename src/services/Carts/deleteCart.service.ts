import { CartsRepository } from "../../repositories/carts";
import { getCustomRepository } from "typeorm";

class DeleteCartService {
  async execute(id: string) {
    const cartsRepository = getCustomRepository(CartsRepository);

    // const cart = await cartsRepository.findOne({ id });

    // if (!cart) {
    // throw new Error("Cart not found");
    // }

    // await cartsRepository.delete(id);

    return { message: "Cart deleted with success" };
  }
}

export default DeleteCartService;
