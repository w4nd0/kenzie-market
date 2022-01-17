import { Router, Express } from "express";
import { authenticate } from "../middlewares/user.middleware";
import CloseOrderController from "../controllers/Orders/closeOrder";

const buyRouter = Router();

const ordersRoutes = (app: Express) => {
  buyRouter.use(authenticate);

  buyRouter.post("", new CloseOrderController().handle);

  buyRouter.get("");
  buyRouter.get("/:id");
  
  app.use("/buy", buyRouter);
};

export default ordersRoutes;
