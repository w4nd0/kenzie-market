import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "./database";
import routes from "./routes";
import ErrorHandler from "./utils/error";

const app = express();

routes(app);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof ErrorHandler) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

export default app;
