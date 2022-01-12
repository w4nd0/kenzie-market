// import usersRoutes from "./users.routes";
import express from "express";

const routes = (app) => {
  app.use(express.json());
};

export default routes;
