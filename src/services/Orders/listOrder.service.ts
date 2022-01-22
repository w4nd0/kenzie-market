import { getCustomRepository } from "typeorm";
import { OrdersRepository } from "../../repositories/orders";

class ListCartsService {
  async execute() {
    const ordersRepository = getCustomRepository(OrdersRepository);

    const orders = ordersRepository.find();

    return orders;
  }
}

export default ListCartsService;
