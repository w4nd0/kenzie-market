import { Request, Response } from "express";
import RetriveCartService from "../../services/Carts/retriveCart.service";

class RetriveCartController {
  async handle(request: Request, response: Response) {
    const retriveCartService = new RetriveCartService();

    const { id } = request.params;

    const cart = await retriveCartService.execute(request.cartId);

    return response.json(cart);
  }
}

export default RetriveCartController;
