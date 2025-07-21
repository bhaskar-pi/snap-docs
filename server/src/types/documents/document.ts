import { Types } from "mongoose";
import { DocumentStatus } from "@enums/document";

export interface File {
  id: string;
  /** Name of the document (e.g., "PAN Card", "Resume") */
  name: string;

  /** Size of the document in bytes */
  size: number;

  /** Public URL to access the document */
  url: string;

  /** MIME type of the document (e.g., "application/pdf", "image/png") */
  type?: string;
}

export interface DocumentRequest {
  documentId: string;

  files: File[];

  /** Business user who requested this document */
  businessId: Types.ObjectId | string;

  /** Client who uploaded the document */
  clientId: Types.ObjectId | string;

  dueDate?: string;

  /** Current status of the document (e.g., Uploaded, Approved, Rejected) */
  status?: DocumentStatus;

  /** Timestamp when the document was approved (ISO string) */
  approvedAt?: string;

  /** Timestamp when the document was created (ISO string) */
  createdAt: string;

  /** Timestamp when the document was last modified (ISO string) */
  updatedAt?: string;
}
