import express from "express";
import { allGTbankTransactions, createdAccountLogs, deposits } from "../controllers/logsController.js";



const router=express.Router();

router.get("/deposit",deposits);
router.get("/created-acccounts",createdAccountLogs)
router.get("/all-transactions",allGTbankTransactions)

export default router