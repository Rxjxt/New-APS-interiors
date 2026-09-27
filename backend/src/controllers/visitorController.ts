import { Request, Response } from "express";
import Visitor from "../models/Visitor";

// ==============================
// Track Visitor
// ==============================

export const trackVisitor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const ip =
      (req.headers["x-forwarded-for"] as string)
        ?.split(",")[0]
        ?.trim() ||
      req.socket.remoteAddress ||
      "unknown";

    const userAgent =
      req.headers["user-agent"] || "";

    // Today Start
    const startOfDay = new Date();

    startOfDay.setHours(0, 0, 0, 0);

    // Tomorrow Start
    const endOfDay = new Date();

    endOfDay.setHours(23, 59, 59, 999);

    // Already visited today?
    const existingVisitor =
      await Visitor.findOne({
        ip,
        visitedAt: {
          $gte: startOfDay,
          $lte: endOfDay,
        },
      });

    if (!existingVisitor) {
      await Visitor.create({
        ip,
        userAgent,
      });
    }

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(
      "Track Visitor Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};