import express from "express";
import "./database";
import routes from "./routes";

const app = express();

routes(app);

export default app;
