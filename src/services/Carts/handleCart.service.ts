import CartOrderProduct from "../../models/CartOrderProduct";
import { CartsRepository } from "../../repositories/carts";
import { getCustomRepository, getRepository } from "typeorm";
import ErrorHandler from "../../utils/error";
import { ProductsRepository } from "../../repositories/products";
import { UsersRepository } from "../../repositories/users";

class HandleCartService {
  async execute(productId: string, userId: string) {
    const cartsRepository = getCustomRepository(CartsRepository);

    const productsRepository = getCustomRepository(ProductsRepository);

    const cartOrderProductRepository = getRepository(CartOrderProduct);

    const userRespository = getCustomRepository(UsersRepository);

    const user = await userRespository.findOne({ id: userId });

    const product = await productsRepository.findOne({ id: productId });

    if (!product) {
      throw new ErrorHandler("Product not found");
    }

    const cart = await cartsRepository.findOne({ id: user.cart.id });

    cart.total = Number(cart.total) + Number(product.price);

    await cartsRepository.save(cart);

    const itemAddedToCart = cartOrderProductRepository.create({
      cart: { id: cart.id },
      product: { id: productId },
      user: { id: user.id },
    });

    await cartOrderProductRepository.save(itemAddedToCart);

    return { message: "Product added to cart" };
  }
}

export default HandleCartService;
