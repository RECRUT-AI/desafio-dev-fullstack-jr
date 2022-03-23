import express from "express";
import cors from "cors";
import { petRoutes } from "./routes/pets.routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/pets", petRoutes);

export { app };
