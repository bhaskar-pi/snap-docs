import React from "react";
import { CloseButton, FileUpload, Input, InputGroup } from "@chakra-ui/react";

interface Props {
  label: string;
  placeholder: string;
  width?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: React.FC<Props> = ({ label, width = "full", onChange }) => {
  return (
    <FileUpload.Root gap="1" width={width}>
      <FileUpload.HiddenInput onChange={(e) => onChange(e)} />
      <FileUpload.Label>{label}</FileUpload.Label>
      <InputGroup
        endElement={
          <FileUpload.ClearTrigger asChild>
            <CloseButton
              me="-1"
              size="xs"
              variant="plain"
              focusVisibleRing="inside"
              focusRingWidth="2px"
              pointerEvents="auto"
            />
          </FileUpload.ClearTrigger>
        }
      >
        <Input asChild>
          <FileUpload.Trigger>
            <FileUpload.FileText lineClamp={1} />
          </FileUpload.Trigger>
        </Input>
      </InputGroup>
    </FileUpload.Root>
  );
};

export default FileInput;
