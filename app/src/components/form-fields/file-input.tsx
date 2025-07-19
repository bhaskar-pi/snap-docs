import React from "react";

interface Props {
  label: string;
  placeholder: string;
  value?: string;
  onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  required?: boolean;
  accept?: string;
}

const FileInput: React.FC<Props> = ({
  label,
  placeholder,
  onChange,
  id,
  required,
  accept = "image/*",
}) => {
  return (
    <div className="mb-3 position-relative">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <div style={{ position: "relative" }}>
        <input
          type="file"
          className={`form-control`}
          id={id}
          onChange={onChange}
          required={required}
          aria-label={placeholder}
          accept={accept}
        />
      </div>
    </div>
  );
};

export default FileInput;
