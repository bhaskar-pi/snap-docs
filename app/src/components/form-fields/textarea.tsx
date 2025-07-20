import React from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id?: string;
  rows?: number;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  id,
  rows = 4,
  className = "",
  ...props
}) => {
  return (
    <div className="mb-3 w-100">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <textarea
        id={id}
        className={`form-control ${className}`}
        rows={rows}
        {...props}
        autoComplete="off"
      />
    </div>
  );
};

export default Textarea;
