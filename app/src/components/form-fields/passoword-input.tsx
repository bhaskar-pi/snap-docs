import { EyeIcon, EyeOff } from "lucide-react";
import React, { useState } from "react";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  info?: string;
  id?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  error,
  info,
  id,
  className = "",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-3 position-relative w-100">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={showPassword ? "text" : "password"}
        className={`form-control ${className}`}
        id={id}
        {...props}
        style={{ paddingRight: 40, ...props.style }}
        autoComplete="off"
      />
      <button
        type="button"
        tabIndex={-1}
        className="btn btn-link p-0 position-absolute"
        style={{ top: 40, right: 10, height: 24, width: 28 }}
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? (
          <EyeOff size={19} color="var(--grey1)" />
        ) : (
          <EyeIcon size={19} color="var(--grey1)" />
        )}
      </button>
      {info && <div className="form-text">{info}</div>}
      {error && (
        <div className="text-danger mt-1" style={{ fontSize: 13 }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default PasswordInput;
