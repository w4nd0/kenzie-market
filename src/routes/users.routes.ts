import { Router, Express } from "express";
import { setPassword, authenticate } from "../middlewares/user.middleware";
import { isAdmOrResourceOwner } from "../middlewares/adm.middleware";
import CreateUserController from "../controllers/Users/createUser";
import ListUsersController from "../controllers/Users/listUsers";

const router = Router();

const usersRoutes = (app: Express) => {
  app.post('/email')
  app.post('/recuperar')

  app.post("/login", new CreateUserController().handle);
  router.post("", setPassword, new CreateUserController().handle);

  router.get("", new ListUsersController().handle);
  router.get("/:id", new ListUsersController().handle);

  app.use("/users", router);
};

export default usersRoutes;
