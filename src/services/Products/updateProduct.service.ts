import { ProductsRepository } from "../../repositories/products";
import { getCustomRepository } from "typeorm";
import ErrorHandler from "../../utils/error";

class UpdateProductService {
  async execute({ id, data }) {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.findOne({ id });

    if (!product) {
      throw new ErrorHandler("Product not found");
    }

    await productsRepository.update(id, data);

    return await productsRepository.findOne({ id });
  }
}

export default UpdateProductService;
