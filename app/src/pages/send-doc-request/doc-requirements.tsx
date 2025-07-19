import React, { useState } from "react";
import styles from "./send-doc-request.module.css";
import Header from "@components/header";
import { FileSearch, X } from "lucide-react";
import { Form } from "@components/form-fields";
import { mapEnumToOptions } from "@helpers/misc";
import { CommonDocuments } from "@enums/documents";
import Button from "@components/button";

const DocRequirements: React.FC = () => {
  const [seletedDocuments, setSelectedDocuments] = useState(["GST", "PAN"]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header name="Document Requirements" icon={FileSearch} />
        <p>Select the documents you need from your client</p>
      </div>
      <div className="mb-2">
        <p className={`${styles.selectedDocsHeader} my-2`}>
          Selected Documents:
        </p>
        <div className={styles.selectedDocs}>
          {seletedDocuments.map((doc, index) => (
            <button key={index} className={styles.docTag}>
              {doc}
              <X size={12} className={styles.removeIcon} onClick={() => {}} />
            </button>
          ))}
        </div>
      </div>

      <Form.Select
        label="Common Documents"
        value=""
        options={mapEnumToOptions(CommonDocuments)}
        onChange={() => {}}
        placeholder="Select required document"
      />

      <div className={styles.customDoc}>
        <Form.Input
          label="Add Custom Document"
          placeholder="Enter custom document name"
          className={styles.input}
        />
        <Button variant="primary" className={styles.addBtn} onClick={() => {}}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default DocRequirements;
