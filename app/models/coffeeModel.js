import { DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelize-client.js";

export class Coffee extends Model {}

Coffee.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,  
    },
    description: {
      type: DataTypes.TEXT,
    },
    reference: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    origin: {
      type: DataTypes.STRING,
    },
    pricePerKg: {
      type: DataTypes.DECIMAL(6, 2),
      field: 'price-per-kg', 
    },
    available: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    tableName: "coffee",
  }
);

