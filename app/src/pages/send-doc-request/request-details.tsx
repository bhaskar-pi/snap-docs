import React from "react";
import { Form } from "@components/form-fields";
import styles from "./send-doc-request.module.css";
import Header from "@components/header";
import { CalendarSearch } from "lucide-react";

interface Props {
  dueDate?: string;
  message?: string;
  onChangeDocumentReq: (prop: string, value: string) => void;
}
const RequestDetails: React.FC<Props> = ({
  dueDate,
  message,
  onChangeDocumentReq,
}) => {
  return (
    <div className={styles.requestDetailsContainer}>
      <Header name="Request Details" icon={CalendarSearch} />
      <Form.Input
        required={false}
        className="mt-2"
        type="date"
        label="Due Date"
        id="dueDate"
        value={dueDate}
        onChange={(e) => onChangeDocumentReq("dueDate", e.target.value)}
      />
      <Form.TextArea
        rows={5}
        label="Custom Message"
        id="customMessage"
        placeholder="Add a personal message to your client..."
        value={message}
        onChange={(e) => onChangeDocumentReq("message", e.target.value)}
      />
    </div>
  );
};

export default RequestDetails;
