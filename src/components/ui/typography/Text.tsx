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
  as: TextElement = "span",
  ...props
}: TextProps) => {
  return (
    <TextElement className={clsx("text-base", className)} {...props}>
      {children}
    </TextElement>
  );
};

export default Text;
