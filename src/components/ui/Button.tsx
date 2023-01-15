import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center focus:outline-none",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
