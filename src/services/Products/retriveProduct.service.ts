import { ProductsRepository } from "../../repositories/products";
import { getCustomRepository } from "typeorm";
import ErrorHandler from "../../utils/error";

class RetriveProductService {
  async execute(id) {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository
      .findOneOrFail({ id })
      .catch((e) => {
        throw new ErrorHandler("Product not found");
      });

    return product;
  }
}
export default RetriveProductService;
