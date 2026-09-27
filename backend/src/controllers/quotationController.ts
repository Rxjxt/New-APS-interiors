import { Request, Response } from "express";
import mongoose from "mongoose";
import Quotation from "../models/Quotation";
import Product from "../models/Product";
import sendEmail from "../utils/sendEmail";
import OTP from "../models/OTP";
import ExcelJS from "exceljs";
import generateQuotationPDF from "../utils/generateQuotationPDF";
import { prepareQuotationService } from "../services/quotation.service";

// ============================
// Create Quotation
// ============================
export const createQuotation = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      companyName,
      contactPerson,
      email,
      phone,
      products,
      projectLocation,
      projectType,
      quantity,
      requirements,
    } = req.body;

    // Required Fields
    if (
      !companyName ||
      !contactPerson ||
      !email ||
      !phone
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }
// Check if email is verified
const verifiedOTP = await OTP.findOne({
  email,
  verified: true,
});

if (!verifiedOTP) {
  return res.status(403).json({
    success: false,
    message:
      "Email is not verified. Please verify your email first.",
  });
}
    // Validate Products
    if (
      Array.isArray(products) &&
      products.length > 0
    ) {
      const existingProducts =
        await Product.find({
          _id: { $in: products },
        });

      if (
        existingProducts.length !==
        products.length
      ) {
        return res.status(404).json({
          success: false,
          message:
            "One or more products not found",
        });
      }
    }
// Generate Quotation Number
const count = await Quotation.countDocuments();

