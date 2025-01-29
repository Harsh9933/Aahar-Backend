import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../config/database.config.js"; 

class Vendor extends Model {
  public vendor_id!: number;
  public owner_name!: string;
  public company_name!: string;
  public food_type!: string;
  public opening_timing!: Date;
  public closing_timing!: Date;
  public aadharcard_number!: number;
  public iffsai_image!: string;
  public created_at!: Date;
  public updated_at!: Date;
}

Vendor.init(
  {
    vendor_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    owner_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    company_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    food_type: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    opening_timing: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    closing_timing: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    aadharcard_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    iffsai_image: {
      type: DataTypes.TEXT, 
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
    modelName: "Vendor", 
    tableName: "Vendor", 
    timestamps: false,
    underscored: true, 
  }
);

export default Vendor;
