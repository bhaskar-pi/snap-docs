import React from "react";
import { getButtonVariantStyle } from "./button";
import styles from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "success" | "negative" | "primary-gradient";
  isLoading?: boolean;
  loadingText?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  isLoading = false,
  loadingText = "Loading...",
  className = "",
  disabled,
  ...props
}) => {
  const variantStyle = getButtonVariantStyle(variant);
  const stateClass =
    disabled || isLoading
      ? styles["button-disabled"]
      : styles["button-enabled"];

  return (
    <button
      className={`${styles['button-base']} ${stateClass} ${className} w-100`.trim()}
      style={variantStyle}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? loadingText : children}
    </button>
  );
};

export default Button;
