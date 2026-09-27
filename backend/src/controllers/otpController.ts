import { Request, Response } from "express";
import bcrypt from "bcrypt";

import OTP from "../models/OTP";
import sendEmail from "../utils/sendEmail";

// ============================
// Send OTP
// ============================
export const sendOTP = async (
  req: Request,
  res: Response
) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // Generate random 6-digit OTP
    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    // Hash OTP
    const hashedOTP = await bcrypt.hash(otp, 10);

    // Remove previous OTP
    await OTP.deleteMany({ email });

    // Save new OTP
    await OTP.create({
      email,
      otp: hashedOTP,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
      attempts: 0,
      verified: false,
    });

    // Send Email
    await sendEmail({
      to: email,
      subject: "NEW APS Interiors - Email Verification OTP",
      html: `
        <div style="font-family:Arial;padding:30px">
          <h2>Email Verification</h2>

          <p>Your OTP is:</p>

          <h1 style="letter-spacing:6px;color:#2563eb">
            ${otp}
          </h1>

          <p>
            This OTP is valid for
            <b>5 minutes</b>.
          </p>

          <p>
            Do not share this OTP with anyone.
          </p>

          <br/>

          <p>
            Team <b>NEW APS Interiors</b>
          </p>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to send OTP",
    });
  }
};

// ============================
// Verify OTP
// ============================
export const verifyOTP = async (
  req: Request,
  res: Response
) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: "Email and OTP are required",
      });
    }

    const otpRecord = await OTP.findOne({ email });

    if (!otpRecord) {
      return res.status(404).json({
        success: false,
        message: "OTP not found. Please request a new OTP.",
      });
    }

    // Check expiry
    if (otpRecord.expiresAt < new Date()) {
      await OTP.deleteOne({ _id: otpRecord._id });

      return res.status(400).json({
        success: false,
        message: "OTP has expired.",
      });
    }

    // Check max attempts
    if (otpRecord.attempts >= 5) {
      await OTP.deleteOne({ _id: otpRecord._id });

      return res.status(400).json({
        success: false,
        message: "Maximum verification attempts exceeded.",
      });
    }

    // Compare OTP
    const isValid = await bcrypt.compare(
      otp,
      otpRecord.otp
    );

    if (!isValid) {
      otpRecord.attempts += 1;
      await otpRecord.save();

      return res.status(400).json({
        success: false,
        message: "Invalid OTP.",
      });
    }

    // Mark verified
    otpRecord.verified = true;
    await otpRecord.save();

    // (Optional) Delete OTP after successful verification
    // await OTP.deleteOne({ _id: otpRecord._id });

    return res.status(200).json({
      success: true,
      message: "Email verified successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};