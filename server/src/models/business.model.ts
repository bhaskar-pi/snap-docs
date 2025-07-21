import mongoose, { Schema } from "mongoose";
import { BusinessType } from "@enums/business";
import { BusinessDocument } from "@interfaces/business";

const schema = new Schema<BusinessDocument>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    businessName: { type: String, required: true },
    businessType: {
      type: String,
      enum: Object.values(BusinessType),
      required: true,
    },
    logo: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

export const BusinessModel = mongoose.model("Business", schema);
