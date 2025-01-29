import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../config/database.config.js"; 
import User from "./user.entitie.js"; 
import Vendor from "./vendor.entitie.js"; 

class Order extends Model {
  public order_id!: number;
  public user_id!: number;
  public vendor_id!: number;
  public delivery_partner_id!: string;
  public order_type!: string;
  public quantity!: number;
  public price!: number;
  public status!: string;
  public delivery_address!: string;
  public created_at!: Date;
  public updated_at!: Date;
}

Order.init(
  {
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User, 
        key: 'user_id',
      },
    },
    vendor_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: Vendor, 
        key: 'vendor_id', 
      },
    },
    delivery_partner_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    order_type: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    delivery_address: {
      type: DataTypes.STRING(20),
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
    modelName: "Order", 
    tableName: "order", 
    timestamps: false, 
    underscored: true, 
  }
);

// Defining associations in the `Order` model to `User` and `Vendor`
Order.belongsTo(User, { foreignKey: "user_id", as: "user" });  // Linking the User model
Order.belongsTo(Vendor, { foreignKey: "vendor_id", as: "vendor" });  // Linking the Vendor model

export default Order;
