import { Router, Express } from "express";
import { authenticate } from "../middlewares/user.middleware";
import { isAdmOrResourceOwner } from "../middlewares/adm.middleware";
import HandleCartController from "../controllers/Carts/handleCart";
import ListCartsController from "../controllers/Carts/listCart";
import RetriveCartController from "../controllers/Carts/retriveCart";
import DeleteProductCartController from "../controllers/Carts/deleteProductCart";

const cartRouter = Router();

const cartsRoutes = (app: Express) => {
  cartRouter.use(authenticate);

  cartRouter.post("", new HandleCartController().handle);

  cartRouter.get("", isAdmOrResourceOwner, new ListCartsController().handle);
  cartRouter.get(
    "/:id",
    isAdmOrResourceOwner,
    new RetriveCartController().handle
  );

  cartRouter.delete("/:product_id", new DeleteProductCartController().handle);


  app.use("/cart", cartRouter);
};

export default cartsRoutes;
