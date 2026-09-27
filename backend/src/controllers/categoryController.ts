import { Request, Response } from "express";
import mongoose from "mongoose";

import Category from "../models/Category";

import uploadToCloudinary from "../utils/cloudinaryUpload";

// =========================================
// CREATE CATEGORY
// =========================================

export const createCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      name,
      description,
    } = req.body;

    let { isActive } = req.body;

    if (!name) {
      res.status(400).json({
        success: false,
        message: "Category name is required.",
      });
      return;
    }

    const existingCategory =
      await Category.findOne({
        name: name.trim(),
      });

    if (existingCategory) {
      res.status(400).json({
        success: false,
        message: "Category already exists.",
      });
      return;
    }

    let image = "";

    if (req.file) {
      image = await uploadToCloudinary(
        req.file.buffer
      );
    }

    isActive =
      isActive === undefined
        ? true
        : isActive === true ||
          isActive === "true";

    const category =
      await Category.create({
        name: name.trim(),
        description: description || "",
        image,
        isActive,
      });

    res.status(201).json({
      success: true,
      message:
        "Category created successfully.",
      category,
    });
  } catch (error) {
    console.error(
      "Create Category Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// =========================================
// GET ALL CATEGORIES
// =========================================

export const getCategories = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const categories =
      await Category.find().sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      count: categories.length,
      categories,
    });
  } catch (error) {
    console.error(
      "Get Categories Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// =========================================
// GET CATEGORY BY ID
// =========================================

export const getCategoryById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = String(req.params.id);

    if (
      !mongoose.Types.ObjectId.isValid(id)
    ) {
      res.status(400).json({
        success: false,
        message: "Invalid Category ID",
      });

      return;
    }

    const category =
      await Category.findById(id);

    if (!category) {
      res.status(404).json({
        success: false,
        message: "Category not found.",
      });

      return;
    }

    res.status(200).json({
      success: true,
      category,
    });
  } catch (error) {
    console.error(
      "Get Category Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
// =========================================
// UPDATE CATEGORY
// =========================================

export const updateCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = String(req.params.id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        success: false,
        message: "Invalid Category ID",
      });
      return;
    }

    const category = await Category.findById(id);

    if (!category) {
      res.status(404).json({
        success: false,
        message: "Category not found.",
      });
      return;
    }

    const {
      name,
      description,
    } = req.body;

    let { isActive } = req.body;

    if (name) {
      category.name = name.trim();
    }

    if (description !== undefined) {
      category.description = description;
    }

    if (req.file) {
      const imageUrl =
        await uploadToCloudinary(
          req.file.buffer
        );

      category.image = imageUrl;
    }

    if (isActive !== undefined) {
      category.isActive =
        isActive === true ||
        isActive === "true";
    }

    await category.save();

    res.status(200).json({
      success: true,
      message:
        "Category updated successfully.",
      category,
    });
  } catch (error) {
    console.error(
      "Update Category Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// =========================================
// DELETE CATEGORY
// =========================================

export const deleteCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = String(req.params.id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        success: false,
        message: "Invalid Category ID",
      });
      return;
    }

    const category =
      await Category.findById(id);

    if (!category) {
      res.status(404).json({
        success: false,
        message: "Category not found.",
      });
      return;
    }

    await category.deleteOne();

    res.status(200).json({
      success: true,
      message:
        "Category deleted successfully.",
    });
  } catch (error) {
    console.error(
      "Delete Category Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};