import { Request, Response } from "express";
import LisUsersService from "../../services/Users/listUsers.service";

class ListUsersController {
  async handle(request: Request, response: Response) {
    const listUsersService = new LisUsersService();

    const listUsers = await listUsersService.execute();

    return response.json(listUsers);
  }
}

export default ListUsersController;
