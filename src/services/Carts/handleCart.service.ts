import Cart from "../../models/Cart";
import CartProduct from "../../models/CartProduct";
import { CartsRepository } from "../../repositories/carts";
import { getCustomRepository, getRepository } from "typeorm";
import { InfoUserCart } from "../../types";

class HandleCartService {
  async execute(productId: string, userInfo: InfoUserCart) {
    const cartsRepository = getCustomRepository(CartsRepository);

    const cartProductsRepository = getRepository(CartProduct);

    const itemAddedToCart = cartProductsRepository.create({
      cart: { id: userInfo.cartId },
      product: { id: productId },
    });

    await cartProductsRepository.save(itemAddedToCart);

    return { message: "Product added to cart" };
  }
}

export default HandleCartService;
