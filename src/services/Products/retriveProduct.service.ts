import { ProductsRepository } from "../../repositories/products";
import { getCustomRepository } from "typeorm";

class RetriveProductService {
  async execute(id) {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.findOneOrFail({ id });

    return product;
  }
}
export default RetriveProductService;
