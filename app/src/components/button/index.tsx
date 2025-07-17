import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
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
  let btnClass = "btn w-100 border-0 ";
  let style: React.CSSProperties = {};

  if (variant === "primary") {
    style = {
      background: "linear-gradient(to left, #9181F4 0%, #5038ED 100%)",
      color: "#fff",
      fontWeight: 500,
      ...props.style,
    };
  } else if (variant === "secondary") {
    style = {
      backgroundColor: "var(--primaryL1)",
      color: "#fff",
      fontWeight: 600,
      ...props.style,
    };
  } else if (variant === "outline") {
    style = {
      backgroundColor: "transparent",
      color: "var(--primary)",
      border: "2px solid var(--primary)",
      fontWeight: 600,
      ...props.style,
    };
  }
  if (className) btnClass += ` ${className}`;

  return (
    <button
      className={btnClass}
      style={style}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? loadingText : children}
    </button>
  );
};

export default Button;
