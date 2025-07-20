interface Document {
  id: string;
  name: string;
}

/**
 * this is used to define the request from api
 */
export interface ClientDocumentRequest {
  fullName: string;
  email: string;
  phoneNumber?: string;
  documents: Document[];
}
