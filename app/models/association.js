import { Category } from "./categoryModel.js";
import { Coffee } from "./coffeeModel.js";

// Category <--> Coffee: association "one-to-many"
Category.hasMany(Coffee, {
  // spécifier la clé étrangère
  foreignKey: "category_id",
  // alias d'association (nom personnalisé)
  as: "coffees"
});
Coffee.belongsTo(Category, {
  // spécifier la clé étrangère
  foreignKey: "category_id",
  // alias d'association
  as: "category",
});

export {Category,Coffee};