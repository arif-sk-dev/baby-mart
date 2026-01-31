import express from "express";
import { getUserProfile, loginUser, registerUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/profile", getUserProfile);

export default router;
