import express from "express";
import authRouter from "./auth.route"
import doctorRouter from "./doctor.route"

const router = express.Router();

router.use("/api/auth", authRouter)
router.use("/api/doctor", doctorRouter)

export default router