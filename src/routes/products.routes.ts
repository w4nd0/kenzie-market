import { Router, Express } from "express";
import { setPassword, authenticate } from "../middlewares/user.middleware";
import { isAdmOrResourceOwner } from "../middlewares/adm.middleware";
import CreateProductController from "../controllers/Products/createProduct";
import ListProductsController from "../controllers/Products/listProduct";
import RetriveProductController from "../controllers/Products/retriveProduct";

const router = Router();

const productsRoutes = (app: Express) => {
  router.post("", new CreateProductController().handle);

  router.get("", new ListProductsController().handle);
  router.get("/:id", new RetriveProductController().handle);

  app.use("/products", router);
};

export default productsRoutes;
