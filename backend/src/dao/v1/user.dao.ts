import User from "../../entity/user.entitie";

export default class UserDao {
    private userModel: typeof User;
    constructor(){
         this.userModel=User;
    }
    public async  createUser(data:any){
 return await this.userModel.create(data);
    }
}