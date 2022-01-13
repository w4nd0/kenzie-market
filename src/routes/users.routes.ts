import { Router, Express } from "express";
import CreateUserController from "../controllers/Users/createUser";
import ListUsersController from "../controllers/Users/listUsers";
import LoginUserController from "../controllers/Users/loginUser";
import RetriveUserController from "../controllers/Users/retriveUser";
import { setPassword } from "../middlewares/user.middleware";

const router = Router();

const usersRoutes = (app: Express) => {
  app.post("/login", new LoginUserController().handle);

  router.post("", setPassword, new CreateUserController().handle);

  router.get("", new ListUsersController().handle);
  router.get("/:id", new RetriveUserController().handle);


  app.use("/users", router);
};

export default usersRoutes;
