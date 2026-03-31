import { Router } from "express";
import { login, register, user } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user", authMiddleware, user)

export default router;