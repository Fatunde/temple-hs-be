import express from "express"
import DoctorController from "../controller/doctor.controller";
import Auth from "../middleware/auth.middleware"
const router = express.Router();

const { authenticate } = Auth
const { read } = DoctorController

router.get("/", authenticate, read)

export default router