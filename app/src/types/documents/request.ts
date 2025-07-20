interface Document {
  id: string;
  name: string;
}

export interface DocumentRequest {
  email: string;
  fullName: string;
  dueDate?: string;
  message?: string;
  documents: Document[];
}
