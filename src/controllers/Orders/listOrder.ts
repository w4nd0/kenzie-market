import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import ListOrdersService from "../../services/Orders/listOrder.service";

class ListOrdersController {
  async handle(request: Request, response: Response) {
    const listOrdersService = new ListOrdersService();

    const listOrders = await listOrdersService.execute();

    return response.json(instanceToInstance(listOrders));
  }
}

export default ListOrdersController;
