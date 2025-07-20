import mongoose, { Schema } from "mongoose";
import { DocumentStatus } from "@enums/document";
import { DocumentRequest } from "@interfaces/documents";

// Sub-schema for a file (to support multiple files per request)
const FileSchema = new Schema(
  {
    name: { type: String, required: true },
    size: { type: Number, required: true },
    url: { type: String, required: true },
    base64: { type: String }, // Optional, typically not stored in DB
  },
  { _id: false } // Prevents creating _id for each file object
);

// Sub-schema for requestedBy (businessId + businessEmail)
const RequestedBySchema = new Schema(
  {
    businessId: { type: String, required: true },
    businessEmail: { type: String, required: true },
  },
  { _id: false }
);

// Main DocumentRequest schema
const DocumentRequestSchema = new Schema<DocumentRequest>(
  {
    files: { type: [FileSchema], default: [] }, // Now supports multiple files

    requestedBy: { type: RequestedBySchema, required: true },

    type: { type: String }, // e.g., "application/pdf", "image/jpeg"
    status: {
      type: String,
      enum: Object.values(DocumentStatus),
      default: DocumentStatus.PENDING,
    },

    uploadedBy: { type: Schema.Types.ObjectId, ref: "Client" },

    uploadedAt: { type: Date },
    modifiedAt: { type: Date },
    approvedAt: { type: Date },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "modifiedAt" },
  }
);

export default mongoose.model("DocumentRequest", DocumentRequestSchema);
