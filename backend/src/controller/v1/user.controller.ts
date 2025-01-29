import { Request, Response } from "express";
import UserService from "../../services/v1/user.service.js";
import statusCode from "../../constant/common/statusCode.js";
import errorResponse from "../../constant/common/error.js";

export default class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async createUserController(req: Request, res: Response): Promise<void> {
    console.log("controller->v1->user.controller->createUserController");

    try {
      
      const data = await this.userService.createUserService(req.body);
      res.status(statusCode.CREATED).send({ message: "user created" });
    } catch (error: any) {
      console.log(error);
      if (error.message === errorResponse.INVALID_INPUT) {
        res.status(statusCode.BAD_REQUEST).send({ message: errorResponse.INVALID_INPUT });
      } else if (error.message === errorResponse.USER_ALREADY_EXIST) {
        res.status(statusCode.UNAUTHORIZED).send({ message: errorResponse.USER_ALREADY_EXIST });
      } else {
        res.status(statusCode.INTERNAL_SERVER_ERROR).send({ message: errorResponse.INTERNAL_SERVER_ERROR });
      }
    }
  }
}
