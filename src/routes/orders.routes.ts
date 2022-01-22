import { Router, Express } from "express";
import { authenticate, resourceOwner } from "../middlewares/user.middleware";
import CloseOrderController from "../controllers/Orders/closeOrder";
import RetrieveOrderController from "../controllers/Orders/retrieveOrder";
import { isAdm } from "../middlewares/adm.middleware";
import ListOrdersController from "../controllers/Orders/listOrder";

const buyRouter = Router();

const ordersRoutes = (app: Express) => {
  buyRouter.use(authenticate);

  buyRouter.post("", new CloseOrderController().handle);

  buyRouter.get("", isAdm, new ListOrdersController().handle);
  buyRouter.get(
    "/:id",
    resourceOwner,
    isAdm,
    new RetrieveOrderController().handle
  );

  app.use("/buy", buyRouter);
};

export default ordersRoutes;
