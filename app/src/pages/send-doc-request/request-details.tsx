import React from "react";
import { Form } from "@components/form-fields";
import styles from "./send-doc-request.module.css";
import Header from "@components/header";
import { CalendarSearch } from "lucide-react";

const RequestDetails: React.FC = () => {
  return (
    <div className={styles.requestDetailsContainer}>
      <Header name="Request Details" icon={CalendarSearch}/>
      <Form.Input type="date" label="Due Date" id="dueDate" />
      <Form.TextArea
        rows={5}
        label="Custom Message"
        id="customMessage"
        placeholder="Add a personal message to your client..."
      />
    </div>
  );
};

export default RequestDetails;
