import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); 

const sequelize = new Sequelize(
  process.env.DB_NAME||"",
  process.env.DB_USER||"",
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: process.env.DB_LOGGING === "true",
  }
);

export default sequelize;
