import { Router, Express } from "express";
import { setPassword, authenticate } from "../middlewares/user.middleware";
import { isAdmOrResourceOwner } from "../middlewares/adm.middleware";
import CreateUserController from "../controllers/Users/createUser";
import ListUsersController from "../controllers/Users/listUsers";
import LoginUserController from "../controllers/Users/loginUser";
import RetriveUserController from "../controllers/Users/retriveUser";

const router = Router();

const usersRoutes = (app: Express) => {
  app.post("/email");
  app.post("/recuperar");

  app.post("/login", new LoginUserController().handle);
  router.post("", setPassword, new CreateUserController().handle);

  router.use(authenticate);

  router.get("", isAdmOrResourceOwner, new ListUsersController().handle);
  router.get("/:id", isAdmOrResourceOwner, new RetriveUserController().handle);

  app.use("/users", router);
};

export default usersRoutes;
