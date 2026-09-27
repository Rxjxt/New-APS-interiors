import PDFDocument from "pdfkit";

const PRIMARY = "#1E3A8A";
const DARK = "#1F2937";
const BORDER = "#E5E7EB";

const formatCurrency = (value: number = 0) =>
  value.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const buildQuotationPDF = (
  doc: PDFKit.PDFDocument,
  quotation: any
) => {
  // ==================================================
  // COMPANY HEADER
  // ==================================================

  doc.rect(0, 0, 595, 95).fill(PRIMARY);

  doc
    .fillColor("white")
    .fontSize(26)
    .font("Helvetica-Bold")
    .text("NEW APS INTERIORS", 40, 28, {
      align: "center",
    });

  doc
    .fontSize(11)
    .font("Helvetica")
    .text(
      "Office Interior • Modular Furniture • Turnkey Solutions",
      {
        align: "center",
      }
    );

  doc.moveDown(0.4);

  doc.text("www.newapsinteriors.com", {
    align: "center",
  });

  doc.moveDown(3);

  doc
    .fillColor(DARK)
    .font("Helvetica-Bold")
    .fontSize(22)
    .text("QUOTATION");

  doc.moveDown(0.5);

  doc
    .moveTo(40, 140)
    .lineTo(555, 140)
    .strokeColor(BORDER)
    .stroke();

  // ==================================================
  // QUOTATION DETAILS
  // ==================================================

  const leftX = 40;
  const rightX = 340;

  let y = 160;

  doc
    .font("Helvetica-Bold")
    .fontSize(12)
    .fillColor(PRIMARY)
    .text("Quotation Details", leftX, y);

  doc
    .font("Helvetica")
    .fontSize(11)
    .fillColor(DARK);

  y += 25;

  doc.text(
    `Quotation No : ${quotation.quotationNumber || "-"}`,
    leftX,
    y
  );

  doc.text(
    `Date : ${new Date(
      quotation.createdAt
    ).toLocaleDateString("en-IN")}`,
    leftX,
    y + 18
  );

  doc.text(
    `Validity : ${quotation.validity || "30 Days"}`,
    leftX,
    y + 36
  );

  // ==================================================
  // CUSTOMER DETAILS
  // ==================================================

  doc
    .font("Helvetica-Bold")
    .fontSize(12)
    .fillColor(PRIMARY)
    .text("Bill To", rightX, 160);

  doc
    .font("Helvetica")
    .fontSize(11)
    .fillColor(DARK);

  doc.text(quotation.companyName || "-", rightX, 185);
  doc.text(quotation.contactPerson || "-", rightX, 203);
  doc.text(quotation.email || "-", rightX, 221);
  doc.text(quotation.phone || "-", rightX, 239);

  doc
    .moveTo(40, 270)
    .lineTo(555, 270)
    .strokeColor(BORDER)
    .stroke();

  // ==================================================
  // PRODUCTS TABLE
  // ==================================================

  let tableY = 290;

  const startX = 40;

  doc
    .rect(startX, tableY, 515, 28)
    .fill(PRIMARY);

  doc
    .fillColor("white")
    .font("Helvetica-Bold")
    .fontSize(10);

  doc.text("Product", 50, tableY + 9);
  doc.text("Description", 180, tableY + 9);
  doc.text("Qty", 350, tableY + 9);
  doc.text("Rate", 400, tableY + 9);
  doc.text("Amount", 485, tableY + 9);

  tableY += 28;

  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor(DARK);

  let subtotal = 0;

  quotation.quotationItems.forEach(
    (item: any) => {
      subtotal += Number(item.total || 0);

      const productName =
        item.product?.name ||
        item.product?.title ||
        item.product?.productName ||
        "-";

      const description =
        item.description?.trim() ||
        productName;

      doc
        .rect(startX, tableY, 515, 34)
        .strokeColor(BORDER)
        .stroke();

      doc.text(
        productName,
        50,
        tableY + 10,
        {
          width: 120,
        }
      );

      doc.text(
        description,
        180,
        tableY + 10,
        {
          width: 150,
        }
      );

      doc.text(
        String(item.quantity),
        355,
        tableY + 10
      );

      doc.text(
        `₹ ${formatCurrency(item.unitPrice)}`,
        395,
        tableY + 10
      );

      doc.text(
        `₹ ${formatCurrency(item.total)}`,
        475,
        tableY + 10
      );

      tableY += 34;
    }
  );

  tableY += 20;
    // ==================================================
  // SUMMARY
  // ==================================================

  const gstAmount =
    ((subtotal - quotation.discount) *
      quotation.gst) /
    100;

  doc
    .font("Helvetica")
    .fontSize(11)
    .fillColor(DARK);

  doc.text("Subtotal", 360, tableY);

  doc.text(
    `₹ ${formatCurrency(subtotal)}`,
    460,
    tableY,
    {
      width: 90,
      align: "right",
    }
  );

  tableY += 22;

  doc.text("Discount", 360, tableY);

  doc.text(
    `₹ ${formatCurrency(quotation.discount)}`,
    460,
    tableY,
    {
      width: 90,
      align: "right",
    }
  );

  tableY += 22;

  doc.text(
    `GST (${quotation.gst}%)`,
    360,
    tableY
  );

  doc.text(
    `₹ ${formatCurrency(gstAmount)}`,
    460,
    tableY,
    {
      width: 90,
      align: "right",
    }
  );

  tableY += 28;

  doc
    .moveTo(350, tableY)
    .lineTo(555, tableY)
    .strokeColor(BORDER)
    .stroke();

  tableY += 12;

  doc
    .font("Helvetica-Bold")
    .fontSize(14)
    .fillColor(PRIMARY);

  doc.text(
    "Grand Total",
    360,
    tableY
  );

  doc.text(
    `₹ ${formatCurrency(
      quotation.grandTotal
    )}`,
    450,
    tableY,
    {
      width: 100,
      align: "right",
    }
  );

  tableY += 45;

  // ==================================================
  // DELIVERY / VALIDITY / NOTES
  // ==================================================

  doc
    .font("Helvetica-Bold")
    .fontSize(11)
    .fillColor(PRIMARY)
    .text(
      "Delivery Time",
      40,
      tableY
    );

  doc
    .font("Helvetica")
    .fillColor(DARK)
    .text(
      quotation.deliveryTime || "-",
      40,
      tableY + 18
    );

  doc
    .font("Helvetica-Bold")
    .fillColor(PRIMARY)
    .text(
      "Validity",
      240,
      tableY
    );

  doc
    .font("Helvetica")
    .fillColor(DARK)
    .text(
      quotation.validity || "30 Days",
      240,
      tableY + 18
    );

  doc
    .font("Helvetica-Bold")
    .fillColor(PRIMARY)
    .text(
      "Notes",
      40,
      tableY + 55
    );

  doc
    .font("Helvetica")
    .fillColor(DARK)
    .text(
      quotation.notes ||
        "Thank you for choosing NEW APS Interiors.",
      40,
      tableY + 73,
      {
        width: 500,
      }
    );

  // ==================================================
  // TERMS & CONDITIONS
  // ==================================================

  let footerY = tableY + 140;

  if (footerY > 680) {
    doc.addPage();
    footerY = 60;
  }

  doc
    .font("Helvetica-Bold")
    .fontSize(12)
    .fillColor(PRIMARY)
    .text(
      "Terms & Conditions",
      40,
      footerY
    );

  footerY += 22;

  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor(DARK);

  const terms = [
    "• Prices are exclusive to the products and services mentioned in this quotation.",
    "• Any additional work requested after approval will be charged separately.",
    "• Delivery timelines are subject to site readiness and material availability.",
    "• 50% advance payment is required to initiate the project.",
    "• Balance payment shall be made before final handover.",
    "• This quotation is confidential and intended only for the recipient.",
  ];

  terms.forEach((term) => {
    doc.text(term, 50, footerY, {
      width: 500,
    });

    footerY += 18;
  });

  footerY += 25;

  // ==================================================
  // SIGNATURE
  // ==================================================

  doc
    .moveTo(360, footerY)
    .lineTo(540, footerY)
    .strokeColor(PRIMARY)
    .stroke();

  footerY += 8;

  doc
    .font("Helvetica-Bold")
    .fontSize(11)
    .fillColor(PRIMARY)
    .text(
      "Authorized Signatory",
      380,
      footerY
    );

  footerY += 18;

  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor(DARK)
    .text(
      "NEW APS INTERIORS",
      395,
      footerY
    );

  // ==================================================
  // FOOTER
  // ==================================================

  doc
    .fontSize(9)
    .fillColor("#9CA3AF")
    .text(
      "NEW APS INTERIORS | Office Interior | Modular Furniture | Turnkey Solutions",
      40,
      770,
      {
        width: 515,
        align: "center",
      }
    );
};

export default buildQuotationPDF;