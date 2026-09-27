import PDFDocument from "pdfkit";
import { Response } from "express";
import buildQuotationPDF from "./buildQuotationPDF";

const generateQuotationPDF = (
  quotation: any,
  res: Response
) => {
  const doc = new PDFDocument({
    size: "A4",
    margin: 40,
    bufferPages: true,
  });

  res.setHeader(
    "Content-Type",
    "application/pdf"
  );

  res.setHeader(
    "Content-Disposition",
    `attachment; filename=Quotation-${quotation.quotationNumber}.pdf`
  );

  doc.pipe(res);

  buildQuotationPDF(doc, quotation);

  doc.end();
};

export default generateQuotationPDF;