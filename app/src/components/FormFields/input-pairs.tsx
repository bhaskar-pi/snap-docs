import { HStack, type InputProps } from "@chakra-ui/react";
import InputText from "@components/FormFields/inut-text";

interface FieldConfig extends InputProps {
  label: string;
}

interface Props {
  fields: FieldConfig[];
}

const InputPair: React.FC<Props> = ({ fields }) => {
  return (
    <HStack gap="6" width="full">
      {fields.map((field, index) => (
        <InputText key={index} width={field.width || ""} {...field} />
      ))}
    </HStack>
  );
};

export default InputPair;
