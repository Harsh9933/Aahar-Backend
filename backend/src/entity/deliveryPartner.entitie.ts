import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../config/database.config";

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
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_name: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    driving_license: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
