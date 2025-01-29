import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../config/database.config.js";

class User extends Model {
  public user_id!: number;
  public user_name!: string;
  public first_name!: string;
  public last_name!: string;
  public email!:string
  public address!: string;
  public phone!: number;
  public created_at!: Date;
  public updated_at!: Date;
}


User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_name: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    email:{
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true, 
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, 
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, 
    },
  },
  {
    sequelize, 
    modelName: "User", 
    tableName: "User", 
    timestamps: false, 
    underscored: true,
  }
);

export default User;
