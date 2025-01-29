import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../config/database.config.js";

class DeliveryPartner extends Model {
  public id!: number;
  public user_name!: string;
  public first_name!: string;
  public last_name!: string;
  public driving_license!: string;
  public phone!: number;
  public created_at!: Date;
  public updated_at!: Date;
}

DeliveryPartner.init(
  {
    DP_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_name: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    first_name: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    driving_license: {
      type: DataTypes.TEXT,
      allowNull: true,
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
    modelName: "DeliveryPartner",
    tableName: "delivery_partner",
    timestamps: false, 
    underscored: true, 
  }
);

export default DeliveryPartner;
