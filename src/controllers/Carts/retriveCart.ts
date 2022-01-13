import RetriveCartService from "../../services/Carts/retriveCart.service";

class RetriveCartController {
  async handle(request, response) {
    const retriveCartService = new RetriveCartService();

    const cart = await retriveCartService.execute(request.userId);

    return response.json(cart);
  }
}

export default RetriveCartController;
