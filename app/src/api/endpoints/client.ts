import { POST } from "@api/requests";
import type { DocumentRequest } from "@custom-types/documents/request";

export const sendDocumentRequestApi = (data: DocumentRequest) => {
  return POST<void>("/client/send-doc-request", data);
};
