import { Product } from "../../models/Product";
import { InfoProduct } from "../../types";
import { ProductsRepository } from "../../repositories/products";
import { getCustomRepository } from "typeorm";

class CreateProductService {
  async execute(product: InfoProduct): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const newProduct = productsRepository.create({ ...product });

    await productsRepository.save(newProduct);

    return newProduct;
  }
}

export default CreateProductService;
