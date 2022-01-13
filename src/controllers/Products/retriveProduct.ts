import RetriveProductService from "../../services/Products/retriveProduct.service";

class RetriveProductController {
  async handle(request, response) {
    const retriveProductService = new RetriveProductService();

    const product = await retriveProductService.execute(request.userId);

    return response.json(product);
  }
}

export default RetriveProductController;
