import { HStack } from "@chakra-ui/react";
import InputText from "@components/Form/InputText";

interface FieldConfig {
  label: string;
  placeholder: string;
  type: string;
}

interface Props {
  fields: FieldConfig[];
}

const InputPair: React.FC<Props> = ({ fields }) => {
  return (
    <HStack gap="6" width="full">
      {fields.map((field, index) => (
        <InputText
          key={index}
          label={field.label}
          placeholder={field.placeholder}
          type={field.type}
          width=""
        />
      ))}
    </HStack>
  );
};

export default InputPair;
