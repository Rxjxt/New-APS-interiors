import express from "express";

import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController";

import {
  protect,
  admin,
} from "../middleware/authMiddleware";

import upload from "../middleware/upload";

const router = express.Router();

// =====================================
// Public Routes
// =====================================

// Get All Categories
router.get("/", getCategories);

// Get Category By ID
router.get("/:id", getCategoryById);

// =====================================
// Admin Routes
// =====================================

// Create Category
router.post(
  "/",
  protect,
  admin,
  upload.single("image"),
  createCategory
);

// Update Category
router.put(
  "/:id",
  protect,
  admin,
  upload.single("image"),
  updateCategory
);

// Delete Category
router.delete(
  "/:id",
  protect,
  admin,
  deleteCategory
);

export default router;