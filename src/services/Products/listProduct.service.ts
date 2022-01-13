import { ProductsRepository } from "../../repositories/products";
import { getCustomRepository } from "typeorm";

class ListProductsService {
  async execute() {
    const productsRepository = getCustomRepository(ProductsRepository);

    const products = productsRepository.find();

    return products;
  }
}

export default ListProductsService;
