import express, { type Request, type Response } from "express";
import cors from "cors";
import catRouter from "./routes/cat.routes.ts";

const app = express();

app.use(express.json());
app.use(cors());


app.use("/api/cats", catRouter);

export default app;