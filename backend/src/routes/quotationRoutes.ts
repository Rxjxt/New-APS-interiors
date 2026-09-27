import express from "express";
import {
  createQuotation,
  getQuotations,
  getQuotationById,
  updateQuotationStatus,
  deleteQuotation,
  exportQuotations,
  downloadQuotationPDF,
  prepareQuotation,
} from "../controllers/quotationController";

import { sendQuotation } from "../controllers/sendQuotationController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

// ===========================
// Public Route
// ===========================
router.post("/", createQuotation);

// ===========================
// Admin Routes
// ===========================

router.get("/", protect, getQuotations);

router.get(
  "/export",
  protect,
  exportQuotations
);

router.get(
  "/:id/pdf",
  protect,
  downloadQuotationPDF
);

router.get(
  "/:id",
  protect,
  getQuotationById
);

router.put(
  "/:id/status",
  protect,
  updateQuotationStatus
);

router.put(
  "/:id/prepare",
  protect,
  prepareQuotation
);

// ✅ SEND QUOTATION EMAIL
router.put(
  "/:id/send",
  protect,
  sendQuotation
);

router.delete(
  "/:id",
  protect,
  deleteQuotation
);

export default router;