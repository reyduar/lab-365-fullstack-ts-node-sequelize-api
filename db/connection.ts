import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("node-ts-db", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  logging: true,
});
