import { Request, Response } from "express";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

import Quotation from "../models/Quotation";
import generateQuotationBuffer from "../utils/generateQuotationBuffer";

export const sendQuotation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id as string;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        success: false,
        message: "Invalid quotation ID",
      });
      return;
    }

    const quotation = await Quotation.findById(id).populate({
      path: "quotationItems.product",
      select: "name price",
    });

    if (!quotation) {
      res.status(404).json({
        success: false,
        message: "Quotation not found",
      });
      return;
    }

    if (!quotation.quotationPrepared) {
      res.status(400).json({
        success: false,
        message: "Please prepare the quotation first.",
      });
      return;
    }

    const pdfBuffer = await generateQuotationBuffer(quotation);

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"NEW APS INTERIORS" <${process.env.EMAIL_USER}>`,
      to: quotation.email,
      subject: `Quotation ${quotation.quotationNumber} | NEW APS INTERIORS`,
      html: `
        <div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#333">
          <h2 style="color:#1E3A8A;">
            Hello ${quotation.contactPerson},
          </h2>

          <p>
            Thank you for your interest in
            <strong>NEW APS INTERIORS</strong>.
          </p>

          <p>
            Please find your quotation attached with this email.
          </p>

          <p>
            If you have any questions or need any modifications,
            feel free to reply to this email.
          </p>

          <br>

          <p>Regards,</p>

          <strong>NEW APS INTERIORS</strong><br/>
          Office Interior | Modular Furniture | Turnkey Solutions
        </div>
      `,
      attachments: [
        {
          filename: `Quotation-${quotation.quotationNumber}.pdf`,
          content: pdfBuffer,
        },
      ],
    });

    quotation.status = "Quoted";
    quotation.sentAt = new Date();

    await quotation.save();

    res.status(200).json({
      success: true,
      message: "Quotation sent successfully.",
    });
  } catch (error) {
    console.error("SEND QUOTATION ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send quotation.",
    });
  }
};