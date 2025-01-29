"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "User, Order, and Delivery Partner API",
            version: "1.0.0",
            description: "API documentation for managing Users, Orders, and Delivery Partners.",
        },
        servers: [
            {
                url: "http://localhost:5000",
            },
        ],
    },
    apis: ["./src/routes/*.ts"],
};
exports.default = swaggerOptions;
