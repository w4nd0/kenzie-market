import { ProductsRepository } from "../../repositories/products";
import { getCustomRepository } from "typeorm";

class RetriveProductService {
  async execute(id) {
    const cartsRepository = getCustomRepository(ProductsRepository);

    // const cart = await cartsRepository.findOneOrFail({ id });

    // return cart;
  }
}
export default RetriveProductService;