const quotationNumber = `APS-${new Date().getFullYear()}-${String(
  count + 1
).padStart(6, "0")}`;
    const quotation = await Quotation.create({
  quotationNumber,

  companyName,
  contactPerson,
  email,
  phone,

  products: Array.isArray(products)
    ? products
    : [],

  projectLocation,
  projectType,
  quantity: quantity || 1,
  requirements,
});
      await sendEmail({
  to: process.env.ADMIN_EMAIL!,
  subject: "📩 New Quotation Request - NEW APS Interiors",
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto; border:1px solid #e5e5e5; border-radius:10px; overflow:hidden;">
      
      <div style="background:#111827;padding:20px;text-align:center;">
        <h1 style="color:white;margin:0;">
          NEW APS Interiors
        </h1>
      </div>

      <div style="padding:30px;">

        <h2 style="color:#2563eb;">
          📩 New Quotation Request
        </h2>

        <p>
          A customer has submitted a new quotation request.
        </p>

        <table style="width:100%;border-collapse:collapse;margin-top:20px;">
          <tr>
            <td style="padding:10px;font-weight:bold;">Company</td>
            <td>${companyName}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Contact Person</td>
            <td>${contactPerson}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Email</td>
            <td>${email}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Phone</td>
            <td>${phone}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Project Type</td>
            <td>${projectType}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Location</td>
            <td>${projectLocation}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Quantity</td>
            <td>${quantity}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Requirements</td>
            <td>${requirements}</td>
          </tr>

        </table>

        <br>

        <p>
          Please login to the Admin Dashboard to review and manage this quotation.
        </p>

      </div>

      <div style="background:#f3f4f6;padding:15px;text-align:center;color:#6b7280;font-size:13px;">
        © NEW APS Interiors
      </div>

    </div>
  `,
});
await OTP.deleteMany({
  email,
});

    return res.status(201).json({
      success: true,
      message:
        "Quotation request submitted successfully",
      quotation,
    });
  } catch (error) {
    console.error(
      "Create Quotation Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Something went wrong. Please try again later.",
    });
  }
};

// ============================
// Get All Quotations
// ============================
export const getQuotations = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      search,
      status,
      page,
      limit,
      sort,
    } = req.query;

    const pageNumber =
      Number(page) || 1;

    const limitNumber =
      Number(limit) || 10;

    const skip =
      (pageNumber - 1) *
      limitNumber;

    const filter: any = {};

    const sortOption: any = {};

    // Search
    if (search) {
      filter.$or = [
        {
          companyName: {
            $regex: search,
            $options: "i",
          },
        },
        {
          contactPerson: {
            $regex: search,
            $options: "i",
          },
        },
        {
          email: {
            $regex: search,
            $options: "i",
          },
        },
        {
          phone: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    // Status Filter
    if (status) {
      filter.status = status;
    }

    // Sorting
    sortOption.createdAt =
      sort === "oldest"
        ? 1
        : -1;

    const totalQuotations =
      await Quotation.countDocuments(
        filter
      );

    const quotations =
      await Quotation.find(filter)
        .populate("products")
        .sort(sortOption)
        .skip(skip)
        .limit(limitNumber);

    return res.status(200).json({
      success: true,
      totalQuotations,
      currentPage: pageNumber,
      totalPages: Math.ceil(
        totalQuotations /
          limitNumber
      ),
      quotations,
    });
  } catch (error) {
    console.error(
      "Get Quotations Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Something went wrong. Please try again later.",
    });
  }
};
// ============================
// Export Quotations to Excel
// ============================
export const exportQuotations = async (
  req: Request,
  res: Response
) => {
  try {
    const quotations = await Quotation.find()
      .populate("products")
      .sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();

    const worksheet =
      workbook.addWorksheet("Quotations");

    worksheet.columns = [
      {
        header: "Company",
        key: "company",
        width: 25,
      },
      {
        header: "Contact Person",
        key: "contact",
        width: 25,
      },
      {
        header: "Email",
        key: "email",
        width: 30,
      },
      {
        header: "Phone",
        key: "phone",
        width: 20,
      },
      {
        header: "Project Type",
        key: "project",
        width: 25,
      },
      {
        header: "Location",
        key: "location",
        width: 25,
      },
      {
        header: "Status",
        key: "status",
        width: 18,
      },
      {
        header: "Created At",
        key: "date",
        width: 25,
      },
    ];

    quotations.forEach((q: any) => {
      worksheet.addRow({
        company: q.companyName,
        contact: q.contactPerson,
        email: q.email,
        phone: q.phone,
        project: q.projectType,
        location: q.projectLocation,
        status: q.status,
        date: q.createdAt.toLocaleString(),
      });
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.setHeader(
      "Content-Disposition",
      'attachment; filename="Quotations.xlsx"'
    );

    await workbook.xlsx.write(res);

    res.end();

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to export quotations",
    });

  }
};
// ============================
// Get Quotation By ID
// ============================
export const getQuotationById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id as string;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        success: false,
        message: "Invalid quotation ID",
      });
      return;
    }

    const quotation = await Quotation.findById(id).populate(
      "products"
    );
    if (
  quotation &&
  (!quotation.quotationItems ||
    quotation.quotationItems.length === 0)
) {
  quotation.quotationItems =
    quotation.products.map((product: any) => ({
      product: product.name,
      description:
        product.shortDescription || "",
      quantity: 1,
      unitPrice: 0,
      total: 0,
    })) as any;
}

    if (!quotation) {
      res.status(404).json({
        success: false,
        message: "Quotation not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      quotation,
    });
  } catch (error) {
    console.error(
      "Get Quotation Error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong. Please try again later.",
    });
  }
};
// ============================
// Download Quotation PDF
// ============================
export const downloadQuotationPDF = async (
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

    const quotation = await Quotation.findById(id)
      .populate("products")
      .populate({
  path: "quotationItems.product",
  select: "name price unit category",
});

    if (!quotation) {
      res.status(404).json({
        success: false,
        message: "Quotation not found",
      });
      return;
    }

    if (
      !quotation.quotationPrepared ||
      quotation.quotationItems.length === 0
    ) {
      res.status(400).json({
        success: false,
        message:
          "Please prepare and save the quotation before downloading the PDF.",
      });
      return;
    }
    console.log("===== DOWNLOAD CONTROLLER =====");
console.log("Quotation Number:", quotation.quotationNumber);
console.log("Prepared:", quotation.quotationPrepared);
console.log("Items:", quotation.quotationItems.length);
    console.log("BEFORE PDF");

generateQuotationPDF(quotation, res);

console.log("AFTER PDF");
  } catch (error) {
    console.error("PDF Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to generate PDF",
    });
  }
};
// ============================
// Update Quotation Status
// ============================
export const updateQuotationStatus = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params.id as string;
    const { status } = req.body;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid quotation ID",
      });
    }

    const validStatuses = [
      "New",
      "Contacted",
      "Quoted",
      "Won",
      "Lost",
    ];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid quotation status",
      });
    }

    const quotation = await Quotation.findById(id);

    if (!quotation) {
      return res.status(404).json({
        success: false,
        message: "Quotation not found",
      });
    }

    quotation.status = status;

    await quotation.save();

    return res.status(200).json({
      success: true,
      message:
        "Quotation status updated successfully",
      quotation,
    });
  } catch (error) {
    console.error(
      "Update Quotation Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Something went wrong. Please try again later.",
    });
  }
};

// ============================
// Delete Quotation
// ============================
export const deleteQuotation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id as string;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        success: false,
        message: "Invalid quotation ID",
      });
      return;
    }

    const quotation =
      await Quotation.findByIdAndDelete(id);

    if (!quotation) {
      res.status(404).json({
        success: false,
        message: "Quotation not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message:
        "Quotation deleted successfully",
    });
  } catch (error) {
    console.error(
      "Delete Quotation Error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong. Please try again later.",
    });
  }
};
// ============================
// Prepare Quotation
// ============================
export const prepareQuotation = async (
  req: Request,
  res: Response
) => {
  try {
   const quotation = await prepareQuotationService(
  req.params.id as string,
  req.body
);

    return res.status(200).json({
      success: true,
      message: "Quotation prepared successfully.",
      quotation,
    });
  } catch (error: any) {
    console.error("Prepare Quotation Error:", error);

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Failed to prepare quotation.",
    });
  }
};