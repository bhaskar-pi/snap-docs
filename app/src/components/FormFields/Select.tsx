import React from "react";
import { Portal, Select, createListCollection } from "@chakra-ui/react";

interface Props {
  label: string;
  placeholder: string;
  value: string[];
  onChange: (value: string[]) => void;
  options: { label: string; value: string }[];
  width?: string;
}
export const SelectField: React.FC<Props> = ({
  label,
  placeholder,
  options,
  value,
  onChange,
  width = "full",
}) => {
  const frameworks = createListCollection({
    items: options,
  });

  return (
    <Select.Root
      collection={frameworks}
      size="sm"
      value={value}
      onValueChange={(e) => onChange(e.value)}
      width={width}
    >
      <Select.HiddenSelect />
      <Select.Label>{label}</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={placeholder} />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default SelectField;
