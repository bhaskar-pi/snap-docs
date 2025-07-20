import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import styles from "./send-doc-request.module.css";
import Header from "@components/header";
import { FileSearch, X } from "lucide-react";
import { Form } from "@components/form-fields";
import { mapEnumToOptions } from "@helpers/misc";
import { CommonDocuments } from "@enums/documents";
import Button from "@components/button";
import type { DocumentRequest } from "@custom-types/documents/request";

interface Props {
  documents: DocumentRequest["documents"];
  onChangeDocumentReq: (
    prop: string,
    value: DocumentRequest["documents"]
  ) => void;
}

const DocRequirements: React.FC<Props> = ({
  documents,
  onChangeDocumentReq,
}) => {
  const [seletedDocuments, setSelectedDocuments] = useState(documents);
  const [customDocument, setCustomDocument] = useState<string>("");

  const addDocument = (doc: string) => {
    const newDoc = {
      id: uuidV4(),
      name: doc,
    };

    const updatedDocuments = [...seletedDocuments, newDoc];
    setSelectedDocuments(updatedDocuments);
    onChangeDocumentReq("documents", updatedDocuments);
  };

  const removeDocument = (id: string) => {
    const updatedDocuments = seletedDocuments.filter((doc) => doc.id !== id);
    setSelectedDocuments(updatedDocuments);
    onChangeDocumentReq("documents", updatedDocuments);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header name="Document Requirements" icon={FileSearch} />
        <p>Select the documents you need from your client</p>
      </div>
      <div className="my-2">
        <p className={`${styles.selectedDocsHeader} my-2`}>
          {`Selected Documents (${seletedDocuments?.length || 0}):`}
        </p>
        <div className={styles.selectedDocs}>
          {seletedDocuments.map((doc) => (
            <button key={doc.id} className={styles.docTag}>
              {doc.name}
              <X
                size={12}
                className={styles.removeIcon}
                onClick={() => {
                  removeDocument(doc.id);
                }}
              />
            </button>
          ))}
        </div>
      </div>

      <Form.Select
        label="Common Documents"
        options={mapEnumToOptions(CommonDocuments)}
        onChange={(data) => addDocument(data[0])}
        placeholder="Select required document"
        className="mt-2"
      />

      <div className={styles.customDoc}>
        <Form.Input
          label="Add Custom Document"
          placeholder="Enter custom document name"
          className={styles.input}
          value={customDocument}
          onChange={(e) => setCustomDocument(e.target.value)}
        />
        <Button
          variant="primary"
          className={styles.addBtn}
          onClick={() => {
            addDocument(customDocument);
            setCustomDocument("");
          }}
          disabled={!customDocument}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default DocRequirements;
