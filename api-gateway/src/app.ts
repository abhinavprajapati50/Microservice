import express, { Request, Response, NextFunction } from "express";
import gatewayRoutes from "./routes/gateway.routes";

const app = express();

app.use(express.json());

/*
 * Request logging middleware
 */
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;

    console.log(
      `${req.method} ${req.originalUrl} ` +
      `status=${res.statusCode} ` +
      `duration=${duration}ms`
    );
  });

  next();
});

app.use(gatewayRoutes);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`API Gateway running on http://localhost:${PORT}`);
});