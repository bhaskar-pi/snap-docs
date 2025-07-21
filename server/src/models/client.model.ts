import mongoose, { Schema } from "mongoose";
import { Client } from "@interfaces/client";

const clientSchema = new Schema<Client>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String },
    businesses: [
      {
        businessId: { type: String, required: true },
        businessEmail: { type: String, required: true },
        notes: { type: String },
      },
    ],
  },
  { timestamps: true }
);

clientSchema.index({ email: 1 }, { unique: true });
clientSchema.index({ "businesses.businessId": 1 });
clientSchema.index({ "businesses.businessEmail": 1 });

export const ClientModel = mongoose.model("Client", clientSchema);
