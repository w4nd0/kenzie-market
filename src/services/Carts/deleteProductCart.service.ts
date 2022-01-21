import { getCustomRepository, getRepository } from "typeorm";
import CartOrderProduct from "../../models/CartOrderProduct";
import { UsersRepository } from "../../repositories/users";

class DeleteProductCartService {
  async execute(productId: string, userId: string) {
    const cartOrderProductRepository = getRepository(CartOrderProduct);

    const userRespository = getCustomRepository(UsersRepository);

    const user = await userRespository.findOne({ id: userId });

    cartOrderProductRepository.findOne({
      where: { cart: user.cart, productId },
    });

    cartOrderProductRepository.delete(productId);

    return { message: "Product removed from cart" };
  }
}

export default DeleteProductCartService;
