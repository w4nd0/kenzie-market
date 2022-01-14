import { ProductsRepository } from "../../repositories/products";
import { getCustomRepository } from "typeorm";
import ErrorHandler from "../../utils/error";

class DeleteProductService {
  async execute(id: string) {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.findOne({ id });

    if (!product) {
      throw new ErrorHandler("Product not found");
    }

    await productsRepository.delete(id);

    return { message: "Product deleted with success" };
  }
}

export default DeleteProductService;
