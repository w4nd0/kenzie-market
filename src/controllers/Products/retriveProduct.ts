import RetriveProductService from "../../services/Products/retriveProduct.service";

class RetriveProductController {
  async handle(request, response) {
    const retriveProductService = new RetriveProductService();

    const user = await retriveProductService.execute(request.userId);

    return response.json(user);
  }
}

export default RetriveProductController;
