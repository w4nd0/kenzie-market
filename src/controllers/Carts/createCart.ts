import { Request, Response } from "express";
import HandleCartService from "../../services/Carts/handleProduct.service";

class HandleCartController {
  async handle(request: Request, response: Response) {
    const handleCartService = new HandleCartService();

    const newCart = await handleCartService.execute(request.body);

    return response.json(newCart);
  }
}

export default HandleCartController;
