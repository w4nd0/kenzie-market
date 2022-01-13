import { Request, Response } from "express";
import CreateCartService from "../../services/Carts/createProduct.service";

class CreateCartController {
  async handle(request: Request, response: Response) {
    const createCartService = new CreateCartService();

    const newCart = await createCartService.execute(request.body);

    return response.json(newCart);
  }
}

export default CreateCartController;
