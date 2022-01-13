import { ProductsRepository } from "../../repositories/products";
import { getCustomRepository } from "typeorm";

class UpdateProductService {
  async execute({ id, data }) {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.findOne({ id });

    if (!product) {
      throw new Error("Product not found");
    }

    await productsRepository.update(id, data);

    return await productsRepository.findOne({ id });
  }
}

export default UpdateProductService;
