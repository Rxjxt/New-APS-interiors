import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  slug: string;

  category: mongoose.Types.ObjectId;

  shortDescription: string;
  description: string;

  features: string[];

  specifications: string;

  images: string[];

  brochure?: string;

  featured: boolean;

  isActive: boolean;

  // New Fields
  price: number;
  gst: number;
  unit: string;
}

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    shortDescription: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    features: {
      type: [String],
      default: [],
    },

    specifications: {
      type: String,
      default: "",
    },

    images: {
      type: [String],
      default: [],
    },

    brochure: {
      type: String,
      default: "",
    },

    featured: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
    price: {
  type: Number,
  default: 0,
},

gst: {
  type: Number,
  default: 18,
},

unit: {
  type: String,
  default: "Nos",
},
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IProduct>("Product", productSchema);