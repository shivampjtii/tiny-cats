import express from "express";
import { testMcpController } from "../controllers/test-mcp.controller.ts";

const testRouter = express.Router();

testRouter.get("/test-mcp", testMcpController);



export default testRouter;