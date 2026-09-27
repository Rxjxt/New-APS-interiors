import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/User";
import generateToken from "../utils/generateToken";
import { AuthRequest } from "../middleware/authMiddleware";
import sendEmail from "../utils/sendEmail";

// ======================
// Register User
// ======================
export const register = async (req: Request, res: Response) => {
  try {
    const { fullName, email, password, role } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      role,
    });

    const token = generateToken(user._id.toString());

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ======================
// Login User
// ======================
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isPasswordMatched = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordMatched) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = generateToken(user._id.toString());

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// ======================
// Get Logged-in User Profile
// ======================
export const getProfile = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const user = await User.findById(req.user?.id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const testEmail = async (
  req: Request,
  res: Response
) => {
  try {
    await sendEmail({
      to: process.env.ADMIN_EMAIL!,
      subject: "🎉 NEW APS Email Test",
      html: `
        <div style="font-family:Arial;padding:20px">
          <h2>✅ Email Working Successfully</h2>
          <p>This is a test email from <b>NEW APS Interiors</b>.</p>
          <p>If you received this email, your SMTP configuration is correct.</p>
        </div>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error: any) {
  console.error("EMAIL ERROR:");
  console.error(error);

  return res.status(500).json({
    success: false,
    message: error.message,
    error,
  });
}
};