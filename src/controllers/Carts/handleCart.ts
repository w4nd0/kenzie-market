import { Request, Response } from "express";
import HandleCartService from "../../services/Carts/handleCart.service";
import { InfoUserCart } from "../../types";

class HandleCartController {
  async handle(request, response) {
    const handleCartService = new HandleCartService();

    const { productId } = request.body;

    const cartId: string = request.cartId;

    const cart = await handleCartService.execute(productId, cartId);

    return response.json(cart);
  }
}

export default HandleCartController;
