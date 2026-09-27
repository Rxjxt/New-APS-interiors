import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
  id: string;
}

export interface AuthRequest extends Request {
  user?: JwtPayload;
}
// ==========================
// Admin Middleware
// ==========================
export const admin = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  // For now, allow any authenticated user.
  // Later we'll add role-based authorization.
  next();
};
// ==========================
// Protect Middleware
// ==========================
export const protect = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  console.log("=================================");
  console.log("Authorization Header:");
  console.log(req.headers.authorization);

  let token = "";

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  console.log("Extracted Token:");
  console.log(token);

  console.log("JWT Secret:");
  console.log(process.env.JWT_SECRET);

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    console.log("Decoded:");
    console.log(decoded);

    req.user = decoded;

    next();
  } catch (err) {
    console.log(err);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};