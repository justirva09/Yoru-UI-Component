import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
}
const Button: React.FC<ButtonProps> = (props) => {
  const { variant = "primary", children } = props;
  return (
    <button type="button" className={`yoru-button yoru-button--${variant}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
