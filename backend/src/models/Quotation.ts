import mongoose, { Schema, Document } from "mongoose";

export interface IQuotation extends Document {
  quotationNumber: string;

  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;

  products: mongoose.Types.ObjectId[];

  projectLocation: string;
  projectType: string;

  quantity: number;

  requirements: string;

  status: "New" | "Contacted" | "Quoted" | "Won" | "Lost";

  // ===========================
  // Prepared Quotation
  // ===========================

  quotationItems: {
    product: mongoose.Types.ObjectId;
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
  }[];

  discount: number;

  gst: number;

  validity: string;

  deliveryTime: string;

  notes: string;

  grandTotal: number;

  quotationPrepared: boolean;

  sentAt?: Date;

  createdAt: Date;
  updatedAt: Date;
}

const quotationSchema = new Schema<IQuotation>(
  {
    quotationNumber: {
      type: String,
      unique: true,
    },

    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    contactPerson: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
    },

    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    ],

    projectLocation: {
      type: String,
      default: "",
    },

    projectType: {
      type: String,
      default: "",
    },

    quantity: {
      type: Number,
      default: 1,
    },

    requirements: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["New", "Contacted", "Quoted", "Won", "Lost"],
      default: "New",
    },

    // ===========================
    // Prepared Quotation
    // ===========================

    quotationItems: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },

        description: {
          type: String,
          default: "",
        },

        quantity: {
          type: Number,
          default: 1,
        },

        unitPrice: {
          type: Number,
          default: 0,
        },

        total: {
          type: Number,
          default: 0,
        },
      },
    ],

    discount: {
      type: Number,
      default: 0,
    },

    gst: {
      type: Number,
      default: 18,
    },

    validity: {
      type: String,
      default: "30 Days",
    },

    deliveryTime: {
      type: String,
      default: "",
    },

    notes: {
      type: String,
      default: "",
    },

    grandTotal: {
      type: Number,
      default: 0,
    },

    quotationPrepared: {
      type: Boolean,
      default: false,
    },

    sentAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IQuotation>(
  "Quotation",
  quotationSchema
);