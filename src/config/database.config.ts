import { Sequelize } from "sequelize";

const sequelize = new Sequelize("Aahar-db", "postgres", "0508", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

export default sequelize;
