import { Request, Response } from "express";
import mongoose from "mongoose";
import Product from "../models/Product";
import Category from "../models/Category";
import uploadToCloudinary from "../utils/cloudinaryUpload";

// =========================================
// CREATE PRODUCT
// =========================================

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
  name,
  category,
  shortDescription,
  description,
  specifications,
  brochure,
  price,
  gst,
  unit,
} = req.body;

    let { featured, isActive, features } = req.body;

    // ==========================
    // Required Fields
    // ==========================
    if (
      !name ||
      !category ||
      !shortDescription ||
      !description
    ) {
      res.status(400).json({
        success: false,
        message:
          "Name, Category, Short Description and Description are required.",
      });
      return;
    }

    // ==========================
    // Validate Category ID
    // ==========================
    if (!mongoose.Types.ObjectId.isValid(category)) {
      res.status(400).json({
        success: false,
        message: "Invalid Category ID",
        received: category,
      });
      return;
    }

    // ==========================
    // Check Category Exists
    // ==========================
    const categoryExists = await Category.findById(category);

    if (!categoryExists) {
      res.status(404).json({
        success: false,
        message: "Category not found.",
      });
      return;
    }

    // ==========================
    // Duplicate Product Name
    // ==========================
    const existingProduct = await Product.findOne({
      name: name.trim(),
    });

    if (existingProduct) {
      res.status(400).json({
        success: false,
        message: "Product already exists.",
      });
      return;
    }

    // ==========================
    // Generate Slug
    // ==========================
    const slug = name
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");

    // ==========================
    // Parse Features
    // ==========================
    let parsedFeatures: string[] = [];

    if (features) {
      if (Array.isArray(features)) {
        parsedFeatures = features;
      } else {
        try {
          parsedFeatures = JSON.parse(features);
        } catch {
          parsedFeatures = [features];
        }
      }
    }

    // ==========================
    // Upload Images
    // ==========================
    const imageUrls: string[] = [];

const files = req.files as {
  [fieldname: string]: Express.Multer.File[];
};

if (files?.images) {
  for (const file of files.images) {
    const imageUrl = await uploadToCloudinary(file.buffer);
    imageUrls.push(imageUrl);
  }
}

    featured = featured === true || featured === "true";

    isActive =
      isActive === undefined
        ? true
        : isActive === true || isActive === "true";

    const product = await Product.create({
  name: name.trim(),
  slug,
  category,
  shortDescription,
  description,
  specifications: specifications || "",
  brochure: brochure || "",
  features: parsedFeatures,
  images: imageUrls,

  price: Number(price) || 0,
  gst: Number(gst) || 18,
  unit: unit || "Nos",

  featured,
  isActive,
});

    res.status(201).json({
      success: true,
      message: "Product created successfully.",
      product,
    });
  } catch (error) {
    console.error("Create Product Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// =========================================
// GET ALL PRODUCTS
// =========================================

export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Query Parameters
    const {
      search,
      category,
      featured,
      isActive,
      page,
      limit,
      sort,
    } = req.query;

    // Pagination
    const pageNumber = Number(page) || 1;
    const limitNumber = Number(limit) || 10;
    const skip = (pageNumber - 1) * limitNumber;

    // Filter Object
    const filter: any = {};

    // Sorting Object
    const sortOption: any = {};

    // Search by Name
    if (search) {
      filter.name = {
        $regex: search,
        $options: "i",
      };
    }

    // Filter by Category
    if (category) {
      filter.category = category;
    }

    // Filter by Featured
    if (featured) {
      filter.featured = featured === "true";
    }

    // Filter by Active Status
    if (isActive) {
      filter.isActive = isActive === "true";
    }

    // Sorting
    if (sort === "newest") {
      sortOption.createdAt = -1;
    } else if (sort === "oldest") {
      sortOption.createdAt = 1;
    } else if (sort === "name_asc") {
      sortOption.name = 1;
    } else if (sort === "name_desc") {
      sortOption.name = -1;
    } else {
      sortOption.createdAt = -1;
    }

    // Total Products
    const totalProducts = await Product.countDocuments(filter);

    const totalPages = Math.ceil(totalProducts / limitNumber);

    // Fetch Products
    const products = await Product.find(filter)
      .populate("category", "name description image")
      .sort(sortOption)
      .skip(skip)
      .limit(limitNumber);

    res.status(200).json({
      success: true,
      page: pageNumber,
      limit: limitNumber,
      totalProducts,
      totalPages,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error("Get Products Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// =========================================
// GET PRODUCT BY SLUG
// =========================================

export const getProductBySlug = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { slug } = req.params;

    const product = await Product.findOne({
      slug,
      isActive: true,
    }).populate("category", "name description image");

    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found.",
      });
      return;
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("Get Product By Slug Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// =========================================
// GET PRODUCT BY ID
// =========================================

export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product = await Product.findById(req.params.id)
      .populate("category", "name description image");

    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found.",
      });
      return;
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("Get Product By ID Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// =========================================
// UPDATE PRODUCT
// =========================================

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found.",
      });
      return;
    }

    const {
  name,
  category,
  shortDescription,
  description,
  specifications,
  brochure,
  price,
  gst,
  unit,
} = req.body;

    let { featured, isActive, features } = req.body;

    // ==========================
    // Validate Category
    // ==========================
    if (category) {
      if (!mongoose.Types.ObjectId.isValid(category)) {
        res.status(400).json({
          success: false,
          message: "Invalid Category ID",
          received: category,
        });
        return;
      }

      const categoryExists = await Category.findById(category);

      if (!categoryExists) {
        res.status(404).json({
          success: false,
          message: "Category not found.",
        });
        return;
      }

      product.category = category;
    }

    // ==========================
    // Update Name & Slug
    // ==========================
    if (name) {
      product.name = name.trim();

      product.slug = name
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "");
    }

    if (shortDescription !== undefined)
      product.shortDescription = shortDescription;

    if (description !== undefined)
      product.description = description;

    if (specifications !== undefined)
      product.specifications = specifications;

    if (brochure !== undefined)
      product.brochure = brochure;
    if (price !== undefined)
  product.price = Number(price);

if (gst !== undefined)
  product.gst = Number(gst);

if (unit !== undefined)
  product.unit = unit;

    // ==========================
    // Features
    // ==========================
    if (features !== undefined) {
      if (Array.isArray(features)) {
        product.features = features;
      } else {
        try {
          product.features = JSON.parse(features);
        } catch {
          product.features = [features];
        }
      }
    }

    // ==========================
    // Upload Images
    // ==========================
    if (
      req.files &&
      Array.isArray(req.files) &&
      req.files.length > 0
    ) {
      const imageUrls: string[] = [];

      for (const file of req.files) {
        const imageUrl = await uploadToCloudinary(file.buffer);
        imageUrls.push(imageUrl);
      }

      product.images = imageUrls;
    }

    if (featured !== undefined) {
      product.featured =
        featured === true || featured === "true";
    }

    if (isActive !== undefined) {
      product.isActive =
        isActive === true || isActive === "true";
    }

    await product.save();

    res.status(200).json({
      success: true,
      message: "Product updated successfully.",
      product,
    });
  } catch (error) {
    console.error("Update Product Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// =========================================
// DELETE PRODUCT
// =========================================

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const productId = req.params.id as string;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      res.status(400).json({
        success: false,
        message: "Invalid Product ID",
      });
      return;
    }

    const product = await Product.findById(productId);

    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found.",
      });
      return;
    }

    await product.deleteOne();

    res.status(200).json({
      success: true,
      message: "Product deleted successfully.",
    });
  } catch (error) {
    console.error("Delete Product Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};