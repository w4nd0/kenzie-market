import { Request, Response } from "express";
import CreateUserService from "../../services/Users/createUser.service";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const createUserService = new CreateUserService();

    const newUser = await createUserService.execute(request.body);

    return response.json(newUser);
  }
}

export default CreateUserController;
