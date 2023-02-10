import React from "react";
import clsx from "clsx";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
  as: "p" | "span";
}

const Text = ({
  children,
  className,
  as: HeadingElement = "span",
  ...props
}: TextProps) => {
  return (
    <HeadingElement className={clsx("", className)} {...props}>
      {children}
    </HeadingElement>
  );
};

export default Text;
