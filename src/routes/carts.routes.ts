import { Router, Express } from "express";
import HandleCartController from "../controllers/Carts/createCart";
import DeleteCartController from "../controllers/Carts/deleteCart";
import ListCartsController from "../controllers/Carts/listCart";
import RetriveCartController from "../controllers/Carts/retriveCart";

const routerCart = Router();
const routerBuy = Router();

const cartsRoutes = (app: Express) => {
  routerCart.post("", new HandleCartController().handle);

  routerCart.get("", new ListCartsController().handle);
  routerCart.get("/:id", new RetriveCartController().handle);

  routerCart.delete("/:product_id", new DeleteCartController().handle);

  routerBuy.post("");
  routerBuy.get("");
  routerBuy.get(":/id");

  app.use("cart", routerCart);
  app.use("buy", routerBuy);
};

export default cartsRoutes;
