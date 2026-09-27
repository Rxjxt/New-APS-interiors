import mongoose, { Schema, Document } from "mongoose";

export interface IVisitor extends Document {
  ip: string;
  userAgent: string;
  visitedAt: Date;
}

const VisitorSchema = new Schema<IVisitor>(
  {
    ip: {
      type: String,
      required: true,
    },

    userAgent: {
      type: String,
      default: "",
    },

    visitedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IVisitor>(
  "Visitor",
  VisitorSchema
);