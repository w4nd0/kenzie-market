import { Request, Response } from "express";
import DeleteCartService from "../../services/Carts/deleteCart.service";

class DeleteCartController {
  async handle(request: Request, response: Response) {
    const { uuid } = request.params;

    const deleteCartService = new DeleteCartService();

    const deleteCart = await deleteCartService.execute(uuid);

    return response.json(deleteCart);
  }
}

export default DeleteCartController;
