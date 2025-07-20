import React, { useCallback } from "react";
import { UserRoundSearch } from "lucide-react";
import styles from "./send-doc-request.module.css";
import Button from "@components/button";
import { Form } from "@components/form-fields";
import Header from "@components/header";
import { ClientType } from "@enums/clients";

interface Props {
  email: string;
  fullName: string;
  clientType: ClientType;
  setClientType: (value: ClientType) => void;
  onChangeDocumentReq: (prop: string, value: string) => void;
}

const ClientInformation: React.FC<Props> = ({
  email,
  fullName,
  clientType,
  setClientType,
  onChangeDocumentReq,
}) => {
  const renderInputs = useCallback(() => {
    switch (clientType) {
      case ClientType.NEW_CLIENT:
        return (
          <div>
            <Form.Input
              label="Full Name"
              value={fullName}
              type="text"
              id="fullName"
              placeholder="Enter client's full name"
              onChange={(e) => onChangeDocumentReq("fullName", e.target.value)}
              required
            />
            <Form.Input
              value={email}
              label="Email Address"
              type="email"
              id="email"
              placeholder="Enter client's email"
              onChange={(e) => onChangeDocumentReq("email", e.target.value)}
              required
            />
          </div>
        );
      case ClientType.EXISTING:
        return (
          <div>
            <Form.Select
              required
              placeholder="Choose an existing client"
              label="Selet Client"
              options={[]}
              value=""
              onChange={() => {}}
            />
          </div>
        );
    }
  }, [clientType, email, fullName, onChangeDocumentReq]);

  return (
    <div className={styles.clientInfo}>
      <div className={styles.header}>
        <Header name="Client Information" icon={UserRoundSearch} />
        <p>Select an existing client or add a new one</p>
      </div>
      <div className="d-flex gap-3 my-4">
        <Button
          variant={clientType === ClientType.NEW_CLIENT ? "primary" : undefined}
          onClick={() => setClientType(ClientType.NEW_CLIENT)}
        >
          New Client
        </Button>
        <Button
          variant={clientType === ClientType.EXISTING ? "primary" : undefined}
          onClick={() => setClientType(ClientType.EXISTING)}
        >
          Existing Client
        </Button>
      </div>
      {renderInputs()}
    </div>
  );
};

export default ClientInformation;
