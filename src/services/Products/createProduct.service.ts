import Product from "../../models/Product";
import { InfoProduct } from "../../types";
import { ProductsRepository } from "../../repositories/products";
import { getCustomRepository } from "typeorm";
import ErrorHandler from "../../utils/error";

class CreateProductService {
  async execute(product: InfoProduct): Promise<Product> {
    try {
      const productsRepository = getCustomRepository(ProductsRepository);

      const newProduct = productsRepository.create({ ...product });

      await productsRepository.save(newProduct);

      return newProduct;
    } catch (e) {
      throw new ErrorHandler("Failed to create product");
    }
  }
}

export default CreateProductService;
