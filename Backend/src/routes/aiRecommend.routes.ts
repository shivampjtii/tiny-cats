import express from "express";
import { aiRecommendController } from "../controllers/aiRecommend.controller.ts";
const aiRecommendRouter = express.Router();

aiRecommendRouter.post("/recommendByAi", aiRecommendController);


export default aiRecommendRouter;