import { Router, Express } from "express";
import { setPassword, authenticate } from "../middlewares/user.middleware";
import { isAdmOrResourceOwner } from "../middlewares/adm.middleware";
import HandleCartController from "../controllers/Carts/handleCart";
import ListCartsController from "../controllers/Carts/listCart";
import RetriveCartController from "../controllers/Carts/retriveCart";
import DeleteCartController from "../controllers/Carts/deleteCart";

const cartRouter = Router();
const buyRouter = Router();

const cartsRoutes = (app: Express) => {
  cartRouter.post("", new HandleCartController().handle);

  cartRouter.get("", new ListCartsController().handle);
  cartRouter.get("/:id", new RetriveCartController().handle);

  cartRouter.delete("/product_id", new DeleteCartController().handle);

  buyRouter.post("");
  buyRouter.get("");
  buyRouter.get("/:id");

  app.use("/carts", cartRouter);
  app.use("/buy", buyRouter);
};

export default cartsRoutes;
