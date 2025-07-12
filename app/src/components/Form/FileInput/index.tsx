import React from "react";
import { FileUpload, Input, Text } from "@chakra-ui/react";

interface Props {
  label: string;
  placeholder: string;
  width?: string;
}

const FileInput: React.FC<Props> = ({ label, placeholder, width = "full" }) => {
  return (
    <FileUpload.Root
      gap="1"
      w={width}
      accept={["image/png", "application/pdf", "image/jpeg"]}
    >
      <FileUpload.HiddenInput placeholder={placeholder} />
      <FileUpload.Label>{label}</FileUpload.Label>
      <Input asChild placeholder={placeholder} readOnly>
        <FileUpload.Trigger>
          <Text>{placeholder}</Text>
        </FileUpload.Trigger>
      </Input>
    </FileUpload.Root>
  );
};

export default FileInput;
