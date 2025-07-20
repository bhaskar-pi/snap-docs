import React from "react";
import { getButtonVariantStyle } from "./button";
import styles from "./button.module.css";
import type { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?:
    | "primary"
    | "success"
    | "negative"
    | "primary-gradient"
    | "neutral"
    | "secondary";
  isLoading?: boolean;
  loadingText?: string;
  startIcon?: LucideIcon;
  endIcon?: LucideIcon;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  isLoading = false,
  loadingText = "Loading...",
  className = "",
  disabled,
  startIcon: StartIcon,
  endIcon: EndIcon,
  width = '100',
  ...props
}) => {
  const variantStyle = getButtonVariantStyle(variant);
  const stateClass =
    disabled || isLoading
      ? styles["button-disabled"]
      : styles["button-enabled"];

  return (
    <button
      className={`${styles["button-base"]} ${stateClass} w-${width} ${className}`.trim()}
      style={variantStyle}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        loadingText
      ) : (
        <div className="d-flex align-items-center justify-content-center">
          {StartIcon && <StartIcon size={17} className="me-3" />}
          {children}
          {EndIcon && <EndIcon className="ms-3" />}
        </div>
      )}
    </button>
  );
};

export default Button;
