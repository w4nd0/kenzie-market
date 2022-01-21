import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import ListCartsService from "../../services/Carts/listCart.service";

class ListCartsController {
  async handle(request: Request, response: Response) {
    const listCartsService = new ListCartsService();

    const listCarts = await listCartsService.execute();

    return response.json(instanceToInstance(listCarts));
  }
}

export default ListCartsController;
