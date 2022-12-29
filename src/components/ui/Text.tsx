import clsx from "clsx";
import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: "p" | "span";
}

const Text: React.FC<TextProps> = ({
  children,
  className,
  as = "p",
  ...props
}) => {
  if (as === "span") {
    return (
      <span className={clsx("", className)} {...props}>
        {children}
      </span>
    );
  }
  return (
    <p className={clsx("", className)} {...props}>
      {children}
    </p>
  );
};

export default Text;
