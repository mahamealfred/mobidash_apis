import express from "express";
import { createdAccountLogs, deposits } from "../controllers/logsController.js";



const router=express.Router();

router.get("/deposit",deposits);
router.get("/created-acccounts",createdAccountLogs)

export default router