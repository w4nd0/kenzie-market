import { CartsRepository } from "../../repositories/carts";
import { getCustomRepository } from "typeorm";

class ListCartsService {
  async execute() {
    const cartsRepository = getCustomRepository(CartsRepository);

    const carts = cartsRepository.find();

    return carts;
  }
}

export default ListCartsService;
