import React from "react";
import { CircleX, Send, SquarePen } from "lucide-react";
import BusinessLayout from "@components/business-layout";
import Button from "@components/button";
import ClientInformation from "./client-information";
import RequestDetails from "./request-details";
import DocRequirements from "./doc-requirements";
import styles from "./send-doc-request.module.css";

const SendDocRequest: React.FC = () => {
  return (
    <BusinessLayout
      title="Request Documents"
      description="Create a document request and send it to your client."
    >
      <div className={`container`}>
        <div className="row">
          <div className="col-md-8">
            <ClientInformation />
          </div>
          <div className="col-md-4">
            <RequestDetails />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 my-4">
            <DocRequirements />
          </div>
        </div>
        <div className="d-flex justify-content-end gap-3 mt-2">
          <Button
            startIcon={CircleX}
            variant="neutral"
            className={styles.actionBtn}
          >
            Cancel
          </Button>
          <Button
            startIcon={SquarePen}
            variant="secondary"
            className={styles.actionBtn}
          >
            Save as Draft
          </Button>
          <Button
            startIcon={Send}
            variant="primary"
            className={styles.actionBtn}
          >
            Send Request
          </Button>
        </div>
      </div>
    </BusinessLayout>
  );
};

export default SendDocRequest;
