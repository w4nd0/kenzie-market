import { Request, Response } from "express";
import CloseOrderService from "../../services/Orders/closeOrder.service";

class CloseOrderController {
  async handle(request: Request, response: Response) {
    const closeCartService = new CloseOrderService();

    const closeCart = await closeCartService.execute(
      request.cartId,
      request.userId
    );

    return response.json(closeCart);
  }
}

export default CloseOrderController;
