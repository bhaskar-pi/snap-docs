import React from "react";

interface Props {
  label: string;
  placeholder: string;
  value?: string;
  onChange: (value: string[]) => void;
  options: { label: string; value: string }[];
  id?: string;
  required?: boolean;
  className?: string;
}

const SelectField: React.FC<Props> = ({
  label,
  placeholder,
  options,
  value,
  onChange,
  id,
  required = false,
  className = "",
}) => {
  return (
    <div className={`mb-3 custom-select-wrapper ${className}`}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <select
        className="form-select custom-select"
        id={id}
        value={value || ""}
        onChange={(e) => onChange([e.target.value])}
        required={required}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
