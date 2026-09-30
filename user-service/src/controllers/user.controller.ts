import { Request, Response } from "express";
import { getUserById } from "../services/user.service";

export function getUser(req: Request, res: Response) {
  const id = Number(req.params.id);

  const user = getUserById(id);

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  return res.json(user);
}