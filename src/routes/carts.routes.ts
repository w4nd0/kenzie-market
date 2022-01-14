import { Router, Express } from "express";
import { setPassword, authenticate } from "../middlewares/user.middleware";
import { isAdmOrResourceOwner } from "../middlewares/adm.middleware";
import HandleCartController from "../controllers/Carts/handleCart";
import ListCartsController from "../controllers/Carts/listCart";
import RetriveCartController from "../controllers/Carts/retriveCart";
import DeleteProductCartController from "../controllers/Carts/deleteProductCart";

const cartRouter = Router();
const buyRouter = Router();

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

  buyRouter.post("");
  buyRouter.get("");
  buyRouter.get("/:id");

  app.use("/cart", cartRouter);
  app.use("/buy", buyRouter);
};

export default cartsRoutes;
