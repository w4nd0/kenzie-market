import { Response, Request } from "express";
import UpdatePasswordService from "../../services/Users/updatePassword.service";

class UpdatePasswordController {
  async handle(request: Request, response: Response) {
    const { token, password, confirmation } = request.body;

    const updatePasswordService = new UpdatePasswordService();

    await updatePasswordService.execute(token, password, confirmation);

    return response.json({ message: "Password updated" });
  }
}

export default UpdatePasswordController;
