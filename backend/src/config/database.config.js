"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var sequelize = new sequelize_1.Sequelize("Aahar-db", "postgres", "0508", {
    host: "localhost",
    dialect: "postgres",
    logging: false,
});
exports.default = sequelize;
