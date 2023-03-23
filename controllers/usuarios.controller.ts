import { Response, Request } from "express";
import { Usuario } from "../models/usuarios";
export const getUsuarios = (req: Request, res: Response) => {
  res.json({
    message: "getUsuarios",
  });
};

export const getUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: "getUsuario",
    id,
  });
};

export const createUsuario = async (req: Request, res: Response) => {
  const { nome, email, senha } = req.body;
  try {
    const usuarioCreated = await Usuario.create({ nome, email, senha });
    res
      .status(201)
      .json({ message: "Usuário criado com sucesso", usuario: usuarioCreated });
  } catch (error) {
    res.status(500).json({
      message: "Error ao criar usuario",
      error,
    });
  }
};

export const updateUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  res.json({
    message: "putUsuario",
    body,
  });
};

export const deleteUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: "deleteUsuario",
    id,
  });
};
