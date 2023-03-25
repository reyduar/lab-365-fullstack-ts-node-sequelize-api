import express, { Application } from "express";
import cors from "cors";
import { sequelize } from "../db/connection";
import usuarioRoutes from "../routes/usuarios.route";

export interface Path {
  usuarios: string;
}

class Server {
  private app: Application;
  private port: string;
  private apiPaths: Path;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";
    this.apiPaths = {
      usuarios: "/api/usuarios",
    };

    this.middlewares();
    this.dbConnection();
    this.routes();
    this.publicPage();
  }

  async dbConnection() {
    try {
      await sequelize.authenticate();
      console.log("Connection success");
    } catch (error) {
      throw new Error("Error connection");
    }
  }

  publicPage() {
    this.app.use(express.static("public"));
  }

  middlewares() {
    // cors
    this.app.use(cors());
    // read body
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, usuarioRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}

export default Server;
