import { Router, Express } from "express";
import { authenticate } from "../middlewares/user.middleware";
import { isAdm } from "../middlewares/adm.middleware";
import CreateProductController from "../controllers/Products/createProduct";
import ListProductsController from "../controllers/Products/listProduct";
import RetriveProductController from "../controllers/Products/retriveProduct";
import UpdateProductController from "../controllers/Products/updateProduct";
import DeleteProductController from "../controllers/Products/deleteProduct";

const router = Router();

const productsRoutes = (app: Express) => {
  router.get("", new ListProductsController().handle);
  router.get("/:id", new RetriveProductController().handle);

  router.post("", authenticate, isAdm, new CreateProductController().handle);

  app.use("/product", router);
};

export default productsRoutes;
