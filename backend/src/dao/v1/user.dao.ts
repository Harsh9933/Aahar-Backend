import User from "../../entity/user.entitie.js";

export default class UserDao {
    private userModel: typeof User;
    constructor(){
        this.userModel=User;
    }

    async createUserDao(data:any){
return this.userModel.create(data);
    }
    async getUserByEmailDao(email:string){
return this.userModel.findOne({where:{email}});
    }
}