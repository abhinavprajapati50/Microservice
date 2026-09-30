import { Router } from "express";
import { getOrder } from "../controllers/order.controller";

const router = Router();

router.get("/orders/:id", getOrder);

export default router;