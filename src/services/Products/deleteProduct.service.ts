import { ProductsRepository } from "../../repositories/products";
import { getCustomRepository } from "typeorm";

class DeleteProductService {
  async execute(id: string) {
    const productsRepository = getCustomRepository(ProductsRepository);

    // const product = await productsRepository.findOne({ id });

    // if (!product) {
    // throw new Error("Product not found");
    // }

    // await productsRepository.delete(id);

    return { message: "Product deleted with success" };
  }
}

export default DeleteProductService;
