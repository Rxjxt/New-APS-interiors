import { Request, Response } from "express";
import Product from "../models/Product";
import Category from "../models/Category";
import Quotation from "../models/Quotation";
import Visitor from "../models/Visitor";

export const getDashboardStats = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Dates
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const week = new Date();
    week.setDate(week.getDate() - 7);

    const month = new Date();
    month.setMonth(month.getMonth() - 1);

    const [
      totalProducts,
      activeProducts,
      featuredProducts,

      totalCategories,

      totalQuotations,
      newQuotations,
      contactedQuotations,
      quotedQuotations,
      wonQuotations,
      lostQuotations,

      totalVisitors,
      visitorsToday,
      visitorsThisWeek,
      visitorsThisMonth,

      latestProducts,
      latestQuotations,
    ] = await Promise.all([
      Product.countDocuments(),
      Product.countDocuments({ isActive: true }),
      Product.countDocuments({ featured: true }),

      Category.countDocuments(),

      Quotation.countDocuments(),
      Quotation.countDocuments({ status: "New" }),
      Quotation.countDocuments({ status: "Contacted" }),
      Quotation.countDocuments({ status: "Quoted" }),
      Quotation.countDocuments({ status: "Won" }),
      Quotation.countDocuments({ status: "Lost" }),

      Visitor.countDocuments(),

      Visitor.countDocuments({
        visitedAt: { $gte: today },
      }),

      Visitor.countDocuments({
        visitedAt: { $gte: week },
      }),

      Visitor.countDocuments({
        visitedAt: { $gte: month },
      }),

      Product.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .populate("category"),

      Quotation.find()
        .sort({ createdAt: -1 })
        .limit(5),
    ]);

    res.status(200).json({
      success: true,

      stats: {
        totalProducts,
        activeProducts,
        featuredProducts,

        totalCategories,

        totalQuotations,
        newQuotations,
        contactedQuotations,
        quotedQuotations,
        wonQuotations,
        lostQuotations,

        totalVisitors,
        visitorsToday,
        visitorsThisWeek,
        visitorsThisMonth,
      },

      latestProducts,
      latestQuotations,
    });
  } catch (error) {
    console.error("Dashboard Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};