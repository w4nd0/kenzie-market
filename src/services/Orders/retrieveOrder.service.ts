import { getCustomRepository } from "typeorm";
import ErrorHandler from "../../utils/error";
import { OrdersRepository } from "../../repositories/orders";

class RetrieveOrderService {
  async execute(id: string) {
    const orderRepository = getCustomRepository(OrdersRepository);

    const order = await orderRepository
      .findOneOrFail({ id })
      .catch((e) => {
        throw new ErrorHandler("Order not found");
      });

    return order;
  }
}
export default RetrieveOrderService;
