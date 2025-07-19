import React, { useCallback, useState } from "react";
import { UserRoundSearch } from "lucide-react";
import styles from "./send-doc-request.module.css";
import Button from "@components/button";
import { Form } from "@components/form-fields";
import Header from "@components/header";

enum ClientType {
  EXISTING = "existing",
  NEW_CLIENT = "new-client",
}

const ClientInformation: React.FC = () => {
  const [clientType, setClientType] = useState<ClientType>(
    ClientType.NEW_CLIENT
  );

  const renderInputs = useCallback(() => {
    switch (clientType) {
      case ClientType.NEW_CLIENT:
        return (
          <div>
            <Form.Input
              label="Full Name"
              type="text"
              id="fullName"
              placeholder="Enter client's full name"
              required
            />
            <Form.Input
              label="Email Address"
              type="email"
              id="email"
              placeholder="Enter client's email"
              required
            />
          </div>
        );
      case ClientType.EXISTING:
        return (
          <div>
            <Form.Select
              placeholder="Choose an existing client"
              label="Selet Client"
              options={[]}
              value=""
              onChange={() => {}}
            />
          </div>
        );
    }
  }, [clientType]);

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
