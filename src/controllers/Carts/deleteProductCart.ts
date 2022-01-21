import { Request, Response } from "express";
import DeleteProductCartService from "../../services/Carts/deleteProductCart.service";

class DeleteProductCartController {
  async handle(request: Request, response: Response) {
    const { product_id } = request.params;

    const deleteProductCartService = new DeleteProductCartService();

    const deleteItem = await deleteProductCartService.execute(
      product_id,
      request.userId
    );

    return response.json(deleteItem);
  }
}

export default DeleteProductCartController;
