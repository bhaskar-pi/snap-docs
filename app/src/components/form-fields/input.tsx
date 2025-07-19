import React from "react";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  info?: string;
  error?: string;
  id?: string;
  type?: string;
}

const Input: React.FC<InputTextProps> = ({
  label,
  info,
  error,
  id,
  type = "text",
  className = "",
  ...props
}) => {
  return (
    <div className="mb-3 w-100">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className={`form-control ${className}`}
        id={id}
        {...props}
      />
      {info && <div className="form-text">{info}</div>}
      {error && (
        <div className="text-danger mt-1" style={{ fontSize: 13 }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
