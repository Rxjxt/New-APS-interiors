import express from "express";
import { trackVisitor } from "../controllers/visitorController";

const router = express.Router();

// Public
router.post("/track", trackVisitor);

export default router;