import { Cart } from "../../models/Cart";
import { InfoCart } from "../../types";
import { CartsRepository } from "../../repositories/carts";
import { getCustomRepository } from "typeorm";

class HandleCartService {
  async execute(cart: InfoCart): Promise<Cart> {
    const cartsRepository = getCustomRepository(CartsRepository);

    const newCart = cartsRepository.create({ ...cart });

    await cartsRepository.save(newCart);

    return newCart;
  }
}

export default HandleCartService;
