import { getRepository } from "typeorm";
import CartProduct from "../../models/CartProduct";

class DeleteProductCartService {
  async execute(productId: string, cartId: string) {
    const cartProductsRepository = getRepository(CartProduct);

    cartProductsRepository.findOne({ where: { cartId, productId } });

    cartProductsRepository.delete(productId);

    return { message: "Product removed from cart" };
  }
}

export default DeleteProductCartService;
