import { Router, Express } from "express";
import {
  authenticate,
  resourceOwnerOrAdm,
} from "../middlewares/user.middleware";
import { isAdm } from "../middlewares/adm.middleware";
import HandleCartController from "../controllers/Carts/handleCart";
import ListCartsController from "../controllers/Carts/listCart";
import RetriveCartController from "../controllers/Carts/retriveCart";
import DeleteProductCartController from "../controllers/Carts/deleteProductCart";

const cartRouter = Router();

const cartsRoutes = (app: Express) => {
  cartRouter.use(authenticate);

  cartRouter.post("", new HandleCartController().handle);

  cartRouter.get("", isAdm, new ListCartsController().handle);
  cartRouter.get(
    "/:id",
    resourceOwnerOrAdm,
    new RetriveCartController().handle
  );

  cartRouter.delete("/:product_id", new DeleteProductCartController().handle);

  app.use("/cart", cartRouter);
};

export default cartsRoutes;
