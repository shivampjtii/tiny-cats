import express from "express";
import { askAiController } from "../controllers/ai.controller.ts";
const aiRouter = express.Router();

aiRouter.post("/ask", askAiController);


export default aiRouter;