import RetriveCartService from "../../services/Carts/retriveCart.service";

class RetriveCartController {
  async handle(request, response) {
    const retriveCartService = new RetriveCartService();

    const user = await retriveCartService.execute(request.userId);

    return response.json(user);
  }
}

export default RetriveCartController;
