import errorResponse from "../../constant/common/error.js";
import UserDao from "../../dao/v1/user.dao.js";

export default class UserService {
 private userDao!:UserDao;
 constructor(){
    this.userDao= new UserDao()
 }

 async createUserService(data:any):Promise<any>{
console.log("services->v1->user.service->createUserService")
console.log("creating user in the service with this email id",data.email);
if(!data||!data.email||!data.phone){
    throw new Error(errorResponse.INVALID_INPUT);
}
const userExist= await this.userDao.getUserByEmailDao(data.email);
if (userExist) {
    throw new Error(errorResponse.USER_ALREADY_EXIST);
}
return this.userDao.createUserDao(data);

 }
}