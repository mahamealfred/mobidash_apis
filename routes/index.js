import express from "express";
import logsRoutes from "./logs.routes.js"


const router=express.Router();

router.use("/api/agency-banking-management-sys/v1/logs",logsRoutes);

export default router