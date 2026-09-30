import { Request, Response } from "express";
import { getOrderById } from "../services/order.service";

export function getOrder(req: Request, res: Response) {
  const id = Number(req.params.id);

  const order = getOrderById(id);

  if (!order) {
    return res.status(404).json({
      message: "Order not found"
    });
  }

  return res.json(order);
}