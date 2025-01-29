import errorResponse from "../../constant/Error/error.constant";
import UserDao from "../../dao/v1/user.dao";

export default class UserService {
   private userDao!:UserDao
 constructor(){
   this.userDao= new UserDao();
 }

  public async  createUserService (data:any){
    console.log("service->v1->userService->createUserService");
const userExist = await this.userDao.findUserByUserEmail(data.email);
if (userExist) {
  new Error(errorResponse.ALREADY_EXIST);
  return;
}
const userData = await this.userDao.createUser(data);
return userData;
  }
 
}