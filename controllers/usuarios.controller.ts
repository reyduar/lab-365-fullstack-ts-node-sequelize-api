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

export const updateUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;
  try {
    const usuarioUpdated = await Usuario.findByPk(id);
    if (usuarioUpdated) {
      await Usuario.update({ nome, email, senha }, { where: { id } });
      res.status(201).json({
        message: "Usuário atualizado com sucesso",
        usuario: usuarioUpdated,
      });
    } else {
      res.status(404).json({ mensaje: "usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error ao atualizar usuário",
      error,
    });
  }
};

export const deleteUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const usuarioDeleted = await Usuario.destroy({ where: { id } });
    if (usuarioDeleted) {
      res.status(201).json({
        message: "Usuário deletado com sucesso",
        usuario: usuarioDeleted,
      });
    } else {
      res.status(404).json({ mensaje: "usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error ao deletar usuário",
      error,
    });
  }
};
