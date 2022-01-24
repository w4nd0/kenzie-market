import { Router, Express } from "express";
import {
  setPassword,
  authenticate,
  resourceOwnerOrAdm,
} from "../middlewares/user.middleware";
import { isAdm } from "../middlewares/adm.middleware";
import CreateUserController from "../controllers/Users/createUser";
import ListUsersController from "../controllers/Users/listUsers";
import LoginUserController from "../controllers/Users/loginUser";
import RetriveUserController from "../controllers/Users/retriveUser";
import SendEmailToUserController from "../controllers/Email/sendEmailToUser";
import SendPasswordResetToken from "../controllers/Email/sendPasswordResetToken";
import UpdatePasswordController from "../controllers/Users/updatePassword";

const router = Router();

const usersRoutes = (app: Express) => {
  app.post("/email", new SendEmailToUserController().handle);
  app.post("/recuperar", new SendPasswordResetToken().handle);
  app.post("/alterar_senha", new UpdatePasswordController().handle);

  app.post("/login", new LoginUserController().handle);
  router.post("", setPassword, new CreateUserController().handle);

  router.use(authenticate);

  router.get("", isAdm, new ListUsersController().handle);
  router.get("/:id", resourceOwnerOrAdm, new RetriveUserController().handle);

  app.use("/user", router);
};

export default usersRoutes;
