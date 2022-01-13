import { Request, Response } from "express";
import DeleteUserService from "../../services/Users/deleteUser.service";

class DeleteUsersController {
  async handle(request: Request, response: Response) {
    const { uuid } = request.params;

    const deleteUserService = new DeleteUserService();

    const deleteUser = await deleteUserService.execute(uuid);

    return response.json(deleteUser);
  }
}

export default DeleteUsersController;
