import React, { useState } from "react";
import { CircleX, Send, SquarePen } from "lucide-react";
import BusinessLayout from "@components/business-layout";
import Button from "@components/button";
import type { DocumentRequest } from "@custom-types/documents/request";
import ClientInformation from "./client-information";
import RequestDetails from "./request-details";
import DocRequirements from "./doc-requirements";
import styles from "./send-doc-request.module.css";
import { ClientType } from "@enums/clients";
import { sendDocumentRequestToClient } from "@store/client/actions";

const initialState: DocumentRequest = {
  fullName: "",
  email: "",
  dueDate: "",
  documents: [],
};

const SendDocRequest: React.FC = () => {
  const [clientType, setClientType] = useState<ClientType>(
    ClientType.NEW_CLIENT
  );
  const [documentRequest, setDocumentRequest] =
    useState<DocumentRequest>(initialState);

  const onChangeDocumentReq = (
    prop: string,
    value: string | DocumentRequest["documents"]
  ) => {
    setDocumentRequest((prev) => ({
      ...prev,
      [prop]: value,
    }));
  };

  const onSendDocumentRequest = async () => {
    await sendDocumentRequestToClient(documentRequest);
  };

  const onSaveDraft = () => {};

  const onSubmit = (prop: "sendRequest" | "saveDraft") => {
    switch (prop) {
      case "sendRequest":
        onSendDocumentRequest();
        break;
      case "saveDraft":
        onSaveDraft();
        break;
    }
  };

  return (
    <BusinessLayout
      title="Request Documents"
      description="Create a document request and send it to your client."
    >
      <form
        className={`container`}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onSubmit("sendRequest");
        }}
      >
        <div className="row">
          <div className="col-md-8">
            <ClientInformation
              fullName={documentRequest.fullName}
              email={documentRequest.email}
              clientType={clientType}
              setClientType={setClientType}
              onChangeDocumentReq={onChangeDocumentReq}
            />
          </div>
          <div className="col-md-4">
            <RequestDetails
              dueDate={documentRequest.dueDate}
              message={documentRequest.message}
              onChangeDocumentReq={onChangeDocumentReq}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 my-4">
            <DocRequirements
              documents={documentRequest.documents}
              onChangeDocumentReq={onChangeDocumentReq}
            />
          </div>
        </div>
        <div className="d-flex justify-content-end gap-3 mt-2">
          <Button
            startIcon={CircleX}
            variant="neutral"
            className={styles.actionBtn}
            width="40"
          >
            Cancel
          </Button>
          <Button
            startIcon={SquarePen}
            variant="secondary"
            className={styles.actionBtn}
            onClick={() => onSubmit("saveDraft")}
            disabled
            width="40"
          >
            Save as Draft
          </Button>
          <Button
            type="submit"
            startIcon={Send}
            variant="primary"
            className={styles.actionBtn}
            width="40"
          >
            Send Request
          </Button>
        </div>
      </form>
    </BusinessLayout>
  );
};

export default SendDocRequest;
