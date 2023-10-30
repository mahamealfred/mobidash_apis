import express from "express";
import { deposits } from "../controllers/logsController.js";



const router=express.Router();

router.get("/deposit",deposits);

export default router