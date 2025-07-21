import { DocumentStatus } from "enums/document";
import mongoose, { Schema } from "mongoose";
import { FileSchema } from "@schemas/document.schema";
import { DocumentRequest } from "@interfaces/documents";

const DocumentRequestSchema = new Schema<DocumentRequest>(
  {
    documentId: { type: String, required: true },
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
    dueDate: { type: String, required: false },
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

DocumentRequestSchema.index({ documentId: 1 });
DocumentRequestSchema.index({ businessId: 1 });
DocumentRequestSchema.index({ clientId: 1 });
DocumentRequestSchema.index({ status: 1 });
DocumentRequestSchema.index({ createdAt: -1 });

export const DocumentRequestModel = mongoose.model(
  "DocumentRequest",
  DocumentRequestSchema
);
