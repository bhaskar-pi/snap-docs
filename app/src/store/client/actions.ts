import toast from "react-hot-toast";
import { sendDocumentRequestApi } from "@api/endpoints/client";
import { getErrorMessage } from "@helpers/validation";
import type { DocumentRequest } from "@custom-types/documents/request";
import type { Error } from "@custom-types/misc";
import { useClientStore } from "./store";

export const sendDocumentRequestToClient = async (data: DocumentRequest) => {
  const { setLoading, setError } = useClientStore.getState();

  try {
    setLoading(true);
    setError(undefined);
    await sendDocumentRequestApi(data);
    toast.success("Document request sent to email successfully.");
  } catch (err: unknown) {
    const message =
      getErrorMessage(err as Error) || "Send document request failed";
    setError(message);
  } finally {
    setLoading(false);
  }
};
