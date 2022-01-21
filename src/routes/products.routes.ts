import { Router, Express } from "express";
import { authenticate } from "../middlewares/user.middleware";
import { isAdmOrResourceOwner } from "../middlewares/adm.middleware";
import CreateProductController from "../controllers/Products/createProduct";
import ListProductsController from "../controllers/Products/listProduct";
import RetriveProductController from "../controllers/Products/retriveProduct";
import UpdateProductController from "../controllers/Products/updateProduct";
import DeleteProductController from "../controllers/Products/deleteProduct";

const router = Router();

const productsRoutes = (app: Express) => {
  router.get("", new ListProductsController().handle);
  router.get("/:id", new RetriveProductController().handle);

  // router.use(authenticate);

  router.post("", new CreateProductController().handle);

  router.patch(
    "/:id",
    isAdmOrResourceOwner,
    new UpdateProductController().handle
  );
  router.delete(
    "/:id",
    isAdmOrResourceOwner,
    new DeleteProductController().handle
  );

  app.use("/product", router);
};

export default productsRoutes;
