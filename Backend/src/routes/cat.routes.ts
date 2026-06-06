import express from "express";
import { createCatController, getAllCatsController, getSingleCatController, recommendCatsController, searchCatController } from "../controllers/cat.controllers.ts";

const catRouter = express.Router();

catRouter.post("/create", createCatController);
catRouter.get("/", getAllCatsController);
catRouter.get("/:id", getSingleCatController);
catRouter.get("/search/all", searchCatController);
catRouter.post("/recommend", recommendCatsController);


export default catRouter;