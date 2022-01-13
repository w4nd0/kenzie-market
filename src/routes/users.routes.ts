import { Router, Express } from "express";
import CreateUserController from "../controllers/Users/createUser";
import { setPassword } from "../middlewares/user.middleware";

const router = Router();

const usersRoutes = (app: Express) => {
  app.post("/users", setPassword, new CreateUserController().handle);
};

export default usersRoutes;
