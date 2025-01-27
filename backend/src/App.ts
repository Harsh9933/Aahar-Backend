import express from "express";
import sequelize from "./config/database.config.ts";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "./utils/swagger.ts";

const app = express();

app.use(express.json());
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
const PORT = 5000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected!");
    await sequelize.sync(); 

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
