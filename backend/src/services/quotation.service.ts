import Quotation from "../models/Quotation";

interface QuotationItem {
  product: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

interface PrepareQuotationPayload {
  quotationItems: QuotationItem[];
  discount?: number;
  gst?: number;
  validity?: string;
  deliveryTime?: string;
  notes?: string;
}

export const prepareQuotationService = async (
  quotationId: string,
  payload: PrepareQuotationPayload
) => {
  const quotation = await Quotation.findById(quotationId);

  if (!quotation) {
    throw new Error("Quotation not found");
  }

  let subtotal = 0;

  const quotationItems = payload.quotationItems.map((item) => {
    const total = item.quantity * item.unitPrice;

    subtotal += total;

    return {
      ...item,
      total,
    };
  });

  const discount = payload.discount || 0;
  const gst = payload.gst ?? 18;

  const discountedAmount = subtotal - discount;
  const gstAmount = (discountedAmount * gst) / 100;
  const grandTotal = discountedAmount + gstAmount;

  quotation.quotationItems = quotationItems as any;
  quotation.discount = discount;
  quotation.gst = gst;
  quotation.validity = payload.validity || "30 Days";
  quotation.deliveryTime = payload.deliveryTime || "";
  quotation.notes = payload.notes || "";
  quotation.grandTotal = grandTotal;
  quotation.quotationPrepared = true;

  await quotation.save();

  return quotation;
};