import React from "react";
import Input from "@components/form-fields/input";

interface FieldConfig extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  info?: string;
  error?: string;
  id?: string;
  type?: string;
}

interface Props {
  fields: FieldConfig[];
}

const InputPair: React.FC<Props> = ({ fields }) => {
  return (
    <div className="d-flex gap-3 w-100">
      {fields.map((field, index) => (
        <div key={index} style={{ flex: 1 }}>
          <Input {...field} id={field.id || `input-${index}`} />
        </div>
      ))}
    </div>
  );
};

export default InputPair;
