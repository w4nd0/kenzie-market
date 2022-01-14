import { CartsRepository } from "../../repositories/carts";
import { getCustomRepository } from "typeorm";

class RetriveCartService {
  async execute(id: string) {
    const cartsRepository = getCustomRepository(CartsRepository);

    const cart = await cartsRepository.findOneOrFail({ id });

    return cart;
  }
}
export default RetriveCartService;
