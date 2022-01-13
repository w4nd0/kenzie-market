import { CartsRepository } from "../../repositories/carts";
import { getCustomRepository } from "typeorm";

class UpdateCartService {
  async execute({ id, data }) {
    const cartsRepository = getCustomRepository(CartsRepository);

    const cart = await cartsRepository.findOne({ id });

    if (!cart) {
      throw new Error("Cart not found");
    }

    await cartsRepository.update(id, data);

    return await cartsRepository.findOne({ id });
  }
}

export default UpdateCartService;
