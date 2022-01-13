import usersRoutes from "./users.routes";
import cartsRoutes from "./carts.routes";
import productsRoutes from "./products.routes";
import express from "express";

const routes = (app) => {
  app.use(express.json());
  usersRoutes(app);
  productsRoutes(app);
  //   cartsRoutes(app);
};

export default routes;
