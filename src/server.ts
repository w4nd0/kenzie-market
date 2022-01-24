import app from "./app";
import swaggerUiExpress from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

app.use(
  "/api-documentation",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerDocument)
);

app.listen(process.env.PORT, () => {
  console.log("App running");
});
