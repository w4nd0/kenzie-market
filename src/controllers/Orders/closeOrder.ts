import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import CloseOrderService from "../../services/Orders/closeOrder.service";
import SendOrderEmailService from "../../services/Orders/sendOrderEmail.service";

class CloseOrderController {
  async handle(request: Request, response: Response) {
    const closeCartService = new CloseOrderService();
    const serviceEmail = new SendOrderEmailService();

    const cart = await closeCartService.execute(request.userId);

    // await serviceEmail.execute(request.userId, cart);

    return response.json(instanceToInstance(cart));
  }
}

export default CloseOrderController;
