import { Request, Response } from "express";
import UpdateProductsService from "../../services/Products/updateProduct.service";

class UpdateProductsController {
  async handle(request: Request, response: Response) {
    const { uuid } = request.params;

    const data = request.body;

    const updateProductService = new UpdateProductsService();

    const updateProduct = await updateProductService.execute({ id: uuid, data });

    return response.json(updateProduct);
  }
}

export default UpdateProductsController;
