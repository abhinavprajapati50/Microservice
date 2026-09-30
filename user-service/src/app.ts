import express from "express";
import userRoutes from "./routes/user.route";

const app = express();

app.use(express.json());

app.use(userRoutes);

const PORT = 4001;

app.listen(PORT, () => {
  console.log(`User Service running on http://localhost:${PORT}`);
});