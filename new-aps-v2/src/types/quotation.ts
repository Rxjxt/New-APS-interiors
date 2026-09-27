import { Product } from "./product";

export interface QuotationProduct {
  id: number;

  product: Product | null;

  description: string;

  quantity: number;

  price: number;

  gst: number;

  discount: number;

  total: number;
}

export interface QuotationData {
  quotationItems: QuotationProduct[];

  subtotal: number;

  discount: number;

  gst: number;

  grandTotal: number;

  validity: string;

  deliveryTime: string;

  paymentTerms: string;

  notes: string;
}