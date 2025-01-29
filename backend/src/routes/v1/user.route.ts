import express from "express";
import UserController from "../../controller/v1/user.controller.js";

const route = express.Router();
const userController = new UserController();

/**
 * @swagger
 * /user/create_user:
 *   post:
 *     summary: Create a new user
 *     description: API to create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - phone
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               phone:
 *                 type: string
 *                 example: "9876543210"
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid input
 */
route.post("/create_user",(req, res) => userController.createUserController(req, res));

export default route;
