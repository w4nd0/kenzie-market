import HandleCartService from "../../services/Carts/handleCart.service";

class HandleCartController {
  async handle(request, response) {
    const handleCartService = new HandleCartService();

    const { productId } = request.body;

    const cart = await handleCartService.execute(productId, request.userId);

    return response.json(cart);
  }
}

export default HandleCartController;
