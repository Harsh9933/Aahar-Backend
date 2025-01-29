import User from "../../entity/user.entitie.js";

export default class UserDao {
    private userModel: typeof User;

    constructor() {
        this.userModel = User;
    }

    
    async createUserDao(data: any) {
        return this.userModel.create(data);
    }

   
    async getUserByEmailDao(email: string) {
        return this.userModel.findOne({ where: { email } });
    }

    
    async getUserByIdDao(user_id: number) {
        return this.userModel.findOne({ where: { user_id } });
    }

    
    async getAllUsersDao(limit: number = 10, offset: number = 0) {
        return this.userModel.findAndCountAll({ limit, offset });
    }

   
    async updateUserDao(user_id: number, updateData: any) {
        const user = await this.userModel.findOne({ where: { user_id } });
        if (!user) return null;

        return user.update(updateData);
    }

   
    async deleteUserDao(user_id: number) {
        return this.userModel.destroy({ where: { user_id } });
    }
}
