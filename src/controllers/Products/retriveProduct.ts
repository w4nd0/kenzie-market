import RetriveProductService from "../../services/Products/retriveProduct.service";

class RetriveProductController {
  async handle(request, response) {
    const retriveProductService = new RetriveProductService();

    const { id } = request.params;

    const product = await retriveProductService.execute(id);

    return response.json(product);
  }
}

export default RetriveProductController;
