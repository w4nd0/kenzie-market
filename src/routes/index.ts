import express from "express";
import usersRoutes from "./users.routes";
import cartsRoutes from "./carts.routes";
import productsRoutes from "./products.routes";

const routes = (app: express.Express) => {
  app.use(express.json());
  usersRoutes(app);
  // cartsRoutes(app);
  // productsRoutes(app);
};

export default routes;
