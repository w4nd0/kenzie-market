import { getConnection, getCustomRepository, getRepository } from "typeorm";
import Cart from "../../models/Cart";
import CartOrderProduct from "../../models/CartOrderProduct";
import User from "../../models/User";
import { CartsRepository } from "../../repositories/carts";
import { OrdersRepository } from "../../repositories/orders";
import { UsersRepository } from "../../repositories/users";
import ErrorHandler from "../../utils/error";

class CloseOrderService {
  async execute(userId: string) {
    try {
      const usersRepository = getCustomRepository(UsersRepository);
      const cartsRepository = getCustomRepository(CartsRepository);
      const orderRepository = getCustomRepository(OrdersRepository);
      const cartPoductsRepository = getRepository(CartOrderProduct);

      const user = await usersRepository.findOne({ id: userId });

      const cart = await cartsRepository.findOne({ id: user.cart.id });

      cart.cartOwner = user.id;

      await cartsRepository.save(cart);

      const cartProducts = await cartPoductsRepository.find({
        where: { cart: user.cart, orderId: null },
      });

      const order = orderRepository.create({ user });

      await orderRepository.save(order);

      cartProducts.forEach(async (item) => {
        item.orderId = order.id;
        await cartPoductsRepository.save(item);
      });

      order.total = user.cart.total;

      await orderRepository.save(order);

      await getConnection()
        .createQueryBuilder()
        .relation(User, "cart")
        .of(user)
        .set(null);

      const newCart = new Cart();

      newCart.user = user;

      await cartsRepository.save(newCart);

      return cart;
    } catch (error) {
      throw new ErrorHandler(error.message);
    }
  }
}

export default CloseOrderService;
