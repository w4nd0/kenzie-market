import { Request, Response } from "express";
import DeleteProductService from "../../services/Products/deleteProduct.service";

class DeleteProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteProductService = new DeleteProductService();

    const deleteProduct = await deleteProductService.execute(id);

    return response.json(deleteProduct);
  }
}

export default DeleteProductController;
