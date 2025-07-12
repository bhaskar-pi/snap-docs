import React from "react";
import { Field, Input } from "@chakra-ui/react";

interface Props {
  label: string;
  placeholder: string;
  type: string;
  info?: string;
  width?: string;
}

const InputText: React.FC<Props> = ({
  label,
  placeholder,
  info,
  width = "2xl",
  ...props
}) => {
  return (
    <Field.Root required>
      <Field.Label fontWeight="medium" fontSize="sm" w={width}>
        {label}
      </Field.Label>
      <Input placeholder={placeholder} {...props} />
      {info && <Field.HelperText>{info}</Field.HelperText>}
    </Field.Root>
  );
};

export default InputText;
