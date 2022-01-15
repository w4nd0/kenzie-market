import Cart from "../../models/Cart";
import CartProduct from "../../models/CartProduct";
import { CartsRepository } from "../../repositories/carts";
import { getCustomRepository, getRepository } from "typeorm";
import { InfoUserCart } from "../../types";
import ErrorHandler from "../../utils/error";
import { ProductsRepository } from "../../repositories/products";

class HandleCartService {
  async execute(productId: string, cardId: string) {
    const cartsRepository = getCustomRepository(CartsRepository);

    const productsRepository = getCustomRepository(ProductsRepository);

    const cartProductsRepository = getRepository(CartProduct);

    const product = await productsRepository.findOne({ id: productId });

    if (!product) {
      throw new ErrorHandler("Product not found");
    }

    const cart = await cartsRepository.findOne({ id: cardId });

    cart.total = Number(cart.total) + Number(product.price);

    await cartsRepository.save(cart);

    const itemAddedToCart = cartProductsRepository.create({
      cart: { id: cardId },
      product: { id: productId },
    });

    await cartProductsRepository.save(itemAddedToCart);

    return { message: "Product added to cart" };
  }
}

export default HandleCartService;
