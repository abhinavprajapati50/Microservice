import express from "express";
import orderRoutes from "./routes/order.route";

const app = express();

app.use(express.json());

app.use(orderRoutes);

const PORT = 4002;

app.listen(PORT, () => {
  console.log(`Order Service running on http://localhost:${PORT}`);
});