import express, { type Request, type Response } from "express";
import cors from "cors";
import catRouter from "./routes/cat.routes.ts";
import aiRouter from "./routes/ai.routes.ts";
import aiRecommendRouter from "./routes/aiRecommend.routes.ts";
import testRouter from "./routes/test-mcp.routes.ts";

const app = express();

app.use(express.json());
app.use(cors());


app.use("/api/cats", catRouter);
app.use("/api/ai", aiRouter);
app.use("/api/aiRecommend", aiRecommendRouter);
app.use("/api/mcp", testRouter);

export default app;