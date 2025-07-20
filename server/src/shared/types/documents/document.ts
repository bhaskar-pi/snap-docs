import { DocumentStatus } from "@enums/document";
import { AssociatedBusiness, Client } from "@interfaces/client";

export interface File {
  id: string;
  /** Name of the document (e.g., "PAN Card", "Resume") */
  name: string;

  /** Size of the document in bytes */
  size: number;

  /** Public URL to access the document */
  url: string;

  base64?: string;
}

export interface DocumentRequest {
  id: string;

  files?: File[];

  /** Business user who requested this document */
  requestedBy: AssociatedBusiness;

  /** MIME type of the document (e.g., "application/pdf", "image/png") */
  type?: string;

  /** Current status of the document (e.g., Uploaded, Approved, Rejected) */
  status?: DocumentStatus;

  /** Client who uploaded the document */
  uploadedBy?: Client;

  /** Timestamp when the document was uploaded (ISO string) */
  uploadedAt?: string;

  /** Timestamp when the document was approved (ISO string) */
  approvedAt?: string;

  /** Timestamp when the document was created (ISO string) */
  createdAt: string;

  /** Timestamp when the document was last modified (ISO string) */
  modifiedAt?: string;
}
