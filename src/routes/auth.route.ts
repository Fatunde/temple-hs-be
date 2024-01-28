import express from "express";
import AuthController from "../controller/auth.controller";
import Auth from "../middleware/auth.middleware"
const router = express.Router();

const { email_existed, register_required, login_required, authenticate } = Auth
const { register, login, token } = AuthController

router.post("/register", register_required, email_existed, register)
router.post("/login", login_required, login)
router.get("/token", authenticate, token)

export default router