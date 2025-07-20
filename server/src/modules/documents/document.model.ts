import mongoose, { Schema } from "mongoose";
import { DocumentStatus } from "@enums/document";
import { DocumentRequest } from "@interfaces/documents";
import { FileSchema } from "./document.schema";

const DocumentRequestSchema = new Schema<DocumentRequest>(
  {
    businessId: {
      type: Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    },
    clientId: {
      type: Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    files: { type: [FileSchema], default: [] },
    status: {
      type: String,
      enum: Object.values(DocumentStatus),
      default: DocumentStatus.PENDING,
    },
    approvedAt: { type: Date },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "modifiedAt",
    },
  }
);

DocumentRequestSchema.index({ businessId: 1 });
DocumentRequestSchema.index({ clientId: 1 });
DocumentRequestSchema.index({ status: 1 });
DocumentRequestSchema.index({ createdAt: -1 });

export const DocumentRequestModel = mongoose.model(
  "DocumentRequest",
  DocumentRequestSchema
);
