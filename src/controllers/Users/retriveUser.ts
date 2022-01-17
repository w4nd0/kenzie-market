import { instanceToInstance } from "class-transformer";
import RetriveUserService from "../../services/Users/retriveUser.service";

class RetriveUserController {
  async handle(request, response) {
    const retriveUserService = new RetriveUserService();

    const user = await retriveUserService.execute(request.params.id);

    return response.json(instanceToInstance(user));
  }
}

export default RetriveUserController;
