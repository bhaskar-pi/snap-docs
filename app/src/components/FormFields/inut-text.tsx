import React from "react";
import { Field, Input, type InputProps } from "@chakra-ui/react";

interface Props extends InputProps {
  label: string;
  ref?: React.Ref<HTMLInputElement>;
  info?: string;
  error?: string;
}

const InputText: React.FC<Props> = ({
  label,
  info,
  error,
  ref,
  width = "2xl",
  ...props
}) => {
  return (
    <Field.Root required>
      <Field.Label fontWeight="medium" fontSize="sm" w={width}>
        {label}
      </Field.Label>
      <Input ref={ref} {...props} className={`${error ? "input-error" : ""}`} />
      {info && <Field.HelperText>{info}</Field.HelperText>}
    </Field.Root>
  );
};

export default InputText;
