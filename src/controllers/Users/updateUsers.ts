import { Request, Response } from "express";
import UpdateUsersService from "../../services/Users/updateUser.service";

class UpdateUsersController {
  async handle(request: Request, response: Response) {
    const { uuid } = request.params;

    const data = request.body;

    const updateUserService = new UpdateUsersService();

    const updateUser = await updateUserService.execute({ id: uuid, data });

    return response.json(updateUser);
  }
}

export default UpdateUsersController;
