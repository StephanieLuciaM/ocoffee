import "dotenv/config";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.PG_URL,
  {
    // on va faire la correpondance des champs updatedAt et createdAt
    define: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  }
);

// test
// try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
// } catch (error) {
//     console.error("Unable to connect to the database:", error);
// }


