import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";

export interface IUsuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
}
export class Usuario extends Model<IUsuario> implements IUsuario {
  public id!: number;
  public nome!: string;
  public email!: string;
  public senha!: string;
}
Usuario.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "usuarios",
    timestamps: false,
  }
);

(async () => {
  await sequelize.sync();
  console.log("Create usuarios table if does not exist!");
})();

// (async () => {
//   await await Equipamento.create({ ...dados });
// })();
