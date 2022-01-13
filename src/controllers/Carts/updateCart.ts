import { Request, Response } from "express";
import UpdateCartsService from "../../services/Carts/updateCart.service";

class UpdateCartsController {
  async handle(request: Request, response: Response) {
    const { uuid } = request.params;

    const data = request.body;

    const updateCartService = new UpdateCartsService();

    const updateCart = await updateCartService.execute({ id: uuid, data });

    return response.json(updateCart);
  }
}

export default UpdateCartsController;
