import express from "express";
import {
  register,
  login,
  getProfile,
  testEmail,
} from "../controllers/authController";

import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/profile", getProfile);
router.get("/test-email", testEmail);

export default router;