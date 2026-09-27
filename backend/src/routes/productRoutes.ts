import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  getProductBySlug,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";

import { protect, admin } from "../middleware/authMiddleware";
import upload from "../middleware/upload";

const router = express.Router();

// =======================
// Public Routes
// =======================

// Get all products
router.get("/", getProducts);

// Get single product by slug
router.get("/slug/:slug", getProductBySlug);

// Get single product by ID
router.get("/:id", getProductById);

// =======================
// Admin Routes
// =======================

// Create Product
router.post(
  "/",
  protect,
  admin,
  upload.fields([
    { name: "images", maxCount: 10 },
    { name: "brochure", maxCount: 1 },
  ]),
  createProduct
);

// Update Product
router.put(
  "/:id",
  protect,
  admin,
  upload.fields([
    { name: "images", maxCount: 10 },
    { name: "brochure", maxCount: 1 },
  ]),
  updateProduct
);

// Delete Product
router.delete("/:id", protect, admin, deleteProduct);

export default router;