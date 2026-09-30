import { Router, Request, Response } from "express";
import { forwardRequest } from "../services/proxy.service";

const router = Router();

router.get("/api/users/:id", async (req: Request, res: Response) => {
  const url = `http://localhost:4001/users/${req.params.id}`;

  try {
    const result = await forwardRequest(url);

    return res.status(result.status).json(result.data);
  } catch (error: any) {
    if (error.message === "SERVICE_TIMEOUT") {
      return res.status(503).json({
        message: "User Service timed out"
      });
    }

    return res.status(503).json({
      message: "User Service unavailable"
    });
  }
});

router.get("/api/orders/:id", async (req: Request, res: Response) => {
  const url = `http://localhost:4002/orders/${req.params.id}`;

  try {
    const result = await forwardRequest(url);

    return res.status(result.status).json(result.data);
  } catch (error: any) {
    if (error.message === "SERVICE_TIMEOUT") {
      return res.status(503).json({
        message: "Order Service timed out"
      });
    }

    return res.status(503).json({
      message: "Order Service unavailable"
    });
  }
});

export default router;