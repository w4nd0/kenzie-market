import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import RetrieveOrderService from "../../services/Orders/retrieveOrder.service";

class RetrieveOrderController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const retrieveOrderService = new RetrieveOrderService();

    const order = await retrieveOrderService.execute(id);

    return response.json(instanceToInstance(order));
  }
}

export default RetrieveOrderController;
