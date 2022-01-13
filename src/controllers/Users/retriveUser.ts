import RetriveUserService from "../../services/Users/retriveUser.service";

class RetriveUserController {
  async handle(request, response) {
    const retriveUserService = new RetriveUserService();

    const user = await retriveUserService.execute(request.params.id);

    return response.json(user);
  }
}

export default RetriveUserController;
